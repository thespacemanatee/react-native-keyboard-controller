"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7065],{18820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(85893),a=t(11151),r=t(74072);const s={keywords:["react-native","react native","react-native-keyboard-controller","useFocusedInputHandler","onTextChanged","onChangeText","input interceptor","react-native-reanimated","worklet","react hook"]},i="useFocusedInputHandler",c={id:"api/hooks/input/use-focused-input-handler",title:"useFocusedInputHandler",description:"useFocusedInputHandler is a hook that allows to intercept events from a focused TextInput.",source:"@site/versioned_docs/version-1.12.0/api/hooks/input/use-focused-input-handler.mdx",sourceDirName:"api/hooks/input",slug:"/api/hooks/input/use-focused-input-handler",permalink:"/react-native-keyboard-controller/pr-preview/pr-500/docs/api/hooks/input/use-focused-input-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.12.0/api/hooks/input/use-focused-input-handler.mdx",tags:[],version:"1.12.0",frontMatter:{keywords:["react-native","react native","react-native-keyboard-controller","useFocusedInputHandler","onTextChanged","onChangeText","input interceptor","react-native-reanimated","worklet","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-500/docs/api/hooks/keyboard/use-reanimated-keyboard-animation"},next:{title:"useReanimatedFocusedInput",permalink:"/react-native-keyboard-controller/pr-preview/pr-500/docs/api/hooks/input/use-reanimated-focused-input"}},d={},l=[{value:"Example",id:"example",level:2},{value:"Handlers",id:"handlers",level:2},{value:"<code>onChangeText</code>",id:"onchangetext",level:3},{value:"<code>onSelectionChange</code>",id:"onselectionchange",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usefocusedinputhandler",children:"useFocusedInputHandler"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useFocusedInputHandler"})," is a hook that allows to intercept events from a focused ",(0,o.jsx)(n.code,{children:"TextInput"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'useFocusedInputHandler(\n  {\n    onChangeText: ({ text }) => {\n      "worklet";\n    },\n    onSelectionChange: ({ target, selection }) => {\n      "worklet";\n    },\n  },\n  [],\n);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,o.jsx)(n.h3,{id:"onchangetext",children:(0,o.jsx)(n.code,{children:"onChangeText"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires an event whenever user changes text in focused ",(0,o.jsx)(n.code,{children:"TextInput"})," (i. e. adds or deletes symbols). Event has following structure:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type FocusedInputTextChangedEvent = {\n  text: string;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This handler can be handy when you need to have an access to what user typed on a global level (i. e. when you don't have a direct access to your ",(0,o.jsx)(n.code,{children:"TextInput"}),"), for example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["you develop a generic component for any kind of avoidance focused inputs (i. e. ",(0,o.jsx)(n.code,{children:"AwareScrollView"}),") that doesn't have an access to child ",(0,o.jsx)(n.code,{children:"TextInputs"})," by design;"]}),"\n",(0,o.jsx)(n.li,{children:"you track user activity on the screen and if there is no activity for certain period of time then you do a certain action (logout for example). If you want to reset timer when user interacts with a keyboard - usage of this hook can be a good choice."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"onselectionchange",children:(0,o.jsx)(n.code,{children:"onSelectionChange"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires an event whenever user selects text in focused ",(0,o.jsx)(n.code,{children:"TextInput"}),". Event has following structure:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type FocusedInputSelectionChangedEvent = {\n  target: number;\n  selection: {\n    start: {\n      x: number;\n      y: number;\n      position: number;\n    };\n    end: {\n      x: number;\n      y: number;\n      position: number;\n    };\n  };\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This handler can be handy when you need to have an access to input on a global level (i. e. when you don't have a direct access to your ",(0,o.jsx)(n.code,{children:"TextInput"}),") or if you need to have an access to coordinates of text selection (for example to draw a custom element that follows caret position):"]}),"\n","\n","\n",(0,o.jsx)(r.Z,{src:"/video/selection-demo.mov",width:60})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},74072:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(44996),a=(t(67294),t(85893));function r(e){let{src:n,width:t=100,...r}=e;const s=(0,o.Z)(n);return(0,a.jsx)("div",{className:"center video",children:(0,a.jsx)("video",{src:s,width:`${t}%`,height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0,...r})})}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var o=t(67294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);