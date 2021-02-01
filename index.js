(function() {
  'use strict';

  // YOUR CODE HERE
 
   var stopButt = document.querySelector('#stopButton');
   var slowButt = document.querySelector('#slowButton');
   var goButt = document.querySelector('#goButton');


   

   var redStopLight = document.querySelector('#stopLight')
  
   var count=0;
 stopButt.addEventListener('click', function(){
    count++;
           
  
       if (count %2 === 0){
           document.querySelector('#stopLight').style.backgroundColor="black";
   }
       else{
         document.querySelector('#stopLight').style.backgroundColor="red";
       }
   });
  
   
 slowButt.addEventListener('click', function(){
     count++;
  if (count %2 === 0){
     document.querySelector('#slowLight').style.backgroundColor="black";
     }
     else{
       document.querySelector('#slowLight').style.backgroundColor="yellow";
     }});
  
   goButt.addEventListener('click', function(){
    count++;
   if (count %2 === 0){
     document.querySelector('#goLight').style.backgroundColor="black";
    }
   else{
      document.querySelector('#goLight').style.backgroundColor="green";
    }});
})();
