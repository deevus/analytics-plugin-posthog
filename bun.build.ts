await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  external: ["analytics"],
  target: "browser",
  format: "esm",
});

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "dist",
  external: ["analytics"],
  target: "node",
  format: "esm",
  naming: "[dir]/lib.node.js",
});
