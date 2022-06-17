const coin =1;
const dime =5;
const crown = 100;

function coinSorter(x){

    if(x == coin){
        console.log("Input was coin");
    }
    else if(x == dime){
        console.log("Input was dime");
    }
    else if(x == crown){
        console.log("Input was crown");
    }

    else {
        console.log("Input was not valid ");
  
    }

}


for(let i = 0; i<20; i++){
    console.log(Math.floor(Math.random() * 11));
    const y =  Math.floor(Math.random() * 11);

    console.log(y);
    coinSorter(y);
}

coinSorter(101);
