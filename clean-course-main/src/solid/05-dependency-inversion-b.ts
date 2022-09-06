import { LocalDataBaseService, JsonDataBaseService, PostProvider } from './05-dependency-inversion-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    

    private posts: Post[] = [];

    constructor(private postProvider : PostProvider) {}

    async getPosts() {
        
        this.posts = await this.postProvider.getPost();

        return this.posts;
    }
}