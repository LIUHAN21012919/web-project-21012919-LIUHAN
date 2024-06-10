
const reg = document.getElementById('reg')

reg.addEventListener('click', () =>{
    const username = document.getElementById(
        'regusername'
    ).value
    const password = document.getElementById(
        'regpassword'
    ).value
    const email = document.getElementById(
        'email'
    ).value


    const avter = 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg'

    if (username === '' || password === '' || email === '' ){
        alert('Please provide complete information')
        return
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("email", email);
    urlencoded.append("avter", avter);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };


    fetch("http://localhost/php/reg.php", requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((result) => {
            if (result.code == 200){

                localStorage.setItem('avter',result.data.avter)
                localStorage.setItem('email',result.data.email)
                localStorage.setItem('id',result.data.id)
                localStorage.setItem('username',result.data.username)
                localStorage.setItem('token', JSON.stringify(result.data.token));
                window.location.href = 'index.html';
            }else {
                alert(result.msg)
            }
        })
        .catch((error) => console.error(error));

})


