//nested objects 
let user = {
    id: 1,
    name: 'Subramanian',
    //nested
    address: {
        city: 'Coimbatore'
    },
    location: {
        geo: {
            lat: 10.89,
            lng: 90.89
        }
    }
}
console.log(user.id)
console.log(user.name)
console.log(user.address.city)
console.log(user.location.geo.lat)
console.log(user.location.geo.lng)



