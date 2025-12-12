import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_02.txt", "utf8")).trim().split(",")

const invalidIds = []
for (const range of input) {
  const [start, end] = range.split("-").map(Number)
  for (let i = start; i <= end; i++) {
    const id = String(i)
    if (id.slice(0, id.length / 2) === id.slice(id.length / 2)) invalidIds.push(+id)
  }
}
console.log("solution:", fn.sum(invalidIds))
