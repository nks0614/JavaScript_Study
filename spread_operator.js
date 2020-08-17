let years = [2001, 2010, 2020, 2030]
let yearsCp = [2000, ...years] //배열을 복사

// console.log(yearsCp)

let koreanHistory = {
    liberate : 1945,
    625 : 1950
}

let history = {
    worldWar1 : 1914,
    worldWar2 : 1945,
    ...koreanHistory //객체도 복사
}

// console.log(history)

let address1 = {
    country : "South Korea",
    city : "Seoul"
}

let address2 = {
    ...address1,
    country : "United State" //이렇게 복사해온 객체와 같은 키값이면 변경이 됨
}

console.log(address2)