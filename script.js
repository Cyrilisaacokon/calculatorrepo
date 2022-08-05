let play = document.getElementById("play");

function handleClick(number){
    // console.log(number)
    play.value += number;
}

function clearAll() {
    play.value = "";
  }
  
  function deleteEach(){
      play.value =  play.value.slice (0, -1)
  }

  function calculateValue(){
    let result = eval(play.value)
    play.value = result;
}



// var buttons = document.getElementsByClassName("button");
// var arr = [...buttons];

// arr.forEach((element, index) => {
//   element.addEventListener("click", () => {
//     element.style.opacity = "1";

//     arr
//       .filter(function (item) {
//         return item != element;
//       })
//       .forEach((item) => {
//         item.style.opacity = "0";
//       });
//   });
// });


var buttons = document.getElementsByClassName("button");
var arr = [...buttons];
console.log(arr)
arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(222, 26%, 31%)"
      document.getElementById("keys").style.backgroundColor = "hsl(223, 31%, 20%)"
      document.getElementById("play").style.color = "white"
      document.getElementById("play").style.backgroundColor = " hsl(224, 36%, 15%)"

      document.getElementById("play").style.border = " hsl(224, 36%, 15%)"
      document.getElementById("same").style.color = "white"
      document.getElementById("ame").style.color = "white"
      let sol= document.getElementsByClassName("sol")
      console.log(sol)
       for (let index = 0; index < sol.length; index++) {
        sol[index].style.color = " black "
        sol[index].style.backgroundColor = "white"
        
       }
       document.getElementById("tri").style.backgroundColor = " hsl(224, 36%, 15%)"
       document.getElementsByClassName("sol")[3].style.backgroundColor = "hsl(225, 21%, 49%)"
      //  document.getElementsByClassName("sol")[16].style.backgroundColor = "hsl(225, 21%, 49%)"
       document.getElementsByClassName("sol")[3].style.color = "white"
      //  document.getElementById("oll").style.backgroundColor = "red"
       document.getElementById("ool").style.backgroundColor = " hsl(225, 21%, 49%)"
       document.getElementById("oll").style.backgroundColor = "red"

       
      } else if (index == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = " white"
        document.getElementById("keys").style.backgroundColor = "hsl(45, 7%, 89%)"
        document.getElementById("play").style.backgroundColor = "white"
        document.getElementById("play").style.color = " hsl(60, 10%, 19%)"
        document.getElementById("play").style.border = "hsl(45, 7%, 89%) solid"
        document.getElementById("same").style.color = "black"
        document.getElementById("ame").style.color = "black"
      let sol= document.getElementsByClassName("sol")
      console.log(sol)
      for (let index = 0; index < sol.length; index++) {
        sol[index].style.color = "black "
        sol[index].style.backgroundColor = "white"
        
      }
      
      document.getElementsByClassName("button")[1].style.backgroundColor = "hsl(25, 98%, 40%)"
    document.getElementById("tri").style.backgroundColor = "hsl(45, 7%, 89%)"
    document.getElementsByClassName("sol")[3].style.backgroundColor = "rgb(41, 171, 180)"
    document.getElementsByClassName("sol")[3].style.color = "black"
    document.getElementById("ol").style.backgroundColor = "rgb(41, 171, 180)"
    document.getElementById("ool").style.backgroundColor = "hsl(25, 98%, 40%)"
    document.getElementById("oll").style.backgroundColor = "rgb(41, 171, 180)"
    
    
    // document.getElementsByClassName("sol")[16].style.backgroundColor = "rgb(41, 171, 180)"
    
  }else if (index == 2) {
    document.getElementById("play").style.backgroundColor = "hsl(268, 71%, 12%)"
    document.getElementById("play").style.color = "hsl(62, 100%, 62%)"
    document.getElementById("play").style.border = "none"
      document.getElementsByTagName("body")[0].style.backgroundColor = "hsl(268, 75%, 9%)"
      document.getElementById("keys").style.backgroundColor = " hsl(268, 71%, 12%)"
      document.getElementById("same").style.color = "hsl(62, 100%, 62%)"
      document.getElementById("ame").style.color = "hsl(62, 100%, 62%)"
      let sol= document.getElementsByClassName("sol")
      
      console.log(sol)
      for (let index = 0; index < sol.length; index++) {
        sol[index].style.color = " hsl(62, 100%, 62%) "
        sol[index].style.backgroundColor = "hsl(268, 75%, 9%)"
        
      }
      
      // document.getElementsByClassName("button")[2].style.backgroundColor = " hsl(268, 71%, 12%)"
      document.getElementsByClassName("button")[2].style.backgroundColor = " rgb(47, 241, 255)"
      document.getElementById("tri").style.backgroundColor = " hsl(268, 71%, 12%)"
      document.getElementById("oll").style.backgroundColor = " rgb(47, 241, 255)"
      document.getElementById("ool").style.backgroundColor = "rgb(68, 3, 68)"
      document.getElementsByClassName("sol")[3].style.backgroundColor = "rgb(68, 3, 68)"
      document.getElementsByClassName("sol")[3].style.color = "white"
      

    }
    else {
      document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(92, 204, 125)";
      // 52 100 62
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});