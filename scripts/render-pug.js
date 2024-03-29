'use strict';
const fs = require('fs');
const upath = require('upath');
const pug = require('pug');
const sh = require('shelljs');

module.exports = function renderPug(filePath) {
    const destPath = filePath.replace(/src\/pug\//, 'public/').replace(/\.pug$/, '.html');

    console.log(`### INFO: Rendering ${filePath} to ${destPath}`);

    try {
        const html = pug.renderFile(filePath);

        const destPathDirname = upath.dirname(destPath);
        if (!sh.test('-e', destPathDirname)) {
            sh.mkdir('-p', destPathDirname);
        }

        fs.writeFileSync(destPath, html, 'utf-8');
    } catch (error) {
        console.error('Error rendering Pug file:', error);
    }
};
