//how to return object from the function and how to apply destructuring.

// function getUserDetails() {
//     let user = {
//         id: 1,
//         name: 'Subramanian',
//         //nested
//         address: {
//             city: 'Coimbatore'
//         },
//         location: {
//             geo: {
//                 lat: 10.89,
//                 lng: 90.89
//             }
//         }
//     }
//     return user ;
// }

// function getUserDetails() {
//     //here we return hardcoded values
//     //how to return dynamic objects with values
//     return {
//         id: 1,
//         name: 'Subramanian',
//         //nested
//         address: {
//             city: 'Coimbatore'
//         },
//         location: {
//             geo: {
//                 lat: 10.89,
//                 lng: 90.89
//             }
//         }
//     }
// }

//how to return dynamic properties
// function getUserDetails(id = 1, name = 'Subramanian', city = 'Coimbatore', lat = 1.0, lng = 90.0) {
//     return {
//         id: id,
//         name: name,
//         //nested
//         address: {
//             city: city
//         },
//         location: {
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         }
//     }
// }


// function getUserDetails(id = 1, name = 'Subramanian', city = 'Coimbatore', lat = 1.0, lng = 90.0) {

//     //if key:value ,leftSide:rightSide is same,return only one 
//     return {
//         id,
//         name,
//         //nested
//         address: {
//             city
//         },
//         location: {
//             geo: {
//                 lat,
//                 lng
//             }
//         }
//     }
// }

//arrow functions and object return
const getUserDetails = (id = 1, name = 'Subramanian', city = 'Coimbatore', lat = 1.0, lng = 90.0) => ({
    id,
    name,
    //nested
    address: {
        city
    },
    location: {
        geo: {
            lat,
            lng
        }
    }
})


console.log(getUserDetails())
console.log(getUserDetails(2, 'Ram', 'Chennai'))