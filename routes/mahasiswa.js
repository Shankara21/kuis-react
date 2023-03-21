var express = require("express");
const MahasiswaController = require("../controller/MahasiswaController");
var router = express.Router();

router.get("/", MahasiswaController.index);
router
  .route("/:id")
  .get(MahasiswaController.show)
  .put(MahasiswaController.update)
  .delete(MahasiswaController.destroy);
router.post("/", MahasiswaController.store);

module.exports = router;
