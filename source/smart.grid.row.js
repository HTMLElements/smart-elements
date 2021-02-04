
/* Smart UI v9.1.1 (2021-Feb) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(e){var t={};function i(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(l,r,function(t){return e[t]}.bind(null,r));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=63)}({63:function(e,t){Smart.Utilities.Assign("Grid.Row",class{constructor(e){const t=this;if(e||(e={}),Object.assign(t,e),e){if(void 0===t.data){const i={$:{}};if(e.grid&&e.grid.dataSource){const t=e.grid.dataSource;for(let e=0;e<t.dataFields.length;e++){i[(t.dataFields?t.dataFields[e]:{}).name]=""}}else Object.assign(i,e);e.id&&(i.$.id=e.id),t.data=i}(void 0===e.$||e.$&&void 0===e.$.id)&&(e.data?(e.data.$&&e.data.$.id&&(t.id=e.data.$.id),t.id||(t.id=e.index)):void 0===t.id&&(t.id=e.index),void 0===t.id&&(t.id=Smart.Utilities.Core.createGUID())),void 0===t.detailHeight&&(t.grid?t.detailHeight=t.grid.rowDetail.height:t.detailHeight=200),void 0===t.height&&t.grid&&(t.height=t.grid.layout.rowMinHeight,t.grid.__autoRowHeight&&(t.height=t.grid.__autoRowHeight),t.grid.layout.rowHeight&&(t.height=t.grid.layout.rowHeight)),void 0===t.cellHeight&&(t.cellHeight=t.height),void 0===t.showDetail&&(t.showDetail=!1),void 0===t.index&&(t.index=-1),void 0===t.visibleIndex&&(t.visibleIndex=-1),void 0===t.freeze&&(t.freeze=!1),void 0===t.height&&(t.height=null),void 0===t.minHeight&&(t.minHeight=25,t.grid&&(t.minHeight=t.grid.layout.rowMinHeight)),void 0===t.checked&&(t.checked=!1),void 0===t.selected?(t.selected=!1,t.grid&&t.grid._selection.rows[t.id]&&(t.selected=!0)):t.selected&&t.grid&&(t.grid._selection.rows[t.id]=!0),void 0===t.enabled&&(t.enabled=!0),void 0===t.visible&&(t.visible=!0),void 0===t.allowCheck&&(t.allowCheck=!0),void 0===t.filtered&&(t.filtered=!0),void 0===t.allowResize&&(t.allowResize=!0),void 0===t.allowReorder&&(t.allowReorder=!0),void 0===t.allowToggle&&(t.allowToggle=!0),void 0===t.allowSelect&&(t.allowSelect=!0),void 0===t.expanded&&(e.data&&void 0!==e.data.expanded?t.expanded=e.data.expanded:t.expanded=!1),t.headerCell=null,t._cells=[]}}get properties(){return["allowToggle","allowResize","allowSelect","allowReorder","allowCheck","canNotify","children","checked","cells","detailHeight","detailTemplate","cellHeight","expandHeight","data","enabled","expanded","filtered","freeze","grid","headerCell","height","index","id","minHeight","unbound","selected","showDetail","visible","parent","leaf","visibleIndex"]}createElement(){const e=document.createElement("smart-grid-row");return this.element=e,e.setAttribute("role","row"),e._initialize(this),e}_autoSize(e){const t=this,i=t.grid;let l=i.layout.rowMinHeight;const r=t.element;if(e||(e=t),e&&(t.data=e.data),!r)return t.height;i.__autoHeightRows||(i.__autoHeightRows=[]);const n=(e,t,r)=>{if(!r||!t||t.autoGenerated)return 0;i.__autoHeightRows[t.dataField]||(i.__autoHeightRows[t.dataField]=[]);const n=(""+e.data[t.dataField]).length,o=i.__autoHeightRows[t.dataField][n],a=o||(()=>{r.style.height="auto",t.cellsWrap?r.content.classList.add("wrap"):r.content.classList.add("nowrap"),e&&t&&(r.content.textContent=e.data[t.dataField]);const i=r.offsetHeight;return r.style.height="",r.content.classList.remove("wrap"),r.content.classList.remove("nowrap"),i})();l=Math.max(l,a),o||(i.__autoHeightRows[t.dataField][n]=a)};for(let t=0;t<i._frozenNearColumns.length;t++){n(e,i._frozenNearColumns[t],r.children[0].children[t])}for(let t=0;t<i._frozenFarColumns.length;t++){n(e,i._frozenFarColumns[t],r.children[2].children[t])}for(let t=0;t<r.children[1].children.length;t++){n(e,i._columnElements[t].column,r.children[1].children[t])}return l}autoSize(){const e=this._autoSize();this.height=e}getCell(e){const t=this,i=t.grid;if(!i)return null;if("string"!=typeof e&&"number"!=typeof e||(e=i.columnByDataField[e]),!e)return null;if(t["column_"+e.dataField]){const i=t["column_"+e.dataField];return i.column=e,i}{const l=new Smart.Grid.Cell(t,e,i);return t["column_"+e.dataField]=l,l}}get cells(){const e=this;return e._cells&&e.grid&&e._cells.length===e.grid.columns.length||e.createCells(),e._cells}get viewCells(){const e=this,t=[];for(let i=0;i<e.grid.viewColumns.length;i++){const l=e.grid.viewColumns[i];if(e["column_"+l.dataField]){const i=e["column_"+l.dataField];t.push(i)}else{const i=new Smart.Grid.Cell(e,l,e.grid);e["column_"+l.dataField]=i,t.push(i)}}return e._viewCells=t,t}createCells(){const e=this,t=e.grid;e._cells=[];for(let i=0;i<t.viewColumns.length;i++){const l=t.viewColumns[i];if(!l.autoGenerated)if(e["column_"+l.dataField]){const t=e["column_"+l.dataField];e._cells.push(t)}else{const i=new Smart.Grid.Cell(e,l,t);e["column_"+l.dataField]=i,e._cells.push(i)}}}toggle(e){this.element._handleExpandCollapse(!this.expanded,e)}select(){this.setProperty("selected",!0)}unselect(){this.setProperty("selected",!1)}expand(){this.element._handleExpandCollapse(!0)}collapse(){this.element._handleExpandCollapse(!1)}render(){this.element.row=this,this.element._render()}setProperty(e,t){const i=this,l=i.getProperty(e);i[e]=t,l!==t&&(i.canNotify=!1,i.propertyChanged(e,l,t),i.canNotify=!0)}getProperty(e){const t=this;if("selected"===e&&t.grid){let i=!1;return t.grid._selection.cells["row"+t.id]&&(i=null),t.grid&&t.grid._selection.rows[t.id]&&(i=!0),t.grid.rows.canNotify=!1,t[e]=i,t.grid.rows.canNotify=!0,i}return t[e]}propertyChanged(e,t,i){const l=this;if("showDetail"===e){l.height=0;const e=l.element.rowDetail;if(l.grid.appearance.allowRowDetailToggleAnimation&&!l.grid.rowDetail.dialog.enabled){const t=function(e){const t=l.grid._toggledRow;!t||"transform"!==e.propertyName&&"height"!==e.propertyName||r(t)},r=function(e){e.grid.$.content.style.transition="",e.element.rowDetail.removeEventListener("transitionend",t),e.element.rowDetail.removeEventListener("transitioncancel",t),e.grid._toggledRow=null,e.element.removeAttribute("has-detail"),l.grid._refresh()};l.grid._toggledRow=l,e.addEventListener("transitionend",t),e.addEventListener("transitioncancel",t),i?(l.element.setAttribute("has-detail",""),l.element.toggleDetailButton.removeAttribute("toggled"),l.element.toggleDetailButton.classList.remove("smart-animate"),setTimeout(()=>{l.element.toggleDetailButton.classList.add("smart-animate"),l.element.toggleDetailButton.setAttribute("toggled",""),l.element.setAttribute("show-detail","")}),l.element.style.height=l.cellHeight+l.detailHeight+"px",l.grid._autoHeight&&(l.grid.$.content.style.transition="0.25s height ease-in-out",l.grid.$.content.style.height=parseInt(l.grid.$.content.style.height)+l.detailHeight+"px",l.grid.$.scrollView.style.height="auto"),e.classList.remove("smart-hidden"),e.style.height!==l.detailHeight+"px"&&(e.style.height=l.detailHeight+"px"),e.style.lineHeight!==l.detailHeight+"px"&&(e.style.lineHeight=l.detailHeight+"px"),e.style.top!==l.cellHeight+"px"&&(e.style.top=l.cellHeight+"px")):(l.element.setAttribute("has-detail",""),l.element.toggleDetailButton.removeAttribute("toggled"),l.grid._autoHeight&&(l.grid.$.content.style.transition="0.25s height ease-in-out",l.grid.$.content.style.height=parseInt(l.grid.$.content.style.height)-l.detailHeight+"px",l.grid.$.scrollView.style.height="auto"),setTimeout(()=>{l.element.style.height=l.cellHeight+"px",l.element.removeAttribute("show-detail")}))}else l.grid._refresh()}if("allowCheck"!==e&&"allowSelect"!==e||l.grid._recycle(),"checked"===e&&(l.grid.checkBoxes.hasThreeStates&&l.grid._hasThreeStates(l,l),l.grid._recycle()),"selected"===e){if(!1===l.allowSelect)return;if(i?l.grid._selection.rows[l.id]=!0:!1===i&&l.grid._selection.rows[l.id]&&delete l.grid._selection.rows[l.id],!l.element)return;i?l.element.setAttribute("aria-selected",!0):l.element.removeAttribute("aria-selected"),l.grid._recycle()}"visible"===e&&l.grid.refresh(),"expanded"===e&&(l.expandHeight||l.grid.refresh()),"height"===e&&(l.expandHeight||l.cellHeight!==i&&(l.cellHeight=i,l.grid.refresh())),"freeze"===e&&(!0===i||"near"===i?l.grid._frozenNearRows.push(l):"far"===i?l.grid._frozenFarRows.push(l):(l.grid._frozenNearRows.splice(l.grid._frozenNearRows.indexOf(l),1),l.grid._frozenFarRows.splice(l.grid._frozenFarRows.indexOf(l),1)),l.grid._recycle())}}),Smart("smart-grid-row",class extends Smart.BaseElement{static get properties(){return{}}get isUtilityElement(){return!0}get hasStyleObserver(){return!1}addThemeClass(){}addDefaultClass(){}_initialize(e){const t=this,i=e.grid,l=i._columnElements,r=i._frozenNearColumns,n=i._frozenFarColumns,o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),d=document.createDocumentFragment(),c=document.createDocumentFragment(),h=document.createDocumentFragment();i.rightToLeft?(a.classList.add("far","smart-grid-cell-container"),o.classList.add("center","smart-grid-cell-container"),s.classList.add("near","smart-grid-cell-container")):(a.classList.add("near","smart-grid-cell-container"),o.classList.add("center","smart-grid-cell-container"),s.classList.add("far","smart-grid-cell-container")),t.row=e,e.createCells(),t._mouseEnter=function(){if(!i.isScrolling&&!i.editing.isEditing&&(t.commandBar&&(t.commandBar.parentNode.removeChild(t.commandBar),t.commandBar=null),i.editing.enabled&&i.editing.commandColumn.visible&&i.editing.commandColumn.inline&&!t.commandBar)){const e=document.createElement("div"),l=i._getCommandColumnCommandsTemplate();e.classList.add("smart-grid-command-bar"),e.innerHTML=l,o.appendChild(e),requestAnimationFrame(()=>{e.classList.add("show")}),i._updateCommandColumnCommandsVisibility(e,t.row),e.onmousedown=function(e){const l=e.path;let r=null;for(let e=0;e<l.length;e++)if(l[e].classList.contains("smart-grid-command-item")){r=l[e];break}if(r){const l=r.getAttribute("command");i._applyCommand(l,[t.row]),t.commandBar&&(t.commandBar.parentNode.removeChild(t.commandBar),t.commandBar=null),t.removeAttribute("hover"),e.stopPropagation(),e.preventDefault()}},t.commandBar=e}},t._mouseLeave=function(){i.isScrolling||i.editing.isEditing||t.commandBar&&(t.commandBar.classList.remove("show"),t.commandBar.addEventListener("transitionend",(function(){t.commandBar&&(t.commandBar.parentNode.removeChild(t.commandBar),t.commandBar=null)})),t.commandBar.addEventListener("transitioncancel",(function(){t.commandBar&&(t.commandBar.parentNode.removeChild(t.commandBar),t.commandBar=null)})))},t.addEventListener("mouseenter",t._mouseEnter),t.addEventListener("mouseleave",t._mouseLeave);for(let t=0;t<r.length;t++){const i=r[t],l=e.getCell(i).createElement();c.appendChild(l)}for(let t=0;t<n.length;t++){const i=n[t],l=e.getCell(i).createElement();h.appendChild(l)}for(let i=0;i<l.length;i++){const r=l[i],n=r.column;if(!r.parentNode||!n)break;const o=e.getCell(n).createElement();n&&n._treeColumn&&(t.toggleButton=o.toggleButton),d.appendChild(o)}a.appendChild(c),o.appendChild(d),s.appendChild(h);const g=document.createElement("div");g.classList.add("smart-grid-row-detail","smart-hidden","smart-animate");const m=document.createElement("div");m.classList.add("smart-grid-row-sub-container","smart-hidden"),t._rowFragment=document.createDocumentFragment(),t._rowFragment.appendChild(a),t._rowFragment.appendChild(o),t._rowFragment.appendChild(s),t._rowFragment.appendChild(g),t._rowFragment.appendChild(m),t.appendChild(t._rowFragment),t.cellsNearContainerElement=t.children[0],t.cellsContainerElement=t.children[1],t.cellsFarContainerElement=t.children[2],t.rowDetail=t.children[3],t.rowContainer=t.children[4],i.layout.rowHeight&&"auto"!==i.layout.rowHeight&&(t.style.height=i.layout.rowHeight+"px"),delete t._rowFragment}get enableShadowDOM(){return!1}_handleExpandCollapse(e,t){const i=this,l=i.row,r=l.grid;if(!l.allowToggle)return null;r._toggledRow=l;let n={row:l};t&&(n.originalEvent=t.originalEvent),r.$.fireEvent(e?"rowExpand":"rowCollapse",n);const o=r.dataSource.virtualDataSourceOnExpand&&e&&!0!==l.data._loaded;if(e?r.dataSource._expandedRowIds[l.data.$.id]=!0:delete r.dataSource._expandedRowIds[l.data.$.id],!r.appearance.allowRowToggleAnimation||o)r.rows.canNotify=!1,l.expanded=e,r.rows.canNotify=!0,l.data.expanded=e,o&&(l.data._loaded=!0,r._virtualDataRequest("expand")),r._toggledRow=null,r._refresh(),o&&r.appearance.allowRowToggleAnimation&&(i.toggleButton.removeAttribute("toggled"),i.toggleButton.classList.remove("smart-animate"),setTimeout(()=>{i.toggleButton.classList.add("smart-animate"),i.toggleButton.setAttribute("toggled","")},50));else{const t=function(e){e.height=e.cellHeight,r.$.content.style.transition="",e.element.rowContainer.innerHTML="",e.element.rowContainer.classList.add("smart-hidden"),e.element.rowContainer.removeEventListener("transitionend",n),e.element.rowContainer.removeEventListener("transitioncancel",n),e.element.rowContainer.style.height="",e.element.rowContainer.style.transform="",e.element.rowContainer.style.transition="",e.element.rowContainer.classList.remove("smart-animate"),e.element.toggleButton&&e.element.toggleButton.classList.remove("smart-animate"),r._refresh()},n=function(e){const l=r._toggledRow;i._toggleTimer=null,r._toggledRow=null,!l||"transform"!==e.propertyName&&"height"!==e.propertyName||setTimeout(()=>{t(l)},50)};if(i._toggleTimer){clearTimeout(i._toggleTimer);const e=r._toggledRow;r._toggledRow=null,t(e)}i._toggleTimer=setTimeout(()=>{const t=function(){!function(){const e=r._toggledRow;r._refresh(),r._refreshRowHierarchy();let t=0;for(let e=0;e<r.rowHierarchy.length;e++){const i=r.rowHierarchy[e];let l=i.parent;for(;l;)l.id===r._toggledRow.id&&(t+=i.height),l=l.parent}const i=r._scrollView.scrollTop,l=r._contentHeight-(e.cellHeight+e.top-i);e.expandHeight=Math.min(l,t),e.height=e.cellHeight+e.expandHeight}(),r._recycle(!1),i.style.overflow="hidden",i.style.height="auto",i.style.lineHeight=l.cellHeight+"px"};e?(l.expanded=!0,t(),i.rowContainer.style.transform="scaleY(0)",i.rowContainer.style.height="0px",i.toggleButton&&i.toggleButton.removeAttribute("toggled"),r._autoHeight&&(r.$.content.style.height=parseInt(r.$.content.style.height)-l.expandHeight+"px"),setTimeout((function(){i.toggleButton&&(i.toggleButton.classList.add("smart-animate"),i.toggleButton.setAttribute("toggled","")),i.rowContainer.addEventListener("transitionend",n),i.rowContainer.addEventListener("transitioncancel",n),r._autoHeight&&(r.$.content.style.transition="0.25s height ease-in-out",r.$.content.style.height=parseInt(r.$.content.style.height)+l.expandHeight+"px"),i.rowContainer.classList.add("smart-animate"),i.rowContainer.style.height=l.expandHeight+"px",i.rowContainer.style.transform="scaleY(1)"}))):(t(),l.expanded=!1,i.rowContainer.style.transform="scaleY(0)",i.rowContainer.style.height="0px",r._autoHeight&&(r.$.content.style.height=parseInt(r.$.content.style.height)-l.expandHeight+"px",r.$.content.style.transition="",r.$.content.style.height=parseInt(r.$.content.style.height)+l.expandHeight+"px"),i.rowContainer.style.height=l.expandHeight+"px",i.rowContainer.style.transform="scaleY(1)",i.toggleButton&&(i.toggleButton.setAttribute("toggled",""),i.toggleButton.classList.add("smart-animate")),setTimeout((function(){i.toggleButton&&i.toggleButton.removeAttribute("toggled",""),r._autoHeight&&(r.$.content.style.transition="0.25s height ease-in-out",r.$.content.style.height=parseInt(r.$.content.style.height)-l.expandHeight+"px"),i.rowContainer.addEventListener("transitionend",n),i.rowContainer.addEventListener("transitioncancel",n),i.rowContainer.classList.add("smart-animate"),i.rowContainer.style.transform="scaleY(0)",i.rowContainer.style.height="0px"}),0))},50)}}_renderAddNewRow(){const e=this,t=e.row,i=t.grid,l=t.element,r=new Smart.Grid.Cell(t,i.columns[0],i);t.visible?l.classList.remove("smart-hidden"):l.classList.add("smart-hidden"),l.innerHTML="<smart-grid-cell><div>"+i.localize("addNewRow")+"</div></smart-grid-cell>",l.firstChild.firstChild.classList.add("align-center"),l.firstChild.classList.add("smart-grid-column-border-collapse"),l.firstChild.setAttribute("freeze",""),l.firstChild.setAttribute("addNewRow",""),l.firstChild.style.width="100%",i._scrollView.vScrollBar.offsetWidth>0&&(l.firstChild.style.width="calc(100% - "+(-1+i._scrollView.vScrollBar.offsetWidth)+"px)"),l.firstChild.cell=r,i._rowGap>0&&t!==i.rows[i.rows.length-1]?(e.style.marginBottom=i._rowGap+"px",parseInt(e.style.height)-i._rowGap!==t.height&&(e.style.height=t.height-i._rowGap+"px"),parseInt(e.style.lineHeight)-i._rowGap!==t.height&&(e.style.lineHeight=t.height-i._rowGap+"px")):(e.style.marginBottom="",parseInt(e.style.height)!==t.height&&(e.style.height=t.height+"px"),parseInt(e.style.lineHeight)!==t.height&&(e.style.lineHeight=t.height+"px"))}_renderFilterRow(){const e=this,t=e.row,i=t.grid,l=t.element;t.visible?l.classList.remove("smart-hidden"):l.classList.add("smart-hidden"),l.innerHTML="<smart-grid-cell><div>"+i.localize("addNewRow")+"</div></smart-grid-cell>",l.firstChild.firstChild.classList.add("align-center"),l.firstChild.classList.add("smart-grid-column-border-collapse"),l.firstChild.setAttribute("freeze",""),l.firstChild.setAttribute("addNewRow",""),l.firstChild.style.width="100%",i._scrollView.vScrollBar.offsetWidth>0&&(l.firstChild.style.width="calc(100% - "+(-1+i._scrollView.vScrollBar.offsetWidth)+"px)"),e.style.marginBottom="",parseInt(e.style.height)!==t.height&&(e.style.height=t.height+"px"),parseInt(e.style.lineHeight)!==t.height&&(e.style.lineHeight=t.height+"px")}_renderEmpty(){this.classList.add("smart-hidden")}_renderCell(e,t,i){if(!t)return void i.classList.add("smart-hidden");let l=e.getCell(t);l.element!==i&&(l._styleChanged=!0),i.cell!==l&&(i.cell.background===l.background&&i.cell.borderColor===l.borderColor&&i.cell.color===l.color&&i.cell.fontSize===l.fontSize&&i.cell.fontFamily===l.fontFamily&&i.cell.fontWeight===l.fontWeight&&i.cell.fontStyle===l.fontStyle||(l._styleChanged=!0)),l.element=i,i.cell=l,t._treeColumn&&l.element.isRendered&&l.element._refresh(),l.render(),t&&t.rowHeaderColumn&&(e.header=i,i.setAttribute("data-id",e.id))}_alternate(){const e=this,t=e.row,i=t.grid,l=i.appearance.alternationStart,r=i.appearance.alternationEnd>0?i.appearance.alternationEnd:1/0;if(!(i.appearance.alternationCount<=0)&&(e.removeAttribute("alternation-index"),t.visibleIndex>=l&&t.visibleIndex<=r)){const r=(t.visibleIndex-l)%i.appearance.alternationCount;e.setAttribute("alternation-index",r)}}_openRowDetailDialog(e){const t=this.row.grid,i=this.row;if(!t.rowDetail.dialog.enabled||!i.showDetail)return!1;const l=t._dialogRowDetail||t._createDialog(t.rowDetail.dialog);if(t.rowDetail.dialog.visible&&l.row!==i)return void(i.showDetail=!1);const r="{{message}}"===t.rowDetail.dialog.header?t.localize("dialogRowDetailHeader",{value:i.visibleIndex+1}):t.rowDetail.dialog.header;!t.rowDetail.dialog.visible||t.rowDetail.dialog.row!==i||i.showDetail?(l.header.innerHTML=r,l.content.innerHTML="",l.content.style.width="100%",l.content.style.height="100%",l.row=i,l.querySelector(".smart-footer").classList.add("smart-hidden"),t._dialogRowDetail||(l.setAttribute("tabindex",0),l.modal=!0,l.btnConfirm.innerHTML=t.localize("dialogRowDetailButtonConfirm"),l.btnCancel.innerHTML=t.localize("dialogRowDetailButtonCancel"),l.btnCancel.classList.add("smart-hidden"),l.onOpen=function(){t.rowDetail.dialog.visible=!0},l.onClose=function(){t.rowDetail.dialog.visible=!1,l.row.showDetail=!1},l.btnCancel.onclick=function(){l.close()},l.btnClose.onclick=function(){l.close()},l.btnConfirm.onclick=function(){l.close()},l.onkeydown=function(e){"Escape"===e.key&&l.close()},t._dialogRowDetail=l),l.open(),setTimeout((function(){l.focus()}),100),l.content.appendChild(e)):l.close()}_renderDetail(e){const t=this,i=t.row.grid,l=t.row;let r=l.id,n=l.detailTemplate||i.rowDetail.template;if(n.startsWith("#")&&(n=document.querySelector(n)),l._detail)return e.firstChild===l._detail||(e.firstChild&&e.removeChild(e.firstChild),e.appendChild(l._detail)),void(i.onRowDetailUpdated&&i.onRowDetailUpdated(l.index,l,e.firstChild));if(n instanceof HTMLTemplateElement){const t=n.content.cloneNode(!0).firstElementChild;r=r.toString(),r=r.replace(/'/gi,"\\'"),r=r.replace(/"/gi,'\\"');let i=t.outerHTML.replace(/{{value}}/gi,r).replace(/{{id}}/gi,l.id);i.indexOf("{{value=")>=0&&(r?(i=i.substring(0,i.indexOf("{{value="))+r+i.substring(i.indexOf("}")),i=i.replace(/}/gi,""),i=i.replace(/{/gi,"")):(i=i.replace(/{{value=/gi,""),i=i.replace(/}}/gi,""))),i="<div>"+i+"</div>";for(let e in l.data)i=i.replace("{{"+e+"}}",l.data[e]);e.innerHTML!==i&&(e.innerHTML=i)}else{let t="<div>"+n.replace(/{{value}}/gi,r).replace(/{{id}}/gi,l.id)+"</div>";for(let e in l.data)t=t.replace("{{"+e+"}}",l.data[e]);e.innerHTML!==t&&(e.innerHTML=t)}i.onRowDetailInit&&i.onRowDetailInit(l.index,l,e.firstChild),i.rowDetail.dialog.enabled?i.rowDetail.dialog.visible?t._openRowDetailDialog(e.firstChild):t._openRowDetailDialog(e.firstChild.firstElementChild):l._detail=e.firstChild}_render(){let e=this;const t=e.row,i=t.grid,l=t.getProperty("selected");if(!1===l&&e.hasAttribute("selected")?e.removeAttribute("selected"):!0===l?e.setAttribute("selected",""):null===l&&e.setAttribute("selected","indeterminate"),t.allowSelect||e.setAttribute("selected","none"),e.hasAttribute("unbound")&&e.removeAttribute("unbound"),t.unbound&&e.setAttribute("unbound",""),e.removeAttribute("focus"),i._selection.focusedCell&&i._selection.focusedCell.row&&i._selection.focusedCell.row.id===t.id&&e.setAttribute("focus",""),!i._toggledRow&&e.classList.contains("smart-animate"))return e.classList.remove("smart-animate"),e.rowContainer.innerHTML="",e.rowContainer.classList.add("smart-hidden"),i._refreshLayout(),void i._recycle();if(0===i.columns.length)return void e._renderEmpty();if(t.addNewRow)return void e._renderAddNewRow();if(i._toggledRow&&(t.id===i._toggledRow.id?e.setAttribute("toggle",""):e.hasAttribute("toggle")&&e.removeAttribute("toggle")),i._toggledRow&&i.appearance.allowRowToggleAnimation){let l=t.parent;if(!i._toggledRow.expanded&&i._toggledRow.id===t.id){const t=e.rowContainer;for(let e=0;e<t.children.length;e++){const l=t.children[e],r=l.getAttribute("data-id"),n=i.rowById[r];l.getAttribute("data-rendered")||(l.setAttribute("data-rendered",!0),n.element=l,n.render())}}for(;l;){if(l.id===i._toggledRow.id){const r=l.element.rowContainer;if(i._toggledRow.expanded){e.classList.add("smart-hidden");let l=t.createElement(i);for(let e=0;e<r.children.length;e++){const i=r.children[e];if(i.getAttribute("data-id")===t.id.toString())return void(l=i)}t.element=l,r.appendChild(l),r.classList.remove("smart-hidden"),l.row=t,e=l}break}l=l.parent}}e._alternate();const r=parseFloat(i.$.columnNearContainer.style.width),n=parseFloat(i.$.columnContainer.style.width),o=parseFloat(i.$.columnFarContainer.style.width),a=e.children[1],s=e.children[0],d=e.children[2];if(i.rightToLeft?(s.classList.remove("vscroll"),i.computedVerticalScrollBarVisibility&&s.classList.add("vscroll")):(d.classList.remove("vscroll"),i.computedVerticalScrollBarVisibility&&d.classList.add("vscroll")),e.hasAttribute("group")&&e.removeAttribute("group"),e.hasAttribute("tree")&&e.removeAttribute("tree"),e.hasAttribute("level")&&(e.removeAttribute("level"),e.removeAttribute("aria-level")),e.hasAttribute("leaf")&&e.removeAttribute("leaf"),e.hasAttribute("expanded")&&e.removeAttribute("expanded"),e.hasAttribute("summary")&&e.removeAttribute("summary"),e.hasAttribute("filter")&&e.removeAttribute("filter"),null===t.filtered&&e.setAttribute("filter","indeterminate"),i.dataSource.groupBy&&i.dataSource.groupBy.length>0&&"advanced"===i.grouping.renderMode?(e.setAttribute("level",t.level),e.setAttribute("aria-level",t.level),t.expanded&&e.setAttribute("expanded",""),void 0!==t.label&&t.level===i.dataSource.groupBy.length-1&&e.setAttribute("leaf",""),void 0!==t.label?e.setAttribute("group",""):e.setAttribute("leaf",""),t.summaryRow&&e.setAttribute("summary",""),e.toggleButton&&e.toggleButton.classList.remove("smart-hidden")):i.dataSource.boundHierarchy?(e.setAttribute("level",t.level),e.setAttribute("aria-level",t.level),t.expanded&&e.setAttribute("expanded",""),t.leaf&&e.setAttribute("leaf",""),t.summaryRow&&e.setAttribute("summary",""),e.toggleButton&&e.toggleButton.classList.remove("smart-hidden")):(t.canNotify=!1,t.leaf=!0,t.expanded=!1,t.summaryRow=!1,t.data||(t.data={}),t.data.summaryRow&&(t.summaryRow=!0),t.level=0,e.toggleButton&&e.toggleButton.classList.add("smart-hidden"),t.canNotify=!0),e.setAttribute("data-id",t.id),e.visible=t.visible,e.cellsNearContainerElement.classList.remove("smart-visibility-hidden"),e.cellsContainerElement.classList.remove("smart-visibility-hidden"),e.cellsFarContainerElement.classList.remove("smart-visibility-hidden"),e.removeAttribute("rowspan"),i._rowGap>0&&t!==i.rows[i.rows.length-1]?(e.style.marginBottom=i._rowGap+"px",parseInt(e.style.height)-i._rowGap!==t.height&&(e.style.height=t.height-i._rowGap+"px"),parseInt(e.style.lineHeight)-i._rowGap!==t.height&&(e.style.lineHeight=t.height-i._rowGap+"px")):(e.style.marginBottom="",parseInt(e.style.height)!==t.height&&(e.style.height=t.height+"px"),parseInt(e.style.lineHeight)!==t.height&&(e.style.lineHeight=t.height+"px")),i.rightToLeft?a.style.right!==i._scrollView.scrollWidth-i._scrollView.scrollLeft-i._scrollView.vScrollBar.offsetWidth+"px"&&(a.style.right=i._scrollView.scrollWidth-i._scrollView.scrollLeft-i._scrollView.vScrollBar.offsetWidth+"px"):a.style.left!==-i._scrollView.scrollLeft+"px"&&(a.style.left=-i._scrollView.scrollLeft+"px"),i.rowDetail.enabled){const l=e.rowDetail;e.removeAttribute("show-detail"),t.showDetail?(l.classList.remove("smart-hidden"),e.setAttribute("show-detail",""),i.rowDetail.dialog.enabled?l.classList.add("smart-hidden"):(l.style.height!==t.detailHeight+"px"&&(l.style.height=t.detailHeight+"px"),l.style.lineHeight!==t.detailHeight+"px"&&(l.style.lineHeight=t.detailHeight+"px"),l.style.top!==t.cellHeight+"px"&&(l.style.top=t.cellHeight+"px")),e._renderDetail(l)):l.classList.add("smart-hidden")}else if(e.rowDetail){e.rowDetail.classList.add("smart-hidden")}s.classList.remove("smart-hidden"),d.classList.remove("smart-hidden"),s.style.width!==r+"px"&&(s.style.width=r+"px"),a.style.width!==n+"px"&&(a.style.width=n+"px"),d.style.width!==o+"px"&&(d.style.width=o+"px"),s.style.height=t.cellHeight+"px",a.style.height=t.cellHeight+"px",d.style.height=t.cellHeight+"px",0===o&&d.classList.add("smart-hidden"),0===r&&s.classList.add("smart-hidden"),r>0&&(parseInt(r),parseInt(i._autoGeneratedColumnsNearWidth)),o>0&&parseInt(o)===parseInt(i._autoGeneratedColumnsFarWidth)&&d.classList.add("border-collapse");for(let l=0;l<i._frozenNearColumns.length;l++){const r=i._frozenNearColumns[l];let n=e.children[0].children[l];if(!n){n=t.getCell(r).createElement(),e.children[0].appendChild(n)}e._renderCell(t,r,n)}for(let l=0;l<i._frozenFarColumns.length;l++){const r=i._frozenFarColumns[l];let n=e.children[2].children[l];if(!n){n=t.getCell(r).createElement(),e.children[2].appendChild(n)}e._renderCell(t,r,n)}for(let l=0;l<a.children.length;l++){if(!i._columnElements[l+i._frozenNearColumns.length]){let i=e.children[1].children[l];e._renderCell(t,null,i)}}for(let l=0;l<i._columnElements.length;l++){const r=i._columnElements[l],n=r.column;if(!r.parentNode||!n){if(r&&!n){let t=e.children[1].children[l];t&&t.classList.add("smart-visibility-hidden")}continue}let o=e.children[1].children[l];if(!o){r.column||(r.column=n),o=t.getCell(n).createElement(),e.children[1].appendChild(o)}r.classList.contains("smart-visibility-hidden")?o.classList.add("smart-visibility-hidden"):(o.classList.remove("smart-visibility-hidden"),e._renderCell(t,n,o))}e.visible?e.classList.remove("smart-hidden"):e.classList.add("smart-hidden")}template(){return""}_detach(){this.row.headerCell=null,this.row._cells=[],this.row=null,delete this.row,this.element=null,this.removeEventListener("mouseenter",this._mouseEnter),this.removeEventListener("mouseleave",this._mouseLeave),delete this.element,delete this.grid,delete this._mouseEnter,delete this._mouseLeave,delete this.cellsNearContainerElement,delete this.cellsContainerElement,delete this.cellsFarContainerElement,delete this.rowDetail,delete this.rowContainer}onDetached(){this._detach()}})}});