export default {
  login(email, password, callback) {
    callback = arguments[arguments.length - 1]

    if (localStorage.token) {
      if (callback) callback(true)
      this.onChange(true)
      return
    }

    pretendRequest(email, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (callback) callback(true)
        this.onChange(true)
      } else {
        if (callback) callback(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(callback) {
    delete localStorage.token
    if (callback) callback()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}
