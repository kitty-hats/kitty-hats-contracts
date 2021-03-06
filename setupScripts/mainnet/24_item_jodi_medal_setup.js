module.exports = async function (callback) {
  var kittyCoreAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d";
  const oneEtherInWei = 1000000000000000000;

  var KittyItemMarket = artifacts.require("KittyItemMarket.sol");
  var ItemJodiMedal = artifacts.require("ItemJodiMedal.sol");

  var kittyItemMarket = KittyItemMarket.at(KittyItemMarket.address);
  var itemJodiMedal = ItemJodiMedal.at(ItemJodiMedal.address);

  console.log("Setup Token");
  var err, tx = await itemJodiMedal.setupToken(52, "KHJM", "JodiMedal");
  console.log(err, tx);
  await itemJodiMedal.setKittyCoreAddress(kittyCoreAddress);
  await itemJodiMedal.setCanApplyAddress(kittyItemMarket.address);
}
