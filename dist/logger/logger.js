/* eslint-disable @typescript-eslint/no-unsafe-argument */
import chalk from 'chalk';
export var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["Debug"] = 0] = "Debug";
    LogLevels[LogLevels["Info"] = 1] = "Info";
    LogLevels[LogLevels["Warn"] = 2] = "Warn";
    LogLevels[LogLevels["Error"] = 3] = "Error";
    LogLevels[LogLevels["Fatal"] = 4] = "Fatal";
})(LogLevels || (LogLevels = {}));
const prefixes = new Map([
    [LogLevels.Debug, 'DEBUG'],
    [LogLevels.Info, 'INFO'],
    [LogLevels.Warn, 'WARN'],
    [LogLevels.Error, 'ERROR'],
    [LogLevels.Fatal, 'FATAL'],
]);
const noColor = (msg) => msg;
const colorFunctions = new Map([
    [LogLevels.Debug, chalk.gray],
    [LogLevels.Info, chalk.cyan],
    [LogLevels.Warn, chalk.yellow],
    [LogLevels.Error, (str) => chalk.red(str)],
    [LogLevels.Fatal, (str) => chalk.red.bold.italic(str)],
]);
export function createLogger({ logLevel = LogLevels.Info, name } = {}) {
    function log(level, ...args) {
        if (level < logLevel)
            return;
        let color = colorFunctions.get(level);
        if (!color)
            color = noColor;
        const date = new Date();
        const log = [
            `[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]`,
            color(prefixes.get(level) ?? 'DEBUG'),
            name ? `${name} >` : '>',
            ...args,
        ];
        switch (level) {
            case LogLevels.Debug:
                return console.log(...log);
            case LogLevels.Info:
                return console.info(...log);
            case LogLevels.Warn:
                return console.warn(...log);
            case LogLevels.Error:
                return console.error(...log);
            case LogLevels.Fatal:
                return console.error(...log);
            default:
                return console.log(...log);
        }
    }
    function setLevel(level) {
        logLevel = level;
    }
    function debug(...args) {
        log(LogLevels.Debug, ...args);
    }
    function info(...args) {
        log(LogLevels.Info, ...args);
    }
    function warn(...args) {
        log(LogLevels.Warn, ...args);
    }
    function error(...args) {
        log(LogLevels.Error, ...args);
    }
    function fatal(...args) {
        log(LogLevels.Fatal, ...args);
    }
    return {
        log,
        setLevel,
        debug,
        info,
        warn,
        error,
        fatal,
    };
}
export const logger = createLogger({ name: 'Main' });
export default logger;
