const express = require('express');
const router = express.Router();

//contacts
router.get('/contacts',(req,res,express)=>{
    res.render('contact',{title: "this is the tittle ",layout: false});
});

//MyProjects
router.get('/MyProjects',(req,res,express)=>{
    res.render('MyProjects',{title: "this is the tittle ",layout: false});
});

//MySkills
router.get('/MySkill',(req,res,express)=>{
    res.render('MySkill',{title: "this is the tittle ",layout: false});
});

//MyValues
router.get('/MyValues',(req,res,express)=>{
    res.render('MyValues',{title: "this is the tittle ",layout: false});
});


//index
router.get('/', (req, res, express) => {
    res.render('index',{title: "this is the tittle ",layout: false});
});


module.exports = router;