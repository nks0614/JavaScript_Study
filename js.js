const address = {
    country: 'South Korea',
    city : 'Daegu',
    street : 'Jangi',
    str_num : 111,
    postcode : '00100'
}

//객체 비구조화, Object Destructuring
// const country = 'Japan'

// const { country:nextCountry} = address //rename 가능
// console.log(`${country}, ${nextCountry}`)


//배열 비구조화, Array Destructuring
const [firstCountry, secondCountry, thridCountry] = ['Korea', 'Japan', 'America']
console.log(firstCountry)
