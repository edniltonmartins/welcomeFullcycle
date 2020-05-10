const   port = 3000,
        express = require("express"),
        app = express();

app.get("/", (req, res) => {
  res.send("Maratona Full Cycle 2.0");
})
.listen(port, () => {
  console.log(`Servidor funcionando na porta: ${port}`);
});
