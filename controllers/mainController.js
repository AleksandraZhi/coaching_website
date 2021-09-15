const path = require('path')
const fs = require('fs')

const pathToRU = path.join(__dirname, '../public/txt/ru/')
const fileContents = fs.readFileSync(
	path.join(pathToRU, 'index/navigation.txt'),
	'utf-8'
)

exports.RUmainPage = (req, res) => {
	res.status(200).render('new-look-main', { fileContents })
}

exports.RUpaymentsPage = (req, res) => {
	res.status(200).render('new-look-payments')
}
