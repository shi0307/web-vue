const targetTime = new Date('2023-08-09 23:19:00').getTime();

const offerInfoTime = targetTime - 1 * 60 * 1000;

const timeout = offerInfoTime - (new Date).getTime();

let signKey

let umidToken

let ua 

let newOrderUrl

execFun(timeout);

function execFun(timeout) {
    setTimeout(() => {

        console.log('准备打开商品页面');

        const newOfferWindow = window.open('https://detail.damai.cn/item.htm?id=730378856886');

        setTimeout(function(){
            signKey = JSON.parse("" + newOfferWindow.document.getElementById("staticDataDefault").innerHTML)['t'];
        
            umidToken = createUmtoken(newOfferWindow);
        
            ua = newOfferWindow['__acjs_awsc_140'].getUA();
        
            console.log('正在构造订单请求');
        
            newOrderUrl = createOrderUrl(signKey, umidToken, ua);
        
        }, 2000);

        setTimeout(function(){

            while((new Date).getTime() < targetTime){}
        
            console.log('订单页面准备加载了');
        
            const newOrderWindow = window.open(newOrderUrl);
        
            submitOrder(newOrderWindow);
        
        }, 5000)

    }, timeout);
}

function submitOrder(newOrderWindow) {
    setTimeout(function(){
        newOrderWindow.document.querySelectorAll('div').forEach(element => {
            if(element.textContent == '石光辉' && element.innerHTML == '石光辉'){
                const clickElement = element.parentElement.children[2];
                clickElement.children[0].click();
                return true;
            }
        })
    
        newOrderWindow.document.querySelectorAll('span').forEach(element => {
            if(element.textContent == '提交订单') {
                console.log('订单准备提交');	
                createClick(element, 'mousedown');
                createClick(element, 'mouseup');
                return true;	
            }
        })
        console.log('订单已提交');
    }, 400);

	setTimeout(function(){
        newOrderWindow.document.querySelectorAll('div').forEach(element => {
            if(element.textContent == '石光辉' && element.innerHTML == '石光辉'){
                const clickElement = element.parentElement.children[2];
                clickElement.children[0].click();
                return true;
            }
        })
    
        newOrderWindow.document.querySelectorAll('span').forEach(element => {
            if(element.textContent == '提交订单') {
                console.log('订单准备提交');	
                createClick(element, 'mousedown');
                createClick(element, 'mouseup');
                return true;	
            }
        })
        console.log('订单已提交');
    }, 600);

	setTimeout(function(){
        newOrderWindow.document.querySelectorAll('div').forEach(element => {
            if(element.textContent == '石光辉' && element.innerHTML == '石光辉'){
                const clickElement = element.parentElement.children[2];
                clickElement.children[0].click();
                return true;
            }
        })
    
        newOrderWindow.document.querySelectorAll('span').forEach(element => {
            if(element.textContent == '提交订单') {
                console.log('订单准备提交');	
                createClick(element, 'mousedown');
                createClick(element, 'mouseup');
                return true;	
            }
        })
        console.log('订单已提交');
    }, 800);

	setTimeout(function(){
        newOrderWindow.document.querySelectorAll('div').forEach(element => {
            if(element.textContent == '石光辉' && element.innerHTML == '石光辉'){
                const clickElement = element.parentElement.children[2];
                clickElement.children[0].click();
                return true;
            }
        })
    
        newOrderWindow.document.querySelectorAll('span').forEach(element => {
            if(element.textContent == '提交订单') {
                console.log('订单准备提交');	
                createClick(element, 'mousedown');
                createClick(element, 'mouseup');
                return true;	
            }
        })
        console.log('订单已提交');
    }, 1000);

}

function createClick(element, key){
    const currentDomX = window.document.documentElement.offsetWidth;

    const currentDomY = window.document.documentElement.offsetHeight;

    const borderLen = splitCss(element.parentElement.parentElement.style.marginRight);

    const parentElementDomX = element.parentElement.clientWidth;

    const parentElementDomY = element.parentElement.clientHeight;

    const screenX = currentDomX - borderLen - Math.round(parentElementDomX/2);

    const clientX = currentDomX - borderLen - Math.round(parentElementDomX/2);

    const clientY = currentDomY - Math.round(parentElementDomY/2);

    const screenY = clientY + Math.round((window.screen.availHeight - currentDomY)/2);

	const event = document.createEvent("MouseEvents");
	event.initMouseEvent(key, true, true, window, 1, screenX, screenY, clientX, clientY, false, false,false, false, 0, null);
	element.parentElement.dispatchEvent(event);
}

function splitCss(str) {
    if (str == '' || str == null || str == void 0) {
        return 0;
    }
    const newStr = str.substr(0, str.length - 2);

    return parseInt(newStr);
}

function createUmtoken(newOfferWindow) {
    var t = this;
    t.umidToken = "defaultToken1_um_not_loaded@@" + newOfferWindow.location.href + "@@" + (new Date).getTime(),
    t.ua = "",
    newOfferWindow.AWSC && newOfferWindow.AWSC.use("uab", function(e, i) {
        "loaded" === e && (t.ua = i.getUA())
    }),
    newOfferWindow.AWSC && newOfferWindow.AWSC.use("um", function(e, i) {
        "loaded" === e ? (t.umidToken = "defaultToken3_init_callback_not_called@@" + newOfferWindow.location.href + "@@" + (new Date).getTime(),
         i.init({appName: "mec-tradeportal"}, function(e, i) { t.umidToken = "success" === e ? i.tn : "defaultToken4_init_failed with " + e + "@@" + newOfferWindow.location.href + "@@" + (new Date).getTime()})) : t.umidToken = "defaultToken2_load_failed with " + e + "@@" + newOfferWindow.location.href + "@@" + (new Date).getTime()
    })

    return t.umidToken;
}

function createOrderUrl() {
    const startUrl = 'https://m.damai.cn/app/dmfe/h5-ultron-buy/index.html?exParams=';
    const endUrl = '&buyParam=730378856886_1_5232282310547&buyNow=true&privilegeActId=';
    let middleUrl = '{"damai":"1","channel":"damai_app","umpChannel":"10002","atomSplit":"1","serviceVersion":"1.8.5","signKey":"TempsignKey","umidToken":"TempumidToken","ua":"Tempua"}';

    middleUrl = encodeURIComponent(middleUrl.replace('TempsignKey', arguments[0]).replace('TempumidToken', arguments[1]).replace('Tempua', arguments[2]));

    return startUrl.concat(middleUrl, endUrl);
}