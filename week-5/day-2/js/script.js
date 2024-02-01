// data

let todoTask = {
  name: "foo",
  body: "bar",
  userId: 1,
};

let todo = fetch("https://jsonplaceholder.typicode.com/users")
  .then((httpResponse) => {
    httpResponse.json();
  })
  .then((todoResult) => {
    console.log(todoResult);
  });

console.log("Other stuff");
//Show it to the users

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    name: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then((httpResponse) => console.log(httpResponse));

fetch("https://jsonplaceholder.typicode.com/users/3"),
  {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
//Go fetch a promise to forward to .then
//Asynch ---> await going to fetch, then forward to the next line

async function getTodos() {
  let httpResponse = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = httpResponse.json();
  console.log(data);
}
