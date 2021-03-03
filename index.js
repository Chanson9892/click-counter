var clicks = 0
var increaseButton = document.getElementById('btn-increase')
var decreaseButton = document.getElementById('btn-decrease')
var resetButton = document.getElementById('btn-reset')

increaseButton.onclick = function(){
    clicks++
    document.getElementById("clicks").innerHTML = clicks;
    console.log(clicks)
}
decreaseButton.onclick = function(){
    if (clicks > 0){
        clicks--
        document.getElementById("clicks").innerHTML = clicks;
        console.log(clicks)
    }
}

resetButton.onclick = function(){
    clicks = 0
    document.getElementById("clicks").innerHTML = clicks;
    console.log(clicks)
}

