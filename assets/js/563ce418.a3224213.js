"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,v=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={title:"KN550",sidebar_position:6},i=void 0,l={unversionedId:"react-native/blood_pressure/kn550",id:"react-native/blood_pressure/kn550",title:"KN550",description:"1. Scan and connect KN-550BT blood pressure monitor.",source:"@site/docs/react-native/blood_pressure/kn550.mdx",sourceDirName:"react-native/blood_pressure",slug:"/react-native/blood_pressure/kn550",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/kn550",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/blood_pressure/kn550.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"KN550",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"BP7S",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/bp7s"},next:{title:"KD723",permalink:"/ihealthlabs-sdk-docs/docs/react-native/blood_pressure/kd723"}},s={},d=[{value:"Import KN550 module",id:"import-kn550-module",level:2},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Get device battery",id:"get-device-battery",level:3},{value:"Set local time to KN-550BT",id:"set-local-time-to-kn-550bt",level:3},{value:"Get number of history data",id:"get-number-of-history-data",level:3},{value:"Get history data",id:"get-history-data",level:3},{value:"Get KN-550BT display status",id:"get-kn-550bt-display-status",level:3},{value:"Set KN-550BT display status",id:"set-kn-550bt-display-status",level:3},{value:"Get KN-550BT time",id:"get-kn-550bt-time",level:3},{value:"History data transfer finished",id:"history-data-transfer-finished",level:3},{value:"Get all connected devices",id:"get-all-connected-devices",level:3},{value:"Disconnect KN-550BT device",id:"disconnect-kn-550bt-device",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"Scan and connect KN-550BT blood pressure monitor."),(0,a.kt)("li",{parentName:"ol"},"KN-550BT only support offline measurement.")))),(0,a.kt)("h2",{id:"import-kn550-module"},"Import KN550 module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP550BTModule,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,a.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"get-device-battery"},"Get device battery"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The KN-550BT doesn't support this feature on firmware 2.0.0."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getBattery(mac);\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-local-time-to-kn-550bt"},"Set local time to KN-550BT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getFunctionInfo(mac);\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_FUNCTION_INFORMATION_BP) {\n        \n        /**\n         * Blood pressure measurement mode, up air measurement mode and down air measurement mode.\n         * Up air measurement mode: measure blood pressure during the process of pressurization.\n         * Down air measurement mode: raise the pressure to a certain leven and then slowly release it to measure blood pressure.\n         * upAirMeasureFlg, true: up air measurement mode; false: down dir measurement mode.\n         */\n        console.log(event[BPProfileModule.FUNCTION_IS_UPAIR_MEASURE]);\n        \n        /**\n         * It is used for measuring blood pressure on the arm or not.\n         */\n        console.log(event[BPProfileModule.FUNCTION_IS_ARM_MEASURE]);\n        \n        /**\n         * It support detect angle of monitor. \n         */\n        console.log(event[BPProfileModule.FUNCTION_HAVE_ANGLE_SENSOR]);\n        \n        /**\n         * It support offline measurement mode or not.\n         */\n        console.log(event[BPProfileModule.FUNCTION_HAVE_OFFLINE]);\n\n        /**\n         * It support diagnosis of hemodynamic stability or not. It is always false for KN-550BT.\n         */\n        console.log(event[BPProfileModule.FUNCTION_HAVE_HSD]);\n        \n        /**\n         * It support angle detection or not. It is always false for KN-550BT.\n         */\n        console.log(event[BPProfileModule.FUNCTION_HAVE_ANGLE_SETTING]);\n        \n        /**\n         *  It support update firmware or not. It is always false for KN-550BT.\n         */\n        console.log(event[BPProfileModule.FUNCTION_IS_MULTI_UPLOAD]);\n        \n    }\n});\n")),(0,a.kt)("h3",{id:"get-number-of-history-data"},"Get number of history data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getOfflineNum(mac);\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,a.kt)("h3",{id:"get-history-data"},"Get history data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BP550BTModule.getOfflineData(mac);\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n\n                // only support firmware 2.0.1 or later\n                console.log(offlineData[BPProfileModule.TIME_CALIBRATION]);\n            }\n        }\n    }\n});\n')),(0,a.kt)("h3",{id:"get-kn-550bt-display-status"},"Get KN-550BT display status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getDisplayConfig();\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_SHOW_CONFIG_BP) {\n        console.log(event[BPProfileModule.IS_BACKLIGHT_ON_BP]);\n        console.log(event[BPProfileModule.IS_CLOCK_ON_BP]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-kn-550bt-display-status"},"Set KN-550BT display status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * lightOn: background light is on or off.\n * timeOn: show date on KN 550BT screen.\n */\nBP550BTModule.setDisplayConfig(mac, lightOn, timeOn);\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_SET_STATUS_DISPLAY_SUCCESS) {\n        console.log("set display success");\n    }\n});\n')),(0,a.kt)("h3",{id:"get-kn-550bt-time"},"Get KN-550BT time"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Only Firmware 2.0.1 and above supprt this API"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BP550BTModule.getTime();\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_GET_TIME) {\n        console.log(event["date"]);\n    }\n});\n')),(0,a.kt)("h3",{id:"history-data-transfer-finished"},"History data transfer finished"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"After history data transfer is finished, this API will help you to clear the history data.\nOnly Firmware 2.0.1 and above supprt this API. other firmware KN-550BT can clear history data automatically."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'BP550BTModule.transferFinished();\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_OVER_BP) {\n        console.log("Finish data transfer");\n    }\n});\n')),(0,a.kt)("h3",{id:"get-all-connected-devices"},"Get all connected devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.getAllConnectedDevices();\n\n// Return value\nconst notifyListener = DeviceEventEmitter.addListener(BP550BTModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n")),(0,a.kt)("h3",{id:"disconnect-kn-550bt-device"},"Disconnect KN-550BT device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"BP550BTModule.disconnect(mac);\n")))}u.isMDXComponent=!0}}]);