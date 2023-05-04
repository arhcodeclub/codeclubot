const dotenv = require('dotenv');
// https://github.com/indexzero/nconf
const nconf = require("nconf");

const bot = require("./bot.js");
const deploy = require("./deploy-commands.js");

dotenv.config();
// initialize nconf to use argv over environment variables
nconf.argv().env();

switch (nconf.get("ROLE")) {
    case "REFRESH":
        deploy.run();
        break;
    case "BOT":
        bot.run();
        break;
    default:
        console.log("No `ROLE` parameter given, terminating");
        break;
}