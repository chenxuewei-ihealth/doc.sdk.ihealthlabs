"use strict";(self.webpackChunkdoc_sdk=self.webpackChunkdoc_sdk||[]).push([[507],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"get-started-android",title:"Get Started(Android)",sidebar_position:2},c=void 0,l={unversionedId:"get-started/get-started-android",id:"get-started/get-started-android",isDocsHomePage:!1,title:"Get Started(Android)",description:"Step 1: Add license in your application",source:"@site/docs/get-started/guide(android).md",sourceDirName:"get-started",slug:"/get-started/get-started-android",permalink:"/doc.sdk.ihealthlabs/docs/get-started/get-started-android",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/get-started/guide(android).md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"get-started-android",title:"Get Started(Android)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/doc.sdk.ihealthlabs/docs/get-started/prerequisites"},next:{title:"Get Started(iOS)",permalink:"/doc.sdk.ihealthlabs/docs/get-started/get-started-ios"}},d=[{value:"Step 1: Add license in your application",id:"step-1-add-license-in-your-application",children:[]},{value:"Step 2: Check application permission",id:"step-2-check-application-permission",children:[]},{value:"Step 3: Init SDK",id:"step-3-init-sdk",children:[]},{value:"Step 4: Authentication license",id:"step-4-authentication-license",children:[]}],p={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"step-1-add-license-in-your-application"},"Step 1: Add license in your application"),(0,a.kt)("p",null,"As show below, Add your license file to your root asserts folder.\n",(0,a.kt)("img",{alt:"\bintegrate android",src:n(9992).Z})),(0,a.kt)("h2",{id:"step-2-check-application-permission"},"Step 2: Check application permission"),(0,a.kt)("p",null,"To use Bluetooth Low Energy, you must declare ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/connectivity/bluetooth/permissions"},"several permissions"),"."),(0,a.kt)("h2",{id:"step-3-init-sdk"},"Step 3: Init SDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"iHealthDevicesManager.getInstance().init(this,  Log.VERBOSE, Log.VERBOSE);\n")),(0,a.kt)("h2",{id:"step-4-authentication-license"},"Step 4: Authentication license"),(0,a.kt)("p",null,"Please call the following method, if license is invalid, it will return false.\nSomtimes license needs to be updated, the first call will return false, the SDK will synchronize with the server, and the next call will return true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public void auth() {\n    try {\n        InputStream is = mContext.getAssets().open("xxx.pem");\n        int size = is.available();\n        byte[] buffer = new byte[size];\n        is.read(buffer);\n        is.close();\n        boolean isPass = iHealthDevicesManager.getInstance().sdkAuthWithLicense(buffer);\n        \n    } catch (IOException e) {\n        e.printStackTrace();\n    }\n\n}\n')))}u.isMDXComponent=!0},9992:function(e,t,n){t.Z=n.p+"assets/images/integrate-android-ad16a56652c7c446d8e029203a75005f.png"}}]);