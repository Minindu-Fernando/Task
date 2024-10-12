const mySqlPool = require("../config/db");

const getStudents = async (req, res) => {
  try {
    const [data] = await mySqlPool.query("SELECT * FROM students");

    if (!data || data.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }

    res.status(200).send({
      success: true,
      message: "All Student Records",
      data: data, 
    });
  } catch (error) {

    console.error("Error in Get All Student API:", error.message);
    res.status(500).send({
      success: false,
      message: "Error in Get All Student API",
      error: error.message, 
    });
  }
};

module.exports = { getStudents };
