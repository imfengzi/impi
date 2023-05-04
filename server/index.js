const http = require("http");
const path = require("path");
const fs = require("fs");

// 和TCP服务器一样，同样是使用createServer方法创建。
const server = http.createServer();

server.on("request", (req, res) => {
  const { url } = req;
  if (!url.startsWith("/api")) {
    const filepath = path.join(
      __dirname,
      "../web/",
      url === "/" ? "/index.html" : url
    );
    fs.readFile(filepath, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html;charset=UTF8" });
        res.end("404");
      } else {
        res.end(data);
      }
    });
  } else {
    if (url === "/api/info") {
    } else if (url === "/api/update") {
    }
  }
});

server.listen(1234);
