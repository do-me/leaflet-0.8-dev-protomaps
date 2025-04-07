import assert from "assert";
import { test } from "node:test";
import { linebreak } from "../src/text";

test("trivial", async () => {
  const lines = linebreak("foo", 15);
  assert.deepEqual(lines, ["foo"]);
});
test("no break", async () => {
  const lines = linebreak("'s-Hertogenbosch", 15);
  assert.deepEqual(lines, ["'s-Hertogenbosch"]);
});
test("break before", async () => {
  const lines = linebreak("Idlewild Airport", 15);
  assert.deepEqual(lines, ["Idlewild", "Airport"]);
});
test("break after", async () => {
  const lines = linebreak("Idlewildgenbosch Airport", 15);
  assert.deepEqual(lines, ["Idlewildgenbosch", "Airport"]);
});

test("multiple breaks", async () => {
  const lines = linebreak(
    "Idlewildgenbosch Idlewildgenbosch Idlewildgenbosch",
    15,
  );
  assert.deepEqual(lines, [
    "Idlewildgenbosch",
    "Idlewildgenbosch",
    "Idlewildgenbosch",
  ]);
});

test("very long break", async () => {
  const lines = linebreak(
    "Dorotheenstädtisch-Friedrichswerderscher und Französischer Friedhof",
    15,
  );
  assert.deepEqual(lines, [
    "Dorotheenstädtisch-Friedrichswerderscher",
    "und Französischer",
    "Friedhof",
  ]);
});
