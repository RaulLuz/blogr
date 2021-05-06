let toggle = document.querySelector("#toggle");
let menu = document.querySelector("#headerMenu");
let subItem = document.querySelector("#subItem");
let subClick = document.querySelector("#subClick");

toggle.addEventListener('click', function(){
    
    if (menu.classList.contains('hide-for-mobile')){
        menu.classList.remove('hide-for-mobile');
    } else {
        menu.classList.add('hide-for-mobile');
    }
    
})

product.addEventListener('click', function(){
    
    if (subProduct.classList.contains('hide-for-mobile')) {
        subProduct.classList.remove('hide-for-mobile');
    } else {
        subProduct.classList.add('hide-for-mobile');
    }
})

company.addEventListener('click', function(){
    
    if (subCompany.classList.contains('hide-for-mobile')) {
        subCompany.classList.remove('hide-for-mobile');
    } else {
        subCompany.classList.add('hide-for-mobile');
    }
})

connect.addEventListener('click', function(){
    
    if (subConnect.classList.contains('hide-for-mobile')) {
        subConnect.classList.remove('hide-for-mobile');
    } else {
        subConnect.classList.add('hide-for-mobile');
    }
})

