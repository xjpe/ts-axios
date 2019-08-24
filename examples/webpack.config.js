const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname. dir)
    })
}