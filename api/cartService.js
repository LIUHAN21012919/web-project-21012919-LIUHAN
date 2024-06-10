
(function (){
    const userid = localStorage.getItem('id')
    const url = `http://localhost/php/searchCart.php?userid=${userid}`
    cartService(url)
    cartlist(url)

})()

function  cartService(url){
    const listcart = document.getElementById('listCart')
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch(url, requestOptions)
        .then((response) => {

            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");

        })
        .then((result) => {
            if (result.code === 200) {

                result.data.forEach(element => {

                    listcart.innerHTML += `
                  <li>
                        <a href="single-product.html?id=${element.shopid}" class="image"><img src="${element.img}" alt="Cart product Image"></a>
                        <div class="content">
                            <a href="single-product.html" class="title">${element.title}</a>
                            <span class="quantity-price"> <span class="amount">$${element.price}</span></span>
                            <span href="#" class="remove" onclick="del(${element.id})">×</span>
                        </div>
                    </li>
                    `
                });

            }
        })
        .catch((error) => console.error(error));
}

function  cartlist(url){
    const cartItmes = document.getElementById('cartItmes');
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch(url, requestOptions)
        .then((response) => {

            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");

        })
        .then((result) => {
            if (result.code === 200) {

                result.data.forEach(element => {

                    cartItmes.innerHTML += `
                 <tr >
                <th class="text-center" scope="row">
                  <img src="${element.img}" alt="img">
                </th>
                <td class="text-center">
                  <span class="whish-title">${element.title}</span>
                </td>
                <td class="text-center">
                  <span class="badge badge-danger position-static">In Stock</span>
                </td>
          
                <td class="text-center">
                  <span class="whish-list-price"> $${element.price} </span>
                </td>

                <td class="text-center">
                 
                    <span class="trash"  onclick="del(${element.id})"><i class="fas fa-trash-alt"></i> </span>
                </td>
                <td class="text-center">
                  <a href="#" class="btn btn-dark btn--lg">add to cart</a>
                </td>
              </tr>
                    `
                });

            }
        })
        .catch((error) => console.error(error));

}

function del(id){
    const url = `http://localhost/php/deleteCart.php?id=${id}`
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch(url, requestOptions)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");

    })
    .then((result) => {
        if (result.code === 200) {
            console.log(result)
            location.reload()
        }
    })
    .catch((error) => console.error(error));

}

function onCart(){
    const token = localStorage.getItem('token');
    if (token){
        window.location.href = 'cart.html'

    }else {
        console.log(token);
        window.location.href = 'login.html'
    }
}