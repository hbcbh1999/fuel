!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Fuel=e()}}(function(){var e;return function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(a)return a(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";function r(e){return 1==(1&e.g)}function o(e){return 2==(2&e.g)}function a(e){return 4==(4&e.g)}function i(e){return 8==(8&e.g)}function u(e){return 16==(16&e.g)}function l(e){return 32==(32&e.g)}function c(e,t){if(null===e)return!t&&void 0!==t;var n=typeof e;return"number"!==n||isFinite(e)?"object"!==n&&"object"!=typeof t&&e===t:!isFinite(t)&&(e!==1/0||t===1/0)}function f(e,t){var n={},r={},o=0;for(var a in t){var i=t[a];a in e&&c(e[a],i)?r[a]=1:(n[a]=i,o++)}for(var u=Object.keys(e),l=0,f=u.length;l<f;l++)n[u[l]]||r[u[l]]||(n[u[l]]="",o++);return[n,o]}function s(e,t,n){var r=t.name,o=t.value;if(e[r])if("style"===r){var a=f(e[r].value,o),i=a[0],u=a[1];u&&(e[r]={state:3,value:i})}else c(e[r].value,o)?e[r].state=4:e[r]={state:3,value:o};else e[r]={state:n?2:1,value:o}}function p(e,t){var n=e?e.props:null,r=t?t.props:null,o={h:[],g:0},a={};if(!e&&t)return o.g|=4,o;if(!t&&e)return o.g|=8,o;if(d.j.i(e)&&d.j.i(t))return d.j.k(e)!==d.j.k(t)&&(o.g|=32),o;if(d.j.l(e)!==d.j.l(t))o.g|=16;else{for(var i=r.length,u=n.length,l=0,c=u>i?u:i;l<c;l++)void 0!==n[l]&&s(a,n[l],!0),void 0!==r[l]&&s(a,r[l],!1);for(var f in a){var p=a[f];switch(p.state){case 4:break;default:3===p.state&&"style"===f&&(p.state=5),o.h.push({key:f,value:p.value,state:p.state})}}}var h=d.j.m(t),y=d.j.m(e);return!h&&y?o.g|=2:h&&!y&&(o.g|=1),o}Object.defineProperty(n,"__esModule",{value:!0});var d=e("./element");n.o=r,n.p=o,n.q=a,n.s=i,n.t=u,n.u=l,n.v=p},{"./element":3}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./stem"),o=e("./renderer/dom-renderer");n.FuelDOM={render:function(e,t,n){void 0===n&&(n=function(e){}),r.B.A||(r.B.A=new o.C),e.D||(e.D=new r.B),e.D.render(e,function(e){t.appendChild(e),n&&n(e)})}},n.F=n.FuelDOM},{"./renderer/dom-renderer":8,"./stem":9}],3:[function(e,t,n){"use strict";function r(e,t){for(var n={},r=0,o=e.length;r<o;r++)n[e[r].name]=r;for(var a in t)n[a]?e[n[a]].value=t[a]:e.push({name:a,value:t[a]});return e}function o(e,t,n){void 0===n&&(n=[]);for(var o,a=[{G:e,children:e.children.slice(),parent:null,H:!1}];a.length;){var u=a.pop(),l=u.H,c=u.G,f=u.parent,s=void 0;if(!l){u.H=!0,s=i(c.type,c.key,r(c.props.slice(),t),n);for(var p in c)s[p]=c;s.I=null,f?f.children.push(s):o=s}if(u.children.length){var d=u.children.shift();a.push(u),a.push({G:d,children:d.children.slice(),parent:s||f,H:!1})}}return o}function a(e,t,n,r){n.subscribe&&(e.J||(e.J=[]),e.J.push(n.subscribe(function(n){e.props.some(function(e){return e.name===t&&(e.value=n,!0)})||e.props.push({name:t,value:n}),e.D.render(e)})),e.D=r(),e.D.K(e))}function i(e,t,n,r){return void 0===r&&(r=[]),o={},o[s]=u.M.L,o.type=e,o.key=t,o.props=n,o.children=r,o.I=null,o;var o}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./type"),l=e("./node"),c=e("./util"),f=e("./event"),s=c.Symbol("__fuel_element"),p={map:{},count:1};p.map[String(p.map.N=0)]="SYNTHETIC_TEXT";var d=function(){function e(){}return e.O=function(){return 0},e.P=function(e){var t=p.map[e.toLowerCase()];return t?t:(p.map[String(p.map[e]=p.count)]=e,p.count++)},e.R=function(e){return"number"!=typeof e.type},e.S=function(e){return"function"==typeof e.type&&"function"!=typeof e.type.prototype.render},e.T=function(e){return p.map[String(e.type)]},e.l=function(e){return e.type},e.m=function(e){return e.children.length>0},e.U=function(e){return e&&e[s]===u.M.L},e.i=function(e){return 0===this.l(e)},e.k=function(e){return e.props[0].value},e.V=function(e){return e.W},e.X=function(e,t){var n=e.props,r=e.children;void 0===t&&(t=!1);for(var o={},a=0,i=n.length;a<i;a++){var u=n[a],l=u.name,c=u.value;o[l]=c}return t&&(o.children=r.length?r:null),o},e.Y=function(e,t,n){var r=(e.props,e.type),o=this.X(e,!0),a=t?this.X(t):null;if(this.S(e))return r(o);var i=e.Z,l=!!i;return i||(i=e.Z=new r(o),i.setState=function(t,n){var r=this;this.state=t,this[u.$.componentWillUpdate](),e.D.render(e,function(){n&&n(),r[u.$.componentDidUpdate]()})},i[u.$.componentWillMount]()),n&&n.push(i),e.W&&!i[u.$.shouldComponentUpdate](o,a)?(l&&i.componentWillReceiveProps(o),e.W):e.W=i[u.$.render]()},e._=function(e,t,n,r){if(0===this.l(t))return t.I=n.createTextNode(this.k(t));var o=t.props,i=(t.type,this.T(t)),c=n.createElement(i);t.I=c;for(var s=!1,p=0,d=o.length;p<d;p++){var h=o[p],y=h.name,v=h.value;if(u.aa[y]){var m=e.D.ba();m||(m=new f.ca,e.D.da(m)),m.ea(this.R(e)?e.W.I:e.I,c,y,v)}else{if("scoped"===y)s=!0;else{if((v.fa||v.subscribe)&&s){a(t,y,v,r);continue}if("style"===y){for(var g in v)l.ga(c,g,v[g]);continue}if("ref"===y){var b=typeof v;"string"===b?this.R(e)&&(e.Z[u.$.refs][y]=c):"function"===b&&v(c);continue}}(u.ha[y]||0===y.indexOf("data-"))&&(c[y]=v)}}return c},e}();n.j=d,n.cloneElement=o,n.ia=i},{"./event":4,"./node":7,"./type":11,"./util":12}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){this.ja={},this.id=1}return e.prototype.ea=function(e,t,n,r){var o=this;n=n.replace(/^on/,"").toLowerCase(),e.ka||(e.ka={});var a=String(this.id++);if(e.ka[n])this.ja[n][String(this.ja[n].count++)]=r;else{e.ka[n]=!0;var i=function(e){var t=e.target.la;if(t[e.type]&&t[e.type]===a){var n=o.ja[e.type][a];n&&n(e)}};this.ja[n]={count:1,0:i},t.addEventListener(n,i,!1)}this.ja[n][a]=r,t.la?t.la[n]=a:t.la=(u={},u[n]=a,u);var u},e.prototype.ma=function(e,t){if(t.la){var n=t.la;for(var r in n)this.ja[r][n[r]]=null,0===--this.ja[r].count&&(e.removeEventListener(r,this.ja[r][0]),this.ja[r]=null)}},e}();n.ca=r},{}],5:[function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=!1);for(var n=[],a=0,i=e.length;a<i;a++){var c=e[a];null!==c&&(l.na(void 0===c,"Undefined passed as element, it's seem to mistakes."),u.j.U(c)?n.push(c):!t&&Array.isArray(c)?n=r(c,!0).concat(n):n.push(o(c.toString())))}return n}function o(e){return u.ia(u.j.O(),null,[{name:"value",value:e}])}Object.defineProperty(n,"__esModule",{value:!0});var a=e("tslib"),i=e("./stem"),u=e("./element"),l=e("./util"),c={string:1,function:1},f=function(){function e(e){void 0===e&&(e={}),this.oa=e}return Object.defineProperty(e.prototype,"props",{get:function(){return this.oa},pa:!0,qa:!0}),e.prototype.componentWillMount=function(){},e.prototype.componentDidMount=function(){},e.prototype.componentWillUpdate=function(){},e.prototype.componentDidUpdate=function(){},e.prototype.componentWillReceiveProps=function(e){this.oa=e},e.prototype.shouldComponentUpdate=function(e,t){return!0},e.prototype.render=function(){return null},e.prototype.getChildContext=function(){return{}},e.prototype.setState=function(e,t){},e}();n.ra=f;var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.shouldComponentUpdate=function(e,t){for(var n in e){if(!(n in t))return!0;if(t[n]!==e[n])return!0}return Object.keys(e).length!==Object.keys(t).length},t}(f);n.sa=s;var p=function(){function e(){}return e.createElement=function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];l.na(!c[typeof e],"Fuel element only accept one of 'string' or 'function' but got "+e),n.length&&(n=r(n)),t||(t={});var a=[];for(var f in t)if("key"!==f){var s=t[f];a.push({name:f,value:s})}var p=u.ia("string"==typeof e?u.j.P(e):e,t.key,a,n);return(u.j.R(p)||t.scoped)&&(p.D=new i.B),p},e}();p.Component=f,p.PureComponent=s,p.isValidElement=function(e){return!!e&&u.j.U(e)},p.cloneElement=u.cloneElement,p.createFactory=function(e){return function(){return p.createElement(e,{})}},p.Children={map:function(e,t){return e?e.map(t):[]},forEach:function(e,t){e&&e.forEach(t)},count:function(e){return e?e.length:0},toArray:function(e){return e?e:[]}},n.Fuel=p,n.React=p},{"./element":3,"./stem":9,"./util":12,tslib:13}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("./fuel");n.Fuel=r.Fuel,n.React=r.React,function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(e("./dom"))},{"./dom":2,"./fuel":5}],7:[function(e,t,n){"use strict";function r(e,t,n){e.style[t]="number"==typeof n?n+"px":String(n)}Object.defineProperty(n,"__esModule",{value:!0}),n.ga=r},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(){this.id=0}return e.prototype.ta=function(){this.id++},e.prototype.createElement=function(e){var t=document.createElement(e);return t.setAttribute("data-id",""+this.id),t},e.prototype.createTextNode=function(e){return document.createTextNode(e)},e}();n.C=r},{}],9:[function(e,t,n){"use strict";function r(){return new v}function o(e,t,n,o,a){var i=d.j._(e,n,a,r),l=t.I;if(1===l.nodeType&&1===i.nodeType)for(var c=0,f=l.children.length;c<f;c++)n.I.appendChild(l.children[c]);if(o){var s=t.I.parentNode;s.removeChild(l),s.appendChild(i)}else{t.I.parentNode.replaceChild(i,l),u(e,t,!1)}t.I=null}function a(e,t,n,r){n.I=t.I,t.I=null,r&&n.I.parentNode.appendChild(n.I)}function i(e,t){for(var n=t.I,r=0,o=e.h.length;r<o;r++){var a=e.h[r],i=a.key,u=a.value;switch(a.state){case 1:case 3:n[i]=u;break;case 5:for(var l in u){var c=u[l];s.ga(n,l,c)}break;case 2:n.removeAttribute(i)}}}function u(e,t,n){void 0===n&&(n=!0),y.ua(function(){return l(e,t,n)})}function l(e,t,n){void 0===n&&(n=!0);for(var r=[{G:t,children:t.children.slice(),I:t.I,root:e}];r.length;){var o=r.pop();if(o.I&&(o.I.la&&o.root.D.ba().ma(o.root.I,o.I),o.G.J&&o.G.J.forEach(function(e){return e.unsubscribe()}),n&&o.I.parentNode.removeChild(o.I),o.I=null),o.children.length){var a=o.children.shift();r.push(o),r.push({G:a,children:a.children.slice(),I:null,root:a.D?a:o.root})}}}function c(e){var t=e.parent,n=e.va,l=e.wa,c=e.xa,f=e.ya,s=e.root,y=e.za,m=v.A;if(h.q(f))if(t)t.I.appendChild(p.Aa(s,n,m,r,y));else{var g=p.Aa(s,n,m,r,y);l&&(l.I.parentNode.appendChild(g),u(s,l,!1))}else h.s(f)?u(s,l):h.t(f)?o(s,l,n,c,m):h.u(f)?(n.I=l.I,n.I.textContent=d.j.k(n)):(a(s,l,n,c),i(f,n));h.o(f)?p.Aa(s,n,m,r,y):h.p(f)&&u(s,l)}Object.defineProperty(n,"__esModule",{value:!0});var f=e("./type"),s=e("./node"),p=e("./tree"),d=e("./element"),h=e("./difference"),y=e("./util"),v=function(){function e(){this.Ba=[],this.Ca=null,this.za=[]}return e.prototype.K=function(e){this.Da=e},e.prototype.Ea=function(){return this.Da},e.prototype.da=function(e){this.Fa=e},e.prototype.ba=function(){return this.Fa},e.prototype.Ga=function(){var e=this;y.requestAnimationFrame(function(){e.Ba.length&&(e.Ba.forEach(function(e){return c(e)}),e.Ba.length=0,e.Ha(),e.Ca&&e.Ca(),e.Ca=null)})},e.prototype.render=function(t,n){var r=this;void 0===n&&(n=function(e){}),e.A.ta(),this.Da?(this.Ia(t),this.Ca=function(){d.j.R(t)?r.Da=t.W:r.Da=t,n(r.Da.I)},this.Ga()):n(this.Ja(t))},e.prototype.Ja=function(t){var n=p.Aa(t,t,e.A,r,this.za);return this.Ka(),d.j.R(t)?this.Da=t.W:this.Da=t,n},e.prototype.Ha=function(){this.za.forEach(function(e){return e[f.$.componentDidUpdate]()}),this.za.length=0},e.prototype.Ka=function(){this.za.forEach(function(e){return e[f.$.componentDidMount]()}),this.za.length=0},e.prototype.Ia=function(e){this.Ba.length&&(this.Ba.length=0);var t=[],n=[{va:e,wa:this.Da,La:null,Ma:null,H:!1,ya:null,root:e}],r=null,o=!1;for(d.j.R(e)&&(e=d.j.Y(e,this.Da,t),n[0].va=e);n.length;){var a=n.pop(),i=a.va,u=a.wa,l=void 0,c=a.root;if(a.H||(l=h.v(u,i),a.ya=l,this.Ba.push({za:this.za,root:c,parent:r?r.va:null,va:i,wa:u,xa:o,ya:l}),a.La=i?i.children.slice():[],a.Ma=u?u.children.slice():[],a.H=!0),(a.La.length||a.Ma.length)&&(!a.ya||0===a.ya.g||16===a.ya.g)){r=a,n.push(a);var f=a.La.shift(),s=void 0;if(u&&u.Na&&f&&u.Na[f.key]){s=u.Na[f.key],f.Na||(f.Na={}),f.Na[f.key]=f;var p=a.Ma.indexOf(s);a.Ma.splice(p,1),o=!0}else s=a.Ma.shift(),o=!1;if(f&&f.D&&(c=f),f&&d.j.R(f))if(s&&d.j.R(s))for(;d.j.R(f);)d.j.R(s)&&(f.Z=s.Z,f.W=s.W,f.D=s.D,s=s.W),f=d.j.Y(f,null,t);else for(;d.j.R(f);){var y=d.j.Y(f,null,t);f.D.K(f),f=y}else if(s&&d.j.R(s))for(;d.j.R(s);)s=s.W;n.push({va:f,wa:s,La:null,Ma:null,H:!1,ya:null,root:c})}}},e}();n.B=v},{"./difference":1,"./element":3,"./node":7,"./tree":10,"./type":11,"./util":12}],10:[function(e,t,n){"use strict";function r(e,t){return[{G:t,parentElement:null,children:t.children.slice(),I:t.I,parent:null,root:e}]}function o(e,t,n,o,l){var c;if(i.j.R(t)&&!(t=a(t,o,l)))return null;for(var f=r(e,t);f.length;){var s=f.pop(),p=!!s.children.length;if(!s.I){var d=s.G,h=s.parentElement,y=s.parent;d.key&&s.parentElement&&(h.Na||(h.Na={}),u.na(h.Na[d.key],"Duplicate key found: key = "+d.key),h.Na[d.key]=d),s.I=i.j._(s.root,d,n,o),c||(c=s.I),y&&y.appendChild(s.I)}var v=s.root;if(p){f.push(s);var m=s.children.shift();for(m.D&&(v=m);i.j.R(m);)v=m,m=a(m,o,l);f.push({G:m,children:m.children.slice(),I:null,parent:s.I,parentElement:s.G,root:v})}}return c}function a(e,t,n){var r=i.j.Y(e,null,n);return e.D.K(r),r}Object.defineProperty(n,"__esModule",{value:!0});var i=e("./element"),u=e("./util");n.Aa=o},{"./element":3,"./util":12}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Oa="function"==typeof Uint16Array,n.Pa=n.Oa?2:1;!function(e){e[e.Qa=2]="CHILDREN"}(n.Ra||(n.Ra={})),n.$={props:"props",state:"state",refs:"refs",componentWillMount:"componentWillMount",componentDidMount:"componentDidMount",componentWillUpdate:"componentWillUpdate",componentDidUpdate:"componentDidUpdate",componentWillReceiveProps:"componentWillReceiveProps",render:"render",shouldComponentUpdate:"shouldComponentUpdate",setState:"shouldComponentUpdate",getChildContext:"getChildContext",Symbol:"Symbol"},n.Sa={className:"class"};!function(e){e[e.L=1e4*Math.random()<<1]="FUEL_ELEMENT_MARK"}(n.M||(n.M={})),n.aa=(r=["Copy Cut Paste CompositionEnd CompositionStart CompositionUpdate Focus Blur Change Input Submit Load Error KeyDown KeyPress KeyUp Abort CanPlay CanPlayThrough DurationChange Emptied Encrypted Ended LoadedData LoadedMetadata LoadStart Pause Play Playing Progress RateChange Seeked Seeking Stalled Suspend TimeUpdate VolumeChange Waiting Click ContextMenu DoubleClick Drag DragEnd DragEnter DragExit DragLeave DragOver DragStart Drop MouseDown MouseEnter MouseLeave MouseMove MouseOut MouseOver MouseUp Select TouchCancel TouchEnd TouchMove TouchStart Scroll Wheel"],r.raw=["Copy Cut Paste CompositionEnd CompositionStart CompositionUpdate Focus Blur Change Input Submit Load Error KeyDown KeyPress KeyUp Abort CanPlay CanPlayThrough DurationChange Emptied Encrypted Ended LoadedData LoadedMetadata LoadStart Pause Play Playing Progress RateChange Seeked Seeking Stalled Suspend TimeUpdate VolumeChange Waiting Click ContextMenu DoubleClick Drag DragEnd DragEnter DragExit DragLeave DragOver DragStart Drop MouseDown MouseEnter MouseLeave MouseMove MouseOut MouseOver MouseUp Select TouchCancel TouchEnd TouchMove TouchStart Scroll Wheel"],function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e[0].split(" ").reduce(function(e,t){return e["on"+t]=!0,e},{})}(r)),n.ha=(o=["defaultChecked defaultValue accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing charSet challenge checked classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable"],o.raw=["defaultChecked defaultValue accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing charSet challenge checked classID className cols colSpan content contentEditable contextMenu controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name noValidate open optimum pattern placeholder poster preload radioGroup readOnly rel required role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable"],function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e[0].split(" ").reduce(function(e,t){return e[t]=!0,e},{})}(o));var r,o},{}],12:[function(e,t,n){(function(t){"use strict";function r(e,t,n){return void 0===n&&(n=0),e instanceof Uint16Array?(e.set(t,n),e):(e.splice.apply(e,[n,t.length].concat(t)),e)}function o(e,t,n){if(void 0===n&&(n=!1),e){if(!n)throw new Error(t);console.warn(t)}}Object.defineProperty(n,"__esModule",{value:!0});var a=e("./type"),i="object"==typeof t?t:"object"==typeof window?window:this||{};n.Ta=a.Oa?function(e){return new Uint16Array(new ArrayBuffer(e*a.Pa))}:function(e){return new Array(e)},n.Ua=r,n.Symbol="function"==typeof i[a.$.Symbol]?i[a.$.Symbol]:function(){function e(e){return"@@"+e}var t={};e.for=function(n){return t[n]?t[n]:t[n]=e(n)}}(),n.na=o;var u="function"==typeof i.requestAnimationFrame;n.requestAnimationFrame=u?function(e){return i.requestAnimationFrame(e)}:function(e){return setTimeout(e,60)};var l="function"==typeof i.ua;n.ua=l?function(e){return i.ua(e)}:function(e){return e()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./type":11}],13:[function(t,n,r){(function(t){var r,o,a,i,u,l,c,f,s,p,d,h,y,v,m;!function(r){function o(e,t){return function(n,r){return e[n]=t?t(n,r):r}}var a="object"==typeof t?t:"object"==typeof self?self:"object"==typeof this?this:{};"function"==typeof e&&e.amd?e("tslib",["exports"],function(e){r(o(a,o(e)))}):r("object"==typeof n&&"object"==typeof n.exports?o(a,o(n.exports)):o(a))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};r=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},i=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.Va)i=Reflect.Va(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},u=function(e,t){return function(n,r){t(n,r,e)}},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.Wa)return Reflect.Wa(e,t)},c=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,u)}l((r=r.apply(e,t||[])).next())})},f=function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,a&&(i=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(a,n[1])).done)return i;switch(a=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,a=n[1],n=[0];continue;case 7:n=l.Xa.pop(),l.Ya.pop();continue;default:if(i=l.Ya,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){l.label=n[1];break}if(6===n[0]&&l.label<i[1]){l.label=i[1],i=n;break}if(i&&l.label<i[2]){l.label=i[2],l.Xa.push(n);break}i[2]&&l.Xa.pop(),l.Ya.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],a=0}finally{o=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,a,i,u,l={label:0,Za:function(){if(1&i[0])throw i[1];return i[1]},Ya:[],Xa:[]};return u={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},s=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},p=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},d=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},h=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e},y=function(e,t,n){function r(e){return function(t){return new Promise(function(n,r){h.push([e,t,n,r]),o()})}}function o(){!s&&h.length&&a((s=h.shift())[0],s[1])}function a(e,t){try{i(d[e](t))}catch(e){f(s[3],e)}}function i(e){e.done?f(s[2],e):"yield"===e.value[0]?f(s[2],{value:e.value[1],done:!1}):Promise.resolve(e.value[1]).then("delegate"===e.value[0]?u:l,c)}function u(e){i(e.done?e:{value:["yield",e.value],done:!1})}function l(e){a("next",e)}function c(e){a("throw",e)}function f(e,t){s=void 0,e(t),o()}if(!Symbol.$a)throw new TypeError("Symbol.asyncIterator is not defined.");var s,p,d=n.apply(e,t||[]),h=[];return p={next:r("next"),throw:r("throw"),return:r("return")},p[Symbol.$a]=function(){return this},p},v=function(e){function t(t,n){return function(r){return{value:["delegate",(e[t]||n).call(e,r)],done:!1}}}var n={next:t("next"),throw:t("throw",function(e){throw e}),return:t("return",function(e){return{value:e,done:!0}})};return e=m(e),n[Symbol.iterator]=function(){return this},n},m=function(e){if(!Symbol.$a)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.$a];return t?t.call(e):"function"==typeof p?p(e):e[Symbol.iterator]()},e("__extends",r),e("__assign",o),e("__rest",a),e("__decorate",i),e("__param",u),e("__metadata",l),e("__awaiter",c),e("__generator",f),e("__exportStar",s),e("__values",p),e("__read",d),e("__spread",h),e("__asyncGenerator",y),e("__asyncDelegator",v),e("__asyncValues",m)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[6])(6)});