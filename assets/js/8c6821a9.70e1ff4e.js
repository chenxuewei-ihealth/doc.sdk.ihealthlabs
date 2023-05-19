"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5611],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=r,v=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?o.createElement(v,a(a({ref:n},d),{},{components:t})):o.createElement(v,a({ref:n},d))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={title:"BG1A",sidebar_position:5},a=void 0,c={unversionedId:"ios/blood_glucose/bg1a",id:"ios/blood_glucose/bg1a",title:"BG1A",description:"BG1A",source:"@site/docs/ios/blood_glucose/bg1a.md",sourceDirName:"ios/blood_glucose",slug:"/ios/blood_glucose/bg1a",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg1a",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_glucose/bg1a.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"BG1A",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"BG5S",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg5s"},next:{title:"PO1",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_oxygen/po1"}},s={},l=[{value:"BG1A",id:"bg1a",level:2},{value:"Device introduction",id:"device-introduction",level:3},{value:"Related classes and APIs",id:"related-classes-and-apis",level:3},{value:"ScanDeviceController",id:"scandevicecontroller",level:4},{value:"ConnectDeviceController",id:"connectdevicecontroller",level:4},{value:"BG1AController",id:"bg1acontroller",level:4},{value:"BG1A",id:"bg1a-1",level:4},{value:"BGMacroFile",id:"bgmacrofile",level:4},{value:"Listen for notifications",id:"listen-for-notifications",level:3}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bg1a"},"BG1A"),(0,r.kt)("h3",{id:"device-introduction"},"Device introduction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"BG1A is a low-power Bluetooth blood glucose meter with indicator lights, but no screen and buttons."),(0,r.kt)("li",{parentName:"ol"},"The way to start up is to insert the blood glucose test strip and start up."),(0,r.kt)("li",{parentName:"ol"},"After the device is turned on, it starts to broadcast Bluetooth, which can be scanned and connected by the App."),(0,r.kt)("li",{parentName:"ol"},"After the blood glucose measurement is completed, or the test strip is pulled out, the device will shut down and the Bluetooth will be disconnected.")),(0,r.kt)("h3",{id:"related-classes-and-apis"},"Related classes and APIs"),(0,r.kt)("h4",{id:"scandevicecontroller"},"ScanDeviceController"),(0,r.kt)("p",null,"A class that controls device scanning, used to start and stop device scanning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"\n// Start to scan BG1A. After scanning a new device, it will send a BG1ADiscover notification. The caller needs to monitor this notification. A scan will not repeatedly send the discovery notification of the same device.\n[[ScanDeviceController commandGetInstance]commandScanDeviceType:HealthDeviceType_BG1A];\n// Stop scanning BG1A\n[[ScanDeviceController commandGetInstance]commandStopScanDeviceType:HealthDeviceType_BG1A];\n")),(0,r.kt)("h4",{id:"connectdevicecontroller"},"ConnectDeviceController"),(0,r.kt)("p",null,"Classes that control device connections"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"// Start to connect to BG1A, the caller needs to listen to two notifications to get the connection result: successful connection BG1AConnectNoti and connection failure BG1AConnectFailed\n[[ConnectDeviceController commandGetInstance]commandContectDeviceWithDeviceType:HealthDeviceType_BG1A andSerialNub:MAC];\n")),(0,r.kt)("h4",{id:"bg1acontroller"},"BG1AController"),(0,r.kt)("p",null,"BG1A Manager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"// Singleton initialization, which needs to be called before scanning BG1A, otherwise you cannot receive related notifications\n[BG1AController shareIHBG1AController];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"// Get an array of BG1A devices in all connections\n- (NSArray *)getAllCurrentBG1AInstace;\n// Obtain the BG1A instance object according to the MAC address\n- (nullable BG1A *)getInstanceWithMac:(NSString*)mac;\n")),(0,r.kt)("h4",{id:"bg1a-1"},"BG1A"),(0,r.kt)("p",null,"used to call the API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},'/// Get device information\n/// - Parameters:\n///   - success: successful callback,  battery:14   protocol:com.jiuan.BGV44 accessoryName:BG1A firmwareVersion:1.0.0 hardwareVersion:3.0.0 manufaturer:iHealth  modelNumber:BG1A 11070\n///   - fail: error callback, see BG1ADeviceError\n- (void)commandGetDeviceInfo:(BG1ASuccessBlock)success\n                     fail:(BG1AErrorBlock)fail;\n\n/// Change measure type. Default is BG1AMeasureType_BloodSugar.\n/// - Parameters:\n///   - type: Measure Type, see BG1AMeasureType\n///   - success: successful callback\n///   - fail: error callback. If the device collects enough blood and starts to measure, you cannot set measure type, and you will receive an error: BG1ADeviceError_RejectChangeMeasureType\n- (void)commandSetMeasureType:(BG1AMeasureType)type\n                      success:(BG1ASuccessBlock)success\n                         fail:(BG1AErrorBlock)fail;\n/// synchronised time\n/// - Parameters:\n///   - success: successful callback\n///   - fail: error callback, see BG1ADeviceError\n- (void)commandSyncTime:(BG1ASuccessBlock)success\n                     fail:(BG1AErrorBlock)fail;\n\n/// Sync History\n/// - Parameters:\n///   - historyArray: successful callback    (\n///{\n///MAC = "004D3201D6CD";\n///isResultNeedCalibrate = 0;\n///measureTs = 2023-05-19 14:28:51 +0000;\n///type = 0;\n///value = 200;\n///metaData = <BG1AMeasureMetaData: 0x281a89f20>;\n///errorCode=0;    If it is not 0, it means that it is a wrong result, and the subsequent blood sugar value is invalid\n///}\n///)\n///   - fail: error callback, see BG1ADeviceError\n- (void)commandSyncHistory:(BG1AHistoryBlock)historyArray\n                     fail:(BG1AErrorBlock)fail;\n\n/// Delete History\n/// - Parameters:\n///   - success: successful callback\n///   - fail: error callback, see BG1ADeviceError\n- (void)commandDeleteHistory:(BG1ASuccessBlock)success\n                     fail:(BG1AErrorBlock)fail;\n\n/**\n \n During the measurement process, please listen to the following notifications to obtain the measurement status and results of the BG1A device\n\n1) kBG1ANotiNameStripStatus\n  \n The device collects enough blood to measure, and the result will be post in a few seconds. The notification\'s userInfo:\n  {\n     MAC = "385B44DDC723";\n     Status = 1; Test strip status value: 0: The test strip is inserted, and blood can be dripped 1: The test strip is removed 2: Blood sucking starts 3: The blood sucking volume is insufficient for 1 4: The blood sucking volume is insufficient for 1 state for more than 5 seconds 5: The blood sucking volume is insufficient for 2 6: The blood sucking is completed\n  \n  }\n  Tips:\n  It will be posted immediately after the bluetooth is connected. Because only after strip in, the device is ready to connect bluetooth.\n\n 2)  kBG1ANotiNameBloodIn\n The device collects enough blood to measure, and the result will be post in a few seconds. The notification\'s userInfo:\n {\n    MAC = "385B44DDC723";\n }\n 3)  kBG1ANotiNameResult\n The device sends the measurement result (the value is in the unit mg/dL). The notification\'s userInfo:\n {\n    MAC = "385B44DDC723";\n    Value = 80;\n }\n**/\n\n\n/// Active disconnect a device from app\n- (void)commandDisconnectDevice;\n@end\n\nNS_ASSUME_NONNULL_END\n')),(0,r.kt)("h4",{id:"bgmacrofile"},"BGMacroFile"),(0,r.kt)("p",null,"Header files related to blood glucose devices, including notification names (device discovery, connection success, connection failure, connection disconnection), error code enumeration, measurement type enumeration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},'#pragma mark - BG1A\n/*\n BG1A Notification Name\n */\n /* BG1ADiscover userInfo\n {\n    RSSI = -60;\n    DeviceName = "BG1A";\n    SerialNumber = "385B44DDC723";\n}\n */\n#define BG1ADiscover        @"BG1ADiscover"\n/* BG1AConnectFailed userInfo\n{\n     DeviceName = "BG1A";\n     SerialNumber = "385B44DDC723";\n     Error = 0; // 0: connect ble fail 1: auth fail 2: bluetooth is not available\n     MAC = "385B44DDC723";\n     ErrorMessage = ""; //\n }\n*/\n#define BG1AConnectFailed   @"BG1AConnectFailed"\n/* BG1AConnectNoti userInfo\n{\n    ID = "EDA03FE5-0F75-4950-A036-111D43B6394B";\n    SerialNumber = "385B44DDC723";\n    ProtocolString = "com.jiuan.BGV44";\n    DeviceName = "BG1A";\n    FirmwareVersion = "1.0.0";\n    HardwareVersion = "3.0.0";\n}\n*/\n#define BG1AConnectNoti     @"BG1AConnectNoti"\n/* BG1ADisConnectNoti userInfo\n{\n    ProtocolString = "com.jiuan.BGV44";\n    ID = "EDA03FE5-0F75-4950-A036-111D43B6394B";\n    SerialNumber = "385B44DDC723";\n    DeviceName = BG1A;\n}\n*/\n#define BG1ADisConnectNoti  @"BG1ADisConnectNoti"\n\n/*\n BG1A Error Code\n */\ntypedef NS_ENUM(int,BG1ADeviceError) {\n    BG1ADeviceError_ResultIsZero = 0x01,\n    BG1ADeviceError_LowCurrent = 0x02,\n    BG1ADeviceError_AlgorithmError = 0x03,\n    BG1ADeviceError_BloodTimeout = 0x04,\n    BG1ADeviceError_XM1Error = 0x05,\n    BG1ADeviceError_SelfCheckError = 0x0A,\n    BG1ADeviceError_StripTypeCannotRecognize = 0x0B,\n    BG1ADeviceError_StripUsedError = 0x0C,\n    BG1ADeviceError_LowBattery = 0x0E,\n    BG1ADeviceError_HighBattery = 0x0F,\n    BG1ADeviceError_LowTemperature = 0x10,\n    BG1ADeviceError_HighTemperature = 0x11,\n    BG1ADeviceError_FlashError = 0x12,\n    BG1ADeviceError_NoCheckFlagError1 = 0x14,\n    BG1ADeviceError_NoCheckFlagError2 = 0x15,\n    BG1ADeviceError_NoStripCheckFlag = 0x16,\n    BG1ADeviceError_RejectChangeMeasureType = 0xF0,\n    BG1ADeviceError_ParameterError = 400,\n    BG1ADeviceError_ResultIsTooLow = 401,\n    BG1ADeviceError_ResultIsTooHigh = 402,\n};\n\ntypedef NS_ENUM(uint8_t,BG1AMeasureType) {\n    BG1AMeasureType_BloodSugar  = 0x00,\n    BG1AMeasureType_CTL         = 0x01,\n};\n')),(0,r.kt)("h3",{id:"listen-for-notifications"},"Listen for notifications"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objective-c"},"[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onDiscoverNewDevice:) name:BG1ADiscover object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onConnectNewDevice:) name:BG1AConnectNoti object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onFailConnectNewDevice:) name:BG1AConnectFailed object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(onDeviceDisconnect:) name:BG1ADisConnectNoti object:nil];\n\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleStripStatusNoti:) name:kBG1ANotiNameStripStatus object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleBloodInNoti:) name:kBG1ANotiNameBloodIn object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleResultNoti:) name:kBG1ANotiNameResult object:nil];\n[NSNotificationCenter.defaultCenter addObserver:self selector:@selector(handleErrorNoti:) name:kBG1ANotiNameError object:nil];\n\n")))}u.isMDXComponent=!0}}]);