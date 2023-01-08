import service from "../index";

function getMethod(data) {
    return service({
        url: '/get',
        method: 'get',
        params: data
    });
}

function postMethod(data) {
    return service({
        url: '/post',
        method: 'post',
        data: data
    })
}

export default {
    getMethod,
    postMethod
}