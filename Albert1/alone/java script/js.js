      const container = document.getElementById('container');
      const grey = document.getElementById('grey');
      const title = document.getElementById('title');
      const content = document.getElementById('content');
      const styleButton = document.getElementById('styleButton');
      const footer = document.getElementById('footer');
      const a = Math.random();
      const homeLink= window.document.getElementById('homeLink');
      const homeSection=window.document.getElementById('homeSection');
      const whiteLove = document.querySelectorAll('.white');
      // Container Styles
       
      title.style.background="red";
       
       
     title.style.opacity='0';

      //button

       styleButton.style.background="green";
     styleButton.addEventListener('dblclick', function(){
         
          title.style.opacity='1'
          title.style.transition='6s';
          title.style.position='relative';
          title.style.textAlign="center";
          

          if(a>6){
            title.style.background='yellow';
          }
          
          else{
            title.style.background='pink';
          }

           window.setInterval(() => {
            homeSection.style.background="purple";
            homeSection.style.transition="3s";
            title.style.background="white";
           }, 2000);

            

     })

//grey

grey.style.background="blue";
grey.style.display="flex";
grey.style.marginLeft="20px" ;

//home

homeLink.addEventListener('click',(event)=>{
   
    event.preventDefault();

    homeSection.scrollIntoView({
      
        behavior:"smooth"
    })

})

 

//homeSection

 
homeSection.style.height="50rem";

homeSection.addEventListener('click',(c)=>{


    homeLink.scrollIntoView({
        behavior:"smooth"
    })


})

//white

whiteLove.style.color ='red';


//footer

footer.style.fontSize="20rem";



const add = alert("hi");
console.log(add);
