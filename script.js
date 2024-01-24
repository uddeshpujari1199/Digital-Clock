let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");


setInterval(()=>{
    let currentdate= new Date;

    hr.innerHTML=(currentdate.getHours()<10?"0":"")+ currentdate.getHours();
    min.innerHTML=(currentdate.getMinutes()<10?"0":"")+ currentdate.getMinutes();
    sec.innerHTML=(currentdate.getSeconds()<10?"0":"")+ currentdate.getSeconds();

    console.log(currentdate.getHours())
    
},1000)

