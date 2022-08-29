
function add(a, b) {
    return a + b
}

let x = 10;
let y = 20;
add(x, y)

add(20, 30)

//how to pass objects to the functions as parameter

function printUserDetails(user) {
    console.log(`Id ${user.id}`)
    console.log(`Name ${user.name}`)
    console.log(`City ${user.address.city}`)
    console.log(`Lat ${user.location.geo.lat}`)
    console.log(`Lng ${user.location.geo.lng}`)
}

//values are passed to the function in two ways
//1.hardcoded 2.variables
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
printUserDetails(user)

//hardcoded values
printUserDetails({
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
})

