// Compiled by ClojureScript 0.0-2665 {}
goog.provide('minesweep.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_();
minesweep.core.log = (function log(x){
return console.log(x);
});
minesweep.core.doc = document;
minesweep.core.tilesize = (20);
minesweep.core.gridsize = (20);
minesweep.core.border = (3);
minesweep.core.maxmines = (45);
minesweep.core.bombs = (function (){var G__9706 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9706) : cljs.core.atom.call(null,G__9706));
})();
minesweep.core.by_id = (function() {
var by_id = null;
var by_id__1 = (function (id){
return by_id.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,id);
});
var by_id__2 = (function (elem,id){
return elem.getElementById(cljs.core.name(id));
});
by_id = function(elem,id){
switch(arguments.length){
case 1:
return by_id__1.call(this,elem);
case 2:
return by_id__2.call(this,elem,id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_id.cljs$core$IFn$_invoke$arity$1 = by_id__1;
by_id.cljs$core$IFn$_invoke$arity$2 = by_id__2;
return by_id;
})()
;
minesweep.core.by_class = (function() {
var by_class = null;
var by_class__1 = (function (class$){
return by_class.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,class$);
});
var by_class__2 = (function (elem,class$){
return elem.getElementsByClassName(cljs.core.name(class$));
});
by_class = function(elem,class$){
switch(arguments.length){
case 1:
return by_class__1.call(this,elem);
case 2:
return by_class__2.call(this,elem,class$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_class.cljs$core$IFn$_invoke$arity$1 = by_class__1;
by_class.cljs$core$IFn$_invoke$arity$2 = by_class__2;
return by_class;
})()
;
minesweep.core.by_tag = (function() {
var by_tag = null;
var by_tag__1 = (function (tag){
return by_tag.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,tag);
});
var by_tag__2 = (function (elem,tag){
return elem.getElementsByTagName(cljs.core.name(tag));
});
by_tag = function(elem,tag){
switch(arguments.length){
case 1:
return by_tag__1.call(this,elem);
case 2:
return by_tag__2.call(this,elem,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_tag.cljs$core$IFn$_invoke$arity$1 = by_tag__1;
by_tag.cljs$core$IFn$_invoke$arity$2 = by_tag__2;
return by_tag;
})()
;
minesweep.core.keytoprop = (function keytoprop(key){
var key__$1 = (function (){var G__9719 = cljs.core.name(key);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9719) : cljs.core.atom.call(null,G__9719));
})();
var n__4628__auto___9725 = cljs.core.count(cljs.core.re_seq(/-\w/,(function (){var G__9720 = key__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9720) : cljs.core.deref.call(null,G__9720));
})()));
var i_9726 = (0);
while(true){
if((i_9726 < n__4628__auto___9725)){
var G__9721_9727 = key__$1;
var G__9722_9728 = (function (){var G__9723 = key__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9723) : cljs.core.deref.call(null,G__9723));
})().replace(/-\w/,((function (i_9726,G__9721_9727,n__4628__auto___9725,key__$1){
return (function (x){
return cljs.core.second(x.toUpperCase());
});})(i_9726,G__9721_9727,n__4628__auto___9725,key__$1))
);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9721_9727,G__9722_9728) : cljs.core.reset_BANG_.call(null,G__9721_9727,G__9722_9728));

var G__9729 = (i_9726 + (1));
i_9726 = G__9729;
continue;
} else {
}
break;
}

