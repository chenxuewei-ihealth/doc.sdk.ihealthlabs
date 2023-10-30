"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),g=o,f=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"HS2S Pro",sidebar_position:5},i=void 0,l={unversionedId:"react-native/scale/hs2spro",id:"react-native/scale/hs2spro",title:"HS2S Pro",description:"API Reference",source:"@site/docs/react-native/scale/hs2spro.md",sourceDirName:"react-native/scale",slug:"/react-native/scale/hs2spro",permalink:"/ihealthlabs-sdk-docs/docs/react-native/scale/hs2spro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-native/scale/hs2spro.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"HS2S Pro",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HS4S",permalink:"/ihealthlabs-sdk-docs/docs/react-native/scale/hs4s"},next:{title:"HS6",permalink:"/ihealthlabs-sdk-docs/docs/react-native/scale/hs6"}},s={},d=[{value:"API Reference",id:"api-reference",level:2},{value:"Import HS2S Pro module",id:"import-hs2s-pro-module",level:3},{value:"Add and remove listener",id:"add-and-remove-listener",level:3},{value:"Get HS2S Pro information",id:"get-hs2s-pro-information",level:3},{value:"Get HS2S Pro battery level",id:"get-hs2s-pro-battery-level",level:3},{value:"Set HS2S Pro unit type",id:"set-hs2s-pro-unit-type",level:3},{value:"Get user profile in HS2S Pro",id:"get-user-profile-in-hs2s-pro",level:3},{value:"Create or update user profile in HS2S Pro",id:"create-or-update-user-profile-in-hs2s-pro",level:3},{value:"Delete user profile in HS2S Pro",id:"delete-user-profile-in-hs2s-pro",level:3},{value:"Get the number of offline measurement result in HS2S Pro",id:"get-the-number-of-offline-measurement-result-in-hs2s-pro",level:3},{value:"Get offline data in HS2S Pro",id:"get-offline-data-in-hs2s-pro",level:3},{value:"Delete offline data in HS2S Pro by user id",id:"delete-offline-data-in-hs2s-pro-by-user-id",level:3},{value:"Get the number of guest offline data in HS2S Pro",id:"get-the-number-of-guest-offline-data-in-hs2s-pro",level:3},{value:"Get guest offline data in HS2S Pro",id:"get-guest-offline-data-in-hs2s-pro",level:3},{value:"Delete guest offline data",id:"delete-guest-offline-data",level:3},{value:"Start a online measurement",id:"start-a-online-measurement",level:3},{value:"Start heart rate measurement mode",id:"start-heart-rate-measurement-mode",level:3},{value:"Stop heart rate measurement mode",id:"stop-heart-rate-measurement-mode",level:3},{value:"reset device",id:"reset-device",level:3},{value:"disconnect device",id:"disconnect-device",level:3},{value:"get all connected devices",id:"get-all-connected-devices",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"import-hs2s-pro-module"},"Import HS2S Pro module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  HS2SProModule,\n  HS2SProProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,o.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,o.kt)("h3",{id:"get-hs2s-pro-information"},"Get HS2S Pro information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.getDeviceInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_device_info") {\n       console.log(event["battery"]);\n       console.log(event["unit_current"]);\n       console.log(event["user_count"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-hs2s-pro-battery-level"},"Get HS2S Pro battery level"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_battery_hs") {\n       console.log(event["battery"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"set-hs2s-pro-unit-type"},"Set HS2S Pro unit type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Unit type:\n * 1: kg\n * 2: lbs\n * 3: st\n **/\nHS2SProModule.setUnit(mac, unit);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_set_unit") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-user-profile-in-hs2s-pro"},"Get user profile in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.getUserInfo(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_get_user_info") {\n       console.log(event["user_info-count"]);\n       let array = event["user_info_array"];\n       console.log(array["body_building"]);\n       console.log(array["impedance"]);\n       console.log(array["height"]);\n       console.log(array["age"]);\n       console.log(array["gender"]);\n       console.log(array["weight"]);\n       console.log(array["create_time"]);\n       console.log(array["user_id"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"create-or-update-user-profile-in-hs2s-pro"},"Create or update user profile in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userID: User id, the id must be 16 digits.\n * createTS: Create user or modify timestramp.\n * weight: user current weight, the unit is kg, range is 20kg~180kg.\n * age: user age, range is 18-99, if you are not in this range, you may not get the correect body fat result\n * height: user height, range is 90cm~220cm\n * gender: 0: female, 1: male\n * impedanceMark: 0: no need body fat measurement, 1: need fat measurement\n * fitnessMark: 0: no body building, 1: body building\n **/\nHS2SProModule.updateUserInfo(mac, userID, createTS, weight, age, height, gender, impedanceMark, fitnessMark);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_create_or_update_user_info") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"delete-user-profile-in-hs2s-pro"},"Delete user profile in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userID: User id.\n **/\nHS2SProModule.deleteUser(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_user_info") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-the-number-of-offline-measurement-result-in-hs2s-pro"},"Get the number of offline measurement result in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userID: User id.\n **/\nHS2SProModule.getMemoryDataCount(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_history_data_num") {\n       console.log(event["history_data_count"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-offline-data-in-hs2s-pro"},"Get offline data in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userID: User id.\n **/\nHS2SProModule.getMemoryData(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_history_data") {\n        let arr = event["history_data"];\n        arr.forEach(function(result) {\n            console.log(result["body_building"]);\n            console.log(result["body_fit_percentage"]);\n            console.log(result["right_time"]);\n            console.log(result["gender"]);\n            console.log(result["bone_salt_content"]);\n            console.log(result["height"]);\n            console.log(result["dataID"]);\n            console.log(result["muscle_mass"]);\n            console.log(result["weight"]);\n            console.log(result["age"]);\n            console.log(result["impedance"]);\n            console.log(result["measure_time"]);\n            console.log(result["body_water_rate"]);\n            console.log(result["instruction_type"]);\n            console.log(result["data_impedance_errors"]);\n       })\n    }\n}\n')),(0,o.kt)("h3",{id:"delete-offline-data-in-hs2s-pro-by-user-id"},"Delete offline data in HS2S Pro by user id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userID: User id.\n **/\nHS2SProModule.deleteMemoryData(mac, userId);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_history_data") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-the-number-of-guest-offline-data-in-hs2s-pro"},"Get the number of guest offline data in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.getAnonymousMemoryDataCount(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_anonymous_data_num") {\n       console.log(event["anonymous_data_count"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"get-guest-offline-data-in-hs2s-pro"},"Get guest offline data in HS2S Pro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.getAnonymousMemoryData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_anonymous_data") {\n        let arr = event["history_data"];\n        arr.forEach(function(result) {\n            console.log(result["right_time"]);\n            console.log(result["dataID"]);\n            console.log(result["measure_time"]);\n            console.log(result["weight"]);\n       })\n    }\n}\n')),(0,o.kt)("h3",{id:"delete-guest-offline-data"},"Delete guest offline data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.deleteAnonymousMemoryData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_delete_anonymous_data") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"start-a-online-measurement"},"Start a online measurement"),(0,o.kt)("p",null,"The API is async function. It will return message until finish measurement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * userType:0 guest,1 normol uesr\n * userID: User id, the id must be 16 digits.\n * createTS: Create user or modify timestramp.\n * weight: user current weight, the unit is kg, range is 20kg~180kg.\n * age: user age, range is 18-99, if you are not in this range, you may not get the correect body fat result\n * height: user height, range is 90cm~220cm\n * gender: 0: female, 1: male\n * impedanceMark: 0: no need body fat measurement, 1: need fat measurement\n * fitnessMark: 0: no body building, 1: body building\n **/\nHS2SProModule.measure(mac,userType,userID,createTS,weight,age,height,sex,impedanceMark,fitnessMark);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n   \n   if (event.action === "action_online_real_time_weight") {\n        console.log(event["weight"]);\n\n    } else if (event.action === "action_online_result") {\n        console.log(event["weight"]);\n\n    } else if (event.action === "action_body_fat_result") {\n        let body_fit_percentage = event["body_fit_percentage"];\n        let right_time = bodyFat["right_time"];\n        let body_building = bodyFat["body_building"];\n        let gender = bodyFat["gender"];\n        let bone_salt_content = bodyFat["bone_salt_content"];\n        let height = bodyFat["height"];\n        let dataID = bodyFat["dataID"];\n        let muscle_mass = bodyFat["muscle_mass"];\n        let weight = bodyFat["weight"];\n        let age = bodyFat["age"];\n        let impedance = bodyFat["impedance"];\n        let measure_time = bodyFat["measure_time"];\n        let body_water_rate = bodyFat["body_water_rate"];\n        let instruction_type = bodyFat["instruction_type"];\n        let data_impedance_errors = bodyFat["data_impedance_errors"];\n    } \n});\n')),(0,o.kt)("h3",{id:"start-heart-rate-measurement-mode"},"Start heart rate measurement mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"HS2SProModule.enterHS2SProHeartRateMeasurementMode(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === HS2SProfileModule.ACTION_HS2S_MEASURE_HEARTRATE) {\n       \n    }\n}\n")),(0,o.kt)("h3",{id:"stop-heart-rate-measurement-mode"},"Stop heart rate measurement mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.exitHS2SProProHeartRateMeasurementMode(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === HS2SProfileModule.ACTION_HS2S_EXIT_MEASURE_HEARTRATE_STATUS) {\n        // {"status":0,"heartrate":78}\n       console.log(event.message);\n    }\n}\n')),(0,o.kt)("h3",{id:"reset-device"},"reset device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'HS2SProModule.resetDevice(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(HS2SProModule.Event_Notify,  (event) => {\n    if (event.action === "action_restore_fatory_settings") {\n       console.log(event["result"]);\n    }\n}\n')),(0,o.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"HS2SProModule.disConnect(mac);\n")),(0,o.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"HS2SProModule.getAllConnectedDevices();\n")))}c.isMDXComponent=!0}}]);