'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('alexa-skill', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ name: "test" })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'config/webpack.config.js',
      'lib/index.js',
      'lib/test.js',
      'test/index.spec.js',
      'test/test.spec.js',
      '.gitignore',
      'package.json',
      'LICENSE.md',
      'README.md',
      'SAMPLES',
      'schema.json'
    ]);
  });
});
