/**
 * Module dependencies.
 */

var fs = require('fs');
var path = require('path');
var pkg = require('./../../../package.json');
var util = require('util');
var yeoman = require('yeoman-generator');

/**
 * Module exports.
 */

module.exports = Generator;

/**
 * Generator constructor.
 *
 * @api public
 */

function Generator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('name', { type: String, required: false });
  if (!this.name) {
    throw new Error('Package needs a name, e.g., "yo alexa-skill name"');
  }
  this.genVersion = pkg.version;

  this.sourceRoot(path.join(__dirname, '..', '..', 'templates'));

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });
}

util.inherits(Generator, yeoman.generators.Base);

/**
 * Setup the default directory structure
 *
 * @api public
 */

Generator.prototype.setupEnv = function setupEnv() {
  this.mkdir('lib');
  this.mkdir('test');
};

/**
 * Generate the standard project files
 *
 * Copy over basic files that don't require any app-specific data.
 * Other files are templates that require app-specific data.
 *
 * @api public
 */

Generator.prototype.projectFiles = function projectFiles() {
  // Create in generated root
  this.copy('gitignore', '.gitignore');
  this.template('LICENSE.md', 'LICENSE.md');
  this.template('package.json', 'package.json');
  this.template('README.md', 'README.md');
  this.copy('webpack.config.js', 'webpack.config.js');

  // Create in generated 'app' dir
  this.template('lib/skill.js', 'lib/' + this.name + '.js');
  this.template('test/skill.spec.js', 'test/' + this.name + '.spec.js');
};

Generator.name = 'Alexa Skill package';
