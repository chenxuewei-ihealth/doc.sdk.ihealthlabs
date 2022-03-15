"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[2531],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=s(t),u=r,g=v["".concat(l,".").concat(u)]||v[u]||d[u]||i;return t?a.createElement(g,c(c({ref:n},p),{},{components:t})):a.createElement(g,c({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=v;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},4271:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),c=["components"],o={title:"BP7S",sidebar_position:5},l=void 0,s={unversionedId:"blood_pressure/bp7s",id:"version-2.9.8/blood_pressure/bp7s",isDocsHomePage:!1,title:"BP7S",description:"WorkFlow",source:"@site/android_versioned_docs/version-2.9.8/blood_pressure/bp7s.md",sourceDirName:"blood_pressure",slug:"/blood_pressure/bp7s",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/blood_pressure/bp7s",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/android_versioned_docs/version-2.9.8/blood_pressure/bp7s.md",tags:[],version:"2.9.8",sidebarPosition:5,frontMatter:{title:"BP7S",sidebar_position:5},sidebar:"version-2.9.9/mainSidebar",previous:{title:"BP7",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/blood_pressure/bp7"},next:{title:"KN550",permalink:"/ihealthlabs-sdk-docs/android/2.9.8/blood_pressure/kn550"}},p=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for BP7S devices",id:"2scan-for-bp7s-devices",children:[]},{value:"3.Connect to BP7S devices",id:"3connect-to-bp7s-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the device battery",id:"get-the-device-battery",children:[]},{value:"Set the BP5S display unit",id:"set-the-bp5s-display-unit",children:[]},{value:"Get the number of history data",id:"get-the-number-of-history-data",children:[]},{value:"Get history data",id:"get-history-data",children:[]},{value:"Disconnect BP7S device",id:"disconnect-bp7s-device",children:[]}]}],d={toc:p};function v(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect BP7S blood pressure monitor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"BP7S support offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BP7S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,i.kt)("h3",{id:"2scan-for-bp7s-devices"},"2.Scan for BP7S devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BP7S);\n")),(0,i.kt)("h3",{id:"3connect-to-bp7s-devices"},"3.Connect to BP7S devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BP7S)\n\nBp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);\n')),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-device-battery"},"Get the device battery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);\ncontrol.getBattery();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_BATTERY_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int battery = obj.getInt(BpProfile.BATTERY_BP);\n                int status = obj.getInt(BpProfile.BATTERY_STATUS);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"set-the-bp5s-display-unit"},"Set the BP5S display unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp5sControl control = iHealthDevicesManager.getInstance().getBp5sControl(mDeviceMac);\n/**\n * BpProfile.STATUS_UNIT_DISPLAY_MMHG\n * BpProfile.STATUS_UNIT_DISPLAY_KPA\n */\ncontrol.setUnit(int type);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_SHOW_UNIT_DISPLAY.equals(action)) {\n            \n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-the-number-of-history-data"},"Get the number of history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);\ncontrol.getOfflineNum();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int count = obj.getInt(BpProfile.HISTORICAL_NUM_BP);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"get-history-data"},"Get history data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (BpProfile.ACTION_HISTORICAL_NUM_BP.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String dateStr = obj.getString(BpProfile.MEASUREMENT_DATE_BP);\n                    int sys = obj.getString(BpProfile.HIGH_BLOOD_PRESSURE_BP);\n                    int dia = obj.getString(BpProfile.LOW_BLOOD_PRESSURE_BP);\n                    int pulse = obj.getString(BpProfile.PULSE_BP);\n                    int ahr = obj.getString(BpProfile.MEASUREMENT_AHR_BP);\n                    int hsd = obj.getString(BpProfile.MEASUREMENT_HSD_BP);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,i.kt)("h3",{id:"disconnect-bp7s-device"},"Disconnect BP7S device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Bp7sControl control = iHealthDevicesManager.getInstance().getBp7sControl(mDeviceMac);\ncontrol.disconnect();\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}v.isMDXComponent=!0}}]);