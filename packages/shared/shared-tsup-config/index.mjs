export default {
  entryPoints: ['src/index.ts'],
  entry: ['src/*.tsx', 'src/*.ts'],
  outDir: 'lib',
  clean: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  treeshake: true,
};