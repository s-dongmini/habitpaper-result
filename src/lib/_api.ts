const apiURL = "https://ybqrj64ssb.execute-api.ap-northeast-2.amazonaws.com/dev/";


export async function loginPOST(id: string, password: string) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const raw = JSON.stringify({ id: id, password: password });
    const requestOptions: RequestInit = {
        method: "POST",
        headers: headers,
        body: raw,
        redirect: "follow",
    };
    const response = await fetch(
        apiURL + `login`,
        requestOptions
    );
    const item = await response.json();

    return item;
}

export async function signupPOST(id: string, first_password: string, confirm_password: string): Promise<any> {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const raw = JSON.stringify({ id: id, first_password: first_password, confirm_password: confirm_password });
    const requestOptions: RequestInit = {
        method: "POST",
        headers: headers,
        body: raw,
        redirect: "follow",
    };
    const response = await fetch(
        apiURL + `signup`,
        requestOptions
    );
    return response;
}

export async function postSCAN(id: string) {
    const response = await fetch(apiURL + `post/${id}`);
    const json = await response.json();
    const items = json.Items || [];
    return items;
}
export async function postGET(user: string, id: string) {
    const response = await fetch(apiURL + `post/${user}/${id}`);
    const json = await response.json();
    const items = json.Item;
    return items;
}

export async function postPOST(id: string, items: object, name: string) {
    const headers = new Headers({
        "Content-Type": "application/json",
    });
    const raw = JSON.stringify({ item: items, name: name });
    const requestOptions: RequestInit = {
        method: "POST",
        headers: headers,
        body: raw,
        redirect: "follow",
    };
    const response = await fetch(
        apiURL + `post/${id}`,
        requestOptions
    );
    const item = await response.json();

    return item;
}

export async function postUPDATE(user: string, id: string, item: object) {

}
/*
export async function postPOST(
    user: string,
    item: object
) {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    const raw = JSON.stringify({
        user,
        item
    });
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: headers,
        body: raw,
        redirect: 'follow'
    };
    const response = await fetch(apiURL + `post/${user}`, requestOptions);
    const item = await response.json();

    return item;
}*/