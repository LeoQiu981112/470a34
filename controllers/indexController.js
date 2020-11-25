const models = require("../models");
var rectangle = models.Rectangle;       
exports.FindTriangles  = (req, res) => {
    rectangle.findAll()
      .then(data => {
        res.render('index', { title: 'Express', items: data });
      })
      .catch(err => {
        console.log(err.message); 
        console.log("find error"); 

      });
};
exports.InsertRectangle  = (req, res) => {
    console.log("posting");
    rectangle.create({
        width: req.body.width, 
        height: req.body.height, 
        color: req.body.color,
    })
    .then(data => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err.message); 
        console.log("insert error"); 
    });
}

exports.UpdateRectangle  = (req, res) => {
    console.log("updating");
    rectangle.update({
        width: req.body.width, 
        height: req.body.height, 
        color: req.body.color,
    },
    {where: {id: req.body.id}})
    .then(data => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err.message); 
        console.log("insert error"); 
    });
}

exports.DeleteRectangle  = (req, res) => {
    rectangle.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(data => {
        res.redirect('/');
    })
    .catch(err => {
        console.log(err.message); 
        console.log("delete error"); 
    });
}

exports.ReorderRectangle  = (req, res) => {
    console.log("   HIIIIIIIIIIIIIIIII",req.body.attribute, req.body.ordering);
    req.body.ordering
    rectangle.findAll({
        order: [
            [req.body.attribute, req.body.ordering] 
        ]
    }
    )
      .then(data => {
        console.log("getting data:",data);
        res.render('index', { title: 'Express', items: data });
      })
      .catch(err => {
        console.log(err.message); 
        console.log("find error"); 

      });
};