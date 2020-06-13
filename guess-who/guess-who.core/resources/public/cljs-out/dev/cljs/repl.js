// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__25149){
var map__25150 = p__25149;
var map__25150__$1 = (((((!((map__25150 == null))))?(((((map__25150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25150):map__25150);
var m = map__25150__$1;
var n = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__25150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__25152_25184 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25153_25185 = null;
var count__25154_25186 = (0);
var i__25155_25187 = (0);
while(true){
if((i__25155_25187 < count__25154_25186)){
var f_25188 = cljs.core._nth.call(null,chunk__25153_25185,i__25155_25187);
cljs.core.println.call(null,"  ",f_25188);


var G__25189 = seq__25152_25184;
var G__25190 = chunk__25153_25185;
var G__25191 = count__25154_25186;
var G__25192 = (i__25155_25187 + (1));
seq__25152_25184 = G__25189;
chunk__25153_25185 = G__25190;
count__25154_25186 = G__25191;
i__25155_25187 = G__25192;
continue;
} else {
var temp__5457__auto___25193 = cljs.core.seq.call(null,seq__25152_25184);
if(temp__5457__auto___25193){
var seq__25152_25194__$1 = temp__5457__auto___25193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25152_25194__$1)){
var c__4550__auto___25195 = cljs.core.chunk_first.call(null,seq__25152_25194__$1);
var G__25196 = cljs.core.chunk_rest.call(null,seq__25152_25194__$1);
var G__25197 = c__4550__auto___25195;
var G__25198 = cljs.core.count.call(null,c__4550__auto___25195);
var G__25199 = (0);
seq__25152_25184 = G__25196;
chunk__25153_25185 = G__25197;
count__25154_25186 = G__25198;
i__25155_25187 = G__25199;
continue;
} else {
var f_25200 = cljs.core.first.call(null,seq__25152_25194__$1);
cljs.core.println.call(null,"  ",f_25200);


var G__25201 = cljs.core.next.call(null,seq__25152_25194__$1);
var G__25202 = null;
var G__25203 = (0);
var G__25204 = (0);
seq__25152_25184 = G__25201;
chunk__25153_25185 = G__25202;
count__25154_25186 = G__25203;
i__25155_25187 = G__25204;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25205 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25205);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25205)))?cljs.core.second.call(null,arglists_25205):arglists_25205));
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
var seq__25156_25206 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25157_25207 = null;
var count__25158_25208 = (0);
var i__25159_25209 = (0);
while(true){
if((i__25159_25209 < count__25158_25208)){
var vec__25170_25210 = cljs.core._nth.call(null,chunk__25157_25207,i__25159_25209);
var name_25211 = cljs.core.nth.call(null,vec__25170_25210,(0),null);
var map__25173_25212 = cljs.core.nth.call(null,vec__25170_25210,(1),null);
var map__25173_25213__$1 = (((((!((map__25173_25212 == null))))?(((((map__25173_25212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25173_25212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25173_25212):map__25173_25212);
var doc_25214 = cljs.core.get.call(null,map__25173_25213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25215 = cljs.core.get.call(null,map__25173_25213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25211);

cljs.core.println.call(null," ",arglists_25215);

if(cljs.core.truth_(doc_25214)){
cljs.core.println.call(null," ",doc_25214);
} else {
}


var G__25216 = seq__25156_25206;
var G__25217 = chunk__25157_25207;
var G__25218 = count__25158_25208;
var G__25219 = (i__25159_25209 + (1));
seq__25156_25206 = G__25216;
chunk__25157_25207 = G__25217;
count__25158_25208 = G__25218;
i__25159_25209 = G__25219;
continue;
} else {
var temp__5457__auto___25220 = cljs.core.seq.call(null,seq__25156_25206);
if(temp__5457__auto___25220){
var seq__25156_25221__$1 = temp__5457__auto___25220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25156_25221__$1)){
var c__4550__auto___25222 = cljs.core.chunk_first.call(null,seq__25156_25221__$1);
var G__25223 = cljs.core.chunk_rest.call(null,seq__25156_25221__$1);
var G__25224 = c__4550__auto___25222;
var G__25225 = cljs.core.count.call(null,c__4550__auto___25222);
var G__25226 = (0);
seq__25156_25206 = G__25223;
chunk__25157_25207 = G__25224;
count__25158_25208 = G__25225;
i__25159_25209 = G__25226;
continue;
} else {
var vec__25175_25227 = cljs.core.first.call(null,seq__25156_25221__$1);
var name_25228 = cljs.core.nth.call(null,vec__25175_25227,(0),null);
var map__25178_25229 = cljs.core.nth.call(null,vec__25175_25227,(1),null);
var map__25178_25230__$1 = (((((!((map__25178_25229 == null))))?(((((map__25178_25229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25178_25229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25178_25229):map__25178_25229);
var doc_25231 = cljs.core.get.call(null,map__25178_25230__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_25232 = cljs.core.get.call(null,map__25178_25230__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_25228);

cljs.core.println.call(null," ",arglists_25232);

if(cljs.core.truth_(doc_25231)){
cljs.core.println.call(null," ",doc_25231);
} else {
}


var G__25233 = cljs.core.next.call(null,seq__25156_25221__$1);
var G__25234 = null;
var G__25235 = (0);
var G__25236 = (0);
seq__25156_25206 = G__25233;
chunk__25157_25207 = G__25234;
count__25158_25208 = G__25235;
i__25159_25209 = G__25236;
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

var seq__25180 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__25181 = null;
var count__25182 = (0);
var i__25183 = (0);
while(true){
if((i__25183 < count__25182)){
var role = cljs.core._nth.call(null,chunk__25181,i__25183);
var temp__5457__auto___25237__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25237__$1)){
var spec_25238 = temp__5457__auto___25237__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25238));
} else {
}


var G__25239 = seq__25180;
var G__25240 = chunk__25181;
var G__25241 = count__25182;
var G__25242 = (i__25183 + (1));
seq__25180 = G__25239;
chunk__25181 = G__25240;
count__25182 = G__25241;
i__25183 = G__25242;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__25180);
if(temp__5457__auto____$1){
var seq__25180__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25180__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25180__$1);
var G__25243 = cljs.core.chunk_rest.call(null,seq__25180__$1);
var G__25244 = c__4550__auto__;
var G__25245 = cljs.core.count.call(null,c__4550__auto__);
var G__25246 = (0);
seq__25180 = G__25243;
chunk__25181 = G__25244;
count__25182 = G__25245;
i__25183 = G__25246;
continue;
} else {
var role = cljs.core.first.call(null,seq__25180__$1);
var temp__5457__auto___25247__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___25247__$2)){
var spec_25248 = temp__5457__auto___25247__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_25248));
} else {
}


var G__25249 = cljs.core.next.call(null,seq__25180__$1);
var G__25250 = null;
var G__25251 = (0);
var G__25252 = (0);
seq__25180 = G__25249;
chunk__25181 = G__25250;
count__25182 = G__25251;
i__25183 = G__25252;
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
var G__25253 = cljs.core.conj.call(null,via,t);
var G__25254 = cljs.core.ex_cause.call(null,t);
via = G__25253;
t = G__25254;
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
var map__25257 = datafied_throwable;
var map__25257__$1 = (((((!((map__25257 == null))))?(((((map__25257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25257):map__25257);
var via = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__25257__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__25258 = cljs.core.last.call(null,via);
var map__25258__$1 = (((((!((map__25258 == null))))?(((((map__25258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25258):map__25258);
var type = cljs.core.get.call(null,map__25258__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__25258__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__25258__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__25259 = data;
var map__25259__$1 = (((((!((map__25259 == null))))?(((((map__25259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25259):map__25259);
var problems = cljs.core.get.call(null,map__25259__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__25259__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__25259__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__25260 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__25260__$1 = (((((!((map__25260 == null))))?(((((map__25260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25260):map__25260);
var top_data = map__25260__$1;
var source = cljs.core.get.call(null,map__25260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__25265 = phase;
var G__25265__$1 = (((G__25265 instanceof cljs.core.Keyword))?G__25265.fqn:null);
switch (G__25265__$1) {
case "read-source":
var map__25266 = data;
var map__25266__$1 = (((((!((map__25266 == null))))?(((((map__25266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25266):map__25266);
var line = cljs.core.get.call(null,map__25266__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25266__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__25268 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__25268__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25268,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25268);
var G__25268__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25268__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25268__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25268__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__25269 = top_data;
var G__25269__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__25269,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__25269);
var G__25269__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__25269__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__25269__$1);
var G__25269__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25269__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25269__$2);
var G__25269__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25269__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25269__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25269__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25269__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__25270 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25270,(0),null);
var method = cljs.core.nth.call(null,vec__25270,(1),null);
var file = cljs.core.nth.call(null,vec__25270,(2),null);
var line = cljs.core.nth.call(null,vec__25270,(3),null);
var G__25273 = top_data;
var G__25273__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__25273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__25273);
var G__25273__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__25273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__25273__$1);
var G__25273__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__25273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__25273__$2);
var G__25273__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__25273__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__25273__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__25273__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__25273__$4;
}

break;
case "execution":
var vec__25274 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__25274,(0),null);
var method = cljs.core.nth.call(null,vec__25274,(1),null);
var file = cljs.core.nth.call(null,vec__25274,(2),null);
var line = cljs.core.nth.call(null,vec__25274,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__25274,source__$1,method,file,line,G__25265,G__25265__$1,map__25257,map__25257__$1,via,trace,phase,map__25258,map__25258__$1,type,message,data,map__25259,map__25259__$1,problems,fn,caller,map__25260,map__25260__$1,top_data,source){
return (function (p1__25256_SHARP_){
var or__4131__auto__ = (p1__25256_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__25256_SHARP_);
}
});})(vec__25274,source__$1,method,file,line,G__25265,G__25265__$1,map__25257,map__25257__$1,via,trace,phase,map__25258,map__25258__$1,type,message,data,map__25259,map__25259__$1,problems,fn,caller,map__25260,map__25260__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__25277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__25277__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__25277,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__25277);
var G__25277__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__25277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__25277__$1);
var G__25277__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__25277__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__25277__$2);
var G__25277__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__25277__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__25277__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__25277__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__25277__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25265__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__25281){
var map__25282 = p__25281;
var map__25282__$1 = (((((!((map__25282 == null))))?(((((map__25282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25282):map__25282);
var triage_data = map__25282__$1;
var phase = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__25282__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__25284 = phase;
var G__25284__$1 = (((G__25284 instanceof cljs.core.Keyword))?G__25284.fqn:null);
switch (G__25284__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25285_25294 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25286_25295 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25287_25296 = true;
var _STAR_print_fn_STAR__temp_val__25288_25297 = ((function (_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25287_25296;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25288_25297;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,_STAR_print_fn_STAR__temp_val__25288_25297,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,_STAR_print_fn_STAR__temp_val__25288_25297,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25279_SHARP_){
return cljs.core.dissoc.call(null,p1__25279_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,_STAR_print_fn_STAR__temp_val__25288_25297,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25285_25294,_STAR_print_fn_STAR__orig_val__25286_25295,_STAR_print_newline_STAR__temp_val__25287_25296,_STAR_print_fn_STAR__temp_val__25288_25297,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25286_25295;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25285_25294;
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
var _STAR_print_newline_STAR__orig_val__25289_25298 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25290_25299 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25291_25300 = true;
var _STAR_print_fn_STAR__temp_val__25292_25301 = ((function (_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25291_25300;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25292_25301;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,_STAR_print_fn_STAR__temp_val__25292_25301,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,_STAR_print_fn_STAR__temp_val__25292_25301,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__25280_SHARP_){
return cljs.core.dissoc.call(null,p1__25280_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,_STAR_print_fn_STAR__temp_val__25292_25301,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__25289_25298,_STAR_print_fn_STAR__orig_val__25290_25299,_STAR_print_newline_STAR__temp_val__25291_25300,_STAR_print_fn_STAR__temp_val__25292_25301,sb__4661__auto__,G__25284,G__25284__$1,loc,class_name,simple_class,cause_type,format,map__25282,map__25282__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25290_25299;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25289_25298;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25284__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
