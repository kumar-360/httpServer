const http = require("http");
const hostname = "localhost";
const port = "3000";
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url === "/translations") {
    const translations = { 1: "one", 2: "two" };
    res.setHeader("Content-Type", "application/json");
    const x = JSON.stringify(translations);
    res.write(x);
    res.end();
  } else res.end("Welcome to Node!");
});
server.listen(port, hostname, () => {
  console.log(`Listening at ${hostname}:${port}`);
});
