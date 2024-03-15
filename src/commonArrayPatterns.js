// common patterns for updating arrays in state!
const shoppingCart=[
    {id:1, product:"HMDI cable", price:4},
    {id:2, product:"bake oven ", price:24},
    {id:3, product:"Peach pie", price:6.4},
];

// adding to an array 
[...shoppingCart,{id:4, product:"mug",price:7.5}];

// removing an element !
shoppingCart.filter((item)=>item.id !==2);


//updating all elements in an array!
shoppingCart.map((item)=>{
    return{
        ...item,
        product:item.product.price.toLowerCase(),
    };
    
});

// modifying  A Particular elementin an array

shoppingCart.map((item)=>{
    if(item.id ===3){
        return {...item,price:10.99};
    }else{
        return item;
    }
})