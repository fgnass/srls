[![Build Status](https://travis-ci.org/fgnass/srls.svg?branch=master)](https://travis-ci.org/fgnass/srls)

### synchronous recursive ls

This package provides just one super simple synchronous `ls -r` implementation
with the following characteristics:

* returns a flat array of absolute paths
* contains no entries for directories, only their files
* files are always listed before subdirectory contents
* within each directory entries are sorted by their unicode value

### Example

```js
var ls = require('srls');
var files = ls('/tmp/test/');
```

Given the following directory structure in `/tmp/test`:
```
.
|-- 000.txt
|-- bar
|   `-- baz.txt
|-- baz
|   `-- boo.txt
|-- foo.txt
`-- z.txt```

… the code above will yield the following result:
```
[
  "/tmp/test/000.txt",
  "/tmp/test/foo.txt",
  "/tmp/test/z.txt",
  "/tmp/test/bar/baz.txt",
  "/tmp/test/baz/boo.txt"
]
```


### License
MIT
