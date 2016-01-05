import cookie from 'react-cookie'

export function saveToken(token) {
  cookie.save('token', token)
}

export function getToken() {
  return cookie.load('token')
}
export function logout() {
  cookie.remove('token');
}

export function isLogin() {
  return !!cookie.load('token')
}

export function redirectToBack(nextState, replaceState) {
	//已经登录则不进入
  if (isLogin()) {
    replaceState(null, '/')
  }
}
export function redirectToLogin(nextState,replaceState) {
	if (!isLogin()) {
    replaceState(null, '/login')
  }
}