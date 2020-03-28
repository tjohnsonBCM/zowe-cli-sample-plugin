"use strict";

const fs = require("fs-extra");
const path = require("path");

const doge = require("dogescript").default;
const glob = require("fast-glob");

for (const inFile of glob.sync("src/**/*.djs")) {
    const outFile = `lib/${inFile.slice(4, inFile.length - 4)}.js`;
    const outDir = path.dirname(outFile);
    fs.ensureDirSync(outDir);
    fs.writeFileSync(outFile, doge(fs.readFileSync(inFile).toString(), true));
}
