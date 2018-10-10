// ==UserScript==
// @name         SCL Demetricator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Demetricates FB Mobile, returning the human in social relations!
// @author       Gug
// @match        https://soundcloud.com/*
// @run-at       document-start
// @require      https://gist.githubusercontent.com/raw/2625891/waitForKeyElements.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

// ------------------------------------------------- DEFINE FUNCTIONS ------------------------------------------------- //
function hideIt(targObjClass){
    var likeObjArray = document.getElementsByClassName(targObjClass);
            for (var i in likeObjArray){
            if (likeObjArray[i] != undefined && likeObjArray[i].style != undefined && likeObjArray[i].style.display != undefined ){
                likeObjArray[i].style.display = "none";
            }
        };
}

function hideItsInnerHTML(targObjClass, replWith){
    var likeObjArray = document.getElementsByClassName(targObjClass);
            for (var i in likeObjArray){
            if (likeObjArray[i] != undefined && likeObjArray[i].style != undefined && likeObjArray[i].style.display != undefined ){
                likeObjArray[i].innerHTML = replWith;
            }
        };
}

function hideNode (jNode) {
    //jNode.hide ();
    hideItsInnerHTML("sc-button-like", "you");
    hideItsInnerHTML("sc-button-repost", "ur brain");
    hideItsInnerHTML("infoStats__value", "a lot");
    hideItsInnerHTML("sc-ministats", "");
    hideItsInnerHTML("sidebarHeader__actualTitle", "butts");
    hideItsInnerHTML("header__proUpsell", "");
    hideIt("mobileAppsButtons__button");
    hideIt("statsBadge__recent");
    hideIt("statsBadge__upsell");
    hideIt("statsBadge__total");
    hideIt("l-footer");
}

// -------------------------------------------------       INIT        ------------------------------------------------- //
    waitForKeyElements (
    ".infoStats__value, .sc-button-like, .sc-button-repost",
    hideNode
);

})();
