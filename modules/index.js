import { hostname } from 'os'
import sleep from './utils/sleep'

async function runApp () {
  console.log('time for bed', hostname())
  await sleep(200)
  console.log('😴')
  await sleep(1000)
  console.log('💤')
}

runApp()
