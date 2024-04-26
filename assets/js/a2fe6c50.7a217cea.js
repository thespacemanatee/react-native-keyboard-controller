"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{4133:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=r(5893),t=r(1151);const a={sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},i="KeyboardProvider",d={id:"api/keyboard-provider",title:"KeyboardProvider",description:"KeyboardProvider should wrap your app. Under the hood it works with KeyboardControllerView to receive events during keyboard movements, maps these events to Animated/Reanimated values and store them in context.",source:"@site/versioned_docs/version-1.8.0/api/keyboard-provider.md",sourceDirName:"api",slug:"/api/keyboard-provider",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/keyboard-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.8.0/api/keyboard-provider.md",tags:[],version:"1.8.0",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardAvoidingView",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/components/keyboard-avoiding-view"},next:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/docs/1.8.0/api/keyboard-controller-view"}},s={},l=[{value:"Props",id:"props",level:2},{value:'<code>statusBarTranslucent</code> <div class="label android"></div>',id:"statusbartranslucent-",level:3},{value:'<code>navigationBarTranslucent</code> <div class="label android"></div>',id:"navigationbartranslucent-",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"Example",id:"example",level:2}];function c(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"keyboardprovider",children:"KeyboardProvider"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"KeyboardProvider"})," should wrap your app. Under the hood it works with ",(0,n.jsx)(o.code,{children:"KeyboardControllerView"})," to receive events during keyboard movements, maps these events to ",(0,n.jsx)(o.code,{children:"Animated"}),"/",(0,n.jsx)(o.code,{children:"Reanimated"})," values and store them in ",(0,n.jsx)(o.code,{children:"context"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"props",children:"Props"}),"\n",(0,n.jsxs)(o.h3,{id:"statusbartranslucent-",children:[(0,n.jsx)(o.code,{children:"statusBarTranslucent"})," ",(0,n.jsx)("div",{class:"label android"})]}),"\n",(0,n.jsxs)(o.p,{children:["A boolean prop to indicate whether ",(0,n.jsx)(o.code,{children:"StatusBar"})," should be translucent on ",(0,n.jsx)(o.code,{children:"Android"})," or not."]}),"\n",(0,n.jsx)(o.admonition,{title:"Important defaults",type:"caution",children:(0,n.jsxs)(o.p,{children:["By default this library stretches to full screen (",(0,n.jsx)(o.code,{children:"edge-to-edge"})," mode) and status bar becomes translucent. But the library tries to use standard RN app behavior and automatically applies padding from top to look like a standard RN app. If you use ",(0,n.jsx)(o.code,{children:"translucent"})," prop for ",(0,n.jsx)(o.code,{children:"StatusBar"})," component - it will not work anymore. You'll need to specify it on provider level. For more info ",(0,n.jsx)(o.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30",children:"see"})," this PR."]})}),"\n",(0,n.jsxs)(o.h3,{id:"navigationbartranslucent-",children:[(0,n.jsx)(o.code,{children:"navigationBarTranslucent"})," ",(0,n.jsx)("div",{class:"label android"})]}),"\n",(0,n.jsxs)(o.p,{children:["A boolean prop to indicate whether ",(0,n.jsx)(o.a,{href:"https://m2.material.io/design/platform-guidance/android-bars.html#android-navigation-bar",children:"NavigationBar"})," should be translucent on ",(0,n.jsx)(o.code,{children:"Android"})," or not."]}),"\n",(0,n.jsx)(o.h3,{id:"enabled",children:(0,n.jsx)(o.code,{children:"enabled"})}),"\n",(0,n.jsxs)(o.p,{children:["A boolean prop indicating whether the module is enabled. It indicate only initial state, i. e. if you try to change this prop after component mount it will not have any effect. To change the property in runtime use ",(0,n.jsx)(o.a,{href:"/react-native-keyboard-controller/docs/1.8.0/api/hooks/module/use-keyboard-controller",children:"useKeyboardController"})," hook and ",(0,n.jsx)(o.code,{children:"setEnabled"})," method. Defaults to ",(0,n.jsx)(o.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Could be useful to set it to ",(0,n.jsx)(o.code,{children:"false"})," if you want to activate the module only on specific screens."]}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:'import { KeyboardProvider } from "react-native-keyboard-controller";\n\nconst App = () => {\n  return (\n    <KeyboardProvider>\n      {/* The other components in your tree */}\n    </KeyboardProvider>\n  );\n};\n'})})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,o,r)=>{r.d(o,{Z:()=>d,a:()=>i});var n=r(7294);const t={},a=n.createContext(t);function i(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);