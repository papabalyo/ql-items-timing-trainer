// Compiled by ClojureScript 1.7.170 {}
goog.provide('ql_items_timing_practice.engine');
goog.require('cljs.core');
ql_items_timing_practice.engine.pick_up_intervals = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"armor","armor",-829575337),(25),new cljs.core.Keyword(null,"health","health",-295520649),(35)], null);
ql_items_timing_practice.engine.armors = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ra","ra",-382035026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Red Armor"], null),new cljs.core.Keyword(null,"ya","ya",1172180389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Yellow Armor"], null),new cljs.core.Keyword(null,"ga","ga",-1797526459),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Green Armor"], null)], null);
ql_items_timing_practice.engine.health_bubbles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mh","mh",-2001490911),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Mega Health"], null),new cljs.core.Keyword(null,"rh","rh",1692287680),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"50 health Bubble"], null)], null);
ql_items_timing_practice.engine.map_items = (function ql_items_timing_practice$engine$map_items(item_keys,type){
if((type instanceof cljs.core.Keyword)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,item_keys)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"item-keys","item-keys",1023598268,null))))].join('')));
}

if(cljs.core.distinct_QMARK_.call(null,item_keys)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Symbol(null,"item-keys","item-keys",1023598268,null))))].join('')));
}

var _PERCENT_ = cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.interleave.call(null,item_keys,cljs.core.iterate.call(null,cljs.core.identity,type)));
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,_PERCENT_)),cljs.core.set.call(null,item_keys))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"item-keys","item-keys",1023598268,null)))))].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,type),cljs.core.vals.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_keys),cljs.core.count.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"item-keys","item-keys",1023598268,null)),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});
ql_items_timing_practice.engine.items_map = cljs.core.merge.call(null,ql_items_timing_practice.engine.map_items.call(null,cljs.core.keys.call(null,ql_items_timing_practice.engine.armors),new cljs.core.Keyword(null,"armor","armor",-829575337)),ql_items_timing_practice.engine.map_items.call(null,cljs.core.keys.call(null,ql_items_timing_practice.engine.health_bubbles),new cljs.core.Keyword(null,"health","health",-295520649)));
ql_items_timing_practice.engine.valid_sec_value_QMARK_ = (function ql_items_timing_practice$engine$valid_sec_value_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && (((0) <= n)) && ((n <= (59)));
});
ql_items_timing_practice.engine.next_time_pure = (function ql_items_timing_practice$engine$next_time_pure(items_map,pick_up_intervals,item_key,pick_up_time){
if(cljs.core.contains_QMARK_.call(null,items_map,item_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"items-map","items-map",1781869699,null),new cljs.core.Symbol(null,"item-key","item-key",-410357551,null))))].join('')));
}

if(cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,items_map)),cljs.core.set.call(null,cljs.core.keys.call(null,pick_up_intervals)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"items-map","items-map",1781869699,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pick-up-intervals","pick-up-intervals",-1473403403,null))))))].join('')));
}

if(cljs.core.truth_(ql_items_timing_practice.engine.valid_sec_value_QMARK_.call(null,pick_up_time))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-sec-value?","valid-sec-value?",591522860,null),new cljs.core.Symbol(null,"pick-up-time","pick-up-time",-371377556,null))))].join('')));
}

var _PERCENT_ = cljs.core.mod.call(null,(pick_up_time + pick_up_intervals.call(null,items_map.call(null,item_key))),(60));
if(cljs.core.truth_(ql_items_timing_practice.engine.valid_sec_value_QMARK_.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-sec-value?","valid-sec-value?",591522860,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});
ql_items_timing_practice.engine.next_time = cljs.core.partial.call(null,ql_items_timing_practice.engine.next_time_pure,ql_items_timing_practice.engine.items_map,ql_items_timing_practice.engine.pick_up_intervals);
ql_items_timing_practice.engine.random_item_pickup = (function ql_items_timing_practice$engine$random_item_pickup(items_map){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,items_map)),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.rand_int.call(null,(60))], null);
});
ql_items_timing_practice.engine.new_random_item = cljs.core.partial.call(null,ql_items_timing_practice.engine.random_item_pickup,ql_items_timing_practice.engine.items_map);

//# sourceMappingURL=engine.js.map?rel=1451373049639