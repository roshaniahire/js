let a=10;
let b=20;
let c=30;


function addition(){
    let b=5;
    function addition2(){
        let c=44;
        let r2=b+c;
        return r2;
    }

    addition2();
    return addition2();
}
  addition();
  let output=addition();
  document.write(output);



// *************** agecounter********************//



// let birthyear=prompt("enter your birth year");


// function agecounter(){
//     const currentyear=2023;
//     let result=currentyear-birthyear;
//     return result;
// }

// agecounter();
// let output=agecounter();

// document.write("<h1>your current age is &nbsp;" + output+"</h1>");