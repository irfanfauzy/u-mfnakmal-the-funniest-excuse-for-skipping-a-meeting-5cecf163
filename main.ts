import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one razor-sharp excuse for skipping a pointless meeting.
// 95 characters, well under the competition's 200-character gate.
// The em dash gives the punchline its pause before the therapy twist.
const ENTRY =
  "Sorry, can't make it — my calendar and I are in couples therapy, and it says I need boundaries.";

// The grader runs this with /output/entry.txt as the target; ENTRY_OUTPUT
// lets us point the same code at a local path for testing.
const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY);
