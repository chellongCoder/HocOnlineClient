import WebConfig from "./../boot/WebConfig";

async function getUserRoleByIdUser(id) {
    let request = `${WebConfig.SERVER}/${WebConfig.API}/${WebConfig.USER_HAS_ROLE}?id=${id}`;
    console.log('request', request);
    const res = await fetch(request);
    const json = await res.json();
    if (json.length !== 0) return json[0];
    throw new Error(json.message);
}

async function getRoleById(id) {
  let request = `${WebConfig.SERVER}/${WebConfig.API}/${
    WebConfig.ROLE
  }/${id}`;
  console.log("request", request);
  const res = await fetch(request);
  const json = await res.json();
    if (json.message === 'success') return json.data;
    throw new Error(json.message);
}

export default {
  getUserRoleByIdUser,
  getRoleById
};