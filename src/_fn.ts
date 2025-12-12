import lodash from "lodash"
import * as remeda from "remeda"

export const fn = new (class {
  // lodash
  pull = lodash.pull
  xor = lodash.xor

  // remeda
  pipe = remeda.pipe
  sum = remeda.sum()

  // custom
  wrap(value, min, max) {
    const range = max - min
    return ((value - min) % range + range) % range + min
  }
})
