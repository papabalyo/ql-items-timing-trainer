// Compiled by ClojureScript 1.7.170 {}
goog.provide('ql_items_timing_practice.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"questions-count","questions-count",1453525375),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"questions-count","questions-count",1453525375).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-training","current-training",2048615553),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-training","current-training",2048615553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
var map__10975 = new cljs.core.Keyword(null,"current-training","current-training",2048615553).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
var map__10975__$1 = ((((!((map__10975 == null)))?((((map__10975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10975):map__10975);
var questions = cljs.core.get.call(null,map__10975__$1,new cljs.core.Keyword(null,"questions","questions",1226225380));
var answers = cljs.core.get.call(null,map__10975__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
return cljs.core.map.call(null,((function (map__10975,map__10975__$1,questions,answers){
return (function (p1__10974_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__10974_SHARP_);
});})(map__10975,map__10975__$1,questions,answers))
,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.reverse.call(null,questions),cljs.core.reverse.call(null,answers))));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-question","current-question",-749753188),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.merge.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"questions","questions",1226225380)], null))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),cljs.core.count.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"questions","questions",1226225380)], null))),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"questions-count","questions-count",1453525375).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))], null));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-answer","current-answer",-497620887),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"answers","answers",-2066449770)], null)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-question-state","current-question-state",-35148772),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1451372137086