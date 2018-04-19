webpackJsonp([62],{1526:function(n,a){n.exports={content:["article",["p","Ant Design Pro \u63d0\u4f9b\u4e86\u7531\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8bbe\u8ba1\u62bd\u8c61\u7684\u56fe\u8868\u7c7b\u578b\uff0c\u662f\u5728 ",["a",{title:null,href:"https://github.com/alibaba/BizCharts"},"BizCharts"]," \u56fe\u8868\u5e93\u57fa\u7840\u4e0a\u7684\u4e8c\u6b21\u5c01\u88c5\uff0c\u540c\u65f6\u63d0\u4f9b\u4e86\u4e1a\u52a1\u4e2d\u5e38\u7528\u7684\u56fe\u8868\u5957\u4ef6\uff0c\u53ef\u4ee5\u5355\u72ec\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u7ec4\u5408\u8d77\u6765\u5b9e\u73b0\u590d\u6742\u7684\u5c55\u793a\u6548\u679c\u3002"],["p","\u76ee\u524d\u4e00\u5171\u5305\u6db5 10 \u4e2a\u56fe\u8868\u7c7b\u578b\uff0c\u4ee5\u53ca 2 \u4e2a\u56fe\u8868\u5957\u4ef6\uff1a"],["ul",["li",["p","\u997c\u72b6\u56fe\uff08Pie\uff09"]],["li",["p","\u67f1\u72b6\u56fe\uff08Bar\uff09"]],["li",["p","\u4eea\u8868\u76d8\uff08Gauge\uff09"]],["li",["p","\u96f7\u8fbe\u56fe\uff08Radar\uff09"]],["li",["p","\u6807\u7b7e\u4e91\uff08TagCloud\uff09"]],["li",["p","\u6c34\u6ce2\u56fe\uff08WaterWave\uff09"]],["li",["p","\u8ff7\u4f60\u67f1\u72b6\u56fe\uff08MiniBar\uff09"]],["li",["p","\u8ff7\u4f60\u533a\u57df\u56fe\uff08MiniArea\uff09"]],["li",["p","\u8ff7\u4f60\u8fdb\u5ea6\u6761\uff08MiniProgress\uff09"]],["li",["p","\u5e26\u6709\u65f6\u95f4\u8f74\u7684\u6298\u7ebf\u56fe\uff08TimelineChart\uff09"]],["li",["p","\u56fe\u8868\u5361\u7247\uff08ChartCard\uff09"]],["li",["p","\u56fe\u8868\u5b57\u6bb5\uff08Field\uff09"]]],["p",["a",{title:null,href:"http://pro.ant.design/components/Charts"},"\u67e5\u770b\u56fe\u8868\u7ec4\u4ef6"]],["h2","\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"],["p","Charts \u56fe\u8868\u5957\u4ef6\u662f\u5728 ",["code","components/Charts"]," \u5305\u4e2d\uff0c\u5f15\u7528\u5230\u9879\u76ee\u5c31\u50cf\u4f7f\u7528\u5176\u5b83\u7ec4\u4ef6\u4e00\u6837\uff1a"],["blockquote",["p","\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5355\u72ec\u4f7f\u7528 pro \u7684\u5305\u7684\u65b9\u5f0f\u4f7f\u7528\u56fe\u8868\u7ec4\u4ef6\uff1a",["a",{title:null,href:"https://pro.ant.design/docs/use-components-alone-cn"},"\u72ec\u7acb\u4f7f\u7528 Pro \u7ec4\u4ef6"]]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ChartCard<span class="token punctuation">,</span> MiniBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'components/Charts\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Tooltip<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> visitData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-01"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">100</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-02"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">120</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-03"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">88</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    x<span class="token punctuation">:</span> <span class="token string">"2017-09-04"</span><span class="token punctuation">,</span>\n    y<span class="token punctuation">:</span> <span class="token number">65</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChartCard</span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u7b14\u6570<span class="token punctuation">"</span></span>\n    <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u7b14\u6570\u53cd\u5e94\u4ea4\u6613\u8d28\u91cf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>exclamation-circle-o<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tooltip</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span></span>\n    <span class="token attr-name">total</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>6,500<span class="token punctuation">"</span></span>\n    <span class="token attr-name">contentHeight</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MiniBar</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">46</span><span class="token punctuation">}</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>visitData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChartCard</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { ChartCard, MiniBar } from \'components/Charts\';\nimport { Tooltip, Icon } from \'antd\';\n\nconst visitData = [\n  {\n    x: "2017-09-01",\n    y: 100\n  },\n  {\n    x: "2017-09-02",\n    y: 120\n  },\n  {\n    x: "2017-09-03",\n    y: 88\n  },\n  {\n    x: "2017-09-04",\n    y: 65\n  }\n];\n\nReactDOM.render(\n  <ChartCard\n    title="\u652f\u4ed8\u7b14\u6570"\n    action={\n      <Tooltip title="\u652f\u4ed8\u7b14\u6570\u53cd\u5e94\u4ea4\u6613\u8d28\u91cf">\n        <Icon type="exclamation-circle-o" />\n      </Tooltip>\n    }\n    total="6,500"\n    contentHeight={46}\n  >\n    <MiniBar height={46} data={visitData} />\n  </ChartCard>,\n  mountNode\n);']],["p","\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u56fe\u8868\u7ec4\u5408\uff1a"],["p",["img",{width:"260",src:"https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png"}]],["h2","\u4f7f\u7528 BizCharts \u7ed8\u5236\u56fe\u8868"],["p","\u5982\u679c Ant Design Pro \u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/alibaba/BizCharts"},"BizCharts"]," \u5c01\u88c5\u81ea\u5df1\u7684\u56fe\u8868\u7ec4\u4ef6\u3002"],["h3","\u5f15\u5165 BizCharts"],["p","\u901a\u8fc7 npm \u5b89\u88c5"],["pre",{lang:null,highlighted:'npm install bizcharts <span class="token operator">-</span><span class="token operator">-</span>save'},["code","npm install bizcharts --save"]],["p","\u5728\u9879\u76ee\u4e2d\u4f7f\u7528"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Chart<span class="token punctuation">,</span> Axis<span class="token punctuation">,</span> Tooltip<span class="token punctuation">,</span> Geom <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bizcharts\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chart</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token attr-name">forceFit</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Axis</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Axis</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>temperature<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> formatter<span class="token punctuation">:</span> val <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\xb0C`</span></span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tooltip</span> <span class="token attr-name">crosshairs</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> type <span class="token punctuation">:</span> <span class="token string">"y"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Geom</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>line<span class="token punctuation">"</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month*temperature<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'city\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Geom</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>point<span class="token punctuation">\'</span></span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>month*temperature<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'city\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Chart</span><span class="token punctuation">></span></span>'},["code",'import { Chart, Axis, Tooltip, Geom } from \'bizcharts\';\n\nconst data = [...];\n\n<Chart height={400} data={data} forceFit>\n  <Axis name="month" />\n  <Axis name="temperature" label={{ formatter: val => `${val}\xb0C` }} />\n  <Tooltip crosshairs={{ type : "y" }} />\n  <Geom type="line" position="month*temperature" size={2} color={\'city\'} />\n  <Geom type=\'point\' position="month*temperature" size={4} color={\'city\'} />\n</Chart>']],["p","\u53c2\u770b ",["a",{title:null,href:"https://alibaba.github.io/BizCharts/demo.html"},"\u66f4\u591a Demo"],"\u3002"]],meta:{order:11,title:{"en-US":"Charts","zh-CN":"\u56fe\u8868"},type:"\u8fdb\u9636",filename:"docs/graph.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-Ant-Design-Pro-\u7684\u56fe\u8868",title:"\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"},"\u4f7f\u7528 Ant Design Pro \u7684\u56fe\u8868"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u4f7f\u7528-BizCharts-\u7ed8\u5236\u56fe\u8868",title:"\u4f7f\u7528 BizCharts \u7ed8\u5236\u56fe\u8868"},"\u4f7f\u7528 BizCharts \u7ed8\u5236\u56fe\u8868"]]]}}});