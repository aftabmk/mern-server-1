import { getPost, likePost } from '../controllers/posts.js'
import route from 'express'
const routes = route.Router();

routes.route('/')
    .get(getPost)
    .patch(likePost)

export default routes