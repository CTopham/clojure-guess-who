// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.framework');
goog.require('cljs.core');
goog.require('guess_who.person_generator');
goog.require('clojure.string');
guess_who.framework.decoder = (function guess_who$framework$decoder(s){
var alex = clojure.string.includes_QMARK_.call(null,s,"alex");
var alfred = clojure.string.includes_QMARK_.call(null,s,"alfred");
var hair = clojure.string.includes_QMARK_.call(null,s,"hair");
var eyes = clojure.string.includes_QMARK_.call(null,s,"eyes");
var mustache = clojure.string.includes_QMARK_.call(null,s,"mustache");
if(cljs.core._EQ_.call(null,alex,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"alex",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,alfred,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"alfred",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,hair,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"hair",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,eyes,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"eyes",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,mustache,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"mustache",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"unknown",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);

}
}
}
}
}
});
if((typeof guess_who !== 'undefined') && (typeof guess_who.framework !== 'undefined') && (typeof guess_who.framework.interpret !== 'undefined')){
} else {
guess_who.framework.interpret = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"guess-who.framework","interpret"),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,guess_who.framework.interpret,"hair",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"brown")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"brown");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"red")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"red");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"blonde")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"blonde");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"black")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"black");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"bald")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"bald");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"short")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"short");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"long")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"long");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"curly")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"curly");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"straight")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"straight");
} else {
return null;
}
}
}
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"alex",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"alex")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"alex");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"alfred",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"alfred")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"alfred");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"unknown",(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"unknown","unknown",-935977881),"Unknown command");
}));
guess_who.framework.Dynamic_Answers = (function guess_who$framework$Dynamic_Answers(m,targ){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)))){
return (function (p1__25906_SHARP_){
return ["Yes! You guessed it! the person is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25906_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640))){
if((function (p1__25907_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)),p1__25907_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)))){
return (function (p1__25908_SHARP_){
return ["Yes! the persons hair is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25908_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)));
} else {
return (function (p1__25909_SHARP_){
return ["No, the persons hair is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25909_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675))){
if((function (p1__25910_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675)),p1__25910_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)))){
return (function (p1__25911_SHARP_){
return ["Yes! the persons is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25911_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
return (function (p1__25912_SHARP_){
return ["No, the persons is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25912_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"unknown","unknown",-935977881))){
return "Unknown command";
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=framework.js.map
