const div = document.querySelector('#container')

search.addEventListener('click', e => {
    e.preventDefault()
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const type = document.querySelector('#prop-type').value
    const beds = document.querySelector('#beds').value
    const baths = document.querySelector('#baths').value
    const priceMax = document.querySelector('#price-max').value
    const priceMin =document.querySelector('#price-min').value
    const postalCode = document.querySelector('#postal-code').value
    const line = document.querySelector('#line').value
    axios({
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "41f3f91b13mshaa0652a8c3b96f1p165abcjsn42e270cab71c",
        useQueryString: true,
      },
      params: {
        sort: "relevance",
        city: city,
        limit: "50",
        offset: "0",
        state_code: state,
        prop_type: type,
        beds: beds,
        baths: baths,
        price_min: priceMin,
        price_max: priceMax,
        postal_code: postalCode,
        line: line,
        // photo_count: photo_count
      },
    })
      .then((response) => {
        console.log(response.data);
        for(let index = 0; index < response.data.properties.length; index++){
            div.innerHTML += `
              <div>
                <img src=${response.data.properties[index].thumbnail} alt="" />
                <h4>${response.data.properties[index].address.line}</h4>
                <p>${response.data.properties[index].address.city} 
                ${response.data.properties[index].address.state}
                ${response.data.properties[index].address.postal_code}
                </p>
                <small><i class="fas fa-bed"></i> ${response.data.properties[index].beds}</small>
                <small><i class="fas fa-bath"></i> ${response.data.properties[index].baths}</small>
                <small>Size: ${response.data.properties[index].building_size.size}
                ${response.data.properties[index].building_size.units}
                </small>
                <p>price: $${response.data.properties[index].price}</p>
                <a href=${response.data.properties[index].rdc_web_url} target="_blank">View Listing</a>
                </div>     
                `;   
              }
            })
            .catch((error) => {
              console.log(error);
            });
          })
 