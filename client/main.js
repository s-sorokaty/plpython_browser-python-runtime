const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  //database: 'pg_global',
  password: 1234,
  port: 5432,
})
var http = require('http'),
    fs = require('fs');
    const url = require('url');
client.connect()
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(async function(request, response) {  
        const queryObject = url.parse(request.url, true).query;
        if (queryObject.x, queryObject.y, queryObject.z){
            console.log('request to db')
            const res = await client.query(`SELECT * FROM disc(${queryObject.x},${queryObject.y}, ${queryObject.z});`)
            response.writeHeader(200, {"Content-Type": "json"});  
            response.write(JSON.stringify(res.rows[0].disc));  
            response.end();  
        }
        if (request.url == '/'){
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end();  
        }
    }).listen(8000);
});

