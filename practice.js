
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C33",
    "#33FFD7", "#5733FF", "#FF3333", "#33FFB5", "#FFC433",
    "#33A1FF", "#8C33FF", "#57FF33", "#FF33C4", "#33FFC4",
    "#FF5733", "#33C4FF", "#C433FF", "#FF8C33", "#A1FF33"
];

document.body.addEventListener(('click'),(event)=>
{
    const element=document.createElement("div");
    element.className="circle";
    element.innerHTML="HI";


    const x=event.clientX;
    const y=event.clientY;

    const ind=Math.floor(Math.random()*colors.length);
    element.style.backgroundColor=colors[ind];
    element.style.left=`${x-25}px`;
    element.style.top=`${y-25}px`;
    document.body.appendChild(element);



    
     

})

// document.body.addEventListener("click", (event)=>{
  
//     const circle = document.createElement('div');
//     circle.className = 'circle';
//     circle.textContent="Hi";
    
//     const x = event.clientX;
//     const y = event.clientY;
  
//     circle.style.left = `${x-25}px`
//     circle.style.top= `${y-25}px`
  
  
//     const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
//     circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
//     document.body.appendChild(circle);
  
//     // setTimeout(()=>{
//     //   circle.remove();
//     // } ,5000)
//   })