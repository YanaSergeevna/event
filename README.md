# Homework DOM 
### Required
>Создайте элемент `p`, при клике на котором появляется картинка размером 100px
>При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до `200px`
>При клике на картинке она должна исчезать*
=======
>Создайте элемент `p`, при клике на котором появляется картинка размером 100px
>При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до `200px`
>При клике на картинке она должна исчезать
---
```js
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
```
>или, вешаем все на родителя, так как событие произойдет и на `img`
```js
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
```
=======
### Additional
*Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий `click, mouseover, mouseout`*
```js
var collection = []

function over ( event ) {
    ...
}
function out ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
        ...
    }
)
```
>Установите атрибуты стиля `width` и `height` такие, чтобы вложенные элементы были меньше размером, чем родитель
>Установите значение `#ff00ff50` атрибута `background-color` каждому элементу
>Установите значение `dotted 1px yellow;` атрибута border каждому элементу
>При наступлении события `mouseover` значение атрибута `background-color` должно меняться на `#ffff0050`
>При наступлении события `mouseout` атрибуту `background-color` должно устанавливаться исходное значение
>При наступлении события `click` элемент должен быть удален
>При наведении мышки на элемент должна появляться подсказка с его именем `( "first", "second", "third", "fourth" )`
```js
var collection = []
function mouseoverout ( event ) {
   event.target.style.background =
        event.type === "mouseover" ? "#ffff0050" : "#ff00ff50"
}
function clickHandler ( event ) {
    event.target.removeEventListener ( "mouseover", mouseoverout )
    event.target.removeEventListener ( "mouseout", mouseoverout )
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
```
>Или без использования addEventListener
```js
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
```
### Additional
*Условия предыдущего задания изменить так:*
```js
var collection = []

function enter ( event ) {
    ...
}
function leave ( event ) {
    ...
}
function clickHandler ( event ) {
    ...
}

[ 1, 2, 3, 4, 5, 6, 7 ].forEach (
    ...
)
```
*при удалении элемента его потомки должны оставаться*
---
```JS
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
```
*или*
```js
var collection = []
function mouseoverout ( event ) {
   event.target.style.background =
        event.type === "mouseover" ? "#ffff0050" : "#ff00ff50"
}
function clickHandler ( event ) {
    event.stopPropagation()
    event.target.removeEventListener ( "mouseover", mouseoverout )
    event.target.removeEventListener ( "mouseout", mouseoverout )
    event.target.outerHTML = event.target.innerHTML
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
```
