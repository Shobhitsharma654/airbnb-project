const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.MONGODB_URI;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
 initData.data =  initData.data.map((obj) =>({...obj, owner: "685196b10a2e3ee9b9ad2ad1"}));
  await Listing.insertMany(initData.data);

  console.log("data was initialized");
};

initDB();
