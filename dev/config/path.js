/** DEV 路径配置 */
const path = require("path");

const CWD = process.cwd();
const appPath = path.resolve(CWD, "src");
const npmPath = path.resolve(CWD, "node_modules");
const resolveApp = relativePath => path.resolve(appPath, relativePath);
const rootApp = relativePath => path.resolve(CWD, relativePath);
module.exports = {
    envConfigFile: resolveApp("env.config.json"),
    appPackageJson: rootApp("package.json")
}