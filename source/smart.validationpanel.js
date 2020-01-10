
/* Smart HTML Elements v6.0.0 (2020-Jan) 
Copyright (c) 2011-2020 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("ValidationPanel",class{constructor(a,b="en",c=""){const d=this;d._setLocalizationSettings(b,c),d.dataValidationModal=document.querySelector(a),d.criteriaType={Number:{between:{numberOfInputs:2,textBetweenInputs:d.messages[d.locale].andTextBetweenInput?d.messages[d.locale].andTextBetweenInput:d.defaultMessages[d.defaultLocale].andTextBetweenInput,"placeholderInput-1":"10","placeholderInput-2":"100",validationText:d.messages[d.locale].numberBetweenValidationText?d.messages[d.locale].numberBetweenValidationText:d.defaultMessages[d.defaultLocale].numberBetweenValidationText},not_between:{numberOfInputs:2,textBetweenInputs:d.messages[d.locale].andTextBetweenInput?d.messages[d.locale].andTextBetweenInput:d.defaultMessages[d.defaultLocale].andTextBetweenInput,"placeholderInput-1":"10","placeholderInput-2":"100",validationText:d.messages[d.locale].numberNotBetweenValidationText?d.messages[d.locale].numberNotBetweenValidationText:d.defaultMessages[d.defaultLocale].numberNotBetweenValidationText},less_than:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberLessThanValidationText?d.messages[d.locale].numberLessThanValidationText:d.defaultMessages[d.defaultLocale].numberLessThanValidationText},less_than_or_equal_to:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberLessThanOrEqualToValidationText?d.messages[d.locale].numberLessThanOrEqualToValidationText:d.defaultMessages[d.defaultLocale].numberLessThanOrEqualToValidationText},greater_than:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberGreaterThanValidationText?d.messages[d.locale].numberGreaterThanValidationText:d.defaultMessages[d.defaultLocale].numberGreaterThanValidationText},greater_than_or_equal_to:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberGreaterThanOrEqualToValidationText?d.messages[d.locale].numberGreaterThanOrEqualToValidationText:d.defaultMessages[d.defaultLocale].numberGreaterThanOrEqualToValidationText},equal_to:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberEqualToValidationText?d.messages[d.locale].numberEqualToValidationText:d.defaultMessages[d.defaultLocale].numberEqualToValidationText},not_equal_to:{numberOfInputs:1,"placeholderInput-1":"10",validationText:d.messages[d.locale].numberNotEqualToValidationText?d.messages[d.locale].numberNotEqualToValidationText:d.defaultMessages[d.defaultLocale].numberNotEqualToValidationText}},Text:{contains:{numberOfInputs:1,"placeholderInput-1":"Approved",validationText:d.messages[d.locale].textContainsValidationText?d.messages[d.locale].textContainsValidationText:d.defaultMessages[d.defaultLocale].textContainsValidationText},does_not_contain:{numberOfInputs:1,"placeholderInput-1":"Approved",validationText:d.messages[d.locale].textNotContainsValidationText?d.messages[d.locale].textNotContainsValidationText:d.defaultMessages[d.defaultLocale].textNotContainsValidationText},equals:{numberOfInputs:1,"placeholderInput-1":"Approved",validationText:d.messages[d.locale].textEqualsValidationText?d.messages[d.locale].textEqualsValidationText:d.defaultMessages[d.defaultLocale].textEqualsValidationText},is_valid_email:{numberOfInputs:0,validationText:d.messages[d.locale].textValidEmailValidationText?d.messages[d.locale].textValidEmailValidationText:d.defaultMessages[d.defaultLocale].textValidEmailValidationText},is_valid_url:{numberOfInputs:0,validationText:d.messages[d.locale].textValidUrlValidationText?d.messages[d.locale].textValidUrlValidationText:d.defaultMessages[d.defaultLocale].textValidUrlValidationText}},Date:{is_valid_date:{numberOfInputs:0,validationText:d.messages[d.locale].dateValidDateValidationText?d.messages[d.locale].dateValidDateValidationText:d.defaultMessages[d.defaultLocale].dateValidDateValidationText},equal_to:{numberOfInputs:1,"placeholderInput-1":"11/2017",validationText:d.messages[d.locale].dateEqualToValidationText?d.messages[d.locale].dateEqualToValidationText:d.defaultMessages[d.defaultLocale].dateEqualToValidationText},before:{numberOfInputs:1,"placeholderInput-1":"11/2017",validationText:d.messages[d.locale].dateBeforeValidationText?d.messages[d.locale].dateBeforeValidationText:d.defaultMessages[d.defaultLocale].dateBeforeValidationText},on_or_before:{numberOfInputs:1,"placeholderInput-1":"11/2017",validationText:d.messages[d.locale].dateOnOrBeforeValidationText?d.messages[d.locale].dateOnOrBeforeValidationText:d.defaultMessages[d.defaultLocale].dateOnOrBeforeValidationText},after:{numberOfInputs:1,"placeholderInput-1":"11/2017",validationText:d.messages[d.locale].dateAfterValidationText?d.messages[d.locale].dateAfterValidationText:d.defaultMessages[d.defaultLocale].dateAfterValidationText},on_or_after:{numberOfInputs:1,"placeholderInput-1":"11/2017",validationText:d.messages[d.locale].dateOnOrAfterValidationText?d.messages[d.locale].dateOnOrAfterValidationText:d.defaultMessages[d.defaultLocale].dateOnOrAfterValidationText},between:{numberOfInputs:2,textBetweenInputs:d.messages[d.locale].andTextBetweenInput?d.messages[d.locale].andTextBetweenInput:d.defaultMessages[d.defaultLocale].andTextBetweenInput,"placeholderInput-1":"11/2017","placeholderInput-2":"11/2018",validationText:d.messages[d.locale].dateBetweenValidationText?d.messages[d.locale].dateBetweenValidationText:d.defaultMessages[d.defaultLocale].dateBetweenValidationText},not_between:{numberOfInputs:2,textBetweenInputs:d.messages[d.locale].andTextBetweenInput?d.messages[d.locale].andTextBetweenInput:d.defaultMessages[d.defaultLocale].andTextBetweenInput,"placeholderInput-1":"11/2017","placeholderInput-2":"11/2018",validationText:d.messages[d.locale].dateNotBetweenValidationText?d.messages[d.locale].dateNotBetweenValidationText:d.defaultMessages[d.defaultLocale].dateNotBetweenValidationText}},Boolean:{"":{numberOfInputs:0,validationText:d.messages[d.locale].booleanValidationText?d.messages[d.locale].booleanValidationText:d.defaultMessages[d.defaultLocale].booleanValidationText}}},d._initContainers(),d._initDataTypeCriterias()}detach(){const a=this;a._removeEventListeners()}_removeEventListeners(){const a=this;a.removeValidationButton.removeEventListener("click",a.removeValidationButton["reset-validation-form"]),delete a.removeValidationButton["reset-validation-form"],a.submitButton.removeEventListener("click",a.submitButton["submit-validation-form"]),delete a.submitButton["submit-validation-form"],a.appearanceCheckbox.removeEventListener("click",a.appearanceCheckbox["appearance-checkbox-change"]),delete a.appearanceCheckbox["appearance-checkbox-change"],a.smartInputCriteriaType.removeEventListener("change",a.smartInputCriteriaType["criteria-type-change"]),delete a.smartInputCriteriaType["criteria-type-change"],a.smartInputCriteria.removeEventListener("change",a.smartInputCriteria["criteria-change"]),delete a.smartInputCriteria["criteria-change"]}_setLocalizationSettings(a,b){const c=this;c.locale=a,c.messages=b,c.defaultLocale="en",c.defaultMessages={en:{criteriaText:"Criteria:",onInavlidData:"On invalid data:",appearance:"Appearance:",showWarning:"Show warning",rejectInput:"Reject input",showValidationHelpText:"Show validation help text:",cancelButtonText:"cancel",removeValidationButtonText:"remove validation",saveButtonText:"save",andTextBetweenInput:"and",expectTrue:"Expect true",expectFalse:"Expect false",resetButtonText:"Reset",NumberDataTypeText:"Number",Number_between:"between",Number_not_between:"not between",Number_less_than:"less than",Number_less_than_or_equal_to:"less than or equal to",Number_greater_than:"greater than",Number_greater_than_or_equal_to:"greater than or equal to",Number_equal_to:"equal to",Number_not_equal_to:"not equal to",TextDataTypeText:"Text",Text_contains:"contains",Text_does_not_contain:"does not contain",Text_equals:"equals",Text_is_valid_email:"is valid email",Text_is_valid_url:"is valid url",DateDataTypeText:"Date",Date_is_valid_date:"is valid date",Date_equal_to:"equal to",Date_before:"before",Date_on_or_before:"on or before",Date_after:"after",Date_on_or_after:"on or after",Date_between:"between",Date_not_between:"not between",BooleanDataTypeText:"Boolean",numberBetweenValidationText:"Enter a number between",numberNotBetweenValidationText:"Enter a number not between",numberLessThanValidationText:"Enter a number less than",numberLessThanOrEqualToValidationText:"Enter a number less than or equal to",numberGreaterThanValidationText:"Enter a number greater than",numberGreaterThanOrEqualToValidationText:"Enter a number greater than or equal to",numberEqualToValidationText:"Enter a number equal to",numberNotEqualToValidationText:"Enter a number not equal to",textContainsValidationText:"Enter text that contains",textNotContainsValidationText:"Enter text that does not contain",textEqualsValidationText:"Enter text that equals",textValidEmailValidationText:"Enter a valid email",textValidUrlValidationText:"Enter a valid url",dateValidDateValidationText:"Enter a valid date",dateEqualToValidationText:"Enter a date equal to",dateBeforeValidationText:"Enter a date before",dateOnOrBeforeValidationText:"Enter a date on or before",dateAfterValidationText:"Enter a date after",dateOnOrAfterValidationText:"Enter a date on or after",dateBetweenValidationText:"Enter a date between",dateNotBetweenValidationText:"Enter a date not between",booleanValidationText:"Enter 'true' or 'false'"}},c.messages||(c.messages=c.defaultMessages),c.messages[c.locale]||(c.messages[c.defaultLocale]?c.locale=c.defaultLocale:(c.messages=c.defaultMessages,c.locale=c.defaultLocale))}getDataValidationFormat(){const a=this;let b=!1,c=a.smartInputCriteria.$.input.dataValue;c||(c=a.smartInputCriteria.label);let d="";a.smartInputCriteriaType&&(d=a.smartInputCriteriaType.$.input.dataValue,!d&&(d=a.smartInputCriteriaType.label));let e="",f=[],g=a.inputsCriteriaContainer.querySelectorAll("smart-text-box");if(g)for(let a=0;a<g.length;a++)f[a]=g[a].value;if(f[0]&&(e=f[0],f[1]&&(e=JSON.stringify({from:f[0],to:f[1]}))),a.firstTextBox&&(a.firstTextBox.style.border="",a.firstTextBox.querySelector("input.smart-input").style.border="",1<=g.length&&(!f[0]||f[0]&&"Number"===c&&parseFloat(f[0]).toString()!==f[0].toString())&&(a.firstTextBox.style.border="1px solid red",a.firstTextBox.querySelector("input.smart-input").style.border="none",b=!0)),a.secondTextBox&&(a.secondTextBox.style.border="",a.secondTextBox.querySelector("input.smart-input").style.border="",2===g.length&&(!f[1]||f[1]&&"Number"===c&&parseFloat(f[1]).toString()!==f[1].toString())&&(a.secondTextBox.style.border="1px solid red",a.secondTextBox.querySelector("input.smart-input").style.border="none",b=!0)),b)return"";let h=a.onInvalidDataRadioOne.checked,i=a.onInvalidDataRadioTwo.checked,j="",k=a.appearanceContainer.querySelector(".smart-checkbox-appearance").checked;k&&(j=a.appearanceContainer.querySelector(".smart-appearance-text-box-value").value),"Boolean"===c&&(a.smartBooleanRadioYes.checked?d=!0:a.smartBooleanRadioNo.checked&&(d=!1));let l={dataType:c.toLowerCase(),condition:d,value:e,showWarning:h,rejectInput:i,validationHelpText:j};return JSON.stringify(l)}resetDataValidationForm(){const a=this;a.smartInputCriteria.value=a.smartInputCriterias[0].label,a.smartInputCriteria.label=a.smartInputCriterias[0].value,a.smartInputCriteria.$.input.dataValue=a.smartInputCriterias[0].value;let b=a.smartInputCriteria;b.$.scrollView.attached=function(){requestAnimationFrame(()=>{b.$.scrollView.querySelector("ul li.active").classList.remove("active"),b.$.scrollView.querySelector("ul li[value=\""+a.smartInputCriteria.label+"\"]").classList.add("active")})},a.onInvalidDataRadioOne.checked=!0,a.onInvalidDataRadioTwo.checked=!1,a.appearanceCheckbox.checked=!1,a.appearanceTextBox.classList.add("smart-hidden"),a._resetHandler(),a._initConditionCriterias()}_resetHandler(){const a=this;a.resetButton&&a.resetButton.remove(),a.appearanceTextBox.value=a.appearanceTextBox.dataset.defaultValue,a.appearanceTextBox.addEventListener("keydown",()=>a._showResetButton(),{once:!0})}_showResetButton(){const a=this;a.resetButton!==void 0&&a.resetButton.remove(),a.resetButton=document.createElement("div"),a.resetButton.classList.add("reset-appearance"),a.resetButton.innerHTML=a.messages[a.locale].resetButtonText?a.messages[a.locale].resetButtonText:a.defaultMessages[a.defaultLocale].resetButtonText,a.resetButton.addEventListener("click",()=>a._resetHandler(),{once:!0}),a.appearanceRightElementsResetContainer.appendChild(a.resetButton)}_initContainers(){const a=this;a.dataValidationContainer=document.createElement("div"),a.dataValidationContainer.classList.add("smart-data-validation-container"),a.criteriaContainer=document.createElement("div"),a.criteriaContainer.classList.add("smart-criteria-container"),a.criteriaTypeContainer=document.createElement("div"),a.criteriaTypeContainer.classList.add("smart-criteria-type-container"),a.inputsCriteriaContainer=document.createElement("div"),a.inputsCriteriaContainer.classList.add("smart-input-criteria-container"),a.textBetweenInputsHolder=document.createElement("div"),a.textBetweenInputsHolder.classList.add("smart-text-between-inputs-container"),a.onInvalidDataContainer=document.createElement("div"),a.onInvalidDataContainer.classList.add("smart-on-invalid-data-container"),a.appearanceContainer=document.createElement("div"),a.appearanceContainer.classList.add("smart-appearance"),a.footerButtonsContainer=document.createElement("div"),a.footerButtonsContainer.classList.add("smart-footer-buttons"),a._generateStaticElements()}_generateStaticElements(){const a=this;let b=document.createElement("div");b.classList.add("left-title"),a.footerButtonsContainer.appendChild(b);let c=document.createElement("div");c.classList.add("right-elements");let d=document.createElement("smart-button");d.classList.add("smart-cancel-footer-button"),d.innerHTML=a.messages[a.locale].cancelButtonText?a.messages[a.locale].cancelButtonText:a.defaultMessages[a.defaultLocale].cancelButtonText,c.appendChild(d),a.footerButtonsContainer.appendChild(c),a.removeValidationButton=document.createElement("smart-button"),a.removeValidationButton.classList.add("smart-remove-validation-footer-button"),a.removeValidationButton.innerHTML=a.messages[a.locale].removeValidationButtonText?a.messages[a.locale].removeValidationButtonText:a.defaultMessages[a.defaultLocale].removeValidationButtonText;const e=()=>a.resetDataValidationForm();a.removeValidationButton.addEventListener("click",e),a.removeValidationButton["reset-validation-form"]=e,c.appendChild(a.removeValidationButton),a.footerButtonsContainer.appendChild(c),a.submitButton=document.createElement("smart-button"),a.submitButton.classList.add("smart-save-footer-button"),a.submitButton.innerHTML=a.messages[a.locale].saveButtonText?a.messages[a.locale].saveButtonText:a.defaultMessages[a.defaultLocale].saveButtonText;const f=()=>a.getDataValidationFormat();a.submitButton.addEventListener("click",f),a.submitButton["submit-validation-form"]=f,c.appendChild(a.submitButton),a.footerButtonsContainer.appendChild(c),a.dataValidationModal.appendChild(a.footerButtonsContainer);let g=document.createElement("div");g.classList.add("left-title");let h=document.createElement("div");h.classList.add("smart-appearance-text"),h.innerHTML=a.messages[a.locale].appearance?a.messages[a.locale].appearance:a.defaultMessages[a.defaultLocale].appearance,g.appendChild(h),a.appearanceRightElementsTextContainer=document.createElement("div"),a.appearanceRightElementsTextContainer.classList.add("right-elements"),a.appearanceRightElementsResetContainer=document.createElement("div"),a.appearanceRightElementsResetContainer.classList.add("right-elements-reset"),a.appearanceCheckbox=document.createElement("smart-check-box"),a.appearanceCheckbox.classList.add("smart-checkbox-appearance"),a.appearanceCheckbox.innerHTML=a.messages[a.locale].showValidationHelpText?a.messages[a.locale].showValidationHelpText:a.defaultMessages[a.defaultLocale].showValidationHelpText;a.appearanceRightElementsTextContainer.appendChild(a.appearanceCheckbox),a.appearanceTextBox=document.createElement("smart-text-box"),a.appearanceTextBox.classList.add("smart-appearance-text-box-value"),a.appearanceTextBox.classList.add("smart-hidden"),a.appearanceRightElementsResetContainer.appendChild(a.appearanceTextBox);const i=()=>{a.appearanceTextBox.classList.toggle("smart-hidden"),a.resetButton&&a.resetButton.classList.toggle("smart-hidden")};a.appearanceCheckbox.addEventListener("click",i),a.appearanceCheckbox["appearance-checkbox-change"]=i,a.appearanceTextBox.addEventListener("keydown",()=>a._showResetButton(),{once:!0}),a.appearanceContainer.appendChild(g),a.appearanceContainer.appendChild(a.appearanceRightElementsTextContainer),a.appearanceRightElementsTextContainer.appendChild(a.appearanceRightElementsResetContainer),a.dataValidationModal.appendChild(a.appearanceContainer);let j=document.createElement("div");j.classList.add("left-title");let k=document.createElement("div");k.innerHTML=a.messages[a.locale].onInavlidData?a.messages[a.locale].onInavlidData:a.defaultMessages[a.defaultLocale].onInavlidData,j.appendChild(k);let l=document.createElement("div");l.classList.add("right-elements"),a.onInvalidDataRadioOne=document.createElement("smart-radio-button"),a.onInvalidDataRadioOne.classList.add("smart-on-invalid-data-radio-button-show-warning"),a.onInvalidDataRadioOne.checked=!0,a.onInvalidDataRadioOne.innerHTML=a.messages[a.locale].showWarning?a.messages[a.locale].showWarning:a.defaultMessages[a.defaultLocale].showWarning,l.appendChild(a.onInvalidDataRadioOne),a.onInvalidDataRadioTwo=document.createElement("smart-radio-button"),a.onInvalidDataRadioTwo.classList.add("smart-on-invalid-data-radio-button-reject-input"),a.onInvalidDataRadioTwo.innerHTML=a.messages[a.locale].rejectInput?a.messages[a.locale].rejectInput:a.defaultMessages[a.defaultLocale].rejectInput,l.appendChild(a.onInvalidDataRadioTwo),a.onInvalidDataContainer.appendChild(j),a.onInvalidDataContainer.appendChild(l),a.dataValidationModal.appendChild(a.onInvalidDataContainer)}_initConditionValueCriterias(){const a=this;a.inputsCriteriaContainer.innerHTML="",a.textBetweenInputsHolder.innerHTML="";let b=a.smartInputCriteria.$.input.dataValue;b||(b=a.smartInputCriteria.label);let c=a.smartInputCriteriaType.$.input.dataValue;c||(c=a.smartInputCriteriaType.label);let d,e,f=Object.keys(a.criteriaType[b][c]);for(let g=0;g<f.length;g++){let h=f[g],i=a.criteriaType[b][c][f[g]];if("numberOfInputs"===h)for(let b,c=0;c<i;c++)b=document.createElement("smart-text-box"),b.classList.add("smart-text-box-value-"+(c+1)),a.inputsCriteriaContainer.appendChild(b);else if("textBetweenInputs"===h){let b=document.createElement("div");b.classList.add("smart-text-between-inputs"),b.innerHTML=i,a.textBetweenInputsHolder=b}else"validationText"===h?(a.appearanceTextBox.value=i,a.appearanceTextBox.dataset.defaultValue=i):"placeholderInput-1"===h?d=i:"placeholderInput-2"===h&&(e=i)}a.inputsCriteriaContainer.appendChild(a.textBetweenInputsHolder),a.inputCriteriaRightElements.appendChild(a.inputsCriteriaContainer),a.dataValidationContainer.appendChild(a.inputCriteriaRightElements),a.dataValidationModal.appendChild(a.dataValidationContainer),a.firstTextBox=a.dataValidationModal.querySelector(".smart-text-box-value-1"),a.firstTextBox&&a.firstTextBox.setAttribute("placeholder",d),a.secondTextBox=a.dataValidationModal.querySelector(".smart-text-box-value-2"),a.secondTextBox&&a.secondTextBox.setAttribute("placeholder",e)}_initConditionCriterias(){const a=this;let b=a.smartInputCriteria.$.input.dataValue;if(b||(b=a.smartInputCriteria.label),a.criteriaTypeContainer.innerHTML="",a.inputsCriteriaContainer.innerHTML="",a.textBetweenInputsHolder.innerHTML="",a.smartInputCriteriaType=a.smartInputCriteriaType?"":"","Boolean"===b)a.smartBooleanRadioYes=document.createElement("smart-radio-button"),a.smartBooleanRadioYes.classList.add("smart-boolean-radio-yes"),a.smartBooleanRadioYes.checked=!0,a.smartBooleanRadioYes.innerHTML=a.messages[a.locale].expectTrue?a.messages[a.locale].expectTrue:a.defaultMessages[a.defaultLocale].expectTrue,a.smartBooleanRadioNo=document.createElement("smart-radio-button"),a.smartBooleanRadioNo.classList.add("smart-boolean-radio-no"),a.smartBooleanRadioNo.innerHTML=a.messages[a.locale].expectFalse?a.messages[a.locale].expectFalse:a.defaultMessages[a.defaultLocale].expectFalse,a.appearanceTextBox.value=a.criteriaType.Boolean[""].validationText,a.appearanceTextBox.dataset.defaultValue=a.criteriaType.Boolean[""].validationText,a.criteriaTypeContainer.appendChild(a.smartBooleanRadioYes),a.criteriaTypeContainer.appendChild(a.smartBooleanRadioNo),a.inputCriteriaRightElements.appendChild(a.criteriaTypeContainer),a.dataValidationContainer.appendChild(a.inputCriteriaRightElements),a.dataValidationModal.appendChild(a.dataValidationContainer);else{a.smartInputCriteriaType=document.createElement("smart-input"),a.smartInputCriteriaType.classList.add("smart-input-criteria-type"),a.smartInputCriteriaType.dropDownButtonPosition="right",a.smartInputCriteriaType.readonly=!0;let c=[];const d=()=>a._initConditionValueCriterias();a.smartInputCriteriaType.addEventListener("change",d),a.smartInputCriteriaType["criteria-type-change"]=d;for(let d=0;d<Object.keys(a.criteriaType).length;d++){if(Object.keys(a.criteriaType)[d]!==b)continue;let e=b,f=Object.keys(a.criteriaType[e]);for(let b=0;b<f.length;b++){let d=f[b],g=d.replace(/ /g,"_"),h=a.messages[a.locale][e+"_"+g]?a.messages[a.locale][e+"_"+g]:a.defaultMessages[a.defaultLocale][e+"_"+g];c.push({value:d,label:h})}}a.smartInputCriteriaType.dataSource=c,a.smartInputCriteriaType.value=c[0].label,a.smartInputCriteriaType.label=c[0].value,a.criteriaTypeContainer.appendChild(a.smartInputCriteriaType),a.inputCriteriaRightElements.appendChild(a.criteriaTypeContainer),a.dataValidationContainer.appendChild(a.inputCriteriaRightElements),a.dataValidationModal.appendChild(a.dataValidationContainer),a._initConditionValueCriterias()}}_initDataTypeCriterias(){const a=this;let b=document.createElement("div");b.classList.add("left-title");let c=document.createElement("div");c.classList.add("criteria-container"),c.innerHTML=a.messages[a.locale].criteriaText?a.messages[a.locale].criteriaText:a.defaultMessages[a.defaultLocale].criteriaText,b.appendChild(c),a.inputCriteriaRightElements=document.createElement("div"),a.inputCriteriaRightElements.classList.add("right-elements"),a.smartInputCriteria=document.createElement("smart-input"),a.smartInputCriteria.classList.add("smart-input-criteria"),a.smartInputCriteria.dropDownButtonPosition="right",a.smartInputCriteria.readonly=!0,a.smartInputCriterias=[];const d=()=>a._initConditionCriterias();a.smartInputCriteria.addEventListener("change",d),a.smartInputCriteria["criteria-change"]=d;for(let b=0;b<Object.keys(a.criteriaType).length;b++){let c=Object.keys(a.criteriaType)[b],d=a.messages[a.locale][c+"DataTypeText"]?a.messages[a.locale][c+"DataTypeText"]:a.defaultMessages[a.defaultLocale][c+"DataTypeText"];a.smartInputCriterias.push({value:c,label:d})}a.smartInputCriteria.dataSource=a.smartInputCriterias,a.smartInputCriteria.value=a.smartInputCriterias[0].label,a.smartInputCriteria.label=a.smartInputCriterias[0].value,a.criteriaContainer.appendChild(a.smartInputCriteria),a.inputCriteriaRightElements.appendChild(a.criteriaContainer),a.dataValidationContainer.appendChild(b),a.dataValidationContainer.appendChild(a.inputCriteriaRightElements),a.dataValidationModal.appendChild(a.dataValidationContainer),a.dataValidationModal.style.display="flex",a.dataValidationModal.style.flexDirection="column-reverse",a._initConditionCriterias()}});