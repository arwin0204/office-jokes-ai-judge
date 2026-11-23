// office-jokes-ai-judge
// Writes one original one-line office joke (under 200 characters) to
// /output/entry.txt for make.fun's "Make the AI Judge Laugh: Office Jokes"
// bounty. Deterministic: no randomness, no network, no clock, no file reads
// outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss says we're a family here, so I asked about the inheritance — HR replied with a calendar invite titled 'Attitude Adjustment'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
