# Auth0 - Logs to Azure Log Analytics

## This extension is build using auth0-logs-to-provider repo. 
The monorepo can be found here: [auth0-logs-to-provider](https://github.com/auth0-extensions/auth0-logs-to-provider)

## How to build the extension
Clone the Monorepo of auth0. 
```sh
git clone https://github.com/auth0-extensions/auth0-logs-to-provider
```
Copy the files from src directory to the cloned directory. 

Execute the following commands to get the build.js file. 

```sh
npm install
node build.js --p azurelogs
```

This will create a file in dist/azurelogs directory. Copy the file to build directory in the current project (auth0-logs-to-azure-logs), and rename the file to build.js
