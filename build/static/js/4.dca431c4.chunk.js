/*! For license information please see 4.dca431c4.chunk.js.LICENSE.txt */
(this.webpackJsonptokshop=this.webpackJsonptokshop||[]).push([[4],{129:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(180),i=r.n(n),o=r(0),s=r.n(o),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)};function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function u(e){return s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 512 512"},s.a.createElement("path",{fill:e.color,d:"M504.1 256C504.1 119 393 7.9 256 7.9S7.9 119 7.9 256 119 504.1 256 504.1 504.1 393 504.1 256z"}),s.a.createElement("path",{fill:"#FFF",d:"M285 256l72.5-84.2c7.9-9.2 6.9-23-2.3-31-9.2-7.9-23-6.9-30.9 2.3L256 222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3-9.2 7.9-10.2 21.8-2.3 31L227 256l-72.5 84.2c-7.9 9.2-6.9 23 2.3 31 4.1 3.6 9.2 5.3 14.3 5.3 6.2 0 12.3-2.6 16.6-7.6l68.2-79.2 68.2 79.2c4.3 5 10.5 7.6 16.6 7.6 5.1 0 10.2-1.7 14.3-5.3 9.2-7.9 10.2-21.8 2.3-31L285 256z"}))}var d={progressBar:{borderRadius:3,boxShadow:"inset 0 1px 3px rgba(0, 0, 0, .2)",bottom:14,position:"absolute",width:"80%"},buttonProgressBar:{position:"inherit",width:"100%"},progressBarFill:{backgroundColor:"#659cef",borderRadius:3,height:10,transition:"width 500ms ease-in-out"}},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.style,r=e.progressBar,n=e.displayProgressBarStatus,i=e.isButtonProgressBar;return s.a.createElement("div",{style:Object.assign({},d.progressBar,i&&d.buttonProgressBar)},s.a.createElement("span",{style:Object.assign({},d.progressBarFill,t,{width:"".concat(r,"%"),display:n})}))},t}(s.a.Component),f={dropArea:{alignItems:"center",borderStyle:"dashed",borderWidth:2,borderRadius:20,borderColor:"#CCC",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:20},dropAreaDefaultBorderColor:{borderColor:"#CCC"},inputFile:{display:"none"},highlight:{borderColor:"#686868"},unhighlight:{borderColor:"#CCC"},dropFile:{background:"linear-gradient(to bottom, #EEE, #DDD)",borderRadius:20,display:"block",height:120,width:100,paddingLeft:10,paddingRight:10,position:"relative",zIndex:10},column:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},fileSizeInfo:{backgroundColor:"rgba(255, 255, 255, 0.4)",borderRadius:3,lineHeight:1,marginBottom:"0.5em",padding:"0 0.4em"},fileNameInfo:{backgroundColor:"rgba(255, 255, 255, 0.4)",borderRadius:3,fontSize:14,lineHeight:1,padding:"0 0.4em"},defaultCursor:{cursor:"default"},pointerCursor:{cursor:"pointer"},dropFileRemoveButton:{height:23,position:"absolute",right:6,top:6,width:23}},h=(function(e){function t(){var t,r,n,o,a,l,d,c,h,p=e.apply(this,arguments)||this;return p.inputFileRef=s.a.createRef(),p.dropAreaRef=s.a.createRef(),p.fileSizeInfoRef=s.a.createRef(),p.fileNameInfoRef=s.a.createRef(),p.REMOVE_ICON_COLOR=p.props.removeButtonColor||(null===(o=null===(n=null===(r=null===(t=p.props.style)||void 0===t?void 0:t.dropArea)||void 0===r?void 0:r.dropFile)||void 0===n?void 0:n.removeButton)||void 0===o?void 0:o.color)||(null===(d=null===(l=null===(a=p.props.style)||void 0===a?void 0:a.dropFile)||void 0===l?void 0:l.removeButton)||void 0===d?void 0:d.color)||(null===(h=null===(c=p.props.style)||void 0===c?void 0:c.removeButton)||void 0===h?void 0:h.color)||"#A01919",p.REMOVE_ICON_COLOR_LIGHT=function(e,t){var r=!1;"#"==e[0]&&(e=e.slice(1),r=!0);var n=parseInt(e,16),i=(n>>16)+t;i>255?i=255:i<0&&(i=0);var o=(n>>8&255)+t;o>255?o=255:o<0&&(o=0);var s=(255&n)+t;return s>255?s=255:s<0&&(s=0),(r?"#":"")+(s|o<<8|i<<16).toString(16)}(p.REMOVE_ICON_COLOR,40),p.state={dropAreaCustom:{},progressBar:0,displayProgressBarStatus:"none",file:null,timeout:null,files:null,removeIconColor:p.REMOVE_ICON_COLOR,isCanceled:!1},p.componentDidUpdate=function(e){p.props.isReset!==e.isReset&&p.removeFile()},p.componentDidMount=function(){var e=p.dropAreaRef.current;e&&(["dragenter","dragover","dragleave","drop"].forEach((function(t){e.addEventListener(t,p.preventDefaults,!1)})),p.props.noDrag||(["dragenter","dragover"].forEach((function(t){e.addEventListener(t,p.highlight,!1)})),e.addEventListener("dragleave",p.unhighlight,!1),e.addEventListener("drop",p.unhighlight,!1),e.addEventListener("drop",p.visibleProgressBar,!1),e.addEventListener("drop",p.handleDrop,!1)))},p.componentWillUnmount=function(){var e=p.dropAreaRef.current;["dragenter","dragover","dragleave","drop"].forEach((function(t){e.removeEventListener(t,p.preventDefaults,!1)})),p.props.noDrag||(["dragenter","dragover"].forEach((function(t){e.removeEventListener(t,p.highlight,!1)})),e.removeEventListener("dragleave",p.unhighlight,!1),e.removeEventListener("drop",p.unhighlight,!1),e.removeEventListener("drop",p.visibleProgressBar,!1),e.removeEventListener("drop",p.handleDrop,!1))},p.preventDefaults=function(e){e.preventDefault(),e.stopPropagation()},p.highlight=function(){var e,t,r,n,i=p.props.style;p.setState({dropAreaCustom:Object.assign({},(null==i?void 0:i.dropAreaActive)?(null==i?void 0:i.dropAreaActive.borderColor)?null==i?void 0:i.dropAreaActive:Object.assign({},null==i?void 0:i.dropAreaActive,f.highlight):(null===(e=null==i?void 0:i.dropArea)||void 0===e?void 0:e.dropAreaActive)?(null===(t=null==i?void 0:i.dropArea)||void 0===t?void 0:t.dropAreaActive.borderColor)?null===(r=null==i?void 0:i.dropArea)||void 0===r?void 0:r.dropAreaActive:Object.assign({},null===(n=null==i?void 0:i.dropArea)||void 0===n?void 0:n.dropAreaActive,f.highlight):f.highlight)}),p.setState({progressBar:0})},p.unhighlight=function(){var e,t;p.setState({dropAreaCustom:Object.assign({},(null===(t=null===(e=p.props.style)||void 0===e?void 0:e.dropArea)||void 0===t?void 0:t.borderColor)?{}:f.dropAreaDefaultBorderColor)})},p.visibleProgressBar=function(){p.props.noProgressBar||p.setState({displayProgressBarStatus:"block"})},p.handleDrop=function(e){var t=null,r=!1;0===(t=void 0===e.files?e.dataTransfer.files:e.files).length&&(t=p.state.files,r=!0),p.setState({files:t,isCanceled:r},(function(){p.handleFiles()}))},p.handleFiles=function(){p.setState({progressBar:0}),function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e}([],p.state.files).forEach(p.uploadFile)},p.uploadFile=function(e){p.displayFileInfo(e),p.setState({file:e});var t=p.props,r=t.onDrop,n=t.onFileLoad,o=t.onError,s=t.config,a=void 0===s?{}:s,l=new window.FileReader,u={},d=e.size,c=[],f=0;if(r||n){var h=p;u=Object.assign({complete:(null==a?void 0:a.complete)||(null==a?void 0:a.step)?a.complete:function(){!r&&n?n(c,e):r&&!n&&r(c,e)},step:(null==a?void 0:a.step)?a.step:function(t){if(c.push(t),a&&a.preview)f=Math.round(c.length/a.preview*100),h.setState({progressBar:f}),c.length===a.preview&&(!r&&n?n(c,e):r&&!n&&r(c,e));else{var i=t.meta.cursor,o=Math.round(i/d*100);if(o===f)return;f=o}h.setState({progressBar:f})}},u)}o&&(u=Object.assign({error:o},u)),a&&(u=Object.assign({},a,u)),l.onload=function(e){i.a.parse(e.target.result,u)},p.props.noProgressBar||(l.onloadend=function(){clearTimeout(p.state.timeout),p.setState({timeout:setTimeout((function(){p.disableProgressBar()}),2e3)})}),l.readAsText(e,a.encoding||"utf-8")},p.displayFileInfo=function(e){p.childrenIsFunction()||(p.fileSizeInfoRef.current.innerHTML=function(e){var t=1048576,r=1073741824;if(e<t){var n=Number((e/1024).toFixed(0));return n<=0?e+" B":n+" KB"}return e<r?(e/t).toFixed(0)+" MB":e<1099511627776?(e/r).toFixed(0)+" GB":""}(e.size),p.fileNameInfoRef.current.innerHTML=e.name)},p.disableProgressBar=function(){p.props.noProgressBar||p.setState({displayProgressBarStatus:"none"})},p.childrenIsFunction=function(){return"function"==typeof p.props.children},p.fileChange=function(e){var t=e.target;p.props.noProgressBar?p.handleDrop(t):p.setState({displayProgressBarStatus:"block"},(function(){p.handleDrop(t)}))},p.open=function(e){var t=p.state.displayProgressBarStatus;e&&"none"===t&&(p.preventDefaults(e),p.inputFileRef.current.value=null,p.inputFileRef.current.click())},p.renderChildren=function(){var e=p.props.children,t=p.state,r=t.file,n=t.progressBar;return p.childrenIsFunction()?e({file:r,progressBar:n}):e},p.handleRemoveFile=function(e){e&&(e.stopPropagation(),p.removeFile())},p.removeFile=function(){p.setState({files:null,file:null});var e=p.props.onRemoveFile;e&&e(null),p.inputFileRef.current.value=null},p.changeRemoveIconColor=function(e){e&&p.setState({removeIconColor:e})},p.renderDropFileRemoveButton=function(){var e=p.props.addRemoveButton,t=p.state,r=t.removeIconColor,n=t.displayProgressBarStatus;return e&&"none"===n?s.a.createElement("div",{style:f.dropFileRemoveButton,onClick:function(e){return p.handleRemoveFile(e)},onMouseOver:function(){return p.changeRemoveIconColor(p.REMOVE_ICON_COLOR_LIGHT)},onMouseOut:function(){return p.changeRemoveIconColor(p.REMOVE_ICON_COLOR)}},s.a.createElement(u,{color:r})):e?s.a.createElement("div",{style:f.dropFileRemoveButton},s.a.createElement(u,{color:p.REMOVE_ICON_COLOR})):null},p}l(t,e),t.prototype.render=function(){var e,t,r,n,i,o,a,l,u,d,h,p,g,v=this,m=this.props,_=m.style,y=m.noClick,b=m.children,E=m.noProgressBar,C=m.progressBarColor,R=m.accept,k=this.state,w=k.dropAreaCustom,O=k.files,S=k.isCanceled,A=k.progressBar,I=k.displayProgressBarStatus;return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{type:"file",accept:R||"text/csv, .csv, application/vnd.ms-excel",ref:this.inputFileRef,style:f.inputFile,onChange:function(e){return v.fileChange(e)}}),this.childrenIsFunction()?s.a.createElement("div",{ref:this.dropAreaRef},this.renderChildren(),O&&O.length>0&&!S&&!E&&s.a.createElement(c,{style:Object.assign({},C?{backgroundColor:C}:{},(null===(p=null===(h=null==_?void 0:_.dropArea)||void 0===h?void 0:h.dropFile)||void 0===p?void 0:p.progressBar)||(null===(g=null==_?void 0:_.dropFile)||void 0===g?void 0:g.progressBar)||(null==_?void 0:_.progressBar)),progressBar:A,displayProgressBarStatus:I,isButtonProgressBar:!0})):s.a.createElement("div",{ref:this.dropAreaRef,style:Object.assign({},f.dropArea,null==_?void 0:_.dropArea,w,void 0!==y||"block"===I?f.defaultCursor:f.pointerCursor),onClick:function(e){y||v.open(e)}},O&&O.length>0?s.a.createElement("div",{style:Object.assign({},f.dropFile,f.column,(null===(e=null==_?void 0:_.dropArea)||void 0===e?void 0:e.dropFile)||(null==_?void 0:_.dropFile))},this.renderDropFileRemoveButton(),s.a.createElement("div",{style:f.column},s.a.createElement("span",{style:Object.assign({},f.fileSizeInfo,(null===(r=null===(t=null==_?void 0:_.dropArea)||void 0===t?void 0:t.dropFile)||void 0===r?void 0:r.fileSizeInfo)||(null===(n=null==_?void 0:_.dropArea)||void 0===n?void 0:n.fileSizeInfo)||(null==_?void 0:_.fileSizeInfo)),ref:this.fileSizeInfoRef}),s.a.createElement("span",{style:Object.assign({},f.fileNameInfo,(null===(o=null===(i=null==_?void 0:_.dropArea)||void 0===i?void 0:i.dropFile)||void 0===o?void 0:o.fileNameInfo)||(null===(a=null==_?void 0:_.dropFile)||void 0===a?void 0:a.fileNameInfo)||(null==_?void 0:_.fileNameInfo)),ref:this.fileNameInfoRef})),O&&O.length>0&&!S&&!E&&s.a.createElement(c,{style:Object.assign({},C?{backgroundColor:C}:{},(null===(u=null===(l=null==_?void 0:_.dropArea)||void 0===l?void 0:l.dropFile)||void 0===u?void 0:u.progressBar)||(null===(d=null==_?void 0:_.dropFile)||void 0===d?void 0:d.progressBar)||(null==_?void 0:_.progressBar)),progressBar:A,displayProgressBarStatus:I})):b))},t.defaultProps={isReset:!1}}(s.a.Component),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.download=function(e,t,r,n){var o,s,a=r?"\ufeff":"";"function"==typeof e&&(e=e()),o="object"==typeof e?i.a.unparse(e,n):e;var l=new Blob(["".concat(a).concat(o)],{type:"text/csv;charset=utf-8;"}),u=window.navigator;s=u.msSaveBlob?u.msSaveBlob(l,"".concat(t,".csv")):window.URL.createObjectURL(l);var d=document.createElement("a");d.href=s,d.setAttribute("download","".concat(t,".csv")),d.click(),d.remove()},t}return l(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.children,n=t.data,i=t.filename,o=t.type,a=t.className,l=t.style,u=t.bom,d=void 0!==u&&u,c=t.config,f=void 0===c?{}:c;return"link"===o?s.a.createElement("a",{onClick:function(){return e.download(n,i,d,f)},className:a,style:l},r):s.a.createElement("button",{onClick:function(){return e.download(n,i,d,f)},className:a,style:l},r)},t.defaultProps={type:"link"},t}(s.a.Component));i.a.BAD_DELIMITERS,i.a.RECORD_SEP,i.a.UNIT_SEP,i.a.WORKERS_SUPPORTED,i.a.LocalChunkSize,i.a.DefaultDelimiter},180:function(e,t,r){var n,i,o;i=[],n=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,n=t.IS_PAPA_WORKER||!1,i={},o=0,s={parse:function(r,n){var a=(n=n||{}).dynamicTyping||!1;if(E(a)&&(n.dynamicTypingFunction=a,a={}),n.dynamicTyping=a,n.transform=!!E(n.transform)&&n.transform,n.worker&&s.WORKERS_SUPPORTED){var l=function(){if(!s.WORKERS_SUPPORTED)return!1;var r,n,a=(r=t.URL||t.webkitURL||null,n=e.toString(),s.BLOB_URL||(s.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))),l=new t.Worker(a);return l.onmessage=v,l.id=o++,i[l.id]=l}();return l.userStep=n.step,l.userChunk=n.chunk,l.userComplete=n.complete,l.userError=n.error,n.step=E(n.step),n.chunk=E(n.chunk),n.complete=E(n.complete),n.error=E(n.error),delete n.worker,void l.postMessage({input:r,config:n,workerId:l.id})}var h=null;return s.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),h=n.download?new u(n):new c(n)):!0===r.readable&&E(r.read)&&E(r.on)?h=new f(n):(t.File&&r instanceof File||r instanceof Object)&&(h=new d(n)),h.stream(r)},unparse:function(e,t){var r=!1,n=!0,i=",",o="\r\n",a='"',l=a+a,u=!1,d=null,c=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||s.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(o=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(c=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var f=new RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return h(null,e,u);if("object"==typeof e[0])return h(d||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),h(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function h(e,t,r){var s="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,l=!Array.isArray(t[0]);if(a&&n){for(var u=0;u<e.length;u++)0<u&&(s+=i),s+=g(e[u],u);0<t.length&&(s+=o)}for(var d=0;d<t.length;d++){var c=a?e.length:t[d].length,f=!1,h=a?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!a&&(f="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&a){for(var p=[],v=0;v<c;v++){var m=l?e[v]:v;p.push(t[d][m])}f=""===p.join("").trim()}if(!f){for(var _=0;_<c;_++){0<_&&!h&&(s+=i);var y=a&&l?e[_]:_;s+=g(t[d][y],_)}d<t.length-1&&(!r||0<c&&!h)&&(s+=o)}}return s}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;c&&"string"==typeof e&&c.test(e)&&(e="'"+e,n=!0);var o=e.toString().replace(f,l);return(n=n||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(o,s.BAD_DELIMITERS)||-1<o.indexOf(i)||" "===o.charAt(0)||" "===o.charAt(o.length-1))?a+o+a:o}}};if(s.RECORD_SEP=String.fromCharCode(30),s.UNIT_SEP=String.fromCharCode(31),s.BYTE_ORDER_MARK="\ufeff",s.BAD_DELIMITERS=["\r","\n",'"',s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=",",s.Parser=g,s.ParserHandle=h,s.NetworkStreamer=u,s.FileStreamer=d,s.StringStreamer=c,s.ReadableStreamStreamer=f,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var r=e.config||{},n=[];return this.each((function(e){if("INPUT"!==a(this).prop("tagName").toUpperCase()||"file"!==a(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)n.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},r)})})),i(),this;function i(){if(0!==n.length){var t,r,i,l,u=n[0];if(E(e.before)){var d=e.before(u.file,u.inputElem);if("object"==typeof d){if("abort"===d.action)return t="AbortError",r=u.file,i=u.inputElem,l=d.reason,void(E(e.error)&&e.error({name:t},r,i,l));if("skip"===d.action)return void o();"object"==typeof d.config&&(u.instanceConfig=a.extend(u.instanceConfig,d.config))}else if("skip"===d)return void o()}var c=u.instanceConfig.complete;u.instanceConfig.complete=function(e){E(c)&&c(e,u.file,u.inputElem),o()},s.parse(u.file,u.instanceConfig)}else E(e.complete)&&e.complete()}function o(){n.splice(0,1),i()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new h(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&E(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+e;this._partialLine="";var a=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=a.meta.cursor;this._finished||(this._partialLine=o.substring(l-this._baseIndex),this._baseIndex=l),a&&a.data&&(this._rowCount+=a.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:a,workerId:s.WORKER_ID,finished:u});else if(E(this._config.chunk)&&!r){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!u||!E(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){E(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function d(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,i)}var o=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:o}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function c(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function f(e){l.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function h(e){var t,r,n,i=Math.pow(2,53),o=-i,a=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,c=0,f=!1,h=!1,v=[],m={data:[],errors:[],meta:{}};if(E(e.step)){var _=e.step;e.step=function(t){if(m=t,R())C();else{if(C(),0===m.data.length)return;d+=t.data.length,e.preview&&d>e.preview?r.abort():(m.data=m.data[0],_(m,u))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function C(){return m&&n&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+s.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(m.data=m.data.filter((function(e){return!b(e)}))),R()&&function(){if(m)if(Array.isArray(m.data[0])){for(var t=0;R()&&t<m.data.length;t++)m.data[t].forEach(r);m.data.splice(0,1)}else m.data.forEach(r);function r(t,r){E(e.transformHeader)&&(t=e.transformHeader(t,r)),v.push(t)}}(),function(){if(!m||!e.header&&!e.dynamicTyping&&!e.transform)return m;function t(t,r){var n,i=e.header?{}:[];for(n=0;n<t.length;n++){var o=n,s=t[n];e.header&&(o=n>=v.length?"__parsed_extra":v[n]),e.transform&&(s=e.transform(s,o)),s=k(o,s),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(s)):i[o]=s}return e.header&&(n>v.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+n,c+r):n<v.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+n,c+r)),i}var r=1;return!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(t),r=m.data.length):m.data=t(m.data,0),e.header&&m.meta&&(m.meta.fields=v),c+=r,m}()}function R(){return e.header&&0===v.length}function k(t,r){return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(a.test(e)){var t=parseFloat(e);if(o<t&&t<i)return!0}return!1}(r)?parseFloat(r):l.test(r)?new Date(r):""===r?null:r):r;var n}function w(e,t,r,n){var i={type:e,code:t,message:r};void 0!==n&&(i.row=n),m.errors.push(i)}this.parse=function(i,o,a){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(r,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<n[0].length;if(1===n.length||o)return"\n";for(var s=0,a=0;a<n.length;a++)"\n"===n[a][0]&&s++;return s>=n.length/2?"\r\n":"\r"}(i,l)),n=!1,e.delimiter)E(e.delimiter)&&(e.delimiter=e.delimiter(i),m.meta.delimiter=e.delimiter);else{var u=function(t,r,n,i,o){var a,l,u,d;o=o||[",","\t","|",";",s.RECORD_SEP,s.UNIT_SEP];for(var c=0;c<o.length;c++){var f=o[c],h=0,p=0,v=0;u=void 0;for(var m=new g({comments:i,delimiter:f,newline:r,preview:10}).parse(t),_=0;_<m.data.length;_++)if(n&&b(m.data[_]))v++;else{var y=m.data[_].length;p+=y,void 0!==u?0<y&&(h+=Math.abs(y-u),u=y):u=y}0<m.data.length&&(p/=m.data.length-v),(void 0===l||h<=l)&&(void 0===d||d<p)&&1.99<p&&(l=h,a=f,d=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(n=!0,e.delimiter=s.DefaultDelimiter),m.meta.delimiter=e.delimiter}var d=y(e);return e.preview&&e.header&&d.preview++,t=i,r=new g(d),m=r.parse(t,o,a),C(),f?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),t=E(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(f=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return h},this.abort=function(){h=!0,r.abort(),m.meta.aborted=!0,E(e.complete)&&e.complete(m),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,n=e.newline,i=e.comments,o=e.step,a=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=","),i===r)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<s.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var d=0,c=!1;this.parse=function(s,f,h){if("string"!=typeof s)throw new Error("Input must be a string");var g=s.length,v=r.length,m=n.length,_=i.length,y=E(o),b=[],C=[],R=[],k=d=0;if(!s)return J();if(e.header&&!f){var w=s.split(n)[0].split(r),O=[],S={},A=!1;for(var I in w){var B=w[I];E(e.transformHeader)&&(B=e.transformHeader(B,I));var F=B,x=S[B]||0;for(0<x&&(A=!0,F=B+"_"+x),S[B]=x+1;O.includes(F);)F=F+"_"+x;O.push(F)}if(A){var D=s.split(n);D[0]=O.join(r),s=D.join(n)}}if(l||!1!==l&&-1===s.indexOf(t)){for(var L=s.split(n),T=0;T<L.length;T++){if(R=L[T],d+=R.length,T!==L.length-1)d+=n.length;else if(h)return J();if(!i||R.substring(0,_)!==i){if(y){if(b=[],q(R.split(r)),Q(),c)return J()}else q(R.split(r));if(a&&a<=T)return b=b.slice(0,a),J(!0)}}return J()}for(var P=s.indexOf(r,d),j=s.indexOf(n,d),M=new RegExp(p(u)+p(t),"g"),z=s.indexOf(t,d);;)if(s[d]!==t)if(i&&0===R.length&&s.substring(d,d+_)===i){if(-1===j)return J();d=j+m,j=s.indexOf(n,d),P=s.indexOf(r,d)}else if(-1!==P&&(P<j||-1===j))R.push(s.substring(d,P)),d=P+v,P=s.indexOf(r,d);else{if(-1===j)break;if(R.push(s.substring(d,j)),K(j+m),y&&(Q(),c))return J();if(a&&b.length>=a)return J(!0)}else for(z=d,d++;;){if(-1===(z=s.indexOf(t,z+1)))return h||C.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:d}),W();if(z===g-1)return W(s.substring(d,z).replace(M,t));if(t!==u||s[z+1]!==u){if(t===u||0===z||s[z-1]!==u){-1!==P&&P<z+1&&(P=s.indexOf(r,z+1)),-1!==j&&j<z+1&&(j=s.indexOf(n,z+1));var N=H(-1===j?P:Math.min(P,j));if(s.substr(z+1+N,v)===r){R.push(s.substring(d,z).replace(M,t)),s[d=z+1+N+v]!==t&&(z=s.indexOf(t,d)),P=s.indexOf(r,d),j=s.indexOf(n,d);break}var U=H(j);if(s.substring(z+1+U,z+1+U+m)===n){if(R.push(s.substring(d,z).replace(M,t)),K(z+1+U+m),P=s.indexOf(r,d),z=s.indexOf(t,d),y&&(Q(),c))return J();if(a&&b.length>=a)return J(!0);break}C.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:d}),z++}}else z++}return W();function q(e){b.push(e),k=d}function H(e){var t=0;if(-1!==e){var r=s.substring(z+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return h||(void 0===e&&(e=s.substring(d)),R.push(e),d=g,q(R),y&&Q()),J()}function K(e){d=e,q(R),R=[],j=s.indexOf(n,d)}function J(e){return{data:b,errors:C,meta:{delimiter:r,linebreak:n,aborted:c,truncated:!!e,cursor:k+(f||0)}}}function Q(){o(J()),b=[],C=[]}},this.abort=function(){c=!0},this.getCharIndex=function(){return d}}function v(e){var t=e.data,r=i[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var o={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(E(r.userStep)){for(var s=0;s<t.results.data.length&&(r.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},o),!n);s++);delete t.results}else E(r.userChunk)&&(r.userChunk(t.results,o,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var r=i[e];E(r.userComplete)&&r.userComplete(t),r.terminate(),delete i[e]}function _(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function E(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var r=e.data;if(void 0===s.WORKER_ID&&r&&(s.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:s.WORKER_ID,results:s.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var n=s.parse(r.input,r.config);n&&t.postMessage({workerId:s.WORKER_ID,results:n,finished:!0})}}),(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(l.prototype)).constructor=d,(c.prototype=Object.create(c.prototype)).constructor=c,(f.prototype=Object.create(l.prototype)).constructor=f,s},void 0===(o="function"===typeof n?n.apply(t,i):n)||(e.exports=o)}}]);
//# sourceMappingURL=4.dca431c4.chunk.js.map