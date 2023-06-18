const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 5000;

let pass = process.env.PASS;

console.log(pass);

// middle ware
app.use(cors());
app.use(express.json());
// Traveling-app-fifth
// mJpFypko0n6xvgzy

const uri = `mongodb+srv://root:${pass}@cluster0.4m8b8.mongodb.net/easyrecipes?retryWrites=true`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("bookshop");
    const serviceCollection = database.collection("bookservice");
    console.log("database connected");

    // send services to the database
    app.post("/services", async (req, res) => {
      const service = req.body;
      let tags = service.tags.split(",");
      service.tags = tags;
      const result = await serviceCollection.insertOne(service);
      console.log(result);
      res.json(result);
    });

    app.post("/services/filter", async (req, res) => {
      const query = req.body;
      console.log(query);

      const result = await serviceCollection.find(query);
      const data = await result.toArray();
      console.log(data);

      res.json(data);
    });

    // update data into products collection
    app.put("/services/:id([0-9a-fA-F]{24})", async (req, res) => {
      const id = req.params.id.trim();
      console.log("updating", id);
      const updatedService = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      let tags = updatedService.tags.split(",");
      console.log(tags);

      const updateDoc = {
        $set: {
          name: updatedService.name,
          desc: updatedService.desc,
          tags: tags,
          img: updatedService.img,
        },
      };
      const result = await serviceCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      console.log("updating", id);
      res.json(result);
    });

    // get all services
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find({});
      const service = await cursor.toArray();
      res.send(service);
    });

    // get a single service from service collection
    app.get("/services/:id([0-9a-fA-F]{24})", async (req, res) => {
      console.log("req made");

      try {
        const id = req.params.id.trim();
        const query = { _id: ObjectId(id) };
        const service = await serviceCollection.findOne(query);
        console.log(id, service);

        res.json(service);
      } catch (error) {
        console.log(error);
      }
    });

    // delete a data from service collection
    app.delete("/services/:id([0-9a-fA-F]{24})", async (req, res) => {
      const id = req.params.id.trim();
      const query = { _id: new ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running Traveling app");
});

app.listen(port, () => {
  console.log(`Traveling  on port ${port}`);
});
