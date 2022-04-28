import { Exception } from '@secjs/utils'

export class FileNotFoundException extends Exception {
	/**
   * Creates a new instance of FileNotFoundException.
   *
   * @param {string} filePath
   * @return {FileNotFoundException}
   */
  constructor(filePath) {
    const content = `The file ${filePath} does not exist.`
    const status = 404
    const code = 'E_NOT_FOUND_FILE'
    const help = `Try using File.create("${filePath}") method to create the file first.`

    super(content, status, code, help)
  }
}
