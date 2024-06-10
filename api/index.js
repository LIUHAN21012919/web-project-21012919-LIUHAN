(function (){
    const url = 'http://localhost/php/shop.php';
    data1(url)
    data2(url)
    data3(url)
    allData(url)
})()


function  data1(url){

    const  shopping = document.getElementById('shopping');

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            if (res.code == 200){
                // 渲染html
                const dataSplice = res.data.splice(0,4)


                dataSplice.map((item)=>{
                    shopping.innerHTML += `
                     <div class="slider-item" style="width: 300px;" >
                                    <div class="card product-card" >
                                        <div class="card-body p-0">
                                            <div class="media flex-column">
                                                <div class="product-thumbnail position-relative">
                                                    
                                                    <a href="single-product.html?id=${item.id}">
                                                        <img class="first-img" src="${item.img}" alt="thumbnail">
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <div class="product-desc">
                                                        <h3 class="title">
                                                            <a>${item.title}</a>
                                                        </h3>
                                                       
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="product-price">$${item.price}</span>
                                                             <a href="single-product.html?id=${item.id}">
                                                             <button class="pro-btn">
                                                                <i class="icon-basket"></i>
                                                            </button>
</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    `
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);

        });
}
function  data2(url){
    const  items = document.querySelector('#items');
    console.log(items)
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            if (res.code == 200){

                const dataSplice = res.data.splice(4,4)

                dataSplice.map((item)=>{
                    items.innerHTML += `
                 <div class="slider-item" style="width: 300px;" >
                                    <div class="card product-card" >
                                        <div class="card-body p-0">
                                            <div class="media flex-column">
                                                <div class="product-thumbnail position-relative">
                                               
                                                    <a href="single-product.html?id=${item.id}">
                                                        <img class="first-img" src="${item.img}" alt="thumbnail">
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <div class="product-desc">
                                                        <h3 class="title">
                                                            <a>${item.title}</a>
                                                        </h3>
                                                       
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="product-price">$${item.price}</span>
                                                             <a href="single-product.html?id=${item.id}">
                                                             <button class="pro-btn">
                                                                <i class="icon-basket"></i>
                                                            </button>
</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    `
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);

        });


}
function data3(url){
    const items = document.getElementById('items_12')
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            if (res.code == 200){

                const dataSplice = res.data.splice(8,4)


                dataSplice.map((item)=>{
                    items.innerHTML += `
                     <div class="slider-item" style="width: 300px;" >
                                    <div class="card product-card" >
                                        <div class="card-body p-0">
                                            <div class="media flex-column">
                                                <div class="product-thumbnail position-relative">
                                                 
                                                    <a href="single-product.html?id=${item.id}">
                                                        <img class="first-img" src="${item.img}" alt="thumbnail">
                                                    </a>
                                                </div>
                                                <div class="media-body">
                                                    <div class="product-desc">
                                                        <h3 class="title">
                                                            <a>${item.title}</a>
                                                        </h3>
                                                        
                                                        <div class="d-flex align-items-center justify-content-between">
                                                            <span class="product-price">$${item.price}</span>
                                                             <a href="single-product.html?id=${item.id}">
                                                             <button class="pro-btn">
                                                                <i class="icon-basket"></i>
                                                            </button>
</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    `
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);

        });

}

function  allData(url){
    const list = document.getElementById('datalist');
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(res => {
            if (res.code == 200){
                res.data.map((item)=>{
                    list.innerHTML += `
                      <div class="col-sm-6 col-md-4 mb-30">
            <div class="card product-card">
              <div class="card-body">
                <div class="product-thumbnail position-relative">
             
                  <a href="single-product.html?id=${item.id}">
                    <img class="first-img" src="${item.img}" alt="thumbnail">
                  </a>
       
                </div>
                <div class="product-desc py-0 px-0">
                  <h3 class="title">
                    <a>${item.title}</a>
                  </h3>
                  <div class="star-rating">
              
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="product-price">$${item.price}</span>
                   <a href="single-product.html?id=${item.id}">
                                                             <button class="pro-btn">
                                                                <i class="icon-basket"></i>
                                                            </button>
</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- product-list End -->
          </div>
                    `
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);

        });
}