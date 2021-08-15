// Add btn event listener
document.getElementById('login-btn').addEventListener('click',function(){
    // user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userField);

    // check email && Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    // set condition
    if(userEmail == 'ashikrahman5515@gmail.com' && userPassword == 'ashikrahman'){
        // console.log('Welcome sir please sit in ');
        window.location.href = 'banking.html';
    }
    else{
        const p = document.getElementById('set-massage');
        p.style.display = 'block';
        p.style.color = 'red';
        p.style.marginBottom = '10px';   
    }

});
