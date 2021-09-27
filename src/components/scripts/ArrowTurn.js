let arrowCount = 0


function ArrowTurn() {
    console.log("Arrow turned")
    arrowCount++
    const arrowImg = document.getElementById("Arrow")

    if (arrowCount % 2 === 1) {
arrowImg.classList.add("Turn")

}
else if (arrowCount % 2 === 0) {
    arrowImg.classList.remove("Turn")
}
}

export default ArrowTurn