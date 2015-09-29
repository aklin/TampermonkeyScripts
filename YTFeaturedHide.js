// ==UserScript==
// @name         Hide YT Featured Video Topbar
// @namespace    https://github.com/aklin/TampermonkeyScripts
// @version      0.1
// @description  Annoyed by those YT featured videos on the homepage? So am I. And I decided to do something about it.
// @author       aklin
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

var path="item-section";
var elements=document.getElementsByClassName(path);
elements[0].style.display='none';
//that's it!