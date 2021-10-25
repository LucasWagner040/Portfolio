const next1 = document.querySelector('#next1')
const prev1 = document.querySelector('#prev1')

const next2 = document.querySelector('#next2')
const prev2 = document.querySelector('#prev2')



function handleScrollNext1 (direction){
    const cards = document.querySelector(".cartoes1")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ?
    window.innerWidth / 2 : window.innerWidth - 100
}
function handleScrollPrev1 (direction){
    const cards = document.querySelector(".cartoes1")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ?
    window.innerWidth / 2 : window.innerWidth - 100
}

function handleScrollNext2 (direction){
    const cards = document.querySelector(".cartoes2")
    cards.scrollLeft = cards.scrollLeft += window.innerWidth / 2 > 600 ?
    window.innerWidth / 2 : window.innerWidth - 100
}
function handleScrollPrev2 (direction){
    const cards = document.querySelector(".cartoes2")
    cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 2 > 600 ?
    window.innerWidth / 2 : window.innerWidth - 100
}



next1.addEventListener("click", handleScrollNext1)
prev1.addEventListener("click", handleScrollPrev1)

next2.addEventListener("click", handleScrollNext2)
prev2.addEventListener("click", handleScrollPrev2)