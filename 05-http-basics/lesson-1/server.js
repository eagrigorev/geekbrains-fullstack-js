const http = require("http");
const fs = require("fs");

const host = "localhost";
const port = 8000;
const dirname = "lesson-1/files";
var files = "";

const responseHandler = (res, code) => {
    switch (code) {
        case 200: {
            res.writeHead(200);
            res.end("Success");
            break;
        }
        case 301: {
            res.writeHead(301);
            res.end("Moved permanently to /redirected");
            break;
        }
        case 405: {
            res.writeHead(405);
            res.end("HTTP method not allowed");
            break;
        }
        case 500: {
            res.writeHead(500);
            res.end("Internal server error");
            break;
        }
        default: {
            res.writeHead(404);
            res.end("Nothing here. Specify url."); // Не знал как отработать дефолт кейс, поэтому просто поставил заглушку.
        }
    }
};

const requestListener = (req, res) => {
    switch (req.url) {
        case "/get": {
            if (req.method === "GET") {
                try {
                    res.writeHead(200);
                    const fileList = fs.readdirSync(dirname);
                    fileList.forEach((file) => {
                        files += `${file} `; // Не понял как сделать чтобы запятая отображалась после всех элементов кроме последнего, поэтому вывел без неё.
                    });
                    res.end(files);
                    files = ""; // Ресет переменной чтобы при последовательных одинаковых запросах не возникало дублирование строки выдачи.
                } catch (error) {
                    responseHandler(res, 500); // Эту часть с отлавливанием ошибки пришлось гуглить, потому что Node.js пока не изучали.
                }
            } else {
                responseHandler(res, 405);
            }
            break;
        }
        case "/delete": {
            if (req.method === "DELETE") {
                responseHandler(res, 200);
            } else {
                responseHandler(res, 405);
            }
            break;
        }
        case "/post": {
            if (req.method === "POST") {
                responseHandler(res, 200);
            } else {
                responseHandler(res, 405);
            }
            break;
        }
        case "/redirect": {
            if (req.method === "GET") {
                responseHandler(res, 301);
            } else {
                responseHandler(res, 405);
            }
            break;
        }
        case "/redirected": {
            if (req.method === "GET") {
                responseHandler(res, 200);
            } else {
                responseHandler(res, 405);
            }
            break;
        }
        default: {
            responseHandler(res);
        }
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
