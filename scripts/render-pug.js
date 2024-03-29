'use strict';
const fs = require('fs');
const upath = require('upath');
const pug = require('pug');
const sh = require('shelljs');
const prettier = require('prettier');

module.exports = async function renderPug(filePath) {
    const destPath = filePath.replace(/src\/pug\//, 'public/').replace(/\.pug$/, '.html');
    const srcPath = upath.resolve(upath.dirname(__filename), '../src');

    console.log(`### INFO: Rendering ${filePath} to ${destPath}`);
    
    // Render the Pug file
    const renderPromise = new Promise((resolve, reject) => {
        pug.renderFile(filePath, {
            doctype: 'html',
            filename: filePath,
            basedir: srcPath
        }, (err, html) => {
            if (err) {
                reject(err);
            } else {
                resolve(html);
            }
        });
    });

    try {
        const html = await renderPromise; // Wait for the Promise to resolve
        const destPathDirname = upath.dirname(destPath);
        
        if (!sh.test('-e', destPathDirname)) {
            sh.mkdir('-p', destPathDirname);
        }

        // Prettify the HTML and write to the file
        const prettified = prettier.format(html, {
            printWidth: 1000,
            tabWidth: 4,
            singleQuote: true,
            proseWrap: 'preserve',
            endOfLine: 'lf',
            parser: 'html',
            htmlWhitespaceSensitivity: 'ignore'
        });

        fs.writeFileSync(destPath, prettified);
    } catch (error) {
        console.error('Error rendering Pug file:', error);
    }
};
