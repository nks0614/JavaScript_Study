const address = {
    country: 'South Korea',
    city : 'Daegu',
    street : 'Jangi',
    str_num : 111,
    postcode : '00100'
}

//객체 비구조화, Object Destucturing
const country = 'Japan'
const city = 'Osaka'

const { country:nextCountry} = address //rename 가능
console.log(`${country}, ${nextCountry}`)