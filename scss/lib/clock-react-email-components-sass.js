module.exports = plugin

function plugin () {
  return function (sass) {
    sass.includePaths(__dirname)
  }
}