

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } =  require('webpack').container;
const path = require('path');

module.exports = {
    mode: 'development',
  entry: path.join(__dirname, "src", "index.js"),
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3002
  },
  output: {
      path: path.resolve(__dirname, "dist")
  },
  module: {
      rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
          }
      ]
  },
  plugins: [
      new ModuleFederationPlugin({
          name: "productlist",
          library: {type: "var", name: "productlist"},
          filename: "remoteEntry.js",
          remotes: {
            productsearch: "productsearch",
            productlist: "productlist",
            productcheckout: "productcheckout"
        },
          exposes: {
              "./pdtlist": "./src/components/pdtlist"
          },
          shared: {
            'react': { singleton: true, eager: true }, 
            'react-dom': { singleton: true, eager: true }
        }
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "src", "index.html")
      })
  ]
}