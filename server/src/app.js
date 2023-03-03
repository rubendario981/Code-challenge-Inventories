const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50Mb" }));
server.use(bodyParser.json({ limit: "50Mb" }));
// server.use(fileUpload({
//   useTempFiles : true,
//   tempFileDir : './images'
// }));
server.use(morgan("dev"));
server.use((req, res, next) => {
	const allowedOrigins = [
		'http://localhost:5173', 
    'https://code-challenge-inventories.vercel.app',
    'https://code-challenge-inventories.vercel.app/',
    'https://code-challenge-inventories-git-master-rubendario981.vercel.app',
    'https://code-challenge-inventories-git-master-rubendario981.vercel.app/'
	];

	const origin = req.headers.origin;
  // res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
	if (allowedOrigins.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
});

server.use("/", router);

module.exports = server;
