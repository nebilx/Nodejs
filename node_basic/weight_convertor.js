function KilloToPound(Kg){
return Kg * 2.2;
}


function PoundToKillo(lbs){
    return lbs / 2.2046;
}

// let result = KilloToPound(50);
// let result2 = PoundToKillo(220);
// console.log(result);
// console.log(result2);

let lbs_result = KilloToPound(100);
let kg_result = PoundToKillo(lbs_result);


console.log(lbs_result + " lbs " + kg_result + " Kilos.");
