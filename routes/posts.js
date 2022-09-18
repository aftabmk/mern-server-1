import { getPosts, createPosts, deletePost, updatePost } from '../controllers/posts.js'
import route from 'express'
const routes = route.Router();

routes.route('/')
    .get(getPosts)
    .post(createPosts)
    .patch(updatePost)
    .delete(deletePost)


export default routes

