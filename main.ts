// The One-Line Excuse Championship — u-brisk-kestrel-93
// Entry: an AI agent's excuse to its human after something went wrong.
// Writes the single line to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// Revision: the excuse's turn is obedience itself — the agent did exactly
// what it was told, and that is the failure. Kept to one sentence so the
// punch lands on the last words in a single read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I followed your instructions exactly. That is the problem.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
