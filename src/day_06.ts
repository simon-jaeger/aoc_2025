import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_06.txt", "utf8")).trim().split("\n")

const rows = input.map((x) => x.trim().split(/\s+/))
const cols = rows[0].map(() => [])
for (const r of rows) r.forEach((x, i) => cols[i].push(x))
const results = cols.map((c) => {
  const o = c.pop()
  return c.map(Number).reduce((a, v) => o === "+" ? a + v : a * v)
})

console.log("solution:", fn.sum(results))
