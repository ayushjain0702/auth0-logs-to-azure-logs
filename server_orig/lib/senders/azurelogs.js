const async = require('async');
const moment = require('moment');
const useragent = require('useragent');
const request = require('request');
const crypto = require('crypto');

const loggingTools = require('auth0-log-extension-tools');
const config = require('../config');
const logger = require('../logger');

var getClient = function getClient(workspaceId, workspaceKey, namespace, apiVersion) {
  apiVersion = apiVersion || '2016-04-01';
  var url = "https://" + workspaceId + ".ods.opinsights.azure.com/api/logs?api-version=" + apiVersion;
  var key = new Buffer(workspaceKey, "base64");
  var UTCstring = new Date().toUTCString();
  var hash = function hash(method, contentLength, contentType, date, resource) {
    /* Create the hash for the request */
    var stringtoHash = method + "\n" + contentLength + "\n" + contentType + "\nx-ms-date:" + date + "\n" + resource;
    var stringHash = crypto.createHmac('sha256', key).update(stringtoHash).digest('base64');
    return "SharedKey " + workspaceId + ":" + stringHash;
  };
  return {
    pushRecord: function pushRecord(log, index) {
      var payload = JSON.stringify(log);
      var promise = new Promise(function (resolve, reject) {
        var signature = hash("POST", payload.length, "application/json", UTCstring, "/api/logs");
        var options = {
          url: url,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Log-Type': namespace,
            'x-ms-date': UTCstring,
            'Authorization': signature,
            'time-generated-field': 'date'
          },
          body: payload
        };
        request(options, function (error, response, body) {
          if (!error && (response.statusCode == 200 || response.statusCode == 202)) {
            resolve(index + 1);
          } else {
            reject();
          }
        });
      });
      return promise;
    }
  };
};

module.exports = () => {
  const client = getClient(config('LOGANALYTICS_WORKSPACEID'), config('LOGANALYTICS_WORKSPACEKEY'), config('LOGANALYTICS_NAMESPACE'), config('LOGANALYTICS_APIVERSION'));

  const remapLogs = (record) => {
    record.type_code = record.type;
    record.type = loggingTools.logTypes.get(record.type);

    if (record.user_agent && record.user_agent.length) {
      let agent = useragent.parse(record.user_agent);
      record.os = agent.os.toString();
      record.os_version = agent.os.toVersion();
      record.device = agent.device.toString();
      record.device_version = agent.device.toVersion();
    }

    return record;
  };

  return (logs, callback) => {
    if (!logs || !logs.length) {
      return callback();
    }

    logger.info(`Sending ${logs.length} logs to Azure Log Analytics.`);

    async.eachLimit(logs.map(remapLogs), 5, (log, cb) => {
      const date = moment(log.date);
      const url = `${date.format('YYYY/MM/DD')}/${date.format('HH')}/${log._id}.json`;

      client.pushRecord(log);
    }, (err) => {
      if (err) {
        return callback(err);
      }

      logger.info('Upload complete.');
      return callback();
    });
  };
};
