const express = require("express"); // express biblioteka za upravljanje serverom, rutama itd.
const fileUpload = require("express-fileupload");
const app = express(); // kreiramo server
const movieRouter = require("./routes/moviesRoutes");
const visitorRouter = require("./routes/visitorsRoutes");
const eventRouter = require("./routes/eventRoutes");

app.use(express.json()); // da imate pristup body-ju iz requesta od strane klijenta (frontend)
app.use("/movies", movieRouter); // osnovna ruta za rad sa tabelom movies
app.use("/visitors", visitorRouter);
app.use("/event", eventRouter);

app.listen("4000", () => {
  console.log("Listening on port 4000!");
});
