const color = require("colors");
const babel = require("babel-polyfill");


module.exports = function(request, response, next) {
    const keys = ["method", "hostname", "ip", "body", "cookies", "parameters", "path", "protocol", "route", "url"];

    keys.forEach(function(key) {
        const data = request[key];

        if (data) {
            if (typeof data === "object") {
                if (Object.keys(data)) {
                    console.log(color.red(`The request ${ key } object has these properties: `));
                    for (const prop of babel.Object.entries(data)) {
                        console.log(prop);
                        console.log(color.blue(`\t${ prop[0] } => ${ data[prop]}`));
                    }
                }
            } else {
                console.log(color.gray(` The request ${ key } is ${ data}`));
            }
        }

    });

    console.log("logging", request.hostname);

    if (request.hostname) {
        console.log(color.red(`Route information is ${ request.hostname }`));
    }

    next();
}