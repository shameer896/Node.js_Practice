const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: { type: String, required: true },
    body: { typr: String, required: true },
  },
  { timestamps: true }
);
