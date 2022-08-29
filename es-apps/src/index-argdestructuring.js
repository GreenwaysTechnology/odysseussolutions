
// function printUserDetails(user) {
//     console.log(`Id ${user.id}`)
//     console.log(`Name ${user.name}`)
//     console.log(`City ${user.address.city}`)
//     console.log(`Lat ${user.location.geo.lat}`)
//     console.log(`Lng ${user.location.geo.lng}`)
// }
//Object Destructuring : breaking object properties into local variables

// function printUserDetails(user) {
//     //Destructure : unpacking varibles from the object 
//     const { id, name, address, location } = user
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
//     console.log(`Lat ${location.geo.lat}`)
//     console.log(`Lng ${location.geo.lng}`)
// }
//destructure nested properties
// function printUserDetails(user) {
//     //Destructure : unpacking varibles from the object 
//     const { id, name, address: { city }, location: { geo: { lat, lng } } } = user
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
//     console.log(`Lat ${lat}`)
//     console.log(`Lng ${lng}`)
// }

//destructuring inside func arg.
// function printUserDetails({ id, name, address: { city }, location: { geo: { lat, lng } } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
//     console.log(`Lat ${lat}`)
//     console.log(`Lng ${lng}`)
// }

//destructuring with arrow functions
const printUserDetails = ({ id, name, address: { city }, location: { geo: { lat, lng } } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
    console.log(`Lat ${lat}`)
    console.log(`Lng ${lng}`)
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

