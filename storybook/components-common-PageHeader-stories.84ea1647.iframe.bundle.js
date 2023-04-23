"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[531],{"./src/components/common/PageHeader.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},WithBackButton:function(){return WithBackButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return PageHeader_stories}});var _templateObject,PageHeader_templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,_WithBackButton$param,_WithBackButton$param2,_WithBackButton$param3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=styled_components_browser_esm.ZP.button(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 10px;\n  height: 10px;\n  border-left: 1.5px solid black;\n  border-bottom: 1.5px solid black;\n  transform: rotate(45deg);\n"]))),BackButton=function BackButton(){var navigate=(0,dist.s0)();return(0,jsx_runtime.jsx)(Button,{onClick:function handleOnClickBackButton(){navigate(-1)}})},Text=__webpack_require__("./src/components/common/Text.tsx"),Header=styled_components_browser_esm.ZP.header(PageHeader_templateObject||(PageHeader_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  padding: 20px 36px;\n"]))),PageHeader=function PageHeader(props){var leading=props.leading,children=props.children;return(0,jsx_runtime.jsxs)(Header,{children:[leading,(0,jsx_runtime.jsx)(Text.x,{size:"large",children:children})]})};try{PageHeader.displayName="PageHeader",PageHeader.__docgenInfo={description:"",displayName:"PageHeader",props:{leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/PageHeader.tsx#PageHeader"]={docgenInfo:PageHeader.__docgenInfo,name:"PageHeader",path:"src/components/common/PageHeader.tsx#PageHeader"})}catch(__react_docgen_typescript_loader_error){}var meta={title:"PageHeader",component:PageHeader},Default={args:{children:"보유 카드"}},WithBackButton={args:{leading:react.createElement(BackButton),children:"카드 추가"}},PageHeader_stories=meta;Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    children: '보유 카드'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithBackButton.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},WithBackButton.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_WithBackButton$param=WithBackButton.parameters)||void 0===_WithBackButton$param?void 0:_WithBackButton$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    leading: React.createElement(BackButton),\n    children: '카드 추가'\n  }\n}"},null===(_WithBackButton$param2=WithBackButton.parameters)||void 0===_WithBackButton$param2||null===(_WithBackButton$param3=_WithBackButton$param2.docs)||void 0===_WithBackButton$param3?void 0:_WithBackButton$param3.source)})});var __namedExportsOrder=["Default","WithBackButton"]},"./src/components/common/Text.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return Text}});var _templateObject,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),fontSizes={small:"12px",medium:"14px",large:"16px"},fontWeights={normal:500,bold:700},StyledText=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div(_templateObject||(_templateObject=(0,_home_runner_work_react_payments_react_payments_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_2__.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n"])),(function(props){return fontSizes[props.$size]}),(function(props){return fontWeights[props.$weight]}),(function(props){var _props$$color;return null!==(_props$$color=props.$color)&&void 0!==_props$$color?_props$$color:"inherit"})),Text=function Text(props){var _props$size=props.size,size=void 0===_props$size?"medium":_props$size,_props$weight=props.weight,weight=void 0===_props$weight?"normal":_props$weight,color=props.color,children=props.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledText,{$size:size,$weight:weight,$color:color,children:children})};try{StyledText.displayName="StyledText",StyledText.__docgenInfo={description:"",displayName:"StyledText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},$size:{defaultValue:null,description:"",name:"$size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},$weight:{defaultValue:null,description:"",name:"$weight",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'}]}},$color:{defaultValue:null,description:"",name:"$color",required:!0,type:{name:"string | undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text.tsx#StyledText"]={docgenInfo:StyledText.__docgenInfo,name:"StyledText",path:"src/components/common/Text.tsx#StyledText"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"bold"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/common/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);