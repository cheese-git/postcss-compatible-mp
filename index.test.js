/*
 * @Author: cheese
 * @Date: 2021-03-28 17:28:49
 * @LastEditTime: 2021-03-28 18:26:17
 */
const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}



it('transform `.`', async () => {
  await run('.top-0\\.5 { top: 0.125rem; }', '.top-0p5 { top: 0.125rem; }', { })
})

it('transform `/`', async () => {
  await run('.w-1\\/2 { width: 50%; }', '.w-1of2 { width: 50%; }', { })
})


