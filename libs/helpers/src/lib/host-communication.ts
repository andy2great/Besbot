import * as fs from 'fs';
const pipePath = "/hostpipe/pipe";

export function speak(message: string): void {
  const wstream = fs.createWriteStream(pipePath)
  wstream.write(`echo "${message}" | festival --tts`)
  wstream.close()
}