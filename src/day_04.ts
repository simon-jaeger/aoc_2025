import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_04.txt", "utf8")).trim().split("\n")

let solution = 0
const grid = input.map((row) => row.split(""))
grid.forEach((row, y) => {
  row.forEach((cell, x) => {
    if (cell === ".") return
    const e = grid[y][x + 1]
    const se = grid[y + 1]?.[x + 1]
    const s = grid[y + 1]?.[x]
    const sw = grid[y + 1]?.[x - 1]
    const w = grid[y][x - 1]
    const nw = grid[y - 1]?.[x - 1]
    const n = grid[y - 1]?.[x]
    const ne = grid[y - 1]?.[x + 1]
    const rolls = [e, se, s, sw, w, nw, n, ne].filter((x) => x === "@")
    if (rolls.length < 4) solution++
  })
})
console.log("solution:", solution)
