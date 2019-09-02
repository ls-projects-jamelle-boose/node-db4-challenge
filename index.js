const server = require("./server");
const config = require("./config");

const PORT = config.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`*** Listening on http://localhost/${PORT} ***`);
});
