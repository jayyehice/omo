
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname,
        filename: "./static/js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react'] }
                }
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
        ]
    }
};