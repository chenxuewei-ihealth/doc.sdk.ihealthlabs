"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,g=p["".concat(l,".").concat(u)]||p[u]||v[u]||i;return t?a.createElement(g,c(c({ref:n},d),{},{components:t})):a.createElement(g,c({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"HS4S",sidebar_position:4},c=void 0,o={unversionedId:"android/scale/hs4s",id:"android/scale/hs4s",title:"HS4S",description:"WorkFlow",source:"@site/docs/android/scale/hs4s.md",sourceDirName:"android/scale",slug:"/android/scale/hs4s",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs4s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/scale/hs4s.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"HS4S",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HS4",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs4"},next:{title:"HS5",permalink:"/ihealthlabs-sdk-docs/docs/android/scale/hs5"}},l={},s=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for HS4S devices",id:"2scan-for-hs4s-devices",level:3},{value:"3.Connect to HS4S devices",id:"3connect-to-hs4s-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get offline data",id:"get-offline-data",level:3},{value:"Start a online measurement",id:"start-a-online-measurement",level:3},{value:"Disconnect the HS4S",id:"disconnect-the-hs4s",level:3}],d={toc:s};function v(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect HS4S scale.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"HS4S support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType,\n                                String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_HS4S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-hs4s-devices"},"2.Scan for HS4S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.HS4);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { \n        Log.i(TAG, "onScanDevice - mac:" + mac + " - deviceType:" + deviceType + " - rssi:" + rssi + " - manufactorData:" + manufactorData);\n    }\n}\n')),(0,r.kt)("h3",{id:"3connect-to-hs4s-devices"},"3.Connect to HS4S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_HS4S)\nHs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-offline-data"},"Get offline data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs4sControl control = iHealthDevicesManager.getInstance().getHs4sControl(mDeviceMac);\ncontrol.getOfflineData() \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_HISTORICAL_DATA_COMPLETE_HS.equals(action)) {\n            try {\n                JSONArray historyArr = new JSONArray(message);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    String measureTs = obj.getString(HsProfile.MEASUREMENT_DATE_HS);\n                    String weight    = obj.getString(HsProfile.WEIGHT_HS);\n                 \n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"start-a-online-measurement"},"Start a online measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs2Control control = iHealthDevicesManager.getInstance().getHs2Control(mDeviceMac);\n/*\n * @param unit 1 kg; 2 lb; 3 st\n * @param userId user identify number\n */\ncontrol.measureOnline(int unit, int userId)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (HsProfile.ACTION_LIVEDATA_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.DATA_LIVEDATA_HSWEIGHT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (HsProfile.ACTION_ONLINE_RESULT_HS.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                String weight = obj.getString(HsProfile.WEIGHT_HS);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } \n    }\n}\n")),(0,r.kt)("h3",{id:"disconnect-the-hs4s"},"Disconnect the HS4S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Hs4sControl control = iHealthDevicesManager.getInstance().getHs4Control(mDeviceMac);\ncontrol.disconnect();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n     @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData) { \n        \n    }\n}\n")))}v.isMDXComponent=!0}}]);