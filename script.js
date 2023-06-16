setInterval(()=>{
   let d=new Date();
   let h=d.getHours();
   let m=d.getMinutes();
   let s=d.getSeconds();
   let hrotate=30*h+m/2;
   let mrotate=6*m;
   let srotate=6*s;
   hour.style.transform=`rotate(${hrotate}deg)`
   min.style.transform=`rotate(${mrotate}deg)`
   second.style.transform=`rotate(${srotate}deg)`;
},1000)