var G__9724 = key__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9724) : cljs.core.deref.call(null,G__9724));
});
minesweep.core.setstyles = (function setstyles(elem,data){
var seq__9736 = cljs.core.seq(data);
var chunk__9737 = null;
var count__9738 = (0);
var i__9739 = (0);
while(true){
if((i__9739 < count__9738)){
var vec__9740 = chunk__9737.cljs$core$IIndexed$_nth$arity$2(null,i__9739);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740,(1),null);
(elem.style[minesweep.core.keytoprop(k)] = v);

var G__9742 = seq__9736;
var G__9743 = chunk__9737;
var G__9744 = count__9738;
var G__9745 = (i__9739 + (1));
seq__9736 = G__9742;
chunk__9737 = G__9743;
count__9738 = G__9744;
i__9739 = G__9745;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__9736);
if(temp__4126__auto__){
var seq__9736__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9736__$1)){
var c__4528__auto__ = cljs.core.chunk_first(seq__9736__$1);
var G__9746 = cljs.core.chunk_rest(seq__9736__$1);
var G__9747 = c__4528__auto__;
var G__9748 = cljs.core.count(c__4528__auto__);
var G__9749 = (0);
seq__9736 = G__9746;
chunk__9737 = G__9747;
count__9738 = G__9748;
i__9739 = G__9749;
continue;
} else {
var vec__9741 = cljs.core.first(seq__9736__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9741,(1),null);
(elem.style[minesweep.core.keytoprop(k)] = v);

var G__9750 = cljs.core.next(seq__9736__$1);
var G__9751 = null;
var G__9752 = (0);
var G__9753 = (0);
seq__9736 = G__9750;
chunk__9737 = G__9751;
count__9738 = G__9752;
i__9739 = G__9753;
continue;
}
} else {
return null;
}
}
break;
}
});
minesweep.core.setattrs = (function setattrs(elem,data){
var seq__9760 = cljs.core.seq(data);
var chunk__9761 = null;
var count__9762 = (0);
var i__9763 = (0);
while(true){
if((i__9763 < count__9762)){
var vec__9764 = chunk__9761.cljs$core$IIndexed$_nth$arity$2(null,i__9763);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764,(1),null);
elem.setAttribute(minesweep.core.keytoprop(k),v);

var G__9766 = seq__9760;
var G__9767 = chunk__9761;
var G__9768 = count__9762;
var G__9769 = (i__9763 + (1));
seq__9760 = G__9766;
chunk__9761 = G__9767;
count__9762 = G__9768;
i__9763 = G__9769;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__9760);
if(temp__4126__auto__){
var seq__9760__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9760__$1)){
var c__4528__auto__ = cljs.core.chunk_first(seq__9760__$1);
var G__9770 = cljs.core.chunk_rest(seq__9760__$1);
var G__9771 = c__4528__auto__;
var G__9772 = cljs.core.count(c__4528__auto__);
var G__9773 = (0);
seq__9760 = G__9770;
chunk__9761 = G__9771;
count__9762 = G__9772;
i__9763 = G__9773;
continue;
} else {
var vec__9765 = cljs.core.first(seq__9760__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9765,(1),null);
elem.setAttribute(minesweep.core.keytoprop(k),v);

var G__9774 = cljs.core.next(seq__9760__$1);
var G__9775 = null;
var G__9776 = (0);
var G__9777 = (0);
seq__9760 = G__9774;
chunk__9761 = G__9775;
count__9762 = G__9776;
i__9763 = G__9777;
continue;
}
} else {
return null;
}
}
break;
}
});
minesweep.core.board = minesweep.core.by_id.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$22);
minesweep.core.alltiles = minesweep.core.by_tag.cljs$core$IFn$_invoke$arity$2(minesweep.core.board,cljs.core.constant$keyword$23);
minesweep.core.boardsettings = (function boardsettings(){
return minesweep.core.setstyles(minesweep.core.board,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,(minesweep.core.gridsize * (minesweep.core.tilesize + ((2) * minesweep.core.border))),cljs.core.constant$keyword$25,(minesweep.core.gridsize * (minesweep.core.tilesize + ((2) * minesweep.core.border)))], null));
});
minesweep.core.docsettings = (function docsettings(){
return minesweep.core.boardsettings();
});
minesweep.core.createtile = (function createtile(bomb,numb){
var tile = minesweep.core.doc.createElement("p");
minesweep.core.setstyles(tile,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$24,minesweep.core.tilesize,cljs.core.constant$keyword$25,minesweep.core.tilesize,cljs.core.constant$keyword$26,minesweep.core.border], null));

minesweep.core.setattrs(tile,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$27,bomb,cljs.core.constant$keyword$28,numb], null));

(tile["onclick"] = ((function (tile){
return (function (e){
var G__9780 = (e["target"]);
return (minesweep.core.primarycheck.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.primarycheck.cljs$core$IFn$_invoke$arity$1(G__9780) : minesweep.core.primarycheck.call(null,G__9780));
});})(tile))
);

(tile["oncontextmenu"] = ((function (tile){
return (function (e){
e.preventDefault();

var G__9781_9782 = (e["target"]);
(minesweep.core.markflag.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.markflag.cljs$core$IFn$_invoke$arity$1(G__9781_9782) : minesweep.core.markflag.call(null,G__9781_9782));

return false;
});})(tile))
);

