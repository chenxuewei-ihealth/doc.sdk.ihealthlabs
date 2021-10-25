"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=d(n),m=o,M=v["".concat(s,".").concat(m)]||v[m]||u[m]||a;return n?i.createElement(M,r(r({ref:t},c),{},{components:n})):i.createElement(M,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7294),o=n(9443);var a=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,o=e.block,d=e.defaultValue,c=e.values,u=e.groupId,v=e.className,m=i.Children.toArray(e.children),M=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=d?d:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,A=a(),_=A.tabGroupChoices,g=A.setTabGroupChoices,E=(0,i.useState)(f),p=E[0],h=E[1],y=[];if(null!=u){var S=_[u];null!=S&&S!==p&&M.some((function(e){return e.value===S}))&&h(S)}var k=function(e){var t=e.currentTarget,n=y.indexOf(t),i=M[n].value;h(i),null!=u&&(g(u,i),setTimeout((function(){var e,n,i,o,a,r,l,d;(e=t.getBoundingClientRect(),n=e.top,i=e.left,o=e.bottom,a=e.right,r=window,l=r.innerHeight,d=r.innerWidth,n>=0&&a<=d&&o<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=y.indexOf(e.target)+1;n=y[i]||y[0];break;case"ArrowLeft":var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},v)},M.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":p===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:k,onClick:k},null!=n?n:t)}))),n?(0,i.cloneElement)(m.filter((function(e){return e.props.value===p}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==p})}))))}},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},6747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return v},default:function(){return M}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=n(5064),l=n(8215),s=["components"],d={id:"am3s",title:"AM3S"},c=void 0,u={unversionedId:"device/am3s",id:"device/am3s",isDocsHomePage:!1,title:"AM3S",description:"Connection to device",source:"@site/docs/device/am3s.md",sourceDirName:"device",slug:"/device/am3s",permalink:"/doc.sdk.ihealthlabs/docs/device/am3s",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/am3s.md",tags:[],version:"current",frontMatter:{id:"am3s",title:"AM3S"},sidebar:"tutorialSidebar",previous:{title:"Get Started(React Native)",permalink:"/doc.sdk.ihealthlabs/docs/get-started/get-started-reactnative"},next:{title:"AM4",permalink:"/doc.sdk.ihealthlabs/docs/device/am4"}},v=[{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for AM3S devices",id:"2scan-for-am3s-devices",children:[]},{value:"3.Connect to AM3S devices",id:"3connect-to-am3s-devices",children:[]}]},{value:"Initia Device",id:"initia-device",children:[]},{value:"Sync history data",id:"sync-history-data",children:[{value:"Get the activity data",id:"get-the-activity-data",children:[]},{value:"Get current time activity data",id:"get-current-time-activity-data",children:[]},{value:"Get sleep data",id:"get-sleep-data",children:[]}]},{value:"Reset the device",id:"reset-the-device",children:[]},{value:"iOS Doc",id:"ios-doc",children:[]},{value:"Import AM3S Module",id:"import-am3s-module",children:[]},{value:"APIs",id:"apis",children:[{value:"Add and remove listener",id:"add-and-remove-listener",children:[]},{value:"get all connected am3s devices",id:"get-all-connected-am3s-devices",children:[]},{value:"disconnect a am3s devices",id:"disconnect-a-am3s-devices",children:[]},{value:"erase am3s memory",id:"erase-am3s-memory",children:[]},{value:"get the user id bound to the device",id:"get-the-user-id-bound-to-the-device",children:[]},{value:"set the user id to the device",id:"set-the-user-id-to-the-device",children:[]},{value:"setAlarmClock",id:"setalarmclock",children:[]},{value:"get alarm clock ids",id:"get-alarm-clock-ids",children:[]},{value:"get alarm clock detail",id:"get-alarm-clock-detail",children:[]},{value:"delete alarm clock by id",id:"delete-alarm-clock-by-id",children:[]},{value:"set activity reminder interval",id:"set-activity-reminder-interval",children:[]},{value:"get activity reminder interval",id:"get-activity-reminder-interval",children:[]},{value:"get am3s information",id:"get-am3s-information",children:[]},{value:"set user id to the am3s device",id:"set-user-id-to-the-am3s-device",children:[]},{value:"set user information to the am3s device",id:"set-user-information-to-the-am3s-device",children:[]},{value:"get user information stored in the am3s device",id:"get-user-information-stored-in-the-am3s-device",children:[]},{value:"set bmr to the am3s device",id:"set-bmr-to-the-am3s-device",children:[]},{value:"get activity steps",id:"get-activity-steps",children:[]},{value:"get current activity steps",id:"get-current-activity-steps",children:[]},{value:"set current time to am3s device",id:"set-current-time-to-am3s-device",children:[]},{value:"set hour mode (12 or 24) to am3s device",id:"set-hour-mode-12-or-24-to-am3s-device",children:[]},{value:"get hour mode (12 or 24) from am3s device",id:"get-hour-mode-12-or-24-from-am3s-device",children:[]},{value:"get sleep data stored in the am3s",id:"get-sleep-data-stored-in-the-am3s",children:[]}]}],m={toc:v};function M(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,a.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,a.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) {\n\n    }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) {\n\n    }\n\n    @Override\n    public void onScanError(String reason, long latency) {\n        \n    }\n\n    @Override\n    public void onScanFinish() {\n       \n    }\n});\n\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(mClientCallbackId, iHealthDevicesManager.TYPE_AM3S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(int clientCallbackId, String... macs)\n")),(0,a.kt)("h3",{id:"2scan-for-am3s-devices"},"2.Scan for AM3S devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.AM3S);\n")),(0,a.kt)("h3",{id:"3connect-to-am3s-devices"},"3.Connect to AM3S devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_AM3S)\n\nmAm3sControl = iHealthDevicesManager.getInstance().getAm3sControl(mDeviceMac);\n')),(0,a.kt)("h2",{id:"initia-device"},"Initia Device"),(0,a.kt)("h5",{id:"get-user-id"},"Get user ID"),(0,a.kt)("h5",{id:"set-user-id"},"Set user ID"),(0,a.kt)("h5",{id:"get-am-devices-idps-information"},"Get AM device's IDPS information"),(0,a.kt)("h5",{id:"get-user-information"},"Get user information"),(0,a.kt)("h5",{id:"set-users-bmr"},"Set user's BMR"),(0,a.kt)("h5",{id:"get-device-state-and-battery-information"},"Get device state and battery information"),(0,a.kt)("h2",{id:"sync-history-data"},"Sync history data"),(0,a.kt)("h3",{id:"get-the-activity-data"},"Get the activity data"),(0,a.kt)("h3",{id:"get-current-time-activity-data"},"Get current time activity data"),(0,a.kt)("h3",{id:"get-sleep-data"},"Get sleep data"),(0,a.kt)("h5",{id:"get-alarm-count"},"Get alarm count"),(0,a.kt)("h5",{id:"get-alarm-information-by-id"},"Get alarm information by id"),(0,a.kt)("h5",{id:"delete-alarm-by-id"},"Delete alarm by id"),(0,a.kt)("h5",{id:"unset-alarm"},"Unset alarm"),(0,a.kt)("h5",{id:"get-activity-remind-setting"},"Get activity remind setting"),(0,a.kt)("h5",{id:"setunset-activity-remind"},"Set/Unset activity remind"),(0,a.kt)("h5",{id:"set-the-system-time-to-am-device"},"Set the system time to AM device"),(0,a.kt)("h5",{id:"set-hour-mode"},"Set hour mode"),(0,a.kt)("h5",{id:"get-hour-mode"},"Get hour mode"),(0,a.kt)("h2",{id:"reset-the-device"},"Reset the device")),(0,a.kt)(l.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,a.kt)("h2",{id:"ios-doc"},"iOS Doc")),(0,a.kt)(l.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},(0,a.kt)("h2",{id:"import-am3s-module"},"Import AM3S Module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  AM3SModule,\n  AMProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,a.kt)("h2",{id:"apis"},"APIs"),(0,a.kt)("h3",{id:"add-and-remove-listener"},"Add and remove listener"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,a.kt)("h3",{id:"get-all-connected-am3s-devices"},"get all connected am3s devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getAllConnectedDevices();\n")),(0,a.kt)("h3",{id:"disconnect-a-am3s-devices"},"disconnect a am3s devices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.disconnect(mac);\n")),(0,a.kt)("h3",{id:"erase-am3s-memory"},"erase am3s memory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.reset(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_RESET_AM) {\n        if (0 === event[AMProfileModule.RESET_AM]) {\n            console.log('reset fail');\n        } else if (1 === event[AMProfileModule.RESET_AM]) {\n            console.log('reset success');\n        }\n    }\n});\n")),(0,a.kt)("h3",{id:"get-the-user-id-bound-to-the-device"},"get the user id bound to the device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getUserId(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_USERID_AM) {\n        console.log(event[AMProfileModule.USERID_AM]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-the-user-id-to-the-device"},"set the user id to the device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// id: user id, the range is 0~0x7fffffff\nAM3SModule.setUserId(mac, id);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERID_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"setalarmclock"},"setAlarmClock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\n/**\n * id: alarm clock id, you can set up to 3 alarm clocks\n * hour: clock hour\n * min:  clock minates\n * isRepeat: one time or repeat\n * weeks: available on the day of the week\n * isOn: open or close\n */\n\nAM3SModule.setAlarmClock(mac, 1, 12, 0, true, [1, 1, 1, 1, 1, 0, 0], false);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-alarm-clock-ids"},"get alarm clock ids"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getAlarmClockNum(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ALARMINFO_SUCCESS_AM) {\n        console.log(event[AMProfileModule.GET_ALARMNUM_AM]);    // e.g. 3\n        console.log(event[AMProfileModule.GET_ALARMNUM_ID_AM]); // e.g. [1, 2, 3]\n    }\n});\n")),(0,a.kt)("h3",{id:"get-alarm-clock-detail"},"get alarm clock detail"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.getAlarmClockDetail(mac, [1, 3, 2]);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_ALARMINFO_AM) {\n        let dataArray = event[BPProfileModule.GET_ALARM_CLOCK_DETAIL];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.GET_ALARM_ID_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_TIME_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_ISREPEAT_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_WEEK_AM]);\n                console.log(offlineData[AMProfileModule.GET_ALARM_ISON_AM]);\n            }\n        } \n    }\n});\n')),(0,a.kt)("h3",{id:"delete-alarm-clock-by-id"},"delete alarm clock by id"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.deleteAlarmClock(mac, 1);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_DELETE_ALARM_SUCCESS_AM) {\n        console.log('delete success');\n    }\n});\n")),(0,a.kt)("h3",{id:"set-activity-reminder-interval"},"set activity reminder interval"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * hour\n * min\n * isOn: open or close\n */\nAM3SModule.setActivityRemind(mac, 0, 30, false);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_ACTIVITYREMIND_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-activity-reminder-interval"},"get activity reminder interval"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getActivityRemind(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_ACTIVITY_REMIND_AM) {\n        console.log('get success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-am3s-information"},"get am3s information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.queryAMState(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_QUERY_STATE_AM) {\n        // 0 indicates waist\n        // 1 indicates wrist\n        // 2 indicates sleep\n        console.log(event[AMProfileModule.QUERY_STATE_AM]);\n        // battery level 0~10\n        console.log(event[AMProfileModule.QUERY_BATTERY_AM]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-user-id-to-the-am3s-device"},"set user id to the am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// The user id range is from 0 to 0x7fffffff\nAM3SModule.setUserId(mac, 8);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERID_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"set-user-information-to-the-am3s-device"},"set user information to the am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * age\n * height(cm)\n * weight(lbs)\n * gender 0: female, 1: male\n * unit 0: miles, 1: kilometre\n * target the goal of steps, the range is from 4 ~ 65535\n * activityLevel 1: sedentary, 2: active, 3: very active\n */\nAM3SModule.setUserInfo(mac, 25, 183, 80, AMProfileModule.AM_SET_MALE, AMProfileModule.AM_SET_UNIT_METRIC, 10000, 1, 30);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_USERINFO_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-user-information-stored-in-the-am3s-device"},"get user information stored in the am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getUserInfo(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_USERINFO_AM) {\n        console.log(event[AMProfileModule.GET_USER_AGE_AM]);\n        console.log(event[AMProfileModule.GET_USER_STEP_AM]);\n        console.log(event[AMProfileModule.GET_USER_HEIGHT_AM]);\n        console.log(event[AMProfileModule.GET_USER_SEX_AM]);\n        console.log(event[AMProfileModule.GET_USER_WEIGHT_AM]);\n        console.log(event[AMProfileModule.GET_USER_UNIT_AM]);\n        console.log(event[AMProfileModule.GET_USER_AGE_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET1_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET2_AM]);\n        console.log(event[AMProfileModule.GET_USER_TARGET3_AM]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-bmr-to-the-am3s-device"},"set bmr to the am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// bmr Basal Metabolic Rate\nAM3SModule.setUserBmr(mac, 2000);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_BMR_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-activity-steps"},"get activity steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.syncActivityData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_ACTIVITY_DATA_AM) {\n        let dataArray = event[AMProfileModule.SYNC_ACTIVITY_EACH_DATA_AM];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_TIME_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_CALORIE_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_ACTIVITY_DATA_STEP_LENGTH_AM]);\n                console.log(offlineData[AMProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,a.kt)("h3",{id:"get-current-activity-steps"},"get current activity steps"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.syncRealData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_REAL_DATA_AM) {\n        console.log(offlineData[AMProfileModule.SYNC_REAL_STEP_AM]);\n        console.log(offlineData[AMProfileModule.SYNC_REAL_CALORIE_AM]);\n        console.log(offlineData[AMProfileModule.SYNC_REAL_TOTALCALORIE_AM]);\n    }\n});\n")),(0,a.kt)("h3",{id:"set-current-time-to-am3s-device"},"set current time to am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.syncRealData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_TIME_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"set-hour-mode-12-or-24-to-am3s-device"},"set hour mode (12 or 24) to am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * AMProfileModule.AM_SET_12_HOUR_MODE(0)\n * AMProfileModule.AM_SET_24_HOUR_MODE(1)\n * AMProfileModule.AM_SET_EXCEPT_EUROPE_12_HOUR_MODE(2)\n * AMProfileModule.AM_SET_EUROPE_12_HOUR_MODE(3)\n * AMProfileModule.AM_SET_EXCEPT_EUROPE_24_HOUR_MODE(4)\n * AMProfileModule.AM_SET_EUROPE_24_HOUR_MODE\n **/\nAM3SModule.setHourMode(mac, AMProfileModule.AM_SET_24_HOUR_MODE);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SET_HOUR_MODE_SUCCESS_AM) {\n        console.log('set success');\n    }\n});\n")),(0,a.kt)("h3",{id:"get-hour-mode-12-or-24-from-am3s-device"},"get hour mode (12 or 24) from am3s device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"AM3SModule.getHourMode(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_GET_HOUR_MODE_AM) {\n        console.log(event[AMProfileModule.GET_HOUR_MODE_AM]);\n    }\n});\n")),(0,a.kt)("h3",{id:"get-sleep-data-stored-in-the-am3s"},"get sleep data stored in the am3s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'AM3SModule.syncSleepData(mac);\n\n// response\nnotifyListener = DeviceEventEmitter.addListener(AM3SModule.Event_Notify,  (event) => {\n    if (event.action === AMProfileModule.ACTION_SYNC_SLEEP_DATA_AM) {\n        let dataArray = event[AMProfileModule.SYNC_SLEEP_DATA_AM];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_EACH_DATA_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_DATA_TIME_AM]);\n                console.log(offlineData[AMProfileModule.SYNC_SLEEP_DATA_LEVEL_AM]);\n                console.log(offlineData[AMProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')))))}M.isMDXComponent=!0},6010:function(e,t,n){function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);