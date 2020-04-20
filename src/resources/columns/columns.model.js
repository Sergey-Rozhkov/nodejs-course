const uuid = require('uuid');
const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema(
  {
    title: String,
    order: Number,
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

class Column {
  constructor({ id = uuid(), title = 'COLUMN', order = '0' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = { columnSchema, Column };
