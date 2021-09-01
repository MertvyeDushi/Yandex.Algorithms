const STR = 'ababaloremtextinputercomputed     j'

let set = {}
let answer = 0

for (let i = 0; i <= STR.length - 1; i++) {
	const current = STR[i]
	
	if (set[current]) {
		set[current]++

		if (answer < set[current]) answer = set[current]

	} else {
		set[current] = 1
	}
}

console.log(set)
console.log(answer)
