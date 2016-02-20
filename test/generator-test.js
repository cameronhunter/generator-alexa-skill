import test from 'ava';
import path from 'path';
import { assert, test as generator } from 'yeoman-generator';

test.before.cb(t => {
  generator.run(path.join(__dirname, '..', 'generators', 'app'))
           .withOptions({ skipInstall: true })
           .withPrompts({ name: 'test' })
           .on('end', t.end);
});

test('Generator', () => {
  assert.file([
    'bin/deploy',
    'config/lambda.config.js',
    'config/webpack.config.js',
    'src/index.js',
    'test/index-test.js',
    '.babelrc',
    '.gitignore',
    '.travis.yml',
    'package.json',
    'LICENSE.md',
    'README.md',
    'SAMPLES',
    'schema.json'
  ]);
});
