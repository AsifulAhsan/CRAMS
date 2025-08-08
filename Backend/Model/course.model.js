import mongoose from "mongoose";
const CourseSchema=mongoose.Schema({
    courseId: Number,
    courseCode: String,
    title: String,
    instructor: String,
    credits: Number,
    



})
const Course = mongoose.model("Course",CourseSchema );
export default Course;