return minesweep.core.board.appendChild(tile);
});
minesweep.core.drawgrid = (function drawgrid(){
var n__4628__auto__ = (minesweep.core.gridsize * minesweep.core.gridsize);
var i = (0);
while(true){
if((i < n__4628__auto__)){
minesweep.core.createtile(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__9784 = minesweep.core.bombs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9784) : cljs.core.deref.call(null,G__9784));
})(),i),i);

var G__9785 = (i + (1));
i = G__9785;
continue;
} else {
return null;
}
break;
}
});
minesweep.core.generatebomb = (function generatebomb(){
var empty = ((minesweep.core.gridsize * minesweep.core.gridsize) - minesweep.core.maxmines);
var G__9788 = minesweep.core.bombs;
var G__9789 = cljs.core.seq(cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(minesweep.core.maxmines,(1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(empty,(0)))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9788,G__9789) : cljs.core.reset_BANG_.call(null,G__9788,G__9789));
});
minesweep.core.bombhit = (function bombhit(elem){
var n__4628__auto__ = cljs.core.count((function (){var G__9792 = minesweep.core.bombs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9792) : cljs.core.deref.call(null,G__9792));
})());
var i = (0);
while(true){
if((i < n__4628__auto__)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2((function (){var G__9793 = minesweep.core.bombs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9793) : cljs.core.deref.call(null,G__9793));
})(),i))){
minesweep.core.setattrs((minesweep.core.alltiles[i]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,true], null));
} else {
}

minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$30,true], null));

