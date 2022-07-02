 const button = document.querySelector(".Btn");
 let icon = document.querySelector(".icon");


        button.addEventListener('click',()=>{
           let iconEl = icon.children[0].children[0];
           iconEl.getAttribute('href')=== '#arrow' ? iconEl.setAttribute('href', '#arrow-black') : iconEl.setAttribute('href', '#arrow')
        });