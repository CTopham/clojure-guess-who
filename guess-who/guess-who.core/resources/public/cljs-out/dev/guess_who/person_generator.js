// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.person_generator');
goog.require('cljs.core');
guess_who.person_generator.people = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alex","alex",-161094486),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"alex",new cljs.core.Keyword(null,"mustache","mustache",1902274894),true,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"black",new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"long",new cljs.core.Keyword(null,"gender","gender",-733930727),"male"], null),new cljs.core.Keyword(null,"alfred","alfred",123680219),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"alfred",new cljs.core.Keyword(null,"mustache","mustache",1902274894),true,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"black",new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"long",new cljs.core.Keyword(null,"gender","gender",-733930727),"male"], null)], null);
guess_who.person_generator.generate_target = (function guess_who$person_generator$generate_target(){
var target = cljs.core.rand_nth.call(null,cljs.core.map.call(null,cljs.core.conj,cljs.core.keys.call(null,guess_who.person_generator.people)));
var target_info = cljs.core.get.call(null,guess_who.person_generator.people,target);
return target_info;
});

//# sourceMappingURL=person_generator.js.map
