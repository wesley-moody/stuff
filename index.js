const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  const songs = [{ id: 1, name: "Final Countdown" }];

  res.status(200).json(songs);
});

const port = 5005
server.listen(port, () => console.log(`\n** Running on port${port} **\n`))



