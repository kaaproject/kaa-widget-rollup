import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import replace from '@rollup/plugin-replace';
import postcss from "rollup-plugin-postcss";
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';
import svg from 'rollup-plugin-svg';
import copy from 'rollup-plugin-copy-watch';
import { terser } from 'rollup-plugin-terser';

const packageJson = require("./package.json");
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "system",
      sourcemap: true,
      external: ['@kaaiot/services', 'react']
    },
  ],
  plugins: [
    json(),
    svg(),
    resolve(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    !production && serve({
      contentBase: 'dist',
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }),
    !production && copy({
      watch: ['widget.json', 'src/assets/*'],
      targets: [
        { src: 'widget.json', dest: 'dist' },
        { src: 'src/assets/*', dest: 'dist' }
      ]
    }),
    production && terser()
  ]
};
