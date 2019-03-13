import WebConfig from './../boot/WebConfig';

async function getPost(page, limit, content, created) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${
      WebConfig.POSTS_API
    }?page=${page}&limit=${limit}&ref=["user"]&map=["name"]&content=${content}&created=${created}`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if(json.message === 'success') return json.data;
    throw new Error(json.message);

}

async function getUserByPostId(idPost) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${
      WebConfig.POSTS_API
    }/${idPost}/user`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.message === 'success') return json;
    throw new Error(json.message);
}

export default {
    getPost,
    getUserByPostId
}