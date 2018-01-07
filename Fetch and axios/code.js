const status = response => {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}

const JsonPars = response => response.json()

fetch('http://www.mocky.io/v2/5a5257782e0000542dc03a9b')
  .then(status)
  .then(JsonPars)
  .then(data => {
    console.log(data, 'FETCH')
  })
  .catch(error => {
    console.log('error', error)
  })


axios.get('http://www.mocky.io/v2/5a5257782e0000542dc03a9b')
  .then(response => {
    console.log(response.data,'AXIOS')
  })
  .catch(error => {
    console.log('error', error)
  });


