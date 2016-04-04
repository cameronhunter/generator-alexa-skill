import test from 'ava';
import path from 'path';
import generator from 'yeoman-test';
import assert from 'yeoman-assert';

test.before(() => {
  return new Promise((resolve, reject) => {
    generator.run(path.join(__dirname, '..', 'generators', 'app'))
             .withOptions({ skipInstall: true })
             .withPrompts({ name: 'test' })
             .on('end', resolve)
             .on('error', reject);
  });
});

test('Generator', () => {
  assert.file([
    'bin/deploy',
    'bin/utterances',
    'config/lambda.config.js',
    'config/webpack.config.babel.js',
    'model/dictionary.json',
    'model/schema.json',
    'model/UTTERANCES',
    'src/index.js',
    'src/test.js',
    'test/index-test.js',
    '.babelrc',
    '.eslintrc.json',
    '.gitignore',
    '.travis.yml',
    'package.json',
    'LICENSE.md',
    'README.md'
  ]);
});
