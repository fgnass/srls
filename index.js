var fs = require('fs')
var join = require('path').join

module.exports = function(root) {
  var result = []
  var queue = [ '/' ]

  while (queue.length) {
    var d = queue.shift()

    fs.readdirSync(join(root, d)).sort().forEach(function(entry) {
      var f = join(root, d, entry)
      var stat = fs.statSync(f)

      if (stat.isDirectory()) queue.push(join(d, entry))
      else result.push(f)
    })
  }

  return result
}
