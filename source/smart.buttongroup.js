
/* Smart UI v9.1.1 (2021-Feb) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({6:function(e,t){Smart("smart-button-group",class extends Smart.ContentElement{static get properties(){return{dataSource:{type:"any",value:[],reflectToAttribute:!1},name:{value:"",type:"string"},selectionMode:{allowedValues:["none","one","zeroOrOne","zeroOrMany"],type:"string",value:"one"},selectedIndexes:{value:[],type:"array"},selectedValues:{value:[],type:"array"}}}static get styleUrls(){return["smart.buttongroup.css"]}template(){return"<div id='container' class='smart-container' role=\"presentation\">\n                    <div id=\"itemsContainer\" class=\"smart-button-group-items\" role=\"presentation\"></div>\n                    <input id='hiddenInput' type='hidden' name='[[name]]' value='[[value]]' class='smart-hidden-input'>\n                </div>"}static get listeners(){return{click:"_clickHandler",keydown:"_keyDownHandler",focus:"_focusHandler",blur:"_focusHandler"}}propertyChangedHandler(e,t,r){super.propertyChangedHandler(e,t,r);const n=this;switch(e){case"dataSource":n._handleDataSource();break;case"unfocusable":n._setFocusable();break;case"selectionMode":n._handleSelection();break;case"selectedValues":case"selectedIndexes":n._handleValue()}}render(){const e=this;e._handleDataSource(),e.setAttribute("role","group"),e._setFocusable(),e.enableShadowDOM&&e.$.hiddenInput&&e.appendChild(e.$.hiddenInput),super.render()}select(e){const t=this;if(null==e||"none"===t.selection)return;const r=t.$.itemsContainer.children;if("number"!=typeof e){e+="";for(let n=0;n<r.length;n++){const s=r[n];s.getAttribute("value")===e&&t._selectItem(s)}}else t._selectItem(r[e])}_clickHandler(e){const t=this.shadowRoot||this.isInShadowDOM?e.composedPath()[0]:e.target;e.stopPropagation(),this._selectItem(t)}_handleDataSource(){const e=this,t=e.$.itemsContainer,r=e.dataSource,n=e.selectedValues,s=e.selectedIndexes;let i="function"==typeof r?e.dataSource():r;if("string"==typeof i&&(i=JSON.parse(e.dataSource)),Array.isArray(i)||(i=Array.from(i)),t.innerHTML="",!i)return void e._updateValue();const a=document.createDocumentFragment();for(let t=0;t<i.length;t++){const r=i[t];let o,l=r,u=r;"object"==typeof r&&(l=r.label+""||"",u=r.value+""||l||"",o=r.disabled);const c=document.createElement("div");c.innerHTML=`<div>${l}</div>`,c.id=e.id+"Item"+Math.floor(65536*(1+Math.random())).toString(16).substring(1),c.classList.add("smart-button-group-item"),c.setAttribute("data-label",l),c.setAttribute("value",u),c.setAttribute("role","option"),c.setAttribute("aria-label",l),n.indexOf(u)>-1||s.indexOf("value")>-1?(c.setAttribute("active",""),c.setAttribute("aria-selected",!0)):c.setAttribute("aria-selected",!1),o&&c.setAttribute("disabled",""),a.appendChild(c)}t.appendChild(a),e._handleSelection()}_handleSelection(){const e=this.$.itemsContainer,t=Array.from(e.children);if(!t.length)return;const r=this.selectionMode;switch(e.setAttribute("aria-multiselectable",!1),r){case"none":t.forEach(e=>{e.removeAttribute("active"),e.removeAttribute("focus"),e.setAttribute("aria-selected",!1)});break;case"one":case"zeroOrOne":{const e=t.filter(e=>e.hasAttribute("active")),n=t[0];"one"===r&&!e.length&&n&&(n.setAttribute("active",""),n.setAttribute("aria-selected",!0));for(let t=0;t<e.length;t++){const r=e[t];0!==t&&(r.removeAttribute("active"),r.removeAttribute("focus"),r.setAttribute("aria-selected",!1))}break}case"zeroOrMany":e.setAttribute("aria-multiselectable",!0)}this._updateValue()}_handleValue(){const e=this.selectedValues,t=this.selectedIndexes,r=this.$.itemsContainer.children,n=this.selectionMode;for(let s=0;s<r.length;s++){const i=r[s];"none"!==n&&(e.indexOf(i.getAttribute("value"))>-1||t.indexOf(s)>-1)?(i.setAttribute("active",""),i.setAttribute("focus",""),i.setAttribute("aria-selected",!0)):(i.removeAttribute("active"),i.removeAttribute("focus"),i.setAttribute("aria-selected",!1))}this._handleSelection()}_keyDownHandler(e){const t=this;if(t.readonly)return;const r=t.$.itemsContainer.children;let n,s;for(let e=0;e<r.length;e++){const t=r[e];t.hasAttribute("focus")&&(n=t),t.hasAttribute("active")&&(s=t)}switch(n=n||s||r[0],e.key){case"ArrowLeft":case"ArrowRight":e.preventDefault(),n="ArrowLeft"===e.key?n.previousElementSibling:n.nextElementSibling;break;case"Enter":case" ":return e.preventDefault(),void t._selectItem(n);case"Home":case"End":e.preventDefault(),n="Home"===e.key?r[0]:r[r.length-1]}if(n)for(let e=0;e<r.length;e++){r[e]===n?n.setAttribute("focus",""):r[e].removeAttribute("focus")}}_focusHandler(e){const t=this.$.itemsContainer;if("focus"!==e.type||this.readonly){const e=t.children;for(let t=0;t<e.length;t++)e[t].removeAttribute("focus")}else{const e=t.querySelector(".smart-button-group-item[active]")||t.children[0];e&&e.setAttribute("focus","")}}_setFocusable(){const e=this;if(e.disabled||e.unfocusable)return e.removeAttribute("tabindex"),void(e.tabIndex=-1);e.tabIndex=e.tabIndex>0?e.tabIndex:0}_selectItem(e){if(!e||!e.closest)return;const t=this.selectionMode;if(!(e=e.closest(".smart-button-group-item"))||"none"===t)return;const r=this.$.itemsContainer.children;if("one"!==t||!e.hasAttribute("active")){if(t.toLowerCase().indexOf("one")>-1){"zeroOrOne"===t&&e.hasAttribute("active")&&(e=void 0);for(let e=0;e<r.length;e++){const t=r[e];t.removeAttribute("active"),t.removeAttribute("focus"),t.setAttribute("aria-selected",!1)}}for(let t=0;t<r.length;t++){const n=r[t];n===e?(e.hasAttribute("active")?(e.removeAttribute("active"),e.setAttribute("aria-selected",!1)):(e.setAttribute("active",""),e.setAttribute("aria-selected",!0)),e.setAttribute("focus","")):n.removeAttribute("focus")}this._updateValue()}}_updateValue(){const e=this,t=Array.from(e.$.itemsContainer.children),r=t.filter(e=>e.hasAttribute("active")),n=r.map(e=>e.getAttribute("value")),s=e.selectedValues;if(s.length!==n.length||s.some(e=>n.indexOf(e)<0)){const i=r.map(e=>t.indexOf(e)),a=e.selectedIndexes;e.set("selectedValues",n),e.set("selectedIndexes",i),e.$.fireEvent("change",{oldValue:s,oldIndexes:a,values:n,indexes:i})}}})}});