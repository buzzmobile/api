require("babel-core/register");
require("babel-polyfill");
require("./importDataFeedTest").default()
.then(() => console.log("done")) //eslint-disable-line no-console
.catch(e => console.error(e)); //eslint-disable-line no-console