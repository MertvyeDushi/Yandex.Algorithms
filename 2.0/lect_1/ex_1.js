const STR = 'ababaloremtextinputercomputed     j'

/**
 * Особые случаи:
 */

// const STR = ''
// const STR = 'd'

let set = {}
let answer = ''
let answerCount = 0

for (let i = 0; i <= STR.length - 1; i++) {
	const current = STR[i]
	
	if (!set[current]) {
		set[current] = 0
	}

	set[current]++
	
	if (answerCount < set[current]) {
		answerCount = set[current]
		answer = current === ' ' ? '%20' : current
	}
}

console.log(set)
console.log(answer)
