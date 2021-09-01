// Init
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})


// Data
const formatData = data => {
	let formatedData = data.toString().trim().split(' ')
	if (rowsCount === 2) formatedData = formatedData.map( item => item = parseInt(item) )
	return formatedData
}

const dataObject = {
	t_room: null,
	t_cond: null,
	mode: null
}

const modes = {
	freeze: 'freeze',
	heat: 'heat',
	auto: 'auto',
	fan: 'fan'
}

let rowsCount = 2


// Main
rl.on('line', inputData => {
	if (rowsCount === 2) {
		[ dataObject.t_room, dataObject.t_cond ] = formatData(inputData)
		rowsCount--
	}
	else if (rowsCount === 1) {
		[ dataObject.mode ] = formatData(inputData)
		rowsCount--
	}
	if (rowsCount === 0) {
		let answer = getAnswer()
		process.stdout.write(answer.toString())
		process.exit(0)
	}
})


// Methods
function getAnswer() {
	if (dataObject.mode === modes.freeze) return Math.min(dataObject.t_room, dataObject.t_cond)
	else if (dataObject.mode === modes.heat) return Math.max(dataObject.t_room, dataObject.t_cond)
	else if (dataObject.mode === modes.auto) return dataObject.t_cond
	else if (dataObject.mode === modes.fan) return dataObject.t_room
}