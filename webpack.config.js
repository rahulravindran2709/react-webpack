const webpack = require('webpack');
module.exports = {
  /*Entry point file of the application*/
  entry:'./src/main.js',
  /**Path of the output directory and nume of the bundle file**/
  output:{
  	path:'./public/output',
  	filename:'webpack.bundle.js'
  },
  /** List all the loaders and their respective configuration*/
  module:{
  	loaders:[{
  		test:/\.jsx?$/,
  		exclude:/node_modules/,
  		loader:'babel'
  	}
  	]
  }
}