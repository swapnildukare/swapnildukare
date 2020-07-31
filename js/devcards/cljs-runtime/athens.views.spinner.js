goog.provide('athens.views.spinner');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('reagent.core');
goog.require('stylefy.core');
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("appear-and-drop",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-40%)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(0)",new cljs.core.Keyword(null,"opacity","opacity",397153780),"var(--anim-opacity-end, 1)"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("appear",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"var(--anim-opacity-end, 1)"], null)], null)], 0));
stylefy.core.keyframes.cljs$core$IFn$_invoke$arity$variadic("spinning",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0deg)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(1079deg)"], null)], null)], 0));
athens.views.spinner.spinner_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"place-items","place-items",-1530443900),new cljs.core.Keyword(null,"--anim-opacity-end","--anim-opacity-end",1202313349),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"grid-gap","grid-gap",1083581064),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"place-content","place-content",-395756037),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["appear 0.5s ease","center","1","center","0.5rem","10em","grid","center","center","10em","auto"]);
athens.views.spinner.spinner_progress_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"3em",new cljs.core.Keyword(null,"height","height",1025178622),"3em",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"1000px",new cljs.core.Keyword(null,"border","border",1444987323),["1.5px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527)))].join(''),new cljs.core.Keyword(null,"border-top-color","border-top-color",-804629899),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"animation","animation",-1248293244),"spinning 3s linear infinite"], null);
athens.views.spinner.spinner_message_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"--anim-opacity-end","--anim-opacity-end",1202313349),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"animation","animation",-1248293244),"appear-and-drop 1s 0.75s ease",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"animation-fill-mode","animation-fill-mode",1637181373),"both"], null);
athens.views.spinner.initial_spinner_container = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"50vh",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-50%)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null);
athens.views.spinner.spinner_component = (function athens$views$spinner$spinner_component(p__61279){
var map__61280 = p__61279;
var map__61280__$1 = (((((!((map__61280 == null))))?(((((map__61280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61280):map__61280);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.views.spinner.spinner_style,style], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.spinner_progress_style)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.spinner_message_style),(function (){var or__4185__auto__ = message;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Loading...";
}
})()], null)], null);
});
/**
 * @define {boolean}
 */
athens.views.spinner.COMMIT_URL = goog.define("athens.views.spinner.COMMIT_URL",false);
athens.views.spinner.initial_spinner_component = (function athens$views$spinner$initial_spinner_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.initial_spinner_container),((athens.views.spinner.COMMIT_URL)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),athens.views.spinner.COMMIT_URL], null),athens.views.spinner.COMMIT_URL], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component], null)], null);
});
athens.views.spinner.init_spinner = (function athens$views$spinner$init_spinner(){
stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.initial_spinner_component], null),document.getElementById("app"));
});
goog.exportSymbol('athens.views.spinner.init_spinner', athens.views.spinner.init_spinner);

//# sourceMappingURL=athens.views.spinner.js.map
