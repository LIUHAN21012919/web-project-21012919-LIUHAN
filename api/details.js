(function (){

    cartDetails()

})()

function  cartDetails(){
    const details = document.getElementById('details')
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const url = `http://localhost/php/ProductDetails.php?id=${id}`;
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    fetch(url, requestOptions)
        .then((response) =>{
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((result) => {
            console.log(result);
            if (result.code === 200) {
                details.innerHTML = `
                     <div class="col-lg-6 mb-5 mb-lg-0">
        <div>
          <div class="position-relative">
            <span class="badge badge-danger top-right">New</span>
          </div>
          <div class="product-sync-init mb-20">
            <div class="single-product">
              <div class="product-thumb">
                <img src="${result.data[0].img}" alt="product-thumb">
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-lg-6">
        <div class="single-product-info">
          <div class="single-product-head">
            <h2 class="title mb-20">${result.data[0].title}</h2>
            <div class="star-content mb-20">
              <span class="star-on"><i class="ion-ios-star"></i> </span>
              <span class="star-on"><i class="ion-ios-star"></i> </span>
              <span class="star-on"><i class="ion-ios-star"></i> </span>
              <span class="star-on"><i class="ion-ios-star"></i> </span>
              <span class="star-on"><i class="ion-ios-star"></i> </span>
              <a href="#" id="write-comment"><span class="ms-2"><i class="far fa-comment-dots"></i></span>
                Read reviews <span>(1)</span></a>
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModalCenter"><span class="edite"><i class="far fa-edit"></i></span> Write a
                review</a>
            </div>
          </div>
          <div class="product-body mb-40">
            <div class="d-flex align-items-center mb-30">
              <span class="product-price me-2"><del class="del">$${result.data[0].price}</del>
                <span class="onsale">$${result.data[0].originalprice}</span></span>
              <span class="badge position-static bg-dark rounded-0">Save 10%</span>
            </div>
            <p>
                ${result.data[0].briefintroduction}
            </p>
          
          </div>
          <div class="product-footer">
            <div class="product-count style d-flex flex-column flex-sm-row mt-30 mb-30">
            
              <div>
                <button class="btn btn-dark btn--xl mt-5 mt-sm-0" onclick="cart(${result.data[0].id})">
                  <span class="me-2"><i class="ion-android-add"></i></span>
                  Add to cart
                </button>
              </div>
            </div>
            <div class="addto-whish-list">
              <a href="#"><i class="icon-heart"></i> Add to wishlist</a>
              <a href="#"><i class="icon-shuffle"></i> Add to compare</a>
            </div>
            <div class="pro-social-links mt-10">
              <ul class="d-flex align-items-center">
                <li class="share">Share</li>
                <li>
                  <a href="#"><i class="ion-social-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-google"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-pinterest"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
                `
            }
        })
        .catch((error) => console.error(error));

}


function    cart(shopid){
    if (!localStorage.getItem('token')){
        window.location.href = 'login.html';
    }
    const userid = localStorage.getItem('id')
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("shopid", shopid);
    urlencoded.append("userid", userid);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    fetch("http://localhost/php/cart.php", requestOptions)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then((result) => {
            if (result.code === 200) {

                alert(result.msg)
                location.reload();
            }
        })
        .catch((error) => console.error(error));
}





