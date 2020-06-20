var collection = []
function mouseoverout ( event ) {
   event.target.style.background =
        event.type === "mouseover" ? "#ffff0050" : "#ff00ff50"
}
function clickHandler ( event ) {
    event.target.removeEventListener ( "mouseover", over )
    event.target.removeEventListener ( "mouseout", over )
    event.target.remove()
}
var container = document.body
for( elem of ["first", "second", "third", "fourth"]) {
    container = container.appendChild(document.createElement("div"))
    collection.push(elem)
    container.style = `
        width:  ${(4 - collection.indexOf(elem)) * 50}px;
        height:  ${(4 - collection.indexOf(elem)) * 50}px;
        background: #ff00ff50;
        border: dotted 1px yellow;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
    `
    container.title = elem
    container.addEventListener ( "mouseover", mouseoverout )
    container.addEventListener ( "mouseout", mouseoverout )
    container.onclick = clickHandler
}
    console.log(collection)
------------------------------------------------------------------------
var collection = []
var container = document.body
for( elem of ["first", "second", "third", "fourth"]) {
    container = container.appendChild(document.createElement("div"))
    collection.push(elem)
    container.style = `
        width:  ${(4 - collection.indexOf(elem)) * 50}px;
        height:  ${(4 - collection.indexOf(elem)) * 50}px;
        background: #ff00ff50;
        border: dotted 1px yellow;
        transform: translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
    `
    container.title = elem
    container.onmouseover = function(event){
        event.target.style.background = '#ffff0050';
    }
    container.onmouseout = function(event){
        event.target.style.background = '#ff00ff50';
    }
    container.onclick = function(event){
        event.target.remove()
    }
}
    console.log(collection)    