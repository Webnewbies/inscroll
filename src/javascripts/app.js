(function () {
    'use strict';

    var deviceArray = ['monitor', 'notebook', 'tablet', 'smartphone'],
    deviceHashTag = ['#COOL', '#SIMPLE', "#COMPATIBLE", "#FAST"],
    device = document.querySelector('#deviceElem'),
    count = 0,
    header = document.querySelector('main > header');

    var ajax = function (url,method,obj,callback) {
        if(!url) return;
        obj || {};
        method || 'GET';
        var postData = obj.data || null;

        var req = createXMLHTTPObject();
        if (!req) return;

        req.open(method,url,obj.sync || true);

        if (postData){ 
            req.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            req.setRequestHeader('User-Agent','XMLHTTP/1.0');
        }

        req.onreadystatechange = function () {
            if (req.readyState != 4) return;
            if (req.status != 200 && req.status != 304) {
                console.error('HTTP error ' + req.status);
                return;
            }
            callback(req);
        }
        if (req.readyState == 4) return;

        req.send(postData);
    }

    var XMLHttpFactories = [
    function () {return new XMLHttpRequest()},
    function () {return new ActiveXObject("Msxml2.XMLHTTP")},
    function () {return new ActiveXObject("Msxml3.XMLHTTP")},
    function () {return new ActiveXObject("Microsoft.XMLHTTP")}
    ];

    function createXMLHTTPObject() {
        var xmlhttp = false;
        for (var i = 0; i < XMLHttpFactories.length; i++) {
            try {
                xmlhttp = XMLHttpFactories[i]();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    }

    window.addEventListener('load', function(){
        ajax('https://api.github.com/repos/andreymdias/scrollit', 'get', {}, function(res){
            (function(res){
                var elem = document.querySelectorAll('*[data-git]'),
                json = JSON.parse(res.responseText);
                for(var i = 0; i < elem.length; i++){
                    var dataAttr = elem[i].getAttribute('data-git');
                    document.querySelector('*[data-git="'+ dataAttr +'"] a').innerHTML = json[dataAttr];
                }
            })(res);
        });
    }, false);

    var socialSharing = (function () {
        var elem = document.querySelectorAll('.social-sharing div a'); 
        for(var i = 0, len = elem.length; i < len; i++){
            elem[i].addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.getAttribute('href'), "Twitter Sharing", "width=400', height=400");
            }, true);
        }
    })();

    var devices = {
        remove: function () {
            if (device.classList.contains(deviceArray[count - 1])) {
                device.classList.remove(deviceArray[count - 1]);
            } else if (device.classList.contains(deviceArray[deviceArray.length - 1])) {
                device.classList.remove(deviceArray[deviceArray - 1]);
            }
            devices.add();
        },
        add: function () {
            if (count < deviceArray.length) {
                device.classList.add(deviceArray[count]);
                document.querySelector('.device .interface h5').innerHTML = deviceHashTag[count];
                count += 1;
                setTimeout(devices.remove, 5000);
            } else {
                count = 0;
                devices.remove();
            }
        }
    };
    devices.remove();
}());
var scrollIt = new ScrollIt();
scrollIt.nav = true;
scrollIt.elem = document.querySelector('main');