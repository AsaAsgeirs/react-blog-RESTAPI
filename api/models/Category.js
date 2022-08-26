const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);