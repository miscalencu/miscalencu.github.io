(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],{31:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"importStyles",(function(){return B}));var r={};a.r(r),a.d(r,"get",(function(){return R}));var l=a(0),i=a.n(l),o=a(26),s=a.n(o),c=a(3),d=a(10),u=function(){return i.a.createElement("div",null,"Home here")},m=a(30),p=a(23),g=a(11),h=a(12),f=a(14),E=a(13),v=a(15),b=a(4),y=a(7),C=a(16),N=a.n(C),x=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).maximumNumberOfPageButtons=11,a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"computeModel",value:function(){var e=this.props.pageNr,t=this.props.pageSize,a=this.props.dataCount,n=Math.ceil(a/t);return{currentPageNumber:e,totalNumberOfPages:n,firstPageButton:{number:1,enabled:e>1},previousPageButton:{number:e>1?e-1:1,enabled:e>1},nextPageButton:{number:e<n?e+1:n,enabled:e<n},lastPageButton:{number:n,enabled:e<n},displayResultsFrom:0===a?0:t*(e-1)+1,displayResultsTo:0===a?0:Math.min(t*(e-1)+t,a),displayResultsTotal:a}}},{key:"changePage",value:function(e){this.props.onPageChanged(e)}},{key:"render",value:function(){var e=this,t=this.computeModel();return i.a.createElement("div",{className:"pagination"},i.a.createElement("div",{className:N()({first:!0,disabled:!t.firstPageButton.enabled}),onClick:function(){return e.changePage(t.firstPageButton.number)}},i.a.createElement(y.a,{icon:b.a})),i.a.createElement("div",{className:N()({prev:!0,disabled:!t.previousPageButton.enabled}),onClick:function(){return e.changePage(t.previousPageButton.number)}},i.a.createElement(y.a,{icon:b.c})),i.a.createElement("div",{className:N()({item:!0})},i.a.createElement("span",{className:"nowrap"},"Page ",t.currentPageNumber," of ",t.totalNumberOfPages)),i.a.createElement("div",{className:N()({next:!0,disabled:!t.nextPageButton.enabled}),onClick:function(){return e.changePage(t.nextPageButton.number)}},i.a.createElement(y.a,{icon:b.d})),i.a.createElement("div",{className:N()({last:!0,disabled:!t.lastPageButton.enabled}),onClick:function(){return e.changePage(t.lastPageButton.number)}},i.a.createElement(y.a,{icon:b.b})),i.a.createElement("div",{className:"right"},"Displaying results ",t.displayResultsFrom," - ",t.displayResultsTo," of"," ",t.displayResultsTotal))}}]),t}(l.Component);x.defaultProps={onPageChanged:function(){}};var S=a(27),k=function(e){var t=e.toolTip,a=void 0===t?"":t,n=(e.classNames,e.headerClassName),r=void 0===n?"":n,l=e.sortable,o=void 0!==l&&l,s=Object(S.a)(e,["toolTip","classNames","headerClassName","sortable"]);return i.a.createElement("th",{className:"".concat(s.className," grid-header-cell ").concat(r),title:a+(a&&o?"\n":"")+(o?"Click to sort this using value!":"")},i.a.createElement("div",{className:"gridHeader"},function(){if(o){var e={icon:s.field===s.orderBy?"DESC"===s.orderDir?b.e:b.f:b.i,class:s.field===s.orderBy?"active":"inactive"};return i.a.createElement("table",{className:"grid-sort-link",onClick:function(){return function(){var e=s.field===s.orderBy;s.onSortChanged(s.field,e&&"ASC"===s.orderDir?"DESC":"ASC")}()}},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",{className:"pr5"},s.header),i.a.createElement("td",{className:"align-middle"},i.a.createElement(y.a,{icon:e.icon,className:e.class})))))}return s.header}()))},P=function(e){e.isClickable};function D(e){return i.a.createElement("td",{className:e.className},function(){var t=e.data,a=t[e.field],n=a;return e.renderer&&(n=e.renderer(t)),e.isClickable&&(""!==a||e.renderer)&&(n=i.a.createElement("span",{class:"link",onClick:function(n){return function(t,a,n,r){e.onClick(t,a,n),r.preventDefault()}(e.field,a,t,n)}},n)),""===n&&""!==e.emptyPlaceholder&&(n=e.emptyPlaceholder),n}(),e.children)}D.defaultProps={onClick:function(){}};var O=function(e){var t=e.isVisible,a=void 0!==t&&t,n=e.isExpanded,r=void 0!==n&&n,l=e.onExpand,o=void 0===l?function(){}:l;return a&&i.a.createElement("td",null,i.a.createElement("span",{style:{cursor:"pointer"},onClick:o},i.a.createElement(y.a,{icon:r?b.g:b.h})))};function B(e){console.log(e);var t=[];return t.push(a.e(3).then(a.t.bind(null,45,7))),"none"!==e&&t.push(a.e(4).then(a.t.bind(null,46,7))),t}var j=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).addIsExpandedColumn=function(e){return a.props.isExpandable?e.map((function(e){return Object(p.a)({},e,{isExpanded:!1})})):e},a.toggleSelectRow=function(e,t){var n=e.ctrlKey,r=e.shiftKey,l=a.state.data.data;(n||r)&&(e.preventDefault(),document.getSelection().removeAllRanges());var i=[],o=[];n&&(i=a.state.selectedKeys.slice(),o=a.state.selectedItems.slice());var s=t,c=t;if(r){var d=[];l.forEach((function(e){d.push(e[a.props.keyField])})),d.indexOf(a.state.selectedLast)<d.indexOf(s)?s=a.state.selectedLast:c=a.state.selectedLast}var u=!1;l.forEach((function(e){e.Code===s&&(u=!0),u&&(-1===i.indexOf(e.Code)?(i.push(e.Code),o.push(e)):(i=i.filter((function(t){return t!==e.Code})),a.props.keyField&&(o=o.filter((function(t){return t[a.props.keyField]!==e.key}))))),e.Code===c&&(u=!1)})),a.setState({selectedKeys:i,selectedItems:o,selectedLast:t}),a.props.onSelectChanged(i,o)},a.renderRows=function(e){var t=a.props,n=t.emptyText,r=t.isExpandable,l=t.keyField,o=t.loading,s=a.state.data,c=!s||0===s.length;return o&&c?i.a.createElement("tr",{key:"loading"},i.a.createElement("td",{colSpan:a.props.children.length+(r?1:0),align:"center",className:"bold"},i.a.createElement(y.a,{icon:b.j,className:"fa-spin mr-3"})," Loading data ...")):c?i.a.createElement("tr",{key:"empty"},i.a.createElement("td",{colSpan:a.props.children.length+(r?1:0),align:"center"},n)):s.map((function(t,n){var o=l?t[l]:n,c=[];c.push(a.props.classNameRowRenderer(t));var d=function(){},u=function(){},g=function(){},h=function(){},f=!1;return a.props.enableSelection&&((f=-1!==a.state.selectedKeys.indexOf(o))||(d=function(e){e.currentTarget.classList.add("grid-selected")},u=function(e){e.currentTarget.classList.remove("grid-selected")}),g=function(e){(e.ctrlKey||e.shiftKey)&&e.preventDefault()},h=function(e){return a.toggleSelectRow(e,o,t)}),f&&c.push("grid-selected"),i.a.createElement(i.a.Fragment,{key:o},i.a.createElement("tr",{className:c.join(" "),onClick:h,onMouseDown:g,onMouseOver:d,onMouseOut:u},i.a.createElement(O,{isVisible:r,isExpanded:t.isExpanded,onExpand:function(){var e=Object(m.a)(s),n=e.indexOf(t);e[n]=Object(p.a)({},e[n]),e[n].isExpanded=!e[n].isExpanded,a.setState({data:e})}}),i.a.Children.map(e,(function(e,n){return i.a.createElement(D,Object.assign({},e.props,{data:t,onCellClick:a.props.onCellClick,emptyPlaceholder:a.props.emptyPlaceholder}))}))),r&&t.isExpanded&&i.a.createElement("tr",null,i.a.createElement("td",null," "),i.a.createElement("td",{colSpan:a.props.children.length},i.a.cloneElement(a.props.expandedRowContent(t),{data:t}))))}))},a.state={selectedKeys:[],selectedItems:[],selectedLast:null,data:a.addIsExpandedColumn(e.data)},n.importStyles(a.props.skin),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.skin,r=t.data;e.skin!==a&&n.importStyles(a),e.data!==r&&this.setState({data:this.addIsExpandedColumn(r)})}},{key:"handlePageChange",value:function(e){this.props.onStateChanged({pageSize:this.props.pageSize,pageNr:e,orderBy:this.props.orderBy,orderDir:this.props.orderDir})}},{key:"handleSortChange",value:function(e,t){this.props.onStateChanged({pageSize:this.props.pageSize,pageNr:1,orderBy:e,orderDir:t})}},{key:"render",value:function(){var e=this,t=[],a=function(e){return i.a.isValidElement(e)&&e.type===P};i.a.Children.toArray(this.props.children).map((function(e){return a(e)?t.push(e):i.a.isValidElement(e)&&e.props.children&&i.a.Children.toArray(e.props.children).map((function(e){return a(e)&&t.push(e),null})),null}));var n=!this.props.gridData||!this.props.gridData.dataItems||0===this.props.gridData.dataItems.length;return i.a.createElement("div",{className:"digital-grid-wrapper ".concat(this.props.skin?"skin-".concat(this.props.skin):"")},i.a.createElement("table",{className:this.props.className+" digital-grid",style:{opacity:this.props.loading&&!n?.4:1}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{key:"emptyHeader",style:this.props.isExpandable&&t.length>=1?{}:{display:"none"}}),i.a.Children.map(t,(function(t,a){return i.a.createElement(k,Object.assign({},t.props,{orderBy:e.props.orderBy,key:a,orderDir:e.props.orderDir,onSortChanged:function(t,a){return e.handleSortChange(t,a)}}))})))),i.a.createElement("tbody",null,this.renderRows(t))),this.props.enableSelection&&this.props.showSelectionInfo&&i.a.createElement("div",{className:"text-info p-3"},"[icon:info]",i.a.createElement("small",null,"Row selection is enabled.",i.a.createElement("br",null),"Multiselect is also enabled by using the Shift and/or Ctrl keys.")),this.props.dataCount>this.state.data.length&&this.props.pageSize>0&&i.a.createElement(x,{pageNr:this.props.pageNr,pageSize:this.props.pageSize,dataCount:this.props.dataCount,onPageChanged:function(t){return e.handlePageChange(t)}}))}}]),t}(l.Component);j.defaultProps={skin:"default",className:"",classNameRowRenderer:function(){},onStateChanged:function(){},enableSelection:!1,onSelectChanged:function(){},showSelectionInfo:!0,data:[],dataCount:0,pageNr:1,pageSize:0,orderBy:"?",orderDir:"ASC",emptyText:"No data available!",isExpandable:!1,expandedRowContent:function(){return i.a.createElement(i.a.Fragment,null)}};var w=function(){return i.a.createElement(j,{data:[{Id:1,FirstName:"George",LastName:"Miscalencu"},{Id:2,FirstName:"John",LastName:"Doe"}]},i.a.createElement(P,{header:"Id",field:"Id"}),i.a.createElement(P,{header:"First Name",field:"FirstName"}),i.a.createElement(P,{header:"Last Name",field:"LastName"}))},I=a(18);function R(e,t){t=t||function(){},(e=e||{}).url||console.error("_data.get: missing Url");var a=null;fetch(e.url).then((function(e){return e.json()})).then((function(n){var r,l,i;if(e.orderBy&&e.orderDir&&(r=n,l=e.orderBy,i=e.orderDir,n=r.sort((function(e,t){var a=e[l]?e[l]:"-",n=t[l]?t[l]:"-",r=0;return a>n&&(r="ASC"===i?1:-1),a<n&&(r="ASC"===i?-1:1),r}))),e.pageNr&&e.pageSize){var o=function(e,t,a){var n=(t-1)*a,r=e.slice(n).slice(0,a),l=Math.ceil(e.length/a);return{total:e.length,pages:l,data:r}}(n,e.pageNr,e.pageSize);n=o.data,a=o.total}t(n,a)}))}var z=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(f.a)(this,Object(E.a)(t).call(this,e))).state={loading:!1,data:[],count:null,pageSize:10,pageNr:1,skin:"default",skins:[{val:"",text:"None"},{val:"default",text:"Default Skin"}]},a.loadData=a.loadData.bind(Object(I.a)(a)),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadData(this.state.pageSize,this.state.pageNr)}},{key:"loadData",value:function(e,t,a,n){var l=this;this.setState({loading:!0},r.get({url:"".concat("/react-digital-grid/examples","/data/generated.json"),pageNr:t,pageSize:e,orderBy:a,orderDir:n},(function(r,i){l.setState({data:r,loading:!1,dataCount:i,pageNr:t,pageSize:e,orderBy:a,orderDir:n})})))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Skin"),i.a.createElement("select",{value:this.state.skin,onChange:function(t){return e.setState({skin:t.target.value})}},this.state.skins.map((function(e){return i.a.createElement("option",{key:e.val,value:e.val},e.text)}))))),i.a.createElement(j,{id:"full",skin:this.state.skin,loading:this.state.loading,emptyText:"No data to display at this point.",data:this.state.data,dataCount:this.state.dataCount,pageNr:this.state.pageNr,pageSize:this.state.pageSize,orderBy:this.state.orderBy,orderDir:this.state.orderDir,onStateChanged:function(t){return e.loadData(t.pageSize,t.pageNr,t.orderBy,t.orderDir)}},i.a.createElement(P,{header:"Picture",field:"picture",className:"center",renderer:function(e){return i.a.createElement("img",{src:e.picture,className:"profilepic",alt:e.name})}}),i.a.createElement(P,{header:"Name",field:"name",className:"bold",sortable:!0}),i.a.createElement(P,{header:"Gender",field:"gender"}),i.a.createElement(P,{header:"Eye Color",field:"eyeColor"}),i.a.createElement(P,{header:"Age",field:"age",className:"bold",sortable:!0}),i.a.createElement(P,{header:"Address",field:"address",className:"italic"}),i.a.createElement(P,{header:"Phone",field:"phone"})))}}]),t}(l.Component),F=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/")},"Home")),i.a.createElement("li",null,"Basic Features",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/simple")},"Simple")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/templates")},"Templates")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/paging")},"Paging")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/sorting")},"Sorting")))),i.a.createElement("li",null,"Advanced Features",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/events")},"Events")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/selection")},"Selection")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/expandable")},"Expandable content")))),i.a.createElement("li",null,i.a.createElement(c.b,{to:"".concat("/react-digital-grid/examples","/full")},"Full Features")))},A=function(){return i.a.createElement(j,{data:[{Id:1,Column1:"Jane",Column2:"Doe"},{Id:2,Column1:"John",Column2:"Doe"}],isExpandable:!0,expandedRowContent:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"This is some content for row: ",e.Id),i.a.createElement("p",null,"You can add even another grid here."))}},i.a.createElement(P,{header:"Id",field:"Id"}),i.a.createElement(P,{header:"Column 1",field:"Column1"}),i.a.createElement(P,{header:"Column 2",field:"Column2"}))},T=function(){return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("div",null,i.a.createElement("h1",null,"404"),i.a.createElement("h2",null,"Oops! Page not found")),i.a.createElement(c.b,{to:"/"},"Go to Home"))};a(43);var L=function(){return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"header"},i.a.createElement("span",null,"Digital")," Grid Examples"),i.a.createElement("div",{className:"main_container"},i.a.createElement("div",{className:"left"},i.a.createElement(F,null)),i.a.createElement("div",{className:"main"},i.a.createElement(d.d,null,i.a.createElement(d.b,{path:"".concat("/react-digital-grid/examples","/"),exact:!0,component:u}),i.a.createElement(d.b,{path:"".concat("/react-digital-grid/examples","/simple"),component:w}),i.a.createElement(d.b,{path:"".concat("/react-digital-grid/examples","/full"),component:z}),i.a.createElement(d.b,{path:"".concat("/react-digital-grid/examples","/expandable"),component:A}),i.a.createElement(d.b,{path:"".concat("/react-digital-grid/examples","/not-found"),component:T}),i.a.createElement(d.a,{to:"".concat("/react-digital-grid/examples","/not-found")})))),i.a.createElement("div",{className:"footer"},"Digital Grid Examples"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(c.a,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.20cfb28c.chunk.js.map