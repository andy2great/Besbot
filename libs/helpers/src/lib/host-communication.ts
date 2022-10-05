import * as fs from 'node:fs'

export const speak = (message: string): void => {
  console.log('message', message)
  if (fs.existsSync('/hostpipe/pipe')) {
    const wstream = fs.createWriteStream('/hostpipe/pipe')
    wstream.write(`echo "${message}" | festival --tts`)
    wstream.close()
  } else {
    console.log('file does not exist')
  }
}
