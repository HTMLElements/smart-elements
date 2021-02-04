
/* Smart UI v9.1.1 (2021-Feb) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=47)}({47:function(e,r){Smart.Utilities.Assign("FormulaParser",class{constructor(e){let r;try{r=new formulaParser.Parser}catch(e){throw new Error("Smart.FormulaParser: Missing reference to 'formula-parser.min.js'.")}r.on("callCellValue",this._callCellValue.bind(this)),r.on("callRangeValue",this._callRangeValue.bind(this)),this.dataTable=e,this.parser=r}parse(e){const r=this.parser.parse(e);return null!==r.result?r.result:r.error}_callCellValue(e,r){const t=this,n=t.dataTable,a=e.column.index,l=e.row.index,o=n.columns[a].dataField;let u=n.dataSource[l][o];"string"==typeof u&&/=.+/.test(u)&&(u=t.parse(u.slice(1))),r(u)}_callRangeValue(e,r,t){const n=this.dataTable,a=n.dataSource,l=[];for(let t=e.row.index;t<=r.row.index;t++){const o=a[t],u=[];for(let t=e.column.index;t<=r.column.index;t++){let e=o[n.columns[t].dataField];isNaN(e)||(e=parseFloat(e)),u.push(e)}l.push(u)}l&&t(l)}}),Smart.FormulaParser=Smart.Utilities.FormulaParser}});