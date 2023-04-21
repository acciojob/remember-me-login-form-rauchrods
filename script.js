//your JS code here. If required.
let form = document.querySelector("form");
let ext_user = document.querySelector("#existing");



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let uname = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let check_box = document.querySelector("#checkbox");
    if(check_box.checked) {
        let userdetail = {
            username:uname,
            password:password
        }

        localStorage.setItem("userdetail", JSON.stringify(userdetail));
    }

    alert(`Logged in as ${uname}`);
});

if(localStorage.getItem("userdetail")) {

    let userdetail = JSON.parse(localStorage.getItem("userdetail"));
    document.querySelector("#username").value = userdetail.username;
    document.querySelector("#password").value = userdetail.password;
	document.querySelector("#checkbox").checked ="true"
    ext_user.style.display = "inline-block";
}