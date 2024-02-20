"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8137],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=n,b=u["".concat(s,".").concat(y)]||u[y]||c[y]||a;return t?o.createElement(b,i(i({ref:r},d),{},{components:t})):o.createElement(b,i({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3350:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:4,keywords:["react-native-keyboard-controller","KeyboardGestureArea","interactive keyboard","view"]},i="KeyboardGestureArea",l={unversionedId:"api/keyboard-gesture-area",id:"version-1.6.0/api/keyboard-gesture-area",title:"KeyboardGestureArea",description:"KeyboardGestureArea allows you to define a region on the screen, where gestures will control the keyboard position.",source:"@site/versioned_docs/version-1.6.0/api/keyboard-gesture-area.md",sourceDirName:"api",slug:"/api/keyboard-gesture-area",permalink:"/react-native-keyboard-controller/pr-preview/pr-364/docs/1.6.0/api/keyboard-gesture-area",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.6.0/api/keyboard-gesture-area.md",tags:[],version:"1.6.0",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["react-native-keyboard-controller","KeyboardGestureArea","interactive keyboard","view"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/pr-preview/pr-364/docs/1.6.0/api/keyboard-controller-view"},next:{title:"KeyboardController",permalink:"/react-native-keyboard-controller/pr-preview/pr-364/docs/1.6.0/api/keyboard-controller"}},s={},p=[{value:"Props",id:"props",level:2},{value:"<code>interpolator</code>",id:"interpolator",level:3},{value:"<code>showOnSwipeUp</code>",id:"showonswipeup",level:3},{value:"<code>enableSwipeToDismiss</code>",id:"enableswipetodismiss",level:3},{value:"Example",id:"example",level:2}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"keyboardgesturearea"},"KeyboardGestureArea"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"KeyboardGestureArea")," allows you to define a region on the screen, where gestures will control the keyboard position."),(0,n.kt)("admonition",{title:"Platform availability",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This component is available only for Android >= 11. For iOS and Android < 11 it will render ",(0,n.kt)("inlineCode",{parentName:"p"},"React.Fragment"),".")),(0,n.kt)("h2",{id:"props"},"Props"),(0,n.kt)("h3",{id:"interpolator"},(0,n.kt)("inlineCode",{parentName:"h3"},"interpolator")),(0,n.kt)("p",null,"String with possible values ",(0,n.kt)("inlineCode",{parentName:"p"},"linear")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ios"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ios")," - interactive keyboard dismissing will work as in iOS: swipes in non-keyboard area will not affect keyboard positioning, but if your swipe touches keyboard - keyboard will follow finger position."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"linear")," - gestures inside the component will linearly affect the position of the keyboard, i.e. if the user swipes down by 20 pixels, then the keyboard will also be moved down by 20 pixels, even if the gesture was not made over the keyboard area.")),(0,n.kt)("h3",{id:"showonswipeup"},(0,n.kt)("inlineCode",{parentName:"h3"},"showOnSwipeUp")),(0,n.kt)("p",null,"A boolean prop which allows to customize interactive keyboard behavior. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," then it allows to show keyboard (if it's already closed) by swipe up gesture. ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," by default."),(0,n.kt)("h3",{id:"enableswipetodismiss"},(0,n.kt)("inlineCode",{parentName:"h3"},"enableSwipeToDismiss")),(0,n.kt)("p",null,"A boolean prop which allows to customize interactive keyboard behavior. If set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", then any gesture will not affect keyboard position if the keyboard is shown. ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by default."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<KeyboardGestureArea interpolator="ios">\n  <ScrollView>\n    {/* The other UI components of application in your tree */}\n  </ScrollView>\n</KeyboardGestureArea>\n')))}c.isMDXComponent=!0}}]);