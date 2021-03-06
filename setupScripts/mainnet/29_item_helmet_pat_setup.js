module.exports = async function (callback) {
  var artistAddress = "0xeF7e51ADe42b9Bb9db5A613e5ccA83DdA7BBA708";  // KittyHawk's ETH address
  var kittyCoreAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
  const oneEtherInWei = 1000000000000000000;

  var KittyItemMarket = artifacts.require("KittyItemMarket.sol");
  var ItemHelmetPat = artifacts.require("ItemHelmetPat.sol");

  var kittyItemMarket = KittyItemMarket.at(KittyItemMarket.address);
  var itemHelmetPat = ItemHelmetPat.at(ItemHelmetPat.address);

  console.log("Setup Token");
  var err, tx = await itemHelmetPat.setupToken(60, "KHHP", "HelmetPat");
  console.log(err, tx);
  await itemHelmetPat.setKittyCoreAddress(kittyCoreAddress);
  await itemHelmetPat.setCanApplyAddress(kittyItemMarket.address);
  console.log("Transfer Tokens");
  var err, tx = await itemHelmetPat.transfer(kittyItemMarket.address, 52);
  console.log(err, tx);
  console.log("Add Item");
  var err, tx = await kittyItemMarket.addItem("HelmetPat", itemHelmetPat.address, oneEtherInWei*0.0052, artistAddress, 5000);
  console.log(err, tx);

}
