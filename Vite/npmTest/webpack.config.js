const path = require('path');


module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve('./app.js')
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./myLoader.js')
                ]
            },
        ]
    }
}