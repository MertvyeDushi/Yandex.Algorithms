const STR = 'ababaloremtextinputercomputed     j'

let map = {}
let answer = 0

for (let i = 0; i <= STR.length - 1; i++) {
	const current = STR[i]
	
	if (map[current]) {
		map[current]++

		if (answer < map[current]) answer = map[current]

	} else {
		map[current] = 1
	}
}

console.log(map)
console.log(answer)
