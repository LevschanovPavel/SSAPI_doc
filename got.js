const got = require('got');

const params = {
  headers: {
    
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGNmNmU0NzM5NDMyMTczMDdlYTc2OSIsImlhdCI6MTY1NTc0NDI0OSwiZXhwIjoxNjU4MzM2MjQ5fQ.NsaVT0jCayKWDEOrmM0vD-gtwFXdnPQni-ogYAumqAU",
  }
}

got.get('http://localhost:4001/api/v1/todayMatches', params)
    .then (res => {
        console.log('Status Code:', res.statusCode);
        return JSON.parse(res.body)})
    .then (res => { 
        console.log('Success:',  res.success)
        console.log('Data:',  res.data)
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
