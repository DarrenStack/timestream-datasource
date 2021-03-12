/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","rxjs"],(function(e,t,a,r,n){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=5)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,a){"use strict";a.r(t);var r=a(2),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function s(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function i(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}function l(e,t,a,r){return new(a||(a=Promise))((function(n,s){function o(e){try{l(r.next(e))}catch(e){s(e)}}function i(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,i)}l((r=r.apply(e,t||[])).next())}))}function u(e,t){var a,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(s){return function(i){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,i])}}}function c(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],r=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,s=a.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=s.return)&&a.call(s)}finally{if(n)throw n.error}}return o}function f(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}var p=a(3);function h(e){return"function"==typeof e}var m=!1,b={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e);m=e},get useDeprecatedSynchronousErrorHandling(){return m}};function v(e){setTimeout((function(){throw e}),0)}var y={closed:!0,next:function(e){},error:function(e){if(b.useDeprecatedSynchronousErrorHandling)throw e;v(e)},complete:function(){}},g=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();var E=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),S=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}return e.prototype.unsubscribe=function(){var t;if(!this.closed){var a,r=this._parentOrParents,n=this._ctorUnsubscribe,s=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var i=0;i<r.length;++i){r[i].remove(this)}if(h(s)){n&&(this._unsubscribe=void 0);try{s.call(this)}catch(e){t=e instanceof E?w(e.errors):[e]}}if(g(o)){i=-1;for(var l=o.length;++i<l;){var u=o[i];if(null!==(a=u)&&"object"==typeof a)try{u.unsubscribe()}catch(e){t=t||[],e instanceof E?t=t.concat(w(e.errors)):t.push(e)}}}if(t)throw new E(t)}},e.prototype.add=function(t){var a=t;if(!t)return e.EMPTY;switch(typeof t){case"function":a=new e(t);case"object":if(a===this||a.closed||"function"!=typeof a.unsubscribe)return a;if(this.closed)return a.unsubscribe(),a;if(!(a instanceof e)){var r=a;(a=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var n=a._parentOrParents;if(null===n)a._parentOrParents=this;else if(n instanceof e){if(n===this)return a;a._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return a;n.push(this)}var s=this._subscriptions;return null===s?this._subscriptions=[a]:s.push(a),a},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var a=t.indexOf(e);-1!==a&&t.splice(a,1)}},e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function w(e){return e.reduce((function(e,t){return e.concat(t instanceof E?t.errors:t)}),[])}var _=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),T=function(e){function t(a,r,n){var s=e.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=y;break;case 1:if(!a){s.destination=y;break}if("object"==typeof a){a instanceof t?(s.syncErrorThrowable=a.syncErrorThrowable,s.destination=a,a.add(s)):(s.syncErrorThrowable=!0,s.destination=new D(s,a));break}default:s.syncErrorThrowable=!0,s.destination=new D(s,a,r,n)}return s}return s(t,e),t.prototype[_]=function(){return this},t.create=function(e,a,r){var n=new t(e,a,r);return n.syncErrorThrowable=!1,n},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(S),D=function(e){function t(t,a,r,n){var s,o=e.call(this)||this;o._parentSubscriber=t;var i=o;return h(a)?s=a:a&&(s=a.next,r=a.error,n=a.complete,a!==y&&(h((i=Object.create(a)).unsubscribe)&&o.add(i.unsubscribe.bind(i)),i.unsubscribe=o.unsubscribe.bind(o))),o._context=i,o._next=s,o._error=r,o._complete=n,o}return s(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,a=b.useDeprecatedSynchronousErrorHandling;if(this._error)a&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)a?(t.syncErrorValue=e,t.syncErrorThrown=!0):v(e),this.unsubscribe();else{if(this.unsubscribe(),a)throw e;v(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var a=function(){return e._complete.call(e._context)};b.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,a),this.unsubscribe()):(this.__tryOrUnsub(a),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),b.useDeprecatedSynchronousErrorHandling)throw e;v(e)}},t.prototype.__tryOrSetError=function(e,t,a){if(!b.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,a)}catch(t){return b.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(v(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(T);var O=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new x(e,this.project,this.thisArg))},e}(),x=function(e){function t(t,a,r){var n=e.call(this,t)||this;return n.project=a,n.count=0,n.thisArg=r||n,n}return s(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(T),C=a(4);var N=function(e){function t(t){var a=e.call(this,t)||this;return a.annotations={},a.options=t.jsonData,a}return s(t,e),t.prototype.metricFindQuery=function(e,t){return l(this,void 0,Promise,(function(){var a;return u(this,(function(r){return e?(a=Object(p.getTemplateSrv)().replace(e),[2,this.getStrings(a,t.range).toPromise().then((function(e){return e.map((function(e){return{text:e}}))}))]):[2,Promise.resolve([])]}))}))},t.prototype.filterQuery=function(e){return!!e.rawQuery},t.prototype.getQueryDisplayText=function(e){var t;return null!==(t=e.rawQuery)&&void 0!==t?t:""},t.prototype.applyTemplateVariables=function(e,t){if(!e.rawQuery)return e;var a=o({},t);delete a.__interval_ms,delete a.__interval;var r=Object(p.getTemplateSrv)();return o(o({},e),{database:r.replace(e.database||"",t),table:r.replace(e.table||"",t),measure:r.replace(e.measure||"",t),rawQuery:r.replace(e.rawQuery,a)})},t.prototype.query=function(t){var a,n,s=this,l=void 0,u=void 0;return a=t,n={getNextQuery:function(e){var t,a,r;if(null===(t=e.data)||void 0===t?void 0:t.length){var n=e.data[0],s=null===(a=n.meta)||void 0===a?void 0:a.custom;if(s&&s.nextToken)return u=s.queryId,{refId:n.refId,rawQuery:null===(r=n.meta)||void 0===r?void 0:r.executedQueryString,nextToken:s.nextToken}}},query:function(t){return e.prototype.query.call(s,t)},process:function(e,t,a){var r,n,s,u,d,f,p=null===(u=null===(s=t[0])||void 0===s?void 0:s.meta)||void 0===u?void 0:u.custom;if(!p)return t;if(p.fetchStartTime=e.fetchStartTime,p.fetchEndTime=e.fetchEndTime,p.fetchTime=e.fetchEndTime-e.fetchStartTime,l){if(!(null===(d=l.subs)||void 0===d?void 0:d.length)){l.subs,l.nextToken,l.queryId;var h=i(l,["subs","nextToken","queryId"]);h.requestNumber=1,null===(f=l.subs)||void 0===f||f.push(h)}try{for(var m=c(l.subs),b=m.next();!b.done;b=m.next())delete b.value.nextToken}catch(e){r={error:e}}finally{try{b&&!b.done&&(n=m.return)&&n.call(m)}finally{if(r)throw r.error}}delete p.queryId,p.requestNumber=l.subs.length+1,l.subs.push(p),l.fetchEndTime=e.fetchEndTime,l.fetchTime=e.fetchEndTime-l.fetchStartTime,l.executionFinishTime=p.executionFinishTime,t[0].meta.custom=l}else l=o(o(o({},e),p),{subs:[]});if(a&&l.executionStartTime&&l.executionFinishTime){delete l.nextToken;var v=l.executionFinishTime-l.executionStartTime;if(v>0){var y=[];if(l.subs&&l.subs.length&&y.push({displayName:"HTTP request count",value:l.subs.length,unit:"none"}),y.push({displayName:"Execution time (Grafana server ⇆ Timestream)",value:v,unit:"ms",decimals:2}),l.fetchStartTime){l.fetchEndTime=Date.now();var g=l.fetchEndTime-l.fetchStartTime;l.fetchTime=g-v,g>v&&(y.push({displayName:"Fetch time (Browser ⇆ Grafana server w/o Timestream)",value:l.fetchTime,unit:"ms",decimals:2}),y.push({displayName:"Fetch overhead",value:l.fetchTime/g*100,unit:"percent"}))}t[0].meta.stats=y}}return t},onCancel:function(e){u&&s.postResource("cancel",{queryId:u}).then((function(e){})).catch((function(e){e.isHandled=!0}))}},new C.Observable((function(e){var t=void 0,s=void 0,i={fetchStartTime:Date.now(),fetchEndTime:void 0},l=r.LoadingState.Loading,u=1,c={next:function(a){i.fetchEndTime=Date.now(),(l=a.state)!==r.LoadingState.Error&&(t=n.getNextQuery(a),l=t?r.LoadingState.Loading:r.LoadingState.Done);var s=n.process(i,a.data,!t);e.next(o(o({},a),{data:s,state:l}))},error:function(t){e.error(t)},complete:function(){s&&(s.unsubscribe(),s=void 0),t?(i.fetchEndTime=void 0,i.fetchStartTime=Date.now(),s=n.query(o(o({},a),{requestId:a.requestId+"."+ ++u,startTime:i.fetchStartTime,targets:[t]})).subscribe(c),t=void 0):e.complete()}};return s=n.query(a).subscribe(c),function(){t=void 0,c.complete(),i.fetchEndTime||n.onCancel(i)}}))},t.prototype.getStrings=function(e,t){return this.query({targets:[{refId:"GetStrings",rawQuery:e}],range:t}).pipe((a=function(e){var t,a=e.data[0];if(!a||!a.length)return[];var r=null===(t=a.fields[0])||void 0===t?void 0:t.values;return r?r.toArray():[]},function(e){if("function"!=typeof a)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new O(a,r))}));var a,r},t.prototype.getDatabases=function(e){return l(this,void 0,Promise,(function(){return u(this,(function(e){return[2,this.getStrings("SHOW DATABASES").toPromise()]}))}))},t.prototype.getTables=function(e){return l(this,void 0,Promise,(function(){return u(this,(function(t){return e?[2,this.getStrings("SHOW TABLES FROM "+M(e)).toPromise()]:[2,[]]}))}))},t.prototype.getMeasureInfo=function(e,t){return l(this,void 0,Promise,(function(){return u(this,(function(a){return e&&t?[2,this.query({targets:[{refId:"X",rawQuery:"SHOW MEASURES FROM "+M(e)+"."+M(t)}]}).toPromise().then((function(e){var t,a,r,n=[],s=e.data[0];if(!s||!s.length)return n;for(var o=null===(t=s.fields[0])||void 0===t?void 0:t.values,i=null===(a=s.fields[1])||void 0===a?void 0:a.values,l=null===(r=s.fields[2])||void 0===r?void 0:r.values,u=0;u<s.length;u++){var c=JSON.parse(l.get(u)).map((function(e){return e.dimension_name}));n.push({name:o.get(u),type:i.get(u),dimensions:c})}return n}))]:[2,[]]}))}))},t}(p.DataSourceWithBackend);function M(e){return e?(e.startsWith('"')||(e='"'+e),e.endsWith('"')||(e+='"'),e):""}var j,I,P,k=a(0),A=a.n(k);!function(e){e.Value="value",e.Avg="avg",e.Min="min",e.Max="mean",e.P90="p90",e.P95="p95",e.P99="p99"}(j||(j={})),function(e){e.Builder="builder",e.Samples="samples",e.Raw="raw"}(I||(I={})),function(e){e.varchar="varchar",e.double="double",e.timestamp="timestamp"}(P||(P={}));var F=a(1),R=function(e){var t=e.label,a=e.labelWidth,r=void 0===a?8:a,n=e.tooltip,s=e.children;return A.a.createElement(A.a.Fragment,null,A.a.createElement(F.InlineFormLabel,{width:r,className:"query-keyword",tooltip:n},t),s)},L=[{label:"Samples",value:I.Samples,description:"Example query structures"},{label:"Raw Query",value:I.Raw,description:"Directly edit your query"}],q=[{label:"Show databases",value:"SHOW DATABASES",description:"List databases available in your instance"},{label:"Show tables",value:"SHOW TABLES FROM $__database",description:"List tables in the selected database"},{label:"Describe table",value:"DESCRIBE $__database.$__table",description:"Describe the selected table"},{label:"Show measurements",value:"SHOW MEASURES FROM $__database.$__table",description:"List measurements in the selected table"},{label:"First 10 rows",value:"SELECT * FROM $__database.$__table LIMIT 10",description:"Select the first 10 rows of the selected table"}],Q=function(){function e(e,t,a){var r=this;this.ds=e,this.templateSrv=a,this.getSuggestions=function(){var e,t,a,n,s,o,i,l,u=[{label:"$__timeFilter",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro)"},{label:"$__interval_ms",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro)"},{label:"$__now_ms",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro)"},{label:"$__database",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro) "+r.state.database},{label:"$__table",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro) "+r.state.table},{label:"$__measure",kind:F.CodeEditorSuggestionItemKind.Method,detail:"(Macro) "+r.state.measure}];if(r.templateSrv&&r.templateSrv.getVariables().forEach((function(e){var t="${"+e.name+"}",a=r.templateSrv.replace(t);a===t&&(a=""),u.push({label:t,kind:F.CodeEditorSuggestionItemKind.Text,detail:"(Template Variable) "+a})})),r.databases)try{for(var d=c(r.databases),f=d.next();!f.done;f=d.next()){(v=K(S=f.value))&&u.push({label:v,kind:F.CodeEditorSuggestionItemKind.Property,detail:"(Database)"})}}catch(t){e={error:t}}finally{try{f&&!f.done&&(t=d.return)&&t.call(d)}finally{if(e)throw e.error}}if(r.tables)try{for(var p=c(r.tables),h=p.next();!h.done;h=p.next()){(v=K(S=h.value))&&u.push({label:v,kind:F.CodeEditorSuggestionItemKind.Property,detail:"(Table)"})}}catch(e){a={error:e}}finally{try{h&&!h.done&&(n=p.return)&&n.call(p)}finally{if(a)throw a.error}}if(r.measures)try{for(var m=c(r.measures),b=m.next();!b.done;b=m.next()){var v;(v=K(S=b.value))&&u.push({label:v,kind:F.CodeEditorSuggestionItemKind.Property,detail:"(Measure)"})}}catch(e){s={error:e}}finally{try{b&&!b.done&&(o=m.return)&&o.call(m)}finally{if(s)throw s.error}}if(r.dimensions&&r.state.measure){var y=r.dimensions[r.state.measure];if(y)try{for(var g=c(y),E=g.next();!E.done;E=g.next()){var S=E.value;u.push({label:'"'+S+'"',kind:F.CodeEditorSuggestionItemKind.Property,detail:"(Dimension)"})}}catch(e){i={error:e}}finally{try{E&&!E.done&&(l=g.return)&&l.call(g)}finally{if(i)throw i.error}}}return u},this.getDatabases=function(e){return l(r,void 0,void 0,(function(){var e,t;return u(this,(function(a){switch(a.label){case 0:return this.databases?[2,Promise.resolve(this.databases)]:[4,this.ds.getDatabases()];case 1:return e=a.sent(),this.databases=e.map((function(e){return{label:e,value:'"'+e+'"'}})),this.templateSrv&&((t=this.databases).push.apply(t,f(this.andTemplates())),this.databases.push({label:"-- remove --",value:""})),[2,this.databases]}}))}))},this.getTables=function(e){return l(r,void 0,void 0,(function(){var e=this;return u(this,(function(t){return this.tables?[2,Promise.resolve(this.tables)]:this.state.database?[2,this.ds.getTables(this.state.database).then((function(t){var a;return e.tables=t.map((function(e){return{label:e,value:'"'+e+'"'}})),e.templateSrv&&((a=e.tables).push.apply(a,f(e.andTemplates())),e.tables.push({label:"-- remove --",value:""})),e.tables}))]:[2,Promise.resolve([{label:"database not configured",value:""}])]}))}))},this.filterMeasures=function(e){return l(r,void 0,void 0,(function(){return u(this,(function(t){return this.measures?e?[2,this.measures.filter((function(t){if(t.value)return t.value.indexOf(e)>=0}))]:[2,this.measures]:[2,[]]}))}))},this.getMeasures=function(e){return l(r,void 0,void 0,(function(){var t,a,r,n=this;return u(this,(function(s){return this.measures?[2,this.filterMeasures(e)]:(t=this.state,a=t.database,r=t.table,a?r?[2,this.ds.getMeasureInfo(a,r).then((function(t){var a,r={};return n.measures=t.map((function(e){return r[e.name]=e.dimensions,{label:e.name+" ("+e.type+")",value:""+e.name}})),n.dimensions=r,n.templateSrv&&((a=n.measures).push.apply(a,f(n.andTemplates())),n.measures.push({label:"-- remove --",value:""})),n.filterMeasures(e)}))]:[2,Promise.resolve([{label:"table not configured",value:""}])]:[2,Promise.resolve([{label:"database not configured",value:""}])])}))}))},this.state=o({},t),this.templateSrv&&this.updateState(t)}return e.prototype.updateState=function(e){e.database?(this.databases=void 0,this.tables=void 0,this.measures=void 0,this.dimensions=void 0):e.table?(this.measures=void 0,this.dimensions=void 0):e.measure&&(this.dimensions=void 0);var t=o(o({},this.state),e);if(this.templateSrv){var a=this.ds.options,r=a.defaultDatabase,n=a.defaultTable,s=a.defaultMeasure;!t.database&&r&&(t.database=r),!t.table&&n&&(t.table=n),!t.measure&&s&&(t.measure=s),t.database&&(t.database=this.templateSrv.replace(t.database)),t.table&&(t.table=this.templateSrv.replace(t.table)),t.measure&&(t.measure=this.templateSrv.replace(t.measure))}return this.state=t},e.prototype.preload=function(){return l(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.getDatabases()];case 1:return e.sent(),[4,this.getTables()];case 2:return e.sent(),[2,this.getMeasures()]}}))}))},e.prototype.andTemplates=function(){return this.templateSrv?this.templateSrv.getVariables().map((function(e){var t="${"+e.name+"}";return{label:t,value:t}})):[]},e}();function K(e){if(e&&e.value){var t=e.value;if(!t.startsWith("$")&&!t.startsWith("-"))return t}}var U,$=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.componentDidMount=function(){var e=t.props,a=e.datasource,r=e.query,n=new Q(a,r,Object(p.getTemplateSrv)());t.setState({schema:n,schemaState:n.state}),n.preload().then((function(e){}))},t.onQueryChange=function(e){t.props.onChange(o(o({},t.props.query),{rawQuery:e,queryType:I.Raw})),t.props.onRunQuery()},t.onDbChanged=function(e){var a=o(o({},t.props.query),{database:e.value});a.database||delete a.database;var r=t.state.schema.updateState(a);t.setState({schemaState:r}),t.props.onChange(a),r.table&&t.props.onRunQuery()},t.onTableChanged=function(e){var a=o(o({},t.props.query),{table:e.value});a.table||delete a.table;var r=t.state.schema.updateState(a);t.setState({schemaState:r}),t.props.onChange(a),t.props.onRunQuery()},t.onMeasureChanged=function(e){var a=o(o({},t.props.query),{measure:e.value});a.measure||delete a.measure,t.props.onChange(a);var r=t.state.schema.updateState(a);t.setState({schemaState:r})},t.onQueryTypeChange=function(e){t.props.onChange(o(o({},t.props.query),{queryType:e.value||I.Samples}))},t.onSampleChange=function(e){t.props.onChange(o(o({},t.props.query),{rawQuery:e.value})),t.props.onRunQuery()},t.renderDatabaseMacro=function(e,a,r){var n="",s="$__database = ";return a?s+=a:(n=s+(null!=r?r:"?"),s=""),A.a.createElement(F.SegmentAsync,{value:s,loadOptions:e.getDatabases,placeholder:n,onChange:t.onDbChanged,allowCustomValue:!0})},t.renderTableMacro=function(e,a,r){var n="",s="$__table = ";return a?s+=a:(n=s+(null!=r?r:"?"),s=""),A.a.createElement(F.SegmentAsync,{value:s,loadOptions:e.getTables,placeholder:n,onChange:t.onTableChanged,allowCustomValue:!0})},t.renderMeasureMacro=function(e,a,r){var n="",s="$__measure = ";return a?s+=a:(n=s+(null!=r?r:"?"),s=""),A.a.createElement(F.SegmentAsync,{value:s,loadOptions:e.getMeasures,placeholder:n,onChange:t.onMeasureChanged,allowCustomValue:!0})},t}return s(t,e),t.prototype.render=function(){var e=this.props.query,t=this.state,a=t.schema,r=t.schemaState,n=L.find((function(t){return t.value===e.queryType}))||L[1];return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement(R,{label:"Query"},A.a.createElement(F.Segment,{value:n,options:L,onChange:this.onQueryTypeChange})),n.value===I.Samples&&A.a.createElement(F.Segment,{value:"",placeholder:"Select Example",options:q,onChange:this.onSampleChange}),A.a.createElement("div",{className:"gf-form gf-form--grow"},A.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement(F.InlineFormLabel,{width:8,className:"query-keyword"},"Macros"),a&&r&&A.a.createElement(A.a.Fragment,null,this.renderDatabaseMacro(a,e.database,r.database),this.renderTableMacro(a,e.table,r.table),this.renderMeasureMacro(a,e.measure,r.measure)),A.a.createElement("div",{className:"gf-form gf-form--grow"},A.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))),n.value!==I.Builder&&a&&A.a.createElement(F.CodeEditor,{height:"250px",language:"sql",value:e.rawQuery||"",onBlur:this.onQueryChange,onSave:this.onQueryChange,showMiniMap:!1,showLineNumbers:!0,getSuggestions:a.getSuggestions}))},t}(k.PureComponent);!function(e){e.Keys="keys",e.Credentials="credentials",e.Default="default"}(U||(U={}));var H=[{label:"AWS SDK Default",value:U.Default},{label:"Access & secret key",value:U.Keys},{label:"Credentials file",value:U.Credentials}],V=["us-east-1","us-east-2","us-west-2","eu-west-1"].map((function(e){return{value:e,label:e}})),W=F.LegacyForms.Select,J=F.LegacyForms.Input,B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={regions:V},t}return s(t,e),t.prototype.render=function(){var e,t,a,n=this,s=this.state.regions,o=this.props.options,i=o.secureJsonData||{},l=o.jsonData,u=l.profile;void 0===u&&(u=o.database);var c=s.find((function(e){return e.value===l.defaultRegion}));return!c&&l.defaultRegion&&(c={value:l.defaultRegion,label:l.defaultRegion}),A.a.createElement(A.a.Fragment,null,A.a.createElement("h3",{className:"page-heading"},"Connection Details"),A.a.createElement("div",{className:"gf-form-group"},A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"Specify which AWS credentials chain to use. AWS SDK Default is the recommended option for EKS, ECS, or if you've attached an IAM role to your EC2 instance."},"Authentication Provider"),A.a.createElement(W,{className:"width-30",value:H.find((function(e){return e.value===o.jsonData.authType}))||H[0],options:H,defaultValue:o.jsonData.authType,onChange:function(e){Object(r.onUpdateDatasourceJsonDataOptionSelect)(n.props,"authType")(e)}}))),"credentials"===o.jsonData.authType&&A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"Credentials profile name, as specified in ~/.aws/credentials, leave blank for default."},"Credentials Profile Name"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",placeholder:"default",value:u,onChange:Object(r.onUpdateDatasourceJsonDataOption)(this.props,"profile")})))),"keys"===o.jsonData.authType&&A.a.createElement("div",null,(null===(e=o.secureJsonFields)||void 0===e?void 0:e.accessKey)?A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"Access Key ID"),A.a.createElement(J,{className:"width-25",placeholder:"Configured",disabled:!0})),A.a.createElement("div",{className:"gf-form"},A.a.createElement("div",{className:"max-width-30 gf-form-inline"},A.a.createElement(F.Button,{variant:"secondary",type:"button",onClick:Object(r.onUpdateDatasourceResetOption)(this.props,"accessKey")},"Reset")))):A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"Access Key ID"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",value:i.accessKey||"",onChange:Object(r.onUpdateDatasourceSecureJsonDataOption)(this.props,"accessKey")})))),(null===(t=o.secureJsonFields)||void 0===t?void 0:t.secretKey)?A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"Secret Access Key"),A.a.createElement(J,{className:"width-25",placeholder:"Configured",disabled:!0})),A.a.createElement("div",{className:"gf-form"},A.a.createElement("div",{className:"max-width-30 gf-form-inline"},A.a.createElement(F.Button,{variant:"secondary",type:"button",onClick:Object(r.onUpdateDatasourceResetOption)(this.props,"secretKey")},"Reset")))):A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"Secret Access Key"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",value:i.secretKey||"",onChange:Object(r.onUpdateDatasourceSecureJsonDataOption)(this.props,"secretKey")}))))),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"Optionally, specify the ARN of a role to assume. Specifying a role here will ensure that the selected authentication provider is used to assume the specified role rather than using the credentials directly. Leave blank if you don't need to assume a role at all"},"Assume Role ARN"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",placeholder:"arn:aws:iam:*",value:o.jsonData.assumeRoleArn||"",onChange:Object(r.onUpdateDatasourceJsonDataOption)(this.props,"assumeRoleArn")})))),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"If you are assuming a role in another account, that has been created with an external ID, specify the external ID here."},"External ID"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",placeholder:"External ID",value:o.jsonData.externalId||"",onChange:Object(r.onUpdateDatasourceJsonDataOption)(this.props,"externalId")}))))),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region."},"Default Region"),A.a.createElement(W,{className:"width-30",value:c,options:s,defaultValue:o.jsonData.defaultRegion,onChange:Object(r.onUpdateDatasourceJsonDataOptionSelect)(this.props,"defaultRegion"),allowCustomValue:!0,formatCreateLabel:function(e){return"Region: "+e}}))),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14",tooltip:"Optionally, specify a custom endpoint for the service"},"Endpoint"),A.a.createElement("div",{className:"width-30"},A.a.createElement(J,{className:"width-30",placeholder:null!==(a=this.props.defaultEndpoint)&&void 0!==a?a:"https://{service}.{region}.amazonaws.com",value:o.jsonData.endpoint||"",onChange:Object(r.onUpdateDatasourceJsonDataOption)(this.props,"endpoint")}))))))},t}(k.PureComponent),G=function(e){function t(t){var a=e.call(this,t)||this;return a.componentDidMount=function(){return l(a,void 0,void 0,(function(){var e,t,a,r;return u(this,(function(n){switch(n.label){case 0:return[4,Object(p.getDataSourceSrv)().get(this.props.options.name)];case 1:return e=n.sent(),t=this.props.options,a=e,r={refId:"X",database:t.jsonData.defaultDatabase,table:t.jsonData.defaultTable,measure:t.jsonData.defaultMeasure},this.setState({schema:new Q(a,r)}),[2]}}))}))},a.componentDidUpdate=function(e){return l(a,void 0,void 0,(function(){var t,a;return u(this,(function(r){return this.state.schema?(t=e.options.jsonData,(a=this.props.options.jsonData).authType===t.authType&&a.defaultRegion==a.defaultRegion||this.componentDidMount()):this.componentDidMount(),[2]}))}))},a.onDatabaseChange=function(e){var t,r=a.props.options,n=o(o({},r.jsonData),{defaultDatabase:e.value});delete n.defaultTable,delete n.defaultMeasure,a.props.onOptionsChange(o(o({},r),{jsonData:n}));var s=a.state.schema.updateState({database:null!==(t=n.defaultDatabase)&&void 0!==t?t:""});a.setState({schemaState:s})},a.onTableChange=function(e){var t,r=a.props.options,n=o(o({},r.jsonData),{defaultTable:e.value});delete n.defaultMeasure,a.props.onOptionsChange(o(o({},r),{jsonData:n}));var s=a.state.schema.updateState({table:null!==(t=n.defaultTable)&&void 0!==t?t:""});a.setState({schemaState:s})},a.onMeasureChange=function(e){var t,r=a.props.options,n=o(o({},r.jsonData),{defaultMeasure:e.value});a.props.onOptionsChange(o(o({},r),{jsonData:n}));var s=a.state.schema.updateState({measure:null!==(t=n.defaultMeasure)&&void 0!==t?t:""});a.setState({schemaState:s})},a.state={},a}return s(t,e),t.prototype.renderDefaultChoices=function(e){var t,a=this.props.options.jsonData,r=a.defaultDatabase,n=a.defaultTable,s=a.defaultMeasure,o=r?{label:r,value:r}:{label:"Select database",value:""},i=n?{label:n,value:n}:{label:"Select table",value:""},l=s?{label:s,value:s}:{label:"Select measure",value:""};return A.a.createElement("div",{key:(t=JSON.stringify(this.props.options.jsonData),t.split("").reduce((function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e}),0))},A.a.createElement("br",null),A.a.createElement("h3",null,"Default Query Macros"),A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"$__database"),A.a.createElement(F.AsyncSelect,{className:"width-30",cacheOptions:!1,loadOptions:e.getDatabases,value:o,onChange:this.onDatabaseChange,defaultOptions:!0,loadingMessage:"...",allowCustomValue:!0,formatCreateLabel:function(e){return"DB: "+e}}))),r&&A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"$__table"),A.a.createElement(F.AsyncSelect,{className:"width-30",cacheOptions:!1,loadOptions:e.getTables,value:i,onChange:this.onTableChange,defaultOptions:!0,loadingMessage:"...",allowCustomValue:!0,formatCreateLabel:function(e){return"Table: "+e}}))),r&&n&&A.a.createElement("div",{className:"gf-form-inline"},A.a.createElement("div",{className:"gf-form"},A.a.createElement(F.InlineFormLabel,{className:"width-14"},"$__measure"),A.a.createElement(F.AsyncSelect,{className:"width-30",cacheOptions:!1,loadOptions:e.getMeasures,value:l,onChange:this.onMeasureChange,defaultOptions:!0,loadingMessage:"...",allowCustomValue:!0,formatCreateLabel:function(e){return"Use unknown measure: "+e}}))))},t.prototype.render=function(){var e=this.state.schema;return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",null,A.a.createElement(B,o({},this.props,{defaultEndpoint:"https://query-{cell}.timestream.{region}.amazonaws.com"}))),e&&this.renderDefaultChoices(e))},t}(k.PureComponent);var z=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={index:0},t.renderInfo=function(e,t){var a,r=null===(a=e.meta)||void 0===a?void 0:a.custom;return r?A.a.createElement("div",{key:t},A.a.createElement("h3",null,"Query ID"),A.a.createElement("pre",null,r.queryId),r.nextToken&&A.a.createElement(A.a.Fragment,null,A.a.createElement("h3",null,"Next Token"),A.a.createElement("pre",null,r.nextToken)),A.a.createElement("h3",null,"Details"),A.a.createElement("pre",null,JSON.stringify(r,null,2))):null},t}return s(t,e),t.prototype.render=function(){var e=this,t=this.props.data;return t&&t.length?A.a.createElement("div",null,t.map((function(t,a){return e.renderInfo(t,a)}))):A.a.createElement("div",null,"No Data")},t}(k.PureComponent);a.d(t,"plugin",(function(){return X}));var X=new r.DataSourcePlugin(N).setConfigEditor(G).setMetadataInspector(z).setQueryEditor($)}])}));
//# sourceMappingURL=module.js.map