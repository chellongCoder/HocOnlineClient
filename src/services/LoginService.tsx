async function authenService(username, password) {
  let response = await fetch('http://localhost:8080/api/ext/login', {
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
          Accept: "application/json",
          "cache-control": "no-cache",
          "Content-type": "application/json"
      }),
      method: "POST"
        });
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        console.log("data", data);
        return data;
}

export default {
    authenService
}