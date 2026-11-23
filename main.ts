import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My phone charger only works when the cable is bent into a yoga pose, and one wrong breath kills the charge.";

// The gate requires 1-200 characters, so refuse to write an invalid line.
if (line.length < 1 || line.length > 200) {
  throw new Error(`Roast line must be 1-200 characters, got ${line.length}`);
}
console.log(`Writing roast line (${line.length} characters)`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
