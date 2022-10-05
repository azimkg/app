const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Item = sequelize.define("item", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    unique: true,
  },
  distance: {
    type: DataTypes.INTEGER,
    allowed: false,
  },
  query: {
    type: DataTypes.STRING,
    allowed: false,
  },
});

module.exports = {
  Item,
};
