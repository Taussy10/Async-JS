// Bhai jab sab badhiya chal reha tha 
// XML me to Fetch q laya ? 

const makeHttpRequest = (method,url, callback) => {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.addEventListener('load', () => {
    callback(xhr.response.users)
  })
  
  xhr.open(method,url)
  xhr.send()
}
// makeHttpRequest'GET', "https://dummyjson.com/users/")

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
    // We are passing a function as params that store response then console
  // WHy passing ? so that we can use data in other code 
  // Let's say i want to get users 1 id then how 
  console.log(usersData[0].id);
  // want to get post of particular user so have to pass the user'sid
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData[0].id}`, (postsData) => {
    console.log(postsData);
    // We are passing data from to another then to another 
    // that's not correct cause you want that it should coded top to bottom not left to right 
    // next code will be accquire whole screen this is called callback hell
    // that's why promise was introduced to so that code grow top to bottom
 
  });
})
