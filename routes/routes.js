import { Router } from "express";
import * as controller from "../controllers/controllers.js"

const blogRouter = Router();

/**
 * POST /posts
 */
blogRouter.post('/posts', controller.createBlog);

export default blogRouter;