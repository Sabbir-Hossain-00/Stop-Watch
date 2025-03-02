const  bigScreen = document.getElementById("screen");
const showTime = document.getElementById("show-time")


let count = 0 ;
let intervalId ;


const startCount = ()=>{
  count ++ ;
  intervalId = setInterval(()=>{
    bigScreen.innerText = count ++ ;
  },1000)
 
}

const stopCount = ()=>{
  clearInterval(intervalId);
}

const resetCount = ()=>{
  count = 0 ;
  bigScreen.innerText = 0 ;
  clearInterval(intervalId);
}

const getCount = ()=>{
  const gettingCount = count - 1 ;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
   <p class = "text-2xl text-slate-900 font-bold mt-2">The stoping time is ${gettingCount}</p>
  `
  showTime.append(newDiv);
}

const clearCount = ()=>{
  showTime.innerHTML = "";
}





document.getElementById("start-btn").addEventListener("click",()=>{
   startCount();
});

document.getElementById("stop-btn").addEventListener("click",()=>{
    
   stopCount();
});

document.getElementById("reset-btn").addEventListener("click",()=>{
  resetCount();
});

document.getElementById("get-time-btn").addEventListener("click",()=>{
  getCount();
});

document.getElementById("clear-btn").addEventListener("click",()=>{
  clearCount();
})