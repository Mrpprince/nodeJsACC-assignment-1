const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.getAll = () => {
    return Shop.find();
}

module.exports.getById = (id) => {
    return Shop.findById(id)
}

module.exports.update = (id,{name,email,category}) => {
    return Shop.findOneAndUpdate({ _id: id },
        { $set: { name,email,category } },{new:true})
}
module.exports.delateById = (id) => {
    return Shop.findOneAndDelete({ _id: id })
       
}