#!/usr/bin/env node

// Оставлю ниже код, который я делал на экспрессе чтобы вы посмотрели. Был бы признателен, если бы вы смогли
// подсказать, как реализовать аналогичную логику, но тем методом как я писал.

const http = require("http");
const path = require("path");
const fs = require("fs");

const host = "localhost";
const port = 8000;

const indexHtmlPath = path.join(__dirname, "/index.html");
const isFile = (path) => {
    return fs.lstatSync(path).isFile();
};

const writeHandler = (res, path, header, data) => {
    try {
        fs.writeFileSync(path, header);
    } catch (error) {
        console.error(err);
    }
    try {
        fs.appendFileSync(path, data);
    } catch (error) {
        console.error(err);
    }
    res.writeHead(200, {
        "Content-Type": "text/html",
    });
    let readStream = fs.createReadStream(indexHtmlPath);
    readStream.pipe(res);
};

http.createServer((req, res) => {
    if (req.method === "GET") {
        let data = "";
        let fileData = "";
        let header = `<h2>You are browsing ${req.url}</h2>`;
        const fullPath = path.join(process.cwd(), req.url);
        if (!fs.existsSync(fullPath)) {
            return res.end("Nothing here.");
        }
        if (isFile(fullPath)) {
            try {
                fileData = fs.readFileSync(fullPath, "utf-8");
            } catch (err) {
                console.error(err);
            }
            writeHandler(res, indexHtmlPath, header, fileData);
        } else {
            fs.readdirSync(fullPath).forEach((file) => {
                const filePath = path.join(req.url, file);
                data += `<p><a href="${filePath}">${file}</a></p> \n`;
            });
            writeHandler(res, indexHtmlPath, header, data);
        }
    } else {
        res.end("The method is not allowed.");
    }
}).listen(port, host);

// const express = require("express");
// const fs = require("fs");
// const yargs = require("yargs");
// const path = require("path");
// const host = "localhost";
// const port = 5555;

// const app = express();

// const options = yargs.positional("p", {
//     describe: "Directory path",
//     default: process.cwd(),
// }).argv;

// class ListItem {
//     constructor(path, fileName) {
//         this.path = path;
//         this.fileName = fileName;
//     }
//     get isDir() {
//         return lstatSync(this.path).isDirectory();
//     }
// }

// const convertUrl = (url) => {
//     let tempLink = url.replace(/\\/g, "/");
//     let webUrl = tempLink.replace(":", "");
//     return webUrl;
// };

// app.route("/").get((req, res) => {
//     res.redirect(301, `/${convertUrl(options.p)}`);
// });

// app.route(`/${convertUrl(options.p)}`)
//     .get((req, res) => {
//         try {
//             const fileList = fs.readdirSync(options.p);
//             const items = fileList.map(
//                 (fileName) =>
//                     new ListItem(path.join(options.p, fileName), fileName)
//             );
// fs.writeFileSync(
//     "lesson-5/index.html",
//     `<h2>You are browsing stuff in ${options.p}</h2>`
// );
//             items.forEach((element) => {
// fs.appendFileSync(
//     "lesson-5/index.html",
//     `<p><a href="${element.fileName}">${element.fileName}</a></p> \n`
// );
//             });
//             res.sendFile(path.join(__dirname, "/index.html"));
//         } catch (error) {
//             res.setHeader("Internal-Server-Error", 500);
//             res.send("Internal server error");
//         }
//     })
//     .all((req, res) => {
//         res.setHeader("Method-Not-Allowed", 405);
//         res.send("HTTP method not allowed");
//     });

// app.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
