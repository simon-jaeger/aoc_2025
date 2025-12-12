import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_12.txt", "utf8")).trim().split("\n\n")

let solution = 0
const regions = input.at(6).split("\n")
for (const r of regions) {
  const [w, h] = r.split(":")[0].split("x").map(Number)
  const list = r.split(": ")[1].split(" ").map(Number)
  const area = w * h
  const boxes = list.reduce((a, v) => a + v * 9, 0) // each shape is 3*3 -> area of 9
  // console.log(w, h, list, area, boxes)
  if (boxes <= area) solution++
}

console.log("solution:", solution)
