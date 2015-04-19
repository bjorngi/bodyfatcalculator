var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'webpack/hot/dev-server',
            './app/app.jsx'
        ]
    },
    output: {
        path: './build',
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: [
            'app', 
            'assets', 
            'node_modules',
        'vendor/pickadate/lib'],
        extensions: ['', '.js', '.jsx', '.css', '.ttf']
    },

    module: {
        loaders: [{ 
            test: /\.(jsx|js)?$/, 
            loaders: ['jsx-loader?harmony'] 
        },{
            test: /\.css$/,
            loader: "style-loader!css-loader" 
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000&mimetype=image/png"
        }, {
            test: /\.eot$/,
            loader: 'file'
        }, { 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    }
    
};
