const STR = 'ababaloremtextinputercomputed     j'

/**
 * Особые случаи:
 */

// const STR = ''
// const STR = 'd'

let set = {}
let answer = 0

for (let i = 0; i <= STR.length - 1; i++) {
	const current = STR[i]
	
	if (!set[current]) set[current] = 0

	set[current]++
	
	if (answer < set[current]) answer = set[current]
}

console.log(set)
console.log(answer)
