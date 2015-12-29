// Compiled by ClojureScript 1.7.170 {}
goog.provide('ql_items_timing_practice.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ql_items_timing_practice.views');
goog.require('ql_items_timing_practice.config');
goog.require('ql_items_timing_practice.handlers');
goog.require('ql_items_timing_practice.subs');
goog.require('cljsjs.bootstrap');
goog.require('re_frame.core');
if(cljs.core.truth_(ql_items_timing_practice.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
ql_items_timing_practice.core.mount_root = (function ql_items_timing_practice$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ql_items_timing_practice.views.main_panel], null),document.getElementById("app"));
});
ql_items_timing_practice.core.init = (function ql_items_timing_practice$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return ql_items_timing_practice.core.mount_root.call(null);
});
goog.exportSymbol('ql_items_timing_practice.core.init', ql_items_timing_practice.core.init);

//# sourceMappingURL=core.js.map?rel=1451373049672