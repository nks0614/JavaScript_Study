let years = [2001, 2010, 2020, 2030]
const str = 'I Love JS'

//es6
// for(let year of years) { //배열에 저장된 정보를 알려줌
//     console.log(year) //이걸로는 배열의 값을 변경 못함!
// }
// for(let char of str){
//     console.log(char)
// }
//es6를 쓰면 for_of를 쓰는 게 편하다고 한다

// for(let year in years){ //배열의 키값을 알려줌
//     console.log(year)
//     console.log(typeof year) //year가 string!
// }


//es5
// years.forEach((year) => { //forEach안에서는 break문을 못 씀
//     console.log(year)
//     // if(year == 2001){
//     //     break
//     // }
// })