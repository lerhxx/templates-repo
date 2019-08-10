const fse = require("fs-extra");

const paths = require("./config/path");
const argv = require("optimist").argv;

async function initENV() {
    try {
        let envConfig = {};
        await fse.ensureFile(paths.envConfigFile);
        envConfig.env = argv.ENV || process.env.NODE_ENV || "production";
        await fse.writeJSON(paths.envConfigFile, envConfig);
    } catch(error) {
        console.log("[  FAILED TO INIT ENV CONFIG FILE  ]");
    }
}

try {
    // 判断当前环境
    initENV();
} catch(error) {
    console.trace(error);
}
