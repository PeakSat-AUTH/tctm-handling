"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[733],{733:(Ye,Z,r)=>{r.r(Z),r.d(Z,{AlgorithmsModule:()=>Ce});var B=r(7573),l=r(1083),k=r(7309),T=r(4375),F=r(9326),u=r(381),t=r(5e3),p=r(2313),c=r(9808),y=r(8928),q=r(9140),E=r(7147),b=r(3251),v=r(4302),U=r(3995);const V=function(n,i){return{c:n,filter:i}};function z(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"a",8),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"shortName"),t._UZ(5,"app-title-copy",9),t.BQk()),2&n){const e=i.ngIf,a=t.oxw().ngIf,o=t.oxw();t.xp6(1),t.Q6J("queryParams",t.WLB(6,V,o.yamcs.context,e)),t.xp6(1),t.hij(" ",e," "),t.xp6(1),t.hij("/",t.lcZ(4,4,a.qualifiedName)," "),t.xp6(2),t.Q6J("text",a.qualifiedName)}}const N=function(n){return{c:n}};function R(n,i){if(1&n&&(t.TgZ(0,"app-instance-page"),t.TgZ(1,"app-instance-toolbar"),t.YNc(2,z,6,9,"ng-container",0),t.ALo(3,"spaceSystemName"),t.qZA(),t.TgZ(4,"nav",1,2),t.TgZ(6,"a",3,4),t._uU(8," Summary "),t.qZA(),t.TgZ(9,"a",5,6),t._uU(11," Trace "),t.qZA(),t.qZA(),t.TgZ(12,"div",7),t._UZ(13,"router-outlet"),t.qZA(),t.qZA()),2&n){const e=i.ngIf,a=t.MAs(7),o=t.MAs(10),s=t.oxw();t.xp6(2),t.Q6J("ngIf",t.lcZ(3,6,e.qualifiedName)),t.xp6(4),t.Q6J("active",a.isActive)("queryParams",t.VKq(8,N,s.yamcs.context)),t.xp6(3),t.Q6J("active",o.isActive)("queryParams",t.VKq(10,N,s.yamcs.context))("disabled","GLOBAL"!==e.scope)}}let P=(()=>{class n{constructor(e,a,o){this.yamcs=a;const s=e.snapshot.paramMap.get("qualifiedName");this.algorithm$=a.yamcsClient.getAlgorithm(this.yamcs.instance,s),this.algorithm$.then(h=>{o.setTitle(h.name)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(u.C),t.Y36(p.Dx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:3,consts:[[4,"ngIf"],["mat-tab-nav-bar","",1,"secondary"],["tabs",""],["mat-tab-link","","routerLink","summary","routerLinkActive","",3,"active","queryParams"],["rla","routerLinkActive"],["mat-tab-link","","routerLink","trace","routerLinkActive","",3,"active","queryParams","disabled"],["rlb","routerLinkActive"],[1,"tab-content-wrapper"],["routerLink","/algorithms",1,"ya-link","ya-header-link",3,"queryParams"],[3,"text"]],template:function(e,a){1&e&&(t.YNc(0,R,14,12,"app-instance-page",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.algorithm$))},directives:[c.O5,y.a,q.k,l.yS,E.Y,b.BU,b.Nj,l.Od,l.lC],pipes:[c.Ov,v.B,U.y],styles:[".tab-content-wrapper[_ngcontent-%COMP%]{position:absolute;inset:37px 0 0;overflow:auto}.tab-content-wrapper.noscroll[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),n})();var Q=r(449),_=r(3075),S=r(6087),g=r(1135);class j extends Q.o2{constructor(i){super(),this.yamcs=i,this.items$=new g.X([]),this.totalSize$=new g.X(0),this.loading$=new g.X(!1)}connect(){return this.items$}loadAlgorithms(i){return this.loading$.next(!0),this.yamcs.yamcsClient.getAlgorithms(this.yamcs.instance,i).then(e=>{this.loading$.next(!1),this.totalSize$.next(e.totalSize);const a=[];for(const o of e.spaceSystems||[])a.push({spaceSystem:!0,name:o});for(const o of e.algorithms||[])a.push({spaceSystem:!1,name:o.qualifiedName,algorithm:o});this.items$.next(a)})}disconnect(){this.items$.complete(),this.totalSize$.complete(),this.loading$.complete()}}var H=r(4298),X=r(1821),G=r(9971),K=r(141),m=r(8279),f=r(3874),W=r(8726),tt=r(7365);const et=["top"];function nt(n,i){if(1&n&&t._UZ(0,"app-breadcrumb",13),2&n){const e=i.$implicit;t.Q6J("link",e.route)("queryParams",e.queryParams)("label",e.name)}}const I=function(n){return{c:n}};function at(n,i){if(1&n&&(t.TgZ(0,"div",4),t.TgZ(1,"app-breadcrumb-trail"),t._UZ(2,"app-breadcrumb",11),t.YNc(3,nt,1,3,"app-breadcrumb",12),t.qZA(),t.qZA()),2&n){const e=t.oxw().ngIf,a=t.oxw();t.xp6(2),t.Q6J("queryParams",t.VKq(2,I,a.yamcs.context)),t.xp6(1),t.Q6J("ngForOf",e)}}function it(n,i){if(1&n&&(t.ynx(0),t.YNc(1,at,4,4,"div",10),t.BQk()),2&n){const e=i.ngIf;t.xp6(1),t.Q6J("ngIf",e.length)}}function ot(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Name"),t.qZA())}const rt=function(){return["/algorithms"]},st=function(n,i){return{c:n,system:i}};function ct(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-icon",29),t._uU(2,"folder"),t.qZA(),t.TgZ(3,"a",30),t._uU(4),t.ALo(5,"filename"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,a=t.oxw(2);t.xp6(3),t.Q6J("routerLink",t.DdM(5,rt))("queryParams",t.WLB(6,st,a.yamcs.context,e.name)),t.xp6(1),t.hij(" ",t.lcZ(5,3,e.name),"/ ")}}function lt(n,i){if(1&n&&t._UZ(0,"app-highlight",32),2&n){const e=t.oxw(2).$implicit,a=t.oxw(2);t.Q6J("text",e.algorithm.qualifiedName)("term",a.filterForm.value.filter)}}function gt(n,i){if(1&n&&(t._UZ(0,"app-highlight",32),t.ALo(1,"slice")),2&n){const e=t.oxw(2).$implicit,a=t.oxw(2);t.Q6J("text",t.xi3(1,2,e.algorithm.qualifiedName,a.system.length+1))("term",a.filterForm.value.filter)}}const mt=function(n){return["/algorithms",n]};function _t(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-icon",29),t._uU(2,"transform"),t.qZA(),t.TgZ(3,"a",30),t.YNc(4,lt,1,2,"app-highlight",31),t.YNc(5,gt,2,5,"app-highlight",31),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,a=t.oxw(2);t.xp6(3),t.Q6J("routerLink",t.VKq(4,mt,e.algorithm.qualifiedName))("queryParams",t.VKq(6,I,a.yamcs.context)),t.xp6(1),t.Q6J("ngIf",!a.system),t.xp6(1),t.Q6J("ngIf",a.system)}}function ut(n,i){if(1&n&&(t.TgZ(0,"td",28),t.YNc(1,ct,6,9,"ng-container",3),t.YNc(2,_t,6,8,"ng-container",3),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.spaceSystem),t.xp6(1),t.Q6J("ngIf",!e.spaceSystem)}}function ht(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Language"),t.qZA())}function pt(n,i){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu((null==e.algorithm?null:e.algorithm.language)||"-")}}function ft(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Scope"),t.qZA())}function dt(n,i){if(1&n&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu((null==e.algorithm?null:e.algorithm.scope)||"-")}}function xt(n,i){1&n&&(t.TgZ(0,"th",27),t._uU(1,"Description"),t.qZA())}function At(n,i){if(1&n&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu((null==e.algorithm?null:e.algorithm.shortDescription)||"-")}}function Zt(n,i){1&n&&t._UZ(0,"th",35)}function Tt(n,i){1&n&&t._UZ(0,"td",33)}function yt(n,i){1&n&&t._UZ(0,"tr",36)}function qt(n,i){if(1&n&&t._UZ(0,"tr",37),2&n){const e=i.$implicit,a=t.oxw(2);t.ekj("selected",a.selection.isSelected(e))}}function bt(n,i){if(1&n&&(t.TgZ(0,"table",14),t.ynx(1,15),t.YNc(2,ot,2,0,"th",16),t.YNc(3,ut,3,2,"td",17),t.BQk(),t.ynx(4,18),t.YNc(5,ht,2,0,"th",16),t.YNc(6,pt,2,1,"td",19),t.BQk(),t.ynx(7,20),t.YNc(8,ft,2,0,"th",16),t.YNc(9,dt,2,1,"td",19),t.BQk(),t.ynx(10,21),t.YNc(11,xt,2,0,"th",16),t.YNc(12,At,2,1,"td",22),t.BQk(),t.ynx(13,23),t.YNc(14,Zt,1,0,"th",24),t.YNc(15,Tt,1,0,"td",19),t.BQk(),t.YNc(16,yt,1,0,"tr",25),t.YNc(17,qt,1,2,"tr",26),t.qZA()),2&n){const e=t.oxw();t.Q6J("dataSource",e.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function vt(n,i){if(1&n&&(t.TgZ(0,"div",1),t._uU(1," The Mission Database for "),t.TgZ(2,"i"),t._uU(3),t.qZA(),t._uU(4," does not define any algorithms. "),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.Oqu(e.yamcs.instance)}}let w=(()=>{class n{constructor(e,a,o,s){this.yamcs=e,this.route=o,this.router=s,this.filterForm=new _.cw({filter:new _.NI,scope:new _.NI("ANY")}),this.shortName=!1,this.pageSize=100,this.system=null,this.breadcrumb$=new g.X([]),this.displayedColumns=["name","language","scope","shortDescription","actions"],this.scopeOptions=[{id:"ANY",label:"Any scope"},{id:"GLOBAL",label:"Global"},{id:"COMMAND_VERIFICATION",label:"Command Verification"},{id:"CONTAINER_PROCESSING",label:"Container Processing"}],this.selection=new Q.Ov(!1),a.setTitle("Algorithms"),this.dataSource=new j(e)}ngAfterViewInit(){const e=this.route.snapshot.queryParamMap;e.has("filter")&&(this.filter=e.get("filter")||"",this.filterForm.get("filter").setValue(this.filter)),e.has("scope")&&(this.scope=e.get("scope"),this.filterForm.get("scope").setValue(this.scope)),this.filterForm.get("filter").valueChanges.subscribe(a=>{this.paginator.pageIndex=0,this.filter=a,this.updateDataSource()}),this.filterForm.get("scope").valueChanges.forEach(a=>{this.scope="ANY"!==a?a:null,this.updateDataSource()}),this.changeSystem(this.route.snapshot.queryParamMap),this.queryParamMapSubscription=this.route.queryParamMap.subscribe(a=>{a.get("system")!==this.system&&this.changeSystem(a)}),this.paginator.page.subscribe(()=>{this.updateDataSource(),this.top.nativeElement.scrollIntoView()})}changeSystem(e){this.system=e.get("system"),this.updateBrowsePath(),this.paginator.pageIndex=e.has("page")?Number(e.get("page")):0,this.updateDataSource()}updateDataSource(){this.updateURL();const e={system:this.system||"/",pos:this.paginator.pageIndex*this.pageSize,limit:this.pageSize};this.filter&&(e.q=this.filter),this.scope&&(e.scope=this.scope),this.dataSource.loadAlgorithms(e).then(()=>{this.selection.clear(),this.updateBrowsePath()})}updateURL(){this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{page:this.paginator.pageIndex||null,filter:this.filter||null,scope:this.scope||null,system:this.system||null},queryParamsHandling:"merge"})}updateBrowsePath(){const e=[];let a="";if(this.system)for(const o of this.system.slice(1).split("/"))a+="/"+o,e.push({name:o,route:"/algorithms",queryParams:{system:a,c:this.yamcs.context}});this.breadcrumb$.next(e)}selectNext(){const e=this.dataSource.items$.value;let a=0;if(this.selection.hasValue()){const o=this.selection.selected[0];-1!==e.indexOf(o)&&(a=Math.min(e.indexOf(o)+1,e.length-1))}this.selection.select(e[a])}selectPrevious(){const e=this.dataSource.items$.value;let a=0;if(this.selection.hasValue()){const o=this.selection.selected[0];-1!==e.indexOf(o)&&(a=Math.max(e.indexOf(o)-1,0))}this.selection.select(e[a])}applySelection(){var e;if(this.selection.hasValue()){const a=this.selection.selected[0];-1!==this.dataSource.items$.value.indexOf(a)&&this.router.navigate(["/algorithms",null===(e=a.algorithm)||void 0===e?void 0:e.qualifiedName],{queryParams:{c:this.yamcs.context}})}}ngOnDestroy(){this.queryParamMapSubscription&&this.queryParamMapSubscription.unsubscribe(),this.dataSource.disconnect()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.C),t.Y36(p.Dx),t.Y36(l.gz),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],viewQuery:function(e,a){if(1&e&&(t.Gf(et,7),t.Gf(S.NW,7)),2&e){let o;t.iGM(o=t.CRH())&&(a.top=o.first),t.iGM(o=t.CRH())&&(a.paginator=o.first)}},decls:17,vars:13,consts:[["top",""],[1,"panel-content"],[3,"formGroup"],[4,"ngIf"],[1,"filter-bar"],["placeholder","Search by name","icon","search",3,"formControl","onArrowDown","onArrowUp","onEnter"],["formControlName","scope",3,"options"],["mat-table","","class","ya-data-table expand",3,"dataSource",4,"ngIf"],[3,"pageSize","hidePageSize","showFirstLastButtons","length"],["empty",""],["class","filter-bar",4,"ngIf"],["link","/algorithms","icon","account_tree",3,"queryParams"],[3,"link","queryParams","label",4,"ngFor","ngForOf"],[3,"link","queryParams","label"],["mat-table","",1,"ya-data-table","expand",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","primary-td",4,"matCellDef"],["matColumnDef","language"],["mat-cell","",4,"matCellDef"],["matColumnDef","scope"],["matColumnDef","shortDescription"],["mat-cell","","class","wrap200",4,"matCellDef"],["matColumnDef","actions"],["mat-header-cell","","class","expand",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"selected",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell","",1,"primary-td"],[1,"icon12",2,"vertical-align","middle"],[3,"routerLink","queryParams"],[3,"text","term",4,"ngIf"],[3,"text","term"],["mat-cell",""],["mat-cell","",1,"wrap200"],["mat-header-cell","",1,"expand"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"app-instance-page"),t.TgZ(1,"app-instance-toolbar"),t._uU(2," Algorithms "),t.qZA(),t._UZ(3,"span",null,0),t.TgZ(5,"div",1),t.TgZ(6,"form",2),t.YNc(7,it,2,1,"ng-container",3),t.ALo(8,"async"),t.TgZ(9,"div",4),t.TgZ(10,"app-search-filter",5),t.NdJ("onArrowDown",function(){return a.selectNext()})("onArrowUp",function(){return a.selectPrevious()})("onEnter",function(){return a.applySelection()}),t.qZA(),t._UZ(11,"app-select",6),t.qZA(),t.qZA(),t.YNc(12,bt,18,3,"table",7),t._UZ(13,"mat-paginator",8),t.ALo(14,"async"),t.qZA(),t.YNc(15,vt,5,1,"ng-template",null,9,t.W1O),t.qZA()),2&e&&(t.xp6(6),t.Q6J("formGroup",a.filterForm),t.xp6(1),t.Q6J("ngIf",t.lcZ(8,9,a.breadcrumb$)),t.xp6(3),t.Q6J("formControl",a.filterForm.controls.filter),t.xp6(1),t.Q6J("options",a.scopeOptions),t.xp6(1),t.Q6J("ngIf",a.dataSource),t.xp6(1),t.Q6J("pageSize",a.pageSize)("hidePageSize",!0)("showFirstLastButtons",!0)("length",t.lcZ(14,11,a.dataSource.totalSize$)))},directives:[y.a,q.k,_._Y,_.JL,_.sg,c.O5,H.w,X.a,c.sg,G.a,_.JJ,_.oH,K.P,_.u,m.BZ,m.w1,m.fO,m.ge,m.Dz,m.ev,f.Hw,l.yS,W.y,m.as,m.XQ,m.nj,m.Gk,S.NW],pipes:[c.Ov,tt.X,c.OU],styles:[".primary-td[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:7px}"],changeDetection:0}),n})();var Ut=r(8875),Nt=(r(4495),r(6157),r(3189),r(2830),r(1731)),D=r(4454),Pt=r(8619),Qt=r(4834),d=r(2230);function St(n,i){if(1&n&&t._UZ(0,"app-led",2),2&n){const e=t.oxw();t.Q6J("color",e.onColor)("fade",!1)("width",e.size)("height",e.size)}}function It(n,i){if(1&n&&t._UZ(0,"app-led",3),2&n){const e=t.oxw();t.Q6J("fade",!1)("width",e.size)("height",e.size)}}let wt=(()=>{class n{constructor(){this.size=14,this.onColor=d.U3,this.offColor=d.fk}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-algorithm-status"]],inputs:{status:"status",size:"size"},decls:2,vars:2,consts:[[3,"color","fade","width","height",4,"ngIf"],["color","red",3,"fade","width","height",4,"ngIf"],[3,"color","fade","width","height"],["color","red",3,"fade","width","height"]],template:function(e,a){1&e&&(t.YNc(0,St,1,4,"app-led",0),t.YNc(1,It,1,3,"app-led",1)),2&e&&(t.Q6J("ngIf",!a.status.errorMessage),t.xp6(1),t.Q6J("ngIf",a.status.errorMessage))},directives:[c.O5,d.on],styles:["[_nghost-%COMP%]{line-height:0;font-size:0}"],changeDetection:0}),n})();var Dt=r(97),J=r(5981),Jt=r(1099),C=r(119);const Ct=["text"],Ot=function(n,i){return{c:n,filter:i}};function Yt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"a",10),t._uU(2),t.qZA(),t.BQk()),2&n){const e=i.ngIf,a=t.oxw();t.xp6(1),t.Q6J("queryParams",t.WLB(2,Ot,a.yamcs.context,e)),t.xp6(1),t.hij(" ",e," ")}}function Mt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"dt"),t._uU(2),t.qZA(),t.TgZ(3,"dd"),t._uU(4),t.qZA(),t.BQk()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.namespace),t.xp6(2),t.Oqu(e.name)}}function $t(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"dt"),t._uU(2,"Description"),t.qZA(),t.TgZ(3,"dd"),t._UZ(4,"app-markdown",11),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("text",e.algorithm.longDescription)}}function Lt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"dt"),t._uU(2,"Description"),t.qZA(),t.TgZ(3,"dd"),t._uU(4),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(4),t.hij(" ",e.algorithm.shortDescription||"-"," ")}}function Bt(n,i){1&n&&(t.ynx(0),t._uU(1,"OK"),t.BQk())}function kt(n,i){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.status.errorMessage)}}function Ft(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"nanosDuration"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" ",t.lcZ(2,1,e.status.execTimeNs/e.status.runCount)," ")}}function Et(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function Vt(n,i){if(1&n&&(t.ynx(0),t._UZ(1,"mat-divider"),t.TgZ(2,"dl",3),t.TgZ(3,"dt"),t._uU(4,"Status"),t.qZA(),t.TgZ(5,"dd",12),t._UZ(6,"app-algorithm-status",13),t._uU(7,"\xa0 "),t.YNc(8,Bt,2,0,"ng-container",1),t.YNc(9,kt,2,1,"ng-container",1),t.qZA(),t.TgZ(10,"dt"),t._uU(11,"Run count"),t.qZA(),t.TgZ(12,"dd"),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"dt"),t._uU(16,"Total run time"),t.qZA(),t.TgZ(17,"dd"),t._uU(18),t.ALo(19,"nanosDuration"),t.qZA(),t.TgZ(20,"dt"),t._uU(21,"Average run time"),t.qZA(),t.TgZ(22,"dd"),t.YNc(23,Ft,3,3,"span",1),t.YNc(24,Et,2,0,"span",1),t.qZA(),t.TgZ(25,"dt"),t._uU(26,"Last run"),t.qZA(),t.TgZ(27,"dd"),t._uU(28),t.ALo(29,"datetime"),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("status",e.status),t.xp6(2),t.Q6J("ngIf",!e.status.errorMessage),t.xp6(1),t.Q6J("ngIf",e.status.errorMessage),t.xp6(4),t.Oqu(t.lcZ(14,8,e.status.runCount)||"-"),t.xp6(5),t.hij(" ",t.lcZ(19,10,e.status.execTimeNs)||"-"," "),t.xp6(5),t.Q6J("ngIf",e.status.runCount),t.xp6(1),t.Q6J("ngIf",!e.status.runCount),t.xp6(4),t.Oqu(t.lcZ(29,12,e.status.lastRun)||"-")}}function zt(n,i){1&n&&(t.TgZ(0,"app-help"),t._uU(1," You may override the MDB algorithm text. Such a change is scoped to the current processor only and will not persist across server restarts. "),t.qZA())}function Rt(n,i){1&n&&(t.TgZ(0,"span",14),t._uU(1," MDB Override "),t.qZA())}function jt(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"button",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().saveTextChanges()}),t.ALo(2,"async"),t.TgZ(3,"mat-icon"),t._uU(4,"save"),t.qZA(),t._uU(5," Save "),t.qZA(),t.TgZ(6,"button",17),t.NdJ("click",function(){return t.CHM(e),t.oxw().revertText()}),t.ALo(7,"async"),t.TgZ(8,"mat-icon"),t._uU(9,"undo"),t.qZA(),t._uU(10," Restore MDB text "),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();let a;t.xp6(1),t.Q6J("disabled",!t.lcZ(2,2,e.dirty$)),t.xp6(5),t.Q6J("disabled",!(null!=(a=t.lcZ(7,4,e.overrides$))&&a.textOverride))}}function Ht(n,i){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"check"),t.qZA())}function Xt(n,i){1&n&&(t.TgZ(0,"mat-icon"),t._uU(1,"close"),t.qZA())}const x=function(n){return["/telemetry/parameters/",n]},A=function(n){return{c:n}};function Gt(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"a",18),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"td",19),t._uU(7),t.qZA(),t.TgZ(8,"td",19),t.YNc(9,Ht,2,0,"mat-icon",1),t.YNc(10,Xt,2,0,"mat-icon",1),t.qZA(),t.qZA()),2&n){const e=i.$implicit,a=t.oxw(2);t.xp6(2),t.Oqu(e.inputName),t.xp6(2),t.Q6J("routerLink",t.VKq(7,x,e.parameter.qualifiedName))("queryParams",t.VKq(9,A,a.yamcs.context)),t.xp6(1),t.hij(" ",e.parameter.qualifiedName," "),t.xp6(2),t.hij(" ",e.parameterInstance," "),t.xp6(2),t.Q6J("ngIf",e.mandatory),t.xp6(1),t.Q6J("ngIf",!e.mandatory)}}function Kt(n,i){if(1&n&&(t.TgZ(0,"table",9),t.TgZ(1,"tr"),t.TgZ(2,"th"),t._uU(3,"Input Name"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Parameter"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Instance"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Mandatory"),t.qZA(),t.qZA(),t.YNc(10,Gt,11,11,"tr",2),t.qZA()),2&n){const e=t.oxw();t.xp6(10),t.Q6J("ngForOf",e.algorithm.inputParameter)}}function Wt(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function te(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"a",18),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const e=i.$implicit,a=t.oxw(2);t.xp6(2),t.Oqu(e.outputName),t.xp6(2),t.Q6J("routerLink",t.VKq(4,x,e.parameter.qualifiedName))("queryParams",t.VKq(6,A,a.yamcs.context)),t.xp6(1),t.hij(" ",e.parameter.qualifiedName," ")}}function ee(n,i){if(1&n&&(t.TgZ(0,"table",9),t.TgZ(1,"tr"),t.TgZ(2,"th"),t._uU(3,"Output Name"),t.qZA(),t.TgZ(4,"th"),t._uU(5,"Parameter"),t.qZA(),t.qZA(),t.YNc(6,te,6,8,"tr",2),t.qZA()),2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.algorithm.outputParameter)}}function ne(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function ae(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2,"OnParameterUpdate"),t.qZA(),t.TgZ(3,"td"),t.TgZ(4,"a",18),t._uU(5),t.qZA(),t.qZA(),t.qZA()),2&n){const e=i.$implicit,a=t.oxw();t.xp6(4),t.Q6J("routerLink",t.VKq(3,x,e.qualifiedName))("queryParams",t.VKq(5,A,a.yamcs.context)),t.xp6(1),t.hij(" ",e.qualifiedName," ")}}function ie(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2,"OnPeriodicRate"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.hij("",e.algorithm.onPeriodicRate," ms")}}let oe=(()=>{class n{constructor(e,a,o,s){this.route=e,this.yamcs=a,this.messageService=o,this.authService=s,this.overrides$=new g.X(null),this.dirty$=new g.X(!1)}ngAfterViewInit(){this.initializeEditor(),this.refreshOverrides()}isChangeMissionDatabaseEnabled(){return this.authService.getUser().hasSystemPrivilege("ChangeMissionDatabase")}initializeEditor(){switch(this.editor=Ut.edit(this.textContainer.nativeElement),this.editor.$blockScrolling=1/0,this.isChangeMissionDatabaseEnabled()?this.editor.addEventListener("change",()=>{this.dirty$.next(!0)}):this.editor.setReadOnly(!0),this.algorithm.language.toLowerCase()){case"javascript":this.editor.getSession().setMode("ace/mode/javascript");break;case"python":this.editor.getSession().setMode("ace/mode/python");break;default:console.warn(`Unexpected language ${this.algorithm.language}`)}this.editor.setTheme("ace/theme/eclipse")}refreshOverrides(){const e=this.route.parent.snapshot.paramMap.get("qualifiedName");this.yamcs.yamcsClient.getAlgorithmOverrides(this.yamcs.instance,this.yamcs.processor,e).then(s=>{this.overrides$.next(s),this.updateEditorValue(s.textOverride?s.textOverride.text:this.algorithm.text)}).catch(s=>this.messageService.showError(s))}updateEditorValue(e){this.editor.session.setValue(e),this.dirty$.next(!1)}saveTextChanges(){const e=this.editor.getSession().getValue();this.yamcs.yamcsClient.updateAlgorithmText(this.yamcs.instance,this.yamcs.processor,this.algorithm.qualifiedName,e).then(()=>this.refreshOverrides()).catch(s=>this.messageService.showError(s))}revertText(){this.yamcs.yamcsClient.revertAlgorithmText(this.yamcs.instance,this.yamcs.processor,this.algorithm.qualifiedName).then(()=>this.refreshOverrides()).catch(o=>this.messageService.showError(o))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(u.C),t.Y36(D.e),t.Y36(Nt.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-algorithm-detail"]],viewQuery:function(e,a){if(1&e&&t.Gf(Ct,7),2&e){let o;t.iGM(o=t.CRH())&&(a.textContainer=o.first)}},inputs:{algorithm:"algorithm",status:"status"},decls:64,vars:23,consts:[[1,"dl-horizontal","no-lead"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"dl-horizontal"],["class","override-annotation",4,"ngIf"],["style","padding-bottom: 5px",4,"ngIf"],[1,"algorithm-text"],["text",""],["yaDataTable","",4,"ngIf"],["yaDataTable",""],["routerLink","/algorithms",1,"ya-link",3,"queryParams"],[3,"text"],[2,"display","flex","align-items","center"],[3,"status"],[1,"override-annotation"],[2,"padding-bottom","5px"],[1,"ya-button",2,"margin-right","5px",3,"disabled","click"],[1,"ya-button",3,"disabled","click"],[3,"routerLink","queryParams"],[2,"text-align","center"]],template:function(e,a){if(1&e&&(t.TgZ(0,"dl",0),t.TgZ(1,"dt"),t._uU(2,"Algorithm"),t.qZA(),t.TgZ(3,"dd"),t._uU(4),t.ALo(5,"shortName"),t.qZA(),t.TgZ(6,"dt"),t._uU(7,"Space System"),t.qZA(),t.TgZ(8,"dd"),t.YNc(9,Yt,3,5,"ng-container",1),t.ALo(10,"spaceSystemName"),t.qZA(),t.YNc(11,Mt,5,2,"ng-container",2),t.YNc(12,$t,5,1,"ng-container",1),t.YNc(13,Lt,5,1,"ng-container",1),t.qZA(),t._UZ(14,"mat-divider"),t.TgZ(15,"dl",3),t.TgZ(16,"dt"),t._uU(17,"Scope"),t.qZA(),t.TgZ(18,"dd"),t._uU(19),t.qZA(),t.TgZ(20,"dt"),t._uU(21,"Language"),t.qZA(),t.TgZ(22,"dd"),t._uU(23),t.qZA(),t.qZA(),t.YNc(24,Vt,30,14,"ng-container",1),t._UZ(25,"mat-divider"),t.TgZ(26,"dl",3),t.TgZ(27,"dt"),t._uU(28," Text "),t.YNc(29,zt,2,0,"app-help",1),t._UZ(30,"br"),t.YNc(31,Rt,2,0,"span",4),t.ALo(32,"async"),t.qZA(),t.TgZ(33,"dd"),t.YNc(34,jt,11,6,"div",5),t._UZ(35,"div",6,7),t.qZA(),t.qZA(),t._UZ(37,"mat-divider"),t.TgZ(38,"dl",3),t.TgZ(39,"dt"),t._uU(40,"Input Parameters"),t.qZA(),t.TgZ(41,"dd"),t.YNc(42,Kt,11,1,"table",8),t.YNc(43,Wt,2,0,"span",1),t.qZA(),t.qZA(),t._UZ(44,"mat-divider"),t.TgZ(45,"dl",3),t.TgZ(46,"dt"),t._uU(47,"Output Parameters"),t.qZA(),t.TgZ(48,"dd"),t.YNc(49,ee,7,1,"table",8),t.YNc(50,ne,2,0,"span",1),t.qZA(),t.qZA(),t._UZ(51,"mat-divider"),t.TgZ(52,"dl",3),t.TgZ(53,"dt"),t._uU(54,"Triggers"),t.qZA(),t.TgZ(55,"dd"),t.TgZ(56,"table",9),t.TgZ(57,"tr"),t.TgZ(58,"th"),t._uU(59,"Type"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Value"),t.qZA(),t.qZA(),t.YNc(62,ae,6,7,"tr",2),t.YNc(63,ie,5,1,"tr",1),t.qZA(),t.qZA(),t.qZA()),2&e){let o;t.xp6(4),t.Oqu(t.lcZ(5,17,a.algorithm.qualifiedName)),t.xp6(5),t.Q6J("ngIf",t.lcZ(10,19,a.algorithm.qualifiedName)),t.xp6(2),t.Q6J("ngForOf",a.algorithm.alias),t.xp6(1),t.Q6J("ngIf",a.algorithm.longDescription),t.xp6(1),t.Q6J("ngIf",!a.algorithm.longDescription),t.xp6(6),t.Oqu(a.algorithm.scope||"-"),t.xp6(4),t.Oqu(a.algorithm.language||"-"),t.xp6(1),t.Q6J("ngIf",a.status&&"GLOBAL"===a.algorithm.scope),t.xp6(5),t.Q6J("ngIf",a.isChangeMissionDatabaseEnabled()),t.xp6(2),t.Q6J("ngIf",null==(o=t.lcZ(32,21,a.overrides$))?null:o.textOverride),t.xp6(3),t.Q6J("ngIf",a.isChangeMissionDatabaseEnabled()),t.xp6(8),t.Q6J("ngIf",a.algorithm.inputParameter),t.xp6(1),t.Q6J("ngIf",!a.algorithm.inputParameter),t.xp6(6),t.Q6J("ngIf",a.algorithm.outputParameter),t.xp6(1),t.Q6J("ngIf",!a.algorithm.outputParameter),t.xp6(12),t.Q6J("ngForOf",a.algorithm.onParameterUpdate),t.xp6(1),t.Q6J("ngIf",a.algorithm.onPeriodicRate)}},directives:[c.O5,l.yS,c.sg,Pt.U,Qt.d,wt,Dt.W,f.Hw,J.O],pipes:[U.y,v.B,c.JJ,Jt.B,C.i,c.Ov],styles:["code[_ngcontent-%COMP%]{display:block;background-color:#fafafa;padding:1em;font-size:10px;border:1px solid #d3d3d3;white-space:pre}.algorithm-text[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);height:300px}.override-annotation[_ngcontent-%COMP%]{font-style:italic;font-weight:300}"],changeDetection:0}),n})();function re(n,i){if(1&n&&(t.ynx(0),t._UZ(1,"app-algorithm-detail",2),t.ALo(2,"async"),t.BQk()),2&n){const e=i.ngIf,a=t.oxw();t.xp6(1),t.Q6J("algorithm",e)("status",t.lcZ(2,2,a.status$))}}let O=(()=>{class n{constructor(e,a){this.yamcs=a,this.status$=new g.X(null);const o=e.parent.snapshot.paramMap.get("qualifiedName");this.algorithm$=a.yamcsClient.getAlgorithm(this.yamcs.instance,o),this.yamcs.processor&&(this.algorithmStatusSubscription=a.yamcsClient.createAlgorithmStatusSubscription({instance:this.yamcs.instance,processor:this.yamcs.processor,name:o},h=>this.status$.next(h)))}ngOnDestroy(){this.algorithmStatusSubscription&&this.algorithmStatusSubscription.cancel()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(u.C))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:3,consts:[[1,"panel-content"],[4,"ngIf"],[3,"algorithm","status"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,re,3,4,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,a.algorithm$)))},directives:[c.O5,oe],pipes:[c.Ov],encapsulation:2,changeDetection:0}),n})();var se=r(1711),ce=r(5632),le=r(496),ge=r(1204);function me(n,i){if(1&n){const e=t.EpF();t.ynx(0),t._UZ(1,"span",8),t.TgZ(2,"app-text-action",9),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).switchToSection("runs")}),t._uU(3," Runs "),t.qZA(),t._uU(4," \xa0\xa0 "),t.TgZ(5,"app-text-action",10),t.NdJ("click",function(){return t.CHM(e),t.oxw(4).switchToSection("logs")}),t._uU(6," Logs "),t.qZA(),t.BQk()}if(2&n){const e=i.ngIf;t.xp6(2),t.Q6J("active","runs"===e),t.xp6(3),t.Q6J("active","logs"===e)}}function _e(n,i){1&n&&(t.TgZ(0,"mat-icon",19),t._uU(1,"check_circle"),t.qZA())}function ue(n,i){1&n&&(t.TgZ(0,"mat-icon",20),t._uU(1,"error"),t.qZA())}function he(n,i){1&n&&t._UZ(0,"br")}const Y=function(n){return["/telemetry/parameters/",n]},M=function(n){return{c:n}};function pe(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"a",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"value"),t.YNc(5,he,1,0,"br",0),t.BQk()),2&n){const e=i.$implicit,a=i.last,o=t.oxw(8);t.xp6(1),t.Q6J("routerLink",t.VKq(7,Y,e.id.name))("queryParams",t.VKq(9,M,o.yamcs.context)),t.xp6(1),t.hij(" ",e.id.name,""),t.xp6(1),t.hij(": ",t.lcZ(4,5,e.engValue)||"-"," "),t.xp6(2),t.Q6J("ngIf",!a)}}function fe(n,i){1&n&&(t.ynx(0),t._uU(1,"-"),t.BQk())}function de(n,i){1&n&&t._UZ(0,"br")}function xe(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"a",21),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"value"),t.YNc(5,de,1,0,"br",0),t.BQk()),2&n){const e=i.$implicit,a=i.last,o=t.oxw(8);t.xp6(1),t.Q6J("routerLink",t.VKq(7,Y,e.id.name))("queryParams",t.VKq(9,M,o.yamcs.context)),t.xp6(1),t.hij(" ",e.id.name,""),t.xp6(1),t.hij(": ",t.lcZ(4,5,e.engValue)||"-"," "),t.xp6(2),t.Q6J("ngIf",!a)}}function Ae(n,i){1&n&&(t.ynx(0),t._uU(1,"-"),t.BQk())}const $=function(){return[]};function Ze(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",13),t.YNc(2,_e,2,0,"mat-icon",15),t.YNc(3,ue,2,0,"mat-icon",16),t.qZA(),t.TgZ(4,"td",17),t._uU(5),t.ALo(6,"datetime"),t.qZA(),t.TgZ(7,"td",18),t.YNc(8,pe,6,11,"ng-container",14),t.YNc(9,fe,2,0,"ng-container",0),t.qZA(),t.TgZ(10,"td",18),t.YNc(11,xe,6,11,"ng-container",14),t.YNc(12,Ae,2,0,"ng-container",0),t.qZA(),t.TgZ(13,"td",17),t._uU(14),t.ALo(15,"nvl"),t.qZA(),t.TgZ(16,"td",17),t._uU(17),t.qZA(),t._UZ(18,"td"),t.qZA()),2&n){const e=i.$implicit;t.xp6(2),t.Q6J("ngIf",!e.error),t.xp6(1),t.Q6J("ngIf",e.error),t.xp6(2),t.Oqu(t.lcZ(6,9,e.time)),t.xp6(3),t.Q6J("ngForOf",e.inputs||t.DdM(14,$)),t.xp6(1),t.Q6J("ngIf",!(null!=e.inputs&&e.inputs.length)),t.xp6(2),t.Q6J("ngForOf",e.outputs||t.DdM(15,$)),t.xp6(1),t.Q6J("ngIf",!(null!=e.outputs&&e.outputs.length)),t.xp6(2),t.Oqu(t.xi3(15,11,e.returnValue,"-")),t.xp6(3),t.Oqu(e.error||"-")}}function Te(n,i){if(1&n&&(t.TgZ(0,"table",12),t.TgZ(1,"tr"),t._UZ(2,"th",13),t.TgZ(3,"th"),t._uU(4,"Started"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Inputs"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Outputs"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Return value"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Error"),t.qZA(),t._UZ(13,"th"),t.qZA(),t.YNc(14,Ze,19,16,"tr",14),t.qZA()),2&n){const e=t.oxw().ngIf;t.xp6(14),t.Q6J("ngForOf",e.runs)}}function ye(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Te,15,1,"table",11),t.BQk()),2&n){const e=i.ngIf;t.oxw(5);const a=t.MAs(5);t.xp6(1),t.Q6J("ngIf",null==e.runs?null:e.runs.length)("ngIfElse",a)}}function qe(n,i){if(1&n&&(t.ynx(0),t.YNc(1,ye,2,2,"ng-container",3),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw(4),a=t.MAs(5);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.trace$))("ngIfElse",a)}}function be(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",24),t._uU(2),t.ALo(3,"datetime"),t.qZA(),t.TgZ(4,"td",25),t._uU(5),t.qZA(),t.qZA()),2&n){const e=i.$implicit;t.xp6(2),t.hij("[",t.lcZ(3,2,e.time),"]"),t.xp6(3),t.Oqu(e.msg)}}function ve(n,i){if(1&n&&(t.TgZ(0,"table",23),t.YNc(1,be,6,4,"tr",14),t.qZA()),2&n){const e=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",e.logs)}}function Ue(n,i){if(1&n&&(t.ynx(0),t.YNc(1,ve,2,1,"table",22),t.BQk()),2&n){const e=i.ngIf;t.oxw(5);const a=t.MAs(5);t.xp6(1),t.Q6J("ngIf",null==e.logs?null:e.logs.length)("ngIfElse",a)}}function Ne(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Ue,2,2,"ng-container",3),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw(4),a=t.MAs(5);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,e.trace$))("ngIfElse",a)}}function Pe(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",4),t.TgZ(2,"div",5),t.TgZ(3,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).stopTrace()}),t._uU(4,"Stop trace"),t.qZA(),t._uU(5,"\xa0 "),t.TgZ(6,"button",6),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).refreshData()}),t._uU(7,"Refresh"),t.qZA(),t._uU(8,"\xa0 "),t.YNc(9,me,7,2,"ng-container",0),t.ALo(10,"async"),t.qZA(),t.qZA(),t.TgZ(11,"div",7),t.YNc(12,qe,3,4,"ng-container",0),t.ALo(13,"async"),t.YNc(14,Ne,3,4,"ng-container",0),t.ALo(15,"async"),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(3);t.xp6(9),t.Q6J("ngIf",t.lcZ(10,3,e.section$)),t.xp6(3),t.Q6J("ngIf","runs"===t.lcZ(13,5,e.section$)),t.xp6(2),t.Q6J("ngIf","logs"===t.lcZ(15,7,e.section$))}}function Qe(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Pe,16,9,"ng-container",3),t.BQk()),2&n){const e=i.ngIf;t.oxw(2);const a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",e.traceEnabled)("ngIfElse",a)}}function Se(n,i){if(1&n&&(t.ynx(0),t.YNc(1,Qe,2,2,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,e.status$))}}function Ie(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-empty-message",26),t.TgZ(1,"p"),t._uU(2," The trace tool captures runs, inputs, outputs and log messages of this algorithm. "),t.qZA(),t.TgZ(3,"p"),t.TgZ(4,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().startTrace()}),t._uU(5,"Start trace"),t.qZA(),t.qZA(),t.qZA()}}function we(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"app-empty-message"),t.TgZ(1,"p"),t._uU(2," Tracing has started. "),t.qZA(),t.TgZ(3,"p"),t._uU(4," This page does "),t.TgZ(5,"strong"),t._uU(6,"not"),t.qZA(),t._uU(7," update automatically. "),t.qZA(),t.TgZ(8,"p"),t._uU(9," Hit refresh, or check back at a later time when you think there should be trace entries. "),t.qZA(),t.TgZ(10,"p"),t.TgZ(11,"button",27),t.NdJ("click",function(){return t.CHM(e),t.oxw().refreshData()}),t._uU(12,"Refresh"),t.qZA(),t.qZA(),t.qZA()}}const De=[{path:"",canActivate:[T.a,k.z],canActivateChild:[T.a],runGuardsAndResolvers:"always",component:F.K,children:[{path:"",pathMatch:"full",component:w},{path:":qualifiedName",component:P,children:[{path:"",pathMatch:"full",redirectTo:"summary"},{path:"summary",component:O},{path:"trace",component:(()=>{class n{constructor(e,a,o,s,h){this.route=e,this.router=a,this.yamcs=o,this.messageService=h,this.status$=new g.X(null),this.trace$=new g.X(null),this.section$=new g.X("runs"),this.qualifiedName=e.parent.snapshot.paramMap.get("qualifiedName"),this.algorithm$=o.yamcsClient.getAlgorithm(this.yamcs.instance,this.qualifiedName),this.algorithm$.then(Oe=>{s.setTitle(Oe.name)}),this.refreshData()}ngAfterViewInit(){const e=this.route.snapshot.queryParamMap;e.has("section")&&this.switchToSection(e.get("section"))}switchToSection(e){this.section$.next(e),this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{section:e},queryParamsHandling:"merge"})}refreshData(){this.yamcs.processor?(this.yamcs.yamcsClient.getAlgorithmStatus(this.yamcs.instance,this.yamcs.processor,this.qualifiedName).then(e=>{this.status$.next(e)}).catch(e=>{this.messageService.showError(e)}),this.yamcs.yamcsClient.getAlgorithmTrace(this.yamcs.instance,this.yamcs.processor,this.qualifiedName).then(e=>{this.trace$.next(e)}).catch(e=>{this.messageService.showError(e)})):(this.status$.next(null),this.trace$.next(null))}startTrace(){const e=this.route.parent.snapshot.paramMap.get("qualifiedName");this.yamcs.yamcsClient.startAlgorithmTrace(this.yamcs.instance,this.yamcs.processor,e).then(()=>{this.refreshData()}).catch(a=>{this.messageService.showError(a)})}stopTrace(){const e=this.route.parent.snapshot.paramMap.get("qualifiedName");this.yamcs.yamcsClient.stopAlgorithmTrace(this.yamcs.instance,this.yamcs.processor,e).then(()=>{this.refreshData(),this.switchToSection("runs"),this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{section:null},queryParamsHandling:"merge"})}).catch(a=>{this.messageService.showError(a)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.gz),t.Y36(l.F0),t.Y36(u.C),t.Y36(p.Dx),t.Y36(D.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:6,vars:3,consts:[[4,"ngIf"],["notrace",""],["empty",""],[4,"ngIf","ngIfElse"],[1,"extra-bar-container"],[1,"extra-bar"],[1,"ya-button",3,"click"],[1,"panel-content"],[1,"separator",2,"margin-left","10px","margin-right","10px"],["icon","directions_run",3,"active","click"],["icon","menu_book",3,"active","click"],["yaDataTable","","class","expand",4,"ngIf","ngIfElse"],["yaDataTable","",1,"expand"],[1,"status"],[4,"ngFor","ngForOf"],["class","success",4,"ngIf"],["class","alert",4,"ngIf"],[2,"width","200px"],[2,"width","400px"],[1,"success"],[1,"alert"],[1,"secundary",3,"routerLink","queryParams"],["class","logs mono","style","width: 100%",4,"ngIf","ngIfElse"],[1,"logs","mono",2,"width","100%"],["width","1",1,"time",2,"white-space","nowrap"],[1,"msg",2,"white-space","pre"],["headerTitle","Trace"],[1,"ya-button","primary",3,"click"]],template:function(e,a){1&e&&(t.YNc(0,Se,3,3,"ng-container",0),t.ALo(1,"async"),t.YNc(2,Ie,6,0,"ng-template",null,1,t.W1O),t.YNc(4,we,13,0,"ng-template",null,2,t.W1O)),2&e&&t.Q6J("ngIf",t.lcZ(1,1,a.algorithm$))},directives:[c.O5,se.l,J.O,c.sg,f.Hw,l.yS,ce.M],pipes:[c.Ov,C.i,le.V,ge.m],styles:[".extra-bar-container[_ngcontent-%COMP%]{padding:12px;border-bottom:1.1px solid rgba(0,0,0,.08)}.extra-bar[_ngcontent-%COMP%]{height:24px;line-height:24px}.separator[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.12)}table.logs[_ngcontent-%COMP%]{line-height:12px}table.logs[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px;color:#000000a7}table.logs[_ngcontent-%COMP%]   td.time[_ngcontent-%COMP%]{color:#00000059}"],changeDetection:0}),n})()}]}]}];let Je=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(De)],l.Bz]}),n})(),Ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[B.m,Je]]}),n})()}}]);