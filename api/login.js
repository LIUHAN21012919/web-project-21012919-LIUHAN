
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
const login = document.getElementById('login');

login.addEventListener('click',()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username,password)

    if(username === '' || password === ''){
        alert('The username or password cannot be empty');
        return;
    }
    // 判断用户名和密码是否正确
    const urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    fetch("http://localhost/php/login.php", requestOptions)
        .then((response) =>{
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((result) => {
            if (result.code === 200 ){

                localStorage.setItem('token',result.token)
                localStorage.setItem('avter',result.data.avter)
                localStorage.setItem('email',result.data.email)
                localStorage.setItem('id',result.data.id)
                localStorage.setItem('username',result.data.username)
                window.location.href = 'index.html';

            }else {
                alert(result.msg);
            }
        })
        .catch((error) => console.error(error));
})

