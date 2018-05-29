/**
 * create by yinghui(张兆欢) in 2017/5/29
 * 
 */

import querystring from 'querystring';
import axios from 'axios';

const WITH_CREDENTIALS = true;
const CONTENT_TYPE = 'Content-Type';
const MULTIPART = 'multipart/form-data';
const URLENCODED = 'application/x-www-form-urlencoded';
const HEADEERS = { 'Accept': 'application/json', [CONTENT_TYPE]: URLENCODED };

/**
 * 发起一个请求
 * @param {string} method HTTP method
 * @param {string} url 请求的目标 URL
 * @param {object} params 请求参数对象
 * @param {object} opts 请求选项
 */
export async function request(method, url, params, opts) {
    opts = Object.assign({}, opts);
    params = Object.assign({}, params);
    const headers = Object.assign({}, HEADEERS, opts.headers);
    const withCredentials = opts.withCredentials || WITH_CREDENTIALS;
    // if (opts.multipart) delete headers[CONTENT_TYPE];
    let query, data, config;
    config = {
        "method": method,
        "url": url,
        "headers": headers,
        "withCredentials": withCredentials
    }
    if (method == 'GET') {
        query = querystring.stringify(params);
        const url_query = JSON.stringify(params) == "{}" ? url : `${url}?${query}`;
        config = Object.assign(config, { "params": params }, { "url": url_query });
    } else {
        config = Object.assign(config, { "data": params })
    }
    const res = await axios(config);
    // const rs = await res.json();
    return res;
}

/**
 * 发起一个 get 请求
 * @param {*} args 参数：url,param,opts
 */
export function get(...args) {
    return request('GET', ...args);
}

/**
 * 发起一个 post 请求
 * @param {*} args 参数：url,param,opts
 */
export function post(...args) {
    return request('POST', ...args);
}



request.request = request;
request.get = get;
request.post = post;
export default request;