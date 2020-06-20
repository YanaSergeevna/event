var collection = []
var container = document.body
for( elem of [ 1, 2, 3, 4, 5, 6, 7 ]) {
    container = container.appendChild(document.createElement("div"))
    collection.push(elem)
    container.style = `
        width:  ${(7 - collection.indexOf(elem)) * 100}px;
        height:  ${(7 - collection.indexOf(elem)) * 100}px;
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
        event.stopPropagation()
        event.target.outerHTML = event.target.innerHTML
    }
}
    console.log(collection)