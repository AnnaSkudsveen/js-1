// data

let todo = fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (httpResponse) {
    //   console.log(httpResponse);
    //extract the data
    return httpResponse.json();
  })
  .then(function (todoResult) {
    console.log(todoResult);
  });

console.log("Other stuff");
