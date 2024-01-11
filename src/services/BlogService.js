import { AppState } from "../AppState.js";
import { Blog } from "../models/Blog.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";


class BlogService {

    async getBlogs() {
        const response = await api.get('api/blogs')
        logger.log('📡📃getting blogs:', response.data)
        const newBlog = response.data.map(blog => new Blog(blog))
        AppState.blogs = newBlog
        logger.log('new blog in AppState', AppState.blogs)
    }
    async createBlog(blogData) {
        const response = await api.post('api/blogs', blogData)
        AppState.blogs.push(new Blog(response.data))
    }


}

export const blogService = new BlogService()