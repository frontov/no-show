import Axios from "axios";

export default {
    GET_POSTS({commit}) {
        return Axios('http://localhost:3000/posts', {
            method: "GET"
        })
            .then((posts) => {
                commit('INIT_POSTS', posts.data);
                return posts;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
}