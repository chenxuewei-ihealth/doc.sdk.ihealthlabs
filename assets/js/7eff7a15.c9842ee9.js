"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1208],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>m});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=l(e.components);return r.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,a(a({ref:o},d),{},{components:t})):r.createElement(f,a({ref:o},d))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},121:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const i={title:"BG1",sidebar_position:1},a=void 0,s={unversionedId:"ios/blood_glucose/bg1",id:"ios/blood_glucose/bg1",title:"BG1",description:"WorkFlow",source:"@site/docs/ios/blood_glucose/bg1.md",sourceDirName:"ios/blood_glucose",slug:"/ios/blood_glucose/bg1",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/blood_glucose/bg1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BG1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HS2S Pro",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs2s pro"},next:{title:"BG1S",permalink:"/ihealthlabs-sdk-docs/docs/ios/blood_glucose/bg1s"}},c={},l=[{value:"WorkFlow",id:"workflow",level:2},{value:"Connection to device",id:"connection-to-device",level:2},{value:"1.Listen to device notify",id:"1listen-to-device-notify",level:3},{value:"2.Scan for BG1 devices",id:"2scan-for-bg1-devices",level:3},{value:"3.Connect to BG1 devices",id:"3connect-to-bg1-devices",level:3},{value:"API reference",id:"api-reference",level:2},{value:"Parse bottle Info of the QRCode",id:"parse-bottle-info-of-the-qrcode",level:3},{value:"Send code to BG1 device",id:"send-code-to-bg1-device",level:3}],d={toc:l};function u(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflow"},"WorkFlow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scan and connect BG1 blood glucose monitor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"BG1 only support online measurement."))),(0,n.kt)("h2",{id:"connection-to-device"},"Connection to device"),(0,n.kt)("h3",{id:"1listen-to-device-notify"},"1.Listen to device notify"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceConnect:) name:kNotificationNameNeedAudioPermission object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDisConnect:) name:kNotificationNameBG1DidDisConnect object:nil];\n\n[[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(DeviceDiscover:) name:kNotificationNameAudioDeviceInsert object:nil];\n\n[[BG1Controller shareBG1Controller] initBGAudioModule];\n")),(0,n.kt)("h3",{id:"2scan-for-bg1-devices"},"2.Scan for BG1 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"[[BG1Controller shareBG1Controller] initBGAudioModule];\n")),(0,n.kt)("h3",{id:"3connect-to-bg1-devices"},"3.Connect to BG1 devices"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Start connect BG1 and get the connection status.\n * @param BG1Model the BG1 type.\n * @param discover This block returns means blood glucose meter plugged in.\n * @param IDPSInfo  This block returns the IDPS of the meter, this will be operated for the first time when the app talks to the meter.\n * @param connect This block returns the connection status, the connection of the BG meter is regular , the measurement could be processed.\n * @param error block returns error codes,please refer to error codes list in BGMacroFile.\n * @Notice  Notice: Using this method should be placed kNotificationNameNeedAudioPermission callback\n */\n- (void)commandBG1DeviceModel:(NSNumber *)BG1Model withDiscoverBlock:(DisposeBG1DiscoverBlock)discover withDiscoverBlock:(DisposeBG1IDPSBlock)IDPSInfo withConnectBlock:(DisposeBG1ConnectBlock)connect withErrorBlock:(DisposeBG1ErrorBlock)error;\n")),(0,n.kt)("h2",{id:"api-reference"},"API reference"),(0,n.kt)("h3",{id:"parse-bottle-info-of-the-qrcode"},"Parse bottle Info of the QRCode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'/**\n Analyze code include bottleID\uff0cDueDate and the number of strips. Only Available for GOD Code\n \n @param encodeString The code String gets by scanning the QR code.\n @return return a dictionary contains keys such as @"BottleID",@"StripNum",@"DueDate"; return nil if input parameter is GDH code or code is invalid.\n */\n-(NSDictionary *)codeStripStrAnalysis:(NSString *)encodeString;\n')),(0,n.kt)("h3",{id:"send-code-to-bg1-device"},"Send code to BG1 device"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Establish connection and start BG measurement.(New)\n * @param measureMode Set the measure test type,BGMeasureMode_Blood is Blood Test,BGMeasureMode_NoBlood is CTL Test.\n * @param codeMode Set the code type,BGCodeMode_GOD is GOD,BGCodeMode_GDH is GDH.\n * @param codeString The code String gets by scanning the QR code.\n * @param sendCodeResult   If the QR code is accepted, yes means accepted, no means deny.\n * @param stripIn The strips slide into the BG meter.\n * @param blood  The blood drop has beed sensed from the strip.\n * @param measureResult  Returns the measurement by the unit of mg/dL, range from 20-600.\n * @param stripOut  The strip has been pulled out.\n * @param error  This block returns error codes,please refer to error codes list in BGMacroFile.\n */\n- (void)commandBG1MeasureMode:(BGMeasureMode)measureMode withCodeMode:(BGCodeMode)codeMode withCodeString:(NSString *)codeString withSendCodeResultBlock:(DisposeBG1SendCodeResultBlock)sendCodeResult withStripInBlock:(DisposeBGStripInBlock)stripIn withBloodBlock:(DisposeBGBloodBlock)blood withResultBlock:(DisposeBGResultBlock)measureResult withStripOutBlock:(DisposeBGStripOutBlock)stripOut withErrorBlock:(DisposeBG1ErrorBlock)error;\n")))}u.isMDXComponent=!0}}]);