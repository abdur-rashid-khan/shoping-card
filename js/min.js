const input=document.getElementById('input');
const addBtn=document.getElementById('add-btn');
const clear=document.getElementById('clear');

// display data 
const  displayData=()=>{
   let inputValue=input.value;
   // data show
   const products =document.getElementById('products');
   let li=document.createElement('li');
   li.innerText=`${inputValue}`;
   products.appendChild(li);
   input.value='';
}
addBtn.addEventListener('click',()=>{
   displayData();
})