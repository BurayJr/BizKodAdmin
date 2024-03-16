const apiurl = "http://172.16.96.131:4000";
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var podaci = {
      email: username,
      password: password,
    };
    // Check if either field is empty
    if (!username || !password) {
      console.log("Please fill in both username and password fields.");
      return;
    } else {
      fetch(`${apiurl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(podaci),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          if (response.status === 200) {
            // Open a new page or redirect to a different URL
            window.open("test.html");
          } else {
            console.log("Login failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
