const Form = document.getElementById("login-form");
const Submit_Button = document.getElementById("submit-btn");
const Error_Msg = document.getElementById("error-msg");

Submit_Button.addEventListener("click", (e) => {
    e.preventDefault();
    const userID = Form.userID.value;
    const password = Form.password.value;
    /*if correct info given, login and redirect to main page*/
    if (userID === "admin" && password === "password") {
        alert("The login was successful.");
        location.replace("/C:/Users/drago/Desktop/CCPS530_Final_Project/Main_Page.html")
    } else {
        Error_Msg.style.opacity = 1;
    }
})