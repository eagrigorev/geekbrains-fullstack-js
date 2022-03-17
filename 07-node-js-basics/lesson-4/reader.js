#!/usr/bin/env node

const fs = require("fs/promises");
const { lstatSync } = require("fs");
const inquirer = require("inquirer");
const yargs = require("yargs");
const path = require("path");

const options = yargs
    .positional("p", {
        describe: "Directory path",
        default: process.cwd(),
    })
    .positional("s", {
        describe: "Search pattern",
        default: "",
    }).argv;

class ListItem {
    constructor(path, fileName) {
        this.path = path;
        this.fileName = fileName;
    }
    get isDir() {
        return lstatSync(this.path).isDirectory();
    }
}

const read = async () => {
    const list = await fs.readdir(options.p);
    const items = list.map(
        (fileName) => new ListItem(path.join(options.p, fileName), fileName)
    );
    const item = await inquirer
        .prompt([
            {
                name: "fileName",
                type: "list",
                message: `Current directory: ${options.p}`,
                choices: items.map((item) => ({
                    name: item.fileName,
                    value: item,
                })),
            },
        ])
        .then((answer) => answer.fileName);
    if (item.isDir) {
        options.p = item.path;
        return await read();
    } else {
        const data = await fs.readFile(item.path, "utf-8");
        if (options.s == "") console.log(data);
        else {
            const regExp = new RegExp(options.s, "igm");
            console.log(data.match(regExp));
        }
    }
};

read();
