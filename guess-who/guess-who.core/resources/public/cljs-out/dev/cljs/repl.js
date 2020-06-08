// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25275){
var map__25276 = p__25275;
var map__25276__$1 = (((((!((map__25276 == null))))?(((((map__25276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25276):map__25276);
var m = map__25276__$1;
var n = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25276__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25278_25310 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25279_25311 = null;
var count__25280_25312 = (0);
var i__25281_25313 = (0);
while(true){
if((i__25281_25313 < count__25280_25312)){
var f_25314 = cljs.core._nth.call(null,chunk__25279_25311,i__25281_25313);
cljs.core.println.call(null,"  ",f_25314);


var G__25315 = seq__25278_25310;
var G__25316 = chunk__25279_25311;
var G__25317 = count__25280_25312;
var G__25318 = (i__25281_25313 + (1));
seq__25278_25310 = G__25315;
chunk__25279_25311 = G__25316;
count__25280_25312 = G__25317;
i__25281_25313 = G__25318;
continue;
} else {
var temp__5457__auto___25319 = cljs.core.seq.call(null,seq__25278_25310);
if(temp__5457__auto___25319){
var seq__25278_25320__$1 = temp__5457__auto___25319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25278_25320__$1)){
var c__4550__auto___25321 = cljs.core.chunk_first.call(null,seq__25278_25320__$1);
var G__25322 = cljs.core.chunk_rest.call(null,seq__25278_25320__$1);
var G__25323 = c__4550__auto___25321;
var G__25324 = cljs.core.count.call(null,c__4550__auto___25321);
var G__25325 = (0);
seq__25278_25310 = G__25322;
chunk__25279_25311 = G__25323;
count__25280_25312 = G__25324;
i__25281_25313 = G__25325;
continue;
} else {
var f_25326 = cljs.core.first.call(null,seq__25278_25320__$1);
cljs.core.println.call(null,"  ",f_25326);


var G__25327 = cljs.core.next.call(null,seq__25278_25320__$1);
var G__25328 = null;
var G__25329 = (0);
var G__25330 = (0);
seq__25278_25310 = G__25327;
chunk__25279_25311 = G__25328;
count__25280_25312 = G__25329;
i__25281_25313 = G__25330;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25331 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25331);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25331)))?cljs.core.second.call(null,arglists_25331):arglists_25331));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25282_25332 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25283_25333 = null;
var count__25284_25334 = (0);
var i__25285_25335 = (0);
while(true){
if((i__25285_25335 < count__25284_25334)){
var vec__25296_25336 = cljs.core._nth.call(null,chunk__25283_25333,i__25285_25335);
var name_25337 = cljs.core.nth.call(null,vec__25296_25336,(0),null);
var map__25299_25338 = cljs.core.nth.call(null,vec__25296_25336,(1),null);
var map__25299_25339__$1 = (((((!((map__25299_25338 == null))))?(((((map__25299_25338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25299_25338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25299_25338):map__25299_25338);
var doc_25340 = cljs.core.get.call(null,map__25299_25339__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25341 = cljs.core.get.call(null,map__25299_25339__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25337);

cljs.core.println.call(null," ",arglists_25341);

if(cljs.core.truth_(doc_25340)){
cljs.core.println.call(null," ",doc_25340);
} else {
}


var G__25342 = seq__25282_25332;
var G__25343 = chunk__25283_25333;
var G__25344 = count__25284_25334;
var G__25345 = (i__25285_25335 + (1));
seq__25282_25332 = G__25342;
chunk__25283_25333 = G__25343;
count__25284_25334 = G__25344;
i__25285_25335 = G__25345;
continue;
} else {
var temp__5457__auto___25346 = cljs.core.seq.call(null,seq__25282_25332);
if(temp__5457__auto___25346){
var seq__25282_25347__$1 = temp__5457__auto___25346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25282_25347__$1)){
var c__4550__auto___25348 = cljs.core.chunk_first.call(null,seq__25282_25347__$1);
var G__25349 = cljs.core.chunk_rest.call(null,seq__25282_25347__$1);
var G__25350 = c__4550__auto___25348;
var G__25351 = cljs.core.count.call(null,c__4550__auto___25348);
var G__25352 = (0);
seq__25282_25332 = G__25349;
chunk__25283_25333 = G__25350;
count__25284_25334 = G__25351;
i__25285_25335 = G__25352;
continue;
} else {
var vec__25301_25353 = cljs.core.first.call(null,seq__25282_25347__$1);
var name_25354 = cljs.core.nth.call(null,vec__25301_25353,(0),null);
var map__25304_25355 = cljs.core.nth.call(null,vec__25301_25353,(1),null);
var map__25304_25356__$1 = (((((!((map__25304_25355 == null))))?(((((map__25304_25355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25304_25355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25304_25355):map__25304_25355);
var doc_25357 = cljs.core.get.call(null,map__25304_25356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25358 = cljs.core.get.call(null,map__25304_25356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25354);

cljs.core.println.call(null," ",arglists_25358);

if(cljs.core.truth_(doc_25357)){
cljs.core.println.call(null," ",doc_25357);
} else {
}


var G__25359 = cljs.core.next.call(null,seq__25282_25347__$1);
var G__25360 = null;
var G__25361 = (0);
var G__25362 = (0);
seq__25282_25332 = G__25359;
chunk__25283_25333 = G__25360;
count__25284_25334 = G__25361;
i__25285_25335 = G__25362;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__25306 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25307 = null;
var count__25308 = (0);
var i__25309 = (0);
while(true){
if((i__25309 < count__25308)){
var role = cljs.core._nth.call(null,chunk__25307,i__25309);
var temp__5457__auto___25363__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25363__$1)){
var spec_25364 = temp__5457__auto___25363__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25364));
} else {
}


var G__25365 = seq__25306;
var G__25366 = chunk__25307;
var G__25367 = count__25308;
var G__25368 = (i__25309 + (1));
seq__25306 = G__25365;
chunk__25307 = G__25366;
count__25308 = G__25367;
i__25309 = G__25368;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__25306);
if(temp__5457__auto____$1){
var seq__25306__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25306__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25306__$1);
var G__25369 = cljs.core.chunk_rest.call(null,seq__25306__$1);
var G__25370 = c__4550__auto__;
var G__25371 = cljs.core.count.call(null,c__4550__auto__);
var G__25372 = (0);
seq__25306 = G__25369;
chunk__25307 = G__25370;
count__25308 = G__25371;
i__25309 = G__25372;
continue;
} else {
var role = cljs.core.first.call(null,seq__25306__$1);
var temp__5457__auto___25373__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25373__$2)){
var spec_25374 = temp__5457__auto___25373__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25374));
} else {
}


var G__25375 = cljs.core.next.call(null,seq__25306__$1);
var G__25376 = null;
var G__25377 = (0);
var G__25378 = (0);
seq__25306 = G__25375;
chunk__25307 = G__25376;
count__25308 = G__25377;
i__25309 = G__25378;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__25379 = cljs.core.conj.call(null,via,t);
var G__25380 = cljs.core.ex_cause.call(null,t);
via = G__25379;
t = G__25380;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__25383 = datafied_throwable;
var map__25383__$1 = (((((!((map__25383 == null))))?(((((map__25383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25383):map__25383);
var via = cljs.core.get.call(null,map__25383__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__25383__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__25383__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25384 = cljs.core.last.call(null,via);
var map__25384__$1 = (((((!((map__25384 == null))))?(((((map__25384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25384):map__25384);
var type = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__25384__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25385 = data;
var map__25385__$1 = (((((!((map__25385 == null))))?(((((map__25385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25385):map__25385);
var problems = cljs.core.get.call(null,map__25385__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__25385__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__25385__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25386 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__25386__$1 = (((((!((map__25386 == null))))?(((((map__25386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25386):map__25386);
var top_data = map__25386__$1;
var source = cljs.core.get.call(null,map__25386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__25391 = phase;
var G__25391__$1 = (((G__25391 instanceof cljs.core.Keyword))?G__25391.fqn:null);
switch (G__25391__$1) {
case "read-source":
var map__25392 = data;
var map__25392__$1 = (((((!((map__25392 == null))))?(((((map__25392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);
var line = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25394 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__25394__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25394,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25394);
var G__25394__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25394__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25394__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25394__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25395 = top_data;
var G__25395__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25395,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25395);
var G__25395__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25395__$1);
var G__25395__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25395__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25395__$2);
var G__25395__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25395__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25395__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25395__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25395__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25396 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25396,(0),null);
var method = cljs.core.nth.call(null,vec__25396,(1),null);
var file = cljs.core.nth.call(null,vec__25396,(2),null);
var line = cljs.core.nth.call(null,vec__25396,(3),null);
var G__25399 = top_data;
var G__25399__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__25399,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25399);
var G__25399__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__25399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25399__$1);
var G__25399__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__25399__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25399__$2);
var G__25399__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25399__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25399__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25399__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25399__$4;
}

break;
case "execution":
var vec__25400 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25400,(0),null);
var method = cljs.core.nth.call(null,vec__25400,(1),null);
var file = cljs.core.nth.call(null,vec__25400,(2),null);
var line = cljs.core.nth.call(null,vec__25400,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__25400,source__$1,method,file,line,G__25391,G__25391__$1,map__25383,map__25383__$1,via,trace,phase,map__25384,map__25384__$1,type,message,data,map__25385,map__25385__$1,problems,fn,caller,map__25386,map__25386__$1,top_data,source){
return (function (p1__25382_SHARP_){
var or__4131__auto__ = (p1__25382_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__25382_SHARP_);
}
});})(vec__25400,source__$1,method,file,line,G__25391,G__25391__$1,map__25383,map__25383__$1,via,trace,phase,map__25384,map__25384__$1,type,message,data,map__25385,map__25385__$1,problems,fn,caller,map__25386,map__25386__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__25403 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25403__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__25403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25403);
var G__25403__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25403__$1);
var G__25403__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__25403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25403__$2);
var G__25403__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__25403__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25403__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25403__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25403__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25391__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25407){
var map__25408 = p__25407;
var map__25408__$1 = (((((!((map__25408 == null))))?(((((map__25408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25408):map__25408);
var triage_data = map__25408__$1;
var phase = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__25410 = phase;
var G__25410__$1 = (((G__25410 instanceof cljs.core.Keyword))?G__25410.fqn:null);
switch (G__25410__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25411_25420 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25412_25421 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25413_25422 = true;
var _STAR_print_fn_STAR__temp_val__25414_25423 = ((function (_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25413_25422;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25414_25423;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,_STAR_print_fn_STAR__temp_val__25414_25423,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,_STAR_print_fn_STAR__temp_val__25414_25423,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25405_SHARP_){
return cljs.core.dissoc.call(null,p1__25405_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,_STAR_print_fn_STAR__temp_val__25414_25423,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25411_25420,_STAR_print_fn_STAR__orig_val__25412_25421,_STAR_print_newline_STAR__temp_val__25413_25422,_STAR_print_fn_STAR__temp_val__25414_25423,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25412_25421;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25411_25420;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25415_25424 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25416_25425 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25417_25426 = true;
var _STAR_print_fn_STAR__temp_val__25418_25427 = ((function (_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25417_25426;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25418_25427;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,_STAR_print_fn_STAR__temp_val__25418_25427,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,_STAR_print_fn_STAR__temp_val__25418_25427,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25406_SHARP_){
return cljs.core.dissoc.call(null,p1__25406_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,_STAR_print_fn_STAR__temp_val__25418_25427,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25415_25424,_STAR_print_fn_STAR__orig_val__25416_25425,_STAR_print_newline_STAR__temp_val__25417_25426,_STAR_print_fn_STAR__temp_val__25418_25427,sb__4661__auto__,G__25410,G__25410__$1,loc,class_name,simple_class,cause_type,format,map__25408,map__25408__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25416_25425;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25415_25424;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25410__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
