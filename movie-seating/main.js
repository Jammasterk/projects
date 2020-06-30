const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row.seat:not(.occupied')
const count = document.querySelector(".count")
const total = document.querySelector(".total");
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value

function updatedSearchCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    // console.log(selectedSeats)
    
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat) )
    
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice
}

movieSelect.addEventListener('change', (e)=> {
    ticketPrice = +e.target.value
    console.log(e.target.selectedIndex)
    updatedSearchCount()
})

container.addEventListener('click', (e)=> {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
    
    ){
        console.log(e.target)
        e.target.classList.toggle('selected')

        updatedSearchCount()
    }
})