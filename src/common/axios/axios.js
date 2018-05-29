import { get, post } from '../request';

//系统管理-管理员管理-list
export async function adminList() {
  const url = '/mock/admin-system.json';
  const rs = await get(url);
  return rs || {};
}
//系统管理-权限管理-list
export async function authList() {
  const url = '/mock/admin-system.json';
  const rs = await get(url);
  return rs || {};
}

//系统管理-角色管理-list
export async function roleList() {
  const url = '/mock/admin-system.json';
  const rs = await get(url);
  return rs || {};
}

//IPtoken管理-iptoken-list
export async function ipTokenList() {
  const url = '/mock/ipToken-list.json';
  const rs = await get(url);
  return rs || {};
}

//test
export async function test() {
  const url = '/mock';
  const params = {
    pagesize:50
  }
  const rs = await get(url,params);
  return rs || {};
}


