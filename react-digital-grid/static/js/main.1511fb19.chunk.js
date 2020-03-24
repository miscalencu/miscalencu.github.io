(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],{247:function(e,t,a){},254:function(e,t,a){e.exports=a(759)},758:function(e,t,a){},759:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"get",(function(){return G}));a(255),a(457),a(236);var r=a(0),l=a.n(r),i=a(167),o=a.n(i),c=a(56),s=a(61),u=function(){return l.a.createElement("h1",null,"Home here")},d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{href:"".concat("/react-digital-grid","/#").concat(e.to)},e.children),!1)},m=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d,{to:"/"},"Home")),l.a.createElement("li",null,"Basic Features",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/simple"},"Simple")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/skins"},"Skins")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/paging"},"Paging")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/sorting"},"Sorting")))),l.a.createElement("li",null,"Advanced Features",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/events"},"Events")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/selection"},"Selection")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/expandable"},"Expandable content")),l.a.createElement("li",null,l.a.createElement(d,{to:"/examples/full"},"Full Features")))),l.a.createElement("li",null,l.a.createElement(d,{to:"/documentation"},"Documentation")))},p=a(15),f=a(18),g=function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"404 - Page Not Found"),l.a.createElement("div",{style:{padding:"10px"}},l.a.createElement("h2",null,"Oops! Page not found!"),l.a.createElement(f.a,{color:"#c00",icon:p.n,size:"9x"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(c.c,{to:"/"},"Go Home")))},h=function(e){var t="".concat("/react-digital-grid","/#").concat(e.to);return document.location.href=t,null},E=a(20),b=a(121),v=a.n(b),y=a(252),N=a(62),C=a(83),S=a(84),k=a(85),O=a(86),x=a(87),j=a.n(x),w=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).maximumNumberOfPageButtons=11,e}return Object(S.a)(a,[{key:"computeModel",value:function(){var e=this.props.pageNr,t=this.props.pageSize,a=this.props.dataCount,n=Math.ceil(a/t);return{currentPageNumber:e,totalNumberOfPages:n,firstPageButton:{number:1,enabled:e>1},previousPageButton:{number:e>1?e-1:1,enabled:e>1},nextPageButton:{number:e<n?e+1:n,enabled:e<n},lastPageButton:{number:n,enabled:e<n},displayResultsFrom:0===a?0:t*(e-1)+1,displayResultsTo:0===a?0:Math.min(t*(e-1)+t,a),displayResultsTotal:a}}},{key:"changePage",value:function(e){this.props.onPageChanged(e)}},{key:"render",value:function(){var e=this,t=this.computeModel();return l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",{className:j()({first:!0,"page-item":!0,disabled:!t.firstPageButton.enabled})},l.a.createElement("span",{className:"page-link",onClick:function(){return e.changePage(t.firstPageButton.number)}},l.a.createElement(f.a,{icon:p.a}))),l.a.createElement("li",{className:j()({prev:!0,"page-item":!0,disabled:!t.previousPageButton.enabled})},l.a.createElement("span",{className:"page-link",onClick:function(){return e.changePage(t.previousPageButton.number)}},l.a.createElement(f.a,{icon:p.c}))),l.a.createElement("li",{className:j()({page:!0,"page-item":!0})},l.a.createElement("span",{className:"nowrap page-link"},"Page ",t.currentPageNumber," of ",t.totalNumberOfPages)),l.a.createElement("li",{className:j()({next:!0,"page-item":!0,disabled:!t.nextPageButton.enabled})},l.a.createElement("span",{className:"page-link",onClick:function(){return e.changePage(t.nextPageButton.number)}},l.a.createElement(f.a,{icon:p.d}))),l.a.createElement("li",{className:j()({last:!0,"page-item":!0,disabled:!t.lastPageButton.enabled})},l.a.createElement("span",{className:"page-link",onClick:function(){return e.changePage(t.lastPageButton.number)}},l.a.createElement(f.a,{icon:p.b}))),l.a.createElement("li",{className:"right page-item"},l.a.createElement("span",{className:"page-link"},"Displaying results ",t.displayResultsFrom," - ",t.displayResultsTo," of"," ",t.displayResultsTotal)))}}]),a}(r.Component);w.defaultProps={onPageChanged:function(){}};var P=a(253),D=function(e){var t=e.toolTip,a=void 0===t?"":t,n=(e.classNames,e.headerClassName),r=void 0===n?"":n,i=e.sortable,o=void 0!==i&&i,c=Object(P.a)(e,["toolTip","classNames","headerClassName","sortable"]);return l.a.createElement("th",{className:"".concat(c.className," grid-header-cell ").concat(r),title:a+(a&&o?"\n":"")+(o?"Click to sort this using value!":"")},l.a.createElement("div",{className:"gridHeader"},function(){if(o){var e={icon:c.field===c.orderBy?"DESC"===c.orderDir?p.e:p.f:p.k,class:c.field===c.orderBy?"active":"inactive"};return l.a.createElement("table",{className:"grid-sort-link",onClick:function(){return function(){var e=c.field===c.orderBy;c.onSortChanged(c.field,e&&"ASC"===c.orderDir?"DESC":"ASC")}()}},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"pr5"},c.header),l.a.createElement("td",{className:"align-middle"},l.a.createElement(f.a,{icon:e.icon,className:e.class})))))}return c.header}()))},B=D;D.defaultProps={className:""};var R=function(e){e.isClickable};function F(e){return l.a.createElement("td",{className:e.className},function(){var t=e.data,a=t[e.field],n=a;return e.renderer&&(n=e.renderer(t)),e.isClickable&&(""!==a||e.renderer)&&(n=l.a.createElement("span",{class:"link",onClick:function(n){return function(t,a,n,r){e.onClick(t,a,n),r.preventDefault()}(e.field,a,t,n)}},n)),""===n&&""!==e.emptyPlaceholder&&(n=e.emptyPlaceholder),n}(),e.children)}F.defaultProps={onClick:function(){}};var z=function(e){var t=e.isVisible,a=void 0!==t&&t,n=e.isExpanded,r=void 0!==n&&n,i=e.onExpand,o=void 0===i?function(){}:i;return a&&l.a.createElement("td",null,l.a.createElement("span",{style:{cursor:"pointer"},onClick:function(e){return o(e)}},l.a.createElement(f.a,{icon:r?p.i:p.j})))},I={name:"Style Plugin",enabled:!0,activate:function(e,t,n){var r=Object.assign({},n),l=e.props.skin,i=[];return i.push(a.e(3).then(a.t.bind(null,764,7))),"none"!==l&&i.push(a.e(4).then(a.t.bind(null,765,7))),{gridClassNames:function(t){return function(t){var a=r.gridClassNames(t);return"bootstrap"===e.props.skin&&a.push("table"),a}(t)}}}},M=function(){var e="Selection Plugin",t=function(e){var t=e.event,a=e.item,n=e.grid,r=n.props.keyField,l=function(e,t,a,n){var r=e.ctrlKey,l=e.shiftKey;(r||l)&&(e.preventDefault(),document.getSelection().removeAllRanges());var i=[],o=[];r&&(i=n.selectedKeys.slice(),o=n.selectedItems.slice());var c=t,s=t;if(l){var u=[];a.data.forEach((function(e){u.push(e[a.keyField])}));var d=u.indexOf(n.selectedLast),m=u.indexOf(c);d<m?c=n.selectedLast:s=n.selectedLast}var p=!1;return a.data.forEach((function(e){e[a.keyField]===c&&(p=!0),p&&(-1===i.indexOf(e[a.keyField])?(i.push(e[a.keyField]),o.push(e)):(i=i.filter((function(t){return t!==e[a.keyField]})),a.keyField&&(o=o.filter((function(t){return t[a.keyField]!==e.key}))))),e[a.keyField]===s&&(p=!1)})),{selectedKeys:i,selectedItems:o,selectedLast:t}}(t,r?a[r]:0,n.props,n.state);n.setState(l),n.props.onSelectionChange&&n.props.onSelectionChange(l.selectedKeys,l.selectedItems,l.selectedLast)};return{name:e,enabled:!0,activate:function(a,n,r){var l=Object.assign({},r);if(!n.isSelectable)return{};var i=n.keyField;i||console.error("DIGITAL GRID - You cannot use PLUGIN ".concat(e," when you don't have a keyField defined."));var o=function(e){return-1!==a.state.selectedKeys.indexOf(e[i])};return{selectedKeys:[],selectedItems:[],selectedLast:null,onRowClick:function(e){return t(e)},onRowMouseOver:function(e){return function(e){var t=e.event,a=e.item;o(a)||t.currentTarget.classList.add("grid-selected")}(e)},onRowMouseOut:function(e){return function(e){var t=e.event,a=e.item;o(a)||t.currentTarget.classList.remove("grid-selected")}(e)},onRowMouseDown:function(e){return function(e){var t=e.event;(t.ctrlKey||t.shiftKey)&&t.preventDefault()}(e)},rowClassNames:function(e){return function(e){var t=e.item,a=l.rowClassNames(e);return o(t)&&a.push("grid-selected"),a}(e)}}}}}(),A=function(){var e=function(e){return e.isExpandable?e.data.map((function(e){return Object(N.a)({},e,{isExpanded:!1})})):e.data};return{name:"Expandable Plugin",enabled:!0,activate:function(t,a,n){return{data:e(a)}}}}(),T=function(){var e=[I,M,A],t=function(e,t){var a=Object.assign({},e),n=Object.assign({},t);return["onRowClick","onRowMouseOver","onRowMouseOut","onRowMouseDown"].forEach((function(t){a[t]&&(e[t]=function(e){n[t](e),a[t](e)})})),e};return{initAll:function(a,n){var r=a.props;return e.forEach((function(e){if(e.enabled){var l=e.activate(a,r,n),i=t(l,n);n=Object.assign(n,i)}})),n}}}(),L=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state=n.buidState(e),n}return Object(S.a)(a,[{key:"buidState",value:function(e){var t={data:e.data,onRowClick:function(){},onRowMouseOver:function(){},onRowMouseOut:function(){},onRowMouseDown:function(){},rowClassNames:function(t){return e.classNamesRenderer(t)},gridClassNames:function(){return["digital-grid"]},footerText:e.footerText};return T.initAll(this,t)}},{key:"componentDidUpdate",value:function(e,t){if(JSON.stringify(e.data)!==JSON.stringify(this.props.data)){var a=this.buidState(this.props);JSON.stringify(a)!==JSON.stringify(t)&&this.setState(a)}}},{key:"itemContent",value:function(e,t){var a=this,n={item:e,grid:this},r=this.props,i=r.keyField,o=r.isExpandable,c=i?e[i]:t,s=this.state.rowClassNames(n);return l.a.createElement(l.a.Fragment,{key:c},l.a.createElement("tr",{className:s.join(" "),onClick:function(e){return a.state.onRowClick(Object(N.a)({event:e},n))},onMouseDown:function(e){return a.state.onRowMouseDown(Object(N.a)({event:e},n))},onMouseOver:function(e){return a.state.onRowMouseOver(Object(N.a)({event:e},n))},onMouseOut:function(e){return a.state.onRowMouseOut(Object(N.a)({event:e},n))}},this.rowContent(e)),o&&e.isExpanded&&l.a.createElement("tr",null,l.a.createElement("td",null," "),l.a.createElement("td",{colSpan:this.props.children.length},l.a.cloneElement(this.props.expandedRowContent(e),{data:e}))))}},{key:"rowContent",value:function(e){var t=this,a=this.getColumns(),n=this.props.isExpandable,r=this.state.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{isVisible:n,isExpanded:e.isExpanded,onExpand:function(a){a.preventDefault();var n=Object(y.a)(r),l=n.indexOf(e);n[l]=Object(N.a)({},n[l]),n[l].isExpanded=!n[l].isExpanded,t.setState({data:n})}}),l.a.Children.map(a,(function(a,n){return l.a.createElement(F,Object.assign({},a.props,{data:e,onCellClick:t.props.onCellClick,emptyPlaceholder:t.props.emptyPlaceholder}))})))}},{key:"renderRows",value:function(e){var t=this,a=this.props,n=a.emptyText,r=a.isExpandable,i=a.loading,o=this.state.data,c=!o||0===o.length;return i&&c?l.a.createElement("tr",{key:"loading"},l.a.createElement("td",{colSpan:this.props.children.length+(r?1:0),align:"center",className:"bold"},l.a.createElement(f.a,{icon:p.l,className:"fa-spin mr4"})," Loading data ...")):c?l.a.createElement("tr",{key:"empty"},l.a.createElement("td",{colSpan:this.props.children.length+(r?1:0),align:"center"},n)):o.map((function(e,a){return t.itemContent(e,a)}))}},{key:"handlePageChange",value:function(e){this.props.onStateChange({pageSize:this.props.pageSize,pageNr:e,orderBy:this.props.orderBy,orderDir:this.props.orderDir})}},{key:"handleSortChange",value:function(e,t){this.props.onStateChange({pageSize:this.props.pageSize,pageNr:1,orderBy:e,orderDir:t})}},{key:"getColumns",value:function(){var e=[],t=function(e){return l.a.isValidElement(e)&&e.type===R};return l.a.Children.toArray(this.props.children).map((function(a){return t(a)?e.push(a):l.a.isValidElement(a)&&a.props.children&&l.a.Children.toArray(a.props.children).map((function(a){return t(a)&&e.push(a),null})),null})),e}},{key:"render",value:function(){var e=this,t=this.getColumns(),a=!this.state.data||0===this.state.data.length,n=this.state.gridClassNames();return n.push("skin-".concat(this.props.skin)),this.props.className&&n.push(this.props.className),l.a.createElement(l.a.Fragment,null,l.a.createElement("table",{className:n.join(" "),style:{opacity:this.props.loading&&!a?.4:1}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{key:"emptyHeader",style:this.props.isExpandable&&t.length>=1?{}:{display:"none"}}),l.a.Children.map(t,(function(t,a){return l.a.createElement(B,Object.assign({},t.props,{orderBy:e.props.orderBy,key:a,orderDir:e.props.orderDir,onSortChanged:function(t,a){return e.handleSortChange(t,a)}}))})))),l.a.createElement("tbody",null,this.renderRows(t)),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:this.props.children.length+(this.props.isExpandable?1:0)},this.props.dataCount>this.state.data.length&&this.props.pageSize>0&&l.a.createElement(w,{pageNr:this.props.pageNr,pageSize:this.props.pageSize,dataCount:this.props.dataCount,onPageChanged:function(t){return e.handlePageChange(t)}}),this.state.footerText,this.props.isSelectable&&this.props.showSelectionInfo&&l.a.createElement("div",{className:"pt10"},l.a.createElement(f.a,{icon:p.h,style:{zoom:1.2,paddingRight:"5px",float:"left"}}),l.a.createElement("div",null,"Row selection is enabled.",l.a.createElement("br",null),"Multiselect is also enabled by using the Shift and/or Ctrl keys.")))))))}}]),a}(r.Component);function G(e,t){t=t||function(){},(e=e||{}).url||console.error("_data.get: missing Url");var a=null;fetch(e.url).then((function(e){return e.json()})).then((function(n){var r,l,i;if(e.orderBy&&e.orderDir&&(r=n,l=e.orderBy,i=e.orderDir,n=r.sort((function(e,t){var a=e[l]?e[l]:"-",n=t[l]?t[l]:"-",r=0;return a>n&&(r="ASC"===i?1:-1),a<n&&(r="ASC"===i?-1:1),r}))),e.pageNr&&e.pageSize){var o=function(e,t,a){var n=(t-1)*a,r=e.slice(n).slice(0,a),l=Math.ceil(e.length/a);return{total:e.length,pages:l,data:r}}(n,e.pageNr,e.pageSize);n=o.data,a=o.total}t(n,a)}))}L.defaultProps={emptyText:"No data available!",footerText:"",className:"",classNamesRenderer:function(){return[]},onCellClick:function(){},emptyPlaceholder:"-",skin:"default",isSelectable:!1,showSelectionInfo:!0,onSelectionChange:function(){},isExpandable:!1,expandedRowContent:function(){return null},data:[],keyField:null,loading:!1,dataCount:0,pageNr:1,pageSize:0,orderBy:"?",orderDir:"ASC",onStateChange:function(){}};var J=function(){var e=Object(r.useState)([]),t=Object(E.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!0),c=Object(E.a)(o,2),s=c[0],u=c[1];return Object(r.useEffect)((function(){n.get({url:"".concat("/react-digital-grid","/data/generated_simple.json"),pageNr:1,pageSize:10},(function(e){i(e),u(!1)}))}),[]),l.a.createElement(L,{loading:s,data:a,className:"example-grid"},l.a.createElement(R,{header:"Id",className:"left",field:"guid"}),l.a.createElement(R,{header:"Name",className:"bold",field:"name"}),l.a.createElement(R,{header:"Company",className:"bold",field:"company"}),l.a.createElement(R,{header:"Age",field:"age"}),l.a.createElement(R,{header:"Phone",className:"italic",field:"phone"}),l.a.createElement(R,{header:"Email",field:"email",renderer:function(e){return l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)}}))},K=(a(247),function(){var e=Object(r.useState)([]),t=Object(E.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!0),c=Object(E.a)(o,2),s=c[0],u=c[1];Object(r.useEffect)((function(){n.get({url:"".concat("/react-digital-grid","/data/generated_simple.json"),pageNr:1,pageSize:10},(function(e){i(e),u(!1)}))}),[]);var d=Object(r.useState)("default"),m=Object(E.a)(d,2),p=m[0],f=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skin"),l.a.createElement("select",{value:p,onChange:function(e){return f(e.target.value)}},[{val:"none",text:"None"},{val:"default",text:"Default Skin"},{val:"bootstrap",text:"Bootstrap"}].map((function(e){return l.a.createElement("option",{key:e.val,value:e.val},e.text)}))))),l.a.createElement("div",{className:"bootstrap"===p?"bootstrap-ui":""},l.a.createElement(L,{loading:s,skin:p,data:a,className:"example-grid"},l.a.createElement(R,{header:"Id",className:"left",field:"guid"}),l.a.createElement(R,{header:"Name",className:"bold",field:"name"}),l.a.createElement(R,{header:"Company",className:"bold",field:"company"}),l.a.createElement(R,{header:"Age",field:"age"}),l.a.createElement(R,{header:"Phone",className:"italic",field:"phone"}),l.a.createElement(R,{header:"Email",field:"email",renderer:function(e){return l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)}}))))}),_=function(){var e=Object(r.useState)([]),t=Object(E.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!0),c=Object(E.a)(o,2),s=c[0],u=c[1],d=Object(r.useState)(0),m=Object(E.a)(d,2),p=m[0],f=m[1],g=Object(r.useState)(1),h=Object(E.a)(g,2),b=h[0],v=h[1],y=Object(r.useState)(10),N=Object(E.a)(y,2),C=N[0],S=N[1],k=function(e,t){n.get({url:"".concat("/react-digital-grid","/data/generated_simple.json"),pageNr:t,pageSize:e},(function(a,n){i(a),f(n),v(t),S(e),u(!1)}))};return Object(r.useEffect)((function(){k(C,b)}),[b,C]),l.a.createElement(L,{loading:s,data:a,dataCount:p,pageNr:b,pageSize:C,className:"example-grid",onStateChange:function(e){return k(e.pageSize,e.pageNr)}},l.a.createElement(R,{header:"Id",className:"left",field:"guid"}),l.a.createElement(R,{header:"Name",className:"bold",field:"name"}),l.a.createElement(R,{header:"Company",className:"bold",field:"company"}),l.a.createElement(R,{header:"Age",field:"age"}),l.a.createElement(R,{header:"Phone",className:"italic",field:"phone"}),l.a.createElement(R,{header:"Email",field:"email",renderer:function(e){return l.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)}}))},H=function(){return l.a.createElement(L,{data:[{Id:1,Column1:"Jane",Column2:"Doe"},{Id:2,Column1:"John",Column2:"Doe"}],isExpandable:!0,expandedRowContent:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"This is some content for row: ",e.Id),l.a.createElement("p",null,"You can add even another grid here."))}},l.a.createElement(R,{header:"Id",field:"Id"}),l.a.createElement(R,{header:"Column 1",field:"Column1"}),l.a.createElement(R,{header:"Column 2",field:"Column2"}))},V=a(100),U=function(e){Object(O.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={loading:!1,data:[],count:null,pageSize:10,pageNr:1,skin:"default",skins:[{val:"",text:"None"},{val:"default",text:"Default Skin"},{val:"bootstrap",text:"Bootstrap"}],gridInfo:{}},n.loadData=n.loadData.bind(Object(V.a)(n)),n.onSelectionChange=n.onSelectionChange.bind(Object(V.a)(n)),n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.loadData(this.state.pageSize,this.state.pageNr)}},{key:"loadData",value:function(e,t,a,r){var l=this;this.setState({loading:!0,gridInfo:Object.assign(this.state.gridInfo,{pageNr:t,pageSize:e,orderBy:a,orderDir:r})},n.get({url:"".concat("/react-digital-grid","/data/generated.json"),pageNr:t,pageSize:e,orderBy:a,orderDir:r},(function(n,i){l.setState({data:n,loading:!1,dataCount:i,pageNr:t,pageSize:e,orderBy:a,orderDir:r})})))}},{key:"onSelectionChange",value:function(e,t,a){this.setState(Object.assign(this.state.gridInfo,{selectedKeys:e,selectedLast:a}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skin"),l.a.createElement("select",{value:this.state.skin,onChange:function(t){return e.setState({skin:t.target.value})}},this.state.skins.map((function(e){return l.a.createElement("option",{key:e.val,value:e.val},e.text)}))))),l.a.createElement("div",{style:{float:"left"},className:"bootstrap"===this.state.skin?"bootstrap-ui":""},l.a.createElement(L,{id:"full",skin:this.state.skin,loading:this.state.loading,emptyText:"No data to display at this point.",keyField:"guid",data:this.state.data,isSelectable:!0,onSelectionChange:this.onSelectionChange,isExpandable:!0,expandedRowContent:function(e){return l.a.createElement("pre",{style:{maxWidth:500,overflow:"hidden",textOverflow:"ellipsis"}},JSON.stringify(e,null,4))},dataCount:this.state.dataCount,pageNr:this.state.pageNr,pageSize:this.state.pageSize,orderBy:this.state.orderBy,orderDir:this.state.orderDir,onStateChange:function(t){return e.loadData(t.pageSize,t.pageNr,t.orderBy,t.orderDir)}},l.a.createElement(R,{header:"Picture",field:"picture",className:"center",renderer:function(e){return l.a.createElement("img",{src:e.picture,height:"36",className:"profilepic",alt:e.name})}}),l.a.createElement(R,{header:"Name",field:"name",className:"bold",sortable:!0}),l.a.createElement(R,{header:"Gender",field:"gender"}),l.a.createElement(R,{header:"Eye Color",field:"eyeColor"}),l.a.createElement(R,{header:"Age",field:"age",className:"bold",sortable:!0}),l.a.createElement(R,{header:"Address",field:"address",className:"italic"}),l.a.createElement(R,{header:"Phone",field:"phone"}))),l.a.createElement("div",{className:"info"},l.a.createElement("b",null,"Grid Info"),":",l.a.createElement("br",null),l.a.createElement("pre",null,JSON.stringify(this.state.gridInfo,null,4))))}}]),a}(r.Component),W=a(763),q=a(762),Y=function(e){var t=e.match.params.example,a=null,i="Not found",o=Object(r.useState)("Loading source code..."),c=Object(E.a)(o,2),s=c[0],u=c[1],d=Object(r.useState)(!1),m=Object(E.a)(d,2),g=m[0],h=m[1],b=Object(r.useState)(!1),y=Object(E.a)(b,2),N=y[0],C=y[1],S=Object(r.useState)([]),k=Object(E.a)(S,2),O=k[0],x=k[1];switch(Object(r.useEffect)((function(){fetch("".concat("/react-digital-grid","/examples/").concat(t,".jsx")).then((function(e){return e.text()})).then((function(e){return u(e)})),n.get({url:"".concat("/react-digital-grid","/data/").concat("full"===t?"generated.json":"generated_simple.json"),pageNr:1,pageSize:10,orderBy:"?",orderDir:"ASC"},(function(e){return x(e)}))}),[t]),t){case"simple":i="Simple, basic",a=J;break;case"skins":i="Different skins",a=K;break;case"paging":i="Pagination",a=_;break;case"expandable":i="Expandable content",a=H;break;case"full":i="Full options enabled",a=U;break;default:return null}v.a.setAppElement(document.getElementById("app"));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,i,l.a.createElement("button",{onClick:function(){return C(!0)},style:{marginLeft:"5px"}},"Show Data Preview ",l.a.createElement(f.a,{icon:p.g}))),l.a.createElement(a,null),l.a.createElement("h1",{style:{padding:"30px 0 5px 0",clear:"both"}},"Grid Code",l.a.createElement("button",{onClick:function(){return h(!0)},style:{marginLeft:"5px"}},"Show Full Page Source Code ",l.a.createElement(f.a,{icon:p.g}))),l.a.createElement(W.a,{language:"javascript|html",style:q.a},function(e){var t=[],a=!1,n=!1;return e.split("\n").forEach((function(e){-1!==e.indexOf("<Grid")&&(t.push(""),a=!0),a&&!n&&t.push(e),-1!==e.indexOf("</Grid")&&(n=!0,t.push(""),t.push(""))})),t.join("\n")}(s)),l.a.createElement(v.a,{isOpen:g,onRequestClose:function(){return h(!1)},style:{content:{top:"85px",padding:"5px"}}},l.a.createElement("button",{onClick:function(){return h(!1)}},"Close Full Page Source Code ",l.a.createElement(f.a,{icon:p.m})),l.a.createElement(W.a,{language:"javascript|html",style:q.a},s)),l.a.createElement(v.a,{isOpen:N,onRequestClose:function(){return C(!1)},style:{content:{top:"85px",padding:"5px"}}},l.a.createElement("button",{onClick:function(){return C(!1)}},"Close Data Preview ",l.a.createElement(f.a,{icon:p.m})),l.a.createElement(W.a,{language:"json",style:q.a},JSON.stringify(O,0,4))))};a(758);var $=function(){return l.a.createElement("div",{className:"app",id:"app"},l.a.createElement("div",{className:"header"},l.a.createElement(d,{to:"/"},l.a.createElement("span",null,"Digital")," Grid")),l.a.createElement("div",{className:"main_container"},l.a.createElement("div",{className:"left"},l.a.createElement(m,null)),l.a.createElement("div",{className:"main"},l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/",exact:!0,component:u}),l.a.createElement(s.b,{path:"/examples/:example",component:Y}),l.a.createElement(s.b,{path:"/not-found",component:g}),l.a.createElement(h,{to:"/not-found"})))),l.a.createElement("div",{className:"footer"},"Digital Grid Examples"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=c.b;o.a.render(l.a.createElement(Q,{basename:"".concat("/react-digital-grid","/")},l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[254,1,2]]]);
//# sourceMappingURL=main.1511fb19.chunk.js.map