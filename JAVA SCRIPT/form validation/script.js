const nameInput= document.getElementById('name').value
const emailInput = document.getElementById("email").value
const passwordInput = document.getElementById("pwd").value
const passwordInput2 = document.getElementById("pwd2").value


document.getElementById('form').addEventListener('submit', function (e)
{
    e.preventDefault();
    console.log(e);
    if (nameInput.trim().length < 6)
    {
        alert("name should be minimum 6 characters")
    }
    if (!(emailInput.match("^S+@S+.S{3}+$")))
    {
        document.getElementById('emailError').textContent="Please enter valid email"
    }
    if (passwordInput != passwordInput2)
    {
        alert("Passwords are not matching")
    }
    
})
function revealPassword() {
	if (passwordInput2.type == "text") {
		passwordInput2.type = "password"
	} else {
		passwordInput2.type = "text"
	}
}