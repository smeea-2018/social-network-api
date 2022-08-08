const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = 4000;

app.use(routes);

const init = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running at https://localhost/:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
