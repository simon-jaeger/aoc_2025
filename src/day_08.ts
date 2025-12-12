import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_08.txt", "utf8")).trim().split("\n")

function dist(a: number[], b: number[]) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2)
}

const points = input.map((x) => x.split(",").map(Number))
let edges = [] as { a: number[], b: number[], d: number }[]
while (points.length) {
  const a = points.pop()
  for (const b of points) {
    edges.push({ a, b, d: dist(a, b) })
  }
}
edges = edges.toSorted((a, b) => a.d - b.d)
edges = edges.slice(0, 1000)
let circuits = [] as Set<string>[]
for (const e of edges) {
  const a = String(e.a)
  const b = String(e.b)
  const circuitA = circuits.find((x) => x.has(a))
  const circuitB = circuits.find((x) => x.has(b))
  if (circuitA && circuitB && (circuitA !== circuitB)) {
    for (const point of circuitB) circuitA.add(point) // merge
    fn.pull(circuits, circuitB)
  } else if (circuitA) circuitA.add(b)
  else if (circuitB) circuitB.add(a)
  else circuits.push(new Set([a, b]))
}

let solution: any = circuits.toSorted((a, b) => b.size - a.size).slice(0, 3)
solution = solution.map((x) => x.size).reduce((a, v) => a * v)
console.log("solution:", solution)
