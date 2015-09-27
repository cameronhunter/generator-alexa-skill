'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the amazing ' + chalk.red('Alexa Skill') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your skill name',
      required: true
    }];

    this.prompt(prompts, function(props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var data = {
        name: this.props.name,
        fileName: _.kebabCase(this.props.name),
        className: _.capitalize(_.camelCase(this.props.name))
      };

      this.fs.copy(this.templatePath('_gitignore'), this.destinationPath('.gitignore'));
      this.fs.copyTpl(this.templatePath('LICENSE.md'), this.destinationPath('LICENSE.md'), data);
      this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), data);
      this.fs.copyTpl(this.templatePath('README.md'), this.destinationPath('README.md'), data);
      this.fs.copy(this.templatePath('SAMPLES'), this.destinationPath('SAMPLES'));
      this.fs.copy(this.templatePath('schema.json'), this.destinationPath('schema.json'));

      // Create in generated 'config' dir
      this.fs.copyTpl(this.templatePath('config/webpack.config.js'), this.destinationPath('config/webpack.config.js'), data);

      // Create in generated 'lib' dir
      this.fs.copyTpl(this.templatePath('lib/index.js'), this.destinationPath('lib/index.js'), data);
      this.fs.copyTpl(this.templatePath('lib/skill.js'), this.destinationPath('lib/' + data.fileName + '.js'), data);

      // Create in generated 'test' dir
      this.fs.copyTpl(this.templatePath('test/index.spec.js'), this.destinationPath('test/index.spec.js'), data);
      this.fs.copyTpl(this.templatePath('test/skill.spec.js'), this.destinationPath('test/' + data.fileName + '.spec.js'), data);
    }
  },

  install: function () {
    this.npmInstall();
  }
});
