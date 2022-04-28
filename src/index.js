import { FileNotFoundException } from '#src/Exceptions/FileNotFoundException'

export async function main() {
	const prettyException = await new FileNotFoundException('file.txt').prettify()

	console.log(prettyException)
}

if (process.argv[2] === 'main') {
	main()
}
