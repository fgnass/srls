var ls = require('../')
var assert = require('assert')

var root = __dirname + '/fixture'

var exp = [
  '/000.txt',
  '/foo.txt',
  '/z.txt',
  '/bar/baz.txt',
  '/baz/boo.txt'
 ]
 .map(function(f) { return root + f })

var files = ls(root)

console.log(JSON.stringify(files, 0, 2))
assert.deepEqual(files, exp)
