const mongoose = require("mongoose");
const uri =
  "mongodb+srv://arun:arun@cluster0.lf9gpi5.mongodb.net/Food?retryWrites=true&w=majority";

const db = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE}`, {
      useNewUrlParser: true,
    });
    console.log("Connected");

    const fetched_data = await mongoose.connection.db.collection("foodItems");
    const data = await fetched_data.find({}).toArray();

    const fetched_Category = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const foodCat = await fetched_Category.find({}).toArray();

    global.foodItems = data;
    // console.log(global.foodItems);

    global.foodCategory = foodCat;
    // console.log(global.foodCategory);
  } catch (err) {
    console.log("Error:", err);
  }
};

module.exports = db;
