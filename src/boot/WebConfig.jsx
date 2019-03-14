const SERVER = "http://localhost:8080";
const API = "api";
const POSTS_API = "Post";
const CLASS_API = "class";
const TYPE_POST = "type_post";
const USER_HAS_ROLE = "ext/get-role";
const ROLE = "roles";
const COMMENT = "Comment";
const DATA = "data";
const UPLOAD_API = (name) => (`http://localhost:8080/api/ext/upload?name=${name}&dir=upload/markdown`);
export default {
    SERVER, API, POSTS_API, UPLOAD_API, CLASS_API, TYPE_POST, DATA, USER_HAS_ROLE, ROLE, COMMENT
}