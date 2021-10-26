// const multer = require('multer');
const Menu = require('../models/Menu');

const insertMenu = (req,res) => {

   const body = req.body || null
   let fileName=''

   if(req.file){
      let file = req.file
      fileName = file.filename
   }else{
      return res.json({"Message: ":"File is not uploaded !"})
   }

   if(body===null){
      return res.status(400).json({
         success: false,
         error: "You must provide the data !"
      })
   }

   const menu = new Menu(body)

   if(!menu){
      return res.status(400).json({success: false, error: "Something wrong with menu model !"})
   }

   menu.save()
      .then(()=>{
         return res.status(201).json({
            success: true,
            id: menu._id,
            data:{...body,"fileName":fileName},
            message: "Menu was created !"
         })
      })
      .catch(error => {
         return res.status(400).json({
            success: false,
            error: error,
            message: "Menu failed to create !"
         })
      })
}

const getMenus = (req,res) => {
   Menu.find({}, (err,menus) => {
      if(err){
         return res.staus(400).json({
            success: false,
            message: err
         })
      }

      if(!menus.length) {
         return res.status(404).json({
            succes: false,
            message: "Menus not found"
         })
      }

      return res.status(200).json({
         success: true,
         data: menus
      })
   })
}

module.exports = {
   getMenus,
   insertMenu
}