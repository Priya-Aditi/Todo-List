const router = require("express").Router();
//importing todo model
const todoItemsModel = require("../models/todoItems");

// Creating our first route -- We will add Todo Items to our database

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

// Creating second route -- getting data from database
router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

// Updating items
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item Updated");
  } catch (err) {
    res.json(err);
  }
});

//Deleting an item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    // finding the item by its id and deleting it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

// Exporting router
module.exports = router;
