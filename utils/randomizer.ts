export const getRandomInt = (max: number, min: number = 0) => {
	return Math.floor(Math.random() * (max - min) + min)
}

const punctuation = ['.', ',', ';', ' -', '?', '!']
const words = [
	'meow',
	'meow-meow',
	'mrrrya',
	'MEOW',
	'nya',
	'prrrr',
	'miaow',
	'mrruh',
	'prrrup',
	'mrow',
	'hiss',
	'hissssss',
	'mew',
	'mrrowow',
	'mrrrp',
	'kikikiki',
	'meep',
	'purrr',
	'miaow',
]

const getRandomWord = (capitalized: boolean, last: boolean) => {
	const wordIndex = getRandomInt(words.length)
	const addPunctuation = last || getRandomInt(5) > 3
	let punctuationIndex = -1
	if (addPunctuation) {
		punctuationIndex = getRandomInt(punctuation.length)
	}

	let word = words[wordIndex]
	if (capitalized) {
		word = word.charAt(0).toUpperCase() + word.slice(1)
	}
	const punct = addPunctuation ? punctuation[punctuationIndex] : ''

	return { word: word + punct, capitalized: ['.', '!', '?'].includes(punct) }
}

export const generateText = () => {
	const length = getRandomInt(50, 25)
	const sentence = new Array(length).fill('')

	let nextCapitalized = true
	sentence.forEach((_, index) => {
		const { word, capitalized } = getRandomWord(
			nextCapitalized,
			index === sentence.length - 1,
		)
		nextCapitalized = capitalized
		sentence[index] = word
	})

	return sentence.join(' ')
}
