// Compiled by ClojureScript 1.7.170 {}
goog.provide('ql_items_timing_practice.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
ql_items_timing_practice.views.start_training_handler = (function ql_items_timing_practice$views$start_training_handler(e){
e.preventDefault();

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-training","init-training",916061471)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-new-question","add-new-question",1368449161)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"trainer","trainer",263237898)], null));
});
ql_items_timing_practice.views.img_path = (function ql_items_timing_practice$views$img_path(item_key){
return [cljs.core.str("img/icons/"),cljs.core.str(cljs.core.name.call(null,item_key)),cljs.core.str(".png")].join('');
});
ql_items_timing_practice.views.welcome_panel = (function ql_items_timing_practice$views$welcome_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lead","p.lead",-1826375077),"You'll be given 20 questions, each question will consist of Quake Live item (like Read Armor or Mega Health)\n      and a pick-up time for this item, in seconds. Your goal is to type next spawn time for this item within 5 seconds for each question.\n      At the end you'll see a summary of correct/incorrect answers.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-lg.btn-primary","a.btn.btn-lg.btn-primary",-1182993633),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),ql_items_timing_practice.views.start_training_handler], null),"Start practice"], null)], null)], null)], null);
});
});
ql_items_timing_practice.views.answer_input = (function ql_items_timing_practice$views$answer_input(){
var current_answer = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-answer","current-answer",-497620887)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-function","component-function",654728922),((function (current_answer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.answer","input.answer",-2072630279),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_answer)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (current_answer){
return (function (p1__11053_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-current-answer-change","on-current-answer-change",-1268638886),p1__11053_SHARP_.target.value], null));
});})(current_answer))
], null)], null);
});})(current_answer))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (current_answer){
return (function (p1__11054_SHARP_){
return reagent.core.dom_node.call(null,p1__11054_SHARP_).focus();
});})(current_answer))
], null));
});
ql_items_timing_practice.views.trainer_panel = (function ql_items_timing_practice$views$trainer_panel(){
var current_question = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question","current-question",-749753188)], null));
var current_question_state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-question-state","current-question-state",-35148772)], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-function","component-function",654728922),((function (current_question,current_question_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (current_question,current_question_state){
return (function (p1__11055_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__11055_SHARP_.keyCode)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submitted","submitted",-131658962),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state)))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-new-question","add-new-question",1368449161)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit-answer","submit-answer",-723832653)], null));
}
} else {
return null;
}
});})(current_question,current_question_state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-10.col-xs-offset-1","div.col-xs-10.col-xs-offset-1",1095956159),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.thumbnail","img.thumbnail",-1823379761),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),ql_items_timing_practice.views.img_path.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question))),new cljs.core.Keyword(null,"width","width",-384071477),"128px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-8","div.col-xs-8",179269619),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12","div.col-xs-12",1498064650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics.text-center","div.statistics.text-center",810004795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value.given-value","div.value.given-value",-1401878697),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.label","div.label",1974310659),"Pick Up"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6","div.col-xs-6",1179108318),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics.text-center","div.statistics.text-center",810004795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ql_items_timing_practice.views.answer_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.label","div.label",1974310659),"Next Spawn"], null)], null)], null)], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submitted","submitted",-131658962),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state)),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-success","div.alert.alert-success",1190067590),"Correct!"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),"Wrong! Correct spawn time is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.statistics","span.statistics",1583538739),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.value","span.value",1986660361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#a94442"], null)], null),new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state))], null)], null)], null))], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-6.col-xs-offset-3","div.col-xs-6.col-xs-offset-3",1251215528),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submitted","submitted",-131658962),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962),"Press Enter to continue..."], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-muted","h2.text-muted",-1058624392),"Answer in ",(new cljs.core.Keyword(null,"ticks-left","ticks-left",-314852588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question_state)) + (1))," seconds..."], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.text-muted","small.text-muted",1906258664),"Question ",new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question))," out of ",new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,current_question))], null)], null)], null)], null)], null);
});})(current_question,current_question_state))
], null));
});
ql_items_timing_practice.views.results_panel = (function ql_items_timing_practice$views$results_panel(){
var results = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null));
return ((function (results){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Question #"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Item"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Pick Up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Spawn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Your answer"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__5440__auto__ = ((function (results){
return (function ql_items_timing_practice$views$results_panel_$_iter__11064(s__11065){
return (new cljs.core.LazySeq(null,((function (results){
return (function (){
var s__11065__$1 = s__11065;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11065__$1);
if(temp__4425__auto__){
var s__11065__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11065__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__11065__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__11067 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__11066 = (0);
while(true){
if((i__11066 < size__5439__auto__)){
var vec__11070 = cljs.core._nth.call(null,c__5438__auto__,i__11066);
var i = cljs.core.nth.call(null,vec__11070,(0),null);
var result = cljs.core.nth.call(null,vec__11070,(1),null);
cljs.core.chunk_append.call(null,b__11067,(function (){var correct_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(result));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((correct_QMARK_)?"success":"danger")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),ql_items_timing_practice.views.img_path.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(result))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value.correct","div.value.correct",-1956566681),new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((correct_QMARK_)?"correct":"wrong")], null),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})());

var G__11072 = (i__11066 + (1));
i__11066 = G__11072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11067),ql_items_timing_practice$views$results_panel_$_iter__11064.call(null,cljs.core.chunk_rest.call(null,s__11065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11067),null);
}
} else {
var vec__11071 = cljs.core.first.call(null,s__11065__$2);
var i = cljs.core.nth.call(null,vec__11071,(0),null);
var result = cljs.core.nth.call(null,vec__11071,(1),null);
return cljs.core.cons.call(null,(function (){var correct_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(result));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((correct_QMARK_)?"success":"danger")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-center","td.text-center",-860992628),(i + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),ql_items_timing_practice.views.img_path.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(result))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value.correct","div.value.correct",-1956566681),new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.statistics","div.statistics",-1882852750),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.value","div.value",841295219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((correct_QMARK_)?"correct":"wrong")], null),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(result)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
})(),ql_items_timing_practice$views$results_panel_$_iter__11064.call(null,cljs.core.rest.call(null,s__11065__$2)));
}
} else {
return null;
}
break;
}
});})(results))
,null,null));
});})(results))
;
return iter__5440__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,results)));
})())], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-lg.btn-primary","a.btn.btn-lg.btn-primary",-1182993633),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),ql_items_timing_practice.views.start_training_handler], null),"Start over"], null)], null);
});
;})(results))
});
ql_items_timing_practice.views.page_not_found = (function ql_items_timing_practice$views$page_not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(404)], null);
});
if(typeof ql_items_timing_practice.views.panels !== 'undefined'){
} else {
ql_items_timing_practice.views.panels = (function (){var method_table__5581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ql-items-timing-practice.views","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.core._add_method.call(null,ql_items_timing_practice.views.panels,new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ql_items_timing_practice.views.welcome_panel], null);
}));
cljs.core._add_method.call(null,ql_items_timing_practice.views.panels,new cljs.core.Keyword(null,"trainer","trainer",263237898),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ql_items_timing_practice.views.trainer_panel], null);
}));
cljs.core._add_method.call(null,ql_items_timing_practice.views.panels,new cljs.core.Keyword(null,"results","results",-1134170113),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ql_items_timing_practice.views.results_panel], null);
}));
cljs.core._add_method.call(null,ql_items_timing_practice.views.panels,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
ql_items_timing_practice.views.main_panel = (function ql_items_timing_practice$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null));
return ((function (active_panel){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header.clearfix","div.header.clearfix",218379633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#1B1C1D"], null)], null),"Quake Live Items Timing Trainer"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),ql_items_timing_practice.views.panels.call(null,cljs.core.deref.call(null,active_panel))], null);
});
;})(active_panel))
});

//# sourceMappingURL=views.js.map?rel=1451372824529