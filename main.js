var fs = require('fs');
var text2png = require('text2png');

const dir = './dist/';

for (let index = 0; index < 10; index++) {
	fs.writeFileSync(`${dir + index}.png`, text2png(`NO LOSS CLUB \nTicket \n#${index}`, {  font: '80px Futura', color: 'teal',  lineSpacing: 80, padding: 50}));

	fs.writeFileSync(`${dir + index}`, text2png(`NO LOSS CLUB \nTicket \n#${index}`, {  font: '80px Futura', color: 'teal',  lineSpacing: 80, padding: 50}));
}