var G__9794 = (i + (1));
i = G__9794;
continue;
} else {
return null;
}
break;
}
});
minesweep.core.markflag = (function markflag(elem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",elem.getAttribute("flag"))){
return minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,"0"], null));
} else {
return minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$31,"1"], null));
}
});
minesweep.core.markchecked = (function markchecked(elem,value){
minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,true], null));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(0))){
return (elem["textContent"] = value);
} else {
return null;
}
});
minesweep.core.getbombs = (function getbombs(data){
var a = (function (){var G__9801 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9801) : cljs.core.atom.call(null,G__9801));
})();
var seq__9802_9807 = cljs.core.seq(data);
var chunk__9803_9808 = null;
var count__9804_9809 = (0);
var i__9805_9810 = (0);
while(true){
if((i__9805_9810 < count__9804_9809)){
var i_9811 = chunk__9803_9808.cljs$core$IIndexed$_nth$arity$2(null,i__9805_9810);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,((minesweep.core.alltiles[i_9811]).getAttribute("bomb") | (0)));

var G__9812 = seq__9802_9807;
var G__9813 = chunk__9803_9808;
var G__9814 = count__9804_9809;
var G__9815 = (i__9805_9810 + (1));
seq__9802_9807 = G__9812;
chunk__9803_9808 = G__9813;
count__9804_9809 = G__9814;
i__9805_9810 = G__9815;
continue;
} else {
var temp__4126__auto___9816 = cljs.core.seq(seq__9802_9807);
if(temp__4126__auto___9816){
var seq__9802_9817__$1 = temp__4126__auto___9816;
if(cljs.core.chunked_seq_QMARK_(seq__9802_9817__$1)){
var c__4528__auto___9818 = cljs.core.chunk_first(seq__9802_9817__$1);
var G__9819 = cljs.core.chunk_rest(seq__9802_9817__$1);
var G__9820 = c__4528__auto___9818;
var G__9821 = cljs.core.count(c__4528__auto___9818);
var G__9822 = (0);
seq__9802_9807 = G__9819;
chunk__9803_9808 = G__9820;
count__9804_9809 = G__9821;
i__9805_9810 = G__9822;
continue;
} else {
var i_9823 = cljs.core.first(seq__9802_9817__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,((minesweep.core.alltiles[i_9823]).getAttribute("bomb") | (0)));

var G__9824 = cljs.core.next(seq__9802_9817__$1);
var G__9825 = null;
var G__9826 = (0);
var G__9827 = (0);
seq__9802_9807 = G__9824;
chunk__9803_9808 = G__9825;
count__9804_9809 = G__9826;
i__9805_9810 = G__9827;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var G__9806 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9806) : cljs.core.deref.call(null,G__9806));
})());
});
minesweep.core.tertiarycheck = (function tertiarycheck(elem,numb,areas){
if(cljs.core.not(elem.hasAttribute("checked"))){
var value = (function (){var G__9849 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9849) : cljs.core.atom.call(null,G__9849));
})();
var seq__9850_9864 = cljs.core.seq(areas);
var chunk__9851_9865 = null;
var count__9852_9866 = (0);
var i__9853_9867 = (0);
while(true){
if((i__9853_9867 < count__9852_9866)){
var a_9868 = chunk__9851_9865.cljs$core$IIndexed$_nth$arity$2(null,i__9853_9867);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(value,cljs.core.conj,(function (){var G__9854 = (((a_9868 instanceof cljs.core.Keyword))?a_9868.fqn:null);
switch (G__9854) {
case "lr":
return (numb + ((1) + minesweep.core.gridsize));

break;
case "lm":
return (numb + minesweep.core.gridsize);

break;
case "ll":
return (numb + (minesweep.core.gridsize - (1)));

break;
case "mr":
return (numb + (1));

break;
case "ml":
return (numb - (1));

break;
case "tr":
return (numb - (minesweep.core.gridsize - (1)));

break;
case "tm":
return (numb - minesweep.core.gridsize);

break;
case "tl":
return (numb - (minesweep.core.gridsize + (1)));

break;
default:
return null;

}
})());

var G__9870 = seq__9850_9864;
var G__9871 = chunk__9851_9865;
var G__9872 = count__9852_9866;
var G__9873 = (i__9853_9867 + (1));
seq__9850_9864 = G__9870;
chunk__9851_9865 = G__9871;
count__9852_9866 = G__9872;
i__9853_9867 = G__9873;
continue;
} else {
var temp__4126__auto___9874 = cljs.core.seq(seq__9850_9864);
if(temp__4126__auto___9874){
var seq__9850_9875__$1 = temp__4126__auto___9874;
if(cljs.core.chunked_seq_QMARK_(seq__9850_9875__$1)){
var c__4528__auto___9876 = cljs.core.chunk_first(seq__9850_9875__$1);
var G__9877 = cljs.core.chunk_rest(seq__9850_9875__$1);
var G__9878 = c__4528__auto___9876;
var G__9879 = cljs.core.count(c__4528__auto___9876);
var G__9880 = (0);
seq__9850_9864 = G__9877;
chunk__9851_9865 = G__9878;
count__9852_9866 = G__9879;
i__9853_9867 = G__9880;
continue;
} else {
var a_9881 = cljs.core.first(seq__9850_9875__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(value,cljs.core.conj,(function (){var G__9855 = (((a_9881 instanceof cljs.core.Keyword))?a_9881.fqn:null);
switch (G__9855) {
case "lr":
return (numb + ((1) + minesweep.core.gridsize));

break;
case "lm":
return (numb + minesweep.core.gridsize);

break;
case "ll":
return (numb + (minesweep.core.gridsize - (1)));

break;
case "mr":
return (numb + (1));

break;
case "ml":
return (numb - (1));

break;
case "tr":
return (numb - (minesweep.core.gridsize - (1)));

break;
case "tm":
return (numb - minesweep.core.gridsize);

break;
case "tl":
return (numb - (minesweep.core.gridsize + (1)));

break;
default:
return null;

}
})());

var G__9883 = cljs.core.next(seq__9850_9875__$1);
var G__9884 = null;
var G__9885 = (0);
var G__9886 = (0);
seq__9850_9864 = G__9883;
chunk__9851_9865 = G__9884;
count__9852_9866 = G__9885;
i__9853_9867 = G__9886;
continue;
}
} else {
}
}
break;
}

minesweep.core.markchecked(elem,minesweep.core.getbombs((function (){var G__9856 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9856) : cljs.core.deref.call(null,G__9856));
})()));

