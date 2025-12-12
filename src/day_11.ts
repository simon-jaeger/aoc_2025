import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_11.txt", "utf8")).trim().split("\n")

const nodes = input.map((x) => {
  const [id, ...outputs] = x.replace(":", "").split(" ")
  return { id, outputs }
})

let solution = 0
function traverse(n: (typeof nodes)[number]) {
  if (n.outputs.includes("out")) return solution++
  for (const o of n.outputs) traverse(nodes.find((x) => x.id === o))
}
traverse(nodes.find((x) => x.id === "you"))
console.log("solution:", solution)
