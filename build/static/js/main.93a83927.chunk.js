(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,a,t){e.exports=t(363)},182:function(e,a,t){},362:function(e,a,t){},363:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(7),i=t.n(o),l=(t(182),t(23)),m=t(24),s=t(26),d=t(25),c=t(27),u=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},"WYNK")}}]),a}(n.Component),g=t(174),p=t(75),h=t(367),y=t(364),f=t(365),b=t(368),v=t(98),O=t(369),j=t(45),E=t.n(j),k=t(8),Y=t.n(k),D=t(366),M=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.obj,t=e.language,n=[{title:"Language",dataIndex:"language",key:"language"},{title:"Year",dataIndex:"year",key:"year"},{title:"Month/Date",dataIndex:"month",key:"month",sorter:function(e,a){return Y()().month(e.month)-Y()().month(a.month)}},{title:"Moderated",dataIndex:"moderated",key:"moderated"},{title:"InProgress",dataIndex:"inprogress",key:"inprogress"}],o=[];for(var i in a)if(a.hasOwnProperty(i)){var l={};for(var m in l.key=E()(),a[i]){var s={};a[i].hasOwnProperty(m)&&(s.month=m,s.moderated=a[i][m].mod,s.inprogress=a[i][m].in,s.language=t,s.year=i,o.push(s))}o.push(l)}return r.a.createElement("div",{className:"container"},o.length<=0?"":r.a.createElement(D.a,{dataSource:o,columns:n,pagination:{pageSize:20}}))}}]),a}(n.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.obj,t=e.language,n=[{title:"Language",dataIndex:"language",key:"language"},{title:"Month/Date",dataIndex:"month",key:"month",sorter:function(e,a){return Y()(e.month).format("X")-Y()(a.month).format("X")}},{title:"Moderated",dataIndex:"moderated",key:"moderated"},{title:"InProgress",dataIndex:"inprogress",key:"inprogress"}],o=[];for(var i in a[t])if(a[t].hasOwnProperty(i)){var l={};l.key=E()(),l.language=t,l.inprogress=a[t][i].inprogress?a[t][i].inprogress:0,l.moderated=a[t][i].moderated?a[t][i].moderated:0,l.month=i,o.push(l)}return r.a.createElement("div",{className:"container"},o.length<=0?"":r.a.createElement(D.a,{dataSource:o,columns:n,pagination:{pageSize:30}}))}}]),a}(n.Component),x=(t(330),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.obj,t=(e.language,[{title:"Language",dataIndex:"language",key:"language",sorter:function(e,a){return e.language.charCodeAt(0)-a.language.charCodeAt(0)}},{title:"Year",dataIndex:"year",key:"year"},{title:"Month/Date",dataIndex:"month",key:"month",sorter:function(e,a){return Y()().month(e.month)-Y()().month(a.month)}},{title:"Moderated",dataIndex:"moderated",key:"moderated"},{title:"InProgress",dataIndex:"inprogress",key:"inprogress"}]),n=[];for(var o in a)if(a.hasOwnProperty(o))for(var i in a[o])if(a[o].hasOwnProperty(i))for(var l in a[o][i]){var m={};a[o][i].hasOwnProperty(l)&&(m.key=E()(),m.month=l,m.moderated=a[o][i][l].mod,m.inprogress=a[o][i][l].in,m.language=o,m.year=i,n.push(m))}return r.a.createElement("div",{className:"container"},n.length<=0?"":r.a.createElement(D.a,{dataSource:n,columns:t,pagination:{pageSize:20}}))}}]),a}(n.Component)),C=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props,a=e.obj,t=e.language,n=[{title:"Language",dataIndex:"language",key:"language",sorter:function(e,a){return e.language.charCodeAt(0)-a.language.charCodeAt(0)}},{title:"Month/Date",dataIndex:"month",key:"month",sorter:function(e,a){return Y()(e.month).format("X")-Y()(a.month).format("X")}},{title:"Moderated",dataIndex:"moderated",key:"moderated"},{title:"InProgress",dataIndex:"inprogress",key:"inprogress"}],o=[],i=0;i<t.length;i++)for(var l in a[t[i]])if(a[t[i]].hasOwnProperty(l)){var m={};m.key=E()(),m.language=t[i],m.inprogress=a[t[i]][l].inprogress?a[t[i]][l].inprogress:0,m.moderated=a[t[i]][l].moderated?a[t[i]][l].moderated:0,m.month=l,o.push(m)}return r.a.createElement("div",{className:"container"},o.length<=0?"":r.a.createElement(D.a,{dataSource:o,columns:n,pagination:{pageSize:30}}))}}]),a}(n.Component),I=O.a.TabPane,S="",P=function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.obj,t=e.language,n=e.response;return S="string"==typeof t?r.a.createElement("div",null,r.a.createElement(O.a,{defaultActiveKey:"1",onChange:this.props.callback},r.a.createElement(I,{tab:"Month View",key:"1"},r.a.createElement(M,{obj:a,language:t})),r.a.createElement(I,{tab:"Date View",key:"2"},r.a.createElement(w,{obj:n,language:t})))):r.a.createElement("div",null,r.a.createElement(O.a,{defaultActiveKey:"1",onChange:this.props.callback},r.a.createElement(I,{tab:"Month View",key:"1"},r.a.createElement(x,{obj:a,language:t})),r.a.createElement(I,{tab:"Date View",key:"2"},r.a.createElement(C,{obj:n,language:t})))),r.a.createElement("div",{className:"container"},S)}}]),a}(n.Component),A=t(169),L=t(93),N=function(e,a){return Object.keys(a).reduce(function(t,n){var r=Object(L.a)({},e[n]||n,a[n]);return Object(A.a)({},t,r)},{})},T=function(e,a,t,n){var r=n,o=1+Y()(a,"YYYY/MM/DD").month(),i=1+Y()(t,"YYYY/MM/DD").month();o=parseInt(o,10),i=parseInt(i,10);var l=Y()(a,"YYYY/MM/DD").year(),m=Y()(t,"YYYY/MM/DD").year(),s={},d={},c={1:"JAN",2:"FEB",3:"MAR",4:"APR",5:"MAY",6:"JUN",7:"JUL",8:"AUG",9:"SEP",10:"OCT",11:"NOV",12:"DEC"};for(var u in s[l]={1:{mod:0,in:0},2:{mod:0,in:0},3:{mod:0,in:0},4:{mod:0,in:0},5:{mod:0,in:0},6:{mod:0,in:0},7:{mod:0,in:0},8:{mod:0,in:0},9:{mod:0,in:0},10:{mod:0,in:0},11:{mod:0,in:0},12:{mod:0,in:0}},s[m]={1:{mod:0,in:0},2:{mod:0,in:0},3:{mod:0,in:0},4:{mod:0,in:0},5:{mod:0,in:0},6:{mod:0,in:0},7:{mod:0,in:0},8:{mod:0,in:0},9:{mod:0,in:0},10:{mod:0,in:0},11:{mod:0,in:0},12:{mod:0,in:0}},e[r]){var g=Y()(u,"YYYY/MM/DD").year(),p=1+Y()(u,"YYYY/MM/DD").month();e[r][u].moderated&&("string"==typeof s[g][p].mod?s[g][p].mod=e[r][u].moderated:s[g][p].mod+=e[r][u].moderated),e[r][u].inprogress&&(s[g][p].in+=e[r][u].inprogress)}for(var h in s[l])s[l].hasOwnProperty(h)&&parseInt(h,10)<o&&delete s[l][h];for(var y in s[m])s[m].hasOwnProperty(y)&&parseInt(y,10)>i&&delete s[m][y];return console.log(s),d[l]=N(c,s[l]),d[m]=N(c,s[m]),d},J=function(e,a,t,n){for(var r=n,o=Y()(a,"YYYY/MM/DD").year(),i=Y()(t,"YYYY/MM/DD").year(),l={hindi:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},tamil:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},telugu:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},kannada:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},marathi:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},malayalam:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}}},m={hindi:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},tamil:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},telugu:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},kannada:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},marathi:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}},malayalam:{2025:{},2024:{},2023:{},2022:{},2021:{},2020:{},2019:{},2018:{},2017:{},2016:{},2015:{},2014:{},2013:{},2012:{}}},s={1:"JAN",2:"FEB",3:"MAR",4:"APR",5:"MAY",6:"JUN",7:"JUL",8:"AUG",9:"SEP",10:"OCT",11:"NOV",12:"DEC"},d=1;d<=r.length;d++)l[r[d-1]][o]={1:{mod:0,in:0},2:{mod:0,in:0},3:{mod:0,in:0},4:{mod:0,in:0},5:{mod:0,in:0},6:{mod:0,in:0},7:{mod:0,in:0},8:{mod:0,in:0},9:{mod:0,in:0},10:{mod:0,in:0},11:{mod:0,in:0},12:{mod:0,in:0}},l[r[d-1]][i]={1:{mod:0,in:0},2:{mod:0,in:0},3:{mod:0,in:0},4:{mod:0,in:0},5:{mod:0,in:0},6:{mod:0,in:0},7:{mod:0,in:0},8:{mod:0,in:0},9:{mod:0,in:0},10:{mod:0,in:0},11:{mod:0,in:0},12:{mod:0,in:0}};for(var c=1;c<=r.length;c++)for(var u in e[r[c-1]]){var g=Y()(u,"YYYY/MM/DD").year(),p=1+Y()(u,"YYYY/MM/DD").month();e[r[c-1]][u].moderated&&(l[r[c-1]][g][p].mod+=e[r[c-1]][u].moderated),e[r[c-1]][u].inprogress&&(l[r[c-1]][g][p].in+=e[r[c-1]][u].inprogress)}for(var h=1;h<=r.length;h++)m[r[h-1]][o]=N(s,l[r[h-1]][o]),m[r[h-1]][i]=N(s,l[r[h-1]][i]);return m},z=t(125),U=t.n(z),V=p.a.Option,B="",R=["hindi","tamil","telugu","kannada","marathi","malayalam"],W=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).componentDidMount=function(){U.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"},t.handleChange=function(e){t.setState({language:e})},t.onChange1=function(e,a){t.setState({startDate:a})},t.onChange2=function(e,a){t.setState({endDate:a})},t.handleSubmit=function(e){var a=t.state,n=a.language,r=a.startDate,o=a.endDate,i="",l="";e.preventDefault(),U.a.post("https://api-gw.revup.reverieinc.com/apiman-gateway/Wynk/stats/1.0",{languages:"string"==typeof n?[n]:Object(g.a)(n),startDate:r,endDate:o}).then(function(e){console.log(e.data.perLangPerDayStat),B=e.data.perLangPerDayStat,t.setState({response:B}),"string"==typeof n?(i=T(B,r,o,n),t.setState({data:i})):(l=J(B,r,o,n),t.setState({data:l}))}).catch(function(e){return console.log(e)})},t.callback=function(e){console.log("key",e),console.log("res",t.state.response)},t.state={language:"",startDate:"",endDate:"",data:"",response:""},t}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{layout:"horizontal",onSubmit:this.handleSubmit,style:{marginBottom:"30px"}},r.a.createElement(y.a,{type:"flex",justify:"space-between"},r.a.createElement(f.a,{span:4},r.a.createElement(p.a,{showSearch:!0,placeholder:"Select a Language",optionFilterProp:"children",size:e,style:{marginTop:"50px",marginLeft:"10px"},onChange:this.handleChange,filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(V,{value:"hindi"},"Hindi"),r.a.createElement(V,{value:"tamil"},"Tamil"),r.a.createElement(V,{value:"telugu"},"Telugu"),r.a.createElement(V,{value:"kannada"},"kannada"),r.a.createElement(V,{value:"marathi"},"Marathi"),r.a.createElement(V,{value:"malayalam"},"Malayalam"),r.a.createElement(V,{value:R},"All Language"))),r.a.createElement(f.a,{span:4},r.a.createElement(b.a,{onChange:this.onChange1,style:{marginTop:"50px",marginLeft:"10px"},placeholder:"Start Date"})),r.a.createElement(f.a,{span:4},r.a.createElement(b.a,{placeholder:"End Date",onChange:this.onChange2,style:{marginTop:"50px",marginLeft:"10px"}})),r.a.createElement(f.a,{span:4},r.a.createElement(v.a,{type:"primary",htmlType:"submit",style:{marginTop:"50px",marginLeft:"10px"}},"Submit")))),r.a.createElement("br",null),r.a.createElement(P,{callback:this.callback,obj:this.state.data,language:this.state.language,response:this.state.response}))}}]),a}(n.Component),X=(t(361),t(362),function(e){function a(){return Object(l.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(W,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.93a83927.chunk.js.map