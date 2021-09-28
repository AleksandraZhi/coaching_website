const path = require('path')
const fs = require('fs')

const pathToRU = path.join(__dirname, '../public/txt/ru/')

const readMyFile = function (address) {
	const fileContent = fs.readFileSync(path.join(pathToRU, address), 'utf-8')
	return fileContent
}

const navigationFileContents = readMyFile('index/navigation.txt')
const aboutCoachContents = readMyFile('index/about_coach.txt')
const possibilitiesContents = readMyFile('index/possibilities.txt')
const reviewsContents = readMyFile('index/reviews.txt')

exports.RUmainPage = (req, res) => {
	res.status(200).render('new-look-main', {
		navigationFileContents,
		aboutCoachContents,
		possibilitiesContents,
		reviewsContents,
	})
}

exports.RUpaymentsPage = (req, res) => {
	res.status(200).render('new-look-payments')
}
