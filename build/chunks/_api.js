const apiURL = "https://ybqrj64ssb.execute-api.ap-northeast-2.amazonaws.com/dev/";
async function loginPOST(id, password) {
  const headers = new Headers({
    "Content-Type": "application/json"
  });
  const raw = JSON.stringify({ id, password });
  const requestOptions = {
    method: "POST",
    headers,
    body: raw,
    redirect: "follow"
  };
  const response = await fetch(
    apiURL + `login`,
    requestOptions
  );
  const item = await response.json();
  return item;
}
async function postSCAN(id) {
  const response = await fetch(apiURL + `post/${id}`);
  const json = await response.json();
  const items = json.Items || [];
  return items;
}
async function postGET(user, id) {
  const response = await fetch(apiURL + `post/${user}/${id}`);
  const json = await response.json();
  const items = json.Item;
  return items;
}
export {
  postGET as a,
  loginPOST as l,
  postSCAN as p
};
