"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1420],{22061:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(74848),t=o(28453);const r={keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},i="useReanimatedKeyboardAnimation",s={id:"api/hooks/keyboard/use-reanimated-keyboard-animation",title:"useReanimatedKeyboardAnimation",description:"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:",source:"@site/versioned_docs/version-1.8.0/api/hooks/keyboard/use-reanimated-keyboard-animation.md",sourceDirName:"api/hooks/keyboard",slug:"/api/hooks/keyboard/use-reanimated-keyboard-animation",permalink:"/react-native-keyboard-controller/pr-preview/pr-607/docs/1.8.0/api/hooks/keyboard/use-reanimated-keyboard-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.8.0/api/hooks/keyboard/use-reanimated-keyboard-animation.md",tags:[],version:"1.8.0",frontMatter:{keywords:["react-native-keyboard-controller","useReanimatedKeyboardAnimation","react-native-reanimated","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardHandler",permalink:"/react-native-keyboard-controller/pr-preview/pr-607/docs/1.8.0/api/hooks/keyboard/use-keyboard-handler/"},next:{title:"useKeyboardController",permalink:"/react-native-keyboard-controller/pr-preview/pr-607/docs/1.8.0/api/hooks/module/use-keyboard-controller"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Using with class component",id:"using-with-class-component",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"usereanimatedkeyboardanimation",children:"useReanimatedKeyboardAnimation"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"useReanimatedKeyboardAnimation"})," is a hook which gives access to two reanimated values:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"height"})," - value which changes between ",(0,a.jsx)(n.strong,{children:"0"})," and ",(0,a.jsx)(n.strong,{children:"keyboardHeight"}),";"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"progress"})," - value which changes between ",(0,a.jsx)(n.strong,{children:"0"})," (keyboard closed) and ",(0,a.jsx)(n.strong,{children:"1"})," (keyboard opened)."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { useReanimatedKeyboardAnimation } from "react-native-keyboard-controller";\n\nconst { height, progress } = useReanimatedKeyboardAnimation();\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Also have a look on ",(0,a.jsx)(n.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example",children:"example"})," app for more comprehensive usage."]}),"\n",(0,a.jsx)(n.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import {\n  KeyboardController,\n  KeyboardContext,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nclass KeyboardAnimation extends React.PureComponent {\n  // 1. use context value\n  static contextType = KeyboardContext;\n\n  componentDidMount() {\n    // 2. set input mode for android to `adjustResize`\n    // (can be omitted if you already have `adjustResize` in `AndroidManifest.xml`)\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,\n    );\n  }\n\n  componentWillUnmount() {\n    // 2. return to default input mode (for Android)\n    // in order not to break other part of your app\n    KeyboardController.setDefaultMode();\n  }\n\n  render() {\n    // 3. consume reanimated values \ud83d\ude0a\n    const { reanimated } = this.context;\n  }\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var a=o(96540);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);