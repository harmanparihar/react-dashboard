(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(31)},20:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),o=a.n(l),i=(a(20),a(1)),c=a(2),s=a(4),h=a(3),u=a(5),p=(a(8),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"sidebar"},n.a.createElement("h1",null,"React Dashboard"),n.a.createElement("h2",null,"Prototype"),n.a.createElement("ul",null,n.a.createElement("li",{onClick:this.props.fcclick},n.a.createElement("a",{href:"#fusion"},n.a.createElement("i",{className:"fas fa-chart-area"}),"Dashboard")),n.a.createElement("li",{onClick:this.props.gcclick},n.a.createElement("a",{href:"#google"},n.a.createElement("i",{className:"fas fa-chart-pie"}),"Google Charts")),n.a.createElement("li",null,n.a.createElement("a",{href:"#plotly"},n.a.createElement("i",{className:"fas fa-chart-line"}),"Plotly")),n.a.createElement("li",{onClick:this.props.fcclick},n.a.createElement("a",{href:"#fusion"},n.a.createElement("i",{className:"fas fa-chart-bar"}),"Fushion Charts"))))}}]),t}(n.a.Component)),d=a(6),m=a.n(d),b=a(9),f=a.n(b),v=a(12),g=a.n(v),y=a(13),O=a.n(y);g()(f.a),O()(f.a),m.a.fcRoot(f.a);var w={type:"column2d",dataFormat:"json",theme:"candy",dataSource:{chart:{caption:"Countries With Highest Air Pollution [2017-18]",subCaption:"In PPM = Micrograms per cubic meter",xAxisName:"Country",yAxisName:"Median (PPM)",numberSuffix:"K",theme:"candy",bgColor:"#262a33",palettecolors:"5d62b5,29c3be,f2726f",containerBackgroundOpacity:"0"},data:[{label:"Saudi Arabia",value:"108"},{label:"Qatar",value:"103"},{label:"Egypt",value:"93"},{label:"Bangladesh",value:"84"},{label:"Kuwait",value:"75"},{label:"Cameroon",value:"65"},{label:"Nepal",value:"64"},{label:"UAE",value:"64"}]}},j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,Object.assign({},w,{width:this.props.width,height:this.props.height})))}}]),t}(n.a.Component),C={type:"msline",dataFormat:"json",dataSource:{chart:{caption:"Reach of Social Media Platforms amoung youth",yaxisname:"% of youth on this platform",subcaption:"2012-2016",showhovereffect:"1",numbersuffix:"%",drawcrossline:"1",plottooltext:"<b>$dataValue</b> of youth were on $seriesName",theme:"candy",palettecolors:"5d62b5,29c3be,f2726f"},categories:[{category:[{label:"2012"},{label:"2013"},{label:"2014"},{label:"2015"},{label:"2016"}]}],dataset:[{seriesname:"Facebook",data:[{value:"62"},{value:"64"},{value:"64"},{value:"66"},{value:"78"}]},{seriesname:"Instagram",data:[{value:"16"},{value:"28"},{value:"34"},{value:"42"},{value:"54"}]},{seriesname:"LinkedIn",data:[{value:"20"},{value:"22"},{value:"27"},{value:"22"},{value:"29"}]},{seriesname:"Twitter",data:[{value:"18"},{value:"19"},{value:"21"},{value:"21"},{value:"24"}]}]}},E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,Object.assign({},C,{width:this.props.width,height:this.props.height})))}}]),t}(n.a.Component),F={chart:{caption:"Market Share of Web Servers",plottooltext:"<b>$percentValue</b> of web servers run on $label servers",showlegend:"1",showpercentvalues:"1",legendposition:"bottom",usedataplotcolorforlabels:"1",theme:"candy",palettecolors:"#5d62b5,#ffc533,#f2726f,#29c3be"},data:[{label:"Apache",value:"32647479"},{label:"Microsoft",value:"22100932"},{label:"Zeus",value:"8000600"},{label:"Other",value:"18674221"}]},k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,{type:"pie2d",width:this.props.width,height:this.props.height,dataFormat:"JSON",dataSource:F}))}}]),t}(n.a.Component),S={chart:{caption:"Yearly Energy Production Rate",subcaption:" Top 5 Developed Countries",numbersuffix:" TWh",showsum:"1",plottooltext:"$label produces <b>$dataValue</b> of energy from $seriesName",drawcrossline:"1",theme:"candy",bgColor:"#262a33",captionFontColor:"#fff",subcaptionFontColor:"#fff",palettecolors:"#5d62b5,#ffc533,#f2726f,#29c3be,#62b58f"},categories:[{category:[{label:"Canada"},{label:"China"},{label:"Russia"},{label:"Australia"},{label:"United States"}]}],dataset:[{seriesname:"Coal",data:[{value:"400"},{value:"830"},{value:"500"},{value:"420"},{value:"790"}]},{seriesname:"Hydro",data:[{value:"350"},{value:"620"},{value:"410"},{value:"370"},{value:"720"}]},{seriesname:"Nuclear",data:[{value:"210"},{value:"400"},{value:"450"},{value:"180"},{value:"570"}]},{seriesname:"Gas",data:[{value:"180"},{value:"330"},{value:"230"},{value:"160"},{value:"440"}]},{seriesname:"Oil",data:[{value:"60"},{value:"200"},{value:"200"},{value:"50"},{value:"230"}]}]},x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"chart"},n.a.createElement(m.a,{type:"stackedcolumn2d",width:this.props.width,height:this.props.height,dataFormat:"JSON",dataSource:S}))}}]),t}(n.a.Component),N=function(e){function t(){var e;Object(i.a)(this,t),e=Object(s.a)(this,Object(h.a)(t).call(this));var a=new Date,r=a.getDate()+"-"+(a.getMonth()+1)+"-"+a.getFullYear();return e.state={date:r},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"date"},this.state.date)}}]),t}(n.a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"fusion",className:"graphs"},n.a.createElement("h1",null,"Fusion Charts ",n.a.createElement(N,null)),n.a.createElement(j,{width:this.props.width,height:this.props.height}),n.a.createElement(E,{width:this.props.width,height:this.props.height}),n.a.createElement(k,{width:this.props.width,height:this.props.height}),n.a.createElement(x,{width:this.props.width,height:this.props.height}))}}]),t}(n.a.Component),A=a(7),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(A.a,{className:"chart",chartType:"ColumnChart",spreadSheetUrl:"https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE",spreadSheetQueryParameters:{headers:1,query:"SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8"},options:{hAxis:{textStyle:{color:"#FFF"}},vAxis:{format:"long",textStyle:{color:"#FFF"}},titleTextStyle:{color:"#333333"},backgroundColor:"#262a33",legendTextStyle:{color:"#FFF"},colors:["#586ba4","#f5dd90","#f68e5f","#324376","#f76c5e"]},rootProps:{"data-testid":"2"},height:this.props.height,width:this.props.width})}}]),t}(n.a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(A.a,{className:"chart",chartType:"LineChart",spreadSheetUrl:"https://docs.google.com/spreadsheets/d/1vyi-Yd3JnvcYhKY6utMVGZcQa5TkW21nCMN8gx7GKi0/edit?usp=sharing",options:{hAxis:{title:"Year",format:"0000",textStyle:{color:"#FFF"}},vAxis:{title:"CO2 Emissions",format:"000",textStyle:{color:"#FFF"}},chart:{title:"CO2 Emission trends over 1998-2017",subtitle:"Data Source: NASA"},backgroundColor:"#262a33",titleTextStyle:{color:"#333333"},colors:["#f5dd90"],legendTextStyle:{color:"#FFF"}},rootProps:{"data-testid":"1"},height:this.props.height,width:this.props.width})}}]),t}(n.a.Component),M=[["Country","Popularity"],["Germany",200],["United States",300],["Brazil",400],["Canada",500],["France",600],["RU",700]],W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(A.a,{className:"chart",chartType:"GeoChart",data:M,options:{backgroundColor:"#262a33",colors:["#f76c5e"]},chartEvents:[{eventName:"select",callback:function(e){var t=e.chartWrapper.getChart().getSelection();if(0!==t.length){var a=M[t[0].row+1];console.log("Selected : "+a)}}}],height:this.props.height,width:this.props.width})}}]),t}(n.a.Component),$={title:"Company Performance",curveType:"function",legend:{position:"bottom"},hAxis:{textStyle:{color:"#FFF"},titleTextStyle:{color:"#fff"}},vAxis:{textStyle:{color:"#FFF"},titleTextStyle:{color:"#fff"}},backgroundColor:"#262a33",legendTextStyle:{color:"#FFF"},colors:["#f5dd90","#f76c5e"],titleTextStyle:{color:"#fff"}},D=[["Year","Sales","Expenses"],["2004",1e3,400],["2005",1170,460],["2006",660,1120],["2008",1030,540],["2009",1e3,400],["2010",1170,460],["2011",660,1120],["2012",1030,540]],R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(A.a,{className:"chart",chartType:"ScatterChart",data:D,options:$,legendToggle:!0,height:this.props.height,width:this.props.width})}}]),t}(n.a.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"gc",className:"graphs"},n.a.createElement("h1",null,"Google Charts"),n.a.createElement(R,{width:this.props.width,height:this.props.height}),n.a.createElement(W,{width:this.props.width,height:this.props.height}),n.a.createElement(P,{width:this.props.width,height:this.props.height}),n.a.createElement(G,{width:this.props.width,height:this.props.height}))}}]),t}(n.a.Component),Y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={width:"100%",height:"400px",showGC:!1,showFC:!0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"GConClick",value:function(){this.setState({showGC:!0,showFC:!1})}},{key:"FConClick",value:function(){this.setState({showGC:!1,showFC:!0})}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(p,{gcclick:this.GConClick.bind(this),fcclick:this.FConClick.bind(this)}),n.a.createElement("div",null,this.state.showFC?n.a.createElement(T,{width:this.state.width,height:this.state.height}):null,this.state.showGC?n.a.createElement(U,{width:this.state.width,height:this.state.height}):null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[15,2,1]]]);
//# sourceMappingURL=main.ce5700a3.chunk.js.map