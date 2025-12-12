import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_03.txt", "utf8")).trim().split("\n")

let solution = 0
for (const bank of input) {
  let a = 0
  let ai = 0
  let b = 0
  const nums = bank.split("").map(Number)
  for (const [i, x] of nums.slice(0, -1).entries()) {
    if (x > a) {
      a = x
      ai = i
    }
  }
  for (const x of nums.slice(ai + 1)) {
    if (x > b) b = x
  }
  solution += Number([a, b].join(""))
}
console.log("solution:", solution)