if(cljs.core.empty_QMARK_((elem["textContent"]))){
var seq__9857 = cljs.core.seq((function (){var G__9861 = value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9861) : cljs.core.deref.call(null,G__9861));
})());
var chunk__9858 = null;
var count__9859 = (0);
var i__9860 = (0);
while(true){
if((i__9860 < count__9859)){
var v = chunk__9858.cljs$core$IIndexed$_nth$arity$2(null,i__9860);
tertiarycheck((minesweep.core.alltiles[v]),v,(function (){var G__9862 = (minesweep.core.alltiles[v]);
return (minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1(G__9862) : minesweep.core.checkround.call(null,G__9862));
})());

var G__9887 = seq__9857;
var G__9888 = chunk__9858;
var G__9889 = count__9859;
var G__9890 = (i__9860 + (1));
seq__9857 = G__9887;
chunk__9858 = G__9888;
count__9859 = G__9889;
i__9860 = G__9890;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__9857);
if(temp__4126__auto__){
var seq__9857__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9857__$1)){
var c__4528__auto__ = cljs.core.chunk_first(seq__9857__$1);
var G__9891 = cljs.core.chunk_rest(seq__9857__$1);
var G__9892 = c__4528__auto__;
var G__9893 = cljs.core.count(c__4528__auto__);
var G__9894 = (0);
seq__9857 = G__9891;
chunk__9858 = G__9892;
count__9859 = G__9893;
i__9860 = G__9894;
continue;
} else {
var v = cljs.core.first(seq__9857__$1);
tertiarycheck((minesweep.core.alltiles[v]),v,(function (){var G__9863 = (minesweep.core.alltiles[v]);
return (minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1(G__9863) : minesweep.core.checkround.call(null,G__9863));
})());

var G__9895 = cljs.core.next(seq__9857__$1);
var G__9896 = null;
var G__9897 = (0);
var G__9898 = (0);
seq__9857 = G__9895;
chunk__9858 = G__9896;
count__9859 = G__9897;
i__9860 = G__9898;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
minesweep.core.checkround = (function checkround(elem){
if(cljs.core.not(elem.hasAttribute("checked"))){
var numb = (elem.getAttribute("numb") | (0));
var spaces = (function (){var G__9913 = cljs.core.list(cljs.core.constant$keyword$32,cljs.core.constant$keyword$33,cljs.core.constant$keyword$34,cljs.core.constant$keyword$35,cljs.core.constant$keyword$36,cljs.core.constant$keyword$37,cljs.core.constant$keyword$38,cljs.core.constant$keyword$39);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9913) : cljs.core.atom.call(null,G__9913));
})();
if((numb < minesweep.core.gridsize)){
var G__9914_9927 = spaces;
var G__9915_9928 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,null,cljs.core.constant$keyword$34,null,cljs.core.constant$keyword$33,null], null), null),(function (){var G__9916 = spaces;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9916) : cljs.core.deref.call(null,G__9916));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9914_9927,G__9915_9928) : cljs.core.reset_BANG_.call(null,G__9914_9927,G__9915_9928));
} else {
}

if((cljs.core.rem(numb,minesweep.core.gridsize) === (0))){
var G__9917_9929 = spaces;
var G__9918_9930 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$32,null,cljs.core.constant$keyword$35,null,cljs.core.constant$keyword$37,null], null), null),(function (){var G__9919 = spaces;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9919) : cljs.core.deref.call(null,G__9919));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9917_9929,G__9918_9930) : cljs.core.reset_BANG_.call(null,G__9917_9929,G__9918_9930));
} else {
}

if((cljs.core.rem(((1) + numb),minesweep.core.gridsize) === (0))){
var G__9920_9931 = spaces;
var G__9921_9932 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$34,null,cljs.core.constant$keyword$36,null], null), null),(function (){var G__9922 = spaces;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9922) : cljs.core.deref.call(null,G__9922));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9920_9931,G__9921_9932) : cljs.core.reset_BANG_.call(null,G__9920_9931,G__9921_9932));
} else {
}

if((numb >= (minesweep.core.gridsize * (minesweep.core.gridsize - (1))))){
var G__9923_9933 = spaces;
var G__9924_9934 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$37,null], null), null),(function (){var G__9925 = spaces;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9925) : cljs.core.deref.call(null,G__9925));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__9923_9933,G__9924_9934) : cljs.core.reset_BANG_.call(null,G__9923_9933,G__9924_9934));
} else {
}

return minesweep.core.tertiarycheck(elem,numb,(function (){var G__9926 = spaces;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9926) : cljs.core.deref.call(null,G__9926));
})());
} else {
return null;
}
});
minesweep.core.primarycheck = (function primarycheck(elem){
if(cljs.core.not(elem.hasAttribute("checked"))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",elem.getAttribute("bomb"))){
minesweep.core.bombhit(elem);

return (minesweep.core.gamelose.cljs$core$IFn$_invoke$arity$0 ? minesweep.core.gamelose.cljs$core$IFn$_invoke$arity$0() : minesweep.core.gamelose.call(null));
} else {
return minesweep.core.checkround(elem);
}
} else {
return null;
}
});
minesweep.core.gamewin = (function gamewin(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["YOU WIN"], 0));
});
minesweep.core.gamelose = (function gamelose(){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["GAME OVER"], 0));
});
minesweep.core.minesweep = (function minesweep__$1(){
minesweep.core.generatebomb();

minesweep.core.docsettings();

return minesweep.core.drawgrid();
});
minesweep.core.minesweep();
