const spawn = require('child_process').spawn;
const errStream = spawn('tail', ['-f', './logfiles/err.log']);
const request = require('request');

errStream.stdout.on('data', data => {
    console.log(`DATA : ${data}`);
});


const parseError = error => {

};

const searchSO = ({language, sort, intitle, question}) => new Promise((resolve, reject) => {
    let uri = `https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow&order=desc`;
    uri += language ? `&tagged=${language}` : ``;
    uri += sort     ? `&sort=${sort}`       : `&sort=votes`;
    uri += intitle  ? `&intitle=${intitle}` : ``;
    uri += `&q=${encodeURI(question)}`;

    request({uri, gzip: true}, (err, res, body) => err
	    ? reject(err)
	    : resolve(JSON.parse(body))
	   );
});


searchSO({
    language: 'javascript',
    intitle: 'eaddrinuse',
    question: 'Error: EADDRINUSE, Address already in use'
}).then(json => {
    console.log(json);
    console.log(json.length);
});
