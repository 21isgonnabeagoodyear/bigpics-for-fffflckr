// ==UserScript==
// @name       bigpics on fffflckr
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @include    http://fffflckr.com/
// @copyright  2011+, You
// ==/UserScript==

setInterval(function(){
var button = document.getElementById("btns").getElementsByTagName("a")[0]
var ur = button.getAttribute("href")
if(ur.indexOf("_b")==-1){
    button.setAttribute("href", ur.slice(0,-4)+"_b"+".jpg"/*ur.slice(-4,-0)*/)}
}, 200)
