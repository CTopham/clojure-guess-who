// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12812 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12812["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12813 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12813["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12814 = temp__5455__auto____$2;
return (o12814["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12815 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12815["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12816 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12816["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12817 = temp__5455__auto____$2;
return (o12817["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12818 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12818["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12819 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12819["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12820 = temp__5455__auto____$2;
return (o12820["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12821 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12821["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12822 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12822["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12823 = temp__5455__auto____$2;
return (o12823["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12824 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12824["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12825 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12825["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12826 = temp__5455__auto____$2;
return (o12826["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12827 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12827["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12828 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12828["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12829 = temp__5455__auto____$2;
return (o12829["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o12830 = temp__5455__auto__;
var temp__5455__auto____$1 = (o12830["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o12831 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o12831["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o12832 = temp__5455__auto____$2;
return (o12832["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12834 = arguments.length;
var i__4731__auto___12835 = (0);
while(true){
if((i__4731__auto___12835 < len__4730__auto___12834)){
args__4736__auto__.push((arguments[i__4731__auto___12835]));

var G__12836 = (i__4731__auto___12835 + (1));
i__4731__auto___12835 = G__12836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq12833){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12833));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12838 = arguments.length;
var i__4731__auto___12839 = (0);
while(true){
if((i__4731__auto___12839 < len__4730__auto___12838)){
args__4736__auto__.push((arguments[i__4731__auto___12839]));

var G__12840 = (i__4731__auto___12839 + (1));
i__4731__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq12837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12837));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12842 = arguments.length;
var i__4731__auto___12843 = (0);
while(true){
if((i__4731__auto___12843 < len__4730__auto___12842)){
args__4736__auto__.push((arguments[i__4731__auto___12843]));

var G__12844 = (i__4731__auto___12843 + (1));
i__4731__auto___12843 = G__12844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq12841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12841));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12846 = arguments.length;
var i__4731__auto___12847 = (0);
while(true){
if((i__4731__auto___12847 < len__4730__auto___12846)){
args__4736__auto__.push((arguments[i__4731__auto___12847]));

var G__12848 = (i__4731__auto___12847 + (1));
i__4731__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12845){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12845));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12850 = arguments.length;
var i__4731__auto___12851 = (0);
while(true){
if((i__4731__auto___12851 < len__4730__auto___12850)){
args__4736__auto__.push((arguments[i__4731__auto___12851]));

var G__12852 = (i__4731__auto___12851 + (1));
i__4731__auto___12851 = G__12852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq12849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12849));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12854 = arguments.length;
var i__4731__auto___12855 = (0);
while(true){
if((i__4731__auto___12855 < len__4730__auto___12854)){
args__4736__auto__.push((arguments[i__4731__auto___12855]));

var G__12856 = (i__4731__auto___12855 + (1));
i__4731__auto___12855 = G__12856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq12853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12853));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12858 = arguments.length;
var i__4731__auto___12859 = (0);
while(true){
if((i__4731__auto___12859 < len__4730__auto___12858)){
args__4736__auto__.push((arguments[i__4731__auto___12859]));

var G__12860 = (i__4731__auto___12859 + (1));
i__4731__auto___12859 = G__12860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq12857){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12857));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12868 = arguments.length;
var i__4731__auto___12869 = (0);
while(true){
if((i__4731__auto___12869 < len__4730__auto___12868)){
args__4736__auto__.push((arguments[i__4731__auto___12869]));

var G__12870 = (i__4731__auto___12869 + (1));
i__4731__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12864){
var vec__12865 = p__12864;
var state_override = cljs.core.nth.call(null,vec__12865,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12865,state_override){
return (function (p1__12861_SHARP_){
return cljs.core.merge.call(null,p1__12861_SHARP_,state_override);
});})(vec__12865,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq12862){
var G__12863 = cljs.core.first.call(null,seq12862);
var seq12862__$1 = cljs.core.next.call(null,seq12862);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12863,seq12862__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12872 = arguments.length;
var i__4731__auto___12873 = (0);
while(true){
if((i__4731__auto___12873 < len__4730__auto___12872)){
args__4736__auto__.push((arguments[i__4731__auto___12873]));

var G__12874 = (i__4731__auto___12873 + (1));
i__4731__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq12871){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12871));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12877 = arguments.length;
var i__4731__auto___12878 = (0);
while(true){
if((i__4731__auto___12878 < len__4730__auto___12877)){
args__4736__auto__.push((arguments[i__4731__auto___12878]));

var G__12879 = (i__4731__auto___12878 + (1));
i__4731__auto___12878 = G__12879;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12875){
var G__12876 = cljs.core.first.call(null,seq12875);
var seq12875__$1 = cljs.core.next.call(null,seq12875);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12876,seq12875__$1);
});


//# sourceMappingURL=format.js.map
