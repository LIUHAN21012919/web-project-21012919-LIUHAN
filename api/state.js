

(function (){

    const token = !!localStorage.getItem('token');
    const stateShow_t = document.getElementById('stateShow_t')
    const stateShow_o = document.getElementById('stateShow_o')

    if (token){
        stateShow_t.style.display = 'none'
        stateShow_o.style.display = 'block'
        stateShow_o.innerHTML = `
                           <div style="display: flex">
                                 <p style="color: #fff;margin-right: 5px;">${localStorage.getItem('username')}</p>
                                <img src="${localStorage.getItem('avter')}" alt="" srcset="" style="width: 30px;height: 30px;border-radius: 50%;">
        
                               <p style="cursor: pointer" id="esc">ESC</p>
                    </div>
        `
    }else {

        stateShow_t.style.display = 'block'
        stateShow_o.style.display = 'none'
    }
})()
const  esc = document.getElementById('esc')
esc.addEventListener('click', () =>{
    localStorage.clear()
    window.location.reload()
})

