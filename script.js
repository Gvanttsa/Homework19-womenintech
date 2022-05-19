document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form =  event.target;

    //username
    let username = document.getElementById('myname').value;

    if (username.length < 4 || username == "") {
        errors.yourname = "User Name Can Not Be Empty and Must Be More Than 4 Characters";
    }

    //userLastname
    let userLastName = document.getElementById('mylastname').value;

    if (userLastName.length < 4 || userLastName == "") {
        errors.yourlastname = "User Last Name Can Not Be Empty and Must Be More Than 4 Characters";
    }
    //password
    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;
    let showpassword = document.getElementById('passw2');
    let toggleIcon = document.getElementById('toggleIcon');

    if (password != password2 || password == "") {
        errors.password = "Password Can Not Be Empty";
        errors.password2 = "Passwords Do Not Match";
    }

    showHidePassword = () => {
        if (showpassword.type == "password") {
            showpassword.setAttribute('type', 'text');
            toggleIcon.classList.add ('fa-eye-slash');
        } else {
            toggleIcon.classList.remove('fa-eye-slash');
            showpassword.setAttribute('type', 'password'); 
        }
    }
    toggleIcon.addEventListener('click', showHidePassword);

    //radio
    let age = false;
    form.querySelectorAll('[name ="age"]').forEach(element => {
        if (element.checked) {
            age = true;
        }
    });
    if (!age) {
        errors.age = "Please Select Your Age"
    }

    console.log(errors);

    form.querySelectorAll('.error-text').forEach(item => {
        item.innerHtML = '';
    });

    for (let item in errors) {
        console.log(item);
        let errorSpan = document.getElementById('error_' + item);

        if (errorSpan) {
            errorSpan.textContent = errors[item];
        }
    }

    if (Object.keys(errors).length == 0) {
        form.submit();
    }
});