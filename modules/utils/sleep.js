/**
 * A little promise wrapper around setTimeout
 * @param  {Number} ms millis to sleep
 * @return {Promise}   resolves after millis elapse
 */
export default function sleep (ms) {
  return new Promise(resolve => setTimeout(res, ms))
}
