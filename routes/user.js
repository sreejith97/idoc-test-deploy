const express = require("express");
const {
  addUser,
  userLogin,
  testApi,
  addStocks,
  showStocks,
  searchStock,
  listUser,
  addPatient,
  newToken,
  getPatient,
  addPrescription,
  getPrescription,
  showStockName,
} = require("../Controller/user");
const router = express.Router();

router.route("/").get(testApi);
router.route("/user").get(listUser);
router.route("/signup").post(addUser);
router.route("/signin").post(userLogin);
router.route("/stocks/add").post(addStocks);
router.route("/stocks").get(showStocks);
router.route("/stocks/medecine").get(showStockName);
router.route("/stocks/search/:key").get(searchStock);
router.route("/patient/signup").post(addPatient);
router.route("/patient/token").post(newToken);
router.route("/patient").get(getPatient);
router.route("/doctor/newPrescription").post(addPrescription);
router.route("/pharmacy/view").get(getPrescription);

module.exports = router;
