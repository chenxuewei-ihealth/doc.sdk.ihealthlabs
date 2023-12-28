"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1010],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"HS6",sidebar_position:7},o=void 0,s={unversionedId:"ios/scale/hs6",id:"ios/scale/hs6",title:"HS6",description:"WorkFlow",source:"@site/docs/ios/scale/hs6.md",sourceDirName:"ios/scale",slug:"/ios/scale/hs6",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ios/scale/hs6.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"HS6",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HS5S",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs5s"},next:{title:"HS2S Pro",permalink:"/ihealthlabs-sdk-docs/docs/ios/scale/hs2s pro"}},l={},c=[{value:"WorkFlow",id:"workflow",level:2},{value:"API reference",id:"api-reference",level:2},{value:"Set HS6 wifi",id:"set-hs6-wifi",level:3},{value:"Binding QR Device",id:"binding-qr-device",level:3},{value:"unBind QR Device",id:"unbind-qr-device",level:3},{value:"Get open APItoken",id:"get-open-apitoken",level:3},{value:"sync Weight Unit",id:"sync-weight-unit",level:3},{value:"DownloadHS6Data",id:"downloadhs6data",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"workflow"},"WorkFlow"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"HS6 connects to the network by setting wifi")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The device does not support 5G wifi signal"))),(0,i.kt)("h2",{id:"api-reference"},"API reference"),(0,i.kt)("p",null,"+(iHealthHS6 *)shareIHHS6Controller;"),(0,i.kt)("h3",{id:"set-hs6-wifi"},"Set HS6 wifi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Set HS6 wifi\nImport parameter:\n @param password wifi password.\n \nReturn parameters:\n @param disposeHS6SuccessBlock set sucess\n @param disposeHS6FailBlock set faild\n @param disposeHS6EndBlock end set\n @param disposeHS6ErrorBlock error code\n */\n-(void)commandSetHS6WithPassWord:(NSString*)password disposeHS6SuccessBlock:(DisposeHS6SuccessBlock)disposeHS6SuccessBlock disposeHS6FailBlock:(DisposeHS6FailBlock)disposeHS6FailBlock  disposeHS6EndBlock:(DisposeHS6EndBlock)disposeHS6EndBlock disposeHS6ErrorBlock:(DisposeHS6ErrorBlock)disposeHS6ErrorBlock;\n")),(0,i.kt)("h3",{id:"binding-qr-device"},"Binding QR Device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n Binding QR Device\n When using the SDK for the first time, measuring method needs to be called to finish user verification.\n Import parameter:\n @param tempUser Properties included: clientID\uff0cclientSecret\uff0cuserAccount\uff0cheight\uff0cweight\uff0cisAthlete\uff0cbirthday\uff0csex.\n     clientID & clientSecret: the only identification for users of the SDK, requires registration from iHealth administrator, please email: daiqingquan@ihealthlabs.com.cn for more information.\n @param tempDeviceID device Mac\n Return parameters:\n  The measurement via SDK will be operated in the case of 1-4, and will be terminated if any of 5-8 occurs. The interface needs to be re-called after analyzing the return parameters.\n  Notice: when a new user registers via SDK, an \u2018iHealth disclaimer\u2019 will pop up automatically, and will require the user to agree in order to continue. SDK applications require an Internet connection; there is 10-day trial period if the SDK cannot connect to the internet, the SDK is fully functional during tryout period, but will be terminated without a working internet connection after 10 days.\n @param result Action = 1;(1:bind sucess 2\uff1afull user bind faild 3,:ts error bind faild 4 other),\n  BineNum=10\n  MAC\n  Position = 1;\uff08user in weight number\uff09\n  SetWifi=0\n  Status = 1;\uff081:binding 2\uff1aunbind\uff09\n  TS (time);\n @param error error code\n */\n-(void)cloudCommandUserBinedQRDeviceWithUser:(HealthUser *)tempUser  deviceID:(NSString *)tempDeviceID  binedResult:(BinedQRDeviceBlock)result binedError:(BinedQRDeviceErrorBlock)error;\n")),(0,i.kt)("h3",{id:"unbind-qr-device"},"unBind QR Device"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n unBind QR Device\n \nImport parameter:\n @param tempUser Properties included:clientID\uff0cclientSecret\uff0cuserAccount.\n \n @param tempDeviceID device Mac\nReturn parameters:\n @param result Action = 1;(1:bind sucess 2\uff1afull user bind faild 3,:ts error bind faild 4 other),\n  MAC\n  Status = 2;\uff081:binding 2\uff1aunbind\uff09\n  TS\n @param error error code\n */\n-(void)cloudCommandUserDisBinedQRDeviceForUser:(HealthUser *)tempUser withDeviceID:(NSString *)tempDeviceID disBinedResult:(DisBinedQRDeviceBlock)result disBinedError:(DisBinedQRDeviceErrorBlock)error;\n")),(0,i.kt)("h3",{id:"get-open-apitoken"},"Get open APItoken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n Get open APItoken\n Get AccessToken of HS6 user,and this method is a time consuming operation that cannot be calledin the main thread.\n After get AccessToken, you can call openApi(http://developer.ihealthlabs.com) to pull data form iHealth cloud.\n  Import parameter:\n @param tempUser Properties included: clientID\uff0cclientSecret\uff0cuserAccount.\n Return parameters:\n @param getOpenAPIBlock (NSDictionary){@link iHealthDeviceHs6Callback#onNotify(String, String, String, String)} and its\'\n  action is {@link #ACTION_HS6_GET_TOKEN}.\n \n  eg. {APIName="OpenApiActivity OpenApiBG OpenApiBP OpenApiFood OpenApiSleep OpenApiSpO2 OpenApiSport\n  OpenApiUserInfo OpenApiWeight",\n  AccessToken="9fuIPl3Bo6lqJfbYjXFjuPnNwNqVfxjiUE7cMCZSjrX22RJSoKf28jtIhI0v86wjV5GJ21bc6LvMNbfYG0QsZ7cYuUSO0EkaiFTST*GcjZvvTKxfEOmhQTfLXTXYAOA\n  wCoXlEs0DRqJaHZU5JS30ssyLNlqADPV9dlvWZitQmIfXjF6CSZM2SuRCD*bbbrqtwBsn*sC24OEoQCRpDau6wQ",\n  ClassParamentKey =     {\n  "client_id" = 2a8387e3f4e94407a3a767a72dfd52ea;\n  "client_para" = 99;\n  "client_secret" = fd5e845c47944a818bc511fb7edb0a77;\n  hash = d86bf92a851bf9211851d8e6827eea55;\n  username = "he@12.com";\n  };\n  "Expires":3672000,\n *"RefreshToken":"9fuIPl3Bo6lqJfbYjXFjuPnNwNqVfxjiUE7cMCZSjrX22RJSoKf28jtIhI0v86wjV5GJ21bc6LvMNbfYG0QsZ2TcvTQNInn85XdPIJRIe-9zB-eaY5utBVKmtLjJdEEmBlx5le5mT6oF7WBwVkwx*CUpSsdgUcyE3mG3FJnSHlajogaUSUgvMgmgUaVEMYzv4pcbCUltGNAMqJt5wwvBZA",\n * "RefreshTokenExpires":31536000,\n * "UUID":"",\n * "UserID":"51027f3e09a14a55917e687c628a0f13",\n * "UserNameKey"\n * "UserOpenID"\n * "UserRegion":"https:\\/\\/api.ihealthlabs.com.cn:8443",\n * "client_para":"random_str"}\n @param errorBlock HS6 error instruction.\n */\n-(void)commandHS6GetOpenAPITokenWithUser:(HealthUser *)tempUser withSuccessBlock:(DisposeHS6GetOpenAPISuccessBlock)getOpenAPIBlock withErrorBlock:(DisposeHS6GetOpenAPIErrorBlock)errorBlock;\n')),(0,i.kt)("h3",{id:"sync-weight-unit"},"sync Weight Unit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n sync Weight Unit\nImport parameter:\n @param tempUser Properties included:clientID\uff0cclientSecret\uff0cuserAccount.\n @param unit IHHS6SDKUnitWeight_kg,IHHS6SDKUnitWeight_lb,IHHS6SDKUnitWeight_oz\nReturn parameters:\n @param unitBlock YES or NO\n @param errorBlock error code\n */\n-(void)commandHS6WithUser:(HealthUser *)tempUser withSyncWeightUnit:(IHHS6SDKUnitWeight)unit withSuccessBlock:(DisposeHS6SyncWeightUnitSuccessBlock)unitBlock withErrorBlock:(DisposeHS6SyncWeightUnitErrorBlock)errorBlock;\n")),(0,i.kt)("h3",{id:"downloadhs6data"},"DownloadHS6Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n DownloadHS6Data\n \n Import parameter:\n @param tempUser Properties included: clientID\uff0cclientSecret\uff0cuserAccount\n clientID & clientSecret: the only identification for users of the SDK, requires registration from iHealth administrator, please email: sdk@ihealthlabs.com.cn for more information.\n @param downloadTS :From 1970, the number of ms, download data download all data after this point in time.\n @param PageSize :Number of downloads per data.\n Return parameters:\n @param getHS6Data  AllHS6Data\n \n @param blockHS6LastTSFromCloud  The last timestamp of the data download can be passed in at the next download, and all the data after the timestamp is downloaded.\n \n @param errorBlock  error code    101,102,103,104:networkerror   400:input error 209/225:The user doesn't exist \n */\n-(void)commandDownloadHS6Data:(HealthUser *)tempUser withDownloadTS:(long)downloadTS withPageSize:(long)PageSize  withSuccessBlock:(BlockHS6DataFromCloud)getHS6Data blockHS6LastTSFromCloud:(BlockHS6LastTSFromCloud)blockHS6LastTSFromCloud withErrorBlock:(DisposeHS6ErrorBlock)errorBlock;\n\n")))}p.isMDXComponent=!0}}]);