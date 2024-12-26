const nameInput= document.getElementById('name')
const emailInput = document.getElementById("email").value
const passwordInput = document.getElementById("pwd").value
const passwordInput2 = document.getElementById("pwd2").value


document.getElementById('form').addEventListener('submit', function (e)
{
    e.preventDefault();
    console.log(e);
    console.log(nameInput.value.length)
    if (nameInput.value.trim().length < 6)
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
function revealPassword ()
{
    const pwd = document.getElementById("pwd2")
    alert(pwd.type)
	if (pwd.type == "text") {
		pwd.type = "password"
	} else {
		pwd.type = "text"
	}
}