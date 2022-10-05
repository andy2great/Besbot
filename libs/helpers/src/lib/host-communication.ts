import * as fs from 'node:fs'

export const speak = (message: string): void => {
  if (fs.existsSync('/hostpipe/pipe')) {
    console.log('test')
    const wstream = fs.createWriteStream('/hostpipe/pipe')
    wstream.write(`echo "${message}" | festival --tts`)
    wstream.close()
  } else {
    console.log('file does not exist')
  }
}
