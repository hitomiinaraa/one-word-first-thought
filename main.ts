// One word, first thought: AXOLOTL.
import { mkdir, writeFile } from "node:fs/promises";

const word = "AXOLOTL";

if (!/^\S+$/.test(word)) {
  throw new Error("entry must be exactly one word");
}

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", word);
