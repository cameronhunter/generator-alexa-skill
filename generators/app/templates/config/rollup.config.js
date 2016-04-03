import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import inject from 'rollup-plugin-inject';
import path from 'path';

export default {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  dest: path.join(__dirname, '..', 'build', 'index.js'),
  moduleId: 'handler',
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'stage-1'],
      plugins: ['transform-decorators-legacy']
    }),
    inject({
      exclude: 'node_modules/**',
      fetch: 'isomorphic-fetch',
      Promise: 'bluebird'
    }),
    uglify()
  ]
};
