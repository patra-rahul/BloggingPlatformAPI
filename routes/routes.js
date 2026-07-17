import { Router } from "express";
import * as controller from "../controllers/controllers.js"

const blogRouter = Router();

/**
 * POST /posts
 */
blogRouter.post('/posts', controller.createBlog);

/**
 * PUT /posts/:id
 */
blogRouter.put('/posts/:id', controller.updateBlog);

/**
 * DELETE /posts/:id
 */
blogRouter.delete('/posts/:id', controller.deleteBlog);

/**
 * GET /posts/:id
 */
blogRouter.get("/posts/:id", controller.getBlog);

export default blogRouter;