"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(k,a(a({ref:t},s),{},{components:n})):o.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},a="Installation",l={unversionedId:"installation",id:"version-1.5.0/installation",title:"Installation",description:"Guide dedicated to installation process",source:"@site/versioned_docs/version-1.5.0/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-native-keyboard-controller/pr-preview/pr-232/docs/1.5.0/installation",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.5.0/installation.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Guide dedicated to installation process",keywords:["react-native-keyboard-controller","react-native keyboard","installation","setup","keyboard handling","keyboard animation","keyboard movement","troubleshooting"]},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/react-native-keyboard-controller/pr-preview/pr-232/docs/1.5.0/category/guides"}},d={},p=[{value:"Adding a library to the project",id:"adding-a-library-to-the-project",level:2},{value:"Linking",id:"linking",level:3},{value:"Expo",id:"expo",level:3},{value:"Adding provider",id:"adding-provider",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Incompatible <code>kotlinVersion</code> and failed Android builds",id:"incompatible-kotlinversion-and-failed-android-builds",level:3},{value:"react-native or expo bare workflow",id:"react-native-or-expo-bare-workflow",level:4},{value:"Expo managed workflow",id:"expo-managed-workflow",level:4},{value:"Swift support",id:"swift-support",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"adding-a-library-to-the-project"},"Adding a library to the project"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," package in your React Native project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-keyboard-controller\n# or with npm\n# npm install react-native-keyboard-controller --save\n")),(0,r.kt)("h3",{id:"linking"},"Linking"),(0,r.kt)("p",null,"This package supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"autolinking"),"."),(0,r.kt)("admonition",{title:"Pods update",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to re-install ",(0,r.kt)("inlineCode",{parentName:"p"},"pods")," after adding the package and don't forget to re-assemble ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," applications, since this library contains native code.")),(0,r.kt)("h3",{id:"expo"},"Expo"),(0,r.kt)("p",null,"This library has native code, so it does not work with ",(0,r.kt)("em",{parentName:"p"},"Expo Go")," but you can easily install it using a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.expo.dev/development/getting-started/"},"custom dev client"),"."),(0,r.kt)("h2",{id:"adding-provider"},"Adding provider"),(0,r.kt)("p",null,"In order to use it you'll need to wrap your app with ",(0,r.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," component."),(0,r.kt)("admonition",{title:"Why it's needed?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are bothered why it's needed, you can read more about it in ",(0,r.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-232/docs/1.5.0/recipes/platform-differences"},"architecture")," deep dive to understand all aspects of how this library works.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { KeyboardProvider } from 'react-native-keyboard-controller';\n\nexport default function App() {\n  return (\n    <KeyboardProvider>\n      // your code here\n    </KeyboardProvider>\n  );\n}\n")),(0,r.kt)("p",null,"Congratulations! \ud83c\udf89 You've just finished installation process. Go to the ",(0,r.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/pr-preview/pr-232/docs/1.5.0/guides/first-animation"},"next section")," to get more insights of what you can do using this library. \ud83d\ude0e"),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"incompatible-kotlinversion-and-failed-android-builds"},"Incompatible ",(0,r.kt)("inlineCode",{parentName:"h3"},"kotlinVersion")," and failed Android builds"),(0,r.kt)("p",null,"Sometimes you may see failed Android builds complaining that your version of kotlin is lower than expected version."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"error: module was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.1.")),(0,r.kt)("p",null,"To overcome this issue you will need to set higher version of the kotlin:"),(0,r.kt)("h4",{id:"react-native-or-expo-bare-workflow"},"react-native or expo bare workflow"),(0,r.kt)("p",null,"You need to modify ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," and specify correct ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinVersion"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'buildscript {\n    ext {\n        kotlinVersion = "1.6.21"\n    }\n}\n')),(0,r.kt)("p",null,"For more information please, see how it's configured in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/9d0e63712a2f55dab0f6f3f95398567bb9ca1efa/example/android/build.gradle#L9"},"example")," project."),(0,r.kt)("h4",{id:"expo-managed-workflow"},"Expo managed workflow"),(0,r.kt)("p",null,"If you are using Expo managed workflow you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"expo-build-properties")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install expo-build-properties\n")),(0,r.kt)("p",null,"And add plugin inside of your ",(0,r.kt)("inlineCode",{parentName:"p"},"app.json")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"app.config.js")," with following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "expo": {\n    "plugins": [\n      [\n        "expo-build-properties",\n        {\n          "android": {\n            "kotlinVersion": "1.6.21"\n          }\n        }\n      ]\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"swift-support"},"Swift support"),(0,r.kt)("p",null,"Since part of this library is written using ",(0,r.kt)("inlineCode",{parentName:"p"},"swift")," language - your project needs to support it. For that you can create empty ",(0,r.kt)("inlineCode",{parentName:"p"},".swift")," file with bridging header. See this ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/56176956/9272042"},"step-by-step")," guide if you have problems."))}c.isMDXComponent=!0}}]);