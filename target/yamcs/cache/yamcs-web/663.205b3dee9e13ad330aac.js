(self.webpackChunk_yamcs_webapp=self.webpackChunk_yamcs_webapp||[]).push([[663],{663:(t,e,i)=>{"use strict";i.r(e),i.d(e,{EventsModule:()=>Ot});var s=i(7290),n=i(3337),a=i(7102),o=i(4017),r=i(9016),c=i(9385),l=i(1041),u=i(8512),h=i(7701),p=i(6801),d=i(8561),g=i(8981),m=i(8293),f=i(8509),v=i(2935),y=i(5366),Z=i(6764);let S=(()=>{class t{constructor(t,e,i,s){this.dialogRef=t,this.yamcs=i,this.data=s,this.form=e.group({message:["",l.kI.required],severity:"INFO",time:[f.Y6(i.getMissionTime()),l.kI.required]})}save(){this.yamcs.yamcsClient.createEvent(this.yamcs.instance,{message:this.form.value.message,severity:this.form.value.severity,time:f.Y6(this.form.value.time)}).then(t=>this.dialogRef.close(t))}}return t.\u0275fac=function(e){return new(e||t)(y.Y36(v.so),y.Y36(l.qu),y.Y36(m.C),y.Y36(v.WI))},t.\u0275cmp=y.Xpm({type:t,selectors:[["ng-component"]],decls:32,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography"],[1,"ya-form",3,"formGroup"],["formControlName","message"],["formControlName","severity"],["value","INFO"],["value","WATCH"],["value","WARNING"],["value","DISTRESS"],["value","CRITICAL"],["value","SEVERE"],["formControlName","time","step","1"],["align","end"],["mat-dialog-close","",1,"ya-button"],[1,"ya-button","primary",3,"disabled","click"]],template:function(t,e){1&t&&(y.TgZ(0,"h2",0),y._uU(1,"Create event"),y.qZA(),y.TgZ(2,"mat-dialog-content",1),y.TgZ(3,"form",2),y.TgZ(4,"label"),y._uU(5," Message "),y._UZ(6,"textarea",3),y.qZA(),y._UZ(7,"br"),y.TgZ(8,"label"),y._uU(9," Severity "),y.TgZ(10,"select",4),y.TgZ(11,"option",5),y._uU(12,"INFO"),y.qZA(),y.TgZ(13,"option",6),y._uU(14,"WATCH"),y.qZA(),y.TgZ(15,"option",7),y._uU(16,"WARNING"),y.qZA(),y.TgZ(17,"option",8),y._uU(18,"DISTRESS"),y.qZA(),y.TgZ(19,"option",9),y._uU(20,"CRITICAL"),y.qZA(),y.TgZ(21,"option",10),y._uU(22,"SEVERE"),y.qZA(),y.qZA(),y.qZA(),y._UZ(23,"br"),y.TgZ(24,"label"),y._uU(25," Event time "),y._UZ(26,"app-date-time-input",11),y.qZA(),y.qZA(),y.qZA(),y.TgZ(27,"mat-dialog-actions",12),y.TgZ(28,"button",13),y._uU(29,"CANCEL"),y.qZA(),y.TgZ(30,"button",14),y.NdJ("click",function(){return e.save()}),y._uU(31,"SAVE"),y.qZA(),y.qZA()),2&t&&(y.xp6(3),y.Q6J("formGroup",e.form),y.xp6(27),y.Q6J("disabled",!e.form.valid))},directives:[v.uh,v.xY,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.EJ,l.YN,l.Kr,Z.Y,v.H8,v.ZT],encapsulation:2,changeDetection:0}),t})();var C=i(8378);class T{constructor(t){this.watermarkObserver=t,this.dirty=!1,this.archiveEvents=[],this.bufferSize=500,this.bufferWatermark=400,this.pointer=0,this.alreadyWarned=!1,this.realtimeBuffer=Array(this.bufferSize).fill(void 0)}addArchiveData(t){this.archiveEvents=this.archiveEvents.concat(t),this.dirty=!0}addRealtimeEvent(t){this.pointer<this.bufferSize&&(this.realtimeBuffer[this.pointer]=t,this.pointer>=this.bufferWatermark&&this.watermarkObserver&&!this.alreadyWarned&&(this.alreadyWarned=!0,this.watermarkObserver()),this.pointer=this.pointer+1),this.dirty=!0}reset(){this.archiveEvents=[],this.realtimeBuffer.fill(void 0),this.pointer=0,this.alreadyWarned=!1,this.dirty=!0}snapshot(){const t=this.realtimeBuffer.filter(t=>void 0!==t);return this.archiveEvents.concat(t).sort((t,e)=>{const i=-t.generationTime.localeCompare(e.generationTime);return 0!==i?i:t.seqNumber-e.seqNumber})}compact(t){const e=this.snapshot();e.length=Math.min(t,e.length),this.reset(),this.archiveEvents=e,this.dirty=!0}}class w extends C.o2{constructor(t,e){super(),this.yamcs=t,this.pageSize=100,this.blockHasMore=!1,this.events$=new u.X([]),this.loading$=new u.X(!1),this.streaming$=new u.X(!1),this.syncSubscription=e.sync(()=>{this.eventBuffer.dirty&&!this.loading$.getValue()&&(this.events$.next(this.eventBuffer.snapshot()),this.eventBuffer.dirty=!1)}),this.eventBuffer=new T(()=>{this.blockHasMore=!0,this.eventBuffer.compact(500)})}connect(){return this.events$}loadEvents(t){return this.loading$.next(!0),this.loadPage(Object.assign(Object.assign({},t),{limit:this.pageSize+1})).then(t=>{this.loading$.next(!1),this.eventBuffer.reset(),this.blockHasMore=!1,this.eventBuffer.addArchiveData(t)})}hasMore(){return null!=this.offscreenRecord&&!this.blockHasMore}loadPage(t){return this.options=t,this.yamcs.yamcsClient.getEvents(this.yamcs.instance,t).then(t=>(t.length>this.pageSize?(t.splice(t.length-1,1),this.offscreenRecord=t[t.length-1]):this.offscreenRecord=null,t))}loadMoreData(t){this.offscreenRecord&&this.loadPage(Object.assign(Object.assign({},t),{stop:this.offscreenRecord.generationTime,limit:this.pageSize+1})).then(t=>{this.eventBuffer.addArchiveData(t)})}startStreaming(){this.streaming$.next(!0),this.realtimeSubscription=this.yamcs.yamcsClient.createEventSubscription({instance:this.yamcs.instance},t=>{!this.loading$.getValue()&&this.matchesFilter(t)&&(t.animate=!0,this.eventBuffer.addRealtimeEvent(t))})}matchesFilter(t){if(this.options){if(this.options.source&&t.source!==this.options.source)return!1;if(this.options.q&&-1===t.message.indexOf(this.options.q))return!1;if(this.options.severity)switch(this.options.severity){case"SEVERE":case"ERROR":if("CRITICAL"===t.severity)return!1;case"CRITICAL":if("DISTRESS"===t.severity)return!1;case"DISTRESS":if("WARNING"===t.severity)return!1;case"WARNING":if("WATCH"===t.severity)return!1;case"WATCH":if("INFO"===t.severity)return!1}}return!0}stopStreaming(){this.realtimeSubscription&&this.realtimeSubscription.cancel(),this.streaming$.next(!1)}disconnect(){this.stopStreaming(),this.syncSubscription&&this.syncSubscription.unsubscribe(),this.events$.complete(),this.loading$.complete(),this.streaming$.complete()}}var b=i(9624),x=i(6243),_=i(9451),A=i(6972),U=i(1116),N=i(4369),k=i(4311),q=i(7307),O=i(8784),I=i(178),M=i(808),E=i(5790),Y=i(7340),J=i(5722),D=i(7112),R=i(7408);function Q(t,e){if(1&t&&y._UZ(0,"div",8),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function F(t,e){if(1&t&&y._UZ(0,"div",9),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function P(t,e){if(1&t&&y._UZ(0,"div",10),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function L(t,e){if(1&t&&y._UZ(0,"div",11),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function $(t,e){if(1&t&&y._UZ(0,"div",12),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function H(t,e){if(1&t&&y._UZ(0,"div",13),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}function B(t,e){if(1&t&&y._UZ(0,"div",14),2&t){const t=y.oxw();y.ekj("grayscale",t.grayscale)}}let j=(()=>{class t{constructor(){this.grayscale=!1}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["app-event-severity"]],inputs:{severity:"severity",grayscale:"grayscale"},decls:8,vars:8,consts:[[3,"ngSwitch"],["class","info",3,"grayscale",4,"ngSwitchCase"],["class","watch",3,"grayscale",4,"ngSwitchCase"],["class","warning",3,"grayscale",4,"ngSwitchCase"],["class","distress",3,"grayscale",4,"ngSwitchCase"],["class","critical",3,"grayscale",4,"ngSwitchCase"],["class","severe",3,"grayscale",4,"ngSwitchCase"],["class","error",3,"grayscale",4,"ngSwitchCase"],[1,"info"],[1,"watch"],[1,"warning"],[1,"distress"],[1,"critical"],[1,"severe"],[1,"error"]],template:function(t,e){1&t&&(y.ynx(0,0),y.YNc(1,Q,1,2,"div",1),y.YNc(2,F,1,2,"div",2),y.YNc(3,P,1,2,"div",3),y.YNc(4,L,1,2,"div",4),y.YNc(5,$,1,2,"div",5),y.YNc(6,H,1,2,"div",6),y.YNc(7,B,1,2,"div",7),y.BQk()),2&t&&(y.Q6J("ngSwitch",e.severity),y.xp6(1),y.Q6J("ngSwitchCase","INFO"),y.xp6(1),y.Q6J("ngSwitchCase","WATCH"),y.xp6(1),y.Q6J("ngSwitchCase","WARNING"),y.xp6(1),y.Q6J("ngSwitchCase","DISTRESS"),y.xp6(1),y.Q6J("ngSwitchCase","CRITICAL"),y.xp6(1),y.Q6J("ngSwitchCase","SEVERE"),y.xp6(1),y.Q6J("ngSwitchCase","ERROR"))},directives:[U.RF,U.n9],styles:[".critical[_ngcontent-%COMP%], .distress[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .info[_ngcontent-%COMP%], .severe[_ngcontent-%COMP%], .warning[_ngcontent-%COMP%], .watch[_ngcontent-%COMP%]{display:inline-block;height:5px;width:29px;position:relative;background-image:url(static/level-sprite.png)}.info[_ngcontent-%COMP%]{background-position:0 0}.watch[_ngcontent-%COMP%]{background-position:0 -5px}.warning[_ngcontent-%COMP%]{background-position:0 -10px}.distress[_ngcontent-%COMP%]{background-position:0 -15px}.critical[_ngcontent-%COMP%]{background-position:0 -20px}.error[_ngcontent-%COMP%], .severe[_ngcontent-%COMP%]{background-position:0 -25px}.grayscale[_ngcontent-%COMP%]{filter:grayscale(100%);-webkit-filter:grayscale(100%)}@media print{.critical[_ngcontent-%COMP%], .distress[_ngcontent-%COMP%], .error[_ngcontent-%COMP%], .info[_ngcontent-%COMP%], .severe[_ngcontent-%COMP%], .warning[_ngcontent-%COMP%], .watch[_ngcontent-%COMP%]{-webkit-print-color-adjust:exact;color-adjust:exact}}"],changeDetection:0}),t})();var V=i(4580),W=i(487);const z=["intervalSelect"];function G(t,e){if(1&t){const t=y.EpF();y.TgZ(0,"button",5),y.NdJ("click",function(){return y.CHM(t),y.oxw().createEvent()}),y.TgZ(1,"mat-icon"),y._uU(2,"add"),y.qZA(),y._uU(3," CREATE EVENT "),y.qZA()}}function X(t,e){if(1&t){const t=y.EpF();y.TgZ(0,"button",6),y.NdJ("click",function(){return y.CHM(t),y.oxw().startStreaming()}),y.TgZ(1,"mat-icon"),y._uU(2,"play_arrow"),y.qZA(),y.qZA()}}function K(t,e){if(1&t){const t=y.EpF();y.TgZ(0,"button",7),y.NdJ("click",function(){return y.CHM(t),y.oxw().stopStreaming()}),y.TgZ(1,"mat-icon"),y._uU(2,"pause"),y.qZA(),y.qZA()}}function tt(t,e){if(1&t){const t=y.EpF();y.ynx(0),y._UZ(1,"app-date-time-input",45),y._UZ(2,"app-date-time-input",46),y.TgZ(3,"button",44),y.NdJ("click",function(){return y.CHM(t),y.oxw(2).applyCustomDates()}),y._uU(4,"Apply"),y.qZA(),y.BQk()}if(2&t){const t=y.oxw(2);y.xp6(3),y.Q6J("disabled",t.filterForm.invalid)}}function et(t,e){if(1&t){const t=y.EpF();y.ynx(0),y.TgZ(1,"button",47),y.NdJ("click",function(){return y.CHM(t),y.oxw(2).jumpToNow()}),y._uU(2," Jump to now "),y.qZA(),y.BQk()}}function it(t,e){1&t&&y._UZ(0,"app-dots")}function st(t,e){1&t&&(y.TgZ(0,"div",48),y._uU(1," Listening for events "),y._UZ(2,"app-dots",49),y.qZA())}function nt(t,e){if(1&t&&(y.TgZ(0,"span"),y._uU(1," Showing events from "),y.TgZ(2,"b"),y._uU(3,"the last hour"),y.qZA(),y._uU(4," ending at "),y.TgZ(5,"b"),y._uU(6),y.ALo(7,"datetime"),y.qZA(),y._uU(8," (Mission Time) "),y.qZA()),2&t){const t=y.oxw(2);y.xp6(6),y.Oqu(y.lcZ(7,1,t.validStop))}}function at(t,e){if(1&t&&(y.TgZ(0,"span"),y._uU(1," Showing events from "),y.TgZ(2,"b"),y._uU(3,"the last 6 hours"),y.qZA(),y._uU(4," ending at "),y.TgZ(5,"b"),y._uU(6),y.ALo(7,"datetime"),y.qZA(),y._uU(8," (Mission Time) "),y.qZA()),2&t){const t=y.oxw(2);y.xp6(6),y.Oqu(y.lcZ(7,1,t.validStop))}}function ot(t,e){if(1&t&&(y.TgZ(0,"span"),y._uU(1," Showing events from "),y.TgZ(2,"b"),y._uU(3,"the last 24 hours"),y.qZA(),y._uU(4," ending at "),y.TgZ(5,"b"),y._uU(6),y.ALo(7,"datetime"),y.qZA(),y._uU(8," (Mission Time) "),y.qZA()),2&t){const t=y.oxw(2);y.xp6(6),y.Oqu(y.lcZ(7,1,t.validStop))}}function rt(t,e){1&t&&(y.TgZ(0,"span"),y._uU(1," Showing events from "),y.TgZ(2,"b"),y._uU(3,"all time"),y.qZA(),y.qZA())}function ct(t,e){if(1&t&&(y.TgZ(0,"span"),y._uU(1," Showing events from "),y.TgZ(2,"b"),y._uU(3),y.ALo(4,"datetime"),y.qZA(),y._uU(5," to "),y.TgZ(6,"b"),y._uU(7),y.ALo(8,"datetime"),y.qZA(),y._uU(9," (Mission Time) "),y.qZA()),2&t){const t=y.oxw(2);y.xp6(3),y.Oqu(y.lcZ(4,2,t.validStart)),y.xp6(4),y.Oqu(y.lcZ(8,4,t.validStop))}}function lt(t,e){1&t&&y._UZ(0,"th",50)}function ut(t,e){if(1&t&&(y.TgZ(0,"td",51),y._UZ(1,"app-event-severity",52),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.Q6J("severity",t.severity)}}function ht(t,e){1&t&&(y.TgZ(0,"th",53),y._uU(1,"Message"),y.qZA())}function pt(t,e){if(1&t&&(y.TgZ(0,"td",54),y._UZ(1,"app-highlight",55),y.qZA()),2&t){const t=e.$implicit,i=y.oxw(2);y.xp6(1),y.Q6J("text",t.message||"-")("term",i.filterForm.value.filter)}}function dt(t,e){1&t&&(y.TgZ(0,"th",56),y._uU(1,"Type"),y.qZA())}function gt(t,e){if(1&t&&(y.TgZ(0,"td",51),y._uU(1),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.hij(" ",t.type||"-"," ")}}function mt(t,e){1&t&&(y.TgZ(0,"th",56),y._uU(1,"Source"),y.qZA())}function ft(t,e){if(1&t&&(y.TgZ(0,"td",51),y._uU(1),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.hij(" ",t.source||"-"," ")}}function vt(t,e){1&t&&(y.TgZ(0,"th",57),y._uU(1,"Generation Time"),y.qZA())}function yt(t,e){if(1&t&&(y.TgZ(0,"td",58),y._uU(1),y.ALo(2,"datetime"),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.hij(" ",y.lcZ(2,1,t.generationTime)||"-"," ")}}function Zt(t,e){1&t&&(y.TgZ(0,"th",57),y._uU(1,"Reception Time"),y.qZA())}function St(t,e){if(1&t&&(y.TgZ(0,"td",58),y._uU(1),y.ALo(2,"datetime"),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.hij(" ",y.lcZ(2,1,t.receptionTime)||"-"," ")}}function Ct(t,e){1&t&&(y.TgZ(0,"th",59),y._uU(1,"Sequence Number"),y.qZA())}function Tt(t,e){if(1&t&&(y.TgZ(0,"td",51),y._uU(1),y.qZA()),2&t){const t=e.$implicit;y.xp6(1),y.hij(" ",t.seqNumber||"-"," ")}}function wt(t,e){if(1&t&&(y.TgZ(0,"th",53),y._uU(1),y.qZA()),2&t){const t=y.oxw().$implicit;y.Udp("width",t.width||"200px"),y.xp6(1),y.Oqu(t.label)}}function bt(t,e){if(1&t&&(y.TgZ(0,"td",51),y._uU(1),y.qZA()),2&t){const t=e.$implicit,i=y.oxw().$implicit;y.xp6(1),y.hij(" ",t[i.id]||"-"," ")}}function xt(t,e){1&t&&(y.ynx(0,60),y.YNc(1,wt,2,3,"th",61),y.YNc(2,bt,2,1,"td",27),y.BQk()),2&t&&y.Q6J("cdkColumnDef",e.$implicit.id)}function _t(t,e){1&t&&y._UZ(0,"tr",62)}function At(t,e){if(1&t&&y._UZ(0,"tr",63),2&t){const t=e.$implicit;y.Q6J("@rowAnimation",t.animate)("ngClass",t.severity)}}function Ut(t,e){if(1&t){const t=y.EpF();y.TgZ(0,"div",8),y.TgZ(1,"form",9),y.TgZ(2,"div",10),y._UZ(3,"app-search-filter",11),y._UZ(4,"app-column-chooser",12,13),y.qZA(),y.TgZ(6,"div",10),y._UZ(7,"app-select",14),y._UZ(8,"app-select",15),y.ALo(9,"async"),y._UZ(10,"app-select",16,17),y.YNc(12,tt,5,1,"ng-container",18),y.YNc(13,et,3,0,"ng-container",18),y.YNc(14,it,1,0,"app-dots",18),y.ALo(15,"async"),y.YNc(16,st,3,0,"div",19),y.ALo(17,"async"),y.qZA(),y.qZA(),y.TgZ(18,"div",20),y.TgZ(19,"div",21),y.TgZ(20,"app-action-link",22),y.ALo(21,"async"),y._uU(22,"Download events"),y.qZA(),y.qZA(),y.YNc(23,nt,9,3,"span",23),y.YNc(24,at,9,3,"span",23),y.YNc(25,ot,9,3,"span",23),y.YNc(26,rt,4,0,"span",23),y.YNc(27,ct,10,6,"span",23),y.qZA(),y.TgZ(28,"table",24),y.ynx(29,25),y.YNc(30,lt,1,0,"th",26),y.YNc(31,ut,2,1,"td",27),y.BQk(),y.ynx(32,28),y.YNc(33,ht,2,0,"th",29),y.YNc(34,pt,2,2,"td",30),y.BQk(),y.ynx(35,31),y.YNc(36,dt,2,0,"th",32),y.YNc(37,gt,2,1,"td",27),y.BQk(),y.ynx(38,33),y.YNc(39,mt,2,0,"th",32),y.YNc(40,ft,2,1,"td",27),y.BQk(),y.ynx(41,34),y.YNc(42,vt,2,0,"th",35),y.YNc(43,yt,3,3,"td",36),y.BQk(),y.ynx(44,37),y.YNc(45,Zt,2,0,"th",35),y.YNc(46,St,3,3,"td",36),y.BQk(),y.ynx(47,38),y.YNc(48,Ct,2,0,"th",39),y.YNc(49,Tt,2,1,"td",27),y.BQk(),y.YNc(50,xt,3,1,"ng-container",40),y.YNc(51,_t,1,0,"tr",41),y.ALo(52,"async"),y.YNc(53,At,1,2,"tr",42),y.ALo(54,"async"),y.qZA(),y.TgZ(55,"mat-toolbar"),y._UZ(56,"span",43),y.TgZ(57,"button",44),y.NdJ("click",function(){return y.CHM(t),y.oxw().loadMoreData()}),y._uU(58,"Load More"),y.qZA(),y._UZ(59,"span",43),y.qZA(),y.qZA()}if(2&t){const t=y.MAs(5),e=y.oxw();y.xp6(1),y.Q6J("formGroup",e.filterForm),y.xp6(3),y.Q6J("columns",e.columns),y.xp6(3),y.Q6J("options",e.severityOptions),y.xp6(1),y.Q6J("options",y.lcZ(9,22,e.sourceOptions$)),y.xp6(2),y.Q6J("options",e.intervalOptions),y.xp6(2),y.Q6J("ngIf","CUSTOM"===e.filterForm.value.interval),y.xp6(1),y.Q6J("ngIf","CUSTOM"!==e.filterForm.value.interval),y.xp6(1),y.Q6J("ngIf",y.lcZ(15,24,e.dataSource.loading$)),y.xp6(2),y.Q6J("ngIf",y.lcZ(17,26,e.dataSource.streaming$)),y.xp6(2),y.Q6J("ngSwitch",e.appliedInterval),y.xp6(2),y.Q6J("link",y.lcZ(21,28,e.downloadURL$))("download","Events"),y.xp6(3),y.Q6J("ngSwitchCase","PT1H"),y.xp6(1),y.Q6J("ngSwitchCase","PT6H"),y.xp6(1),y.Q6J("ngSwitchCase","P1D"),y.xp6(1),y.Q6J("ngSwitchCase","NO_LIMIT"),y.xp6(1),y.Q6J("ngSwitchCase","CUSTOM"),y.xp6(1),y.Q6J("dataSource",e.dataSource),y.xp6(22),y.Q6J("ngForOf",e.extraColumns),y.xp6(1),y.Q6J("cdkHeaderRowDef",y.lcZ(52,30,t.displayedColumns$)),y.xp6(2),y.Q6J("cdkRowDefColumns",y.lcZ(54,32,t.displayedColumns$)),y.xp6(4),y.Q6J("disabled",!e.dataSource.hasMore())}}const Nt="PT1H",kt=[{path:"",canActivate:[o.a,a.z],canActivateChild:[o.a],runGuardsAndResolvers:"always",component:c.K,children:[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,e,i,s,n,a,o,r){this.yamcs=t,this.authService=e,this.dialog=i,this.router=n,this.route=a,this.filterForm=new l.cw({filter:new l.NI,severity:new l.NI("INFO"),source:new l.NI("ANY"),interval:new l.NI(Nt),customStart:new l.NI(null),customStop:new l.NI(null)}),this.columns=[{id:"severity",label:"Severity",visible:!0},{id:"gentime",label:"Generation Time",alwaysVisible:!0},{id:"message",label:"Message",alwaysVisible:!0},{id:"type",label:"Type",visible:!0},{id:"source",label:"Source",visible:!0},{id:"rectime",label:"Reception Time"},{id:"seqNumber",label:"Sequence Number"}],this.extraColumns=[],this.severityOptions=[{id:"INFO",label:"Info level"},{id:"WATCH",label:"Watch level"},{id:"WARNING",label:"Warning level"},{id:"DISTRESS",label:"Distress level"},{id:"CRITICAL",label:"Critical level"},{id:"SEVERE",label:"Severe level"}],this.sourceOptions$=new u.X([{id:"ANY",label:"Any source"}]),this.intervalOptions=[{id:"PT1H",label:"Last hour"},{id:"PT6H",label:"Last 6 hours"},{id:"P1D",label:"Last 24 hours"},{id:"NO_LIMIT",label:"No limit"},{id:"CUSTOM",label:"Custom",group:!0}],this.downloadURL$=new u.X(null),this.severity="INFO",o.setTitle("Events");const c=s.getConfig().events;if(c){this.extraColumns=c.extraColumns||[];for(const t of this.extraColumns)for(let e=0;e<this.columns.length;e++)if(this.columns[e].id===t.after){this.columns.splice(e+1,0,t);break}}t.yamcsClient.getEventSources(t.instance).then(t=>{for(const e of t)this.sourceOptions$.next([...this.sourceOptions$.value,{id:e,label:e}])}),this.dataSource=new w(t,r),this.initializeOptions(),this.loadData(),this.filterForm.get("filter").valueChanges.pipe((0,h.b)(400)).forEach(t=>{this.filter=t,this.loadData()}),this.filterForm.get("severity").valueChanges.forEach(t=>{this.severity=t,this.loadData()}),this.filterForm.get("source").valueChanges.forEach(t=>{this.source="ANY"!==t?t:null,this.loadData()}),this.filterForm.get("interval").valueChanges.forEach(e=>{if("CUSTOM"===e){const t=this.validStart||this.yamcs.getMissionTime(),e=this.validStop||this.yamcs.getMissionTime();this.filterForm.get("customStart").setValue(f.Y6(t)),this.filterForm.get("customStop").setValue(f.Y6(e))}else"NO_LIMIT"===e?(this.validStart=null,this.validStop=null,this.appliedInterval=e,this.loadData()):(this.validStop=t.getMissionTime(),this.validStart=(0,f.rV)(this.validStop,e),this.appliedInterval=e,this.loadData())})}initializeOptions(){const t=this.route.snapshot.queryParamMap;if(t.has("filter")&&(this.filter=t.get("filter")||"",this.filterForm.get("filter").setValue(this.filter)),t.has("severity")&&(this.severity=t.get("severity"),this.filterForm.get("severity").setValue(this.severity)),t.has("source")&&(this.source=t.get("source"),this.filterForm.get("source").setValue(this.source)),t.has("interval"))if(this.appliedInterval=t.get("interval"),this.filterForm.get("interval").setValue(this.appliedInterval),"CUSTOM"===this.appliedInterval){const e=t.get("customStart");this.filterForm.get("customStart").setValue(e),this.validStart=f.ZU(e);const i=t.get("customStop");this.filterForm.get("customStop").setValue(i),this.validStop=f.ZU(i)}else"NO_LIMIT"===this.appliedInterval?(this.validStart=null,this.validStop=null):(this.validStop=this.yamcs.getMissionTime(),this.validStart=(0,f.rV)(this.validStop,this.appliedInterval));else this.appliedInterval=Nt,this.validStop=this.yamcs.getMissionTime(),this.validStart=(0,f.rV)(this.validStop,Nt)}jumpToNow(){const t=this.filterForm.value.interval;"NO_LIMIT"===t||"CUSTOM"===t?this.filterForm.get("interval").setValue(Nt):(this.validStop=this.yamcs.getMissionTime(),this.validStart=(0,f.rV)(this.validStop,t),this.loadData())}startStreaming(){this.filterForm.get("interval").setValue("NO_LIMIT"),this.dataSource.startStreaming()}stopStreaming(){this.dataSource.stopStreaming()}applyCustomDates(){this.validStart=f.ZU(this.filterForm.value.customStart),this.validStop=f.ZU(this.filterForm.value.customStop),this.appliedInterval="CUSTOM",this.loadData()}loadData(){this.updateURL();const t={severity:this.severity};this.validStart&&(t.start=this.validStart.toISOString()),this.validStop&&(t.stop=this.validStop.toISOString()),this.filter&&(t.q=this.filter),this.source&&(t.source=this.source);const e={severity:this.severity};this.validStart&&(e.start=this.validStart.toISOString()),this.validStop&&(e.stop=this.validStop.toISOString()),this.filter&&(e.q=this.filter),this.source&&(e.source=this.source);const i=this.yamcs.yamcsClient;this.dataSource.loadEvents(t).then(t=>{const s=i.getEventsDownloadURL(this.yamcs.instance,e);this.downloadURL$.next(s)})}loadMoreData(){const t={severity:this.severity};this.validStart&&(t.start=this.validStart.toISOString()),this.filter&&(t.q=this.filter),this.source&&(t.source=this.source),this.dataSource.loadMoreData(t)}updateURL(){this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{filter:this.filter||null,severity:this.severity,source:this.source||null,interval:this.appliedInterval,customStart:"CUSTOM"===this.appliedInterval?this.filterForm.value.customStart:null,customStop:"CUSTOM"===this.appliedInterval?this.filterForm.value.customStop:null},queryParamsHandling:"merge"})}mayWriteEvents(){return this.authService.getUser().hasSystemPrivilege("WriteEvents")}createEvent(){this.dialog.open(S,{width:"400px"}).afterClosed().subscribe(t=>{t&&this.jumpToNow()})}}return t.\u0275fac=function(e){return new(e||t)(y.Y36(m.C),y.Y36(d.e),y.Y36(v.uw),y.Y36(g.E),y.Y36(n.F0),y.Y36(n.gz),y.Y36(b.Dx),y.Y36(x.j))},t.\u0275cmp=y.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&y.Gf(z,5),2&t){let t;y.iGM(t=y.CRH())&&(e.intervalSelect=t.first)}},decls:12,vars:8,consts:[["mat-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Jump to now","color","primary",3,"click"],["mat-icon-button","","matTooltip","Start streaming events","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","matTooltip","Pause streaming events","color","primary",3,"click",4,"ngIf"],["class","panel-content",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-icon-button","","matTooltip","Start streaming events","color","primary",3,"click"],["mat-icon-button","","matTooltip","Pause streaming events","color","primary",3,"click"],[1,"panel-content"],[3,"formGroup"],[1,"filter-bar"],["formControlName","filter","placeholder","Filter by text search"],["preferenceKey","events",3,"columns"],["columnChooser",""],["formControlName","severity",3,"options"],["formControlName","source",3,"options"],["icon","access_time","formControlName","interval",3,"options"],["intervalSelect",""],[4,"ngIf"],["style","text-align: right; flex: 1 1 150px",4,"ngIf"],[1,"table-status",3,"ngSwitch"],[1,"message-zone"],[3,"link","download"],[4,"ngSwitchCase"],["mat-table","",1,"ya-data-table",2,"width","100%",3,"dataSource"],["cdkColumnDef","severity"],["mat-header-cell","","style","width: 50px",4,"cdkHeaderCellDef"],["mat-cell","",4,"cdkCellDef"],["cdkColumnDef","message"],["mat-header-cell","",4,"cdkHeaderCellDef"],["mat-cell","","style","white-space: pre",4,"cdkCellDef"],["cdkColumnDef","type"],["mat-header-cell","","style","width: 150px",4,"cdkHeaderCellDef"],["cdkColumnDef","source"],["cdkColumnDef","gentime"],["mat-header-cell","","style","width: 200px",4,"cdkHeaderCellDef"],["mat-cell","","style","white-space: nowrap",4,"cdkCellDef"],["cdkColumnDef","rectime"],["cdkColumnDef","seqNumber"],["mat-header-cell","","style","width: 100px",4,"cdkHeaderCellDef"],[3,"cdkColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"cdkHeaderRowDef"],["mat-row","",3,"ngClass",4,"cdkRowDef","cdkRowDefColumns"],[2,"flex","1 1 auto"],[1,"ya-button",3,"disabled","click"],["formControlName","customStart"],["formControlName","customStop"],[1,"ya-button",3,"click"],[2,"text-align","right","flex","1 1 150px"],["fontSize","16px","color","#1b61b9"],["mat-header-cell","",2,"width","50px"],["mat-cell",""],[3,"severity"],["mat-header-cell",""],["mat-cell","",2,"white-space","pre"],[3,"text","term"],["mat-header-cell","",2,"width","150px"],["mat-header-cell","",2,"width","200px"],["mat-cell","",2,"white-space","nowrap"],["mat-header-cell","",2,"width","100px"],[3,"cdkColumnDef"],["mat-header-cell","",3,"width",4,"cdkHeaderCellDef"],["mat-header-row",""],["mat-row","",3,"ngClass"]],template:function(t,e){1&t&&(y.TgZ(0,"app-instance-page"),y.TgZ(1,"app-instance-toolbar"),y._uU(2," Events \xa0\xa0\xa0 "),y.YNc(3,G,4,0,"button",0),y.TgZ(4,"button",1),y.NdJ("click",function(){return e.jumpToNow()}),y.TgZ(5,"mat-icon"),y._uU(6,"refresh"),y.qZA(),y.qZA(),y.YNc(7,X,3,0,"button",2),y.ALo(8,"async"),y.YNc(9,K,3,0,"button",3),y.ALo(10,"async"),y.qZA(),y.YNc(11,Ut,60,34,"div",4),y.qZA()),2&t&&(y.xp6(3),y.Q6J("ngIf",e.mayWriteEvents()),y.xp6(4),y.Q6J("ngIf",!y.lcZ(8,4,e.dataSource.streaming$)),y.xp6(2),y.Q6J("ngIf",y.lcZ(10,6,e.dataSource.streaming$)),y.xp6(2),y.Q6J("ngIf",e.dataSource))},directives:[_.a,A.k,U.O5,N.lW,k.gM,q.Hw,l._Y,l.JL,l.sg,O.a,l.JJ,l.u,I.k,M.P,U.RF,E.v,U.n9,Y.BZ,J.fo,J.D5,J.O_,U.sg,J.s$,J.Sq,D.Ye,Z.Y,R.b,Y.ge,Y.ev,j,V.y,Y.XQ,Y.Gk,U.mk],pipes:[U.Ov,W.i],styles:[".table-status[_ngcontent-%COMP%]{background-color:#f2f2f2;padding-left:6px;margin-bottom:20px}.table-status[_ngcontent-%COMP%], .table-status[_ngcontent-%COMP%]   .message-zone[_ngcontent-%COMP%]{height:24px;line-height:24px;font-size:12px}.table-status[_ngcontent-%COMP%]   .message-zone[_ngcontent-%COMP%]{float:right;padding-right:6px}"],data:{animation:[p.q]},changeDetection:0}),t})(),canActivate:[r.T]}]}];let qt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({imports:[[n.Bz.forChild(kt)],n.Bz]}),t})(),Ot=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({imports:[[s.m,qt]]}),t})()}}]);