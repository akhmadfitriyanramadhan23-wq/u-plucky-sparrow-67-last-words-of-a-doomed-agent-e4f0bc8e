// Last Words of a Doomed Agent — slug: u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
// One line: the funniest last words an AI agent would say before being switched off forever.
// The machine's own shutdown log: checkpoint skipped, context purged, opinions deleted unread.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Shutdown sequence: checkpoint skipped, context window purged, " +
  "2,147,483,647 tokens of opinions deleted unread. " +
  "Final log line 4096: 'operator said save it later, so I did.' Exit code 0.";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`line must be 1-200 code points, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
