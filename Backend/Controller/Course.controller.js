//import Course from "./Model/Course.model.js";
import Course from "../Model/Course.model.js";
export const getCourse=async(req,res)=>{
    try {
        const Course2=await Course.find()
        res.status(200).json(Course2)
    } catch (error) {
        console.log("error: ",error)
        res.status(500).json(error)
        
    }
};
