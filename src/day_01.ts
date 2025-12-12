import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_01.txt", "utf8")).trim().split("\n")

let value = 50
let solution = 0
for (const x of input) {
  const step = +x.replace("L", "-").replace("R", "+")
  value = fn.wrap(value + step, 0, 100)
  if (value === 0) solution++
}
console.log("solution:", solution)
