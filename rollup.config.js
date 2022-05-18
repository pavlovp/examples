import path from 'path';
import fs from 'fs';
import babel from '@rollup/plugin-babel';
import cjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const dir = __dirname;

const config = {
  input: [
    path.join(dir, 'src', 'main.tsx')
  ],
  external: ['react', 'react-dom'],
  output: [
    {
      dir: path.join(dir, 'dist'),
      format: 'system',
      chunkFileNames: (chunkInfo) => {
       return '[name].js';
      },
      
    },
  ],
  preserveEntrySignatures: false,
  plugins: [
        copy({
            targets: [{ src: 'remote/hello.system.js', dest: 'dist/remote' }]
        }),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
    }),
    cjs(),
    
    html({
      title: 'rollup app',
      template: ()=> fs.readFileSync(path.join(dir, '.', 'index.html')).toString()
       .replace(
            'main.tsx', 'main.js')
    }),
    serve('dist'),
    livereload('dist'),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
      configFile: `${dir}/.babelrc`,
      exclude: ['node_modules/**/*'],
    }),
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
};

export default config;
