var elem = document.body.appendChild (
    document.createElement ( "p" )
)

elem.style = `
    height: 100px;
    width: 100px;
    background: #0f0;
    margin: 0 auto;
    text-align: center;
`
elem.innerText = "Click me"

elem.onclick = function (event) {
    event.target.innerText = ''
    if ( event.eventPhase === 3 ) {
        this.firstChild.remove()
        this.innerText = "Click me" 
    }
    else {
        let img = event.target.appendChild(
        document.createElement( "img" )
        )
        img.src = "https://doklad-i-referat.ru/image/ptica/popugaj-ara.jpg"
        img.width = 100
        img.height = 100
    }
    if(elem.firstElementChild) {
        var image = elem.firstElementChild
        image.onmouseover = function(event) {
        event.target.style = `
            width: 200px;
            height: 200px;
            transition: all 0.5s;
        `
        }
 
        image.onmouseout = function(event) {
        event.target.style = `
            width: 100px;
            height: 100px;
            transition: all 0.5s;
        `
        }
    }
}

var elem = document.body.appendChild (
    document.createElement ( "p" )
)

elem.style = `
    height: 100px;
    width: 100px;
    background: #0f0;
    margin: 0 auto;
    text-align: center;
`
elem.innerText = "Click me"

elem.onclick = function (event) {
    event.target.innerText = ''
    if ( event.eventPhase === 3 ) {
        this.firstChild.remove()
        this.innerText = "Click me" 
    }
    else {
        let img = event.target.appendChild(
        document.createElement( "img" )
        )
        img.src = "https://doklad-i-referat.ru/image/ptica/popugaj-ara.jpg"
        img.width = 100
        img.height = 100
    }
}
elem.onmouseover = function(event) {
    event.target.style = `
        width: 200px;
        height: 200px;
        transition: all 0.5s;
        margin: 0 auto;
        text-align: center;
        background: #0f0;
    `
}
 
elem.onmouseout = function(event) {
    event.target.style = `
        width: 100px;
        height: 100px;
        transition: all 0.5s;
        margin: 0 auto;
        text-align: center;
        background: #0f0;
    `
}