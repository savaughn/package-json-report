'use strict'

var assert = require('assert')
var path = require('path')
var nixt = require('nixt')

describe('readme', function () {
  it('writes markdown to stdout', function (done) {
    nixt()
      .run('./index.js test/fixtures/global/package.json')
      .stdout(/# sample/)
      .end(done)
  })

  it('fails with message if package.json is invalid', function (done) {
    nixt()
      .run('./index.js test/fixtures/invalid/package.json')
      .stderr(/Invalid JSON file/)
      .end(done)
  })

  describe('installation', function () {
    it('adds --global if preferGlobal is true', function (done) {
      nixt()
        .run('./index.js test/fixtures/global/package.json')
        .stdout(/npm install sample --global/)
        .end(done)
    })

    it('adds --save if preferGlobal is falsy', function (done) {
      nixt()
        .run('./index.js test/fixtures/local/package.json')
        .stdout(/npm install sample --save/)
        .end(done)
    })

    it('does not write installation instructions for private: true', function (done) {
      nixt()
        .expect(function (result) {
          if (result.stdout.match('installation')) {
            return new Error('installation instructions should not be displayed for private: true packages')
          }
        })
        .run('./index.js test/fixtures/private/package.json')
        .end(done)
    })

    it('does not write installation instructions for license: private', function (done) {
      nixt()
        .expect(function (result) {
          if (result.stdout.match('Installation')) {
            return new Error('installation instructions should not be displayed for license: private packages')
          }
        })
        .run('./index.js test/fixtures/private-license/package.json')
        .end(done)
    })
  })

  describe('usage', function () {
    it('injects example.js into output', function (done) {
      nixt()
        .run('./index.js test/fixtures/example-js/package.json')
        .stdout(/hello from javascript/)
        .end(done)
    })

    it('injects example.sh into output', function (done) {
      nixt()
        .run('./index.js test/fixtures/example-sh/package.json')
        .stdout(/hello from bash/)
        .end(done)
    })

    it('replaces relative require path with package name', function (done) {
      nixt()
        .run('./index.js test/fixtures/example-js/package.json')
        .stdout(/var sample = require\("sample"\)/)
        .end(done)
    })
  })

  describe('deps', function () {
    it('prints out dependency metadata', function (done) {
      nixt()
        .run('./index.js test/fixtures/deps/package.json')
        .stdout(/minimist/)
        .end(done)
    })

    it('prints out devDependency metadata', function (done) {
      nixt()
        .run('./index.js test/fixtures/deps/package.json')
        .stdout(/mocha/)
        .end(done)
    })

    it('uses ghub.io for dependency links', function (done) {
      var packagePath = path.join(__dirname, '/fixtures/deps/node_modules/minimist/package.json')
      assert(require(packagePath).repository.url.match('git://github.com/substack'))
      nixt()
        .run('./index.js test/fixtures/deps/package.json')
        .stdout(/https:\/\/ghub\.io\/minimist/)
        .end(done)
    })
  })

  describe('--travis flag', function () {
    it('adds badge markdown', function (done) {
      nixt()
        .run('./index.js test/fixtures/local/package.json --travis')
        .stdout(/travis-ci/)
        .end(done)
    })

    it('fails if repository.url is missing', function (done) {
      nixt()
        .run('./index.js test/fixtures/missing-travis-stuff/package.json --travis')
        .stderr(/must be a GitHub repository URL/)
        .end(done)
    })
  })

  describe('--tests flag', function () {
    it("can't easily be tested without creating an infinitely recursing test.")
  })

  describe('--template flag', function () {
    it('returns template', function (done) {
      nixt()
        .run('./index.js test/fixtures/local/package.json --template test/fixtures/templates/test.md')
        .stdout(/test.md/)
        .end(done)
    })
    it('returns default template', function (done) {
      nixt()
      .run('./index.js test/fixtures/global/package.json --template')
      .stdout(/# sample/)
        .end(done)
    })
  })
  describe('--report flag', function () {
    it('returns report template', function (done) {
      nixt()
        .run('./index.js test/fixtures/local/package.json --report')
        .stdout('## Dependencies\n' +
        '\n' +
        '<table>\n' +
        '    <thead>\n' +
        '        <tr>\n' +
        '            <th>Package Name</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Installed Version</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Latest Version</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Is Latest Installed</th>\n' +
        '            <th>Package Description</th>\n' +
        '        </tr>\n' +
        '    </thead>\n' +
        '    <tbody>\n' +
        '    </tbody>\n' +
        '</table>\n' +
        '\n' +
        '## Dev Dependencies\n' +
        '\n' +
        '<table>\n' +
        '    <thead>\n' +
        '        <tr>\n' +
        '            <th>Package Name</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Installed Version</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Latest Version</th>\n' +
        '            <th style="text-align: center; vertical-align: middle;">Is Latest Installed</th>\n' +
        '            <th>Package Description</th>\n' +
        '        </tr>\n' +
        '    </thead>\n' +
        '    <tbody>\n' +
        '    </tbody>\n' +
        '</table>')
        .end(done)
    })
  })
})
