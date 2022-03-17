const fs = require("fs");
const readline = require("readline");

const readStream = fs.createReadStream("./smallerAccess.log", "utf8");
const writeStream1 = fs.createWriteStream("./89.123.1.41_requests.log");
const writeStream2 = fs.createWriteStream("./34.48.240.111_requests.log");

const rl = readline.createInterface({
    input: readStream,
    terminal: true,
});

rl.on("line", (line) => {
    if (line.includes("89.123.1.41")) {
        writeStream1.write(line + "\n");
    }

    if (line.includes("34.48.240.111")) {
        writeStream2.write(line + "\n");
    }
});

// const LOG = "smallerAccess.log";
// const ip1 = "89.123.1.41";
// const ip2 = "34.48.240.111";
// var chunks = "";

// const writeHandler = (ip, regExp) => {
//     let outputFile = `%${ip}%_requests.log`;
//     let regMatchArr = chunks.match(regExp);
//     let found = regMatchArr.join(` \n`);
//     let writeStream = fs.createWriteStream(outputFile, {
//         encoding: "utf8",
//         flags: "a",
//     });
//     return writeStream.write(found);
// };

// const readStream = fs.createReadStream(LOG, {
//     encoding: "utf8",
//     highWaterMark: 64,
// });

// readStream.on("data", (chunk) => {
//     chunks += chunk;
// });
// readStream.on("end", () => {
//     if (chunks.includes(ip1)) {
//         let regExp = /^89\.123\.1\.41.*$/gm;
//         writeHandler(ip1, regExp);
//     }
//     if (chunks.includes(ip2)) {
//         let regExp = /^34\.48\.240\.111.*$/gm;
//         writeHandler(ip2, regExp);
//     }
//     console.log("Read successfully");
// });
// readStream.on("error", (error) => {
//     console.error(error);
// });

// console.log("There's something going on while the big file is processing...");
// setTimeout(() => {
//     console.log("Like that, for example.");
// }, 3000);
// setTimeout(() => {
//     console.log("Or like that. You see, server is keep on going.");
// }, 5000);
