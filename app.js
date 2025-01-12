const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const corsOrigin =
  process.env.CORS_ORIGIN || "https://excel-deploy-test.onrender.com";

const corsOptions = {
  origin: [corsOrigin],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => res.json({ frasierCrane: "I'm listening" }));

app.get("/delay/:secs", (req, res) => {
  response = { secs: req.params.secs };
  response.isNumber = !isNaN(response.secs);
  if (response.isNumber) {
    response.delayMS = Number(response.secs) * 1000;
    setTimeout(() => {
      res.json(response);
    }, response.delayMS);
  } else {
    res.json(response);
  }
});

const server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
