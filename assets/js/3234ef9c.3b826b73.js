"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[794],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||a;return n?r.createElement(p,i(i({ref:t},s),{},{components:n})):r.createElement(p,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,o=e.block,u=e.defaultValue,s=e.values,d=e.groupId,f=e.className,m=r.Children.toArray(e.children),p=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=a(),g=b.tabGroupChoices,y=b.setTabGroupChoices,h=(0,r.useState)(v),_=h[0],S=h[1],O=[];if(null!=d){var k=g[d];null!=k&&k!==_&&p.some((function(e){return e.value===k}))&&S(k)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;S(r),null!=d&&(y(d,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},B=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":_===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:B,onFocus:E,onClick:E},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},1374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return f},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(5064),l=n(8215),c=["components"],u={},s="BG1S",d={unversionedId:"device/bg1s",id:"device/bg1s",isDocsHomePage:!1,title:"BG1S",description:"Android Doc",source:"@site/docs/device/bg1s.md",sourceDirName:"device",slug:"/device/bg1s",permalink:"/doc.sdk.ihealthlabs/docs/device/bg1s",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bg1s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AM5",permalink:"/doc.sdk.ihealthlabs/docs/device/am5"},next:{title:"BG5",permalink:"/doc.sdk.ihealthlabs/docs/device/bg5"}},f=[{value:"APIs",id:"apis",children:[{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get function",id:"get-function",children:[]},{value:"start a measurement",id:"start-a-measurement",children:[]}]}],m={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bg1s"},"BG1S"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,a.kt)("h4",{id:"android-doc"},"Android Doc")),(0,a.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,a.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,a.kt)(l.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},"## Import BG1S Module",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BG1SModule,\n  BG1SProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,a.kt)("h2",{id:"apis"},"APIs"),(0,a.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,a.kt)("h3",{id:"get-function"},"get function"),(0,a.kt)("p",null,"Set current time to BG1S and return battery level, bg1s code version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BG1SModule.getFunction(mac);\n\n// response\n// {"action": "action_get_device_info", "battery": 100, "info_version_code_blood_bg1s": 1, "info_version_code_ctl_bg1s": 2, "mac": "F65FF0CBA330", "type": "BG1S"}\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    if (event.action === BG1SProfileModule.ACTION_CODE_ANALYSIS) {\n        console.log(event[BG1SProfileModule.INFO_BATTERY_BG1S]);\n        console.log(event[BG1SProfileModule.INFO_VERSION_CODE_BLOOD_BG1S]);\n        console.log(event[BG1SProfileModule.INFO_VERSION_CODE_CTL_BG1S]);\n    }\n});\n')),(0,a.kt)("h3",{id:"start-a-measurement"},"start a measurement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// measureMode 0: measure with real blood, 1: measure with control solution\nBG1SModule.measure(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(BG1SModule.Event_Notify,  (event) => {\n    if (event.action === BG1SProfileModule.ACTION_STRIP_INSERTION_STATUS) {\n        // {"action": "action_strip_insertion_status", "describe": "strip in", "insertion_status": 1, "mac": "F65FF0CBA330", "type": "BG1S"}\n        console.log("strip in");\n\n    } else if (event.action === BG1SProfileModule.ACTION_GET_BLOOD) {\n        //  {"action": "action_get_blood", "describe": "get blood", "mac": "F65FF0CBA330", "type": "BG1S"}\n        console.log("blood");\n\n    } else if (event.action === BG1SProfileModule.ACTION_MEASURE_RESULT) {\n        // {"action": "action_measure_result", "mac": "F65FF0CBA330", "measure_mode": 0, "measure_result": 0, "type": "BG1S"}\n        console.log(event[BG1SProfileModule.MEASURE_MODE]);\n        console.log(event[BG1SProfileModule.MEASURE_RESULT]);\n    }\n});\n')))))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);