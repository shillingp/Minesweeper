// Compiled by ClojureScript 0.0-2197
goog.provide('minesweep.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_();
minesweep.core.log = (function log(x){return console.log(x);
});
minesweep.core.doc = document;
minesweep.core.tilesize = 20;
minesweep.core.gridsize = 10;
minesweep.core.border = 3;
minesweep.core.maxmines = 10;
minesweep.core.bombs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
minesweep.core.by_id = (function() {
var by_id = null;
var by_id__1 = (function (id){return by_id.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,id);
});
var by_id__2 = (function (elem,id){return elem.getElementById(cljs.core.name(id));
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
var by_class__1 = (function (class$){return by_class.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,class$);
});
var by_class__2 = (function (elem,class$){return elem.getElementsByClassName(cljs.core.name(class$));
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
var by_tag__1 = (function (tag){return by_tag.cljs$core$IFn$_invoke$arity$2(minesweep.core.doc,tag);
});
var by_tag__2 = (function (elem,tag){return elem.getElementsByTagName(cljs.core.name(tag));
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
minesweep.core.keytoprop = (function keytoprop(key){var key__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key));var n__4326__auto___23583 = cljs.core.count(cljs.core.re_seq(/-\w/,cljs.core.deref(key__$1)));var i_23584 = 0;while(true){
if((i_23584 < n__4326__auto___23583))
{cljs.core.reset_BANG_(key__$1,cljs.core.deref(key__$1).replace(/-\w/,((function (i_23584,n__4326__auto___23583,key__$1){
return (function (x){return cljs.core.second(x.toUpperCase());
});})(i_23584,n__4326__auto___23583,key__$1))
));
{
var G__23585 = (i_23584 + 1);
i_23584 = G__23585;
continue;
}
} else
{}
break;
}
return cljs.core.deref(key__$1);
});
minesweep.core.setstyles = (function setstyles(elem,data){var seq__23592 = cljs.core.seq(data);var chunk__23593 = null;var count__23594 = 0;var i__23595 = 0;while(true){
if((i__23595 < count__23594))
{var vec__23596 = chunk__23593.cljs$core$IIndexed$_nth$arity$2(null,i__23595);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23596,1,null);(elem.style[minesweep.core.keytoprop(k)] = v);
{
var G__23598 = seq__23592;
var G__23599 = chunk__23593;
var G__23600 = count__23594;
var G__23601 = (i__23595 + 1);
seq__23592 = G__23598;
chunk__23593 = G__23599;
count__23594 = G__23600;
i__23595 = G__23601;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23592);if(temp__4092__auto__)
{var seq__23592__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23592__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__23592__$1);{
var G__23602 = cljs.core.chunk_rest(seq__23592__$1);
var G__23603 = c__4226__auto__;
var G__23604 = cljs.core.count(c__4226__auto__);
var G__23605 = 0;
seq__23592 = G__23602;
chunk__23593 = G__23603;
count__23594 = G__23604;
i__23595 = G__23605;
continue;
}
} else
{var vec__23597 = cljs.core.first(seq__23592__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23597,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23597,1,null);(elem.style[minesweep.core.keytoprop(k)] = v);
{
var G__23606 = cljs.core.next(seq__23592__$1);
var G__23607 = null;
var G__23608 = 0;
var G__23609 = 0;
seq__23592 = G__23606;
chunk__23593 = G__23607;
count__23594 = G__23608;
i__23595 = G__23609;
continue;
}
}
} else
{return null;
}
}
break;
}
});
minesweep.core.setattrs = (function setattrs(elem,data){var seq__23616 = cljs.core.seq(data);var chunk__23617 = null;var count__23618 = 0;var i__23619 = 0;while(true){
if((i__23619 < count__23618))
{var vec__23620 = chunk__23617.cljs$core$IIndexed$_nth$arity$2(null,i__23619);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,1,null);elem.setAttribute(minesweep.core.keytoprop(k),v);
{
var G__23622 = seq__23616;
var G__23623 = chunk__23617;
var G__23624 = count__23618;
var G__23625 = (i__23619 + 1);
seq__23616 = G__23622;
chunk__23617 = G__23623;
count__23618 = G__23624;
i__23619 = G__23625;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23616);if(temp__4092__auto__)
{var seq__23616__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23616__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__23616__$1);{
var G__23626 = cljs.core.chunk_rest(seq__23616__$1);
var G__23627 = c__4226__auto__;
var G__23628 = cljs.core.count(c__4226__auto__);
var G__23629 = 0;
seq__23616 = G__23626;
chunk__23617 = G__23627;
count__23618 = G__23628;
i__23619 = G__23629;
continue;
}
} else
{var vec__23621 = cljs.core.first(seq__23616__$1);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,1,null);elem.setAttribute(minesweep.core.keytoprop(k),v);
{
var G__23630 = cljs.core.next(seq__23616__$1);
var G__23631 = null;
var G__23632 = 0;
var G__23633 = 0;
seq__23616 = G__23630;
chunk__23617 = G__23631;
count__23618 = G__23632;
i__23619 = G__23633;
continue;
}
}
} else
{return null;
}
}
break;
}
});
minesweep.core.board = minesweep.core.by_id.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16);
minesweep.core.alltiles = minesweep.core.by_tag.cljs$core$IFn$_invoke$arity$2(minesweep.core.board,cljs.core.constant$keyword$17);
minesweep.core.boardsettings = (function boardsettings(){return minesweep.core.setstyles(minesweep.core.board,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$18,(minesweep.core.gridsize * (minesweep.core.tilesize + (2 * minesweep.core.border))),cljs.core.constant$keyword$19,(minesweep.core.gridsize * (minesweep.core.tilesize + (2 * minesweep.core.border)))], null));
});
minesweep.core.docsettings = (function docsettings(){return minesweep.core.boardsettings();
});
minesweep.core.createtile = (function createtile(bomb,numb){var tile = minesweep.core.doc.createElement("p");minesweep.core.setstyles(tile,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$18,minesweep.core.tilesize,cljs.core.constant$keyword$19,minesweep.core.tilesize,cljs.core.constant$keyword$20,minesweep.core.border], null));
minesweep.core.setattrs(tile,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$21,bomb,cljs.core.constant$keyword$22,numb], null));
(tile["onclick"] = ((function (tile){
return (function (e){return (minesweep.core.primarycheck.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.primarycheck.cljs$core$IFn$_invoke$arity$1((e["target"])) : minesweep.core.primarycheck.call(null,(e["target"])));
});})(tile))
);
(tile["oncontextmenu"] = ((function (tile){
return (function (e){e.preventDefault();
(minesweep.core.markflag.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.markflag.cljs$core$IFn$_invoke$arity$1((e["target"])) : minesweep.core.markflag.call(null,(e["target"])));
return false;
});})(tile))
);
return minesweep.core.board.appendChild(tile);
});
minesweep.core.drawgrid = (function drawgrid(){var n__4326__auto__ = (minesweep.core.gridsize * minesweep.core.gridsize);var i = 0;while(true){
if((i < n__4326__auto__))
{minesweep.core.createtile(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweep.core.bombs),i),i);
{
var G__23634 = (i + 1);
i = G__23634;
continue;
}
} else
{return null;
}
break;
}
});
minesweep.core.generatebomb = (function generatebomb(){var empty = ((minesweep.core.gridsize * minesweep.core.gridsize) - minesweep.core.maxmines);return cljs.core.reset_BANG_(minesweep.core.bombs,cljs.core.seq(cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(minesweep.core.maxmines,1),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(empty,0)))));
});
minesweep.core.bombhit = (function bombhit(elem){var n__4326__auto__ = cljs.core.count(cljs.core.deref(minesweep.core.bombs));var i = 0;while(true){
if((i < n__4326__auto__))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(minesweep.core.bombs),i)))
{minesweep.core.setattrs((minesweep.core.alltiles[i]),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,true], null));
} else
{}
minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,true], null));
{
var G__23635 = (i + 1);
i = G__23635;
continue;
}
} else
{return null;
}
break;
}
});
minesweep.core.markflag = (function markflag(elem){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",elem.getAttribute("flag")))
{return minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"0"], null));
} else
{return minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,"1"], null));
}
});
minesweep.core.markchecked = (function markchecked(elem,value){minesweep.core.setattrs(elem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,true], null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,0))
{return (elem["textContent"] = value);
} else
{return null;
}
});
minesweep.core.getbombs = (function getbombs(data){var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);var seq__23640_23644 = cljs.core.seq(data);var chunk__23641_23645 = null;var count__23642_23646 = 0;var i__23643_23647 = 0;while(true){
if((i__23643_23647 < count__23642_23646))
{var i_23648 = chunk__23641_23645.cljs$core$IIndexed$_nth$arity$2(null,i__23643_23647);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,((minesweep.core.alltiles[i_23648]).getAttribute("bomb") | 0));
{
var G__23649 = seq__23640_23644;
var G__23650 = chunk__23641_23645;
var G__23651 = count__23642_23646;
var G__23652 = (i__23643_23647 + 1);
seq__23640_23644 = G__23649;
chunk__23641_23645 = G__23650;
count__23642_23646 = G__23651;
i__23643_23647 = G__23652;
continue;
}
} else
{var temp__4092__auto___23653 = cljs.core.seq(seq__23640_23644);if(temp__4092__auto___23653)
{var seq__23640_23654__$1 = temp__4092__auto___23653;if(cljs.core.chunked_seq_QMARK_(seq__23640_23654__$1))
{var c__4226__auto___23655 = cljs.core.chunk_first(seq__23640_23654__$1);{
var G__23656 = cljs.core.chunk_rest(seq__23640_23654__$1);
var G__23657 = c__4226__auto___23655;
var G__23658 = cljs.core.count(c__4226__auto___23655);
var G__23659 = 0;
seq__23640_23644 = G__23656;
chunk__23641_23645 = G__23657;
count__23642_23646 = G__23658;
i__23643_23647 = G__23659;
continue;
}
} else
{var i_23660 = cljs.core.first(seq__23640_23654__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,cljs.core.conj,((minesweep.core.alltiles[i_23660]).getAttribute("bomb") | 0));
{
var G__23661 = cljs.core.next(seq__23640_23654__$1);
var G__23662 = null;
var G__23663 = 0;
var G__23664 = 0;
seq__23640_23644 = G__23661;
chunk__23641_23645 = G__23662;
count__23642_23646 = G__23663;
i__23643_23647 = G__23664;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(a));
});
minesweep.core.tertiarycheck = (function tertiarycheck(elem,numb,areas){if(cljs.core.not(elem.hasAttribute("checked")))
{var value = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);var seq__23675_23685 = cljs.core.seq(areas);var chunk__23676_23686 = null;var count__23677_23687 = 0;var i__23678_23688 = 0;while(true){
if((i__23678_23688 < count__23677_23687))
{var a_23689 = chunk__23676_23686.cljs$core$IIndexed$_nth$arity$2(null,i__23678_23688);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(value,cljs.core.conj,(function (){var G__23679 = a_23689;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,G__23679))
{return (numb + (1 + minesweep.core.gridsize));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25,G__23679))
{return (numb + minesweep.core.gridsize);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26,G__23679))
{return (numb + (minesweep.core.gridsize - 1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27,G__23679))
{return (numb + 1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,G__23679))
{return (numb - 1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,G__23679))
{return (numb - (minesweep.core.gridsize - 1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$30,G__23679))
{return (numb - minesweep.core.gridsize);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$31,G__23679))
{return (numb - (minesweep.core.gridsize + 1));
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})());
{
var G__23690 = seq__23675_23685;
var G__23691 = chunk__23676_23686;
var G__23692 = count__23677_23687;
var G__23693 = (i__23678_23688 + 1);
seq__23675_23685 = G__23690;
chunk__23676_23686 = G__23691;
count__23677_23687 = G__23692;
i__23678_23688 = G__23693;
continue;
}
} else
{var temp__4092__auto___23694 = cljs.core.seq(seq__23675_23685);if(temp__4092__auto___23694)
{var seq__23675_23695__$1 = temp__4092__auto___23694;if(cljs.core.chunked_seq_QMARK_(seq__23675_23695__$1))
{var c__4226__auto___23696 = cljs.core.chunk_first(seq__23675_23695__$1);{
var G__23697 = cljs.core.chunk_rest(seq__23675_23695__$1);
var G__23698 = c__4226__auto___23696;
var G__23699 = cljs.core.count(c__4226__auto___23696);
var G__23700 = 0;
seq__23675_23685 = G__23697;
chunk__23676_23686 = G__23698;
count__23677_23687 = G__23699;
i__23678_23688 = G__23700;
continue;
}
} else
{var a_23701 = cljs.core.first(seq__23675_23695__$1);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(value,cljs.core.conj,(function (){var G__23680 = a_23701;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,G__23680))
{return (numb + (1 + minesweep.core.gridsize));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25,G__23680))
{return (numb + minesweep.core.gridsize);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$26,G__23680))
{return (numb + (minesweep.core.gridsize - 1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$27,G__23680))
{return (numb + 1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28,G__23680))
{return (numb - 1);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,G__23680))
{return (numb - (minesweep.core.gridsize - 1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$30,G__23680))
{return (numb - minesweep.core.gridsize);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$31,G__23680))
{return (numb - (minesweep.core.gridsize + 1));
} else
{if(cljs.core.constant$keyword$6)
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
})());
{
var G__23702 = cljs.core.next(seq__23675_23695__$1);
var G__23703 = null;
var G__23704 = 0;
var G__23705 = 0;
seq__23675_23685 = G__23702;
chunk__23676_23686 = G__23703;
count__23677_23687 = G__23704;
i__23678_23688 = G__23705;
continue;
}
}
} else
{}
}
break;
}
minesweep.core.markchecked(elem,minesweep.core.getbombs(cljs.core.deref(value)));
if(cljs.core.empty_QMARK_((elem["textContent"])))
{var seq__23681 = cljs.core.seq(cljs.core.deref(value));var chunk__23682 = null;var count__23683 = 0;var i__23684 = 0;while(true){
if((i__23684 < count__23683))
{var v = chunk__23682.cljs$core$IIndexed$_nth$arity$2(null,i__23684);tertiarycheck((minesweep.core.alltiles[v]),v,(minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1((minesweep.core.alltiles[v])) : minesweep.core.checkround.call(null,(minesweep.core.alltiles[v]))));
{
var G__23706 = seq__23681;
var G__23707 = chunk__23682;
var G__23708 = count__23683;
var G__23709 = (i__23684 + 1);
seq__23681 = G__23706;
chunk__23682 = G__23707;
count__23683 = G__23708;
i__23684 = G__23709;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23681);if(temp__4092__auto__)
{var seq__23681__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23681__$1))
{var c__4226__auto__ = cljs.core.chunk_first(seq__23681__$1);{
var G__23710 = cljs.core.chunk_rest(seq__23681__$1);
var G__23711 = c__4226__auto__;
var G__23712 = cljs.core.count(c__4226__auto__);
var G__23713 = 0;
seq__23681 = G__23710;
chunk__23682 = G__23711;
count__23683 = G__23712;
i__23684 = G__23713;
continue;
}
} else
{var v = cljs.core.first(seq__23681__$1);tertiarycheck((minesweep.core.alltiles[v]),v,(minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1 ? minesweep.core.checkround.cljs$core$IFn$_invoke$arity$1((minesweep.core.alltiles[v])) : minesweep.core.checkround.call(null,(minesweep.core.alltiles[v]))));
{
var G__23714 = cljs.core.next(seq__23681__$1);
var G__23715 = null;
var G__23716 = 0;
var G__23717 = 0;
seq__23681 = G__23714;
chunk__23682 = G__23715;
count__23683 = G__23716;
i__23684 = G__23717;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
minesweep.core.checkround = (function checkround(elem){if(cljs.core.not(elem.hasAttribute("checked")))
{var numb = (elem.getAttribute("numb") | 0);var spaces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.list(cljs.core.constant$keyword$31,cljs.core.constant$keyword$30,cljs.core.constant$keyword$29,cljs.core.constant$keyword$28,cljs.core.constant$keyword$27,cljs.core.constant$keyword$26,cljs.core.constant$keyword$25,cljs.core.constant$keyword$24));if((numb <= minesweep.core.gridsize))
{cljs.core.reset_BANG_(spaces,cljs.core.remove(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$29,null], null), null),cljs.core.deref(spaces)));
} else
{}
if((cljs.core.rem(numb,minesweep.core.gridsize) === 0))
{cljs.core.reset_BANG_(spaces,cljs.core.remove(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$28,null], null), null),cljs.core.deref(spaces)));
} else
{}
if((cljs.core.rem((1 + numb),minesweep.core.gridsize) === 0))
{cljs.core.reset_BANG_(spaces,cljs.core.remove(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$29,null], null), null),cljs.core.deref(spaces)));
} else
{}
if((numb >= (minesweep.core.gridsize * (minesweep.core.gridsize - 1))))
{cljs.core.reset_BANG_(spaces,cljs.core.remove(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null,cljs.core.constant$keyword$24,null], null), null),cljs.core.deref(spaces)));
} else
{}
return minesweep.core.tertiarycheck(elem,numb,cljs.core.deref(spaces));
} else
{return null;
}
});
minesweep.core.primarycheck = (function primarycheck(elem){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(true,elem.hasAttribute("checked")))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",elem.getAttribute("bomb")))
{minesweep.core.bombhit(elem);
return (minesweep.core.gamelose.cljs$core$IFn$_invoke$arity$0 ? minesweep.core.gamelose.cljs$core$IFn$_invoke$arity$0() : minesweep.core.gamelose.call(null));
} else
{return minesweep.core.checkround(elem);
}
} else
{return null;
}
});
minesweep.core.gamewin = (function gamewin(){return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["YOU WIN"], 0));
});
minesweep.core.gamelose = (function gamelose(){return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["GAME OVER"], 0));
});
minesweep.core.minesweep = (function minesweep__$1(){minesweep.core.generatebomb();
minesweep.core.docsettings();
return minesweep.core.drawgrid();
});
minesweep.core.minesweep();
