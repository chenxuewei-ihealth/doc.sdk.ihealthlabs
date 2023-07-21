"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"PO3",sidebar_position:2},i=void 0,c={unversionedId:"ios/blood_oxygen/po3",id:"ios/blood_oxygen/po3",title:"PO3",description:"WorkFlow",source:"@site/docs/ios/blood_oxygen/po3.md",sourceDirName:"ios/blood_oxygen",slug:"/ios/blood_oxygen/po3",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_oxygen/po3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_oxygen/po3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PO3",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"PO1",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_oxygen/po1"},next:{title:"NT13B",permalink:"/ihealthlabs-sdk-docs/docs/ios/thermometer/nt13b"}},s={},l=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for PO3 devices",id:"2scan-for-po3-devices",level:3},{value:"3.Connect to PO3 devices",id:"3connect-to-po3-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Sync time",id:"sync-time",level:3},{value:"Get the PO3 battery status",id:"get-the-po3-battery-status",level:3},{value:"Restore Historical data",id:"restore-historical-data",level:3},{value:"Start real-time measurement",id:"start-real-time-measurement",level:3},{value:"Disconnect the PO3",id:"disconnect-the-po3",level:3}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"workflow"},"WorkFlow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scan and connect PO3 device.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"PO3 support online measurement and offline measurement."))),(0,r.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,r.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:PO3ConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:PO3DisConnectNoti object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:PO3Discover object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnectFail:) name:PO3ConnectFailed object:nil];\n            \n[PO3Controller shareIHPO3Controller];\n")),(0,r.kt)("h3",{id:"2scan-for-po3-devices"},"2.Scan for PO3 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[[ScanDeviceController commandGetInstance] commandScanDeviceType:HealthDeviceType_PO3];\n")),(0,r.kt)("h3",{id:"3connect-to-po3-devices"},"3.Connect to PO3 devices"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"[[ConnectDeviceController commandGetInstance] commandContectDeviceWithDeviceType:HealthDeviceType_PO3 andSerialNub:deviceMac];\n")),(0,r.kt)("h2",{id:"api-reference"},"API reference"),(0,r.kt)("h3",{id:"sync-time"},"Sync time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Restore Sync time\n * @param syncTimeBlock Sync completed. Yes = Success, No = Fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3SyncTime:(DisposePO3SyncTimeBlock)syncTimeBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,r.kt)("h3",{id:"get-the-po3-battery-status"},"Get the PO3 battery status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Query power status\n * @param batteryBlock Battery\uff0cfrom 0\uff5e100\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3GetDeviceBattery:(DisposePO3BatteryBlock)batteryBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,r.kt)("h3",{id:"restore-historical-data"},"Restore Historical data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Restore Historical data\n * @param offlineDataCount Number of historical offline data measurements.\n * @param offlineData date, spo2, bpm, and wave.\n * @param offlineWaveData Pulse intensity, corresponding key: wave\n * @param finishUpload End transmission of data, yes for success, no for fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3OfflineDataCount:(DisposePO3OfflineDataCount)offlineDataCount withOfflineData:(DisposePO3OfflineData)offlineData withOfflineWaveData:(DisposePO3OfflineWaveData)offlineWaveData withFinishMeasure:(DisposePO3FinishUpload)finishUpload  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,r.kt)("h3",{id:"start-real-time-measurement"},"Start real-time measurement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Restore Real-time measurements\n * @param startMeasure  Start measurement, Return no for fail, return yes for success.\n * @param measureData  SpO2 values, including SpO2, pulse rate, pulse intensity. Corresponding keys are spo2, bpm, wave, and pi.\n * @param finishMeasure  Finish measurement. No for fail, yes for success.\n * @param errorBlock Communication error codes\n */\n\n-(void)commandPO3StartMeasure:(DisposePO3StartMeasure)startMeasure withMeasureData:(DisposePO3MeasureData)measureData  withFinishMeasure:(DisposePO3FinishMeasure)finishMeasure  withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")),(0,r.kt)("h3",{id:"disconnect-the-po3"},"Disconnect the PO3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Disconnect connection\n * @param disconnectBlock  yes = success, no = fail.\n * @param errorBlock Communication error codes\n */\n-(void)commandPO3Disconnect:(DisposePO3DisconnectBlock)disconnectBlock withErrorBlock:(DisposePO3ErrorBlock)errorBlock;\n")))}p.isMDXComponent=!0}}]);