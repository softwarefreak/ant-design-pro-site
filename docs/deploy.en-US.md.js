webpackJsonp([70],{1518:function(n,s){n.exports={content:["article",["h2","Build"],["p","When you finish the development, you can run the following command to build your application:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run build'},["code","$ npm run build"]],["p","Since Ant Design Pro use ",["a",{title:null,href:"https://github.com/sorrycc/roadhog"},"roadhog"]," as development tool, complex processes have been encapsulated and for most scenarios only one command ",["code","roadhog build"]," is required to build the package, after build successfully, it will generate the ",["code","dist"]," folder in the root directory, which contains packaged files, usually static files like",["code","*** .js"],", ",["code","***.css"],", ",["code","index.html"],"."],["p","But if you want to custom the build result, like specify the result directory, you can configure it in ",["code",".webpackrc"],", see more information at ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#configuration"},"roadhog configuration"],"."],["h3","Environment"],["p","When you want to use different settings for deployment and test environments, you can use the  ",["a",{title:null,href:"https://github.com/sorrycc/roadhog#env"},"env"]," option to achieve it."],["pre",{lang:null,highlighted:'<span class="token string">"env"</span><span class="token punctuation">:</span> {\n  <span class="token string">"development"</span><span class="token punctuation">:</span> {\n    <span class="token string">"extraBabelPlugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  }<span class="token punctuation">,</span>\n  <span class="token string">"production"</span><span class="token punctuation">:</span> {\n    <span class="token string">"extraBabelPlugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n      <span class="token string">"transform-decorators-legacy"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> { <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">]</span>\n    <span class="token punctuation">]</span>\n  }\n}<span class="token punctuation">,</span>'},["code",'"env": {\n  "development": {\n    "extraBabelPlugins": [\n      "dva-hmr",\n    ]\n  },\n  "production": {\n    "extraBabelPlugins": [\n      "transform-runtime",\n      "transform-decorators-legacy",\n      ["import", { "libraryName": "antd", "style": true }]\n    ]\n  }\n},']],["h3","Analyze build result"],["p","If your build file is large, you can optimize your code with the ",["code","analyze"]," command to build and analyze the volume distribution of dependent modules."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run analyze'},["code","$ npm run analyze"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/jibuOPHTyWMpMGvrlFDl.png",width:"600"}]],["p","Then open ",["code","dist/stats.html"]," to see the analyze result."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/sjzZbbsgthNtruKKHbiG.png",width:"400"}]],["h2","Release"],["p","For release purposes, you only need publish the resulting static file, which is usually the static file in the ",["code","dist"]," folder, to your CDN or static server. It should be noted that",["code","index.html"]," will be your application's entry page."],["h3","Code splitting and dynamic imports"],["p","After version 0.3.0, we added support for code splitting and dynamic imports, only corresponding code will be loaded after matching a route, to avoid the first screen loading too much unnecessary js files to improve the scalability of large-scale frontend application."],["pre",{lang:null,highlighted:'\u251c\u2500\u2500 <span class="token number">0</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">1</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">10</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">11</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">12</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">13</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\u251c\u2500\u2500 <span class="token number">14</span><span class="token punctuation">.</span>async<span class="token punctuation">.</span>js\n\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>'},["code","\u251c\u2500\u2500 0.async.js\n\u251c\u2500\u2500 1.async.js\n\u251c\u2500\u2500 10.async.js\n\u251c\u2500\u2500 11.async.js\n\u251c\u2500\u2500 12.async.js\n\u251c\u2500\u2500 13.async.js\n\u251c\u2500\u2500 14.async.js\n\n..."]],["blockquote",["p","If you turn on the ",["code","hash"]," option, the file name will become ",["code","0.2df975b2.async.js"],", changing the code will change the hash to avoid caching issues."]],["p","This approach has some requirements for deployment, you can deploy built files to your backend application's static resource directory (usually named static or public) so that the default static resource reference path points directly to the application's root directory ",["code","//your.application.domain/***.js"]," and ",["code","//your.application.domain/***.css"],"."],["p","If your static server's domain name is different from the application's domain name (for example, a separate CDN address), you need to use ",["code","publicPath"]," to configure the static path of the production environment in the ",["code",".webpackrc"]," file. You can refer to the deployment documentation of ",["a",{title:null,href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment"},"create-react-app"],"."],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"https://cdn.com/your_app"</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "publicPath": "https://cdn.com/your_app"\n}']],["p","After version 1.0, we turned off this feature through ",["code","disableDynamicImport"]," option in ",["code",".webpackrc"],", if you need dynamic imports, you can delete this option."],["h3","Routing and server integration"],["p","Ant Design Pro uses ",["a",{title:null,href:"https://github.com/ReactTraining/react-router"},"React Router"]," so that you can use ",["code","browserHistory"]," or ",["code","hashHistory"],"."],["p",["code","hashHistory"]," uses a URL such as ",["code","https://cdn.com/#/users/123"]," and take the path following the ",["code","#"]," as the application route. ",["code","browserHistory"]," uses ",["code","https://cdn.com/users/123"]," directly. When using ",["code","hashHistory"]," the browser always requests ",["code","index.html"]," under the root directory. Using ",["code","browserHistory"]," requires that the server be prepared to handle URLs. It should be OK to handle the initial ",["code","/"],". However, when the user jumps back and forth and refreshes ",["code","/users/123"],", the server receives a ",["code","/users/123"]," request, then you need to configure the server to handle this URL to return the correct index.html. If you can control the server, we recommend using browserHistory."],["p",["a",{title:null,href:"http://expressjs.com/"},"express"]],["pre",{lang:null,highlighted:'app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/*\'</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> {\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'build\'</span><span class="token punctuation">,</span> <span class="token string">\'index.html\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"]],["p",["a",{title:null,href:"https://eggjs.org/"},"egg"]],["pre",{lang:null,highlighted:'<span class="token operator">/</span><span class="token operator">/</span> controller\nexports<span class="token punctuation">.</span>index <span class="token operator">=</span> function<span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n  yield this<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">\'App.jsx\'</span><span class="token punctuation">,</span> {\n    context<span class="token punctuation">:</span> {\n      user<span class="token punctuation">:</span> this<span class="token punctuation">.</span>session<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token comment" spellcheck="true">;</span>\n\n<span class="token operator">/</span><span class="token operator">/</span> router\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'home\'</span><span class="token punctuation">,</span> <span class="token string">\'/*\'</span><span class="token punctuation">,</span> <span class="token string">\'home.index\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"]],["h3","Using router in Ant Design Pro"],["p","Routing information locate in ",["code","router.js"],", but the configuration of history is in the ",["code","index.js"]," file, you can configure it by passing ",["code","history"]," option to the constructor of ",["a",{title:null,href:"https://github.com/dvajs/dva/blob/master/docs/API.md#dva-api"},"dva"],"."],["p","Since ",["code","react-router@4"]," was used, the way to introduce ",["code","browserHistory"]," to the original ",["code","dva"]," has changed."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> dva <span class="token keyword">from</span> <span class="token string">\'dva\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> browserHistory <span class="token keyword">from</span> <span class="token string">\'history/createBrowserHistory\'</span>\n<span class="token keyword">import</span> models <span class="token keyword">from</span> <span class="token string">\'./models\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token string">\'./index.less\'</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// use browserHistory</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token punctuation">:</span> <span class="token function">browserHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// default hashHistroy</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">dva</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import dva from 'dva';\nimport browserHistory from 'history/createBrowserHistory'\nimport models from './models';\n\nimport './index.less';\n\n// use browserHistory\nconst app = dva({\n  history: browserHistory(),\n});\n\n// default hashHistroy\nconst app = dva();"]],["p","You can refer to ",["a",{title:null,href:"https://github.com/ReactTraining/react-router"},"React Router"]," for more router information.\nRefer to ",["a",{title:null,href:"https://css-tricks.com/react-router-4/"},"All About React Router 4"]," for more ",["code","react-router@4"]," information."]],meta:{order:8,title:"Build & Deploy",type:"Basic",filename:"docs/deploy.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Build",title:"Build"},"Build"]],["li",["a",{className:"bisheng-toc-h2",href:"#Release",title:"Release"},"Release"]]]}}});