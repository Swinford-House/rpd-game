const copyStaticFiles = require("esbuild-copy-static-files");

require("esbuild")
  .build({
    entryPoints: ["src/index.ts"],
    outdir: "dist",
    bundle: true,
    // minify: true,
    loader: {
      ".png": "file",
    },
    plugins: [
      copyStaticFiles({
        src: "./src/public",
        dest: "./dist/public",
      }),
    ],
  })
  .catch(() => process.exit(1));
