/* eslint-disable no-undef */
const childProcess = require("child_process");

/**
 * @param {string} command A shell command to execute
 * @return {Promise<string>} A promise that resolve to the output of the shell command, or an error
 */
export function execute(command) {
    return new Promise(function(resolve, reject) {
    /**
     * @param {Error} error An error triggered during the execution of the childProcess.exec command
     * @param {string|Buffer} standardOutput The result of the shell command execution
     * @param {string|Buffer} standardError The error resulting of the shell command execution
     */
    childProcess.exec(command, function(error, standardOutput, standardError) {
        if (error) {
        reject(error);
        }

        if (standardError) {
        reject(standardError);
        }
        resolve(standardOutput);
    });
    });
}

