import orders from "../models/order.model.js"

export const getAllorders = async (req, res) => {
  try {
    const order = await orders.find();

    res.status(200).json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};

export const getorderbyid = async (req, res) => {
  try {
    const order = await orders.findById(req.params.id)

    res.status(200).json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message   
    });
  }
};

export const UpdateOrder = async (req, res) => {
  try {
    const order = await orders.findByIdAndUpdate(req.params.id,req.body,{ new: true });

    res.status(200).json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};


export const CreateOrder = async (req, res) => {
  try {
    const order = await orders.create({...req.body});

    res.status(200).json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error("ERROR", error.message);

    res.status(500).json({
      success: false,
      message: error.message 
    });
  }
};

export const DeleteOrder = async (req,res) =>{
    try{
        const order =  await orders.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "deleted", data : order})
    }
    catch(error){
        console.error("Error" , error.message);
        res.status(200).json({
            message : error.message
        })
    }
}