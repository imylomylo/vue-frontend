import Vue from 'vue'
import Config from './config'

class Auth  {
  constructor() {
  }

  getToken(){
    this.token = localStorage.token
  }

  deleteToken(){
    delete localStorage.token
  }

  check () {
    if(!this.getToken())
      return false

    this.setup();

    return true
  }

  setToken (token) {
    localStorage.token = token
  }

  login (credentials, callback) {
    let that = this

    if(this.getToken())
      return true

    Vue.http.post(Config.api.auth_url, credentials)
      .then((response) => {
        this.setToken(response.data.token)

        if(callback)
          callback(true)
      }, (response) => {
        console.error(response)
        if(callback)
          callback(false)
      })
  }

  logout () {
    this.deleteToken()
  }

  setupRouter () {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + this.getToken()
    this.setupInterceptor()
  }

  setupInterceptor () {
    Vue.http.interceptors.push((request, next) => {
      next((response) => {
        if(response.status == 401){
          console.log('token invalid', response)
        }
      })
    });
  }


}

const auth = new Auth()

export default auth