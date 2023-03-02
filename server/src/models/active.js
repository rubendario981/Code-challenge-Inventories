const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("active", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("Engines", "Pipes", "Lights"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL,
    },
    lng: {
      type: DataTypes.DECIMAL,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/433f3eb6c5b7bd3fb4a2d0e8756c6836.ico"
    }
  });
};
