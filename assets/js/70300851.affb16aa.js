"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9512],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return v}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=s(n),v=i,p=d["".concat(c,".").concat(v)]||d[v]||u[v]||r;return n?a.createElement(p,o(o({ref:t},g),{},{components:n})):a.createElement(p,o({ref:t},g))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"BG5S",sidebar_position:4},c=void 0,s={unversionedId:"android/blood_glucose/bg5s",id:"android/blood_glucose/bg5s",title:"BG5S",description:"WorkFlow",source:"@site/docs/android/blood_glucose/bg5s.md",sourceDirName:"android/blood_glucose",slug:"/android/blood_glucose/bg5s",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_glucose/bg5s",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/android/blood_glucose/bg5s.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"BG5S",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"BG5",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_glucose/bg5"},next:{title:"PO1",permalink:"/ihealthlabs-sdk-docs/docs/android/blood_oxygen/po1"}},g={},u=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for BG5S devices",id:"2scan-for-bg5s-devices",level:3},{value:"3.Connect to BG5S devices",id:"3connect-to-bg5s-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Get status information from BG5S",id:"get-status-information-from-bg5s",level:3},{value:"Set offline measurement mode",id:"set-offline-measurement-mode",level:3},{value:"Set time to BG5 device",id:"set-time-to-bg5-device",level:3},{value:"Set unit to BG5S device",id:"set-unit-to-bg5s-device",level:3},{value:"Set BG5S display mode",id:"set-bg5s-display-mode",level:3},{value:"Delete used strip of BG5S",id:"delete-used-strip-of-bg5s",level:3},{value:"Delete offline data of BG5S",id:"delete-offline-data-of-bg5s",level:3},{value:"Get offline data from BG5S",id:"get-offline-data-from-bg5s",level:3},{value:"Start measure",id:"start-measure",level:3},{value:"Close Bluetooth",id:"close-bluetooth",level:3},{value:"Correct the measurement time of the offline data according to the flag and return in format JSON String",id:"correct-the-measurement-time-of-the-offline-data-according-to-the-flag-and-return-in-format-json-string",level:3}],d={toc:u};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect BG5S blood pressure monitor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"BG5S only support online measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    \n    @Override\n    public void onScanDevice(String mac, String deviceType, int rssi, Map manufactorData) { }\n\n    @Override\n    public void onDeviceConnectionStateChange(String mac, String deviceType, int status, int errorID, Map manufactorData){ }\n\n    @Override\n    public void onScanError(String reason, long latency) { }\n\n    @Override\n    public void onScanFinish() { }\n\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) { }\n}\nint callbackId = iHealthDevicesManager.getInstance().registerClientCallback(miHealthDevicesCallback);\niHealthDevicesManager.getInstance().addCallbackFilterForDeviceType(callbackId, iHealthDevicesManager.TYPE_BG5S);\niHealthDevicesManager.getInstance().addCallbackFilterForAddress(callbackId, String... macs)\n")),(0,r.kt)("h3",{id:"2scan-for-bg5s-devices"},"2.Scan for BG5S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().startDiscovery(DiscoveryTypeEnum.BG5S);\n")),(0,r.kt)("h3",{id:"3connect-to-bg5s-devices"},"3.Connect to BG5S devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'iHealthDevicesManager.getInstance().connectDevice("", mac, iHealthDevicesManager.TYPE_BG5S)\nBg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n')),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"get-status-information-from-bg5s"},"Get status information from BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getStatusInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_GET_STATUS_INFO.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int batteryLevel = obj.getInt(Bg5sProfile.INFO_BATTERY_LEVEL);\n                String timeStr = obj.getString(Bg5sProfile.INFO_TIME);\n                int timeZone = obj.getInt(Bg5sProfile.INFO_TIMEZONE);\n                int usedStrip = obj.getInt(Bg5sProfile.INFO_USED_STRIP);\n                int offlineDataNum = obj.getInt(Bg5sProfile.INFO_OFFLINE_DATA_NUM);\n                int mCodeVersionBlood = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_BLOOD);\n                int mCodeVersionCTL = obj.getInt(Bg5sProfile.INFO_CODE_VERSION_CTL);\n                int unit = obj.getInt(Bg5sProfile.INFO_UNIT);\n\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }    \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"set-offline-measurement-mode"},"Set offline measurement mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getStatusInfo();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_OFFLINE_MEASUREMENT_MODE.equals(action)) { }\n    } \n}\n")),(0,r.kt)("h3",{id:"set-time-to-bg5-device"},"Set time to BG5 device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.setTime(Date date, float timeZone);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_TIME.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"set-unit-to-bg5s-device"},"Set unit to BG5S device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param unitType the unit type set to BG5S. Can be one of\n *                 {@link Bg5sProfile#UNIT_MMOL}  or\n *                 {@link Bg5sProfile#UNIT_MG}\n */\ncontrol.setUnit(int type);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_UNIT.equals(action)) {\n            \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"set-bg5s-display-mode"},"Set BG5S display mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param unitType the unit type set to BG5S. Can be one of\n *                 {@link Bg5sProfile#UNIT_MMOL}  or\n *                 {@link Bg5sProfile#UNIT_MG}\n */\ncontrol.setDisplayMode(boolean mode);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_SET_DISPLAY_MODE.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"delete-used-strip-of-bg5s"},"Delete used strip of BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.deleteUsedStrip();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"delete-offline-data-of-bg5s"},"Delete offline data of BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.deleteOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_DELETE_USED_STRIP.equals(action)) {\n           \n        } \n    } \n}\n")),(0,r.kt)("h3",{id:"get-offline-data-from-bg5s"},"Get offline data from BG5S"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.getOfflineData();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_GET_OFFLINE_DATA.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                JSONArray historyArr = obj.getgetJSONArray(Bg5sProfile.OFFLINE_DATA);\n                for (int i = 0; i < historyArr.length(); i++) {\n                    JSONObject obj = historyArr.getJSONObject(i);\n                    boolean dateStr = obj.getBoolean(Bg5sProfile.DATA_TIME_PROOF);\n                    int value = obj.getString(Bg5sProfile.DATA_VALUE);\n                    String time = obj.getString(Bg5sProfile.DATA_MEASURE_TIME);\n                    String timezone = obj.getString(Bg5sProfile.DATA_MEASURE_TIMEZONE);\n                }\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"start-measure"},"Start measure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n/**\n * @param measureType the measure type set to BG5S.Can be one of\n *                    {@link Bg5sProfile#MEASURE_BLOOD}  or\n *                    {@link Bg5sProfile#MEASURE_CTL}\n */\ncontrol.startMeasure(int measureType);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_START_MEASURE.equals(action)) {\n            Log.i("start a measure")\n\n        } else if (Bg5sProfile.ACTION_STRIP_IN.equals(action)) {\n            Log.i("test strip in")\n\n        } else if (Bg5sProfile.ACTION_GET_BLOOD.equals(action)) {\n            Log.i("test drop blood")\n\n        } else if (Bg5sProfile.ACTION_RESULT.equals(action)) {\n            try {\n                JSONObject obj = new JSONObject(message);\n                int value = obj.getInt((Bg5sProfile.RESULT_VALUE);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }\n        } else if (Bg5sProfile.ACTION_STRIP_OUT.equals(action)) {\n            Log.i("test strip out")\n        }\n    } \n}\n')),(0,r.kt)("h3",{id:"close-bluetooth"},"Close Bluetooth"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\ncontrol.closeBluetooth();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Return value\nprivate iHealthDevicesCallback miHealthDevicesCallback = new iHealthDevicesCallback() {\n    @Override\n    public void onDeviceNotify(String mac, String deviceType, String action, String message) {\n        if (Bg5sProfile.ACTION_CLOSE_BLUETOOTH.equals(action)) {\n            \n        }\n    } \n}\n")),(0,r.kt)("h3",{id:"correct-the-measurement-time-of-the-offline-data-according-to-the-flag-and-return-in-format-json-string"},"Correct the measurement time of the offline data according to the flag and return in format JSON String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Bg5sControl control = iHealthDevicesManager.getInstance().getBg5sControl(mDeviceMac);\n\n// Return value\nString message = control.adjustOfflineData(String timeString, String originData);\n")))}v.isMDXComponent=!0}}]);