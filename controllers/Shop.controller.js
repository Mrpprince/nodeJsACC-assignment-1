const { create, getAll,getById ,update,delateById} = require('../services/Shop.service');
// const Shop=require('../models/Shop.model')
module.exports.create = async (req, res, next) => {
    try {

        const shop = await create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

module.exports.getAll = async (req, res, next) => {
    try {


        const user = await getAll();
        return res.status(200).json(user);

    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Something went wrong" })

    }
}

module.exports.getById = async (req, res, next) => {
    try {
        let { id } = req.params;
        const personInfo= await getById(id);
        return res.status(200).json(personInfo);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Something went wrong" })
    }

}

module.exports.updateOne= async (req,res,next)=>{
    // const {name,email,category}=req,body;
   try{
    let {id}=req.params;
    const updateOne=await update(id,{name,email,category}=req.body);
    return res.status(200).json(updateOne);
   } catch(e){
    console.log(e);
    return res.status(500).json({ message: "Something went wrong" })
   }
}

module.exports.delateOne= async (req,res,next)=>{
    // const {name,email,category}=req,body;
   try{
    let {id}=req.params;
    const delate=await delateById(id);
    return res.status(200).json(delate);
   } catch(e){
    console.log(e);
    return res.status(500).json({ message: "Something went wrong" })
   }
}