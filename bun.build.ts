await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: 'dist',
  external: ['analytics'],
  target: 'browser',
});

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: 'dist',
  external: ['analytics'],
  target: 'node',
  naming: '[dir]/lib.node.js',
});
