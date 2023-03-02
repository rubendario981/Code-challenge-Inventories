const { User, Active } = require("../db.js")

const createUsers = async () => {
  try {
    const listUsers = await User.findAll()
    if (!listUsers.length) {
      await User.create({
        name: "Scarlet Johanson",
        email: "scarlet@mail.com",
        password: "12345",
        role: "Admin",
      });
      await User.create({
        name: "Gal Gadot",
        email: "gal@mail.com",
        password: "12345",
        role: "Admin",
      });
      await User.create({
        name: "Dua Lipa",
        email: "dua@mail.com",
        password: "12345",
        role: "Operator",
      });
      await User.create({
        name: "Leo Messi",
        email: "leomessi@mail.com",
        password: "12345",
        role: "Operator",
      });
      await User.create({
        name: "Ruben Guzman Gonzalez",
        email: "rubendario981@hotmail.com",
        password: "12345",
        role: "Admin",
      });
      console.log("Se crearon usuarios de prueba correctamente");
    } else {
      console.log("Ya hay datos cargados en tabla usuarios");
    }

  } catch (error) {
    console.log("Error al crear usuarios de prueba", error);
  }
};

const createActives = async () => {
  try {
    const listAssets = await Active.findAll()
    if (!listAssets.length) {
      await Active.create({
        name: "Motor 1",
        type: "Engines",
        description: "desc",
        lat: -74.6,
        lng: 4.6,
        userId: 1
      });
      await Active.create({
        name: "Motor 2",
        type: "Engines",
        description: "desc second engine",
        lat: -72.6,
        lng: 3.6,
        userId: 2
      });
      await Active.create({
        name: "Batch ligths",
        type: "Lights",
        description: "Some chrismas ligths",
        lat: -64.6,
        lng: 5.6,
        userId: 2
      });
      await Active.create({
        name: "Pipes and braces",
        type: "Pipes",
        description: "Oil pipes from Ecopetrol",
        lat: -84.6,
        lng: 4.9,
        userId: 3
      });
      console.log("Creados inventarios de prueba");
    } else {
      console.log("Ya hay datos cargados en tabla assets");
    }
  } catch (error) {
    console.log("Error al crear activos de prueba", error);
  }
}

module.exports = { createUsers, createActives }