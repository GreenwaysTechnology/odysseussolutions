//Functional Programming Principle : pure function 

/**
 * Pure function:
 *  1.A function is pure if function does not modify the input parameters  and also it should not do side effects.
 * 2.if a function wants to modify the input parameters, it should return immuable object. 
 */

//Rule 1:
//side effect: if function does io operation, mutations on parameters - side effects
//if any function does side effects - impure function.

//pure function
function calculate(a) {
    return a;
}
console.log(calculate(10))

function TaskBar(props) {
    return props
}
TaskBar({ title: 'Google Pages' })
/////////////////////////////////////////////////////////////////////////////////////
//Pure function rule 2:

//How to make this function pure, -> return immutable object .

//in order to make any function pure, we need to return immutable object.
//Ways
//1. return plain java script


// function updateProfile(profile, city) {
//     //update city;
//     profile.city = city;
//     return profile;
// }

// function updateProfile(profile, city) {
//     //return new Object by copying old object properties
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

//way 2: Object.assign

// function updateProfile(profile, city) {
//     //return new Object by copying old object properties
//     return Object.assign({}, profile, { city: city })
// }
//way 3: using es 7 spread Operator.

// function updateProfile(profile, city) {
//     //return new Object by copying old object properties
//     return { ...profile, city: city }
// }
const updateProfile = (profile, city) => ({ ...profile, city })

let profile = {
    id: 1,
    name: 'subramanian',
    city: 'chennai'
}
console.log('before update ', profile)
const result = updateProfile(profile, 'coimbatore')
console.log('After update', result)
console.log(profile === result ? 'Same Object' : 'Different Object')















