const {handleUpload,getAllCourse, getCourseById,addCourse, deleteCourseId,getCourseByName} = require('../controller/controller');
const express = require('express');
const router = express.Router();

//router.post("/upload", upload.single('image'),  handleUpload);
router.get("/", getAllCourse);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.delete("/:id", deleteCourseId);
router.get("/search/:name", getCourseByName);

module.exports = { router };