import test from 'blue-tape'
import sleep from '../sleep'

test('sleep', async function (t) {
  let start = Date.now()
  await sleep(20)
  let end = Date.now()
  t.ok(end - start >= 20, 'takes about 20 seconds')
})
