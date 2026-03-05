
//object deconstructing enables us to extract properties from objects into distinct variableas.


const dreamHoliday={
    destination:'Shirdi',
    activity:'Darshan many pilgrimes',
    accomodation:'Sai Ashram',
    companion:'my family'
}

const {destination,activity,accomodation,companion}= dreamHoliday

console.log(`I would love to go to ${destination}, to ${activity}. I'd sleep in ${accomodation} and hang out with ${companion} all day `)