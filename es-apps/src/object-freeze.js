//Object augmentation and how to avoid that.

const { log } = console;

let profile = {
    id: 1,
    name: 'Subramanian'
}
Object.freeze(profile)
log('Before Update Profile', profile)
profile.city = 'Coimbatore'
log('After Update Profile', profile)
profile.name = 'Ram'
log('After Update Profile', profile)
delete profile.name
log('After Update Profile', profile)


const emp = {
    name: 'foo'
}
emp.name = 'bar'
console.log(emp)
emp = {
    id:12
}