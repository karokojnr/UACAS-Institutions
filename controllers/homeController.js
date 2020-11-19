const Certificate = require("../models/Certificate")
const Institution = require("../models/Institution")
const Course = require("../models/Course")


exports.getHome = async (req, res) => {
    const allCertificates = await Certificate.find({ institution: req.user._id });
    const allCourses = await Course.find();
    const certificatesLength = allCertificates.length;
    const coursesLength = allCourses.length;
    res.render("dashboard", {
        // //user accessed after login
        name: req.user.institutionName,
        // : ,
        // pageTitle: "",
        certificatesNumber: certificatesLength,
        coursesNumber: coursesLength
    });
}