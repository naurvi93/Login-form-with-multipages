const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

form.addEventListener('submit', (e)=>{
	let messages=[]
	if (email.value == ''||email.value==null){
		messages.push('email is required')
	}

	if (messages.length > 0){
		e.preventDefault()
		errorElement.innerText =messages.join(', ')
	}
})

/*****function to check userid & password******/
function check(form)
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.email.value == "radhika123" && form.password.value == "radhika123")
  {
    window.open('index2.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Incorrect Password or Username")/*displays error message*/
  }
}


