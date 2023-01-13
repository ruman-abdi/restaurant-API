const containerEL= document.getElementById('container')
const fetchData = ()=>{
fetch(' https://example-data.draftbit.com/restaurants').then((response)=>{
    return response.json()
    .then((data)=>{
        let restaurantData =""
       data.map((restaurant)=>{
        restaurantData +=
            `<div class = "card-restaurant">
            <div>
            <h2> ${restaurant.name}</h2>
            </div>
            <img src ="${restaurant.image}"
            <div class =" card-restaurant-details " >
            <div class ="country">
             <p><span> <i class="fas fa-flag"></i>country:${restaurant.country}</span><p>
            </div>
            <div class ="phone">
            <p><span><i class="fas fa-phone"></i>phone:${restaurant.phone}</span><p>
            </div>
            <div class ="address">
            <p><span> <i class="fas fa-home"></i> address:${restaurant.address}</span></p>
            </div>
            <div class ="website">
            <a href = ${restaurant.website} target=_blank>visit website</a>
            </div>
            </div>
            
            </div>`
        })
        containerEL.innerHTML = restaurantData
    })
})
}
fetchData()
