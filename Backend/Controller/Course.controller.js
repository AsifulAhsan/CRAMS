import Course from "./Model/Course.model";
export const getCourse=async(req,res)=>{
    try {
        const Course=await Course.find()
        res.status(200).json(Course)
    } catch (error) {
        console.log("error: ",error)
        res.status(500).json(error)
        
    }
};
