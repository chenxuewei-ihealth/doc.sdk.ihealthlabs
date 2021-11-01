"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[917],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),v=s(t),p=i,f=v["".concat(c,".").concat(p)]||v[p]||u[p]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=v;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(7294),i=t(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,i=e.block,s=e.defaultValue,d=e.values,u=e.groupId,v=e.className,p=a.Children.toArray(e.children),f=null!=d?d:p.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=s?s:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value,g=r(),P=g.tabGroupChoices,b=g.setTabGroupChoices,B=(0,a.useState)(m),h=B[0],N=B[1],k=[];if(null!=u){var E=P[u];null!=E&&E!==h&&f.some((function(e){return e.value===E}))&&N(E)}var O=function(e){var n=e.currentTarget,t=k.indexOf(n),a=f[t].value;N(a),null!=u&&(b(u,a),setTimeout((function(){var e,t,a,i,r,l,o,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,t>=0&&r<=s&&i<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((function(){return n.classList.remove(c)}),2e3))}),150))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=k.indexOf(e.target)+1;t=k[a]||k[0];break;case"ArrowLeft":var i=k.indexOf(e.target)-1;t=k[i]||k[k.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:h===n?0:-1,"aria-selected":h===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":h===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:S,onFocus:O,onClick:O},null!=t?t:n)}))),t?(0,a.cloneElement)(p.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},9443:function(e,n,t){var a=(0,t(7294).createContext)(void 0);n.Z=a},5291:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return v},default:function(){return f}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=t(5064),o=t(8215),c=["components"],s={title:"BP5",sidebar_position:2},d=void 0,u={unversionedId:"device/bp5",id:"device/bp5",isDocsHomePage:!1,title:"BP5",description:"WorkFlow",source:"@site/docs/device/bp5.md",sourceDirName:"device",slug:"/device/bp5",permalink:"/doc.sdk.ihealthlabs/docs/device/bp5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/device/bp5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"BP5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BP3L",permalink:"/doc.sdk.ihealthlabs/docs/device/bp3l"},next:{title:"BP5S",permalink:"/doc.sdk.ihealthlabs/docs/device/bp5s"}},v=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BP5 devices",id:"2scan-for-bp5-devices",children:[]},{value:"3.Connect to BP5 devices",id:"3connect-to-bp5-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Enable BP5 to be measured offline",id:"enable-bp5-to-be-measured-offline",children:[]},{value:"Disable BP5 to be measured offline",id:"disable-bp5-to-be-measured-offline",children:[]},{value:"Get the number of history data",id:"get-the-number-of-history-data",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Start a measurement",id:"start-a-measurement",children:[]},{value:"Stop measurement",id:"stop-measurement",children:[]},{value:"Disconnect Bp5 device",id:"disconnect-bp5-device",children:[]}]},{value:"import BP5 module",id:"import-bp5-module",children:[]},{value:"APIs",id:"apis",children:[{value:"add and remove listener",id:"add-and-remove-listener",children:[]},{value:"start a measurement",id:"start-a-measurement-1",children:[]},{value:"cancel current measurement",id:"cancel-current-measurement",children:[]},{value:"get battery",id:"get-battery",children:[]},{value:"enable offline mode",id:"enable-offline-mode",children:[]},{value:"disable offline mode",id:"disable-offline-mode",children:[]},{value:"is enable offline mode",id:"is-enable-offline-mode",children:[]},{value:"get quantity of data stored in the bp5 device",id:"get-quantity-of-data-stored-in-the-bp5-device",children:[]},{value:"get data stored in the bp5 device",id:"get-data-stored-in-the-bp5-device",children:[]},{value:"disconnect device",id:"disconnect-device",children:[]},{value:"get device information",id:"get-device-information",children:[]},{value:"get all connected devices",id:"get-all-connected-devices",children:[]}]}],p={toc:v};function f(e){var n=e.components,t=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"android",label:"Android",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect BP5 blood pressure monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BP5 support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int callbackId = iHealthDevicesManager.getInstance().registerClientCallback(new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) { }\n});\n\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP5);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-bp5-devices"},"2.Scan for BP5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP5);\n")),(0,r.kt)("h3",{id:"3connect-to-bp5-devices"},"3.Connect to BP5 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP5)\n\nBp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getBattery();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"enable-bp5-to-be-measured-offline"},"Enable BP5 to be measured offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.enableOffline();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ENABLE_OFFLINE_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"disable-bp5-to-be-measured-offline"},"Disable BP5 to be measured offline"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.disableOfflineMeasure();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_DISENABLE_OFFLINE_BP.equals(action)) {\n           \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"get-history-data"},"Get history data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                    int pulse = obj.getString(BpProfile.PULSE_BP);\n                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);\n                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"start-a-measurement"},"Start a measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.startMeasure();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_ZOREING_BP.equals(action)) {\n           \n        } else if (BpProfile.ACTION_ZOREOVER_BP.equals(action)) {\n            \n        } else if (BpProfile.ACTION_ONLINE_PRESSURE_BP.equals(action)) {\n            try {\n                int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_PULSEWAVE_BP.equals(action)) {\n            try {\n               JSONObject obj = new JSONObject(message);\n               int pressure = obj.getInt(BpProfile.BLOOD_PRESSURE_BP);\n               Sting wave = obj.getString(BpProfile.PULSEWAVE_BP);\n               Boolean heartbeat = obj.getBoolean(BpProfile.FLAG_HEARTBEAT_BP);\n            } catch(JSONException e) {\n                e.printStackTrace();\n            }\n            \n        } else if (BpProfile.ACTION_ONLINE_RESULT_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int highBloodPressure = obj.getInt(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                int lowBloodPressure  = obj.getInt(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                int pulse = obj.getInt(BpProfile.PULSE_BP);\n                int ahr   = obj.getBoolean(BpProfile.MEASUREMENT_AHR_BP);\n                int hsd   = obj.getBoolean(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"stop-measurement"},"Stop measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.getDeviceInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_INTERRUPTED_BP.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"disconnect-bp5-device"},"Disconnect Bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bp5Control control = iHealthDevicesManager.getInstance().getBp5Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n"))),(0,r.kt)(o.Z,{value:"ios",label:"iOS",mdxType:"TabItem"},(0,r.kt)("h4",{id:"ios-doc"},"iOS Doc")),(0,r.kt)(o.Z,{value:"reactnative",label:"React Native",mdxType:"TabItem"},(0,r.kt)("h2",{id:"import-bp5-module"},"import BP5 module"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  BP5Module,\n  BPProfileModule\n} from '@ihealth/ihealthlibrary-react-native';\n")),(0,r.kt)("h2",{id:"apis"},"APIs"),(0,r.kt)("h3",{id:"add-and-remove-listener"},"add and remove listener"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// add\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    console.log(event);\n});\n\n// remove\nnotifyListener.remove();\n")),(0,r.kt)("h3",{id:"start-a-measurement-1"},"start a measurement"),(0,r.kt)("p",null,"The API is asyn function. It will return message until finish measurement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.startMeasure(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_ZOREING_BP) {\n        console.log("zero adjustment");\n\n    } else if (event.action === BPProfileModule.ACTION_ZOREOVER_BP) {\n        console.log("zero adjustment is done");\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PRESSURE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_PULSEWAVE_BP) {\n        console.log(event[BPProfileModule.BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.FLAG_HEARTBEAT_BP]);\n        console.log(event[BPProfileModule.PULSEWAVE_BP]);\n\n    } else if (event.action === BPProfileModule.ACTION_ONLINE_RESULT_BP) {\n        console.log(event[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n        console.log(event[BPProfileModule.PULSE_BP]);\n        console.log(event[BPProfileModule.MEASUREMENT_AHR_BP]);\n        console.log(event[BPProfileModule.DATAID]);\n\n    } else if (event.action === BPProfileModule.ACTION_ERROR_BP) {\n        console.log(event[BPProfileModule.ERROR_NUM_BP]);\n        console.log(event[BPProfileModule.ERROR_DESCRIPTION_BP]);\n    }\n});\n')),(0,r.kt)("h3",{id:"cancel-current-measurement"},"cancel current measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.stopMeasure(mac);\n")),(0,r.kt)("h3",{id:"get-battery"},"get battery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getBattery(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_BATTERY_BP) {\n        console.log(event[BPProfileModule.BATTERY_BP]);\n    }\n});\n")),(0,r.kt)("h3",{id:"enable-offline-mode"},"enable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.enbleOffline(mac);\n")),(0,r.kt)("h3",{id:"disable-offline-mode"},"disable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disableOffline(mac);\n")),(0,r.kt)("h3",{id:"is-enable-offline-mode"},"is enable offline mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.isEnableOffline(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_IS_ENABLE_OFFLINE) {\n        console.log(event[BPProfileModule.IS_ENABLE_OFFLINE]);\n    }\n});\n")),(0,r.kt)("h3",{id:"get-quantity-of-data-stored-in-the-bp5-device"},"get quantity of data stored in the bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getOfflineNum(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (e.action === BPProfileModule.ACTION_HISTORICAL_NUM_BP) {\n        console.log(event[BPProfileModule.HISTORICAL_NUM_BP]);\n    }\n});\n")),(0,r.kt)("h3",{id:"get-data-stored-in-the-bp5-device"},"get data stored in the bp5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'BP5Module.getOfflineData(mac);\n\nnotifyListener = DeviceEventEmitter.addListener(BP5Module.Event_Notify,  (event) => {\n    if (event.action === BPProfileModule.ACTION_HISTORICAL_DATA_BP) {\n        let dataArray = event[BPProfileModule.HISTORICAL_DATA_BP];\n        if (dataArray == undefined) {\n            result = "There is not offline data in device"\n        }else {\n            for (let i = 0; i < dataArray.length; i++) {\n                let offlineData = dataArray[i];\n\n                console.log(offlineData[BPProfileModule.MEASUREMENT_DATE_BP]);\n                console.log(offlineData[BPProfileModule.HIGH_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.LOW_BLOOD_PRESSURE_BP]);\n                console.log(offlineData[BPProfileModule.PULSE_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_AHR_BP]);\n                console.log(offlineData[BPProfileModule.MEASUREMENT_HSD_BP]);\n                console.log(offlineData[BPProfileModule.DATAID]);\n            }\n        }\n    }\n});\n')),(0,r.kt)("h3",{id:"disconnect-device"},"disconnect device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.disConnect(mac);\n")),(0,r.kt)("h3",{id:"get-device-information"},"get device information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"iHealthDeviceManagerModule.getDevicesIDPS(mac, (event) => {\n    console.info(event);\n})\n")),(0,r.kt)("h3",{id:"get-all-connected-devices"},"get all connected devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"BP5Module.getAllConnectedDevices();\n")))))}f.isMDXComponent=!0},6010:function(e,n,t){function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function i(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}t.d(n,{Z:function(){return i}})}}]);