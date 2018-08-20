/**
 * create by yinghui(张兆欢) in 2018/5/29
 */

import querystring from 'querystring';
import axios from 'axios';

const WITH_CREDENTIALS = true;
const CONTENT_TYPE = 'Content-Type';
// const MULTIPART = 'multipart/form-data';
// const URLENCODED = 'application/x-www-form-urlencoded';
const JSON_CHARSET = 'application/json;charset=UTF-8';
const HEADEERS = { 'Accept': 'application/json', [CONTENT_TYPE]: JSON_CHARSET };

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
  let query, config;
  config = {
    "method": method,
    "url": url,
    "headers": headers,
    "withCredentials": withCredentials,
    "timeout": 3000,
  }
  switch (method) {
    case 'GET': query = querystring.stringify(params);
      const url_query = JSON.stringify(params) === "{}" ? url : `${url}?${query}`;
      config = Object.assign(config, { "params": params }); break;
    case 'POST': config = Object.assign(config, { "data": params }); break;
    case 'PUT': config = Object.assign(config, { "data": params }); break;
    case 'DELETE': config = Object.assign(config, { "data": params }); break;
  }
  axios.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作
    return config;
  }, function (err) {
    //Do something with request error
    return Promise.reject(err);
  });
  axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (err) => {
    const res = JSON.parse(JSON.stringify(err));
    // switch (res.response.status) {
    //   case 400: err.message = '请求错误(400)' ; break;
    //   case 401: err.message = '未授权，请重新登录(401)'; console.log('401');
    //     break;
    //   case 403: err.message = '拒绝访问(403)'; break;
    //   case 404: err.message = '请求出错(404)'; break;
    //   case 408: err.message = '请求超时(408)'; break;
    //   case 500: err.message = '服务器错误(500)'; break;
    //   case 501: err.message = '服务未实现(501)'; break;
    //   case 502: err.message = '网络错误(502)'; break;
    //   case 503: err.message = '服务不可用(503)'; break;
    //   case 504: err.message = '网络超时(504)'; break;
    //   case 505: err.message = 'HTTP版本不受支持(505)'; break;
    // }
    return res;
  });
  try {
    const res = await axios(config);
    return res;
  } catch (e) {
    return {};
  }
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

/**
 * 发起一个 put 请求
 * @param {*} args 参数：url,param,opts
 */
export function put(...args) {
  return request('PUT', ...args);
}

/**
 * 发起一个 delete 请求
 * @param {*} args 参数：url,param,opts
 */
export function deletes(...args) {
  return request('DELETE', ...args);
}



request.request = request;
request.get = get;
request.post = post;
request.deletes = deletes;

export default request;
