import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_07.txt", "utf8")).trim().split("\n")

const splits = new Set<string>()
const grid = input.map((x) => x.split(""))
for (let y = 0; y < grid.length - 1; y++) {
  for (let x = 0; x < grid[y].length; x++) {
    var cell = grid[y][x]
    if (cell === "S" || cell === "|") {
      const next = grid[y + 1][x]
      if (next === "^") {
        splits.add([y, x].join("-"))
        grid[y + 1][x - 1] = "|"
        grid[y + 1][x + 1] = "|"
      } else if (next === ".") {
        grid[y + 1][x] = "|"
      }
    }
  }
  console.log(grid[y].join(""))
}

console.log("solution:", splits.size)
