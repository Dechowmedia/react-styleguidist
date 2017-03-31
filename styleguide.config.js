module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/ts-components/**/*.tsx',
    propsParser: require('react-docgen-typescript').parse,
	webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /(node_modules|bower_components),test/,
                    use: [
                        {loader: 'awesome-typescript-loader'}
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader?importLoaders=1",
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader?importLoaders=1",
                        "postcss-loader",
                        "sass-loader?includePaths[]=./node_modules"
                    ]
                },
                {
                    test: /\.svg$/,
                    use: "raw-loader"
                }

            ],
        },
	},
};
