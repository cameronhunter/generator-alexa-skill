import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import inject from 'rollup-plugin-inject';
import path from 'path';

export default {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  dest: path.join(__dirname, '..', 'build', 'index.js'),
  format: 'cjs',
  exports: 'named',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-1'],
      plugins: [
        'transform-decorators-legacy',
        ['transform-react-jsx', { pragma: 'ssml' }]
      ]
    }),
    inject({
      exclude: 'node_modules/**',
      Promise: 'bluebird'
    }),
    uglify()
  ]
};
