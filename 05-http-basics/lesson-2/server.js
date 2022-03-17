const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const fs = require("fs");
const host = "localhost";
const port = 8000;
const dirname = "files";
const user = {
    id: 123,
    username: "testuser",
    password: "qwerty",
};

var files = "";

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.route("/get")
    .get((req, res) => {
        try {
            res.setHeader("Success", 200);
            const fileList = fs.readdirSync(dirname);
            fileList.forEach((file) => {
                files += `${file} `;
            });
            res.end(files);
            files = "";
        } catch (error) {
            res.setHeader("Internal-Server-Error", 500);
            res.send("Internal server error");
        }
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.route("/delete")
    .delete((req, res) => {
        if (
            req.cookies.userId === `${user.id}` &&
            req.cookies.authorized === "true"
        ) {
            let filename = Object.keys(req.body);
            fs.unlink(`files/${req.body[filename[0]]}`, (error) => {
                if (error) {
                    res.setHeader("Internal-Server-Error", 500);
                    res.send("Internal server error");
                    return;
                } else {
                    res.send("File deleted successfully");
                }
            });
        } else {
            res.setHeader("Bad-Credentials", 400);
            res.send("Bad credentials");
        }
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.route("/post")
    .post((req, res) => {
        if (
            req.cookies.userId === `${user.id}` &&
            req.cookies.authorized === "true"
        ) {
            let keys = Object.keys(req.body);
            fs.writeFile(
                `files/${req.body[keys[0]]}`,
                `${req.body[keys[1]]}`,
                (error) => {
                    if (error) {
                        res.setHeader("Internal-Server-Error", 500);
                        res.send("Internal server error");
                        return;
                    } else {
                        res.send("File created successfully");
                    }
                }
            );
        } else {
            res.setHeader("Bad-Credentials", 400);
            res.send("Bad credentials");
        }
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.route("/redirect")
    .get((req, res) => {
        res.redirect(301, "/redirected");
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.route("/redirected")
    .get((req, res) => {
        res.setHeader("Moved-permanently-to-redirected", 301);
        res.send("Moved permanently to /redirected");
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.route("/auth")
    .post((req, res) => {
        let keys = Object.keys(req.body);
        if (
            req.body[keys[0]] === user.username &&
            req.body[keys[1]] === user.password
        ) {
            res.cookie("userId", user.id, {
                maxAge: 172800000,
                path: "/",
            });
            res.cookie("authorized", true, {
                maxAge: 172800000,
                path: "/",
            });
            res.send("Authenticated succesfully");
        } else {
            res.setHeader("Bad-Credentials", 400);
            res.send("Bad credentials");
        }
    })
    .all((req, res) => {
        res.setHeader("Method-Not-Allowed", 405);
        res.send("HTTP method not allowed");
    });

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
