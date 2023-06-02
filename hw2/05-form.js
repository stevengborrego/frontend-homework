const form = document.getElementById("form");

// used this as a reference: https://www.geeksforgeeks.org/how-to-get-all-checked-values-of-checkbox-in-javascript/#
function formSubmit() {
  console.log("Full Name: " + document.getElementById("FullName").value);
  console.log("Email: " + document.getElementById("Email").value);
  console.log(
    "Registration Status: " +
      document.getElementById("RegistrationStatus").value
  );
  let checkboxes = document.getElementsByName("Courses");
  let courses = "Courses: ";
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      courses += checkboxes[i].value + ", ";
    }
  }
  console.log(courses);
  console.log(
    "Anything Else?: " + document.getElementById("AnythingElse").value
  );
}

form.addEventListener("submit", formSubmit);
