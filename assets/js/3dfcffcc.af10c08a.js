"use strict";(self.webpackChunksdk_docs=self.webpackChunksdk_docs||[]).push([[9017],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1411:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={title:"HS2",sidebar_position:1},c=void 0,l={unversionedId:"scale/hs2",id:"version-2.7.7/scale/hs2",isDocsHomePage:!1,title:"HS2",description:"WorkFlow",source:"@site/ios_versioned_docs/version-2.7.7/scale/hs2.md",sourceDirName:"scale",slug:"/scale/hs2",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs2",editUrl:"https://github.com/chenxuewei-ihealth/ihealthlabs-sdk-docs/tree/main/ios_versioned_docs/version-2.7.7/scale/hs2.md",tags:[],version:"2.7.7",sidebarPosition:1,frontMatter:{title:"HS2",sidebar_position:1},sidebar:"version-1.33.x/mainSidebar",previous:{title:"KN926",permalink:"/ihealthlabs-sdk-docs/ios/blood_pressure/kd926"},next:{title:"HS2S",permalink:"/ihealthlabs-sdk-docs/ios/scale/hs2s"}},d=[{value:"WorkFlow",id:"workflow",children:[]},{value:"Connection to device",id:"connection-to-device",children:[{value:"1.Listen to device notify",id:"1listen-to-device-notify",children:[]},{value:"2.Scan for HS2 devices",id:"2scan-for-hs2-devices",children:[]},{value:"3.Connect to HS2 devices",id:"3connect-to-hs2-devices",children:[]}]},{value:"API reference",id:"api-reference",children:[{value:"Get the battery info",id:"get-the-battery-info",children:[]},{value:"Get offline data",id:"get-offline-data",children:[]},{value:"Specify Online Users",id:"specify-online-users",children:[]},{value:"Disconnect the HS2",id:"disconnect-the-hs2",children:[]}]}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan and connect HS2 scale.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"HS2 support online measurement and offline measurement."))),(0,i.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,i.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:HS2Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:HS2ConnectFailed object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:HS2ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:HS2DisConnectNoti object:nil];\n\n[HS2Controller shareIHHs2Controller];\n")),(0,i.kt)("h3",{id:"2scan-for-hs2-devices"},"2.Scan for HS2 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_HS2];\n")),(0,i.kt)("h3",{id:"3connect-to-hs2-devices"},"3.Connect to HS2 devices"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_HS2 andSerialNub:deviceMac];\n")),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("h3",{id:"get-the-battery-info"},"Get the battery info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n *Get HS2 Battery\n\n * @param HS2battery HS2battery [Range:0\uff5e100]%\n * @param disposeErrorBlock error code\n */\n-(void)commandGetHS2Battery:(DisposeHS2BatteryBlock)HS2battery DiaposeErrorBlock:(DisposeHS2ErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"get-offline-data"},"Get offline data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Upload memory data\n \n * Return parameters:\n * @param  startTransmission -Start Memory transmission.\n * @param  progress         -Memory transmission progress\uff0c[Range:0.0\uff5e1.0].\n * @param  memorryData      -Record data including weight (kg), measurement time\uff0ccoordinated key\uff1aweight\uff0cdate.[Range of weight 0~180(kg)] \uff08If it exceeds 180kg, it will display er1 error, but the SDK interface will also return data. More than 180kg of data is not recommended.\uff09\n * @param  finishTransmission -Finish memory transmission.\n * @param  disposeErrorBlock  -Record the error code in uploading process.\n * Error code definition: refer to \u201derror\u201d : HS2 error instruction.\n */\n\n-(void)commandHS2TransferMemorryData:(StartHS2Transmission)startTransmission DisposeProgress:(DisposeProgress)progress MemorryData:(MemorryData)memorryData FinishTransmission:(FinishHS2Transmission)finishTransmission DisposeErrorBlock:(DisposeHS2ErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"specify-online-users"},"Specify Online Users"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n \n * Establish memory and measurement connection\n \n * Import parameter:\n * @param tempUnit  -Unit displayed on HS2: HSUnit_Kg\u3001HSUnit_LB\u3001HSUnit_ST\u3002\n \n * Return parameters:\n The measurement via SDK will be operated in the case of 1-4, and will be terminated if any of 5-8 occurs. The interface needs to be re-called after analyzing the return parameters.\n \n * @param unStableWeight     - Current weight, (Kg) [Value Range:0~180]\n * @param stableWeight       - Stable weight, (Kg) [Value Range:0~180]\n * @param disposeErrorBlock  - error code\n * Error code definition\uff1a\n *  refer to \u201cerror\u201d : HS2 error instruction.\n */\n\n-(void)commandHS2MeasureWithUint:(HSUnit)tempUnit Weight:(UnStableWeight)unStableWeight StableWeight:(StableWeight)stableWeight DisposeErrorBlock:(DisposeHS2ErrorBlock)disposeErrorBlock;\n")),(0,i.kt)("h3",{id:"disconnect-the-hs2"},"Disconnect the HS2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Disconnect current device\n */\n\n-(void)commandDisconnectDevice;\n")))}m.isMDXComponent=!0}}]);