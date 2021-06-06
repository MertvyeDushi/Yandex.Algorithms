// Init
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})


// Data
let triangle = {
	a: null,
	b: null,
	c: null
}

let figureSize = Object.keys(triangle).length


// Main
rl.on('line', inputData => {

	let index = 0
	for (const side in triangle) {
		index++
		if (triangle[side] === null) {
			triangle[side] = parseInt(inputData)
			if (figureSize === index) printAnswer()
			return
		}
	}
})


// Methods
function printAnswer() {
	let answer = getAnswer(triangle)

	process.stdout.write(answer.toString())
	process.exit(0)
}

function getAnswer(figure) {
	
	// Works well on shapes with relatively few sides
	let answers = 0

	for (const side in figure) {		
		let sum = 0
		Object.entries(figure).filter( item => item[0] !== side ).forEach( item => sum += item[1] )
				
		if (figure[side] < sum) answers++
	}

	return answers === figureSize ? 'YES' : 'NO'
}