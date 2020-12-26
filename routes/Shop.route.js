const express=require('express');
const router=express.Router();
const shopController=require('../controllers/Shop.controller')

router.post('/',shopController.create);
router.get('/',shopController.getAll);
router.get('/:id',shopController.getById);
router.put('/:id',shopController.updateOne);
router.delete('/:id',shopController.delateOne);

module.exports=router;