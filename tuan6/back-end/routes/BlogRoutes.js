const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogByTitle,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/find").get(getBlogByTitle);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

module.exports = router;
