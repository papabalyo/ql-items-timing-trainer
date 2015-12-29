// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args7211 = [];
var len__5726__auto___7217 = arguments.length;
var i__5727__auto___7218 = (0);
while(true){
if((i__5727__auto___7218 < len__5726__auto___7217)){
args7211.push((arguments[i__5727__auto___7218]));

var G__7219 = (i__5727__auto___7218 + (1));
i__5727__auto___7218 = G__7219;
continue;
} else {
}
break;
}

var G__7213 = args7211.length;
switch (G__7213) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7211.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async7214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7214 = (function (f,blockable,meta7215){
this.f = f;
this.blockable = blockable;
this.meta7215 = meta7215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7216,meta7215__$1){
var self__ = this;
var _7216__$1 = this;
return (new cljs.core.async.t_cljs$core$async7214(self__.f,self__.blockable,meta7215__$1));
});

cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7216){
var self__ = this;
var _7216__$1 = this;
return self__.meta7215;
});

cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async7214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta7215","meta7215",511845010,null)], null);
});

cljs.core.async.t_cljs$core$async7214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7214";

cljs.core.async.t_cljs$core$async7214.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7214");
});

cljs.core.async.__GT_t_cljs$core$async7214 = (function cljs$core$async$__GT_t_cljs$core$async7214(f__$1,blockable__$1,meta7215){
return (new cljs.core.async.t_cljs$core$async7214(f__$1,blockable__$1,meta7215));
});

}

return (new cljs.core.async.t_cljs$core$async7214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7223 = [];
var len__5726__auto___7226 = arguments.length;
var i__5727__auto___7227 = (0);
while(true){
if((i__5727__auto___7227 < len__5726__auto___7226)){
args7223.push((arguments[i__5727__auto___7227]));

var G__7228 = (i__5727__auto___7227 + (1));
i__5727__auto___7227 = G__7228;
continue;
} else {
}
break;
}

var G__7225 = args7223.length;
switch (G__7225) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7223.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args7230 = [];
var len__5726__auto___7233 = arguments.length;
var i__5727__auto___7234 = (0);
while(true){
if((i__5727__auto___7234 < len__5726__auto___7233)){
args7230.push((arguments[i__5727__auto___7234]));

var G__7235 = (i__5727__auto___7234 + (1));
i__5727__auto___7234 = G__7235;
continue;
} else {
}
break;
}

var G__7232 = args7230.length;
switch (G__7232) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7230.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7237 = [];
var len__5726__auto___7240 = arguments.length;
var i__5727__auto___7241 = (0);
while(true){
if((i__5727__auto___7241 < len__5726__auto___7240)){
args7237.push((arguments[i__5727__auto___7241]));

var G__7242 = (i__5727__auto___7241 + (1));
i__5727__auto___7241 = G__7242;
continue;
} else {
}
break;
}

var G__7239 = args7237.length;
switch (G__7239) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7237.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7244 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7244);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7244,ret){
return (function (){
return fn1.call(null,val_7244);
});})(val_7244,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7245 = [];
var len__5726__auto___7248 = arguments.length;
var i__5727__auto___7249 = (0);
while(true){
if((i__5727__auto___7249 < len__5726__auto___7248)){
args7245.push((arguments[i__5727__auto___7249]));

var G__7250 = (i__5727__auto___7249 + (1));
i__5727__auto___7249 = G__7250;
continue;
} else {
}
break;
}

var G__7247 = args7245.length;
switch (G__7247) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7245.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___7252 = n;
var x_7253 = (0);
while(true){
if((x_7253 < n__5571__auto___7252)){
(a[x_7253] = (0));

var G__7254 = (x_7253 + (1));
x_7253 = G__7254;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7255 = (i + (1));
i = G__7255;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7259 = (function (alt_flag,flag,meta7260){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7260 = meta7260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7261,meta7260__$1){
var self__ = this;
var _7261__$1 = this;
return (new cljs.core.async.t_cljs$core$async7259(self__.alt_flag,self__.flag,meta7260__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7261){
var self__ = this;
var _7261__$1 = this;
return self__.meta7260;
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7260","meta7260",-657539619,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7259";

cljs.core.async.t_cljs$core$async7259.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7259");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7259 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7259(alt_flag__$1,flag__$1,meta7260){
return (new cljs.core.async.t_cljs$core$async7259(alt_flag__$1,flag__$1,meta7260));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7259(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7265 = (function (alt_handler,flag,cb,meta7266){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7266 = meta7266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7267,meta7266__$1){
var self__ = this;
var _7267__$1 = this;
return (new cljs.core.async.t_cljs$core$async7265(self__.alt_handler,self__.flag,self__.cb,meta7266__$1));
});

cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7267){
var self__ = this;
var _7267__$1 = this;
return self__.meta7266;
});

cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7265.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7265.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7266","meta7266",85323818,null)], null);
});

cljs.core.async.t_cljs$core$async7265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7265";

cljs.core.async.t_cljs$core$async7265.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7265");
});

cljs.core.async.__GT_t_cljs$core$async7265 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7265(alt_handler__$1,flag__$1,cb__$1,meta7266){
return (new cljs.core.async.t_cljs$core$async7265(alt_handler__$1,flag__$1,cb__$1,meta7266));
});

}

