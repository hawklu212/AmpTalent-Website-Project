// logout
const logout = document.querySelector("#logout");

logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut();
    console.log("user logged out");
})