
function result() {
    let temp = document.querySelector("#result").value;

    if (temp>30){
        document.querySelector("#result").innerHTML = "its too hot"
    }
    else if(temp<30){
        document.querySelector("#result").innerHTML = "its too cold"
    }
    else {
        document.querySelector("#result").innerHTML = "its normal temperature"
    }
}