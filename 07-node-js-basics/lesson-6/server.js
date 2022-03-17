const http = require("http");
const path = require("path");
const io = require("socket.io");
const fs = require("fs");

const user = require("./colorGen");

const host = "localhost";
const port = 8000;

var online = 0;

const app = http.createServer((req, res) => {
    if (req.method === "GET") {
        const filePath = path.join(__dirname, "index.html");
        readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    } else if (req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data += chunk;
        });
        req.on("end", () => {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            res.writeHead(200, { "Content-Type": "json" });
            res.end(data);
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

class Client {
    constructor() {
        this.name = user.colorGen();
        this.color = `#${user.colorGen()}`;
    }
}

const socket = io(app);

socket.on("connection", (socket) => {
    console.log("New connection");
    let user = new Client();
    online++;
    socket.broadcast.emit("CLIENT_CONNECTED", {
        msg: `User ${user.name} has connected`,
        online: online,
        color: user.color,
    });

    socket.on("CLIENT_MSG", (data) => {
        socket.emit("SERVER_MSG", {
            user: user.name,
            color: user.color,
            msg: data.msg.split("").reverse().join(""),
        });
        socket.broadcast.emit("SERVER_MSG", {
            user: user.name,
            color: user.color,
            msg: data.msg.split("").reverse().join(""),
        });
    });

    socket.on("disconnect", () => {
        console.log("The user has left");
        online--;
        socket.broadcast.emit("CLIENT_DISCONNECTED", {
            msg: `Alas, the user referred as ${user.name} hath left. The nerve!`,
            online: online,
        });
    });
});

app.listen(port, host);
