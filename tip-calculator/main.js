function calculateTip(e){
    e.preventDefault()
    var billAmount = document.getElementById('bill-amount').value
    var quality = document.getElementById('quality').value
    var split = document.getElementById('split').value

    if(billAmount === "" || quality === 0){
        alert("Please fill in values")
        return
    }
    if(split === "" || split <= 1){
        split = 1
        document.getElementById('each').style.display = "none"
    }else{
        document.getElementById("each").style.display = "block";
    }
    var total = (billAmount * quality) / split

    total = Math.round(total * 100) / 100
    total = total.toFixed(2)
    document.getElementById('totalTip').style.display = "block"
    document.getElementById('tip').innerHTML = total
}



document.getElementById('totalTip').style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("calculate").onclick = function(e){
    e.preventDefault()
    calculateTip()
}

console.log(calculateTip)