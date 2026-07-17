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

export default blogRouter;