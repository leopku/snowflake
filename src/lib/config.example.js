module.exports = {
  PARSE: {
    APP_ID: '',
    REST_API_KEY: '',
    SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
    local: {
      url: 'http://localhost:8080/parse'
    },
    remote: {
      url: 'https://api.parse.com/1'
    }    
  },
  backend: {
    parseLocal: false,
    parseRemote: false,
    hapiRemote: false,
    hapiLocal: true
  },
  HAPI: {
    local: {
      url: 'http://127.0.0.1:5000'
    },
    remote: {
      url: 'enter your remote url here'
    }
  }  
}
