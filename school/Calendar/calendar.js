let date = new Date()

let viewYear = date.getFullYear()
let viewMonth = date.getMonth()

const renderCalendar = () => {
    viewYear = date.getFullYear()
    viewMonth = date.getMonth()

    const prevLast = new Date(viewYear, viewMonth, 0)
    const thisLast = new Date(viewYear, viewMonth + 1, 0)

    const prevLastDate = prevLast.getDate()
    const prevLastDay = prevLast.getDay()

    const thisLastDate = thisLast.getDate()
    const thisLastDay = thisLast.getDay()

    const prevDates = []
    const thisDates = [...Array(thisLastDate + 1).keys()].slice(1)
    const nextDates = []

    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`

    let monthString = viewMonth * 1 < 9 ? '0' + (viewMonth * 1 + 1) : viewMonth * 1 +1
    document.querySelector('#currentMonth').value = `${viewYear}-${monthString}`

    if (prevLastDay !== 6) {
        for (let i = 0; i < prevLastDay + 1; i++) {
            prevDates.unshift(prevLastDate - i)
        }
    }

    for (let i = 1; i < 7 - thisLastDay; i++) {
        nextDates.push(i)
    }

    const dates = prevDates.concat(thisDates, nextDates)

    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(thisLastDate);
    dates.forEach((date, i) => {
        const condition = (i >= firstDateIndex && i < lastDateIndex + 1)
                          ? true
                          : false

        if(condition){
            dates[i] = `<div class="date"><span id="${i}" class="this">${date}</span></div>`
        }
        else{
            dates[i] = '<div class="date"><span class="other"></span></div>'
        }

        
    })

    document.querySelector('.dates').innerHTML = dates.join('')

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (date.innerText == today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
    
}

renderCalendar();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1)
  renderCalendar();
}

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
}

const goMonth = () => {
    changeMonth = document.querySelector('#currentMonth').value
    date = new Date(changeMonth.slice(0,4), changeMonth.slice(5)-1)
    renderCalendar()
}

const onClickDate = (event) => {
    if(event.target.id != "dates" && event.target.id != ""){
        let tDay = event.target.innerText
        let diffDate1 = new Date(viewYear, viewMonth, tDay)
        let diffDate2 = new Date()
        diffDate2 = new Date(diffDate2.getFullYear(), diffDate2.getMonth(), diffDate2.getDate());

        var diff = Math.abs(diffDate2.getTime() - diffDate1.getTime());
        diff = Math.ceil(diff / (1000 * 3600 * 24));
        
        if(diffDate1.getTime() < diffDate2.getTime()){
            alert(`${diff}일 전`)
        }
        else{
            alert(`${diff}일 후`)
        }
    }
}

const datesElement = document.getElementById('dates')
datesElement.addEventListener('click', onClickDate)
