const fs = require("fs");

const menuData = JSON.parse(fs.readFileSync("./menu.json"));

exports.getAllMenu = (req, res) => {
  res.status(200).json({
    status: "Success",
    length: menuData.length,
    data: menuData,
  });
};

exports.updateMenu = (req, res) => {
  const id = req.params.id;
  const menu = menuData.map((el) =>
    el.card.card.itemCards.find((m) => m.card.info.id === id),
  );

  //   const singleMenu = menu.find();
  if (!menu) {
    return res.status(404).json({
      status: "Failed",
      message: "Menu data not found for the given id",
    });
  }
  res.status(200).json({
    status: "Success",
    message: "Menu data updated successfully",
    data: menu,
  });
};
