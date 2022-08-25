const { default: mongoose } = require("mongoose")
const mogoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);