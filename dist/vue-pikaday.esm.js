import moment from"moment";import Pikaday from"pikaday";var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(t,e){return t(e={exports:{}},e.exports),e.exports}var freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(t){var e=hasOwnProperty.call(t,symToStringTag),n=t[symToStringTag];try{t[symToStringTag]=void 0}catch(t){}var o=nativeObjectToString.call(t);return e?t[symToStringTag]=n:delete t[symToStringTag],o}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;function objectToString(t){return nativeObjectToString$1.call(t)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(t){return null==t?void 0===t?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(t)?_getRawTag(t):_objectToString(t)}var _baseGetTag=baseGetTag;function isObjectLike(t){return null!=t&&"object"==typeof t}var isObjectLike_1=isObjectLike,dateTag="[object Date]";function baseIsDate(t){return isObjectLike_1(t)&&_baseGetTag(t)==dateTag}var _baseIsDate=baseIsDate;function baseUnary(t){return function(e){return t(e)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(t,e){var n=e&&!e.nodeType&&e,o=n&&t&&!t.nodeType&&t,i=o&&o.exports===n&&_freeGlobal.process,r=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=r}),nodeIsDate=_nodeUtil&&_nodeUtil.isDate,isDate=nodeIsDate?_baseUnary(nodeIsDate):_baseIsDate,isDate_1=isDate,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},VuePikaday={name:"vue-pikaday",inheritAttrs:!1,props:{value:{validator:function(t){var e=[void 0,null];if(isDate_1(t))return!0;var n=!0,o=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done);n=!0){var s=r.value;if(t===s||(void 0===t?"undefined":_typeof(t))===s)return!0}}catch(t){o=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return!1},required:!0},options:{required:!1,default:function(){return{}}},autoDefault:{type:Boolean,required:!1,default:!1}},data:function(){return{visible:!1,elAttrs:{type:"text"},defaultOptions:{format:"D MMM YYYY"},mergedOptions:{}}},computed:{elementAttributes:function(){return Object.assign({},this.$attrs,this.elAttrs)}},render:function(t){return t("input",{attrs:this.elementAttributes,on:this.$listeners,value:this.inputValue(this.value)},this.$slots.default)},beforeMount:function(){this.mergedOptions=Object.assign({},this.defaultOptions,this.options)},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()},methods:{create:function(){var t=this;this.mergedOptions.field=this.$el,this.bindListener("onSelect",function(){return t.onSelect()}),this.bindListener("onOpen",function(){return t.onOpen()}),this.bindListener("onClose",function(){return t.onClose()}),this.pikaday=new Pikaday(this.mergedOptions);var e=this.value;!this.value&&this.autoDefault&&(e=moment().toDate(),this.change(e)),this.pikaday.setDate(e),!1===this.mergedOptions.bound?this.hide():this.visible?this.show():this.hide()},destroy:function(){this.pikaday.destroy()},change:function(t){this.$emit("input",t),this.$emit("input-value",this.inputValue(t))},inputValue:function(t){var e=moment(t);return e.isValid()?e.format(this.mergedOptions.format):null},onSelect:function(){this.change(this.pikaday.getDate())},onOpen:function(){this.visible=!0},onClose:function(){this.visible=!1},show:function(){this.pikaday.show()},hide:function(){this.pikaday.hide()},bindListener:function(t,e){var n=this;if(this.mergedOptions[t]){var o=this.mergedOptions[t];this.mergedOptions[t]=function(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];o(i),e.apply(n)}}else this.mergedOptions[t]=e}}};function isObject(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var isObject_1=isObject,now=function(){return _root.Date.now()},now_1=now,symbolTag="[object Symbol]";function isSymbol(t){return"symbol"==typeof t||isObjectLike_1(t)&&_baseGetTag(t)==symbolTag}var isSymbol_1=isSymbol,NAN=NaN,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber(t){if("number"==typeof t)return t;if(isSymbol_1(t))return NAN;if(isObject_1(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=isObject_1(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(reTrim,"");var n=reIsBinary.test(t);return n||reIsOctal.test(t)?freeParseInt(t.slice(2),n?2:8):reIsBadHex.test(t)?NAN:+t}var toNumber_1=toNumber,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min;function debounce(t,e,n){var o,i,r,a,s,u,l=0,c=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);function b(e){var n=o,r=i;return o=i=void 0,l=e,a=t.apply(r,n)}function y(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-l>=r}function m(){var t=now_1();if(y(t))return p(t);s=setTimeout(m,function(t){var n=e-(t-u);return f?nativeMin(n,r-(t-l)):n}(t))}function p(t){return s=void 0,d&&o?b(t):(o=i=void 0,a)}function g(){var t=now_1(),n=y(t);if(o=arguments,i=this,u=t,n){if(void 0===s)return function(t){return l=t,s=setTimeout(m,e),c?b(t):a}(u);if(f)return s=setTimeout(m,e),b(u)}return void 0===s&&(s=setTimeout(m,e)),a}return e=toNumber_1(e)||0,isObject_1(n)&&(c=!!n.leading,r=(f="maxWait"in n)?nativeMax(toNumber_1(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=u=i=s=void 0},g.flush=function(){return void 0===s?a:p(now_1())},g}var debounce_1=debounce;function changeState(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e[n]=t,o=o||e,t?o.show():o.hide()}var VuePikadayVisible={inserted:function(t,e,n){var o=n.componentInstance;o.onOpen=function(){return changeState(!0,n.context,e.expression,o)},o.onClose=debounce_1(function(){return changeState(!1,n.context,e.expression,o)},100)},update:function(t,e,n){changeState(e.value,n.componentInstance,e.expression)}},VuePikadayPlugin={install:function(t){t.component(VuePikaday.name,VuePikaday),t.directive("p-visible",VuePikadayVisible)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(VuePikadayPlugin);export default VuePikadayPlugin;
//# sourceMappingURL=vue-pikaday.esm.js.map
