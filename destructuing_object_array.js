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
// const [firstCountry, secondCountry, thirdCountry] = ['Korea', 'Japan', 'America']
//이건 순서대로 명명 되는거
// console.log(firstCountry)

//객체 리터럴, Object Literal
// function getAddress(country, city, street){
//     const myAddress = { 
//         country : country, //이렇게 쓰는 건데 
//         city, //변수명이랑 같다면
//         street, //줄여 쓸 수 있다.
//         str_num : 111, //이렇게 추가 정의할 수도 있다.
//         postcode : '0920'
//     }
//     console.log(myAddress)
// }

// getAddress('Japan', 'Osaka', 'street')



