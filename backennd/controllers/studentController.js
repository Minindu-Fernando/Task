const mySqlPool = require("../config/db");

const getStudents = async(req,res)=>{
    try{
const data = await db.query('SELECT * FROM students')
if(!data){
return res.status(404).send({
    success:false,
    message:'No Records Found'
})
}
res.status(200).send({
    success:true,
    message:'All Student Records ',
    data
})
    }catch(error){
console.log(error)
res.status(500).send({
success:false,
message:'Error in Get All Student API',
error
})
    }
};
module.exports = {getStudents}