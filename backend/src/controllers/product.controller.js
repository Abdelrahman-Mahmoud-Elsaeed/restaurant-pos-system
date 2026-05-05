import Product_Schema from "../models/product.model.js";

export const getAllproducts = async (req, res) => {
  try {
    const products = await Product_Schema.find();

    res.status(200).json({
      success: true,
      data: products
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};

export const getproductbyid = async (req, res) => {
  try {
    const product = await Product_Schema.findById(req.params.id)

    res.status(200).json({
      success: true,
      data: product
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message   
    });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const product = await Product_Schema.findByIdAndUpdate(req.params.id,req.body,{ new: true });

    res.status(200).json({
      success: true,
      data: product
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};


export const CreateProduct = async (req, res) => {
  try {
    const product = await Product_Schema.create({...req.body});

    res.status(200).json({
      success: true,
      data: product
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};

export const DeleteProduct = async (req,res) =>{
    try{
        const product =  await Product_Schema.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "deleted", data : product})
    }
    catch(error){
        console.error("Error" , error.message);
        res.status(200).json({
            message : error.message
        })
    }
}