const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb+srv://apsundeharshal129:masai12999@cluster0.dcum3gc.mongodb.net/clione?retryWrites=true&w=majority`);

module.exports = {
  connection,
};