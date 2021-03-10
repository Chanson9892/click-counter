var clicks = 0
var backgroundPercent = 10
var increaseButton = document.getElementById('btn-increase')
var decreaseButton = document.getElementById('btn-decrease')
var resetButton = document.getElementById('btn-reset')

increaseButton.onclick = function(){
    clicks++
    backgroundPercent += 10
    document.getElementById("clicks").innerHTML = clicks
    setGradient()
}

decreaseButton.onclick = function(){
    if (clicks > 0){
        clicks--
        backgroundPercent -= 10
        document.getElementById("clicks").innerHTML = clicks
        setGradient()
    }
}

resetButton.onclick = function(){
    clicks = 0
    backgroundPercent = 10
    document.getElementById("clicks").innerHTML = clicks
    setGradient()
}

function setGradient() {
    document.body.style.background = "linear-gradient(to right, rgb(56, 185, 228), white " + backgroundPercent + "%, lightblue 30%, green)";
}

