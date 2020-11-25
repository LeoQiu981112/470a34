var express = require('express');
const app = require('../app');
var router = express.Router();
/* GET home page. */
//delete or update depend on rendered rectangle
const rcontroller = require("../controllers/indexController.js");
router.get('/', rcontroller.FindTriangles);

router.post('/insert',rcontroller.InsertRectangle); 
  
router.post('/update', rcontroller.UpdateRectangle);
router.post('/delete', rcontroller.DeleteRectangle);
router.post('/reorder', rcontroller.ReorderRectangle);

module.exports = router;
