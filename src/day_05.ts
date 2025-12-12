import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_05.txt", "utf8")).trim().split("\n")

let solution = 0
const ranges = input.slice(0, input.indexOf("")).map((x) => x.split("-").map(Number))
const ids = input.slice(input.indexOf("") + 1).map(Number)

for (const id of ids) {
  for (const r of ranges) {
    if (id >= r[0] && id <= r[1]) {
      solution++
      break
    }
  }
}

console.log("solution:", solution)
