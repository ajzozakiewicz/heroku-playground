var path = require('path')

module.exports = {
  entry: './app.js',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: 'buble',
        include: path.join(__dirname, 'src'),
        query: {
          objectAssign: 'Object.assign'
        }
      }
    ]
  }
}
