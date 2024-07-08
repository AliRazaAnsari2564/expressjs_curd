import express from "express";

const app = express();

const port = 3000;
app.use(express.json());

let teaData = [];
let nextId = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newtea = { id: nextId++, name, price };
  teaData.push(newtea);
  res.status(201).send(newtea);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

//update tea

app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.send(200).send(tea);
});

//delete tea

app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  res.send(200).send("deleted");
});

app.get("/", (req, res) => {
  res.send("Hello from ali raza!");
});
app.get("/ok", (req, res) => {
  res.send("are you ok?");
});
app.get("/tea", (req, res) => {
  res.send("wanna order something? what should you perfer?");
});
app.get("/Xlink", (req, res) => {
  res.send("MAliRazaAnsari");
});
app.get("/link", (req, res) => {
  res.send("my linkedin account?.....malirazaansari");
});

app.listen(port, () => {
  console.log(`server in runing at port: ${port}... `);
});
