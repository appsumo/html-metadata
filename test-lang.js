var scrape = require('./index');

scrape({
  uri: 'http://www.dicasodonto.com.br/2013/02/22/cuidados-com-anestesia-odontologica/',
  headers: {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36'
  }
}, function(err, meta) {
  console.log(err);
  console.log(meta);
});
