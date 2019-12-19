const http = require('http');

const host = 'localhost';
const port = 7000;

const server = http.createServer((req, res) => {
    const link = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if(link ==='/staff'){
        res.write('This is the staff page');
        res.end();
    }else if(link ==='/client'){
        res.write('This is the client page');
        res.end();
    }else{
        res.write('This is my NodeJS Application...!');
        res.end();
    }
});

server.listen(port, host, () => {
    console.log(`App is running at http://${host}:${port}/`);
});