const e = require("express");

const confirmHealth = (snack) => {
  const { fiber, protein, added_sugar } = snack;
  return fiber === null || protein === null || added_sugar === null
    ? null
    : (fiber >= 5 && added_sugar < 5) || (protein >= 5 && added_sugar < 5)
    ? true
    : false;
};

module.exports = confirmHealth;
