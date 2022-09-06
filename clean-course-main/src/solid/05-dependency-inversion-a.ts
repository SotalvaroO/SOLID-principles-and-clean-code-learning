import { PostService } from "./05-dependency-inversion-b";
import {
    JsonDataBaseService,
    LocalDataBaseService,
    WebApiDataService,
} from "./05-dependency-inversion-c";

// Main
(async () => {
    // const provider = new JsonDataBaseService();
    // const provider = new LocalDataBaseService();
    const provider = new WebApiDataService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts });
})();
