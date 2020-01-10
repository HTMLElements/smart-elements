
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-password-text-box",class extends Smart.BaseElement{static get properties(){return{hint:{value:"",reflectToAttribute:!0,type:"string"},label:{value:"",reflectToAttribute:!0,type:"string"},messages:{value:{en:{passwordStrength:"Password strength",short:"Short",weak:"Weak",far:"Far",good:"Good",strong:"Strong",showPassword:"Show password"}},type:"object",extend:!0},passwordStrength:{value:null,type:"function?",reflectToAttribute:!1},placeholder:{value:"",type:"string"},showPasswordIcon:{value:!1,type:"boolean"},showPasswordStrength:{value:!1,type:"boolean"},tooltipArrow:{value:!1,type:"boolean"},tooltipDelay:{value:0,type:"number"},tooltipPosition:{allowedValues:["bottom","top","left","right","absolute"],value:"top",type:"string"},tooltipTemplate:{value:null,type:"string?"},type:{value:"password",type:"string",defaultReflectToAttribute:!0,readonly:!0},value:{value:"",reflectToAttribute:!1,type:"string"}}}static get listeners(){return{"document.up":"_documentUpHandler",blur:"_blurHandler",focus:"_focusHandler",mouseenter:"_mouseEventsHandler",mouseleave:"_mouseEventsHandler","passwordIcon.down":"_showPassword","input.change":"_textBoxChangeHandler","input.paste":"_textBoxChangeHandler","input.keyup":"_textBoxChangeHandler","input.blur":"_blurHandler","input.focus":"_focusHandler"}}static get requires(){return{"Smart.Tooltip":"smart.tooltip.js"}}static get styleUrls(){return["smart.textbox.css","smart.passwordtextbox.css"]}template(){return"<div id=\"container\" role=\"presentation\"><span id=\"label\" inner-h-t-m-l=\"[[label]]\" class=\"smart-label\"></span><div id=\"innerContainer\" class=\"smart-content\" role=\"presentation\"><input class=\"smart-input\" type=\"password\" id=\"input\"\n                    disabled=\"[[disabled]]\"\n                    maxlength=\"[[maxLength]]\"\n                    minlength=\"[[minLength]]\"\n                    name=\"[[name]]\"\n                    placeholder=\"[[placeholder]]\"\n                    readonly=\"[[readonly]]\"\n                    value=\"[[value]]\"><span id=\"passwordIcon\" title=\"Show Password\" class=\"smart-password-icon smart-hidden\" role=\"button\" aria-label=\"Show Password\"></span></div><span id=\"hint\" class=\"smart-hint\"></span><smart-tooltip id=\"tooltip\"\n                    open-mode=\"manual\"\n                    arrow=\"[[tooltipArrow]]\"\n                    right-to-left=\"[[rightToLeft]]\"\n                    tooltip-template=\"[[tooltipTemplate]]\"\n                    position=\"[[tooltipPosition]]\"\n                    delay=\"[[tooltipDelay]]\"></smart-tooltip></div>"}propertyChangedHandler(a,b,c){const d=this;let e;switch(a){case"locale":case"messages":case"passwordStrength":e=d._evaluatePasswordStrength(),d._updateTooltipString(e),d.$.passwordIcon.setAttribute("title",d.localize("showPassword")),d._updatePasswordStrengthStyles(e);break;case"tooltipPosition":d.$.tooltip.position=d.tooltipPosition;break;case"tooltipTemplate":d.$.tooltip.tooltipTemplate=d.tooltipTemplate;break;case"value":e=d._evaluatePasswordStrength(),d._updateTooltipString(e),d._updatePasswordStrengthStyles(e);break;case"disabled":d._setFocusable();break;case"readonly":break;default:super.propertyChangedHandler(a,b,c);}}_setFocusable(){const a=this;return a.disabled||a.unfocusable?void(a.$.input.tabIndex=-1):void a.$.input.removeAttribute("tabindex")}render(){const a=this;a._createElement(),super.render()}focus(){this.$.input.focus()}_createElement(){const a=this;a.autoFocus&&a.$.input.focus(),a._setFocusable(),a.$.tooltip.selector=a.$.innerContainer,a.$.passwordIcon.setAttribute("title",a.localize("showPassword")),a._updateTooltipString("short"),a._updatePasswordStrengthStyles(),a._initializationValue=a.value,0<a.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),a._handleHintContainer(),a.shadowRoot&&(a.$.tooltip.style.display="none",requestAnimationFrame(()=>a.$.tooltip.style.display="")),a.$.label.id||(a.$.label.id=a.id+"Label"),a.$.hint.id||(a.$.hint.id=a.id+"Hint"),a.setAttribute("role","presentation"),a.$.innerContainer.removeAttribute("aria-describedby"),a.$.input.setAttribute("aria-describedby",a.$.tooltip.id+" "+a.$.hint.id),a.$.input.setAttribute("aria-labelledby",a.$.label.id)}_handleHintContainer(){const a=this;if(a.hint){const b=a.$.hint;if("function"==typeof a.hint){const c=a.value,d=a.hint(c,b);d?a.$.addClass("invalid"):a.$.removeClass("invalid")}else"string"==typeof a.hint&&(b.innerHTML=a.hint,a.$.removeClass("invalid"))}}_focusHandler(){const a=this;a.disabled||(a.selectAllOnFocus&&a.$.input.select(),a.showPasswordIcon&&a.$passwordIcon.removeClass("smart-hidden"),a.setAttribute("focus",""),a._valueBeforeChange=a.value,a.showPasswordStrength&&(a._tooltipOpened||(a.$.tooltip.open(),a._tooltipOpened=!0)))}_blurHandler(){const a=this;a.disabled||a._passwordIconPressed||(a._valueBeforeChange!==a.value&&(a.$.fireEvent("change",{newValue:a.value,oldValue:a._valueBeforeChange}),a._valueBeforeChange=""),a.showPasswordIcon&&a.$passwordIcon.addClass("smart-hidden"),a.removeAttribute("focus"),0<a.value.length?a.$.addClass("has-value"):a.$.removeClass("has-value"),a._tooltipOpened&&(a.$.tooltip.close(),a._tooltipOpened=!1))}_showPassword(){const a=this;a.disabled||!a.showPasswordIcon||(a.$.input.type="text",a._passwordIconPressed=!0)}_documentUpHandler(){const a=this;!a.disabled&&a.showPasswordIcon&&a._passwordIconPressed&&(a.$.input.type="password",a._passwordIconPressed=!1,a.$.input.focus())}_textBoxChangeHandler(){const a=this;if(!(a.disabled||a.readonly)){a.value=a.$.input.value;let b=a._evaluatePasswordStrength();a._updateTooltipString(b),a._updatePasswordStrengthStyles(b)}}_updatePasswordStrengthStyles(a){const b=this,c=["short","weak","far","good","strong"];a=a||"short";for(let d=0;d<c.length;d++)b.$container.removeClass("smart-password-"+c[d]);b.disabled||b.$container.addClass("smart-password-"+a)}_evaluatePasswordStrength(){const a=this,b=a.$.input.value,c=b.length;if(a.disabled)return;if(a.passwordStrength)return a.passwordStrength(b,"<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=");let d=0,e=0,f=0,g=0;for(var h=0;h<c;h++){const a=b.charAt(h),c=b.charCodeAt(h);if(64<c&&91>c||96<c&&123>c||127<c&&155>c||159<c&&166>c){d+=1;continue}if(!1===isNaN(a)){e+=1;continue}if(-1!=="<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".indexOf(a)){f+=1;continue}}return g=d+e+2*f+d*e/2+c,8>c?"short":20>g?"weak":30>g?"far":40>g?"good":"strong"}_keyUpHandler(){}_mouseWheelHandler(){}_resizeHandler(){}_selectStartHandler(){}_setDropDownSize(){}_styleChangedHandler(){}_mouseEventsHandler(a){const b=this;"mouseenter"===a.type?b.setAttribute("hover",""):b.removeAttribute("hover")}_updateTooltipString(a){const b=this;b.$.tooltip.value="<span class=\"password-strength-label\">"+b.localize("passwordStrength")+": </span><span class=\"password-strength-value\">"+b.localize(a)+"</span>"}});