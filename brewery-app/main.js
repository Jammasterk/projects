var nameInput = document.querySelector('#name')
var street = document.querySelector('#street_name')
var state = document.querySelector('#state')
var postal_code = document.querySelector('#postal_code')
var phone = document.querySelector('#phone')
var website = document.querySelector('#website_url')
var submit = document.querySelector('#brew-submit')

submit.addEventListener('click', function(e){
    e.preventDefault()
    var cityValue = document.querySelector('#city-value').value
    
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${cityValue}`)
    .then((res) => {
        console.log(res)
        var nameTitle = document.querySelector('#name_title').value
          
        })
    .catch((err) => console.log(err));
})
