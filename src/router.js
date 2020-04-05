
const serverUrl = "http://127.0.0.1:4000/"

async function get(url) {
    return await fetch(serverUrl + url);
}

async function post(url, params) {
    const options = {
        method:"post",
        headers: {
            'Content-Type': 'application/json'
        },
        // mode: 'cors',
        body: JSON.stringify(params)
    };
    let response;
    try {
        console.log(options)
        response = await fetch(serverUrl + url, options);
    } catch (e) {
        console.error("Запрос не удачен")
        return ;
    }

    const { status } = response;
    if (status === 404) {
        const { statusText } = response;
        console.error('Статус', statusText);
    }

    return response;


}

export { post, get }