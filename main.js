var fs = require('fs');
var text2png = require('text2png');

const dir = './dist/';

for (let index = 0; index < 10; index++) {
	fs.writeFileSync(dir + index + '.png', text2png('NOLOSSCLUB Ticket #' + index, { color: 'blue' }));
}
