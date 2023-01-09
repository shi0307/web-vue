import service from "@/axios/index";

const getMethod = function getMethod(data) {
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

export { getMethod, postMethod}
