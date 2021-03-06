import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'

axios.interceptors.response.use(success=>{

    if (success.status && success.status ==200 && success.data.status ==500){
        Message.error({message:success.data.msg})
        return;
    }
    if (success.data.msg){
        Message.success({message:success.data.msg})
    }

    return success.data;

},error => {
    if (error.response.status == 504 || error.response.status == 404){
        Message.error({message:'服务器GG了哦　╮(￣▽￣"")╭'})
    } else if (error.response.status == 403) {
        Message.error({message:'您的权限不够哦　╮(￣▽￣"")╭'})
    } else if (error.response.status == 401){
        Message.error({message:'尚未登录，请登录'})
        router.replace('/');
    } else {
        if (error.response.data.msg){
            Message.error({message:error.response.data.msg})
        } else {
            Message.error({message:'未知错误（；゜０゜）'})
        }
    }
    return;
})

let base = '';

export const postKeyValueRequest = (url, params) =>{
    return axios({
        method:'POST',
        url:`${base}${url}`,
        data:params,
        transformRequest:[function (data){
            let ret = '';
            for (let i in data){
                ret+=encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            console.log(ret);
            return ret;
        }],
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'
        }
    });
}

export const postRequest = (url, params) => {
    return axios ({
        method : 'post',
        url:`${base}${url}`,
        data:params
    })
}

export const putRequest = (url, params) => {
    return axios ({
        method : 'put',
        url:`${base}${url}`,
        data:params
    })
}

export const getRequest = (url, params) => {
    return axios ({
        method : 'get',
        url:`${base}${url}`,
        data:params
    })
}

export const deleteRequest = (url, params) => {
    return axios ({
        method : 'delete',
        url:`${base}${url}`,
        data:params
    })
}