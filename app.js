
const http = require("http");
const fs = require("fs");

const list = {
    '01': 'part1.txt',
    '02': 'part2.txt',
    '03': 'part3.txt',
    '04': 'part4.txt'
};

http.createServer((req, res) => {
    // передача текстових файлів
    for (let i in list) {
        if (i === req.url.substr(1)) {
            let content = fs.readFileSync(list[i], 'utf8');
            console.log(content);
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(content);   
        }
    }
    // передача картинки
    if (req.url === "/smile.jpg") {
      res.statusCode = 200;  
      res.setHeader("Content-Type", "image/jpeg");  
      fs.readFile("./smile.jpg", (err, image) => {
        res.end(image);
      });
    }
  }).listen(3000);