
const addBtn=document.getElementById('add-btn');
const clear=document.getElementById('clear');

function add(){
   const input=document.getElementById('input');
   const name=input.value;
   if(name===''){
      return alert('tpying now ');
   }
   // display in the ui
   displayData(name);
   // add to localstoreg
   addProductsCard(name);

   input.value='';
}


// display data 
const  displayData=name=>{
   // data show
   const products =document.getElementById('products');
   let li=document.createElement('li');
   li.innerText=name;
   products.appendChild(li);
}

const getCard=()=>{
   let card=localStorage.getItem('card');
   let cardObj;
   if(card){
      cardObj=JSON.parse(card);
   }else{
      cardObj={};
   }
   return cardObj;
}
const  addProductsCard=name=>{
   let card =getCard();
   if(card[name]){
      card[name]=card[name]+1;
   }else{
      card[name]=1;
   }
   // console.log(card);
   let cardConvetStr=JSON.stringify(card);
   localStorage.setItem('card',cardConvetStr);
}

// show storage data
const showData=()=>{
   let totalProduct =getCard();
   for(const productsName in totalProduct){
      displayData(productsName);
   }
}
showData();