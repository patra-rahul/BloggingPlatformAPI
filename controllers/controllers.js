import blogModel from "../models/model.blog.js";

export async function createBlog(req, res) {
  const { title, content, category, tags } = req.body;

  const isAlreadyExists = await blogModel.findOne({
    $and: [{ title }, { content }, { category }],
  });

  if (isAlreadyExists) {
    return res.status(400).json({
      msg: "Such a blog already exists!!",
    });
  }

  const lastBlogId = await blogModel.findOne().sort({ blogId: -1 });
  const nextBlogId = lastBlogId ? lastBlogId.blogId + 1 : 1;

  const blogCreated = await blogModel.create({
    blogId: nextBlogId,
    title,
    content,
    category,
    tags,
  });

  return res.status(201).json({
    id: blogCreated.blogId,
    title: blogCreated.title,
    content: blogCreated.content,
    category: blogCreated.category,
    tags: blogCreated.tags,
    createdAt: blogCreated.createdAt,
    updatedAt: blogCreated.updatedAt
  });
}
