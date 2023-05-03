"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[963],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/components/payments/CardNumberInput.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithMasks:function(){return WithMasks},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return CardNumberInput_stories}});var _templateObject,CardNumberInput_stories_templateObject,_WithMasks$parameters,_WithMasks$parameters2,_WithMasks$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useGroupedFocus=__webpack_require__("./src/hooks/useGroupedFocus.ts"),NumberInput=__webpack_require__("./src/components/common/NumberInput.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StyledCardNumberInput=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  gap: 8px;\n\n  & > * {\n    flex: 1;\n  }\n"]))),CardNumberInput=function CardNumberInput(props){var value=props.value,onChange=props.onChange,_props$masks=props.masks,masks=void 0===_props$masks?[!1,!1,!0,!0]:_props$masks,refs=Array.from({length:4},(function(){return(0,react.useRef)(null)})),focusNext=(0,useGroupedFocus.v)(refs).focusNext,getPartialCardNumber=function getPartialCardNumber(index){var _value$split$index;return null!==(_value$split$index=value.split("-")[index])&&void 0!==_value$split$index?_value$split$index:""},handleCardNumberChange=function handleCardNumberChange(index){return function(newValue){4===newValue.length&&focusNext();var partialCardNumbers=value.split("-");partialCardNumbers[index]=newValue,onChange(partialCardNumbers.join("-"))}};return(0,jsx_runtime.jsx)(StyledCardNumberInput,{children:[0,1,2,3].map((function(index){return(0,jsx_runtime.jsx)(NumberInput.Y,{ref:refs[index],type:masks[index]?"password":"text",maxCount:4,value:getPartialCardNumber(index),onChange:handleCardNumberChange(index),center:!0},index)}))})};try{CardNumberInput.displayName="CardNumberInput",CardNumberInput.__docgenInfo={description:"",displayName:"CardNumberInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},masks:{defaultValue:null,description:"",name:"masks",required:!1,type:{name:"[boolean, boolean, boolean, boolean]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/payments/CardNumberInput.tsx#CardNumberInput"]={docgenInfo:CardNumberInput.__docgenInfo,name:"CardNumberInput",path:"src/components/payments/CardNumberInput.tsx#CardNumberInput"})}catch(__react_docgen_typescript_loader_error){}var Container=styled_components_browser_esm.ZP.div(CardNumberInput_stories_templateObject||(CardNumberInput_stories_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  width: 320px;\n"]))),CardNumberInput_stories={title:"payments/CardNumberInput",component:CardNumberInput,decorators:[function(Story){return(0,jsx_runtime.jsx)(Container,{children:(0,jsx_runtime.jsx)(Story,{})})}]},WithMasks={args:{value:"9908-1121-1992-7328"},render:function render(args){var _useState=(0,react.useState)(args.value),_useState2=(0,slicedToArray.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CardNumberInput,{value:value,onChange:setValue}),(0,jsx_runtime.jsx)(CardNumberInput,{value:value,onChange:setValue,masks:[!1,!1,!1,!1]}),(0,jsx_runtime.jsx)(CardNumberInput,{value:value,onChange:setValue,masks:[!0,!0,!0,!0]})]})}};WithMasks.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},WithMasks.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_WithMasks$parameters=WithMasks.parameters)||void 0===_WithMasks$parameters?void 0:_WithMasks$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    value: '9908-1121-1992-7328'\n  },\n  render: args => {\n    const [value, setValue] = useState(args.value);\n    return <>\n        <CardNumberInput value={value} onChange={setValue} />\n        <CardNumberInput value={value} onChange={setValue} masks={[false, false, false, false]} />\n        <CardNumberInput value={value} onChange={setValue} masks={[true, true, true, true]} />\n      </>;\n  }\n}"},null===(_WithMasks$parameters2=WithMasks.parameters)||void 0===_WithMasks$parameters2||null===(_WithMasks$parameters3=_WithMasks$parameters2.docs)||void 0===_WithMasks$parameters3?void 0:_WithMasks$parameters3.source)})});var __namedExportsOrder=["WithMasks"]},"./src/components/common/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var _templateObject,_templateObject2,_templateObject3,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_Color__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/Color.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["type","width","center","placeholder","value","onChange","disabled","maxCount","variant"],BaseInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  width: ",";\n  padding: 12px;\n\n  border: none;\n  border-radius: 8px;\n\n  font-size: ",";\n  text-align: ",";\n\n  outline: none;\n  transition-property: background border box-shadow;\n  transition-duration: 0.1s;\n\n  &:focus {\n    background: ",";\n    border-color: ",";\n  }\n"])),(function(props){return props.$width?"".concat(10*props.$width,"px"):"100%"}),(function(props){return props.theme.fontSize.xlarge}),(function(props){return props.$center?"center":"initial"}),(function(props){return _utils_Color__WEBPACK_IMPORTED_MODULE_4__.I.fromHex(props.theme.color.primary).setAlpha(.1).toString()}),(function(props){return props.theme.color.primary})),InputVariants={solid:(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(BaseInput)(_templateObject2||(_templateObject2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  background: ",";\n\n  &:focus {\n    box-shadow: 0 0 4px 2px\n      ",";\n  }\n"])),(function(props){return props.disabled?"none":props.theme.color.grey2}),(function(props){return _utils_Color__WEBPACK_IMPORTED_MODULE_4__.I.fromHex(props.theme.color.primary).setLightness(80).toString()})),underlined:(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(BaseInput)(_templateObject3||(_templateObject3=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  background: transparent;\n  border-radius: 0;\n  border-bottom: 2px solid ",";\n"])),(function(props){return props.theme.fontColor.primary}))},Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,ref){var type=props.type,width=props.width,center=props.center,placeholder=props.placeholder,value=props.value,onChange=props.onChange,disabled=props.disabled,maxCount=props.maxCount,variant=props.variant,inputProps=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(props,_excluded),InputComponent=InputVariants[null!=variant?variant:"solid"];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(InputComponent,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({ref:ref,type:type,$width:width,$center:center,placeholder:placeholder,onChange:function handleInputChange(event){void 0!==maxCount&&event.target.value.length>maxCount||null==onChange||onChange(event.target.value)},value:value,disabled:disabled},inputProps))}));try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"underlined"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/common/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/NumberInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return NumberInput}});var _home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/Input.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onChange"],NumberInput=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,ref){var onChange=props.onChange,inputProps=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(props,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Input__WEBPACK_IMPORTED_MODULE_1__.I,(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({ref:ref,type:"text",inputMode:"numeric",onChange:function handleInputChange(value){/\D/.test(value)||null==onChange||onChange(value)}},inputProps))}));try{NumberInput.displayName="NumberInput",NumberInput.__docgenInfo={description:"",displayName:"NumberInput",props:{center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},maxCount:{defaultValue:null,description:"",name:"maxCount",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"underlined"'},{value:'"solid"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/NumberInput.tsx#NumberInput"]={docgenInfo:NumberInput.__docgenInfo,name:"NumberInput",path:"src/components/common/NumberInput.tsx#NumberInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useGroupedFocus.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{v:function(){return useGroupedFocus}});var _home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useGroupedFocus=function useGroupedFocus(refs){var option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),_useState2=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState,2),focused=_useState2[0],setFocused=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),_useState4=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_useState3,2),lastBlurred=_useState4[0],setLastBlurred=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var unregisters=refs.map((function(ref){var _ref$current,_ref$current2,handleFocus=function handleFocus(){return setFocused(!0)},handleBlur=function handleBlur(){setFocused(!1),setLastBlurred(ref)};return null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.addEventListener("focus",handleFocus),null===(_ref$current2=ref.current)||void 0===_ref$current2||_ref$current2.addEventListener("blur",handleBlur),function(){var _ref$current3,_ref$current4;null===(_ref$current3=ref.current)||void 0===_ref$current3||_ref$current3.removeEventListener("focus",handleFocus),null===(_ref$current4=ref.current)||void 0===_ref$current4||_ref$current4.removeEventListener("blur",handleBlur)}}));return function(){return unregisters.forEach((function(unregister){return unregister()}))}}),refs),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _ref;null===(_ref=focused?option.onFocus:option.onBlur)||void 0===_ref||_ref()}),[focused,option]);return{focusNext:function focusNext(){var _nextRef$current,focusedRef=refs.find((function(ref){return ref.current===document.activeElement}));if(null!=focusedRef&&focusedRef.current){var nextRef=refs.find((function(_,index){return refs[index-1]===focusedRef}));null==nextRef||null===(_nextRef$current=nextRef.current)||void 0===_nextRef$current||_nextRef$current.focus()}},cancelBlur:function cancelBlur(){var _lastBlurred$current;return null==lastBlurred||null===(_lastBlurred$current=lastBlurred.current)||void 0===_lastBlurred$current?void 0:_lastBlurred$current.focus()}}}}}]);