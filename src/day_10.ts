import { readFile } from "node:fs/promises"
import { fn } from "./_fn.ts"

const input = (await readFile("./day_10.txt", "utf8")).trim().split("\n")

const machines = input.map((x) => {
  x = x.replace(/\s{.+/, "").replace(/[()[\]]/g, "")
  const [light, ...buttons] = x.split(" ")
  const target = parseInt(light.replaceAll(".", "0").replaceAll("#", "1"), 2)
  const nums = buttons.map((indexes) => {
    let bits = "0".repeat(light.length).split("")
    for (const i of indexes) bits[i] = "1"
    return parseInt(bits.join(""), 2)
  })
  // console.log(
  //   target.toString(2).padStart(light.length, "0"),
  //   nums.map((x) => x.toString(2).padStart(light.length, "0")),
  // )
  return { target, nums }
})

let solution = 0
for (const m of machines) {
  const queue = [0]
  const visited = new Map()
  visited.set(0, 0)
  while (queue.length > 0) {
    const current = queue.shift()
    const steps = visited.get(current)
    for (const n of m.nums) {
      const next = current ^ n
      if (visited.has(next)) continue
      const nextSteps = steps + 1
      visited.set(next, nextSteps)
      if (next === m.target) {
        solution += nextSteps
        break
      }
      queue.push(next)
    }
  }
}
console.log("solution:", solution)
