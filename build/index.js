(()=>{"use strict";var e=document.body,t=document.getElementById("themeSelectorSlider"),a=document.getElementById("displayHolderElement"),n=document.querySelectorAll("[data-number]"),r=document.querySelectorAll("[data-operation]"),i=document.getElementById("deleteBtn"),s=document.getElementById("resetBtn"),d=document.getElementById("equalBtn"),o=function(e){var t=e.innerText.length,a=e.parentNode.offsetWidth<=327;return!a&&t>15?(e.style.fontSize="32px",e.style.wordWrap="break-word",void(e.style.wordBreak="break-all")):a&&t>13?(e.style.fontSize="20px",e.style.wordWrap="break-word",void(e.style.wordBreak="break-all")):(a&&t<=13&&(e.style.fontSize="32px"),void(!a&&t<=15&&(e.style.fontSize="48px")))},c=function(e){if(!e)return"";if("."===e)return e;var t=e.split(".")[0],a=e.includes(".")?".".concat(e.split(".")[1]):"",n=t?parseInt(t).toLocaleString("en",{maximumFractionDigits:0}):"0";return"".concat(n).concat(a)},l=["dark","light","custom"];function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u,h,f,O=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.displayHolderElement=t,this.reset()}var t,a;return t=e,(a=[{key:"reset",value:function(){this.firstOperand="",this.secondOperand="",this.operation=null,this.updateUI()}},{key:"delete",value:function(){this.secondOperand?this.secondOperand=this.secondOperand.slice(0,-1):this.operation?this.operation=null:this.firstOperand&&(this.firstOperand=this.firstOperand.slice(0,-1))}},{key:"addOperand",value:function(e){this.operation?this.secondOperand=this.secondOperand+e:this.firstOperand=this.firstOperand+e}},{key:"addOperation",value:function(e){(this.operation!==e||this.secondOperand)&&(this.operation&&this.secondOperand&&this.calculate(),this.operation=e)}},{key:"calculate",value:function(){switch(this.operation){case"+":var e=parseFloat(this.firstOperand)+parseFloat(this.secondOperand);this.firstOperand=e.toString(),this.operation=null,this.secondOperand="";break;case"-":e=parseFloat(this.firstOperand)-parseFloat(this.secondOperand),this.firstOperand=e.toString(),this.operation=null,this.secondOperand="";break;case"*":case"x":e=parseFloat(this.firstOperand)*parseFloat(this.secondOperand),this.firstOperand=e.toString(),this.operation=null,this.secondOperand="";break;case"/":e=parseFloat(this.firstOperand)/parseFloat(this.secondOperand),this.firstOperand=e.toString(),this.operation=null,this.secondOperand="";break;default:return}}},{key:"updateUI",value:function(){if(!this.firstOperand)return this.displayHolderElement.innerText="0",void o(this.displayHolderElement);var e=c(this.firstOperand),t=c(this.secondOperand),a=this.operation?" ".concat(this.operation," "):"";this.displayHolderElement.innerText=e+a+t,o(this.displayHolderElement)}}])&&p(t.prototype,a),e}();u=localStorage.getItem("theme"),h=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",f=u||h,e.className="",t.value=l.indexOf(f),e.classList.add(f),t.addEventListener("change",(function(){var a,n=t.value,r=l[n];e.className="",e.classList.add(r),a=r,localStorage.setItem("theme",a)}));var m=new O(a);n.forEach((function(e){e.addEventListener("click",(function(){m.addOperand(e.innerText),m.updateUI()}))})),r.forEach((function(e){e.addEventListener("click",(function(){m.addOperation(e.innerText),m.updateUI()}))})),s.addEventListener("click",(function(){m.reset(),m.updateUI()})),i.addEventListener("click",(function(){m.delete(),m.updateUI()})),d.addEventListener("click",(function(){m.calculate(),m.updateUI()})),window.addEventListener("keydown",(function(e){switch(e.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":m.addOperand(e.key);break;case"/":case"*":case"+":case"-":m.addOperation(e.key);break;case"Backspace":m.delete();break;case"Delete":case"End":m.reset();break;case"Enter":m.calculate();break;default:return}m.updateUI()}))})();