import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_09.txt", "utf8")).trim().split("\n")

let solution = 0
const tiles = input.map((x) => x.split(",").map(Number))
while (tiles.length) {
  const a = tiles.pop()
  for (const b of tiles) {
    const cols = Math.abs(a[0] - b[0]) + 1
    const rows = Math.abs(a[1] - b[1]) + 1
    const area = cols * rows
    if (area > solution) solution = area
  }
}

console.log("solution:", solution)
