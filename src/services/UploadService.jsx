import WebConfig from "../boot/WebConfig";

 async function uploadMarkDownFile (file) {
     const formData = new FormData();

     formData.append('file', file);

     const options = {
         method: 'POST',
         body: formData,
     }
    console.log("opition ", options);
     let result = await fetch(`${WebConfig.UPLOAD_API(file.name.slice(0, file.name.length - 3))}`, options);
     let json = await result.json();
     console.log("result ", json.data[0]);
     return json.data[0];
}

async function getClass(page, limit) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${
      WebConfig.CLASS_API
    }?page=${page}&limit=${limit}`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.message === 'success') return json.data;
    throw new Error(json.message);
}

async function getTypePost (page ,limit) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${
      WebConfig.TYPE_POST
    }?page=${page}&limit=${limit}`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.message === 'success') return json.data;
    throw new Error(json.message);
}

async function upload (title, lop, typePost, date, user_id) {
    let api = `${WebConfig.SERVER}/${WebConfig.API}/${WebConfig.POSTS_API}`;
    let request = {
        headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({content : title, created: date, user_id: user_id, class_id : lop, type_post_id : typePost})
    };
    let result = await fetch(api, request);
    const json = await result.json();
    console.log("result ", json.data[0]);
    return json.data[0];
}

async function insertData(name, post_id, location) {
    console.log(name, post_id, location);
    let api = `${WebConfig.SERVER}/${WebConfig.API}/${WebConfig.DATA}`;
    let request = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
      body: JSON.stringify({ name: name, post_id: post_id, location: location })
    };
    let result = await fetch(api, request);
    const json = await result.json();
    console.log("result ", json.data[0]);
    return json.data[0];
}

export default {
  uploadMarkDownFile,
  getClass,
  getTypePost,
  upload,
  insertData
};