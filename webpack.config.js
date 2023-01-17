
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "./static/js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react'] }
                }
            },
            {
                test: /\.(sass|css|scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ]
    }
};