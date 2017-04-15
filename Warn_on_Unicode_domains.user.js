// ==UserScript==
// @name         Warn on Unicode domains
// @namespace    https://github.com/nilscoding/WebUserScripts
// @version      1.0
// @description  Simple script to warn the user if a domain with unicode chars is opened
// @author       NilsCoding
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var currentHost = location.host;
    var isHttps = (location.protocol.indexOf('https') > -1);
    if ((currentHost.indexOf('.xn--') > -1) || (encodeURIComponent(currentHost).indexOf('%') > -1)) {
        var warnDiff = document.createElement('div');
        var warnDiffStyle = 'padding:10px;margin:0px;border-bottom:1px solid black;text-align:center;font-family:sans-serif;';
        if (isHttps === true) {
            warnDiffStyle += 'background-color:#FF7F7F;';
        } else {
            warnDiffStyle += 'background-color:#FFB482;';
        }
        warnDiff.setAttribute('style', warnDiffStyle);
        var currentHostDecoded = currentHost;
        if (encodeURIComponent(currentHost).indexOf('%') > -1) {
            currentHostDecoded = encodeURIComponent(currentHost);
        }
        warnDiff.innerHTML = '<b>Warning!</b> Domain contains unicode characters - domain name is: <b>' + currentHostDecoded + '</b>';
        document.body.insertBefore(warnDiff, document.body.firstChild);
    }

})();
