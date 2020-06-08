// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.keycodes');
goog.require('cljs.core');
goog.require('clojure.string');
guess_who.keycodes.key_mapper = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"120","120",1958088705),new cljs.core.Keyword(null,"109","109",-1709760255),new cljs.core.Keyword(null,"108","108",1330227491),new cljs.core.Keyword(null,"114","114",-825898140),new cljs.core.Keyword(null,"115","115",1423452487),new cljs.core.Keyword(null,"117","117",320879689),new cljs.core.Keyword(null,"110","110",585795626),new cljs.core.Keyword(null,"118","118",-1050353526),new cljs.core.Keyword(null,"13","13",-1232839158),new cljs.core.Keyword(null,"122","122",827489834),new cljs.core.Keyword(null,"119","119",962069547),new cljs.core.Keyword(null,"98","98",-82660628),new cljs.core.Keyword(null,"106","106",-1519093908),new cljs.core.Keyword(null,"100","100",943295053),new cljs.core.Keyword(null,"105","105",1696001998),new cljs.core.Keyword(null,"113","113",-1330138927),new cljs.core.Keyword(null,"102","102",617083507),new cljs.core.Keyword(null,"32","32",-583115021),new cljs.core.Keyword(null,"112","112",1821690613),new cljs.core.Keyword(null,"103","103",355685591),new cljs.core.Keyword(null,"121","121",-2018636168),new cljs.core.Keyword(null,"107","107",-1859558568),new cljs.core.Keyword(null,"101","101",869919993),new cljs.core.Keyword(null,"111","111",1254158777),new cljs.core.Keyword(null,"99","99",809465114),new cljs.core.Keyword(null,"97","97",510134618),new cljs.core.Keyword(null,"104","104",-294590020),new cljs.core.Keyword(null,"116","116",1433375452)],["x","m","l","r","s","u","n","v","","z","w","b","j","d","i","q","f"," ","p","g","y","k","e","o","c","a","h","t"]);
guess_who.keycodes.get_word = (function guess_who$keycodes$get_word(coll){
var kws = cljs.core.map.call(null,(function (p1__12314_SHARP_){
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12314_SHARP_));
}),coll);
var letters = (function (){var iter__4523__auto__ = ((function (kws){
return (function guess_who$keycodes$get_word_$_iter__12315(s__12316){
return (new cljs.core.LazySeq(null,((function (kws){
return (function (){
var s__12316__$1 = s__12316;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__12316__$1);
if(temp__5457__auto__){
var s__12316__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12316__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12316__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12318 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12317 = (0);
while(true){
if((i__12317 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__12317);
var y = cljs.core.get.call(null,guess_who.keycodes.key_mapper,x);
cljs.core.chunk_append.call(null,b__12318,y);

var G__12319 = (i__12317 + (1));
i__12317 = G__12319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12318),guess_who$keycodes$get_word_$_iter__12315.call(null,cljs.core.chunk_rest.call(null,s__12316__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12318),null);
}
} else {
var x = cljs.core.first.call(null,s__12316__$2);
var y = cljs.core.get.call(null,guess_who.keycodes.key_mapper,x);
return cljs.core.cons.call(null,y,guess_who$keycodes$get_word_$_iter__12315.call(null,cljs.core.rest.call(null,s__12316__$2)));
}
} else {
return null;
}
break;
}
});})(kws))
,null,null));
});})(kws))
;
return iter__4523__auto__.call(null,kws);
})();
return clojure.string.join.call(null,letters);
});

//# sourceMappingURL=keycodes.js.map
