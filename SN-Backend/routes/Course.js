const express = require("express");
const router = express.Router(); 

const {
    createCourse,
    showAllCourses,
    getCourseDetails
} = require("../controllers/Course");

const {
    createCategory,
    showAllCategories
} = require("../controllers/Category");

const {
    createRating,
    getAverageRating,
    getAllRatingAndReviews
} = require("../controllers/RatingAndReview");

const {
    createSection,
    updateSection,
    deleteSection
} = require("../controllers/Section");

const {
    createSubSection,
    updateSubSection,
    deleteSubSection
} = require("../controllers/SubSection");

const {
    auth,
    isStudent,
    isInstructor,
    isAdmin
} = require("../middlewares/auth");

router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/addSection", auth, isInstructor, createSection);
router.put("/updateSection", auth, isInstructor, updateSection);
router.delete("/deleteSection", auth, isInstructor, deleteSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.put("/updateSubSection", auth, isInstructor, updateSubSection);
router.delete("/deleteSubSection", auth, isInstructor, deleteSubSection);
router.get("/showAllCourses", showAllCourses);
router.post("/getCourseDetails", getCourseDetails);

router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);

router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getAllRatingAndReviews", getAllRatingAndReviews);

module.exports = router;
