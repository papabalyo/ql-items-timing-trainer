// Compiled by ClojureScript 1.7.170 {}
goog.provide('ql_items_timing_practice.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ql_items_timing_practice.engine');
goog.require('ql_items_timing_practice.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return ql_items_timing_practice.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__11099){
var vec__11100 = p__11099;
var _ = cljs.core.nth.call(null,vec__11100,(0),null);
var panel = cljs.core.nth.call(null,vec__11100,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),panel);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"init-training","init-training",916061471),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.List.EMPTY], null));
}));
ql_items_timing_practice.handlers.submit_answer = (function ql_items_timing_practice$handlers$submit_answer(db){
var answers = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"answers","answers",-2066449770)], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"submitted","submitted",-131658962)], null),cljs.core.first.call(null,answers)));
});
ql_items_timing_practice.handlers.stop_timer = (function ql_items_timing_practice$handlers$stop_timer(db){
var timer = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null));
if((timer == null)){
return null;
} else {
return clearInterval(timer);
}
});
ql_items_timing_practice.handlers.add_question = (function ql_items_timing_practice$handlers$add_question(db){
ql_items_timing_practice.handlers.stop_timer.call(null,db);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"questions","questions",1226225380)], null))),new cljs.core.Keyword(null,"questions-count","questions-count",1453525375).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Keyword(null,"results","results",-1134170113));
} else {
var question = ql_items_timing_practice.engine.new_random_item.call(null);
var answer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"correct","correct",984806334),ql_items_timing_practice.engine.next_time.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(question),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(question)),new cljs.core.Keyword(null,"input","input",556931961),""], null);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"questions","questions",1226225380)], null),cljs.core.conj,question),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),cljs.core.conj,answer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"ticks-left","ticks-left",-314852588),(4),new cljs.core.Keyword(null,"timer","timer",-1266967739),setInterval(((function (question,answer){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
});})(question,answer))
,(1000))], null));
}
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-new-question","add-new-question",1368449161),(function (db,_){
return ql_items_timing_practice.handlers.add_question.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),(function (db,_){
if(cljs.core.truth_(cljs.core.complement.call(null,cljs.core.pos_QMARK_).call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188),new cljs.core.Keyword(null,"ticks-left","ticks-left",-314852588)], null))))){
ql_items_timing_practice.handlers.stop_timer.call(null,db);

return ql_items_timing_practice.handlers.submit_answer.call(null,db);
} else {
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"current-question","current-question",-749753188),new cljs.core.Keyword(null,"ticks-left","ticks-left",-314852588)], null),cljs.core.dec);
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"on-current-answer-change","on-current-answer-change",-1268638886),(function (db,p__11101){
var vec__11102 = p__11101;
var _ = cljs.core.nth.call(null,vec__11102,(0),null);
var new_value = cljs.core.nth.call(null,vec__11102,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-training","current-training",2048615553),new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),((function (vec__11102,_,new_value){
return (function (answers){
return cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,answers),new cljs.core.Keyword(null,"input","input",556931961),(new_value | (0))),cljs.core.rest.call(null,answers));
});})(vec__11102,_,new_value))
);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"submit-answer","submit-answer",-723832653),(function (db,_){
ql_items_timing_practice.handlers.stop_timer.call(null,db);

return ql_items_timing_practice.handlers.submit_answer.call(null,db);
}));

//# sourceMappingURL=handlers.js.map?rel=1451373049663