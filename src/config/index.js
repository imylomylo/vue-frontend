const API_URL = 'http://api.dev/v1/'

function api_url (path) {
    return API_URL + path
}

export default {
    api: {
        auth_url: api_url('auth')
    }
}