return (new cljs.core.async.t_cljs$core$async7265(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7268_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7269_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7270 = (i + (1));
i = G__7270;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___7276 = arguments.length;
var i__5727__auto___7277 = (0);
while(true){
if((i__5727__auto___7277 < len__5726__auto___7276)){
args__5733__auto__.push((arguments[i__5727__auto___7277]));

var G__7278 = (i__5727__auto___7277 + (1));
i__5727__auto___7277 = G__7278;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7273){
var map__7274 = p__7273;
var map__7274__$1 = ((((!((map__7274 == null)))?((((map__7274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7274):map__7274);
var opts = map__7274__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7271){
var G__7272 = cljs.core.first.call(null,seq7271);
var seq7271__$1 = cljs.core.next.call(null,seq7271);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7272,seq7271__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7279 = [];
var len__5726__auto___7329 = arguments.length;
var i__5727__auto___7330 = (0);
while(true){
if((i__5727__auto___7330 < len__5726__auto___7329)){
args7279.push((arguments[i__5727__auto___7330]));

var G__7331 = (i__5727__auto___7330 + (1));
i__5727__auto___7330 = G__7331;
continue;
} else {
}
break;
}

var G__7281 = args7279.length;
switch (G__7281) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7279.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7166__auto___7333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___7333){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___7333){
return (function (state_7305){
var state_val_7306 = (state_7305[(1)]);
if((state_val_7306 === (7))){
var inst_7301 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
var statearr_7307_7334 = state_7305__$1;
(statearr_7307_7334[(2)] = inst_7301);

(statearr_7307_7334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (1))){
var state_7305__$1 = state_7305;
var statearr_7308_7335 = state_7305__$1;
(statearr_7308_7335[(2)] = null);

(statearr_7308_7335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (4))){
var inst_7284 = (state_7305[(7)]);
var inst_7284__$1 = (state_7305[(2)]);
var inst_7285 = (inst_7284__$1 == null);
var state_7305__$1 = (function (){var statearr_7309 = state_7305;
(statearr_7309[(7)] = inst_7284__$1);

return statearr_7309;
})();
if(cljs.core.truth_(inst_7285)){
var statearr_7310_7336 = state_7305__$1;
(statearr_7310_7336[(1)] = (5));

} else {
var statearr_7311_7337 = state_7305__$1;
(statearr_7311_7337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (13))){
var state_7305__$1 = state_7305;
var statearr_7312_7338 = state_7305__$1;
(statearr_7312_7338[(2)] = null);

(statearr_7312_7338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (6))){
var inst_7284 = (state_7305[(7)]);
var state_7305__$1 = state_7305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7305__$1,(11),to,inst_7284);
} else {
if((state_val_7306 === (3))){
var inst_7303 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7305__$1,inst_7303);
} else {
if((state_val_7306 === (12))){
var state_7305__$1 = state_7305;
var statearr_7313_7339 = state_7305__$1;
(statearr_7313_7339[(2)] = null);

(statearr_7313_7339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (2))){
var state_7305__$1 = state_7305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7305__$1,(4),from);
} else {
if((state_val_7306 === (11))){
var inst_7294 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
if(cljs.core.truth_(inst_7294)){
var statearr_7314_7340 = state_7305__$1;
(statearr_7314_7340[(1)] = (12));

} else {
var statearr_7315_7341 = state_7305__$1;
(statearr_7315_7341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (9))){
var state_7305__$1 = state_7305;
var statearr_7316_7342 = state_7305__$1;
(statearr_7316_7342[(2)] = null);

(statearr_7316_7342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (5))){
var state_7305__$1 = state_7305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7317_7343 = state_7305__$1;
(statearr_7317_7343[(1)] = (8));

} else {
var statearr_7318_7344 = state_7305__$1;
(statearr_7318_7344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (14))){
var inst_7299 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
var statearr_7319_7345 = state_7305__$1;
(statearr_7319_7345[(2)] = inst_7299);

(statearr_7319_7345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (10))){
var inst_7291 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
var statearr_7320_7346 = state_7305__$1;
(statearr_7320_7346[(2)] = inst_7291);

(statearr_7320_7346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7306 === (8))){
var inst_7288 = cljs.core.async.close_BANG_.call(null,to);
var state_7305__$1 = state_7305;
var statearr_7321_7347 = state_7305__$1;
(statearr_7321_7347[(2)] = inst_7288);

(statearr_7321_7347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__7166__auto___7333))
;
return ((function (switch__7054__auto__,c__7166__auto___7333){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_7325 = [null,null,null,null,null,null,null,null];
(statearr_7325[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_7325[(1)] = (1));

return statearr_7325;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_7305){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7326){if((e7326 instanceof Object)){
var ex__7058__auto__ = e7326;
var statearr_7327_7348 = state_7305;
(statearr_7327_7348[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7349 = state_7305;
state_7305 = G__7349;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_7305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_7305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___7333))
})();
var state__7168__auto__ = (function (){var statearr_7328 = f__7167__auto__.call(null);
(statearr_7328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7333);

return statearr_7328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___7333))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7533){
var vec__7534 = p__7533;
var v = cljs.core.nth.call(null,vec__7534,(0),null);
var p = cljs.core.nth.call(null,vec__7534,(1),null);
var job = vec__7534;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7166__auto___7716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results){
return (function (state_7539){
var state_val_7540 = (state_7539[(1)]);
if((state_val_7540 === (1))){
var state_7539__$1 = state_7539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7539__$1,(2),res,v);
} else {
if((state_val_7540 === (2))){
var inst_7536 = (state_7539[(2)]);
var inst_7537 = cljs.core.async.close_BANG_.call(null,res);
var state_7539__$1 = (function (){var statearr_7541 = state_7539;
(statearr_7541[(7)] = inst_7536);

return statearr_7541;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7539__$1,inst_7537);
} else {
return null;
}
}
});})(c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results))
;
return ((function (switch__7054__auto__,c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_7545 = [null,null,null,null,null,null,null,null];
(statearr_7545[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__);

(statearr_7545[(1)] = (1));

return statearr_7545;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1 = (function (state_7539){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7546){if((e7546 instanceof Object)){
var ex__7058__auto__ = e7546;
var statearr_7547_7717 = state_7539;
(statearr_7547_7717[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7718 = state_7539;
state_7539 = G__7718;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = function(state_7539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1.call(this,state_7539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results))
})();
var state__7168__auto__ = (function (){var statearr_7548 = f__7167__auto__.call(null);
(statearr_7548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7716);

return statearr_7548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___7716,res,vec__7534,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7549){
var vec__7550 = p__7549;
var v = cljs.core.nth.call(null,vec__7550,(0),null);
var p = cljs.core.nth.call(null,vec__7550,(1),null);
var job = vec__7550;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___7719 = n;
var __7720 = (0);
while(true){
if((__7720 < n__5571__auto___7719)){
var G__7551_7721 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7551_7721) {
case "compute":
var c__7166__auto___7723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7720,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (__7720,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function (state_7564){
var state_val_7565 = (state_7564[(1)]);
if((state_val_7565 === (1))){
var state_7564__$1 = state_7564;
var statearr_7566_7724 = state_7564__$1;
(statearr_7566_7724[(2)] = null);

(statearr_7566_7724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7565 === (2))){
var state_7564__$1 = state_7564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7564__$1,(4),jobs);
} else {
if((state_val_7565 === (3))){
var inst_7562 = (state_7564[(2)]);
var state_7564__$1 = state_7564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7564__$1,inst_7562);
} else {
if((state_val_7565 === (4))){
var inst_7554 = (state_7564[(2)]);
var inst_7555 = process.call(null,inst_7554);
var state_7564__$1 = state_7564;
if(cljs.core.truth_(inst_7555)){
var statearr_7567_7725 = state_7564__$1;
(statearr_7567_7725[(1)] = (5));

} else {
var statearr_7568_7726 = state_7564__$1;
(statearr_7568_7726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7565 === (5))){
var state_7564__$1 = state_7564;
var statearr_7569_7727 = state_7564__$1;
(statearr_7569_7727[(2)] = null);

(statearr_7569_7727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7565 === (6))){
var state_7564__$1 = state_7564;
var statearr_7570_7728 = state_7564__$1;
(statearr_7570_7728[(2)] = null);

(statearr_7570_7728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7565 === (7))){
var inst_7560 = (state_7564[(2)]);
var state_7564__$1 = state_7564;
var statearr_7571_7729 = state_7564__$1;
(statearr_7571_7729[(2)] = inst_7560);

(statearr_7571_7729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7720,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
;
return ((function (__7720,switch__7054__auto__,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_7575 = [null,null,null,null,null,null,null];
(statearr_7575[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__);

(statearr_7575[(1)] = (1));

return statearr_7575;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1 = (function (state_7564){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7576){if((e7576 instanceof Object)){
var ex__7058__auto__ = e7576;
var statearr_7577_7730 = state_7564;
(statearr_7577_7730[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7731 = state_7564;
state_7564 = G__7731;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = function(state_7564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1.call(this,state_7564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__;
})()
;})(__7720,switch__7054__auto__,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
})();
var state__7168__auto__ = (function (){var statearr_7578 = f__7167__auto__.call(null);
(statearr_7578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7723);

return statearr_7578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(__7720,c__7166__auto___7723,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
);


break;
case "async":
var c__7166__auto___7732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7720,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (__7720,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function (state_7591){
var state_val_7592 = (state_7591[(1)]);
if((state_val_7592 === (1))){
var state_7591__$1 = state_7591;
var statearr_7593_7733 = state_7591__$1;
(statearr_7593_7733[(2)] = null);

(statearr_7593_7733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (2))){
var state_7591__$1 = state_7591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7591__$1,(4),jobs);
} else {
if((state_val_7592 === (3))){
var inst_7589 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7591__$1,inst_7589);
} else {
if((state_val_7592 === (4))){
var inst_7581 = (state_7591[(2)]);
var inst_7582 = async.call(null,inst_7581);
var state_7591__$1 = state_7591;
if(cljs.core.truth_(inst_7582)){
var statearr_7594_7734 = state_7591__$1;
(statearr_7594_7734[(1)] = (5));

} else {
var statearr_7595_7735 = state_7591__$1;
(statearr_7595_7735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (5))){
var state_7591__$1 = state_7591;
var statearr_7596_7736 = state_7591__$1;
(statearr_7596_7736[(2)] = null);

(statearr_7596_7736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (6))){
var state_7591__$1 = state_7591;
var statearr_7597_7737 = state_7591__$1;
(statearr_7597_7737[(2)] = null);

(statearr_7597_7737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7592 === (7))){
var inst_7587 = (state_7591[(2)]);
var state_7591__$1 = state_7591;
var statearr_7598_7738 = state_7591__$1;
(statearr_7598_7738[(2)] = inst_7587);

(statearr_7598_7738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7720,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
;
return ((function (__7720,switch__7054__auto__,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_7602 = [null,null,null,null,null,null,null];
(statearr_7602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__);

(statearr_7602[(1)] = (1));

return statearr_7602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1 = (function (state_7591){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7603){if((e7603 instanceof Object)){
var ex__7058__auto__ = e7603;
var statearr_7604_7739 = state_7591;
(statearr_7604_7739[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7740 = state_7591;
state_7591 = G__7740;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = function(state_7591){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1.call(this,state_7591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__;
})()
;})(__7720,switch__7054__auto__,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
})();
var state__7168__auto__ = (function (){var statearr_7605 = f__7167__auto__.call(null);
(statearr_7605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7732);

return statearr_7605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(__7720,c__7166__auto___7732,G__7551_7721,n__5571__auto___7719,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7741 = (__7720 + (1));
__7720 = G__7741;
continue;
} else {
}
break;
}

var c__7166__auto___7742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___7742,jobs,results,process,async){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___7742,jobs,results,process,async){
return (function (state_7627){
var state_val_7628 = (state_7627[(1)]);
if((state_val_7628 === (1))){
var state_7627__$1 = state_7627;
var statearr_7629_7743 = state_7627__$1;
(statearr_7629_7743[(2)] = null);

(statearr_7629_7743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7628 === (2))){
var state_7627__$1 = state_7627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7627__$1,(4),from);
} else {
if((state_val_7628 === (3))){
var inst_7625 = (state_7627[(2)]);
var state_7627__$1 = state_7627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7627__$1,inst_7625);
} else {
if((state_val_7628 === (4))){
var inst_7608 = (state_7627[(7)]);
var inst_7608__$1 = (state_7627[(2)]);
var inst_7609 = (inst_7608__$1 == null);
var state_7627__$1 = (function (){var statearr_7630 = state_7627;
(statearr_7630[(7)] = inst_7608__$1);

return statearr_7630;
})();
if(cljs.core.truth_(inst_7609)){
var statearr_7631_7744 = state_7627__$1;
(statearr_7631_7744[(1)] = (5));

} else {
var statearr_7632_7745 = state_7627__$1;
(statearr_7632_7745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7628 === (5))){
var inst_7611 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7627__$1 = state_7627;
var statearr_7633_7746 = state_7627__$1;
(statearr_7633_7746[(2)] = inst_7611);

(statearr_7633_7746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7628 === (6))){
var inst_7608 = (state_7627[(7)]);
var inst_7613 = (state_7627[(8)]);
var inst_7613__$1 = cljs.core.async.chan.call(null,(1));
var inst_7614 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7615 = [inst_7608,inst_7613__$1];
var inst_7616 = (new cljs.core.PersistentVector(null,2,(5),inst_7614,inst_7615,null));
var state_7627__$1 = (function (){var statearr_7634 = state_7627;
(statearr_7634[(8)] = inst_7613__$1);

return statearr_7634;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7627__$1,(8),jobs,inst_7616);
} else {
if((state_val_7628 === (7))){
var inst_7623 = (state_7627[(2)]);
var state_7627__$1 = state_7627;
var statearr_7635_7747 = state_7627__$1;
(statearr_7635_7747[(2)] = inst_7623);

(statearr_7635_7747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7628 === (8))){
var inst_7613 = (state_7627[(8)]);
var inst_7618 = (state_7627[(2)]);
var state_7627__$1 = (function (){var statearr_7636 = state_7627;
(statearr_7636[(9)] = inst_7618);

return statearr_7636;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7627__$1,(9),results,inst_7613);
} else {
if((state_val_7628 === (9))){
var inst_7620 = (state_7627[(2)]);
var state_7627__$1 = (function (){var statearr_7637 = state_7627;
(statearr_7637[(10)] = inst_7620);

return statearr_7637;
})();
var statearr_7638_7748 = state_7627__$1;
(statearr_7638_7748[(2)] = null);

(statearr_7638_7748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__7166__auto___7742,jobs,results,process,async))
;
return ((function (switch__7054__auto__,c__7166__auto___7742,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_7642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__);

(statearr_7642[(1)] = (1));

return statearr_7642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1 = (function (state_7627){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7643){if((e7643 instanceof Object)){
var ex__7058__auto__ = e7643;
var statearr_7644_7749 = state_7627;
(statearr_7644_7749[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7750 = state_7627;
state_7627 = G__7750;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = function(state_7627){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1.call(this,state_7627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___7742,jobs,results,process,async))
})();
var state__7168__auto__ = (function (){var statearr_7645 = f__7167__auto__.call(null);
(statearr_7645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7742);

return statearr_7645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___7742,jobs,results,process,async))
);


var c__7166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto__,jobs,results,process,async){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto__,jobs,results,process,async){
return (function (state_7683){
var state_val_7684 = (state_7683[(1)]);
if((state_val_7684 === (7))){
var inst_7679 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
var statearr_7685_7751 = state_7683__$1;
(statearr_7685_7751[(2)] = inst_7679);

(statearr_7685_7751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (20))){
var state_7683__$1 = state_7683;
var statearr_7686_7752 = state_7683__$1;
(statearr_7686_7752[(2)] = null);

(statearr_7686_7752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (1))){
var state_7683__$1 = state_7683;
var statearr_7687_7753 = state_7683__$1;
(statearr_7687_7753[(2)] = null);

(statearr_7687_7753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (4))){
var inst_7648 = (state_7683[(7)]);
var inst_7648__$1 = (state_7683[(2)]);
var inst_7649 = (inst_7648__$1 == null);
var state_7683__$1 = (function (){var statearr_7688 = state_7683;
(statearr_7688[(7)] = inst_7648__$1);

return statearr_7688;
})();
if(cljs.core.truth_(inst_7649)){
var statearr_7689_7754 = state_7683__$1;
(statearr_7689_7754[(1)] = (5));

} else {
var statearr_7690_7755 = state_7683__$1;
(statearr_7690_7755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (15))){
var inst_7661 = (state_7683[(8)]);
var state_7683__$1 = state_7683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7683__$1,(18),to,inst_7661);
} else {
if((state_val_7684 === (21))){
var inst_7674 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
var statearr_7691_7756 = state_7683__$1;
(statearr_7691_7756[(2)] = inst_7674);

(statearr_7691_7756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (13))){
var inst_7676 = (state_7683[(2)]);
var state_7683__$1 = (function (){var statearr_7692 = state_7683;
(statearr_7692[(9)] = inst_7676);

return statearr_7692;
})();
var statearr_7693_7757 = state_7683__$1;
(statearr_7693_7757[(2)] = null);

(statearr_7693_7757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (6))){
var inst_7648 = (state_7683[(7)]);
var state_7683__$1 = state_7683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7683__$1,(11),inst_7648);
} else {
if((state_val_7684 === (17))){
var inst_7669 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
if(cljs.core.truth_(inst_7669)){
var statearr_7694_7758 = state_7683__$1;
(statearr_7694_7758[(1)] = (19));

} else {
var statearr_7695_7759 = state_7683__$1;
(statearr_7695_7759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (3))){
var inst_7681 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7683__$1,inst_7681);
} else {
if((state_val_7684 === (12))){
var inst_7658 = (state_7683[(10)]);
var state_7683__$1 = state_7683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7683__$1,(14),inst_7658);
} else {
if((state_val_7684 === (2))){
var state_7683__$1 = state_7683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7683__$1,(4),results);
} else {
if((state_val_7684 === (19))){
var state_7683__$1 = state_7683;
var statearr_7696_7760 = state_7683__$1;
(statearr_7696_7760[(2)] = null);

(statearr_7696_7760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (11))){
var inst_7658 = (state_7683[(2)]);
var state_7683__$1 = (function (){var statearr_7697 = state_7683;
(statearr_7697[(10)] = inst_7658);

return statearr_7697;
})();
var statearr_7698_7761 = state_7683__$1;
(statearr_7698_7761[(2)] = null);

(statearr_7698_7761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (9))){
var state_7683__$1 = state_7683;
var statearr_7699_7762 = state_7683__$1;
(statearr_7699_7762[(2)] = null);

(statearr_7699_7762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (5))){
var state_7683__$1 = state_7683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7700_7763 = state_7683__$1;
(statearr_7700_7763[(1)] = (8));

} else {
var statearr_7701_7764 = state_7683__$1;
(statearr_7701_7764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (14))){
var inst_7661 = (state_7683[(8)]);
var inst_7663 = (state_7683[(11)]);
var inst_7661__$1 = (state_7683[(2)]);
var inst_7662 = (inst_7661__$1 == null);
var inst_7663__$1 = cljs.core.not.call(null,inst_7662);
var state_7683__$1 = (function (){var statearr_7702 = state_7683;
(statearr_7702[(8)] = inst_7661__$1);

(statearr_7702[(11)] = inst_7663__$1);

return statearr_7702;
})();
if(inst_7663__$1){
var statearr_7703_7765 = state_7683__$1;
(statearr_7703_7765[(1)] = (15));

} else {
var statearr_7704_7766 = state_7683__$1;
(statearr_7704_7766[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (16))){
var inst_7663 = (state_7683[(11)]);
var state_7683__$1 = state_7683;
var statearr_7705_7767 = state_7683__$1;
(statearr_7705_7767[(2)] = inst_7663);

(statearr_7705_7767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (10))){
var inst_7655 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
var statearr_7706_7768 = state_7683__$1;
(statearr_7706_7768[(2)] = inst_7655);

(statearr_7706_7768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (18))){
var inst_7666 = (state_7683[(2)]);
var state_7683__$1 = state_7683;
var statearr_7707_7769 = state_7683__$1;
(statearr_7707_7769[(2)] = inst_7666);

(statearr_7707_7769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7684 === (8))){
var inst_7652 = cljs.core.async.close_BANG_.call(null,to);
var state_7683__$1 = state_7683;
var statearr_7708_7770 = state_7683__$1;
(statearr_7708_7770[(2)] = inst_7652);

(statearr_7708_7770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7166__auto__,jobs,results,process,async))
;
return ((function (switch__7054__auto__,c__7166__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_7712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__);

(statearr_7712[(1)] = (1));

return statearr_7712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1 = (function (state_7683){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7713){if((e7713 instanceof Object)){
var ex__7058__auto__ = e7713;
var statearr_7714_7771 = state_7683;
(statearr_7714_7771[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7772 = state_7683;
state_7683 = G__7772;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__ = function(state_7683){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1.call(this,state_7683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto__,jobs,results,process,async))
})();
var state__7168__auto__ = (function (){var statearr_7715 = f__7167__auto__.call(null);
(statearr_7715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto__);

return statearr_7715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto__,jobs,results,process,async))
);

return c__7166__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7773 = [];
var len__5726__auto___7776 = arguments.length;
var i__5727__auto___7777 = (0);
while(true){
if((i__5727__auto___7777 < len__5726__auto___7776)){
args7773.push((arguments[i__5727__auto___7777]));

var G__7778 = (i__5727__auto___7777 + (1));
i__5727__auto___7777 = G__7778;
continue;
} else {
}
break;
}

var G__7775 = args7773.length;
switch (G__7775) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7773.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7780 = [];
var len__5726__auto___7783 = arguments.length;
var i__5727__auto___7784 = (0);
while(true){
if((i__5727__auto___7784 < len__5726__auto___7783)){
args7780.push((arguments[i__5727__auto___7784]));

var G__7785 = (i__5727__auto___7784 + (1));
i__5727__auto___7784 = G__7785;
continue;
} else {
}
break;
}

var G__7782 = args7780.length;
switch (G__7782) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7780.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args7787 = [];
var len__5726__auto___7840 = arguments.length;
var i__5727__auto___7841 = (0);
while(true){
if((i__5727__auto___7841 < len__5726__auto___7840)){
args7787.push((arguments[i__5727__auto___7841]));

var G__7842 = (i__5727__auto___7841 + (1));
i__5727__auto___7841 = G__7842;
continue;
} else {
}
break;
}

var G__7789 = args7787.length;
switch (G__7789) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7787.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7166__auto___7844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___7844,tc,fc){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___7844,tc,fc){
return (function (state_7815){
var state_val_7816 = (state_7815[(1)]);
if((state_val_7816 === (7))){
var inst_7811 = (state_7815[(2)]);
var state_7815__$1 = state_7815;
var statearr_7817_7845 = state_7815__$1;
(statearr_7817_7845[(2)] = inst_7811);

(statearr_7817_7845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (1))){
var state_7815__$1 = state_7815;
var statearr_7818_7846 = state_7815__$1;
(statearr_7818_7846[(2)] = null);

(statearr_7818_7846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (4))){
var inst_7792 = (state_7815[(7)]);
var inst_7792__$1 = (state_7815[(2)]);
var inst_7793 = (inst_7792__$1 == null);
var state_7815__$1 = (function (){var statearr_7819 = state_7815;
(statearr_7819[(7)] = inst_7792__$1);

return statearr_7819;
})();
if(cljs.core.truth_(inst_7793)){
var statearr_7820_7847 = state_7815__$1;
(statearr_7820_7847[(1)] = (5));

} else {
var statearr_7821_7848 = state_7815__$1;
(statearr_7821_7848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (13))){
var state_7815__$1 = state_7815;
var statearr_7822_7849 = state_7815__$1;
(statearr_7822_7849[(2)] = null);

(statearr_7822_7849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (6))){
var inst_7792 = (state_7815[(7)]);
var inst_7798 = p.call(null,inst_7792);
var state_7815__$1 = state_7815;
if(cljs.core.truth_(inst_7798)){
var statearr_7823_7850 = state_7815__$1;
(statearr_7823_7850[(1)] = (9));

} else {
var statearr_7824_7851 = state_7815__$1;
(statearr_7824_7851[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (3))){
var inst_7813 = (state_7815[(2)]);
var state_7815__$1 = state_7815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7815__$1,inst_7813);
} else {
if((state_val_7816 === (12))){
var state_7815__$1 = state_7815;
var statearr_7825_7852 = state_7815__$1;
(statearr_7825_7852[(2)] = null);

(statearr_7825_7852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (2))){
var state_7815__$1 = state_7815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7815__$1,(4),ch);
} else {
if((state_val_7816 === (11))){
var inst_7792 = (state_7815[(7)]);
var inst_7802 = (state_7815[(2)]);
var state_7815__$1 = state_7815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7815__$1,(8),inst_7802,inst_7792);
} else {
if((state_val_7816 === (9))){
var state_7815__$1 = state_7815;
var statearr_7826_7853 = state_7815__$1;
(statearr_7826_7853[(2)] = tc);

(statearr_7826_7853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (5))){
var inst_7795 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7796 = cljs.core.async.close_BANG_.call(null,fc);
var state_7815__$1 = (function (){var statearr_7827 = state_7815;
(statearr_7827[(8)] = inst_7795);

return statearr_7827;
})();
var statearr_7828_7854 = state_7815__$1;
(statearr_7828_7854[(2)] = inst_7796);

(statearr_7828_7854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (14))){
var inst_7809 = (state_7815[(2)]);
var state_7815__$1 = state_7815;
var statearr_7829_7855 = state_7815__$1;
(statearr_7829_7855[(2)] = inst_7809);

(statearr_7829_7855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (10))){
var state_7815__$1 = state_7815;
var statearr_7830_7856 = state_7815__$1;
(statearr_7830_7856[(2)] = fc);

(statearr_7830_7856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7816 === (8))){
var inst_7804 = (state_7815[(2)]);
var state_7815__$1 = state_7815;
if(cljs.core.truth_(inst_7804)){
var statearr_7831_7857 = state_7815__$1;
(statearr_7831_7857[(1)] = (12));

} else {
var statearr_7832_7858 = state_7815__$1;
(statearr_7832_7858[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__7166__auto___7844,tc,fc))
;
return ((function (switch__7054__auto__,c__7166__auto___7844,tc,fc){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_7836 = [null,null,null,null,null,null,null,null,null];
(statearr_7836[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_7836[(1)] = (1));

return statearr_7836;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_7815){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7837){if((e7837 instanceof Object)){
var ex__7058__auto__ = e7837;
var statearr_7838_7859 = state_7815;
(statearr_7838_7859[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7860 = state_7815;
state_7815 = G__7860;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_7815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_7815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___7844,tc,fc))
})();
var state__7168__auto__ = (function (){var statearr_7839 = f__7167__auto__.call(null);
(statearr_7839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___7844);

return statearr_7839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___7844,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto__){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto__){
return (function (state_7924){
var state_val_7925 = (state_7924[(1)]);
if((state_val_7925 === (7))){
var inst_7920 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
var statearr_7926_7947 = state_7924__$1;
(statearr_7926_7947[(2)] = inst_7920);

(statearr_7926_7947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (1))){
var inst_7904 = init;
var state_7924__$1 = (function (){var statearr_7927 = state_7924;
(statearr_7927[(7)] = inst_7904);

return statearr_7927;
})();
var statearr_7928_7948 = state_7924__$1;
(statearr_7928_7948[(2)] = null);

(statearr_7928_7948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (4))){
var inst_7907 = (state_7924[(8)]);
var inst_7907__$1 = (state_7924[(2)]);
var inst_7908 = (inst_7907__$1 == null);
var state_7924__$1 = (function (){var statearr_7929 = state_7924;
(statearr_7929[(8)] = inst_7907__$1);

return statearr_7929;
})();
if(cljs.core.truth_(inst_7908)){
var statearr_7930_7949 = state_7924__$1;
(statearr_7930_7949[(1)] = (5));

} else {
var statearr_7931_7950 = state_7924__$1;
(statearr_7931_7950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (6))){
var inst_7907 = (state_7924[(8)]);
var inst_7911 = (state_7924[(9)]);
var inst_7904 = (state_7924[(7)]);
var inst_7911__$1 = f.call(null,inst_7904,inst_7907);
var inst_7912 = cljs.core.reduced_QMARK_.call(null,inst_7911__$1);
var state_7924__$1 = (function (){var statearr_7932 = state_7924;
(statearr_7932[(9)] = inst_7911__$1);

return statearr_7932;
})();
if(inst_7912){
var statearr_7933_7951 = state_7924__$1;
(statearr_7933_7951[(1)] = (8));

} else {
var statearr_7934_7952 = state_7924__$1;
(statearr_7934_7952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (3))){
var inst_7922 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7924__$1,inst_7922);
} else {
if((state_val_7925 === (2))){
var state_7924__$1 = state_7924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7924__$1,(4),ch);
} else {
if((state_val_7925 === (9))){
var inst_7911 = (state_7924[(9)]);
var inst_7904 = inst_7911;
var state_7924__$1 = (function (){var statearr_7935 = state_7924;
(statearr_7935[(7)] = inst_7904);

return statearr_7935;
})();
var statearr_7936_7953 = state_7924__$1;
(statearr_7936_7953[(2)] = null);

(statearr_7936_7953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (5))){
var inst_7904 = (state_7924[(7)]);
var state_7924__$1 = state_7924;
var statearr_7937_7954 = state_7924__$1;
(statearr_7937_7954[(2)] = inst_7904);

(statearr_7937_7954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (10))){
var inst_7918 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
var statearr_7938_7955 = state_7924__$1;
(statearr_7938_7955[(2)] = inst_7918);

(statearr_7938_7955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (8))){
var inst_7911 = (state_7924[(9)]);
var inst_7914 = cljs.core.deref.call(null,inst_7911);
var state_7924__$1 = state_7924;
var statearr_7939_7956 = state_7924__$1;
(statearr_7939_7956[(2)] = inst_7914);

(statearr_7939_7956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__7166__auto__))
;
return ((function (switch__7054__auto__,c__7166__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7055__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7055__auto____0 = (function (){
var statearr_7943 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7943[(0)] = cljs$core$async$reduce_$_state_machine__7055__auto__);

(statearr_7943[(1)] = (1));

return statearr_7943;
});
var cljs$core$async$reduce_$_state_machine__7055__auto____1 = (function (state_7924){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e7944){if((e7944 instanceof Object)){
var ex__7058__auto__ = e7944;
var statearr_7945_7957 = state_7924;
(statearr_7945_7957[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7958 = state_7924;
state_7924 = G__7958;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7055__auto__ = function(state_7924){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7055__auto____1.call(this,state_7924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7055__auto____0;
cljs$core$async$reduce_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7055__auto____1;
return cljs$core$async$reduce_$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto__))
})();
var state__7168__auto__ = (function (){var statearr_7946 = f__7167__auto__.call(null);
(statearr_7946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto__);

return statearr_7946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto__))
);

return c__7166__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args7959 = [];
var len__5726__auto___8011 = arguments.length;
var i__5727__auto___8012 = (0);
while(true){
if((i__5727__auto___8012 < len__5726__auto___8011)){
args7959.push((arguments[i__5727__auto___8012]));

var G__8013 = (i__5727__auto___8012 + (1));
i__5727__auto___8012 = G__8013;
continue;
} else {
}
break;
}

var G__7961 = args7959.length;
switch (G__7961) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7959.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto__){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto__){
return (function (state_7986){
var state_val_7987 = (state_7986[(1)]);
if((state_val_7987 === (7))){
var inst_7968 = (state_7986[(2)]);
var state_7986__$1 = state_7986;
var statearr_7988_8015 = state_7986__$1;
(statearr_7988_8015[(2)] = inst_7968);

(statearr_7988_8015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (1))){
var inst_7962 = cljs.core.seq.call(null,coll);
var inst_7963 = inst_7962;
var state_7986__$1 = (function (){var statearr_7989 = state_7986;
(statearr_7989[(7)] = inst_7963);

return statearr_7989;
})();
var statearr_7990_8016 = state_7986__$1;
(statearr_7990_8016[(2)] = null);

(statearr_7990_8016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (4))){
var inst_7963 = (state_7986[(7)]);
var inst_7966 = cljs.core.first.call(null,inst_7963);
var state_7986__$1 = state_7986;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7986__$1,(7),ch,inst_7966);
} else {
if((state_val_7987 === (13))){
var inst_7980 = (state_7986[(2)]);
var state_7986__$1 = state_7986;
var statearr_7991_8017 = state_7986__$1;
(statearr_7991_8017[(2)] = inst_7980);

(statearr_7991_8017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (6))){
var inst_7971 = (state_7986[(2)]);
var state_7986__$1 = state_7986;
if(cljs.core.truth_(inst_7971)){
var statearr_7992_8018 = state_7986__$1;
(statearr_7992_8018[(1)] = (8));

} else {
var statearr_7993_8019 = state_7986__$1;
(statearr_7993_8019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (3))){
var inst_7984 = (state_7986[(2)]);
var state_7986__$1 = state_7986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7986__$1,inst_7984);
} else {
if((state_val_7987 === (12))){
var state_7986__$1 = state_7986;
var statearr_7994_8020 = state_7986__$1;
(statearr_7994_8020[(2)] = null);

(statearr_7994_8020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (2))){
var inst_7963 = (state_7986[(7)]);
var state_7986__$1 = state_7986;
if(cljs.core.truth_(inst_7963)){
var statearr_7995_8021 = state_7986__$1;
(statearr_7995_8021[(1)] = (4));

} else {
var statearr_7996_8022 = state_7986__$1;
(statearr_7996_8022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (11))){
var inst_7977 = cljs.core.async.close_BANG_.call(null,ch);
var state_7986__$1 = state_7986;
var statearr_7997_8023 = state_7986__$1;
(statearr_7997_8023[(2)] = inst_7977);

(statearr_7997_8023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (9))){
var state_7986__$1 = state_7986;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7998_8024 = state_7986__$1;
(statearr_7998_8024[(1)] = (11));

} else {
var statearr_7999_8025 = state_7986__$1;
(statearr_7999_8025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (5))){
var inst_7963 = (state_7986[(7)]);
var state_7986__$1 = state_7986;
var statearr_8000_8026 = state_7986__$1;
(statearr_8000_8026[(2)] = inst_7963);

(statearr_8000_8026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (10))){
var inst_7982 = (state_7986[(2)]);
var state_7986__$1 = state_7986;
var statearr_8001_8027 = state_7986__$1;
(statearr_8001_8027[(2)] = inst_7982);

(statearr_8001_8027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7987 === (8))){
var inst_7963 = (state_7986[(7)]);
var inst_7973 = cljs.core.next.call(null,inst_7963);
var inst_7963__$1 = inst_7973;
var state_7986__$1 = (function (){var statearr_8002 = state_7986;
(statearr_8002[(7)] = inst_7963__$1);

return statearr_8002;
})();
var statearr_8003_8028 = state_7986__$1;
(statearr_8003_8028[(2)] = null);

(statearr_8003_8028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});})(c__7166__auto__))
;
return ((function (switch__7054__auto__,c__7166__auto__){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_8007 = [null,null,null,null,null,null,null,null];
(statearr_8007[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_8007[(1)] = (1));

return statearr_8007;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_7986){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_7986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e8008){if((e8008 instanceof Object)){
var ex__7058__auto__ = e8008;
var statearr_8009_8029 = state_7986;
(statearr_8009_8029[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8030 = state_7986;
state_7986 = G__8030;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_7986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_7986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto__))
})();
var state__7168__auto__ = (function (){var statearr_8010 = f__7167__auto__.call(null);
(statearr_8010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto__);

return statearr_8010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto__))
);

return c__7166__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8252 = (function (mult,ch,cs,meta8253){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8253 = meta8253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8254,meta8253__$1){
var self__ = this;
var _8254__$1 = this;
return (new cljs.core.async.t_cljs$core$async8252(self__.mult,self__.ch,self__.cs,meta8253__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8254){
var self__ = this;
var _8254__$1 = this;
return self__.meta8253;
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8253","meta8253",1997530334,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8252";

cljs.core.async.t_cljs$core$async8252.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8252");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8252 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8252(mult__$1,ch__$1,cs__$1,meta8253){
return (new cljs.core.async.t_cljs$core$async8252(mult__$1,ch__$1,cs__$1,meta8253));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8252(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7166__auto___8473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___8473,cs,m,dchan,dctr,done){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___8473,cs,m,dchan,dctr,done){
return (function (state_8385){
var state_val_8386 = (state_8385[(1)]);
if((state_val_8386 === (7))){
var inst_8381 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8387_8474 = state_8385__$1;
(statearr_8387_8474[(2)] = inst_8381);

(statearr_8387_8474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (20))){
var inst_8286 = (state_8385[(7)]);
var inst_8296 = cljs.core.first.call(null,inst_8286);
var inst_8297 = cljs.core.nth.call(null,inst_8296,(0),null);
var inst_8298 = cljs.core.nth.call(null,inst_8296,(1),null);
var state_8385__$1 = (function (){var statearr_8388 = state_8385;
(statearr_8388[(8)] = inst_8297);

return statearr_8388;
})();
if(cljs.core.truth_(inst_8298)){
var statearr_8389_8475 = state_8385__$1;
(statearr_8389_8475[(1)] = (22));

} else {
var statearr_8390_8476 = state_8385__$1;
(statearr_8390_8476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (27))){
var inst_8328 = (state_8385[(9)]);
var inst_8326 = (state_8385[(10)]);
var inst_8333 = (state_8385[(11)]);
var inst_8257 = (state_8385[(12)]);
var inst_8333__$1 = cljs.core._nth.call(null,inst_8326,inst_8328);
var inst_8334 = cljs.core.async.put_BANG_.call(null,inst_8333__$1,inst_8257,done);
var state_8385__$1 = (function (){var statearr_8391 = state_8385;
(statearr_8391[(11)] = inst_8333__$1);

return statearr_8391;
})();
if(cljs.core.truth_(inst_8334)){
var statearr_8392_8477 = state_8385__$1;
(statearr_8392_8477[(1)] = (30));

} else {
var statearr_8393_8478 = state_8385__$1;
(statearr_8393_8478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (1))){
var state_8385__$1 = state_8385;
var statearr_8394_8479 = state_8385__$1;
(statearr_8394_8479[(2)] = null);

(statearr_8394_8479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (24))){
var inst_8286 = (state_8385[(7)]);
var inst_8303 = (state_8385[(2)]);
var inst_8304 = cljs.core.next.call(null,inst_8286);
var inst_8266 = inst_8304;
var inst_8267 = null;
var inst_8268 = (0);
var inst_8269 = (0);
var state_8385__$1 = (function (){var statearr_8395 = state_8385;
(statearr_8395[(13)] = inst_8269);

(statearr_8395[(14)] = inst_8267);

(statearr_8395[(15)] = inst_8268);

(statearr_8395[(16)] = inst_8266);

(statearr_8395[(17)] = inst_8303);

return statearr_8395;
})();
var statearr_8396_8480 = state_8385__$1;
(statearr_8396_8480[(2)] = null);

(statearr_8396_8480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (39))){
var state_8385__$1 = state_8385;
var statearr_8400_8481 = state_8385__$1;
(statearr_8400_8481[(2)] = null);

(statearr_8400_8481[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (4))){
var inst_8257 = (state_8385[(12)]);
var inst_8257__$1 = (state_8385[(2)]);
var inst_8258 = (inst_8257__$1 == null);
var state_8385__$1 = (function (){var statearr_8401 = state_8385;
(statearr_8401[(12)] = inst_8257__$1);

return statearr_8401;
})();
if(cljs.core.truth_(inst_8258)){
var statearr_8402_8482 = state_8385__$1;
(statearr_8402_8482[(1)] = (5));

} else {
var statearr_8403_8483 = state_8385__$1;
(statearr_8403_8483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (15))){
var inst_8269 = (state_8385[(13)]);
var inst_8267 = (state_8385[(14)]);
var inst_8268 = (state_8385[(15)]);
var inst_8266 = (state_8385[(16)]);
var inst_8282 = (state_8385[(2)]);
var inst_8283 = (inst_8269 + (1));
var tmp8397 = inst_8267;
var tmp8398 = inst_8268;
var tmp8399 = inst_8266;
var inst_8266__$1 = tmp8399;
var inst_8267__$1 = tmp8397;
var inst_8268__$1 = tmp8398;
var inst_8269__$1 = inst_8283;
var state_8385__$1 = (function (){var statearr_8404 = state_8385;
(statearr_8404[(13)] = inst_8269__$1);

(statearr_8404[(14)] = inst_8267__$1);

(statearr_8404[(15)] = inst_8268__$1);

(statearr_8404[(16)] = inst_8266__$1);

(statearr_8404[(18)] = inst_8282);

return statearr_8404;
})();
var statearr_8405_8484 = state_8385__$1;
(statearr_8405_8484[(2)] = null);

(statearr_8405_8484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (21))){
var inst_8307 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8409_8485 = state_8385__$1;
(statearr_8409_8485[(2)] = inst_8307);

(statearr_8409_8485[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (31))){
var inst_8333 = (state_8385[(11)]);
var inst_8337 = done.call(null,null);
var inst_8338 = cljs.core.async.untap_STAR_.call(null,m,inst_8333);
var state_8385__$1 = (function (){var statearr_8410 = state_8385;
(statearr_8410[(19)] = inst_8337);

return statearr_8410;
})();
var statearr_8411_8486 = state_8385__$1;
(statearr_8411_8486[(2)] = inst_8338);

(statearr_8411_8486[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (32))){
var inst_8328 = (state_8385[(9)]);
var inst_8326 = (state_8385[(10)]);
var inst_8327 = (state_8385[(20)]);
var inst_8325 = (state_8385[(21)]);
var inst_8340 = (state_8385[(2)]);
var inst_8341 = (inst_8328 + (1));
var tmp8406 = inst_8326;
var tmp8407 = inst_8327;
var tmp8408 = inst_8325;
var inst_8325__$1 = tmp8408;
var inst_8326__$1 = tmp8406;
var inst_8327__$1 = tmp8407;
var inst_8328__$1 = inst_8341;
var state_8385__$1 = (function (){var statearr_8412 = state_8385;
(statearr_8412[(9)] = inst_8328__$1);

(statearr_8412[(10)] = inst_8326__$1);

(statearr_8412[(20)] = inst_8327__$1);

(statearr_8412[(21)] = inst_8325__$1);

(statearr_8412[(22)] = inst_8340);

return statearr_8412;
})();
var statearr_8413_8487 = state_8385__$1;
(statearr_8413_8487[(2)] = null);

(statearr_8413_8487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (40))){
var inst_8353 = (state_8385[(23)]);
var inst_8357 = done.call(null,null);
var inst_8358 = cljs.core.async.untap_STAR_.call(null,m,inst_8353);
var state_8385__$1 = (function (){var statearr_8414 = state_8385;
(statearr_8414[(24)] = inst_8357);

return statearr_8414;
})();
var statearr_8415_8488 = state_8385__$1;
(statearr_8415_8488[(2)] = inst_8358);

(statearr_8415_8488[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (33))){
var inst_8344 = (state_8385[(25)]);
var inst_8346 = cljs.core.chunked_seq_QMARK_.call(null,inst_8344);
var state_8385__$1 = state_8385;
if(inst_8346){
var statearr_8416_8489 = state_8385__$1;
(statearr_8416_8489[(1)] = (36));

} else {
var statearr_8417_8490 = state_8385__$1;
(statearr_8417_8490[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (13))){
var inst_8276 = (state_8385[(26)]);
var inst_8279 = cljs.core.async.close_BANG_.call(null,inst_8276);
var state_8385__$1 = state_8385;
var statearr_8418_8491 = state_8385__$1;
(statearr_8418_8491[(2)] = inst_8279);

(statearr_8418_8491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (22))){
var inst_8297 = (state_8385[(8)]);
var inst_8300 = cljs.core.async.close_BANG_.call(null,inst_8297);
var state_8385__$1 = state_8385;
var statearr_8419_8492 = state_8385__$1;
(statearr_8419_8492[(2)] = inst_8300);

(statearr_8419_8492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (36))){
var inst_8344 = (state_8385[(25)]);
var inst_8348 = cljs.core.chunk_first.call(null,inst_8344);
var inst_8349 = cljs.core.chunk_rest.call(null,inst_8344);
var inst_8350 = cljs.core.count.call(null,inst_8348);
var inst_8325 = inst_8349;
var inst_8326 = inst_8348;
var inst_8327 = inst_8350;
var inst_8328 = (0);
var state_8385__$1 = (function (){var statearr_8420 = state_8385;
(statearr_8420[(9)] = inst_8328);

(statearr_8420[(10)] = inst_8326);

(statearr_8420[(20)] = inst_8327);

(statearr_8420[(21)] = inst_8325);

return statearr_8420;
})();
var statearr_8421_8493 = state_8385__$1;
(statearr_8421_8493[(2)] = null);

(statearr_8421_8493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (41))){
var inst_8344 = (state_8385[(25)]);
var inst_8360 = (state_8385[(2)]);
var inst_8361 = cljs.core.next.call(null,inst_8344);
var inst_8325 = inst_8361;
var inst_8326 = null;
var inst_8327 = (0);
var inst_8328 = (0);
var state_8385__$1 = (function (){var statearr_8422 = state_8385;
(statearr_8422[(9)] = inst_8328);

(statearr_8422[(10)] = inst_8326);

(statearr_8422[(27)] = inst_8360);

(statearr_8422[(20)] = inst_8327);

(statearr_8422[(21)] = inst_8325);

return statearr_8422;
})();
var statearr_8423_8494 = state_8385__$1;
(statearr_8423_8494[(2)] = null);

(statearr_8423_8494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (43))){
var state_8385__$1 = state_8385;
var statearr_8424_8495 = state_8385__$1;
(statearr_8424_8495[(2)] = null);

(statearr_8424_8495[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (29))){
var inst_8369 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8425_8496 = state_8385__$1;
(statearr_8425_8496[(2)] = inst_8369);

(statearr_8425_8496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (44))){
var inst_8378 = (state_8385[(2)]);
var state_8385__$1 = (function (){var statearr_8426 = state_8385;
(statearr_8426[(28)] = inst_8378);

return statearr_8426;
})();
var statearr_8427_8497 = state_8385__$1;
(statearr_8427_8497[(2)] = null);

(statearr_8427_8497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (6))){
var inst_8317 = (state_8385[(29)]);
var inst_8316 = cljs.core.deref.call(null,cs);
var inst_8317__$1 = cljs.core.keys.call(null,inst_8316);
var inst_8318 = cljs.core.count.call(null,inst_8317__$1);
var inst_8319 = cljs.core.reset_BANG_.call(null,dctr,inst_8318);
var inst_8324 = cljs.core.seq.call(null,inst_8317__$1);
var inst_8325 = inst_8324;
var inst_8326 = null;
var inst_8327 = (0);
var inst_8328 = (0);
var state_8385__$1 = (function (){var statearr_8428 = state_8385;
(statearr_8428[(9)] = inst_8328);

(statearr_8428[(30)] = inst_8319);

(statearr_8428[(10)] = inst_8326);

(statearr_8428[(29)] = inst_8317__$1);

(statearr_8428[(20)] = inst_8327);

(statearr_8428[(21)] = inst_8325);

return statearr_8428;
})();
var statearr_8429_8498 = state_8385__$1;
(statearr_8429_8498[(2)] = null);

(statearr_8429_8498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (28))){
var inst_8344 = (state_8385[(25)]);
var inst_8325 = (state_8385[(21)]);
var inst_8344__$1 = cljs.core.seq.call(null,inst_8325);
var state_8385__$1 = (function (){var statearr_8430 = state_8385;
(statearr_8430[(25)] = inst_8344__$1);

return statearr_8430;
})();
if(inst_8344__$1){
var statearr_8431_8499 = state_8385__$1;
(statearr_8431_8499[(1)] = (33));

} else {
var statearr_8432_8500 = state_8385__$1;
(statearr_8432_8500[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (25))){
var inst_8328 = (state_8385[(9)]);
var inst_8327 = (state_8385[(20)]);
var inst_8330 = (inst_8328 < inst_8327);
var inst_8331 = inst_8330;
var state_8385__$1 = state_8385;
if(cljs.core.truth_(inst_8331)){
var statearr_8433_8501 = state_8385__$1;
(statearr_8433_8501[(1)] = (27));

} else {
var statearr_8434_8502 = state_8385__$1;
(statearr_8434_8502[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (34))){
var state_8385__$1 = state_8385;
var statearr_8435_8503 = state_8385__$1;
(statearr_8435_8503[(2)] = null);

(statearr_8435_8503[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (17))){
var state_8385__$1 = state_8385;
var statearr_8436_8504 = state_8385__$1;
(statearr_8436_8504[(2)] = null);

(statearr_8436_8504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (3))){
var inst_8383 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8385__$1,inst_8383);
} else {
if((state_val_8386 === (12))){
var inst_8312 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8437_8505 = state_8385__$1;
(statearr_8437_8505[(2)] = inst_8312);

(statearr_8437_8505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (2))){
var state_8385__$1 = state_8385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8385__$1,(4),ch);
} else {
if((state_val_8386 === (23))){
var state_8385__$1 = state_8385;
var statearr_8438_8506 = state_8385__$1;
(statearr_8438_8506[(2)] = null);

(statearr_8438_8506[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (35))){
var inst_8367 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8439_8507 = state_8385__$1;
(statearr_8439_8507[(2)] = inst_8367);

(statearr_8439_8507[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (19))){
var inst_8286 = (state_8385[(7)]);
var inst_8290 = cljs.core.chunk_first.call(null,inst_8286);
var inst_8291 = cljs.core.chunk_rest.call(null,inst_8286);
var inst_8292 = cljs.core.count.call(null,inst_8290);
var inst_8266 = inst_8291;
var inst_8267 = inst_8290;
var inst_8268 = inst_8292;
var inst_8269 = (0);
var state_8385__$1 = (function (){var statearr_8440 = state_8385;
(statearr_8440[(13)] = inst_8269);

(statearr_8440[(14)] = inst_8267);

(statearr_8440[(15)] = inst_8268);

(statearr_8440[(16)] = inst_8266);

return statearr_8440;
})();
var statearr_8441_8508 = state_8385__$1;
(statearr_8441_8508[(2)] = null);

(statearr_8441_8508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (11))){
var inst_8266 = (state_8385[(16)]);
var inst_8286 = (state_8385[(7)]);
var inst_8286__$1 = cljs.core.seq.call(null,inst_8266);
var state_8385__$1 = (function (){var statearr_8442 = state_8385;
(statearr_8442[(7)] = inst_8286__$1);

return statearr_8442;
})();
if(inst_8286__$1){
var statearr_8443_8509 = state_8385__$1;
(statearr_8443_8509[(1)] = (16));

} else {
var statearr_8444_8510 = state_8385__$1;
(statearr_8444_8510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (9))){
var inst_8314 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8445_8511 = state_8385__$1;
(statearr_8445_8511[(2)] = inst_8314);

(statearr_8445_8511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (5))){
var inst_8264 = cljs.core.deref.call(null,cs);
var inst_8265 = cljs.core.seq.call(null,inst_8264);
var inst_8266 = inst_8265;
var inst_8267 = null;
var inst_8268 = (0);
var inst_8269 = (0);
var state_8385__$1 = (function (){var statearr_8446 = state_8385;
(statearr_8446[(13)] = inst_8269);

(statearr_8446[(14)] = inst_8267);

(statearr_8446[(15)] = inst_8268);

(statearr_8446[(16)] = inst_8266);

return statearr_8446;
})();
var statearr_8447_8512 = state_8385__$1;
(statearr_8447_8512[(2)] = null);

(statearr_8447_8512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (14))){
var state_8385__$1 = state_8385;
var statearr_8448_8513 = state_8385__$1;
(statearr_8448_8513[(2)] = null);

(statearr_8448_8513[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (45))){
var inst_8375 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8449_8514 = state_8385__$1;
(statearr_8449_8514[(2)] = inst_8375);

(statearr_8449_8514[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (26))){
var inst_8317 = (state_8385[(29)]);
var inst_8371 = (state_8385[(2)]);
var inst_8372 = cljs.core.seq.call(null,inst_8317);
var state_8385__$1 = (function (){var statearr_8450 = state_8385;
(statearr_8450[(31)] = inst_8371);

return statearr_8450;
})();
if(inst_8372){
var statearr_8451_8515 = state_8385__$1;
(statearr_8451_8515[(1)] = (42));

} else {
var statearr_8452_8516 = state_8385__$1;
(statearr_8452_8516[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (16))){
var inst_8286 = (state_8385[(7)]);
var inst_8288 = cljs.core.chunked_seq_QMARK_.call(null,inst_8286);
var state_8385__$1 = state_8385;
if(inst_8288){
var statearr_8453_8517 = state_8385__$1;
(statearr_8453_8517[(1)] = (19));

} else {
var statearr_8454_8518 = state_8385__$1;
(statearr_8454_8518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (38))){
var inst_8364 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8455_8519 = state_8385__$1;
(statearr_8455_8519[(2)] = inst_8364);

(statearr_8455_8519[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (30))){
var state_8385__$1 = state_8385;
var statearr_8456_8520 = state_8385__$1;
(statearr_8456_8520[(2)] = null);

(statearr_8456_8520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (10))){
var inst_8269 = (state_8385[(13)]);
var inst_8267 = (state_8385[(14)]);
var inst_8275 = cljs.core._nth.call(null,inst_8267,inst_8269);
var inst_8276 = cljs.core.nth.call(null,inst_8275,(0),null);
var inst_8277 = cljs.core.nth.call(null,inst_8275,(1),null);
var state_8385__$1 = (function (){var statearr_8457 = state_8385;
(statearr_8457[(26)] = inst_8276);

return statearr_8457;
})();
if(cljs.core.truth_(inst_8277)){
var statearr_8458_8521 = state_8385__$1;
(statearr_8458_8521[(1)] = (13));

} else {
var statearr_8459_8522 = state_8385__$1;
(statearr_8459_8522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (18))){
var inst_8310 = (state_8385[(2)]);
var state_8385__$1 = state_8385;
var statearr_8460_8523 = state_8385__$1;
(statearr_8460_8523[(2)] = inst_8310);

(statearr_8460_8523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (42))){
var state_8385__$1 = state_8385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8385__$1,(45),dchan);
} else {
if((state_val_8386 === (37))){
var inst_8344 = (state_8385[(25)]);
var inst_8353 = (state_8385[(23)]);
var inst_8257 = (state_8385[(12)]);
var inst_8353__$1 = cljs.core.first.call(null,inst_8344);
var inst_8354 = cljs.core.async.put_BANG_.call(null,inst_8353__$1,inst_8257,done);
var state_8385__$1 = (function (){var statearr_8461 = state_8385;
(statearr_8461[(23)] = inst_8353__$1);

return statearr_8461;
})();
if(cljs.core.truth_(inst_8354)){
var statearr_8462_8524 = state_8385__$1;
(statearr_8462_8524[(1)] = (39));

} else {
var statearr_8463_8525 = state_8385__$1;
(statearr_8463_8525[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8386 === (8))){
var inst_8269 = (state_8385[(13)]);
var inst_8268 = (state_8385[(15)]);
var inst_8271 = (inst_8269 < inst_8268);
var inst_8272 = inst_8271;
var state_8385__$1 = state_8385;
if(cljs.core.truth_(inst_8272)){
var statearr_8464_8526 = state_8385__$1;
(statearr_8464_8526[(1)] = (10));

} else {
var statearr_8465_8527 = state_8385__$1;
(statearr_8465_8527[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7166__auto___8473,cs,m,dchan,dctr,done))
;
return ((function (switch__7054__auto__,c__7166__auto___8473,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7055__auto__ = null;
var cljs$core$async$mult_$_state_machine__7055__auto____0 = (function (){
var statearr_8469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8469[(0)] = cljs$core$async$mult_$_state_machine__7055__auto__);

(statearr_8469[(1)] = (1));

return statearr_8469;
});
var cljs$core$async$mult_$_state_machine__7055__auto____1 = (function (state_8385){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_8385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e8470){if((e8470 instanceof Object)){
var ex__7058__auto__ = e8470;
var statearr_8471_8528 = state_8385;
(statearr_8471_8528[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8529 = state_8385;
state_8385 = G__8529;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7055__auto__ = function(state_8385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7055__auto____1.call(this,state_8385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7055__auto____0;
cljs$core$async$mult_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7055__auto____1;
return cljs$core$async$mult_$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___8473,cs,m,dchan,dctr,done))
})();
var state__7168__auto__ = (function (){var statearr_8472 = f__7167__auto__.call(null);
(statearr_8472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___8473);

return statearr_8472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___8473,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8530 = [];
var len__5726__auto___8533 = arguments.length;
var i__5727__auto___8534 = (0);
while(true){
if((i__5727__auto___8534 < len__5726__auto___8533)){
args8530.push((arguments[i__5727__auto___8534]));

var G__8535 = (i__5727__auto___8534 + (1));
i__5727__auto___8534 = G__8535;
continue;
} else {
}
break;
}

var G__8532 = args8530.length;
switch (G__8532) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8530.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___8547 = arguments.length;
var i__5727__auto___8548 = (0);
while(true){
if((i__5727__auto___8548 < len__5726__auto___8547)){
args__5733__auto__.push((arguments[i__5727__auto___8548]));

var G__8549 = (i__5727__auto___8548 + (1));
i__5727__auto___8548 = G__8549;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8541){
var map__8542 = p__8541;
var map__8542__$1 = ((((!((map__8542 == null)))?((((map__8542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8542):map__8542);
var opts = map__8542__$1;
var statearr_8544_8550 = state;
(statearr_8544_8550[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8542,map__8542__$1,opts){
return (function (val){
var statearr_8545_8551 = state;
(statearr_8545_8551[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8542,map__8542__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8546_8552 = state;
(statearr_8546_8552[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8537){
var G__8538 = cljs.core.first.call(null,seq8537);
var seq8537__$1 = cljs.core.next.call(null,seq8537);
var G__8539 = cljs.core.first.call(null,seq8537__$1);
var seq8537__$2 = cljs.core.next.call(null,seq8537__$1);
var G__8540 = cljs.core.first.call(null,seq8537__$2);
var seq8537__$3 = cljs.core.next.call(null,seq8537__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8538,G__8539,G__8540,seq8537__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8716 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8717){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8717 = meta8717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8718,meta8717__$1){
var self__ = this;
var _8718__$1 = this;
return (new cljs.core.async.t_cljs$core$async8716(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8717__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8718){
var self__ = this;
var _8718__$1 = this;
return self__.meta8717;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8717","meta8717",215960449,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8716";

cljs.core.async.t_cljs$core$async8716.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8716");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8716 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8716(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8717){
return (new cljs.core.async.t_cljs$core$async8716(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8717));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8716(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7166__auto___8879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8816){
var state_val_8817 = (state_8816[(1)]);
if((state_val_8817 === (7))){
var inst_8734 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8818_8880 = state_8816__$1;
(statearr_8818_8880[(2)] = inst_8734);

(statearr_8818_8880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (20))){
var inst_8746 = (state_8816[(7)]);
var state_8816__$1 = state_8816;
var statearr_8819_8881 = state_8816__$1;
(statearr_8819_8881[(2)] = inst_8746);

(statearr_8819_8881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (27))){
var state_8816__$1 = state_8816;
var statearr_8820_8882 = state_8816__$1;
(statearr_8820_8882[(2)] = null);

(statearr_8820_8882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (1))){
var inst_8722 = (state_8816[(8)]);
var inst_8722__$1 = calc_state.call(null);
var inst_8724 = (inst_8722__$1 == null);
var inst_8725 = cljs.core.not.call(null,inst_8724);
var state_8816__$1 = (function (){var statearr_8821 = state_8816;
(statearr_8821[(8)] = inst_8722__$1);

return statearr_8821;
})();
if(inst_8725){
var statearr_8822_8883 = state_8816__$1;
(statearr_8822_8883[(1)] = (2));

} else {
var statearr_8823_8884 = state_8816__$1;
(statearr_8823_8884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (24))){
var inst_8790 = (state_8816[(9)]);
var inst_8769 = (state_8816[(10)]);
var inst_8776 = (state_8816[(11)]);
var inst_8790__$1 = inst_8769.call(null,inst_8776);
var state_8816__$1 = (function (){var statearr_8824 = state_8816;
(statearr_8824[(9)] = inst_8790__$1);

return statearr_8824;
})();
if(cljs.core.truth_(inst_8790__$1)){
var statearr_8825_8885 = state_8816__$1;
(statearr_8825_8885[(1)] = (29));

} else {
var statearr_8826_8886 = state_8816__$1;
(statearr_8826_8886[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (4))){
var inst_8737 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8737)){
var statearr_8827_8887 = state_8816__$1;
(statearr_8827_8887[(1)] = (8));

} else {
var statearr_8828_8888 = state_8816__$1;
(statearr_8828_8888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (15))){
var inst_8763 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8763)){
var statearr_8829_8889 = state_8816__$1;
(statearr_8829_8889[(1)] = (19));

} else {
var statearr_8830_8890 = state_8816__$1;
(statearr_8830_8890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (21))){
var inst_8768 = (state_8816[(12)]);
var inst_8768__$1 = (state_8816[(2)]);
var inst_8769 = cljs.core.get.call(null,inst_8768__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8770 = cljs.core.get.call(null,inst_8768__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8771 = cljs.core.get.call(null,inst_8768__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8816__$1 = (function (){var statearr_8831 = state_8816;
(statearr_8831[(12)] = inst_8768__$1);

(statearr_8831[(10)] = inst_8769);

(statearr_8831[(13)] = inst_8770);

return statearr_8831;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8816__$1,(22),inst_8771);
} else {
if((state_val_8817 === (31))){
var inst_8798 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8798)){
var statearr_8832_8891 = state_8816__$1;
(statearr_8832_8891[(1)] = (32));

} else {
var statearr_8833_8892 = state_8816__$1;
(statearr_8833_8892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (32))){
var inst_8775 = (state_8816[(14)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8816__$1,(35),out,inst_8775);
} else {
if((state_val_8817 === (33))){
var inst_8768 = (state_8816[(12)]);
var inst_8746 = inst_8768;
var state_8816__$1 = (function (){var statearr_8834 = state_8816;
(statearr_8834[(7)] = inst_8746);

return statearr_8834;
})();
var statearr_8835_8893 = state_8816__$1;
(statearr_8835_8893[(2)] = null);

(statearr_8835_8893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (13))){
var inst_8746 = (state_8816[(7)]);
var inst_8753 = inst_8746.cljs$lang$protocol_mask$partition0$;
var inst_8754 = (inst_8753 & (64));
var inst_8755 = inst_8746.cljs$core$ISeq$;
var inst_8756 = (inst_8754) || (inst_8755);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8756)){
var statearr_8836_8894 = state_8816__$1;
(statearr_8836_8894[(1)] = (16));

} else {
var statearr_8837_8895 = state_8816__$1;
(statearr_8837_8895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (22))){
var inst_8775 = (state_8816[(14)]);
var inst_8776 = (state_8816[(11)]);
var inst_8774 = (state_8816[(2)]);
var inst_8775__$1 = cljs.core.nth.call(null,inst_8774,(0),null);
var inst_8776__$1 = cljs.core.nth.call(null,inst_8774,(1),null);
var inst_8777 = (inst_8775__$1 == null);
var inst_8778 = cljs.core._EQ_.call(null,inst_8776__$1,change);
var inst_8779 = (inst_8777) || (inst_8778);
var state_8816__$1 = (function (){var statearr_8838 = state_8816;
(statearr_8838[(14)] = inst_8775__$1);

(statearr_8838[(11)] = inst_8776__$1);

return statearr_8838;
})();
if(cljs.core.truth_(inst_8779)){
var statearr_8839_8896 = state_8816__$1;
(statearr_8839_8896[(1)] = (23));

} else {
var statearr_8840_8897 = state_8816__$1;
(statearr_8840_8897[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (36))){
var inst_8768 = (state_8816[(12)]);
var inst_8746 = inst_8768;
var state_8816__$1 = (function (){var statearr_8841 = state_8816;
(statearr_8841[(7)] = inst_8746);

return statearr_8841;
})();
var statearr_8842_8898 = state_8816__$1;
(statearr_8842_8898[(2)] = null);

(statearr_8842_8898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (29))){
var inst_8790 = (state_8816[(9)]);
var state_8816__$1 = state_8816;
var statearr_8843_8899 = state_8816__$1;
(statearr_8843_8899[(2)] = inst_8790);

(statearr_8843_8899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (6))){
var state_8816__$1 = state_8816;
var statearr_8844_8900 = state_8816__$1;
(statearr_8844_8900[(2)] = false);

(statearr_8844_8900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (28))){
var inst_8786 = (state_8816[(2)]);
var inst_8787 = calc_state.call(null);
var inst_8746 = inst_8787;
var state_8816__$1 = (function (){var statearr_8845 = state_8816;
(statearr_8845[(15)] = inst_8786);

(statearr_8845[(7)] = inst_8746);

return statearr_8845;
})();
var statearr_8846_8901 = state_8816__$1;
(statearr_8846_8901[(2)] = null);

(statearr_8846_8901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (25))){
var inst_8812 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8847_8902 = state_8816__$1;
(statearr_8847_8902[(2)] = inst_8812);

(statearr_8847_8902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (34))){
var inst_8810 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8848_8903 = state_8816__$1;
(statearr_8848_8903[(2)] = inst_8810);

(statearr_8848_8903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (17))){
var state_8816__$1 = state_8816;
var statearr_8849_8904 = state_8816__$1;
(statearr_8849_8904[(2)] = false);

(statearr_8849_8904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (3))){
var state_8816__$1 = state_8816;
var statearr_8850_8905 = state_8816__$1;
(statearr_8850_8905[(2)] = false);

(statearr_8850_8905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (12))){
var inst_8814 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8816__$1,inst_8814);
} else {
if((state_val_8817 === (2))){
var inst_8722 = (state_8816[(8)]);
var inst_8727 = inst_8722.cljs$lang$protocol_mask$partition0$;
var inst_8728 = (inst_8727 & (64));
var inst_8729 = inst_8722.cljs$core$ISeq$;
var inst_8730 = (inst_8728) || (inst_8729);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8730)){
var statearr_8851_8906 = state_8816__$1;
(statearr_8851_8906[(1)] = (5));

} else {
var statearr_8852_8907 = state_8816__$1;
(statearr_8852_8907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (23))){
var inst_8775 = (state_8816[(14)]);
var inst_8781 = (inst_8775 == null);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8781)){
var statearr_8853_8908 = state_8816__$1;
(statearr_8853_8908[(1)] = (26));

} else {
var statearr_8854_8909 = state_8816__$1;
(statearr_8854_8909[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (35))){
var inst_8801 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
if(cljs.core.truth_(inst_8801)){
var statearr_8855_8910 = state_8816__$1;
(statearr_8855_8910[(1)] = (36));

} else {
var statearr_8856_8911 = state_8816__$1;
(statearr_8856_8911[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (19))){
var inst_8746 = (state_8816[(7)]);
var inst_8765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8746);
var state_8816__$1 = state_8816;
var statearr_8857_8912 = state_8816__$1;
(statearr_8857_8912[(2)] = inst_8765);

(statearr_8857_8912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (11))){
var inst_8746 = (state_8816[(7)]);
var inst_8750 = (inst_8746 == null);
var inst_8751 = cljs.core.not.call(null,inst_8750);
var state_8816__$1 = state_8816;
if(inst_8751){
var statearr_8858_8913 = state_8816__$1;
(statearr_8858_8913[(1)] = (13));

} else {
var statearr_8859_8914 = state_8816__$1;
(statearr_8859_8914[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (9))){
var inst_8722 = (state_8816[(8)]);
var state_8816__$1 = state_8816;
var statearr_8860_8915 = state_8816__$1;
(statearr_8860_8915[(2)] = inst_8722);

(statearr_8860_8915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (5))){
var state_8816__$1 = state_8816;
var statearr_8861_8916 = state_8816__$1;
(statearr_8861_8916[(2)] = true);

(statearr_8861_8916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (14))){
var state_8816__$1 = state_8816;
var statearr_8862_8917 = state_8816__$1;
(statearr_8862_8917[(2)] = false);

(statearr_8862_8917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (26))){
var inst_8776 = (state_8816[(11)]);
var inst_8783 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8776);
var state_8816__$1 = state_8816;
var statearr_8863_8918 = state_8816__$1;
(statearr_8863_8918[(2)] = inst_8783);

(statearr_8863_8918[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (16))){
var state_8816__$1 = state_8816;
var statearr_8864_8919 = state_8816__$1;
(statearr_8864_8919[(2)] = true);

(statearr_8864_8919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (38))){
var inst_8806 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8865_8920 = state_8816__$1;
(statearr_8865_8920[(2)] = inst_8806);

(statearr_8865_8920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (30))){
var inst_8769 = (state_8816[(10)]);
var inst_8770 = (state_8816[(13)]);
var inst_8776 = (state_8816[(11)]);
var inst_8793 = cljs.core.empty_QMARK_.call(null,inst_8769);
var inst_8794 = inst_8770.call(null,inst_8776);
var inst_8795 = cljs.core.not.call(null,inst_8794);
var inst_8796 = (inst_8793) && (inst_8795);
var state_8816__$1 = state_8816;
var statearr_8866_8921 = state_8816__$1;
(statearr_8866_8921[(2)] = inst_8796);

(statearr_8866_8921[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (10))){
var inst_8722 = (state_8816[(8)]);
var inst_8742 = (state_8816[(2)]);
var inst_8743 = cljs.core.get.call(null,inst_8742,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8744 = cljs.core.get.call(null,inst_8742,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8745 = cljs.core.get.call(null,inst_8742,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8746 = inst_8722;
var state_8816__$1 = (function (){var statearr_8867 = state_8816;
(statearr_8867[(16)] = inst_8744);

(statearr_8867[(17)] = inst_8745);

(statearr_8867[(7)] = inst_8746);

(statearr_8867[(18)] = inst_8743);

return statearr_8867;
})();
var statearr_8868_8922 = state_8816__$1;
(statearr_8868_8922[(2)] = null);

(statearr_8868_8922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (18))){
var inst_8760 = (state_8816[(2)]);
var state_8816__$1 = state_8816;
var statearr_8869_8923 = state_8816__$1;
(statearr_8869_8923[(2)] = inst_8760);

(statearr_8869_8923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (37))){
var state_8816__$1 = state_8816;
var statearr_8870_8924 = state_8816__$1;
(statearr_8870_8924[(2)] = null);

(statearr_8870_8924[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8817 === (8))){
var inst_8722 = (state_8816[(8)]);
var inst_8739 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8722);
var state_8816__$1 = state_8816;
var statearr_8871_8925 = state_8816__$1;
(statearr_8871_8925[(2)] = inst_8739);

(statearr_8871_8925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7054__auto__,c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7055__auto__ = null;
var cljs$core$async$mix_$_state_machine__7055__auto____0 = (function (){
var statearr_8875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8875[(0)] = cljs$core$async$mix_$_state_machine__7055__auto__);

(statearr_8875[(1)] = (1));

return statearr_8875;
});
var cljs$core$async$mix_$_state_machine__7055__auto____1 = (function (state_8816){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_8816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e8876){if((e8876 instanceof Object)){
var ex__7058__auto__ = e8876;
var statearr_8877_8926 = state_8816;
(statearr_8877_8926[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8927 = state_8816;
state_8816 = G__8927;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7055__auto__ = function(state_8816){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7055__auto____1.call(this,state_8816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7055__auto____0;
cljs$core$async$mix_$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7055__auto____1;
return cljs$core$async$mix_$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7168__auto__ = (function (){var statearr_8878 = f__7167__auto__.call(null);
(statearr_8878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___8879);

return statearr_8878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___8879,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args8928 = [];
var len__5726__auto___8931 = arguments.length;
var i__5727__auto___8932 = (0);
while(true){
if((i__5727__auto___8932 < len__5726__auto___8931)){
args8928.push((arguments[i__5727__auto___8932]));

var G__8933 = (i__5727__auto___8932 + (1));
i__5727__auto___8932 = G__8933;
continue;
} else {
}
break;
}

var G__8930 = args8928.length;
switch (G__8930) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8928.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args8936 = [];
var len__5726__auto___9061 = arguments.length;
var i__5727__auto___9062 = (0);
while(true){
if((i__5727__auto___9062 < len__5726__auto___9061)){
args8936.push((arguments[i__5727__auto___9062]));

var G__9063 = (i__5727__auto___9062 + (1));
i__5727__auto___9062 = G__9063;
continue;
} else {
}
break;
}

var G__8938 = args8936.length;
switch (G__8938) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8936.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__8935_SHARP_){
if(cljs.core.truth_(p1__8935_SHARP_.call(null,topic))){
return p1__8935_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8935_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8939 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8940){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8940 = meta8940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8941,meta8940__$1){
var self__ = this;
var _8941__$1 = this;
return (new cljs.core.async.t_cljs$core$async8939(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8940__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8941){
var self__ = this;
var _8941__$1 = this;
return self__.meta8940;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8940","meta8940",1020787433,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8939.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8939";

cljs.core.async.t_cljs$core$async8939.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8939");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8939 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8940){
return (new cljs.core.async.t_cljs$core$async8939(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8940));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8939(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7166__auto___9065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9065,mults,ensure_mult,p){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9065,mults,ensure_mult,p){
return (function (state_9013){
var state_val_9014 = (state_9013[(1)]);
if((state_val_9014 === (7))){
var inst_9009 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9015_9066 = state_9013__$1;
(statearr_9015_9066[(2)] = inst_9009);

(statearr_9015_9066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (20))){
var state_9013__$1 = state_9013;
var statearr_9016_9067 = state_9013__$1;
(statearr_9016_9067[(2)] = null);

(statearr_9016_9067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (1))){
var state_9013__$1 = state_9013;
var statearr_9017_9068 = state_9013__$1;
(statearr_9017_9068[(2)] = null);

(statearr_9017_9068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (24))){
var inst_8992 = (state_9013[(7)]);
var inst_9001 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8992);
var state_9013__$1 = state_9013;
var statearr_9018_9069 = state_9013__$1;
(statearr_9018_9069[(2)] = inst_9001);

(statearr_9018_9069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (4))){
var inst_8944 = (state_9013[(8)]);
var inst_8944__$1 = (state_9013[(2)]);
var inst_8945 = (inst_8944__$1 == null);
var state_9013__$1 = (function (){var statearr_9019 = state_9013;
(statearr_9019[(8)] = inst_8944__$1);

return statearr_9019;
})();
if(cljs.core.truth_(inst_8945)){
var statearr_9020_9070 = state_9013__$1;
(statearr_9020_9070[(1)] = (5));

} else {
var statearr_9021_9071 = state_9013__$1;
(statearr_9021_9071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (15))){
var inst_8986 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9022_9072 = state_9013__$1;
(statearr_9022_9072[(2)] = inst_8986);

(statearr_9022_9072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (21))){
var inst_9006 = (state_9013[(2)]);
var state_9013__$1 = (function (){var statearr_9023 = state_9013;
(statearr_9023[(9)] = inst_9006);

return statearr_9023;
})();
var statearr_9024_9073 = state_9013__$1;
(statearr_9024_9073[(2)] = null);

(statearr_9024_9073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (13))){
var inst_8968 = (state_9013[(10)]);
var inst_8970 = cljs.core.chunked_seq_QMARK_.call(null,inst_8968);
var state_9013__$1 = state_9013;
if(inst_8970){
var statearr_9025_9074 = state_9013__$1;
(statearr_9025_9074[(1)] = (16));

} else {
var statearr_9026_9075 = state_9013__$1;
(statearr_9026_9075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (22))){
var inst_8998 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
if(cljs.core.truth_(inst_8998)){
var statearr_9027_9076 = state_9013__$1;
(statearr_9027_9076[(1)] = (23));

} else {
var statearr_9028_9077 = state_9013__$1;
(statearr_9028_9077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (6))){
var inst_8944 = (state_9013[(8)]);
var inst_8992 = (state_9013[(7)]);
var inst_8994 = (state_9013[(11)]);
var inst_8992__$1 = topic_fn.call(null,inst_8944);
var inst_8993 = cljs.core.deref.call(null,mults);
var inst_8994__$1 = cljs.core.get.call(null,inst_8993,inst_8992__$1);
var state_9013__$1 = (function (){var statearr_9029 = state_9013;
(statearr_9029[(7)] = inst_8992__$1);

(statearr_9029[(11)] = inst_8994__$1);

return statearr_9029;
})();
if(cljs.core.truth_(inst_8994__$1)){
var statearr_9030_9078 = state_9013__$1;
(statearr_9030_9078[(1)] = (19));

} else {
var statearr_9031_9079 = state_9013__$1;
(statearr_9031_9079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (25))){
var inst_9003 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9032_9080 = state_9013__$1;
(statearr_9032_9080[(2)] = inst_9003);

(statearr_9032_9080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (17))){
var inst_8968 = (state_9013[(10)]);
var inst_8977 = cljs.core.first.call(null,inst_8968);
var inst_8978 = cljs.core.async.muxch_STAR_.call(null,inst_8977);
var inst_8979 = cljs.core.async.close_BANG_.call(null,inst_8978);
var inst_8980 = cljs.core.next.call(null,inst_8968);
var inst_8954 = inst_8980;
var inst_8955 = null;
var inst_8956 = (0);
var inst_8957 = (0);
var state_9013__$1 = (function (){var statearr_9033 = state_9013;
(statearr_9033[(12)] = inst_8955);

(statearr_9033[(13)] = inst_8956);

(statearr_9033[(14)] = inst_8957);

(statearr_9033[(15)] = inst_8954);

(statearr_9033[(16)] = inst_8979);

return statearr_9033;
})();
var statearr_9034_9081 = state_9013__$1;
(statearr_9034_9081[(2)] = null);

(statearr_9034_9081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (3))){
var inst_9011 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9013__$1,inst_9011);
} else {
if((state_val_9014 === (12))){
var inst_8988 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9035_9082 = state_9013__$1;
(statearr_9035_9082[(2)] = inst_8988);

(statearr_9035_9082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (2))){
var state_9013__$1 = state_9013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9013__$1,(4),ch);
} else {
if((state_val_9014 === (23))){
var state_9013__$1 = state_9013;
var statearr_9036_9083 = state_9013__$1;
(statearr_9036_9083[(2)] = null);

(statearr_9036_9083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (19))){
var inst_8944 = (state_9013[(8)]);
var inst_8994 = (state_9013[(11)]);
var inst_8996 = cljs.core.async.muxch_STAR_.call(null,inst_8994);
var state_9013__$1 = state_9013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9013__$1,(22),inst_8996,inst_8944);
} else {
if((state_val_9014 === (11))){
var inst_8954 = (state_9013[(15)]);
var inst_8968 = (state_9013[(10)]);
var inst_8968__$1 = cljs.core.seq.call(null,inst_8954);
var state_9013__$1 = (function (){var statearr_9037 = state_9013;
(statearr_9037[(10)] = inst_8968__$1);

return statearr_9037;
})();
if(inst_8968__$1){
var statearr_9038_9084 = state_9013__$1;
(statearr_9038_9084[(1)] = (13));

} else {
var statearr_9039_9085 = state_9013__$1;
(statearr_9039_9085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (9))){
var inst_8990 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9040_9086 = state_9013__$1;
(statearr_9040_9086[(2)] = inst_8990);

(statearr_9040_9086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (5))){
var inst_8951 = cljs.core.deref.call(null,mults);
var inst_8952 = cljs.core.vals.call(null,inst_8951);
var inst_8953 = cljs.core.seq.call(null,inst_8952);
var inst_8954 = inst_8953;
var inst_8955 = null;
var inst_8956 = (0);
var inst_8957 = (0);
var state_9013__$1 = (function (){var statearr_9041 = state_9013;
(statearr_9041[(12)] = inst_8955);

(statearr_9041[(13)] = inst_8956);

(statearr_9041[(14)] = inst_8957);

(statearr_9041[(15)] = inst_8954);

return statearr_9041;
})();
var statearr_9042_9087 = state_9013__$1;
(statearr_9042_9087[(2)] = null);

(statearr_9042_9087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (14))){
var state_9013__$1 = state_9013;
var statearr_9046_9088 = state_9013__$1;
(statearr_9046_9088[(2)] = null);

(statearr_9046_9088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (16))){
var inst_8968 = (state_9013[(10)]);
var inst_8972 = cljs.core.chunk_first.call(null,inst_8968);
var inst_8973 = cljs.core.chunk_rest.call(null,inst_8968);
var inst_8974 = cljs.core.count.call(null,inst_8972);
var inst_8954 = inst_8973;
var inst_8955 = inst_8972;
var inst_8956 = inst_8974;
var inst_8957 = (0);
var state_9013__$1 = (function (){var statearr_9047 = state_9013;
(statearr_9047[(12)] = inst_8955);

(statearr_9047[(13)] = inst_8956);

(statearr_9047[(14)] = inst_8957);

(statearr_9047[(15)] = inst_8954);

return statearr_9047;
})();
var statearr_9048_9089 = state_9013__$1;
(statearr_9048_9089[(2)] = null);

(statearr_9048_9089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (10))){
var inst_8955 = (state_9013[(12)]);
var inst_8956 = (state_9013[(13)]);
var inst_8957 = (state_9013[(14)]);
var inst_8954 = (state_9013[(15)]);
var inst_8962 = cljs.core._nth.call(null,inst_8955,inst_8957);
var inst_8963 = cljs.core.async.muxch_STAR_.call(null,inst_8962);
var inst_8964 = cljs.core.async.close_BANG_.call(null,inst_8963);
var inst_8965 = (inst_8957 + (1));
var tmp9043 = inst_8955;
var tmp9044 = inst_8956;
var tmp9045 = inst_8954;
var inst_8954__$1 = tmp9045;
var inst_8955__$1 = tmp9043;
var inst_8956__$1 = tmp9044;
var inst_8957__$1 = inst_8965;
var state_9013__$1 = (function (){var statearr_9049 = state_9013;
(statearr_9049[(12)] = inst_8955__$1);

(statearr_9049[(13)] = inst_8956__$1);

(statearr_9049[(14)] = inst_8957__$1);

(statearr_9049[(15)] = inst_8954__$1);

(statearr_9049[(17)] = inst_8964);

return statearr_9049;
})();
var statearr_9050_9090 = state_9013__$1;
(statearr_9050_9090[(2)] = null);

(statearr_9050_9090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (18))){
var inst_8983 = (state_9013[(2)]);
var state_9013__$1 = state_9013;
var statearr_9051_9091 = state_9013__$1;
(statearr_9051_9091[(2)] = inst_8983);

(statearr_9051_9091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9014 === (8))){
var inst_8956 = (state_9013[(13)]);
var inst_8957 = (state_9013[(14)]);
var inst_8959 = (inst_8957 < inst_8956);
var inst_8960 = inst_8959;
var state_9013__$1 = state_9013;
if(cljs.core.truth_(inst_8960)){
var statearr_9052_9092 = state_9013__$1;
(statearr_9052_9092[(1)] = (10));

} else {
var statearr_9053_9093 = state_9013__$1;
(statearr_9053_9093[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7166__auto___9065,mults,ensure_mult,p))
;
return ((function (switch__7054__auto__,c__7166__auto___9065,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9057[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9057[(1)] = (1));

return statearr_9057;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9013){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9058){if((e9058 instanceof Object)){
var ex__7058__auto__ = e9058;
var statearr_9059_9094 = state_9013;
(statearr_9059_9094[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9095 = state_9013;
state_9013 = G__9095;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9065,mults,ensure_mult,p))
})();
var state__7168__auto__ = (function (){var statearr_9060 = f__7167__auto__.call(null);
(statearr_9060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9065);

return statearr_9060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9065,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9096 = [];
var len__5726__auto___9099 = arguments.length;
var i__5727__auto___9100 = (0);
while(true){
if((i__5727__auto___9100 < len__5726__auto___9099)){
args9096.push((arguments[i__5727__auto___9100]));

var G__9101 = (i__5727__auto___9100 + (1));
i__5727__auto___9100 = G__9101;
continue;
} else {
}
break;
}

var G__9098 = args9096.length;
switch (G__9098) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9096.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9103 = [];
var len__5726__auto___9106 = arguments.length;
var i__5727__auto___9107 = (0);
while(true){
if((i__5727__auto___9107 < len__5726__auto___9106)){
args9103.push((arguments[i__5727__auto___9107]));

var G__9108 = (i__5727__auto___9107 + (1));
i__5727__auto___9107 = G__9108;
continue;
} else {
}
break;
}

var G__9105 = args9103.length;
switch (G__9105) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9103.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9110 = [];
var len__5726__auto___9181 = arguments.length;
var i__5727__auto___9182 = (0);
while(true){
if((i__5727__auto___9182 < len__5726__auto___9181)){
args9110.push((arguments[i__5727__auto___9182]));

var G__9183 = (i__5727__auto___9182 + (1));
i__5727__auto___9182 = G__9183;
continue;
} else {
}
break;
}

var G__9112 = args9110.length;
switch (G__9112) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9110.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7166__auto___9185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9151){
var state_val_9152 = (state_9151[(1)]);
if((state_val_9152 === (7))){
var state_9151__$1 = state_9151;
var statearr_9153_9186 = state_9151__$1;
(statearr_9153_9186[(2)] = null);

(statearr_9153_9186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (1))){
var state_9151__$1 = state_9151;
var statearr_9154_9187 = state_9151__$1;
(statearr_9154_9187[(2)] = null);

(statearr_9154_9187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (4))){
var inst_9115 = (state_9151[(7)]);
var inst_9117 = (inst_9115 < cnt);
var state_9151__$1 = state_9151;
if(cljs.core.truth_(inst_9117)){
var statearr_9155_9188 = state_9151__$1;
(statearr_9155_9188[(1)] = (6));

} else {
var statearr_9156_9189 = state_9151__$1;
(statearr_9156_9189[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (15))){
var inst_9147 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9157_9190 = state_9151__$1;
(statearr_9157_9190[(2)] = inst_9147);

(statearr_9157_9190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (13))){
var inst_9140 = cljs.core.async.close_BANG_.call(null,out);
var state_9151__$1 = state_9151;
var statearr_9158_9191 = state_9151__$1;
(statearr_9158_9191[(2)] = inst_9140);

(statearr_9158_9191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (6))){
var state_9151__$1 = state_9151;
var statearr_9159_9192 = state_9151__$1;
(statearr_9159_9192[(2)] = null);

(statearr_9159_9192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (3))){
var inst_9149 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9151__$1,inst_9149);
} else {
if((state_val_9152 === (12))){
var inst_9137 = (state_9151[(8)]);
var inst_9137__$1 = (state_9151[(2)]);
var inst_9138 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9137__$1);
var state_9151__$1 = (function (){var statearr_9160 = state_9151;
(statearr_9160[(8)] = inst_9137__$1);

return statearr_9160;
})();
if(cljs.core.truth_(inst_9138)){
var statearr_9161_9193 = state_9151__$1;
(statearr_9161_9193[(1)] = (13));

} else {
var statearr_9162_9194 = state_9151__$1;
(statearr_9162_9194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (2))){
var inst_9114 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9115 = (0);
var state_9151__$1 = (function (){var statearr_9163 = state_9151;
(statearr_9163[(9)] = inst_9114);

(statearr_9163[(7)] = inst_9115);

return statearr_9163;
})();
var statearr_9164_9195 = state_9151__$1;
(statearr_9164_9195[(2)] = null);

(statearr_9164_9195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (11))){
var inst_9115 = (state_9151[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9151,(10),Object,null,(9));
var inst_9124 = chs__$1.call(null,inst_9115);
var inst_9125 = done.call(null,inst_9115);
var inst_9126 = cljs.core.async.take_BANG_.call(null,inst_9124,inst_9125);
var state_9151__$1 = state_9151;
var statearr_9165_9196 = state_9151__$1;
(statearr_9165_9196[(2)] = inst_9126);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (9))){
var inst_9115 = (state_9151[(7)]);
var inst_9128 = (state_9151[(2)]);
var inst_9129 = (inst_9115 + (1));
var inst_9115__$1 = inst_9129;
var state_9151__$1 = (function (){var statearr_9166 = state_9151;
(statearr_9166[(7)] = inst_9115__$1);

(statearr_9166[(10)] = inst_9128);

return statearr_9166;
})();
var statearr_9167_9197 = state_9151__$1;
(statearr_9167_9197[(2)] = null);

(statearr_9167_9197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (5))){
var inst_9135 = (state_9151[(2)]);
var state_9151__$1 = (function (){var statearr_9168 = state_9151;
(statearr_9168[(11)] = inst_9135);

return statearr_9168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9151__$1,(12),dchan);
} else {
if((state_val_9152 === (14))){
var inst_9137 = (state_9151[(8)]);
var inst_9142 = cljs.core.apply.call(null,f,inst_9137);
var state_9151__$1 = state_9151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9151__$1,(16),out,inst_9142);
} else {
if((state_val_9152 === (16))){
var inst_9144 = (state_9151[(2)]);
var state_9151__$1 = (function (){var statearr_9169 = state_9151;
(statearr_9169[(12)] = inst_9144);

return statearr_9169;
})();
var statearr_9170_9198 = state_9151__$1;
(statearr_9170_9198[(2)] = null);

(statearr_9170_9198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (10))){
var inst_9119 = (state_9151[(2)]);
var inst_9120 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9151__$1 = (function (){var statearr_9171 = state_9151;
(statearr_9171[(13)] = inst_9119);

return statearr_9171;
})();
var statearr_9172_9199 = state_9151__$1;
(statearr_9172_9199[(2)] = inst_9120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9152 === (8))){
var inst_9133 = (state_9151[(2)]);
var state_9151__$1 = state_9151;
var statearr_9173_9200 = state_9151__$1;
(statearr_9173_9200[(2)] = inst_9133);

(statearr_9173_9200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7054__auto__,c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9177[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9177[(1)] = (1));

return statearr_9177;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9151){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9178){if((e9178 instanceof Object)){
var ex__7058__auto__ = e9178;
var statearr_9179_9201 = state_9151;
(statearr_9179_9201[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9202 = state_9151;
state_9151 = G__9202;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7168__auto__ = (function (){var statearr_9180 = f__7167__auto__.call(null);
(statearr_9180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9185);

return statearr_9180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9185,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9204 = [];
var len__5726__auto___9260 = arguments.length;
var i__5727__auto___9261 = (0);
while(true){
if((i__5727__auto___9261 < len__5726__auto___9260)){
args9204.push((arguments[i__5727__auto___9261]));

var G__9262 = (i__5727__auto___9261 + (1));
i__5727__auto___9261 = G__9262;
continue;
} else {
}
break;
}

var G__9206 = args9204.length;
switch (G__9206) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9204.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9264,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9264,out){
return (function (state_9236){
var state_val_9237 = (state_9236[(1)]);
if((state_val_9237 === (7))){
var inst_9215 = (state_9236[(7)]);
var inst_9216 = (state_9236[(8)]);
var inst_9215__$1 = (state_9236[(2)]);
var inst_9216__$1 = cljs.core.nth.call(null,inst_9215__$1,(0),null);
var inst_9217 = cljs.core.nth.call(null,inst_9215__$1,(1),null);
var inst_9218 = (inst_9216__$1 == null);
var state_9236__$1 = (function (){var statearr_9238 = state_9236;
(statearr_9238[(7)] = inst_9215__$1);

(statearr_9238[(9)] = inst_9217);

(statearr_9238[(8)] = inst_9216__$1);

return statearr_9238;
})();
if(cljs.core.truth_(inst_9218)){
var statearr_9239_9265 = state_9236__$1;
(statearr_9239_9265[(1)] = (8));

} else {
var statearr_9240_9266 = state_9236__$1;
(statearr_9240_9266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (1))){
var inst_9207 = cljs.core.vec.call(null,chs);
var inst_9208 = inst_9207;
var state_9236__$1 = (function (){var statearr_9241 = state_9236;
(statearr_9241[(10)] = inst_9208);

return statearr_9241;
})();
var statearr_9242_9267 = state_9236__$1;
(statearr_9242_9267[(2)] = null);

(statearr_9242_9267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (4))){
var inst_9208 = (state_9236[(10)]);
var state_9236__$1 = state_9236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9236__$1,(7),inst_9208);
} else {
if((state_val_9237 === (6))){
var inst_9232 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9243_9268 = state_9236__$1;
(statearr_9243_9268[(2)] = inst_9232);

(statearr_9243_9268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (3))){
var inst_9234 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9236__$1,inst_9234);
} else {
if((state_val_9237 === (2))){
var inst_9208 = (state_9236[(10)]);
var inst_9210 = cljs.core.count.call(null,inst_9208);
var inst_9211 = (inst_9210 > (0));
var state_9236__$1 = state_9236;
if(cljs.core.truth_(inst_9211)){
var statearr_9245_9269 = state_9236__$1;
(statearr_9245_9269[(1)] = (4));

} else {
var statearr_9246_9270 = state_9236__$1;
(statearr_9246_9270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (11))){
var inst_9208 = (state_9236[(10)]);
var inst_9225 = (state_9236[(2)]);
var tmp9244 = inst_9208;
var inst_9208__$1 = tmp9244;
var state_9236__$1 = (function (){var statearr_9247 = state_9236;
(statearr_9247[(11)] = inst_9225);

(statearr_9247[(10)] = inst_9208__$1);

return statearr_9247;
})();
var statearr_9248_9271 = state_9236__$1;
(statearr_9248_9271[(2)] = null);

(statearr_9248_9271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (9))){
var inst_9216 = (state_9236[(8)]);
var state_9236__$1 = state_9236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9236__$1,(11),out,inst_9216);
} else {
if((state_val_9237 === (5))){
var inst_9230 = cljs.core.async.close_BANG_.call(null,out);
var state_9236__$1 = state_9236;
var statearr_9249_9272 = state_9236__$1;
(statearr_9249_9272[(2)] = inst_9230);

(statearr_9249_9272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (10))){
var inst_9228 = (state_9236[(2)]);
var state_9236__$1 = state_9236;
var statearr_9250_9273 = state_9236__$1;
(statearr_9250_9273[(2)] = inst_9228);

(statearr_9250_9273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9237 === (8))){
var inst_9215 = (state_9236[(7)]);
var inst_9217 = (state_9236[(9)]);
var inst_9216 = (state_9236[(8)]);
var inst_9208 = (state_9236[(10)]);
var inst_9220 = (function (){var cs = inst_9208;
var vec__9213 = inst_9215;
var v = inst_9216;
var c = inst_9217;
return ((function (cs,vec__9213,v,c,inst_9215,inst_9217,inst_9216,inst_9208,state_val_9237,c__7166__auto___9264,out){
return (function (p1__9203_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9203_SHARP_);
});
;})(cs,vec__9213,v,c,inst_9215,inst_9217,inst_9216,inst_9208,state_val_9237,c__7166__auto___9264,out))
})();
var inst_9221 = cljs.core.filterv.call(null,inst_9220,inst_9208);
var inst_9208__$1 = inst_9221;
var state_9236__$1 = (function (){var statearr_9251 = state_9236;
(statearr_9251[(10)] = inst_9208__$1);

return statearr_9251;
})();
var statearr_9252_9274 = state_9236__$1;
(statearr_9252_9274[(2)] = null);

(statearr_9252_9274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__7166__auto___9264,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9264,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9256[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9256[(1)] = (1));

return statearr_9256;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9236){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9257){if((e9257 instanceof Object)){
var ex__7058__auto__ = e9257;
var statearr_9258_9275 = state_9236;
(statearr_9258_9275[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9276 = state_9236;
state_9236 = G__9276;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9264,out))
})();
var state__7168__auto__ = (function (){var statearr_9259 = f__7167__auto__.call(null);
(statearr_9259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9264);

return statearr_9259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9264,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9277 = [];
var len__5726__auto___9326 = arguments.length;
var i__5727__auto___9327 = (0);
while(true){
if((i__5727__auto___9327 < len__5726__auto___9326)){
args9277.push((arguments[i__5727__auto___9327]));

var G__9328 = (i__5727__auto___9327 + (1));
i__5727__auto___9327 = G__9328;
continue;
} else {
}
break;
}

var G__9279 = args9277.length;
switch (G__9279) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9277.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9330,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9330,out){
return (function (state_9303){
var state_val_9304 = (state_9303[(1)]);
if((state_val_9304 === (7))){
var inst_9285 = (state_9303[(7)]);
var inst_9285__$1 = (state_9303[(2)]);
var inst_9286 = (inst_9285__$1 == null);
var inst_9287 = cljs.core.not.call(null,inst_9286);
var state_9303__$1 = (function (){var statearr_9305 = state_9303;
(statearr_9305[(7)] = inst_9285__$1);

return statearr_9305;
})();
if(inst_9287){
var statearr_9306_9331 = state_9303__$1;
(statearr_9306_9331[(1)] = (8));

} else {
var statearr_9307_9332 = state_9303__$1;
(statearr_9307_9332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (1))){
var inst_9280 = (0);
var state_9303__$1 = (function (){var statearr_9308 = state_9303;
(statearr_9308[(8)] = inst_9280);

return statearr_9308;
})();
var statearr_9309_9333 = state_9303__$1;
(statearr_9309_9333[(2)] = null);

(statearr_9309_9333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (4))){
var state_9303__$1 = state_9303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9303__$1,(7),ch);
} else {
if((state_val_9304 === (6))){
var inst_9298 = (state_9303[(2)]);
var state_9303__$1 = state_9303;
var statearr_9310_9334 = state_9303__$1;
(statearr_9310_9334[(2)] = inst_9298);

(statearr_9310_9334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (3))){
var inst_9300 = (state_9303[(2)]);
var inst_9301 = cljs.core.async.close_BANG_.call(null,out);
var state_9303__$1 = (function (){var statearr_9311 = state_9303;
(statearr_9311[(9)] = inst_9300);

return statearr_9311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9303__$1,inst_9301);
} else {
if((state_val_9304 === (2))){
var inst_9280 = (state_9303[(8)]);
var inst_9282 = (inst_9280 < n);
var state_9303__$1 = state_9303;
if(cljs.core.truth_(inst_9282)){
var statearr_9312_9335 = state_9303__$1;
(statearr_9312_9335[(1)] = (4));

} else {
var statearr_9313_9336 = state_9303__$1;
(statearr_9313_9336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (11))){
var inst_9280 = (state_9303[(8)]);
var inst_9290 = (state_9303[(2)]);
var inst_9291 = (inst_9280 + (1));
var inst_9280__$1 = inst_9291;
var state_9303__$1 = (function (){var statearr_9314 = state_9303;
(statearr_9314[(8)] = inst_9280__$1);

(statearr_9314[(10)] = inst_9290);

return statearr_9314;
})();
var statearr_9315_9337 = state_9303__$1;
(statearr_9315_9337[(2)] = null);

(statearr_9315_9337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (9))){
var state_9303__$1 = state_9303;
var statearr_9316_9338 = state_9303__$1;
(statearr_9316_9338[(2)] = null);

(statearr_9316_9338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (5))){
var state_9303__$1 = state_9303;
var statearr_9317_9339 = state_9303__$1;
(statearr_9317_9339[(2)] = null);

(statearr_9317_9339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (10))){
var inst_9295 = (state_9303[(2)]);
var state_9303__$1 = state_9303;
var statearr_9318_9340 = state_9303__$1;
(statearr_9318_9340[(2)] = inst_9295);

(statearr_9318_9340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9304 === (8))){
var inst_9285 = (state_9303[(7)]);
var state_9303__$1 = state_9303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9303__$1,(11),out,inst_9285);
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
}
}
});})(c__7166__auto___9330,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9330,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9322[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9322[(1)] = (1));

return statearr_9322;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9303){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9323){if((e9323 instanceof Object)){
var ex__7058__auto__ = e9323;
var statearr_9324_9341 = state_9303;
(statearr_9324_9341[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9342 = state_9303;
state_9303 = G__9342;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9330,out))
})();
var state__7168__auto__ = (function (){var statearr_9325 = f__7167__auto__.call(null);
(statearr_9325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9330);

return statearr_9325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9330,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9350 = (function (map_LT_,f,ch,meta9351){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9351 = meta9351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9352,meta9351__$1){
var self__ = this;
var _9352__$1 = this;
return (new cljs.core.async.t_cljs$core$async9350(self__.map_LT_,self__.f,self__.ch,meta9351__$1));
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9352){
var self__ = this;
var _9352__$1 = this;
return self__.meta9351;
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9353 = (function (map_LT_,f,ch,meta9351,_,fn1,meta9354){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9351 = meta9351;
this._ = _;
this.fn1 = fn1;
this.meta9354 = meta9354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9355,meta9354__$1){
var self__ = this;
var _9355__$1 = this;
return (new cljs.core.async.t_cljs$core$async9353(self__.map_LT_,self__.f,self__.ch,self__.meta9351,self__._,self__.fn1,meta9354__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9355){
var self__ = this;
var _9355__$1 = this;
return self__.meta9354;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9343_SHARP_){
return f1.call(null,(((p1__9343_SHARP_ == null))?null:self__.f.call(null,p1__9343_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9351","meta9351",-284573648,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9350","cljs.core.async/t_cljs$core$async9350",1673869389,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9354","meta9354",1240440539,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9353";

cljs.core.async.t_cljs$core$async9353.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9353");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9353 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9353(map_LT___$1,f__$1,ch__$1,meta9351__$1,___$2,fn1__$1,meta9354){
return (new cljs.core.async.t_cljs$core$async9353(map_LT___$1,f__$1,ch__$1,meta9351__$1,___$2,fn1__$1,meta9354));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9353(self__.map_LT_,self__.f,self__.ch,self__.meta9351,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9351","meta9351",-284573648,null)], null);
});

cljs.core.async.t_cljs$core$async9350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9350";

cljs.core.async.t_cljs$core$async9350.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9350");
});

cljs.core.async.__GT_t_cljs$core$async9350 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9350(map_LT___$1,f__$1,ch__$1,meta9351){
return (new cljs.core.async.t_cljs$core$async9350(map_LT___$1,f__$1,ch__$1,meta9351));
});

}

return (new cljs.core.async.t_cljs$core$async9350(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9359 = (function (map_GT_,f,ch,meta9360){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9360 = meta9360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9361,meta9360__$1){
var self__ = this;
var _9361__$1 = this;
return (new cljs.core.async.t_cljs$core$async9359(self__.map_GT_,self__.f,self__.ch,meta9360__$1));
});

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9361){
var self__ = this;
var _9361__$1 = this;
return self__.meta9360;
});

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9360","meta9360",1375521101,null)], null);
});

cljs.core.async.t_cljs$core$async9359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9359";

cljs.core.async.t_cljs$core$async9359.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9359");
});

cljs.core.async.__GT_t_cljs$core$async9359 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9359(map_GT___$1,f__$1,ch__$1,meta9360){
return (new cljs.core.async.t_cljs$core$async9359(map_GT___$1,f__$1,ch__$1,meta9360));
});

}

return (new cljs.core.async.t_cljs$core$async9359(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9365 = (function (filter_GT_,p,ch,meta9366){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9366 = meta9366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9367,meta9366__$1){
var self__ = this;
var _9367__$1 = this;
return (new cljs.core.async.t_cljs$core$async9365(self__.filter_GT_,self__.p,self__.ch,meta9366__$1));
});

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9367){
var self__ = this;
var _9367__$1 = this;
return self__.meta9366;
});

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9366","meta9366",-1335624184,null)], null);
});

cljs.core.async.t_cljs$core$async9365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9365";

cljs.core.async.t_cljs$core$async9365.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9365");
});

cljs.core.async.__GT_t_cljs$core$async9365 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9365(filter_GT___$1,p__$1,ch__$1,meta9366){
return (new cljs.core.async.t_cljs$core$async9365(filter_GT___$1,p__$1,ch__$1,meta9366));
});

}

return (new cljs.core.async.t_cljs$core$async9365(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9368 = [];
var len__5726__auto___9412 = arguments.length;
var i__5727__auto___9413 = (0);
while(true){
if((i__5727__auto___9413 < len__5726__auto___9412)){
args9368.push((arguments[i__5727__auto___9413]));

var G__9414 = (i__5727__auto___9413 + (1));
i__5727__auto___9413 = G__9414;
continue;
} else {
}
break;
}

var G__9370 = args9368.length;
switch (G__9370) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9368.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9416,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9416,out){
return (function (state_9391){
var state_val_9392 = (state_9391[(1)]);
if((state_val_9392 === (7))){
var inst_9387 = (state_9391[(2)]);
var state_9391__$1 = state_9391;
var statearr_9393_9417 = state_9391__$1;
(statearr_9393_9417[(2)] = inst_9387);

(statearr_9393_9417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (1))){
var state_9391__$1 = state_9391;
var statearr_9394_9418 = state_9391__$1;
(statearr_9394_9418[(2)] = null);

(statearr_9394_9418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (4))){
var inst_9373 = (state_9391[(7)]);
var inst_9373__$1 = (state_9391[(2)]);
var inst_9374 = (inst_9373__$1 == null);
var state_9391__$1 = (function (){var statearr_9395 = state_9391;
(statearr_9395[(7)] = inst_9373__$1);

return statearr_9395;
})();
if(cljs.core.truth_(inst_9374)){
var statearr_9396_9419 = state_9391__$1;
(statearr_9396_9419[(1)] = (5));

} else {
var statearr_9397_9420 = state_9391__$1;
(statearr_9397_9420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (6))){
var inst_9373 = (state_9391[(7)]);
var inst_9378 = p.call(null,inst_9373);
var state_9391__$1 = state_9391;
if(cljs.core.truth_(inst_9378)){
var statearr_9398_9421 = state_9391__$1;
(statearr_9398_9421[(1)] = (8));

} else {
var statearr_9399_9422 = state_9391__$1;
(statearr_9399_9422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (3))){
var inst_9389 = (state_9391[(2)]);
var state_9391__$1 = state_9391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9391__$1,inst_9389);
} else {
if((state_val_9392 === (2))){
var state_9391__$1 = state_9391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9391__$1,(4),ch);
} else {
if((state_val_9392 === (11))){
var inst_9381 = (state_9391[(2)]);
var state_9391__$1 = state_9391;
var statearr_9400_9423 = state_9391__$1;
(statearr_9400_9423[(2)] = inst_9381);

(statearr_9400_9423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (9))){
var state_9391__$1 = state_9391;
var statearr_9401_9424 = state_9391__$1;
(statearr_9401_9424[(2)] = null);

(statearr_9401_9424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (5))){
var inst_9376 = cljs.core.async.close_BANG_.call(null,out);
var state_9391__$1 = state_9391;
var statearr_9402_9425 = state_9391__$1;
(statearr_9402_9425[(2)] = inst_9376);

(statearr_9402_9425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (10))){
var inst_9384 = (state_9391[(2)]);
var state_9391__$1 = (function (){var statearr_9403 = state_9391;
(statearr_9403[(8)] = inst_9384);

return statearr_9403;
})();
var statearr_9404_9426 = state_9391__$1;
(statearr_9404_9426[(2)] = null);

(statearr_9404_9426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9392 === (8))){
var inst_9373 = (state_9391[(7)]);
var state_9391__$1 = state_9391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9391__$1,(11),out,inst_9373);
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
}
}
});})(c__7166__auto___9416,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9416,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9408 = [null,null,null,null,null,null,null,null,null];
(statearr_9408[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9408[(1)] = (1));

return statearr_9408;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9391){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9409){if((e9409 instanceof Object)){
var ex__7058__auto__ = e9409;
var statearr_9410_9427 = state_9391;
(statearr_9410_9427[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9428 = state_9391;
state_9391 = G__9428;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9416,out))
})();
var state__7168__auto__ = (function (){var statearr_9411 = f__7167__auto__.call(null);
(statearr_9411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9416);

return statearr_9411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9416,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9429 = [];
var len__5726__auto___9432 = arguments.length;
var i__5727__auto___9433 = (0);
while(true){
if((i__5727__auto___9433 < len__5726__auto___9432)){
args9429.push((arguments[i__5727__auto___9433]));

var G__9434 = (i__5727__auto___9433 + (1));
i__5727__auto___9433 = G__9434;
continue;
} else {
}
break;
}

var G__9431 = args9429.length;
switch (G__9431) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9429.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7166__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto__){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto__){
return (function (state_9601){
var state_val_9602 = (state_9601[(1)]);
if((state_val_9602 === (7))){
var inst_9597 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
var statearr_9603_9644 = state_9601__$1;
(statearr_9603_9644[(2)] = inst_9597);

(statearr_9603_9644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (20))){
var inst_9567 = (state_9601[(7)]);
var inst_9578 = (state_9601[(2)]);
var inst_9579 = cljs.core.next.call(null,inst_9567);
var inst_9553 = inst_9579;
var inst_9554 = null;
var inst_9555 = (0);
var inst_9556 = (0);
var state_9601__$1 = (function (){var statearr_9604 = state_9601;
(statearr_9604[(8)] = inst_9578);

(statearr_9604[(9)] = inst_9555);

(statearr_9604[(10)] = inst_9554);

(statearr_9604[(11)] = inst_9553);

(statearr_9604[(12)] = inst_9556);

return statearr_9604;
})();
var statearr_9605_9645 = state_9601__$1;
(statearr_9605_9645[(2)] = null);

(statearr_9605_9645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (1))){
var state_9601__$1 = state_9601;
var statearr_9606_9646 = state_9601__$1;
(statearr_9606_9646[(2)] = null);

(statearr_9606_9646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (4))){
var inst_9542 = (state_9601[(13)]);
var inst_9542__$1 = (state_9601[(2)]);
var inst_9543 = (inst_9542__$1 == null);
var state_9601__$1 = (function (){var statearr_9607 = state_9601;
(statearr_9607[(13)] = inst_9542__$1);

return statearr_9607;
})();
if(cljs.core.truth_(inst_9543)){
var statearr_9608_9647 = state_9601__$1;
(statearr_9608_9647[(1)] = (5));

} else {
var statearr_9609_9648 = state_9601__$1;
(statearr_9609_9648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (15))){
var state_9601__$1 = state_9601;
var statearr_9613_9649 = state_9601__$1;
(statearr_9613_9649[(2)] = null);

(statearr_9613_9649[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (21))){
var state_9601__$1 = state_9601;
var statearr_9614_9650 = state_9601__$1;
(statearr_9614_9650[(2)] = null);

(statearr_9614_9650[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (13))){
var inst_9555 = (state_9601[(9)]);
var inst_9554 = (state_9601[(10)]);
var inst_9553 = (state_9601[(11)]);
var inst_9556 = (state_9601[(12)]);
var inst_9563 = (state_9601[(2)]);
var inst_9564 = (inst_9556 + (1));
var tmp9610 = inst_9555;
var tmp9611 = inst_9554;
var tmp9612 = inst_9553;
var inst_9553__$1 = tmp9612;
var inst_9554__$1 = tmp9611;
var inst_9555__$1 = tmp9610;
var inst_9556__$1 = inst_9564;
var state_9601__$1 = (function (){var statearr_9615 = state_9601;
(statearr_9615[(9)] = inst_9555__$1);

(statearr_9615[(14)] = inst_9563);

(statearr_9615[(10)] = inst_9554__$1);

(statearr_9615[(11)] = inst_9553__$1);

(statearr_9615[(12)] = inst_9556__$1);

return statearr_9615;
})();
var statearr_9616_9651 = state_9601__$1;
(statearr_9616_9651[(2)] = null);

(statearr_9616_9651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (22))){
var state_9601__$1 = state_9601;
var statearr_9617_9652 = state_9601__$1;
(statearr_9617_9652[(2)] = null);

(statearr_9617_9652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (6))){
var inst_9542 = (state_9601[(13)]);
var inst_9551 = f.call(null,inst_9542);
var inst_9552 = cljs.core.seq.call(null,inst_9551);
var inst_9553 = inst_9552;
var inst_9554 = null;
var inst_9555 = (0);
var inst_9556 = (0);
var state_9601__$1 = (function (){var statearr_9618 = state_9601;
(statearr_9618[(9)] = inst_9555);

(statearr_9618[(10)] = inst_9554);

(statearr_9618[(11)] = inst_9553);

(statearr_9618[(12)] = inst_9556);

return statearr_9618;
})();
var statearr_9619_9653 = state_9601__$1;
(statearr_9619_9653[(2)] = null);

(statearr_9619_9653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (17))){
var inst_9567 = (state_9601[(7)]);
var inst_9571 = cljs.core.chunk_first.call(null,inst_9567);
var inst_9572 = cljs.core.chunk_rest.call(null,inst_9567);
var inst_9573 = cljs.core.count.call(null,inst_9571);
var inst_9553 = inst_9572;
var inst_9554 = inst_9571;
var inst_9555 = inst_9573;
var inst_9556 = (0);
var state_9601__$1 = (function (){var statearr_9620 = state_9601;
(statearr_9620[(9)] = inst_9555);

(statearr_9620[(10)] = inst_9554);

(statearr_9620[(11)] = inst_9553);

(statearr_9620[(12)] = inst_9556);

return statearr_9620;
})();
var statearr_9621_9654 = state_9601__$1;
(statearr_9621_9654[(2)] = null);

(statearr_9621_9654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (3))){
var inst_9599 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9601__$1,inst_9599);
} else {
if((state_val_9602 === (12))){
var inst_9587 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
var statearr_9622_9655 = state_9601__$1;
(statearr_9622_9655[(2)] = inst_9587);

(statearr_9622_9655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (2))){
var state_9601__$1 = state_9601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9601__$1,(4),in$);
} else {
if((state_val_9602 === (23))){
var inst_9595 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
var statearr_9623_9656 = state_9601__$1;
(statearr_9623_9656[(2)] = inst_9595);

(statearr_9623_9656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (19))){
var inst_9582 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
var statearr_9624_9657 = state_9601__$1;
(statearr_9624_9657[(2)] = inst_9582);

(statearr_9624_9657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (11))){
var inst_9567 = (state_9601[(7)]);
var inst_9553 = (state_9601[(11)]);
var inst_9567__$1 = cljs.core.seq.call(null,inst_9553);
var state_9601__$1 = (function (){var statearr_9625 = state_9601;
(statearr_9625[(7)] = inst_9567__$1);

return statearr_9625;
})();
if(inst_9567__$1){
var statearr_9626_9658 = state_9601__$1;
(statearr_9626_9658[(1)] = (14));

} else {
var statearr_9627_9659 = state_9601__$1;
(statearr_9627_9659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (9))){
var inst_9589 = (state_9601[(2)]);
var inst_9590 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9601__$1 = (function (){var statearr_9628 = state_9601;
(statearr_9628[(15)] = inst_9589);

return statearr_9628;
})();
if(cljs.core.truth_(inst_9590)){
var statearr_9629_9660 = state_9601__$1;
(statearr_9629_9660[(1)] = (21));

} else {
var statearr_9630_9661 = state_9601__$1;
(statearr_9630_9661[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (5))){
var inst_9545 = cljs.core.async.close_BANG_.call(null,out);
var state_9601__$1 = state_9601;
var statearr_9631_9662 = state_9601__$1;
(statearr_9631_9662[(2)] = inst_9545);

(statearr_9631_9662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (14))){
var inst_9567 = (state_9601[(7)]);
var inst_9569 = cljs.core.chunked_seq_QMARK_.call(null,inst_9567);
var state_9601__$1 = state_9601;
if(inst_9569){
var statearr_9632_9663 = state_9601__$1;
(statearr_9632_9663[(1)] = (17));

} else {
var statearr_9633_9664 = state_9601__$1;
(statearr_9633_9664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (16))){
var inst_9585 = (state_9601[(2)]);
var state_9601__$1 = state_9601;
var statearr_9634_9665 = state_9601__$1;
(statearr_9634_9665[(2)] = inst_9585);

(statearr_9634_9665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9602 === (10))){
var inst_9554 = (state_9601[(10)]);
var inst_9556 = (state_9601[(12)]);
var inst_9561 = cljs.core._nth.call(null,inst_9554,inst_9556);
var state_9601__$1 = state_9601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9601__$1,(13),out,inst_9561);
} else {
if((state_val_9602 === (18))){
var inst_9567 = (state_9601[(7)]);
var inst_9576 = cljs.core.first.call(null,inst_9567);
var state_9601__$1 = state_9601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9601__$1,(20),out,inst_9576);
} else {
if((state_val_9602 === (8))){
var inst_9555 = (state_9601[(9)]);
var inst_9556 = (state_9601[(12)]);
var inst_9558 = (inst_9556 < inst_9555);
var inst_9559 = inst_9558;
var state_9601__$1 = state_9601;
if(cljs.core.truth_(inst_9559)){
var statearr_9635_9666 = state_9601__$1;
(statearr_9635_9666[(1)] = (10));

} else {
var statearr_9636_9667 = state_9601__$1;
(statearr_9636_9667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7166__auto__))
;
return ((function (switch__7054__auto__,c__7166__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____0 = (function (){
var statearr_9640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9640[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__);

(statearr_9640[(1)] = (1));

return statearr_9640;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____1 = (function (state_9601){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9641){if((e9641 instanceof Object)){
var ex__7058__auto__ = e9641;
var statearr_9642_9668 = state_9601;
(statearr_9642_9668[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9669 = state_9601;
state_9601 = G__9669;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__ = function(state_9601){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____1.call(this,state_9601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7055__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto__))
})();
var state__7168__auto__ = (function (){var statearr_9643 = f__7167__auto__.call(null);
(statearr_9643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto__);

return statearr_9643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto__))
);

return c__7166__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9670 = [];
var len__5726__auto___9673 = arguments.length;
var i__5727__auto___9674 = (0);
while(true){
if((i__5727__auto___9674 < len__5726__auto___9673)){
args9670.push((arguments[i__5727__auto___9674]));

var G__9675 = (i__5727__auto___9674 + (1));
i__5727__auto___9674 = G__9675;
continue;
} else {
}
break;
}

var G__9672 = args9670.length;
switch (G__9672) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9670.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9677 = [];
var len__5726__auto___9680 = arguments.length;
var i__5727__auto___9681 = (0);
while(true){
if((i__5727__auto___9681 < len__5726__auto___9680)){
args9677.push((arguments[i__5727__auto___9681]));

var G__9682 = (i__5727__auto___9681 + (1));
i__5727__auto___9681 = G__9682;
continue;
} else {
}
break;
}

var G__9679 = args9677.length;
switch (G__9679) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9677.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9684 = [];
var len__5726__auto___9735 = arguments.length;
var i__5727__auto___9736 = (0);
while(true){
if((i__5727__auto___9736 < len__5726__auto___9735)){
args9684.push((arguments[i__5727__auto___9736]));

var G__9737 = (i__5727__auto___9736 + (1));
i__5727__auto___9736 = G__9737;
continue;
} else {
}
break;
}

var G__9686 = args9684.length;
switch (G__9686) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9684.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9739,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9739,out){
return (function (state_9710){
var state_val_9711 = (state_9710[(1)]);
if((state_val_9711 === (7))){
var inst_9705 = (state_9710[(2)]);
var state_9710__$1 = state_9710;
var statearr_9712_9740 = state_9710__$1;
(statearr_9712_9740[(2)] = inst_9705);

(statearr_9712_9740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (1))){
var inst_9687 = null;
var state_9710__$1 = (function (){var statearr_9713 = state_9710;
(statearr_9713[(7)] = inst_9687);

return statearr_9713;
})();
var statearr_9714_9741 = state_9710__$1;
(statearr_9714_9741[(2)] = null);

(statearr_9714_9741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (4))){
var inst_9690 = (state_9710[(8)]);
var inst_9690__$1 = (state_9710[(2)]);
var inst_9691 = (inst_9690__$1 == null);
var inst_9692 = cljs.core.not.call(null,inst_9691);
var state_9710__$1 = (function (){var statearr_9715 = state_9710;
(statearr_9715[(8)] = inst_9690__$1);

return statearr_9715;
})();
if(inst_9692){
var statearr_9716_9742 = state_9710__$1;
(statearr_9716_9742[(1)] = (5));

} else {
var statearr_9717_9743 = state_9710__$1;
(statearr_9717_9743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (6))){
var state_9710__$1 = state_9710;
var statearr_9718_9744 = state_9710__$1;
(statearr_9718_9744[(2)] = null);

(statearr_9718_9744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (3))){
var inst_9707 = (state_9710[(2)]);
var inst_9708 = cljs.core.async.close_BANG_.call(null,out);
var state_9710__$1 = (function (){var statearr_9719 = state_9710;
(statearr_9719[(9)] = inst_9707);

return statearr_9719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9710__$1,inst_9708);
} else {
if((state_val_9711 === (2))){
var state_9710__$1 = state_9710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9710__$1,(4),ch);
} else {
if((state_val_9711 === (11))){
var inst_9690 = (state_9710[(8)]);
var inst_9699 = (state_9710[(2)]);
var inst_9687 = inst_9690;
var state_9710__$1 = (function (){var statearr_9720 = state_9710;
(statearr_9720[(7)] = inst_9687);

(statearr_9720[(10)] = inst_9699);

return statearr_9720;
})();
var statearr_9721_9745 = state_9710__$1;
(statearr_9721_9745[(2)] = null);

(statearr_9721_9745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (9))){
var inst_9690 = (state_9710[(8)]);
var state_9710__$1 = state_9710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9710__$1,(11),out,inst_9690);
} else {
if((state_val_9711 === (5))){
var inst_9687 = (state_9710[(7)]);
var inst_9690 = (state_9710[(8)]);
var inst_9694 = cljs.core._EQ_.call(null,inst_9690,inst_9687);
var state_9710__$1 = state_9710;
if(inst_9694){
var statearr_9723_9746 = state_9710__$1;
(statearr_9723_9746[(1)] = (8));

} else {
var statearr_9724_9747 = state_9710__$1;
(statearr_9724_9747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (10))){
var inst_9702 = (state_9710[(2)]);
var state_9710__$1 = state_9710;
var statearr_9725_9748 = state_9710__$1;
(statearr_9725_9748[(2)] = inst_9702);

(statearr_9725_9748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9711 === (8))){
var inst_9687 = (state_9710[(7)]);
var tmp9722 = inst_9687;
var inst_9687__$1 = tmp9722;
var state_9710__$1 = (function (){var statearr_9726 = state_9710;
(statearr_9726[(7)] = inst_9687__$1);

return statearr_9726;
})();
var statearr_9727_9749 = state_9710__$1;
(statearr_9727_9749[(2)] = null);

(statearr_9727_9749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__7166__auto___9739,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9739,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9731 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9731[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9731[(1)] = (1));

return statearr_9731;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9710){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9732){if((e9732 instanceof Object)){
var ex__7058__auto__ = e9732;
var statearr_9733_9750 = state_9710;
(statearr_9733_9750[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9751 = state_9710;
state_9710 = G__9751;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9739,out))
})();
var state__7168__auto__ = (function (){var statearr_9734 = f__7167__auto__.call(null);
(statearr_9734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9739);

return statearr_9734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9739,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9752 = [];
var len__5726__auto___9822 = arguments.length;
var i__5727__auto___9823 = (0);
while(true){
if((i__5727__auto___9823 < len__5726__auto___9822)){
args9752.push((arguments[i__5727__auto___9823]));

var G__9824 = (i__5727__auto___9823 + (1));
i__5727__auto___9823 = G__9824;
continue;
} else {
}
break;
}

var G__9754 = args9752.length;
switch (G__9754) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9752.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9826,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9826,out){
return (function (state_9792){
var state_val_9793 = (state_9792[(1)]);
if((state_val_9793 === (7))){
var inst_9788 = (state_9792[(2)]);
var state_9792__$1 = state_9792;
var statearr_9794_9827 = state_9792__$1;
(statearr_9794_9827[(2)] = inst_9788);

(statearr_9794_9827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (1))){
var inst_9755 = (new Array(n));
var inst_9756 = inst_9755;
var inst_9757 = (0);
var state_9792__$1 = (function (){var statearr_9795 = state_9792;
(statearr_9795[(7)] = inst_9757);

(statearr_9795[(8)] = inst_9756);

return statearr_9795;
})();
var statearr_9796_9828 = state_9792__$1;
(statearr_9796_9828[(2)] = null);

(statearr_9796_9828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (4))){
var inst_9760 = (state_9792[(9)]);
var inst_9760__$1 = (state_9792[(2)]);
var inst_9761 = (inst_9760__$1 == null);
var inst_9762 = cljs.core.not.call(null,inst_9761);
var state_9792__$1 = (function (){var statearr_9797 = state_9792;
(statearr_9797[(9)] = inst_9760__$1);

return statearr_9797;
})();
if(inst_9762){
var statearr_9798_9829 = state_9792__$1;
(statearr_9798_9829[(1)] = (5));

} else {
var statearr_9799_9830 = state_9792__$1;
(statearr_9799_9830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (15))){
var inst_9782 = (state_9792[(2)]);
var state_9792__$1 = state_9792;
var statearr_9800_9831 = state_9792__$1;
(statearr_9800_9831[(2)] = inst_9782);

(statearr_9800_9831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (13))){
var state_9792__$1 = state_9792;
var statearr_9801_9832 = state_9792__$1;
(statearr_9801_9832[(2)] = null);

(statearr_9801_9832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (6))){
var inst_9757 = (state_9792[(7)]);
var inst_9778 = (inst_9757 > (0));
var state_9792__$1 = state_9792;
if(cljs.core.truth_(inst_9778)){
var statearr_9802_9833 = state_9792__$1;
(statearr_9802_9833[(1)] = (12));

} else {
var statearr_9803_9834 = state_9792__$1;
(statearr_9803_9834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (3))){
var inst_9790 = (state_9792[(2)]);
var state_9792__$1 = state_9792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9792__$1,inst_9790);
} else {
if((state_val_9793 === (12))){
var inst_9756 = (state_9792[(8)]);
var inst_9780 = cljs.core.vec.call(null,inst_9756);
var state_9792__$1 = state_9792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9792__$1,(15),out,inst_9780);
} else {
if((state_val_9793 === (2))){
var state_9792__$1 = state_9792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9792__$1,(4),ch);
} else {
if((state_val_9793 === (11))){
var inst_9772 = (state_9792[(2)]);
var inst_9773 = (new Array(n));
var inst_9756 = inst_9773;
var inst_9757 = (0);
var state_9792__$1 = (function (){var statearr_9804 = state_9792;
(statearr_9804[(7)] = inst_9757);

(statearr_9804[(8)] = inst_9756);

(statearr_9804[(10)] = inst_9772);

return statearr_9804;
})();
var statearr_9805_9835 = state_9792__$1;
(statearr_9805_9835[(2)] = null);

(statearr_9805_9835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (9))){
var inst_9756 = (state_9792[(8)]);
var inst_9770 = cljs.core.vec.call(null,inst_9756);
var state_9792__$1 = state_9792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9792__$1,(11),out,inst_9770);
} else {
if((state_val_9793 === (5))){
var inst_9757 = (state_9792[(7)]);
var inst_9756 = (state_9792[(8)]);
var inst_9765 = (state_9792[(11)]);
var inst_9760 = (state_9792[(9)]);
var inst_9764 = (inst_9756[inst_9757] = inst_9760);
var inst_9765__$1 = (inst_9757 + (1));
var inst_9766 = (inst_9765__$1 < n);
var state_9792__$1 = (function (){var statearr_9806 = state_9792;
(statearr_9806[(12)] = inst_9764);

(statearr_9806[(11)] = inst_9765__$1);

return statearr_9806;
})();
if(cljs.core.truth_(inst_9766)){
var statearr_9807_9836 = state_9792__$1;
(statearr_9807_9836[(1)] = (8));

} else {
var statearr_9808_9837 = state_9792__$1;
(statearr_9808_9837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (14))){
var inst_9785 = (state_9792[(2)]);
var inst_9786 = cljs.core.async.close_BANG_.call(null,out);
var state_9792__$1 = (function (){var statearr_9810 = state_9792;
(statearr_9810[(13)] = inst_9785);

return statearr_9810;
})();
var statearr_9811_9838 = state_9792__$1;
(statearr_9811_9838[(2)] = inst_9786);

(statearr_9811_9838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (10))){
var inst_9776 = (state_9792[(2)]);
var state_9792__$1 = state_9792;
var statearr_9812_9839 = state_9792__$1;
(statearr_9812_9839[(2)] = inst_9776);

(statearr_9812_9839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9793 === (8))){
var inst_9756 = (state_9792[(8)]);
var inst_9765 = (state_9792[(11)]);
var tmp9809 = inst_9756;
var inst_9756__$1 = tmp9809;
var inst_9757 = inst_9765;
var state_9792__$1 = (function (){var statearr_9813 = state_9792;
(statearr_9813[(7)] = inst_9757);

(statearr_9813[(8)] = inst_9756__$1);

return statearr_9813;
})();
var statearr_9814_9840 = state_9792__$1;
(statearr_9814_9840[(2)] = null);

(statearr_9814_9840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__7166__auto___9826,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9826,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9818[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9818[(1)] = (1));

return statearr_9818;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9792){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9819){if((e9819 instanceof Object)){
var ex__7058__auto__ = e9819;
var statearr_9820_9841 = state_9792;
(statearr_9820_9841[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9842 = state_9792;
state_9792 = G__9842;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9826,out))
})();
var state__7168__auto__ = (function (){var statearr_9821 = f__7167__auto__.call(null);
(statearr_9821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9826);

return statearr_9821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9826,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9843 = [];
var len__5726__auto___9917 = arguments.length;
var i__5727__auto___9918 = (0);
while(true){
if((i__5727__auto___9918 < len__5726__auto___9917)){
args9843.push((arguments[i__5727__auto___9918]));

var G__9919 = (i__5727__auto___9918 + (1));
i__5727__auto___9918 = G__9919;
continue;
} else {
}
break;
}

var G__9845 = args9843.length;
switch (G__9845) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9843.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7166__auto___9921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7166__auto___9921,out){
return (function (){
var f__7167__auto__ = (function (){var switch__7054__auto__ = ((function (c__7166__auto___9921,out){
return (function (state_9887){
var state_val_9888 = (state_9887[(1)]);
if((state_val_9888 === (7))){
var inst_9883 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9889_9922 = state_9887__$1;
(statearr_9889_9922[(2)] = inst_9883);

(statearr_9889_9922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (1))){
var inst_9846 = [];
var inst_9847 = inst_9846;
var inst_9848 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9887__$1 = (function (){var statearr_9890 = state_9887;
(statearr_9890[(7)] = inst_9847);

(statearr_9890[(8)] = inst_9848);

return statearr_9890;
})();
var statearr_9891_9923 = state_9887__$1;
(statearr_9891_9923[(2)] = null);

(statearr_9891_9923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (4))){
var inst_9851 = (state_9887[(9)]);
var inst_9851__$1 = (state_9887[(2)]);
var inst_9852 = (inst_9851__$1 == null);
var inst_9853 = cljs.core.not.call(null,inst_9852);
var state_9887__$1 = (function (){var statearr_9892 = state_9887;
(statearr_9892[(9)] = inst_9851__$1);

return statearr_9892;
})();
if(inst_9853){
var statearr_9893_9924 = state_9887__$1;
(statearr_9893_9924[(1)] = (5));

} else {
var statearr_9894_9925 = state_9887__$1;
(statearr_9894_9925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (15))){
var inst_9877 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9895_9926 = state_9887__$1;
(statearr_9895_9926[(2)] = inst_9877);

(statearr_9895_9926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (13))){
var state_9887__$1 = state_9887;
var statearr_9896_9927 = state_9887__$1;
(statearr_9896_9927[(2)] = null);

(statearr_9896_9927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (6))){
var inst_9847 = (state_9887[(7)]);
var inst_9872 = inst_9847.length;
var inst_9873 = (inst_9872 > (0));
var state_9887__$1 = state_9887;
if(cljs.core.truth_(inst_9873)){
var statearr_9897_9928 = state_9887__$1;
(statearr_9897_9928[(1)] = (12));

} else {
var statearr_9898_9929 = state_9887__$1;
(statearr_9898_9929[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (3))){
var inst_9885 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9887__$1,inst_9885);
} else {
if((state_val_9888 === (12))){
var inst_9847 = (state_9887[(7)]);
var inst_9875 = cljs.core.vec.call(null,inst_9847);
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9887__$1,(15),out,inst_9875);
} else {
if((state_val_9888 === (2))){
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9887__$1,(4),ch);
} else {
if((state_val_9888 === (11))){
var inst_9855 = (state_9887[(10)]);
var inst_9851 = (state_9887[(9)]);
var inst_9865 = (state_9887[(2)]);
var inst_9866 = [];
var inst_9867 = inst_9866.push(inst_9851);
var inst_9847 = inst_9866;
var inst_9848 = inst_9855;
var state_9887__$1 = (function (){var statearr_9899 = state_9887;
(statearr_9899[(7)] = inst_9847);

(statearr_9899[(11)] = inst_9865);

(statearr_9899[(12)] = inst_9867);

(statearr_9899[(8)] = inst_9848);

return statearr_9899;
})();
var statearr_9900_9930 = state_9887__$1;
(statearr_9900_9930[(2)] = null);

(statearr_9900_9930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (9))){
var inst_9847 = (state_9887[(7)]);
var inst_9863 = cljs.core.vec.call(null,inst_9847);
var state_9887__$1 = state_9887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9887__$1,(11),out,inst_9863);
} else {
if((state_val_9888 === (5))){
var inst_9855 = (state_9887[(10)]);
var inst_9848 = (state_9887[(8)]);
var inst_9851 = (state_9887[(9)]);
var inst_9855__$1 = f.call(null,inst_9851);
var inst_9856 = cljs.core._EQ_.call(null,inst_9855__$1,inst_9848);
var inst_9857 = cljs.core.keyword_identical_QMARK_.call(null,inst_9848,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9858 = (inst_9856) || (inst_9857);
var state_9887__$1 = (function (){var statearr_9901 = state_9887;
(statearr_9901[(10)] = inst_9855__$1);

return statearr_9901;
})();
if(cljs.core.truth_(inst_9858)){
var statearr_9902_9931 = state_9887__$1;
(statearr_9902_9931[(1)] = (8));

} else {
var statearr_9903_9932 = state_9887__$1;
(statearr_9903_9932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (14))){
var inst_9880 = (state_9887[(2)]);
var inst_9881 = cljs.core.async.close_BANG_.call(null,out);
var state_9887__$1 = (function (){var statearr_9905 = state_9887;
(statearr_9905[(13)] = inst_9880);

return statearr_9905;
})();
var statearr_9906_9933 = state_9887__$1;
(statearr_9906_9933[(2)] = inst_9881);

(statearr_9906_9933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (10))){
var inst_9870 = (state_9887[(2)]);
var state_9887__$1 = state_9887;
var statearr_9907_9934 = state_9887__$1;
(statearr_9907_9934[(2)] = inst_9870);

(statearr_9907_9934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9888 === (8))){
var inst_9847 = (state_9887[(7)]);
var inst_9855 = (state_9887[(10)]);
var inst_9851 = (state_9887[(9)]);
var inst_9860 = inst_9847.push(inst_9851);
var tmp9904 = inst_9847;
var inst_9847__$1 = tmp9904;
var inst_9848 = inst_9855;
var state_9887__$1 = (function (){var statearr_9908 = state_9887;
(statearr_9908[(14)] = inst_9860);

(statearr_9908[(7)] = inst_9847__$1);

(statearr_9908[(8)] = inst_9848);

return statearr_9908;
})();
var statearr_9909_9935 = state_9887__$1;
(statearr_9909_9935[(2)] = null);

(statearr_9909_9935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__7166__auto___9921,out))
;
return ((function (switch__7054__auto__,c__7166__auto___9921,out){
return (function() {
var cljs$core$async$state_machine__7055__auto__ = null;
var cljs$core$async$state_machine__7055__auto____0 = (function (){
var statearr_9913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9913[(0)] = cljs$core$async$state_machine__7055__auto__);

(statearr_9913[(1)] = (1));

return statearr_9913;
});
var cljs$core$async$state_machine__7055__auto____1 = (function (state_9887){
while(true){
var ret_value__7056__auto__ = (function (){try{while(true){
var result__7057__auto__ = switch__7054__auto__.call(null,state_9887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7057__auto__;
}
break;
}
}catch (e9914){if((e9914 instanceof Object)){
var ex__7058__auto__ = e9914;
var statearr_9915_9936 = state_9887;
(statearr_9915_9936[(5)] = ex__7058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9937 = state_9887;
state_9887 = G__9937;
continue;
} else {
return ret_value__7056__auto__;
}
break;
}
});
cljs$core$async$state_machine__7055__auto__ = function(state_9887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7055__auto____1.call(this,state_9887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7055__auto____0;
cljs$core$async$state_machine__7055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7055__auto____1;
return cljs$core$async$state_machine__7055__auto__;
})()
;})(switch__7054__auto__,c__7166__auto___9921,out))
})();
var state__7168__auto__ = (function (){var statearr_9916 = f__7167__auto__.call(null);
(statearr_9916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7166__auto___9921);

return statearr_9916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7168__auto__);
});})(c__7166__auto___9921,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451363038906