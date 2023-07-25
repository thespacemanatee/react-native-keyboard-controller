"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5362],{4583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>r,metadata:()=>d,onEndCode:()=>u,onInteractiveCode:()=>m,onMoveCode:()=>p,onStartCode:()=>c,toc:()=>k});var a=t(7462),o=(t(7294),t(3905)),i=t(814);const r={keywords:["react-native-keyboard-controller","useKeyboardHandler","onStart","onMove","onInteractive","onEnd","react-native-reanimated","worklet","react hook"]},l="useKeyboardHandler",d={unversionedId:"api/hooks/use-keyboard-handler/index",id:"api/hooks/use-keyboard-handler/index",title:"useKeyboardHandler",description:"useKeyboardHandler is a hook that offers low-level but more powerful API in comparison to useKeyboardAnimation. Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation.",source:"@site/docs/api/hooks/use-keyboard-handler/index.mdx",sourceDirName:"api/hooks/use-keyboard-handler",slug:"/api/hooks/use-keyboard-handler/",permalink:"/react-native-keyboard-controller/pr-preview/pr-195/docs/next/api/hooks/use-keyboard-handler/",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/hooks/use-keyboard-handler/index.mdx",tags:[],version:"current",frontMatter:{keywords:["react-native-keyboard-controller","useKeyboardHandler","onStart","onMove","onInteractive","onEnd","react-native-reanimated","worklet","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-195/docs/next/api/hooks/use-keyboard-animation"},next:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-195/docs/next/api/hooks/use-reanimated-keyboard-animation"}},s={},k=[{value:"Example",id:"example",level:2},{value:"Event structure",id:"event-structure",level:3},{value:"Handlers",id:"handlers",level:3},{value:"<code>onStart</code>",id:"onstart",level:4},{value:"<code>onMove</code>",id:"onmove",level:4},{value:"<code>onInteractive</code>",id:"oninteractive",level:4},{value:"<code>onEnd</code>",id:"onend",level:4}],c=(0,o.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onStart: (e) => {\n      'worklet';\n      const willKeyboardAppear = e.progress === 1;\n    }\n  },\n  []\n);"),p=(0,o.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onMove: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"),m=(0,o.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onInteractive: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"),u=(0,o.kt)(i.Z,{language:"ts",mdxType:"CodeBlock"},"useKeyboardHandler(\n  {\n    onEnd: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"),h={toc:k,onStartCode:c,onMoveCode:p,onInteractiveCode:m,onEndCode:u};function v(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usekeyboardhandler"},"useKeyboardHandler"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardHandler")," is a hook that offers low-level but more powerful API in comparison to ",(0,o.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation"),". Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"useKeyboardHandler(\n  {\n    onStart: (e) => {\n      'worklet';\n    },\n    onMove: (e) => {\n      'worklet';\n    },\n    onInteractive: (e) => {\n      'worklet';\n    },\n    onEnd: (e) => {\n      'worklet';\n    },\n  },\n  []\n);\n")),(0,o.kt)("admonition",{title:"Worklet directives",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Don't forget to add ",(0,o.kt)("inlineCode",{parentName:"p"},"worklet")," directive to all ",(0,o.kt)("inlineCode",{parentName:"p"},"onStart"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"onMove"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"onInteractive"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"onEnd")," handlers. Otherwise your code will throw exception."),(0,o.kt)("p",{parentName:"admonition"},"These handlers are not workletized by default, since it's not a part of ",(0,o.kt)("inlineCode",{parentName:"p"},"reanimated")," package.")),(0,o.kt)("admonition",{title:"Unlock 120 FPS on iOS",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"onMove")," handler on iOS is based on ",(0,o.kt)("inlineCode",{parentName:"p"},"CADisplayLink")," usage - you may need to add following content in ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist")," if you want to have your animations running at 120 FPS on devices with ProMotion displays:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"+   <key>CADisableMinimumFrameDurationOnPhone</key>\n+   <true/>\n"))),(0,o.kt)("h3",{id:"event-structure"},"Event structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"height")," - height of the keyboard;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"progress")," - a value between ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," (closed) and ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," (opened) indicating relative keyboard position;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"duration")," - duration of the animation;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," - tag of the focused ",(0,o.kt)("inlineCode",{parentName:"li"},"TextInput")," (or ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," if the tag is not found).")),(0,o.kt)("h3",{id:"handlers"},"Handlers"),(0,o.kt)("h4",{id:"onstart"},(0,o.kt)("inlineCode",{parentName:"h4"},"onStart")),(0,o.kt)("div",{className:"grid"},(0,o.kt)("div",{className:"description-block"},"This function is called before the keyboard movement starts. ",(0,o.kt)("code",null,"height")," and ",(0,o.kt)("code",null,"progress")," values will have ",(0,o.kt)("b",null,"destination"),' values, i. e. if keyboard was closed but will appear - these values will have a values like "keyboard is already opened" (',(0,o.kt)("code",null,"progress")," will be equal to ",(0,o.kt)("code",null,"1")," and ",(0,o.kt)("code",null,"height")," will have non-zero value).",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{className:"desktop"},c)),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(149).Z}))),(0,o.kt)("div",{className:"mobile"},c),(0,o.kt)("h4",{id:"onmove"},(0,o.kt)("inlineCode",{parentName:"h4"},"onMove")),(0,o.kt)("div",{className:"grid"},(0,o.kt)("div",{className:"description-block"},"This function will be called every frame when the keyboard changes its position.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{className:"desktop"},p)),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(2146).Z}))),(0,o.kt)("div",{className:"mobile"},p),(0,o.kt)("admonition",{title:"Not precise values",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is no corresponding events in iOS for this hook. So values will not be perfectly synchronized with the keyboard."),(0,o.kt)("p",{parentName:"admonition"},"The same is applied to Android < 11 - these OS versions don't have API for getting keyboard positions during an animation.")),(0,o.kt)("h4",{id:"oninteractive"},(0,o.kt)("inlineCode",{parentName:"h4"},"onInteractive")),(0,o.kt)("div",{className:"grid"},(0,o.kt)("div",{className:"description-block"},"This function will be called every frame when user changes position of the keyboard by the drag.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If finger is released and keyboard animates to its final destination, then the standard ",(0,o.kt)("code",null,"onStart"),"/",(0,o.kt)("code",null,"onMove"),"/",(0,o.kt)("code",null,"onEnd")," lifecycles will be triggered.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{className:"desktop"},m)),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(8447).Z}))),(0,o.kt)("div",{className:"mobile"},m),(0,o.kt)("admonition",{title:"Event availability",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This event is available only on Android >= 11. To receive it you need to use ",(0,o.kt)("a",{parentName:"p",href:"./../keyboard-gesture-area"},"KeyboardGestureArea"),"."),(0,o.kt)("p",{parentName:"admonition"},"On iOS you need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},'keyboardDismissMode="interactive"')," on your ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView"),".")),(0,o.kt)("h4",{id:"onend"},(0,o.kt)("inlineCode",{parentName:"h4"},"onEnd")),(0,o.kt)("div",{className:"grid"},(0,o.kt)("div",{className:"description-block"},"This function will be called when the keyboard has completed its movement. The event will contain ",(0,o.kt)("b",null,"current")," keyboard metrics.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",{className:"desktop"},u)),(0,o.kt)("div",null,(0,o.kt)("img",{src:t(7048).Z}))),(0,o.kt)("div",{className:"mobile"},u))}v.isMDXComponent=!0},7048:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/end-51c1da133c9105d1711f5472ef02f7dc.png"},8447:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/interactive-5613a4e3be3e96ff53479d7d9ab342c4.png"},2146:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/move-67a142f62e5e7286e45c5e964d03b862.png"},149:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/start-43926ae4afe7279da4f2fdd3d25603c6.png"}}]);