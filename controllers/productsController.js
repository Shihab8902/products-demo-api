const { default: mongoose } = require("mongoose");
const {products} = require("../model/productsModel");


//GET all products
const getProducts =  async(req, res)=>{
    try {
        const foundProducts =  await products.find();
    if(foundProducts){
        res.status(200).send({
            message: "Success",
            data: foundProducts,
        })
    }else{
        res.status(404).send({
            message: "Failed",
            data: "Not record found!",
        })
    }
    } catch (error) {
        res.status(500).send({
            message: "Server error",
            data: error.message,
        })
    }
}


//GET product by id
const getProductById =  async(req, res)=>{
    try {
        const id = req.params.id;
        const foundSpecificProudct = await products.find({_id: id});
        if(foundSpecificProudct){
            res.status(200).send({
                message: "Success",
                data: foundSpecificProudct
            })
        }else{
            res.status(404).send({
                message: "Failed",
                data: "Not record found!",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Server error",
            data: error.message,
        });
    }
}



//POST a new product
const createProducts = async(req, res)=>{
    try {
        const title = req.body.title;
        const price = req.body.price;
        const rating = req.body.rating;
        const description = req.body.description;

        const newProduct = new products({
            title,
            price,
            rating,
            description
        });

        const productData = await newProduct.save();

        res.status(201).send({
            message: "Success",
            data: productData
        });

    } catch (error) {
        res.status(500).send({
            message: "Failed",
            data: error.message
        });
    }
}


//Update product
const updateProduct = async (req, res)=>{
    try {
        const updatedProduct = await products.findByIdAndUpdate({_id: req.params.id}, {$set:{
            title: req.body.title,
            price: req.body.price,
            rating: req.body.rating,
            description: req.body.description
        }}, {new: true});

        res.status(200).send({
            message: "Success",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).send({
            message: "Failed",
            data: error.message
        });
    }
};


//DELETE product
const deleteProduct = async (req, res)=>{
    try {
        const deletedProduct = await products.deleteOne({_id: req.params.id});
        res.status(200).send({
            message: "Success",
            data: deletedProduct
        });
    } catch (error) {
        res.status(500).send({
            message: "Failed",
            data: error.message
        });
    }
}



module.exports = {getProducts, getProductById, createProducts, updateProduct, deleteProduct};