// var h1 = document.querySelector('h1');

// h1.innerHTML = 'DOM padh lo guys';
// h1.style.color = 'pink';

// h1.addEventListener('click', function () {
//     console.log('Dhoom machalee');
// }); 

// var allBtn = document.querySelectorAll('button')

// allBtn.forEach(function(elem){
//     elem.addEventListener('click',function(){
        
//         if(elem.innerHTML == 'Add Friend'){
//             elem.innerHTML = 'Remove'
//         }else{
//             elem.innerHTML = 'Add Friend'
//         }
        
//     })
    
// })top


var btn = document.querySelector('button');
 var main = document.querySelector('main');

btn.addEventListener('click', function () {

    var div = document.createElement('div');

    var x = Math.random() * 81 + 20;
    var y = Math.random() * 45 + 20;

   var c1 = Math.floor(Math.random() * 256);
   var c2 = Math.floor(Math.random() * 256);
   var c3 = Math.floor(Math.random() * 256);

div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    var size = Math.random() * 81 + 20;


    div.style.height = size + 'px';
    div.style.width = size + 'px';
    div.style.borderRadius = '50%';

    div.style.position = 'absolute';
    div.style.left = x + '%';
    div.style.top = y + '%';
   
    main.appendChild(div);

});
