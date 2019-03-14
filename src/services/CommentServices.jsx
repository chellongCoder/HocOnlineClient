import WebConfig from "./../boot/WebConfig";

async function getCommentByPostId(id, page, limit) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${WebConfig.POSTS_API}/${id}/${WebConfig.COMMENT}?page=${page}&limit=${limit}`;
    console.log("request", request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.message === 'success') return json.data;
    throw new Error(json.message);
}

export default {
  getCommentByPostId,
};