const { default: mongoose } = require("mongoose");
const userSchema = require("../Models/usersSchema");

//Create a new user.
const createUser = (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;

    const user = userSchema.create({ username, email });
    res.send("user is created");
  } catch (error) {
    res.send(error);
  }
};

//Retrieve a list of all users with their associated orders.
const getAllUsers = (req, res) => {
  try {
    userSchema.find().then((data) => {
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

//Retrieve a single user by their ID along with their orders.
const getUSerById = (req, res) => {
  try {
    userSchema.findById({
      _id: mongoose.Types.ObjectId(req.body._id).then((data) => {
        res.send(data);
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

//Update a user's information (username or email) by their ID.
const updateUSerInfo = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  userSchema.findByIdAndUpdate({_id:req.body._id}, {$set:{username,email}})
  .then(data =>{
    res.json("data updated successfully");
  })
  .catch(error =>{
    res.sen(error)
  })
    
}

//Delete a user by their ID.
const deleteUserByID = (req, res) => {
    userSchema.findOneAndDelete({_id: req.body._id}).then(data =>{
        res.json("data deleted successfully");
      })
      .catch(error =>{
        res.sen(error)
      })
      
};

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUSerById = getUSerById;
module.exports.updateUSerInfo = updateUSerInfo;
module.exports.deleteUserByID = deleteUserByID;
