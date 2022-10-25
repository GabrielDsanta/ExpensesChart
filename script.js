
const monBar = document.querySelector('.MonBar')
const tueBar = document.querySelector('.TueBar')
const wedBar = document.querySelector('.WedBar')
const thuBar = document.querySelector('.ThuBar')
const friBar = document.querySelector('.FriBar')
const satBar = document.querySelector('.SatBar')
const sunBar = document.querySelector('.SunBar')

monBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanMonBar = ParentDiv.children[0]

    if(SpanMonBar.classList.contains('Hide')){
        SpanMonBar.classList.remove('Hide')
        SpanMonBar.classList.add('ValuesMonth')
    }
})
monBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanMonBar = ParentDiv.children[0]

    if(SpanMonBar.classList.contains('ValuesMonth')){
        SpanMonBar.classList.remove('ValuesMonth')
        SpanMonBar.classList.add('Hide')
    }
})

tueBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanTueBar = ParentDiv.children[0]

    if(SpanTueBar.classList.contains('Hide')){
        SpanTueBar.classList.remove('Hide')
        SpanTueBar.classList.add('ValuesMonth')
    }
})
tueBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanTueBar = ParentDiv.children[0]

    if(SpanTueBar.classList.contains('ValuesMonth')){
        SpanTueBar.classList.remove('ValuesMonth')
        SpanTueBar.classList.add('Hide')
    }
})

wedBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanWedBar = ParentDiv.children[0]

    if(SpanWedBar.classList.contains('Hide')){
        SpanWedBar.classList.remove('Hide')
        SpanWedBar.classList.add('ValuesMonth')
    }
})
wedBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanWedBar = ParentDiv.children[0]

    if(SpanWedBar.classList.contains('ValuesMonth')){
        SpanWedBar.classList.remove('ValuesMonth')
        SpanWedBar.classList.add('Hide')
    }
})

thuBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanThuBar = ParentDiv.children[0]

    if(SpanThuBar.classList.contains('Hide')){
        SpanThuBar.classList.remove('Hide')
        SpanThuBar.classList.add('ValuesMonth')
    }
})
thuBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanThuBar = ParentDiv.children[0]

    if(SpanThuBar.classList.contains('ValuesMonth')){
        SpanThuBar.classList.remove('ValuesMonth')
        SpanThuBar.classList.add('Hide')
    }
})

friBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanFriBar = ParentDiv.children[0]

    if(SpanFriBar.classList.contains('Hide')){
        SpanFriBar.classList.remove('Hide')
        SpanFriBar.classList.add('ValuesMonth')
    }
})
friBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanFriBar = ParentDiv.children[0]

    if(SpanFriBar.classList.contains('ValuesMonth')){
        SpanFriBar.classList.remove('ValuesMonth')
        SpanFriBar.classList.add('Hide')
    }
})

satBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanSatBar = ParentDiv.children[0]

    if(SpanSatBar.classList.contains('Hide')){
        SpanSatBar.classList.remove('Hide')
        SpanSatBar.classList.add('ValuesMonth')
    }
})
satBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanSatBar = ParentDiv.children[0]

    if(SpanSatBar.classList.contains('ValuesMonth')){
        SpanSatBar.classList.remove('ValuesMonth')
        SpanSatBar.classList.add('Hide')
    }
})

sunBar.addEventListener('mouseover', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanSunBar = ParentDiv.children[0]

    if(SpanSunBar.classList.contains('Hide')){
        SpanSunBar.classList.remove('Hide')
        SpanSunBar.classList.add('ValuesMonth')
    }
})
sunBar.addEventListener('mouseout', (e) => {
    const ParentDiv = e.target.parentNode
    const SpanSunBar = ParentDiv.children[0]

    if(SpanSunBar.classList.contains('ValuesMonth')){
        SpanSunBar.classList.remove('ValuesMonth')
        SpanSunBar.classList.add('Hide')
    }
})


