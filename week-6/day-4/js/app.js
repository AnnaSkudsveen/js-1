//JavaScript tries the co
try {
  const url = "someurl.com";
  url = "";

  new Date("2014-25-03").toISOString();
  console.log("Finished with no errors");
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Code that must run regardless of it works or not");
}
//TypeError: Assignment to constant variable.
//   at app.js:3:7
