
/* Smart UI v7.7.0 (2020-June) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function r(l){if(t[l])return t[l].exports;var i=t[l]={i:l,l:!1,exports:{}};return e[l].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(l,i,function(t){return e[t]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=29)}({29:function(e,t){Smart("smart-date-range-input",class extends Smart.Input{static get properties(){return{dateFormat:{type:"object",value:{day:"numeric",month:"numeric",year:"numeric"}},dropDownHeight:{type:"any",value:"auto"},icons:{type:"boolean",value:!1},max:{value:new Date(2100,1,1),type:"any",defaultValue:new Date(2100,1,1)},messages:{value:{en:{done:"Done",today:"Today",clear:"Clear",hours:"Hours",minutes:"Minutes",am:"am",pm:"pm"}},type:"object",extend:!0},min:{value:new Date(1900,1,1),type:"any",defaultValue:new Date(1900,1,1)},months:{value:1,type:"number",defaultValue:1},separator:{value:" - ",type:"string"},timeFormat:{type:"object",value:{hour:"2-digit",minute:"2-digit"}},timepicker:{value:!1,type:"boolean"},value:{type:"any",value:"",validator:"_valueValidator"},valueType:{allowedValues:["string","object"],value:"string",type:"string"}}}template(){return'<div id="inputContainer" role="presentation"><input class="smart-input" id=\'input\' readonly=\'[[readonly]]\' placeholder=\'[[placeholder]]\' type=\'[[type]]\' name=\'[[name]]\' disabled=\'[[disabled]]\' aria-label="[[placeholder]]" /><span class="smart-hidden smart-hint" id="span">[[hint]]</span><div id="dropDownButton" tabindex=-1 class="smart-drop-down-button" role="button" aria-label="Toggle popup"><div id="arrow" class="arrow" aria-hidden="true"></div></div></div>'}static get listeners(){return{"input.change":"_changeHandler","input.focus":"_focusHandler","input.blur":"_blurHandler","input.keydown":"_keyDownHandler","input.keyup":"_keyUpHandler","input.keypress":"_keyPressHandler","dropDownButton.down":"_dropDownButtonDownHandler","inputContainer.down":"_downHandler","document.up":"_documentUpHandler"}}focus(){this.$.input.focus()}select(){const e=this;e.readonly?e.$.input.focus():e.$.input.select()}_documentUpHandler(e){const t=this,r=t.shadowRoot||t.isInShadowDOM?e.originalEvent.composedPath()[0]:e.originalEvent.target;t.contains(r)?requestAnimationFrame(()=>{const e=t.$.calendar;t.opened&&1===e.selectedDates.length&&!e._newRangeSelectionStarted&&(e._newRangeSelectionStarted=!0)}):t.$.scrollView.contains(r.shadowParent||r)?t._isPointerDown&&(t._isPointerDown=!1,t.opened&&(t._preventLookup=!0),t.$.input.focus()):(t.opened&&(t._preventLookup=!0),t._isPointerDown=!1,t.close())}_changeHandler(e){e.stopPropagation(),this._performSelect(void 0)}_focusHandler(){this.setAttribute("focus",""),(this.readonly||0!==this.minLength||0!==this.$.input.value.length||this._preventLookup)&&(this.$.fireEvent("focus"),delete this._preventLookup)}_blurHandler(){const e=this;e.opened||e.removeAttribute("focus"),e.$.fireEvent("blur"),delete e._preventLookup}_performSelect(e,t){const r=this;let l,i,a,s=r.$.input.value.split(r.separator);void 0!==e&&"object"!=typeof e&&(a=e,e=void 0);let o=r._oldValue?r._oldValue:r._formatValue(void 0!==a?a:r.value,"string");if(e){let t,a;e.type&&(e.preventDefault(),e.stopPropagation()),r.timepicker&&r._timepicker&&(t=r._timepicker._from,a=r._timepicker._to),s=e.detail.value.slice(0).sort((e,t)=>e.getTime()-t.getTime()),s.length?1===s.length?(l=new Date(s[0]),t&&l.setHours(t.hours,t.minutes),s=[l]):(l=new Date(s[0]),i=new Date(s[s.length-1]),t&&l.setHours(t.hours,t.minutes),a&&i.setHours(a.hours,a.minutes),s=[l,i]):s=""}else{if(s=r.$.input.value.split(r.separator),s.length){if(1===s.length)s=new Date(r.$.input.value.trim()),isNaN(s.getTime())?s="":(l=new Date(s),r._noCalendarChange=!0,r.$.calendar.selectedDates=[s],s=[l]);else if(s=s.map(e=>new Date(e)).filter(e=>!isNaN(e.getTime())),s.sort((e,t)=>e.getTime()-t.getTime()),s.length){let e=[],t=s[0];if(l=new Date(s[0]),s.length>1&&(i=s[s.length-1]),e.push(new Date(t)),l&&i){const r=new Date(t);if(t=new Date(r.setDate(r.getDate()+1)),t.getTime()<=i.getTime()){for(;t.getTime()<i.getTime()&&(t.getDate()!==i.getDate()||t.getMonth()!==i.getMonth()||t.getFullYear()!==i.getFullYear());)e.push(new Date(t)),t.setDate(t.getDate()+1);e.push(t)}}r._noCalendarChange=!0,r.$.calendar.selectedDates=e}}else s="";if((!s||!s.length)&&r.$.calendar.isRendered&&(r._noCalendarChange=!0,r.$.calendar.clearSelection(),r._timepicker)){r._timepicker.classList.add("smart-visibility-hidden");const e=r.$.scrollView.querySelectorAll(".smart-timepicker-button");for(let t=0;t<e.length;t++)e[t].removeAttribute("selected")}}r.timepicker&&r._timepicker&&(l&&(r._timepicker._from={hours:l.getHours(),minutes:l.getMinutes()}),i&&(r._timepicker._to={hours:i.getHours(),minutes:i.getMinutes()}));const n=r.$.scrollView.querySelector(".smart-timepicker-button.from"),c=r.$.scrollView.querySelector(".smart-timepicker-button.to");n&&(l&&!isNaN(l.getTime())?n.textContent=l.toLocaleTimeString(r.locale,r.timeFormat):n.textContent=""),c&&(i&&!isNaN(i.getTime())?c.textContent=i.toLocaleTimeString(r.locale,r.timeFormat):c.textContent=""),r.set("value",r.$.input.value=r._oldValue=s=r._formatDate(s)),t||s===o||r.$.fireEvent("change",{value:r._formatValue(s),label:s,oldValue:r._formatValue(o),oldLabel:o}),delete r._noCalendarChange}_formatValue(e,t){const r=this;if(t||(t=r.valueType),"string"===t&&"string"==typeof e||"object"===t&&e.from)return e;let l,i,a;return Array.isArray(e)?(l=e[0],i=e[e.length-1]):"object"==typeof e?(l=e.from,i=e.to):(a=e.split(r.separator),a.length&&(a=a.map(e=>new Date(e)).filter(e=>!isNaN(e.getTime())),a.sort((e,t)=>e.getTime()-t.getTime()),l=a[0],i=a[a.length-1])),"string"===t?r._formatDate([l,i]):{from:new Date(l),to:new Date(i)}}_formatDate(e){const t=this;return e?(e instanceof Date&&(e=[e]),e=e.filter(e=>void 0!==e),1===(e=t.timepicker?e.map(e=>new Date(e).toLocaleString(t.locale,Object.assign({},t.dateFormat,t.timeFormat))):e.map(e=>new Date(e).toLocaleDateString(t.locale,t.dateFormat))).length?e[0]:e.join(t.separator)):""}_open(){const e=this,t=e.getBoundingClientRect(),r=window.scrollX,l=window.scrollY;let i=0,a=0;if(!this.opened){if(e.timer&&clearTimeout(e.timer),document.body.appendChild(e.$.scrollView),e.setAttribute("aria-owns",e.$.scrollView.id),e.readonly||e.$.input.setAttribute("aria-controls",e.$.scrollView.id),e.$.scrollView.enableShadowDOM&&!e._importedStyle&&(e.$.scrollView.importStyle(e._getStyleUrl("smart.textbox.css")),e._importedStyle=!0),"static"!==getComputedStyle(document.body).position){const e=document.body.getBoundingClientRect();i=e.left,a=e.top}e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",""),e.$.scrollView.style.left=-3+t.left+r-i+"px",e.$.scrollView.style.top=t.bottom+l-a+1+"px",e.$.scrollView.classList.remove("open"),e.$.scrollView.onpointerdown=function(){e._isPointerDown=!0},requestAnimationFrame((function(){const t=e.dropDownWidth,r=e.$.calendar;if(e.$.scrollView.setAttribute("open",""),e.setAttribute("open",""),e.$.dropDownButton.setAttribute("open",""),e.$.input.setAttribute("open",""),t&&"string"==typeof t&&-1!==t.indexOf("%")){const l=parseFloat(t)/100;e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",e.offsetWidth*l+"px"),r.style.width="100%"}else if("auto"!==t&&t)e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",parseFloat(t)+"px"),r.style.width="100%";else if("auto"===t)r.style.width=null,e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width","auto");else{r.style.width=null;let t=r.offsetWidth;e.$.scrollView.style.setProperty("--smart-input-drop-down-menu-width",Math.max(t,e.offsetWidth-8)+"px")}})),this.opened=!0}}close(){const e=this;if(!e.opened)return!1;if(e.timer&&clearTimeout(e.timer),e.timer=setTimeout((function(){e.$.scrollView.parentNode&&!e.opened&&(document.body.removeChild(e.$.scrollView),e.removeAttribute("aria-owns"),e.readonly||e.$.input.removeAttribute("aria-controls"))}),1e3),e._timepicker){e._timepicker.classList.add("smart-visibility-hidden");const t=e.$.scrollView.querySelectorAll(".smart-timepicker-button");for(let e=0;e<t.length;e++)t[e].removeAttribute("selected")}return e.$.scrollView.removeAttribute("open"),e.$.dropDownButton.removeAttribute("open"),e.$.input.removeAttribute("open"),e.removeAttribute("open"),e.opened=!1,!0}_lookup(){}_downHandler(e){const t=this;t.readonly&&t._dropDownButtonDownHandler(e)}_dropDownButtonDownHandler(e){return this._toggle(),e.preventDefault(),e.stopPropagation(),e.originalEvent.preventDefault(),e.originalEvent.stopPropagation(),!1}_toggle(){const e=this;e.opened?e.close():e.open()}open(){const e=this;e._process(),e.$.input.focus(),setTimeout((function(){e.$.input.focus()}),25)}_process(){this._performSelect(void 0,!0),this._open()}_matcher(){}_sorter(){}_highlighter(){}_render(){}ensureVisible(){}_next(){}_prev(){}_move(e){e.stopPropagation()}_keyDownHandler(e){this._suppressKeyPressRepeat=![40,38,9,13,27,16,17,18].includes(e.keyCode),e.shiftKey||e.altKey||e.ctrlKey}_keyPressHandler(e){this._suppressKeyPressRepeat||e.shiftKey||e.altKey||e.ctrlKey}_keyUpHandler(e){const t=this;if(!e.shiftKey)switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:40===e.keyCode&&e.altKey&&t.open(),38===e.keyCode&&e.altKey&&t.close();break;case 27:if(!t.opened)return;t.close(),e.stopPropagation(),e.preventDefault()}}propertyChangedHandler(e,t,r){const l=this;switch(e){case"value":l.$.input.value=l._formatValue(r,"string"),l._performSelect(t);break;case"month":case"min":case"max":l.$.calendar[e]=r;break;case"theme":case"rightToLeft":case"animation":case"inverted":l.$.calendar[e]=r,r?l.$.scrollView.setAttribute(Smart.Utilities.Core.toDash(e),"boolean"==typeof r?"":r):l.$.scrollView.removeAttribute(Smart.Utilities.Core.toDash(e));break;case"timepicker":case"icons":if(r?l.$.scrollView.setAttribute(e,""):l.$.scrollView.removeAttribute(e),l._performSelect(void 0),!r&&l._timepicker){l._timepicker.classList.add("smart-visibility-hidden"),l._timepicker.remove();const e=l.$.scrollView.querySelectorAll(".smart-timepicker-button");for(let t=0;t<e.length;t++)e[t].removeAttribute("selected")}break;case"locale":{const e=l.$.calendar.querySelector(".smart-icon-today"),t=l.$.calendar.querySelector(".smart-icon-clear");e&&(e.innerHTML=l.localize("today")),t&&(e.innerHTML=l.localize("clear")),l._performSelect(void 0,!0),l.$.calendar.locale=r;break}default:super.propertyChangedHandler(e,t,r)}}_createElement(){const e=this,t=document.createElement("div"),r=document.createElement("smart-calendar"),l=document.createElement("template");if(t.classList.add("smart-input-drop-down-menu","smart-date-range-input-drop-down-menu"),t.setAttribute("animation",e.animation),t.setAttribute("role","presentation"),e.rightToLeft?t.setAttribute("right-to-left",""):t.removeAttribute("right-to-left"),e.inverted?t.setAttribute("inverted",""):t.removeAttribute("inverted"),t.onclick=function(r){r.stopPropagation(),r.preventDefault();const l=r.target;e.$.input.focus();const i=l.closest(".smart-timepicker-button");if(i){const a=t.querySelectorAll(".smart-timepicker-button");for(let e=0;e<a.length;e++)a[e].removeAttribute("selected");if(l.closest(".smart-icon-clear")){if(e.$.calendar.clearSelection(),e._timepicker){e._timepicker.classList.add("smart-visibility-hidden");const t=e.$.scrollView.querySelectorAll(".smart-timepicker-button");for(let e=0;e<t.length;e++)t[e].removeAttribute("selected"),t[e].setAttribute("aria-selected",!1)}return}return l.closest(".smart-icon-today")?void e.$.calendar.today():(i.setAttribute("selected",""),void e._toggleTimepicker(r))}l.closest("smart-done-button")?e.close():l.closest(".smart-timepicker")&&e._handleTimeSelection(l.closest(".smart-calendar-cell"))},Object.defineProperty(e,"value",{get:function(){return e._formatValue(e.properties.value.value)},set(t){e.updateProperty(e,e._properties.value,t)}}),!t.id){const e=t.tagName.toLowerCase();t.id=e.slice(0,1).toLowerCase()+e.slice(1)+Math.floor(65536*(1+Math.random())).toString(16).substring(1)}e.$.scrollView=t,e.classList.add("smart-input"),r.theme=e.theme,r.unfocusable=!0,r.rightToLeft=e.rightToLeft,r.animation=e.animation,r.months=e.months,r.max=e.max,r.min=e.min,r.locale=e.locale,r.viewSections=["header","footer"],r.selectionMode="range",e.button&&t.setAttribute("button",""),e.timepicker&&t.setAttribute("timepicker",""),e.icons&&t.setAttribute("icons",""),e.$.calendar||r.$.listen("change",()=>{e._noCalendarChange?delete e._noCalendarChange:e._performSelect(event)}),l.innerHTML=`\n        <div class="smart-date-range-input-footer-controls">\n            <div class="smart-timepicker-buttons">\n                <div class="smart-timepicker-button from"></div>\n                <div class="smart-timepicker-button to"></div>\n            </div>\n            <div class="smart-button-controls">\n                <div class="smart-icon-today smart-timepicker-button">${e.localize("today")}</div>\n                <div class="smart-icon-clear smart-timepicker-button">${e.localize("clear")}</div>\n            </div>\n        </div>`,r.footerTemplate=l,e.$.calendar=r,t.appendChild(e.$.calendar)}_toggleTimepicker(e){const t=this;if(!t.timepicker)return void(t._timepicker&&(t._timepicker.classList.add("smart-visibility-hidden"),t._timepicker.remove()));if(!t._timepicker){const e=document.createElement("div");e.innerHTML='\n                <div class="hour-selection smart-calendar-week" role="row"><div class="header" role="rowheader"></div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="0">12</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="1">01</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="2">02</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="3">03</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="4">04</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="5">05</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="6">06</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="7">07</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="8">08</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="9">09</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="10">10</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="11">11</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="12" pm>12</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="13" pm>01</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="14" pm>02</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="15" pm>03</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="16" pm>04</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="17" pm>05</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="18" pm>06</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="19" pm>07</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="20" pm>08</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="21" pm>09</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="22" pm>10</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="23" pm>11</div>\n                </div>\n                <div class="minute-selection smart-calendar-week" role="row"><div class="header" role="rowheader"></div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="0">00</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="5">05</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="10">10</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="15">15</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="20">20</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="25">25</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="30">30</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="35">35</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="40">40</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="45">45</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="50">50</div>\n                    <div class="smart-calendar-cell" role="gridcell" aria-selected="false" value="55">55</div>\n                </div>',e.classList.add("smart-timepicker","smart-calendar","smart-visibility-hidden"),e.setAttribute("role","grid"),Smart.Utilities.Core.isMobile||(e.onmouseover=function(e){const t=e.target.closest(".smart-calendar-cell");t&&t.setAttribute("hover","")},e.onmouseout=function(e){const t=e.target.closest(".smart-calendar-cell");t&&t.removeAttribute("hover")}),t._timepicker=e;const r=t.$.calendar.selectedDates;if(r.length){let e,l,i,a;1===r.length?(i=r[0],e={hours:i.getHours(),minutes:i.getMinutes()}):r.length>1&&(i=r[0],a=r[r.length-1],e={hours:i.getHours(),minutes:i.getMinutes()},l={hours:a.getHours(),minutes:a.getMinutes()}),e&&(t._timepicker._from=e),l&&(t._timepicker._to=l)}}const r=t._timepicker.querySelector(".hour-selection"),l=t._timepicker.querySelector(".minute-selection"),i=t.$.calendar;r.setAttribute("am-label",t.localize("am")),r.setAttribute("pm-label",t.localize("pm")),r.querySelector(".header").textContent=t.localize("hours"),l.querySelector(".header").textContent=t.localize("minutes"),t._timepicker.style.top=i.offsetTop+"px",t._timepicker.style.left=i.offsetLeft+"px",t._timepicker.style.width=i.offsetWidth+"px";const a=t._timepicker._rangeType;delete t._timepicker._rangeType;const s=e.target.closest(".smart-timepicker-button"),o=s.classList.contains("from")?"from":"to";s&&(t._timepicker._rangeType=o),Array.from(t._timepicker.querySelectorAll("div[selected]")).map(e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)});const n=t._timepicker[`_${o}`];if(n){const e=t._timepicker.querySelectorAll(`.hour-selection div[value="${n.hours}"], .minute-selection div[value="${n.minutes}"]`);for(let t=0;t<e.length;t++){const r=e[t];r&&(r.setAttribute("selected",!0),r.setAttribute("aria-selected",!0))}}const c=t._timepicker.classList.contains("smart-visibility-hidden");if(!c&&a&&a!==o)return;const d=t._timepicker.parentElement;if(d||t.$.scrollView.appendChild(t._timepicker),c)d?t._timepicker.classList.remove("smart-visibility-hidden"):requestAnimationFrame(()=>t._timepicker.classList.remove("smart-visibility-hidden"));else{t._timepicker.classList.add("smart-visibility-hidden");const e=t.$.scrollView.querySelectorAll(".smart-timepicker-button");for(let t=0;t<e.length;t++)e[t].removeAttribute("selected"),e[t].setAttribute("aria-selected",!1)}}_handleTimeSelection(e,t){const r=this;if(!e)return;e.closest(".hour-selection")?Array.from(r._timepicker.querySelectorAll(".hour-selection div[selected]")).map(e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)}):Array.from(r._timepicker.querySelectorAll(".minute-selection div[selected]")).map(e=>{e.removeAttribute("selected"),e.setAttribute("aria-selected",!1)}),e.setAttribute("selected",!0),e.setAttribute("aria-selected",!0);const l=r._timepicker._rangeType;if(!l)return;let i=r._timepicker[`_${l}`],[a,s]=i?[i.hours,i.minutes]:[0,0];e.closest(".hour-selection")?a=parseInt(e.getAttribute("value"))||0:s=parseInt(e.getAttribute("value"))||0,r._timepicker[`_${l}`]={hours:a,minutes:s};const o=r.$.calendar.selectedDates;o.length&&r._performSelect({detail:{value:o},noChangeEvent:t})}_valueValidator(e,t){return"object"===this.valueType&&t.from||"string"==typeof t?t:"object"===this.valueType?{}:""}_refreshMenu(){}_setAriaRelations(){const e=this,t=e.getAttribute("aria-label");e.readonly?(e.setAttribute("role","button"),!t&&e.placeholder&&e.setAttribute("aria-label",e.placeholder),e.removeAttribute("aria-readonly"),e.$.input.setAttribute("aria-hidden",!0),e.$.input.removeAttribute("aria-controls"),e.$.dropDownButton.setAttribute("aria-hidden",!0)):(e.setAttribute("role","presentation"),t&&t===e.placeholder&&e.removeAttribute("aria-label"),e.$.input.removeAttribute("aria-hidden"),e.$.dropDownButton.removeAttribute("aria-hidden")),e.setAttribute("aria-haspopup","dialog"),e.$.scrollView.setAttribute("role","dialog")}_setActiveDescendant(){}_setInputPurpose(){}})}});