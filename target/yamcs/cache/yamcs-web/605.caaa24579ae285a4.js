"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[605],{605:(vt,N,c)=>{c.r(N),c.d(N,{FileTransferModule:()=>yt});var Y=c(7573),g=c(1083),L=c(7309),D=c(4375),E=c(9326),u=c(8279),f=c(1135),T=c(381),j=c(4986),R=c(4482),H=c(5032),U=c(5403),X=c(7445);var W=c(8675),K=c(4004),V=c(1884);class F{constructor(a,t){this.transfer=a,this.objectUrl=t,this.originalTransfer$=new f.X(a),this.transfer$=this.originalTransfer$.pipe(function z(i,a=j.z){return function G(i){return(0,R.e)((a,t)=>{let n=!1,r=null;a.subscribe((0,U.x)(t,s=>{n=!0,r=s})),i.subscribe((0,U.x)(t,()=>{if(n){n=!1;const s=r;r=null,t.next(s)}},H.Z))})}((0,X.F)(i,a))}(500),(0,W.O)(a)),this.state$=this.originalTransfer$.pipe((0,K.U)(n=>n.state),(0,V.x)())}updateTransfer(a){this.transfer=a,this.originalTransfer$.next(a)}}var e=c(5e3),Z=c(5328),k=c(4454),p=c(9808),ee=c(1711),te=c(5899),ie=c(119),ne=c(5682);function ae(i,a){1&i&&(e.TgZ(0,"th",19),e._uU(1,"Started"),e.qZA())}function re(i,a){if(1&i&&(e.TgZ(0,"td",20),e._uU(1),e.ALo(2,"datetime"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,t.transfer.startTime)," ")}}function se(i,a){1&i&&(e.TgZ(0,"th",19),e._uU(1,"Local file"),e.qZA())}function oe(i,a){if(1&i&&(e.TgZ(0,"td",20),e.TgZ(1,"a",21),e._uU(2),e.qZA(),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Q6J("href",t.objectUrl,e.LSH),e.xp6(1),e.Oqu(t.transfer.objectName)}}function ce(i,a){1&i&&(e.TgZ(0,"th",22),e._uU(1,"Direction"),e.qZA())}function le(i,a){1&i&&(e.ynx(0),e._uU(1,"\u27f5"),e.BQk())}function ue(i,a){1&i&&(e.ynx(0),e._uU(1,"\u27f6"),e.BQk())}function pe(i,a){if(1&i&&(e.TgZ(0,"td",23),e.YNc(1,le,2,0,"ng-container",24),e.YNc(2,ue,2,0,"ng-container",24),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Q6J("ngIf","DOWNLOAD"===t.transfer.direction),e.xp6(1),e.Q6J("ngIf","UPLOAD"===t.transfer.direction)}}function me(i,a){1&i&&(e.TgZ(0,"th",19),e._uU(1,"Remote file"),e.qZA())}function fe(i,a){if(1&i&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Oqu(t.transfer.remotePath||"-")}}function de(i,a){1&i&&(e.TgZ(0,"th",25),e._uU(1,"Size"),e.qZA())}function ge(i,a){if(1&i&&(e.TgZ(0,"td",20),e._uU(1),e.ALo(2,"formatBytes"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.transfer.totalSize))}}function he(i,a){1&i&&(e.TgZ(0,"th",26),e._uU(1,"Status"),e.qZA())}function _e(i,a){if(1&i&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,1,t)||"-"," ")}}function Te(i,a){if(1&i&&(e.TgZ(0,"td",20),e.YNc(1,_e,3,3,"ng-container",24),e.ALo(2,"async"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.state$))}}function be(i,a){1&i&&e._UZ(0,"th",27)}function ye(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-text-action",31),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2).$implicit;return e.oxw().pauseTransfer(r)}),e._uU(1,"PAUSE"),e.qZA()}}function ve(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-text-action",32),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2).$implicit;return e.oxw().resumeTransfer(r)}),e._uU(1,"RESUME"),e.qZA()}}function Ze(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.YNc(1,ye,2,0,"app-text-action",28),e.YNc(2,ve,2,0,"app-text-action",29),e.TgZ(3,"app-text-action",30),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit;return e.oxw().cancelTransfer(r)}),e._uU(4,"CANCEL"),e.qZA(),e.BQk()}if(2&i){const t=a.ngIf;e.xp6(1),e.Q6J("ngIf","RUNNING"===t),e.xp6(1),e.Q6J("ngIf","PAUSED"===t)}}function xe(i,a){if(1&i&&(e.TgZ(0,"td",20),e.YNc(1,Ze,5,2,"ng-container",24),e.ALo(2,"async"),e.qZA()),2&i){const t=a.$implicit;e.xp6(1),e.Q6J("ngIf",e.lcZ(2,1,t.state$))}}function Fe(i,a){if(1&i&&e._UZ(0,"mat-progress-bar",37),2&i){const t=e.oxw().ngIf,n=e.oxw(2);e.Q6J("value",100*n.transferPercent(t))}}function Ae(i,a){if(1&i&&(e.TgZ(0,"span",38),e._uU(1),e.qZA()),2&i){const t=e.oxw().ngIf;e.xp6(1),e.hij(" ",t.failureReason," ")}}function Ce(i,a){if(1&i&&(e.TgZ(0,"div",34),e._uU(1),e.ALo(2,"percent"),e.YNc(3,Fe,1,1,"mat-progress-bar",35),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"formatBytes"),e.qZA(),e.YNc(7,Ae,2,1,"span",36),e.qZA()),2&i){const t=a.ngIf,n=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,4,n.transferPercent(t),"1.1")," "),e.xp6(2),e.Q6J("ngIf","RUNNING"===t.state||"PAUSED"===t.state||"CANCELLING"===t.state),e.xp6(2),e.Oqu(e.lcZ(6,7,t.sizeTransferred)),e.xp6(2),e.Q6J("ngIf",t.failureReason)}}function we(i,a){if(1&i&&(e.TgZ(0,"td",20),e.ALo(1,"async"),e.YNc(2,Ce,8,9,"div",33),e.ALo(3,"async"),e.qZA()),2&i){const t=a.$implicit,n=e.oxw();e.uIk("colspan",e.lcZ(1,2,n.displayedColumns$).length),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,t.transfer$))}}function Se(i,a){1&i&&e._UZ(0,"tr",39)}function Ne(i,a){1&i&&e._UZ(0,"tr",40),2&i&&e.ekj("nodetail","COMPLETED"===a.$implicit.transfer.state)}function De(i,a){1&i&&e._UZ(0,"tr",41)}const Ue=function(){return["detail"]};let A=(()=>{class i{constructor(t,n){this.yamcs=t,this.messageService=n,this.defaultColumns=["startTime","localFile","direction","remoteFile","size","status"],this.displayedColumns$=new f.X(this.defaultColumns),this.isIncomplete=(r,s)=>"COMPLETED"!==s.transfer.state,this.dataSource=new u.by,this.showActions=!1}ngOnChanges(){this.displayedColumns$.next(this.showActions?[...this.defaultColumns,"actions"]:this.defaultColumns)}transferPercent(t){return 0!=t.totalSize?t.sizeTransferred/t.totalSize:0}pauseTransfer(t){this.yamcs.yamcsClient.pauseFileTransfer(this.yamcs.instance,this.serviceName,t.transfer.id).catch(r=>{this.messageService.showError(r)})}resumeTransfer(t){this.yamcs.yamcsClient.resumeFileTransfer(this.yamcs.instance,this.serviceName,t.transfer.id).catch(r=>{this.messageService.showError(r)})}cancelTransfer(t){this.yamcs.yamcsClient.cancelFileTransfer(this.yamcs.instance,this.serviceName,t.transfer.id).catch(r=>{this.messageService.showError(r)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.C),e.Y36(k.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-file-transfer-table"]],inputs:{serviceName:"serviceName",dataSource:"dataSource",showActions:"showActions"},features:[e.TTD],decls:29,vars:10,consts:[["mat-table","","multiTemplateDataRows","",1,"ya-data-table",3,"dataSource"],["matColumnDef","startTime"],["mat-header-cell","","style","width: 200px",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","localFile"],["matColumnDef","direction"],["mat-header-cell","","width","1",4,"matHeaderCellDef"],["mat-cell","","style","text-align: center",4,"matCellDef"],["matColumnDef","remoteFile"],["matColumnDef","size"],["mat-header-cell","","style","width: 70px",4,"matHeaderCellDef"],["matColumnDef","status"],["mat-header-cell","","style","width: 100px",4,"matHeaderCellDef"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","detail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","item-row",3,"nodetail",4,"matRowDef","matRowDefColumns"],["mat-row","","class","item-detail",4,"matRowDef","matRowDefColumns","matRowDefWhen"],["mat-header-cell","",2,"width","200px"],["mat-cell",""],["download","",3,"href"],["mat-header-cell","","width","1"],["mat-cell","",2,"text-align","center"],[4,"ngIf"],["mat-header-cell","",2,"width","70px"],["mat-header-cell","",2,"width","100px"],["mat-header-cell",""],["icon","pause_circle_outline",3,"click",4,"ngIf"],["icon","play_circle_outline",3,"click",4,"ngIf"],["icon","not_interested",3,"click"],["icon","pause_circle_outline",3,"click"],["icon","play_circle_outline",3,"click"],["class","detail-layout",4,"ngIf"],[1,"detail-layout"],["style","width: 200px",3,"value",4,"ngIf"],["class","error",4,"ngIf"],[2,"width","200px",3,"value"],[1,"error"],["mat-header-row",""],["mat-row","",1,"item-row"],["mat-row","",1,"item-detail"]],template:function(t,n){1&t&&(e.TgZ(0,"table",0),e.ynx(1,1),e.YNc(2,ae,2,0,"th",2),e.YNc(3,re,3,3,"td",3),e.BQk(),e.ynx(4,4),e.YNc(5,se,2,0,"th",2),e.YNc(6,oe,3,2,"td",3),e.BQk(),e.ynx(7,5),e.YNc(8,ce,2,0,"th",6),e.YNc(9,pe,3,2,"td",7),e.BQk(),e.ynx(10,8),e.YNc(11,me,2,0,"th",2),e.YNc(12,fe,2,1,"td",3),e.BQk(),e.ynx(13,9),e.YNc(14,de,2,0,"th",10),e.YNc(15,ge,3,3,"td",3),e.BQk(),e.ynx(16,11),e.YNc(17,he,2,0,"th",12),e.YNc(18,Te,3,3,"td",3),e.BQk(),e.ynx(19,13),e.YNc(20,be,1,0,"th",14),e.YNc(21,xe,3,3,"td",3),e.BQk(),e.ynx(22,15),e.YNc(23,we,4,6,"td",3),e.BQk(),e.YNc(24,Se,1,0,"tr",16),e.ALo(25,"async"),e.YNc(26,Ne,1,2,"tr",17),e.ALo(27,"async"),e.YNc(28,De,1,0,"tr",18),e.qZA()),2&t&&(e.Q6J("dataSource",n.dataSource),e.xp6(24),e.Q6J("matHeaderRowDef",e.lcZ(25,5,n.displayedColumns$)),e.xp6(2),e.Q6J("matRowDefColumns",e.lcZ(27,7,n.displayedColumns$)),e.xp6(2),e.Q6J("matRowDefColumns",e.DdM(9,Ue))("matRowDefWhen",n.isIncomplete))},directives:[u.BZ,u.w1,u.fO,u.ge,u.Dz,u.ev,p.O5,ee.l,te.pW,u.as,u.XQ,u.nj,u.Gk],pipes:[ie.i,ne.b,p.Ov,p.rS,p.Zx],styles:["tr.item-row[_ngcontent-%COMP%]:not(.nodetail)   td[_ngcontent-%COMP%]{border-bottom-width:0}tr.item-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:40px!important}.detail-layout[_ngcontent-%COMP%]{display:flex;align-items:center}.detail-layout[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-left:20px}.error[_ngcontent-%COMP%]{color:#dc143c}"],changeDetection:0}),i})(),I=(()=>{class i{constructor(t,n,r){this.yamcs=t,this.serviceName$=new f.X(null),this.dataSource=new u.by,this.transfersById=new Map,this.dirty=!1,this.storageClient=t.createStorageClient(),this.queryParamSubscription=n.queryParamMap.subscribe(s=>{const o=s.get("service");this.serviceName$.next(o),this.switchService(o)}),this.syncSubscription=r.sync(()=>{if(this.dirty){const s=[...this.transfersById.values()];s.sort((o,m)=>this.compareTransfers(o.transfer,m.transfer)),this.dataSource.data=s,this.dirty=!1}})}compareTransfers(t,n){return(n.creationTime||n.startTime||"").localeCompare(t.creationTime||t.startTime||"")}switchService(t){this.dirty=!1,this.transfersById.clear(),this.dataSource.data=[],this.transferSubscription&&this.transferSubscription.cancel(),t&&(this.transferSubscription=this.yamcs.yamcsClient.createTransferSubscription({instance:this.yamcs.instance,serviceName:t},n=>{"FAILED"===n.state&&this.setOrUpdate(n),this.dirty=!0}))}setOrUpdate(t){let n=this.transfersById.get(t.id);if(n)n.updateTransfer(t);else{const r=this.storageClient.getObjectURL("_global",t.bucket,t.objectName);n=new F(t,r),this.transfersById.set(t.id,n)}}ngOnDestroy(){this.syncSubscription&&this.syncSubscription.unsubscribe(),this.queryParamSubscription&&this.queryParamSubscription.unsubscribe(),this.transferSubscription&&this.transferSubscription.cancel()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.C),e.Y36(g.gz),e.Y36(Z.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:3,vars:4,consts:[[1,"panel-content"],[3,"serviceName","dataSource"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-file-transfer-table",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("serviceName",e.lcZ(2,2,n.serviceName$))("dataSource",n.dataSource))},directives:[A],pipes:[p.Ov],encapsulation:2,changeDetection:0}),i})();var l=c(3075),b=c(8966),P=c(9744),O=c(4298),q=c(1821),y=c(7587),C=c(3874),x=c(4594);const ke=["selector"];function Ie(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-breadcrumb",25),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).changePrefix(s.prefix)}),e.qZA()}2&i&&e.Q6J("label",a.$implicit.name)("action",!0)}function Pe(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",22),e.TgZ(1,"app-breadcrumb-trail"),e.TgZ(2,"app-breadcrumb",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().changePrefix("")}),e.qZA(),e.YNc(3,Ie,1,2,"app-breadcrumb",24),e.qZA(),e.qZA()}if(2&i){const t=a.ngIf;e.xp6(2),e.Q6J("action",!0),e.xp6(1),e.Q6J("ngForOf",t)}}function Oe(i,a){if(1&i&&(e.TgZ(0,"td",26),e.TgZ(1,"mat-icon",27),e._uU(2,"shopping_basket"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=a.$implicit;e.xp6(3),e.hij("\xa0 ",t.name," ")}}const qe=function(i){return{selected:i}};function Qe(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().selectBucket(s)}),e.ALo(1,"async"),e.qZA()}if(2&i){const t=a.$implicit,n=e.oxw();e.Q6J("ngClass",e.VKq(3,qe,t===e.lcZ(1,1,n.selectedBucket$)))}}function Be(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-object-selector",29,30),e.NdJ("prefixChange",function(r){return e.CHM(t),e.oxw().updateBreadcrumb(r)}),e.qZA(),e.BQk()}if(2&i){const t=a.ngIf;e.xp6(1),e.Q6J("bucket",t)("isMultiSelect",!1)("foldersOnly",!0)}}function Je(i,a){1&i&&(e.ynx(0),e.TgZ(1,"label"),e._UZ(2,"input",31),e._uU(3," Reliable "),e.qZA(),e._UZ(4,"br"),e.BQk())}function $e(i,a){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.name),e.xp6(1),e.AsE("",t.name," [id=",t.id,"]")}}function Me(i,a){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.name),e.xp6(1),e.AsE("",t.name," [id=",t.id,"]")}}let Ye=(()=>{class i{constructor(t,n,r,s){this.dialogRef=t,this.yamcs=n,this.data=s,this.dataSource=new u.by,this.displayedColumns=["name"],this.selectedBucket$=new f.X(null),this.breadcrumb$=new f.X([]),this.service=s.service;const o=this.service.localEntities.length?this.service.localEntities[0].name:"",m=this.service.remoteEntities.length?this.service.remoteEntities[0].name:"";this.storageClient=n.createStorageClient(),this.storageClient.getBuckets("_global").then(v=>{this.dataSource.data=v||[]}),this.localForm=r.group({object:["",[]]}),this.remoteForm=r.group({remotePath:["",l.kI.required],source:[o,l.kI.required],destination:[m,l.kI.required],reliable:[!0,[]]})}selectBucket(t){this.selectedBucket$.next(t)}startTransfer(){this.yamcs.yamcsClient.createFileTransfer(this.yamcs.instance,this.service.name,{direction:"DOWNLOAD",bucket:this.selectedBucket$.value.name,objectName:this.objectSelector.currentPrefix$.value||"",remotePath:this.remoteForm.value.remotePath,source:this.remoteForm.value.source,destination:this.remoteForm.value.destination,uploadOptions:{reliable:this.remoteForm.value.reliable}}).then(()=>{this.dialogRef.close()})}updateBreadcrumb(t){if(!t)return void this.breadcrumb$.next([]);t.endsWith("/")&&(t=t.substr(0,t.length-1));const n=[],r=t.split("/");for(let s=0;s<r.length;s++)n.push({name:r[s],prefix:r.slice(0,s+1).join("/")});this.breadcrumb$.next(n)}changePrefix(t){t&&(t+="/"),this.objectSelector.changePrefix(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b.so),e.Y36(T.C),e.Y36(l.qu),e.Y36(b.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-download-file-dialog"]],viewQuery:function(t,n){if(1&t&&e.Gf(ke,5),2&t){let r;e.iGM(r=e.CRH())&&(n.objectSelector=r.first)}},decls:45,vars:16,consts:[[1,"local-selector","mat-typography"],[1,"ya-form",3,"formGroup"],[1,"table-caption-wrapper"],[1,"table-caption"],["class","table-breadcrumb",4,"ngIf"],[1,"bucket-table-wrapper"],["mat-table","",1,"ya-data-table",3,"dataSource"],["cdkColumnDef","name"],["mat-cell","",4,"cdkCellDef"],["mat-row","",3,"ngClass","click",4,"cdkRowDef","cdkRowDefColumns"],[1,"object-table-wrapper"],[4,"ngIf"],[1,"remote-selector","mat-typography"],[2,"margin-top","16px"],["type","text","formControlName","remotePath","placeholder","Filename.dat"],[2,"margin-top","32px"],["formControlName","source"],[3,"value",4,"ngFor","ngForOf"],["formControlName","destination"],[1,"footer","mat-typography"],["mat-dialog-close","",1,"ya-button"],[1,"ya-button","primary",3,"disabled","click"],[1,"table-breadcrumb"],["icon","account_tree",3,"action","click"],[3,"label","action","click",4,"ngFor","ngForOf"],[3,"label","action","click"],["mat-cell",""],[2,"vertical-align","middle"],["mat-row","",3,"ngClass","click"],["formControlName","object",3,"bucket","isMultiSelect","foldersOnly","prefixChange"],["selector",""],["type","checkbox","formControlName","reliable"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"h2"),e._uU(3,"Download File"),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"label",3),e._uU(6,"Bucket"),e.qZA(),e.qZA(),e.YNc(7,Pe,4,2,"div",4),e.ALo(8,"async"),e.TgZ(9,"div",5),e.TgZ(10,"table",6),e.ynx(11,7),e.YNc(12,Oe,4,1,"td",8),e.BQk(),e.YNc(13,Qe,2,5,"tr",9),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e.YNc(15,Be,3,3,"ng-container",11),e.ALo(16,"async"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",12),e.TgZ(18,"form",1),e.TgZ(19,"h2",13),e._uU(20,"Source File"),e.qZA(),e.TgZ(21,"label"),e._uU(22," Filename "),e._UZ(23,"input",14),e.qZA(),e.TgZ(24,"h2",15),e._uU(25,"Options"),e.qZA(),e.YNc(26,Je,5,0,"ng-container",11),e.TgZ(27,"label"),e._uU(28," Local Entity "),e.TgZ(29,"select",16),e.YNc(30,$e,2,3,"option",17),e.qZA(),e.qZA(),e._UZ(31,"br"),e.TgZ(32,"label"),e._uU(33," Remote Entity "),e.TgZ(34,"select",18),e.YNc(35,Me,2,3,"option",17),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(36,"div",19),e.TgZ(37,"mat-toolbar"),e.TgZ(38,"mat-toolbar-row"),e.TgZ(39,"button",20),e._uU(40,"CANCEL"),e.qZA(),e._uU(41,"\xa0\xa0 "),e.TgZ(42,"button",21),e.NdJ("click",function(){return n.startTransfer()}),e.ALo(43,"async"),e._uU(44,"DOWNLOAD"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.localForm),e.xp6(6),e.Q6J("ngIf",e.lcZ(8,10,n.breadcrumb$)),e.xp6(3),e.Q6J("dataSource",n.dataSource),e.xp6(3),e.Q6J("cdkRowDefColumns",n.displayedColumns),e.xp6(2),e.Q6J("ngIf",e.lcZ(16,12,n.selectedBucket$)),e.xp6(3),e.Q6J("formGroup",n.remoteForm),e.xp6(8),e.Q6J("ngIf",n.service.capabilities.reliability),e.xp6(4),e.Q6J("ngForOf",n.service.localEntities),e.xp6(5),e.Q6J("ngForOf",n.service.remoteEntities),e.xp6(7),e.Q6J("disabled",!e.lcZ(43,14,n.selectedBucket$)||!n.remoteForm.valid))},directives:[l._Y,l.JL,l.sg,p.O5,O.w,q.a,p.sg,u.BZ,y.fo,y.O_,u.ev,C.Hw,y.Sq,u.Gk,p.mk,P.O,l.JJ,l.u,l.Fj,l.Wl,l.EJ,l.YN,l.Kr,x.Ye,x.rD,b.ZT],pipes:[p.Ov],styles:[".mat-dialog-container{border-radius:0;position:relative}table.ya-data-table[_ngcontent-%COMP%]{width:100%}.ya-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.local-selector[_ngcontent-%COMP%]{position:relative;height:calc(50% - 32px)}.remote-selector[_ngcontent-%COMP%]{position:relative;height:calc(50% - 32px);max-width:600px}.footer[_ngcontent-%COMP%]{position:absolute;bottom:0;height:64px;left:0;right:0;border-top:1px solid #d3d3d3}.bucket-table-wrapper[_ngcontent-%COMP%]{position:absolute;overflow:auto;border:1px solid #d3d3d3;top:68px;bottom:1em;left:0;width:250px}.bucket-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{cursor:pointer}.object-table-wrapper[_ngcontent-%COMP%]{position:absolute;overflow:auto;border:1px solid #d3d3d3;top:68px;bottom:1em;right:0;left:calc(250px + 1em)}.table-caption-wrapper[_ngcontent-%COMP%]{position:absolute;top:48px;left:0}label.table-caption[_ngcontent-%COMP%]{margin:0}.table-breadcrumb[_ngcontent-%COMP%]{position:absolute;top:42px;left:calc(250px + 1em);right:0;overflow:hidden}"]}),i})();const Ee=["selector"];function je(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-breadcrumb",23),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).changePrefix(s.prefix)}),e.qZA()}2&i&&e.Q6J("label",a.$implicit.name)("action",!0)}function Re(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",20),e.TgZ(1,"app-breadcrumb-trail"),e.TgZ(2,"app-breadcrumb",21),e.NdJ("click",function(){return e.CHM(t),e.oxw().changePrefix("")}),e.qZA(),e.YNc(3,je,1,2,"app-breadcrumb",22),e.qZA(),e.qZA()}if(2&i){const t=a.ngIf;e.xp6(2),e.Q6J("action",!0),e.xp6(1),e.Q6J("ngForOf",t)}}function He(i,a){if(1&i&&(e.TgZ(0,"td",24),e.TgZ(1,"mat-icon",25),e._uU(2,"shopping_basket"),e.qZA(),e._uU(3),e.qZA()),2&i){const t=a.$implicit;e.xp6(3),e.hij("\xa0 ",t.name," ")}}const Ge=function(i){return{selected:i}};function Xe(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr",26),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().selectBucket(s)}),e.ALo(1,"async"),e.qZA()}if(2&i){const t=a.$implicit,n=e.oxw();e.Q6J("ngClass",e.VKq(3,Ge,t===e.lcZ(1,1,n.selectedBucket$)))}}function ze(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"app-object-selector",27,28),e.NdJ("prefixChange",function(r){return e.CHM(t),e.oxw().updateBreadcrumb(r)}),e.qZA(),e.BQk()}if(2&i){const t=a.ngIf;e.xp6(1),e.Q6J("bucket",t)("isMultiSelect",!0)}}function We(i,a){1&i&&(e.ynx(0),e.TgZ(1,"h2",29),e._uU(2,"Destination File"),e.qZA(),e.TgZ(3,"label"),e._uU(4," Filename "),e._UZ(5,"input",30),e.qZA(),e.BQk())}function Ke(i,a){1&i&&(e.ynx(0),e.TgZ(1,"label"),e._UZ(2,"input",31),e._uU(3," Reliable "),e.qZA(),e._UZ(4,"br"),e.BQk())}function Ve(i,a){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.name),e.xp6(1),e.AsE("",t.name," [id=",t.id,"]")}}function et(i,a){if(1&i&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.name),e.xp6(1),e.AsE("",t.name," [id=",t.id,"]")}}let tt=(()=>{class i{constructor(t,n,r,s,o){this.dialogRef=t,this.yamcs=n,this.messageService=s,this.data=o,this.dataSource=new u.by,this.displayedColumns=["name"],this.selectedBucket$=new f.X(null),this.breadcrumb$=new f.X([]),this.service=o.service;const m=this.service.localEntities.length?this.service.localEntities[0].name:"",v=this.service.remoteEntities.length?this.service.remoteEntities[0].name:"";this.storageClient=n.createStorageClient(),this.storageClient.getBuckets("_global").then(_=>{this.dataSource.data=_||[]}),this.localForm=r.group({object:["",l.kI.required]}),this.remoteForm=r.group({remotePath:["",this.service.capabilities.remotePath?l.kI.required:[]],source:[m,l.kI.required],destination:[v,l.kI.required],reliable:[!0,[]]})}selectBucket(t){this.selectedBucket$.next(t)}startTransfer(){return function(i,a,t,n){return new(t||(t=Promise))(function(s,o){function m(d){try{_(n.next(d))}catch(h){o(h)}}function v(d){try{_(n.throw(d))}catch(h){o(h)}}function _(d){d.done?s(d.value):function r(s){return s instanceof t?s:new t(function(o){o(s)})}(d.value).then(m,v)}_((n=n.apply(i,a||[])).next())})}(this,void 0,void 0,function*(){const n=this.localForm.value.object.split("|").map(o=>this.yamcs.yamcsClient.createFileTransfer(this.yamcs.instance,this.service.name,{direction:"UPLOAD",bucket:this.selectedBucket$.value.name,objectName:o,remotePath:this.remoteForm.value.remotePath,source:this.remoteForm.value.source,destination:this.remoteForm.value.destination,uploadOptions:{reliable:this.remoteForm.value.reliable}}));let r,s=0;for(const o of n)try{yield o}catch(m){r=m,s++}r&&this.messageService.showError(1===s?r:s===n.length?"Failed to start any of the selected transfers. See server log.":"Some of the transfers failed to start. See server log."),this.dialogRef.close()})}updateBreadcrumb(t){if(!t)return void this.breadcrumb$.next([]);t.endsWith("/")&&(t=t.substr(0,t.length-1));const n=[],r=t.split("/");for(let s=0;s<r.length;s++)n.push({name:r[s],prefix:r.slice(0,s+1).join("/")});this.breadcrumb$.next(n)}changePrefix(t){t&&(t+="/"),this.objectSelector.changePrefix(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b.so),e.Y36(T.C),e.Y36(l.qu),e.Y36(k.e),e.Y36(b.WI))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-upload-file-dialog"]],viewQuery:function(t,n){if(1&t&&e.Gf(Ee,5),2&t){let r;e.iGM(r=e.CRH())&&(n.objectSelector=r.first)}},decls:40,vars:15,consts:[[1,"local-selector","mat-typography"],[1,"ya-form",3,"formGroup"],[1,"table-caption-wrapper"],[1,"table-caption"],["class","table-breadcrumb",4,"ngIf"],[1,"bucket-table-wrapper"],["mat-table","",1,"ya-data-table",3,"dataSource"],["cdkColumnDef","name"],["mat-cell","",4,"cdkCellDef"],["mat-row","",3,"ngClass","click",4,"cdkRowDef","cdkRowDefColumns"],[1,"object-table-wrapper"],[4,"ngIf"],[1,"remote-selector","mat-typography"],[2,"margin-top","32px"],["formControlName","source"],[3,"value",4,"ngFor","ngForOf"],["formControlName","destination"],[1,"footer","mat-typography"],["mat-dialog-close","",1,"ya-button"],[1,"ya-button","primary",3,"disabled","click"],[1,"table-breadcrumb"],["icon","account_tree",3,"action","click"],[3,"label","action","click",4,"ngFor","ngForOf"],[3,"label","action","click"],["mat-cell",""],[2,"vertical-align","middle"],["mat-row","",3,"ngClass","click"],["formControlName","object",3,"bucket","isMultiSelect","prefixChange"],["selector",""],[2,"margin-top","16px"],["type","text","formControlName","remotePath","placeholder","/CF:/filename"],["type","checkbox","formControlName","reliable"],[3,"value"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"form",1),e.TgZ(2,"h2"),e._uU(3,"Upload File"),e.qZA(),e.TgZ(4,"div",2),e.TgZ(5,"label",3),e._uU(6,"Bucket"),e.qZA(),e.qZA(),e.YNc(7,Re,4,2,"div",4),e.ALo(8,"async"),e.TgZ(9,"div",5),e.TgZ(10,"table",6),e.ynx(11,7),e.YNc(12,He,4,1,"td",8),e.BQk(),e.YNc(13,Xe,2,5,"tr",9),e.qZA(),e.qZA(),e.TgZ(14,"div",10),e.YNc(15,ze,3,2,"ng-container",11),e.ALo(16,"async"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"div",12),e.TgZ(18,"form",1),e.YNc(19,We,6,0,"ng-container",11),e.TgZ(20,"h2",13),e._uU(21,"Options"),e.qZA(),e.YNc(22,Ke,5,0,"ng-container",11),e.TgZ(23,"label"),e._uU(24," Local Entity "),e.TgZ(25,"select",14),e.YNc(26,Ve,2,3,"option",15),e.qZA(),e.qZA(),e._UZ(27,"br"),e.TgZ(28,"label"),e._uU(29," Remote Entity "),e.TgZ(30,"select",16),e.YNc(31,et,2,3,"option",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"div",17),e.TgZ(33,"mat-toolbar"),e.TgZ(34,"mat-toolbar-row"),e.TgZ(35,"button",18),e._uU(36,"CANCEL"),e.qZA(),e._uU(37,"\xa0\xa0 "),e.TgZ(38,"button",19),e.NdJ("click",function(){return n.startTransfer()}),e._uU(39,"UPLOAD"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("formGroup",n.localForm),e.xp6(6),e.Q6J("ngIf",e.lcZ(8,11,n.breadcrumb$)),e.xp6(3),e.Q6J("dataSource",n.dataSource),e.xp6(3),e.Q6J("cdkRowDefColumns",n.displayedColumns),e.xp6(2),e.Q6J("ngIf",e.lcZ(16,13,n.selectedBucket$)),e.xp6(3),e.Q6J("formGroup",n.remoteForm),e.xp6(1),e.Q6J("ngIf",n.service.capabilities.remotePath),e.xp6(3),e.Q6J("ngIf",n.service.capabilities.reliability),e.xp6(4),e.Q6J("ngForOf",n.service.localEntities),e.xp6(5),e.Q6J("ngForOf",n.service.remoteEntities),e.xp6(7),e.Q6J("disabled",!n.localForm.valid||!n.remoteForm.valid))},directives:[l._Y,l.JL,l.sg,p.O5,O.w,q.a,p.sg,u.BZ,y.fo,y.O_,u.ev,C.Hw,y.Sq,u.Gk,p.mk,P.O,l.JJ,l.u,l.Fj,l.Wl,l.EJ,l.YN,l.Kr,x.Ye,x.rD,b.ZT],pipes:[p.Ov],styles:[".mat-dialog-container{border-radius:0;position:relative}table.ya-data-table[_ngcontent-%COMP%]{width:100%}.ya-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:none}.local-selector[_ngcontent-%COMP%]{position:relative;height:calc(50% - 32px)}.remote-selector[_ngcontent-%COMP%]{position:relative;height:calc(50% - 32px);max-width:600px}.footer[_ngcontent-%COMP%]{position:absolute;bottom:0;height:64px;left:0;right:0;border-top:1px solid #d3d3d3}.bucket-table-wrapper[_ngcontent-%COMP%]{position:absolute;overflow:auto;border:1px solid #d3d3d3;top:68px;bottom:1em;left:0;width:250px}.bucket-table-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{cursor:pointer}.object-table-wrapper[_ngcontent-%COMP%]{position:absolute;overflow:auto;border:1px solid #d3d3d3;top:68px;bottom:1em;right:0;left:calc(250px + 1em)}.table-caption-wrapper[_ngcontent-%COMP%]{position:absolute;top:48px;left:0}label.table-caption[_ngcontent-%COMP%]{margin:0}.table-breadcrumb[_ngcontent-%COMP%]{position:absolute;top:42px;left:calc(250px + 1em);right:0;overflow:hidden}"]}),i})();var it=c(2313),nt=c(8928),at=c(9140),rt=c(7423),w=c(2181),Q=c(3251),st=c(5632);function ot(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw(2).switchService(s)}),e._uU(1),e.qZA()}if(2&i){const t=a.$implicit;e.xp6(1),e.Oqu(t.name)}}function ct(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"button",2),e._uU(2),e.ALo(3,"async"),e.TgZ(4,"mat-icon"),e._uU(5,"arrow_drop_down"),e.qZA(),e.qZA(),e.TgZ(6,"mat-menu",3,4),e.YNc(8,ot,2,1,"button",5),e.qZA(),e.BQk()),2&i){const t=a.ngIf,n=e.MAs(7),r=e.oxw();let s;e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(1),e.hij(" ",(null==(s=e.lcZ(3,3,r.service$))?null:s.name)||"select service"," "),e.xp6(6),e.Q6J("ngForOf",t)}}function lt(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",7),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().ngIf;return e.oxw().uploadFile(r)}),e.TgZ(2,"mat-icon"),e._uU(3,"cloud_upload"),e.qZA(),e._uU(4," UPLOAD FILE "),e.qZA(),e.BQk()}}function ut(i,a){if(1&i&&(e.ynx(0),e.YNc(1,lt,5,0,"ng-container",0),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.Q6J("ngIf",t.capabilities.upload)}}function pt(i,a){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"button",7),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().ngIf;return e.oxw().downloadFile(r)}),e.TgZ(2,"mat-icon"),e._uU(3,"cloud_download"),e.qZA(),e._uU(4," DOWNLOAD FILE "),e.qZA(),e.BQk()}}function mt(i,a){if(1&i&&(e.ynx(0),e.YNc(1,pt,5,0,"ng-container",0),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.Q6J("ngIf",t.capabilities.download)}}function ft(i,a){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.hij("(",t,")")}}function dt(i,a){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.hij("(",t,")")}}function gt(i,a){if(1&i&&(e.ynx(0),e._uU(1),e.BQk()),2&i){const t=a.ngIf;e.xp6(1),e.hij("(",t,")")}}const S=function(i,a){return{c:i,service:a}};function ht(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"nav",8),e.TgZ(2,"a",9,10),e._uU(4," ONGOING "),e.YNc(5,ft,2,1,"ng-container",0),e.ALo(6,"async"),e.qZA(),e.TgZ(7,"a",11,12),e._uU(9," FAILED "),e.YNc(10,dt,2,1,"ng-container",0),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"a",13,14),e._uU(14," SUCCESSFUL "),e.YNc(15,gt,2,1,"ng-container",0),e.ALo(16,"async"),e.qZA(),e.qZA(),e.TgZ(17,"div",15),e._UZ(18,"router-outlet"),e.qZA(),e.BQk()),2&i){const t=a.ngIf,n=e.MAs(3),r=e.MAs(8),s=e.MAs(13),o=e.oxw();e.xp6(2),e.Q6J("queryParams",e.WLB(15,S,o.yamcs.context,t.name))("active",n.isActive),e.xp6(3),e.Q6J("ngIf",e.lcZ(6,9,o.ongoingCount$)),e.xp6(2),e.Q6J("queryParams",e.WLB(18,S,o.yamcs.context,t.name))("active",r.isActive),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,11,o.failedCount$)),e.xp6(2),e.Q6J("queryParams",e.WLB(21,S,o.yamcs.context,t.name))("active",s.isActive),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,13,o.successfulCount$))}}function _t(i,a){1&i&&(e.TgZ(0,"app-empty-message",16),e.TgZ(1,"p"),e._uU(2," This instance has no file transfer services configured. "),e.qZA(),e.qZA())}const Tt=[{path:"",canActivate:[D.a,L.z],canActivateChild:[D.a],runGuardsAndResolvers:"always",component:E.K,children:[{path:"",component:(()=>{class i{constructor(t,n,r,s,o,m){this.yamcs=t,this.dialog=r,this.route=s,this.router=o,this.services$=new f.X([]),this.service$=new f.X(null),this.ongoingTransfersById=new Map,this.failedTransfersById=new Map,this.successfulTransfersById=new Map,this.ongoingCount$=new f.X(0),this.failedCount$=new f.X(0),this.successfulCount$=new f.X(0),this.dirty=!1,n.setTitle("File Transfer");const _=s.snapshot.queryParamMap.get("service");t.yamcsClient.getFileTransferServices(t.instance).then(d=>{this.services$.next(d.services);let h=null;for(const M of d.services)if(_===M.name){h=M;break}!h&&!_&&(h=d.services.length?d.services[0]:null),h&&this.switchService(h)}),this.syncSubscription=m.sync(()=>{this.dirty&&(this.ongoingCount$.next(this.ongoingTransfersById.size),this.failedCount$.next(this.failedTransfersById.size),this.successfulCount$.next(this.successfulTransfersById.size))})}switchService(t){this.router.navigate([],{replaceUrl:!0,relativeTo:this.route,queryParams:{service:(null==t?void 0:t.name)||null},queryParamsHandling:"merge"}),this.ongoingCount$.next(0),this.failedCount$.next(0),this.successfulCount$.next(0),this.ongoingTransfersById.clear(),this.failedTransfersById.clear(),this.successfulTransfersById.clear(),this.transferSubscription&&this.transferSubscription.cancel(),this.service$.next(t),t&&(this.transferSubscription=this.yamcs.yamcsClient.createTransferSubscription({instance:this.yamcs.instance,serviceName:t.name},n=>{switch(n.state){case"RUNNING":case"PAUSED":case"CANCELLING":case"QUEUED":this.ongoingTransfersById.set(n.id,n);break;case"FAILED":this.ongoingTransfersById.delete(n.id),this.failedTransfersById.set(n.id,n);break;case"COMPLETED":this.ongoingTransfersById.delete(n.id),this.successfulTransfersById.set(n.id,n)}this.dirty=!0}))}uploadFile(t){this.dialog.open(tt,{width:"70%",height:"100%",autoFocus:!1,position:{right:"0"},data:{service:t}})}downloadFile(t){this.dialog.open(Ye,{width:"70%",height:"100%",autoFocus:!1,position:{right:"0"},data:{service:t}})}ngOnDestroy(){this.syncSubscription&&this.syncSubscription.unsubscribe(),this.transferSubscription&&this.transferSubscription.cancel()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.C),e.Y36(it.Dx),e.Y36(b.uw),e.Y36(g.gz),e.Y36(g.F0),e.Y36(Z.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:13,vars:15,consts:[[4,"ngIf"],["headerTitle","File Transfer",4,"ngIf"],["mat-button","",3,"matMenuTriggerFor"],[1,"ya-menu"],["serviceMenu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["mat-button","","color","primary",3,"click"],["mat-tab-nav-bar",""],["mat-tab-link","","routerLink","./ongoing-transfers","routerLinkActive","",3,"queryParams","active"],["rla","routerLinkActive"],["mat-tab-link","","routerLink","./failed-transfers","routerLinkActive","",3,"queryParams","active"],["rlb","routerLinkActive"],["mat-tab-link","","routerLink","./successful-transfers","routerLinkActive","",3,"queryParams","active"],["rlc","routerLinkActive"],[1,"outlet-wrapper"],["headerTitle","File Transfer"]],template:function(t,n){1&t&&(e.TgZ(0,"app-instance-page"),e.TgZ(1,"app-instance-toolbar"),e._uU(2," File Transfer \xa0\xa0\xa0\xa0 "),e.YNc(3,ct,9,5,"ng-container",0),e.ALo(4,"async"),e.YNc(5,ut,2,1,"ng-container",0),e.ALo(6,"async"),e.YNc(7,mt,2,1,"ng-container",0),e.ALo(8,"async"),e.qZA(),e.YNc(9,ht,19,24,"ng-container",0),e.ALo(10,"async"),e.YNc(11,_t,3,0,"app-empty-message",1),e.ALo(12,"async"),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngIf",e.lcZ(4,5,n.services$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(6,7,n.service$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(8,9,n.service$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(10,11,n.service$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(12,13,n.services$).length))},directives:[nt.a,at.k,p.O5,rt.lW,w.p6,C.Hw,w.VK,p.sg,w.OP,Q.BU,g.yS,Q.Nj,g.Od,g.lC,st.M],pipes:[p.Ov],styles:[".outlet-wrapper[_ngcontent-%COMP%]{overflow:auto;position:absolute;inset:49px 0 0}"],changeDetection:0}),i})(),children:[{path:"",pathMatch:"full",redirectTo:"ongoing-transfers"},{path:"ongoing-transfers",component:(()=>{class i{constructor(t,n,r){this.yamcs=t,this.serviceName$=new f.X(null),this.dataSource=new u.by,this.transfersById=new Map,this.dirty=!1,this.storageClient=t.createStorageClient(),this.queryParamSubscription=n.queryParamMap.subscribe(s=>{const o=s.get("service");this.serviceName$.next(o),this.switchService(o)}),this.syncSubscription=r.sync(()=>{if(this.dirty){const s=[...this.transfersById.values()];s.sort((o,m)=>this.compareTransfers(o.transfer,m.transfer)),this.dataSource.data=s,this.dirty=!1}})}compareTransfers(t,n){if(t.state!=n.state){if("RUNNING"==t.state)return-1;if("RUNNING"==n.state)return 1}return(n.creationTime||n.startTime||"").localeCompare(t.creationTime||t.startTime||"")}switchService(t){this.dirty=!1,this.transfersById.clear(),this.dataSource.data=[],this.transferSubscription&&this.transferSubscription.cancel(),t&&(this.transferSubscription=this.yamcs.yamcsClient.createTransferSubscription({instance:this.yamcs.instance,serviceName:t},n=>{switch(n.state){case"RUNNING":case"PAUSED":case"CANCELLING":case"QUEUED":this.setOrUpdate(n);break;case"FAILED":case"COMPLETED":this.transfersById.delete(n.id)}this.dirty=!0}))}setOrUpdate(t){let n=this.transfersById.get(t.id);if(n)n.updateTransfer(t);else{const r=this.storageClient.getObjectURL("_global",t.bucket,t.objectName);n=new F(t,r),this.transfersById.set(t.id,n)}}ngOnDestroy(){this.syncSubscription&&this.syncSubscription.unsubscribe(),this.queryParamSubscription&&this.queryParamSubscription.unsubscribe(),this.transferSubscription&&this.transferSubscription.cancel()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.C),e.Y36(g.gz),e.Y36(Z.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:3,vars:5,consts:[[1,"panel-content"],[3,"serviceName","dataSource","showActions"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-file-transfer-table",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("serviceName",e.lcZ(2,3,n.serviceName$))("dataSource",n.dataSource)("showActions",!0))},directives:[A],pipes:[p.Ov],encapsulation:2,changeDetection:0}),i})()},{path:"failed-transfers",component:I},{path:"successful-transfers",component:(()=>{class i{constructor(t,n,r){this.yamcs=t,this.serviceName$=new f.X(null),this.dataSource=new u.by,this.transfersById=new Map,this.dirty=!1,this.storageClient=t.createStorageClient(),this.queryParamSubscription=n.queryParamMap.subscribe(s=>{const o=s.get("service");this.serviceName$.next(o),this.switchService(o)}),this.syncSubscription=r.sync(()=>{if(this.dirty){const s=[...this.transfersById.values()];s.sort((o,m)=>this.compareTransfers(o.transfer,m.transfer)),this.dataSource.data=s,this.dirty=!1}})}compareTransfers(t,n){return(n.creationTime||n.startTime||"").localeCompare(t.creationTime||t.startTime||"")}switchService(t){this.dirty=!1,this.transfersById.clear(),this.dataSource.data=[],this.transferSubscription&&this.transferSubscription.cancel(),t&&(this.transferSubscription=this.yamcs.yamcsClient.createTransferSubscription({instance:this.yamcs.instance,serviceName:t},n=>{"COMPLETED"===n.state&&this.setOrUpdate(n),this.dirty=!0}))}setOrUpdate(t){let n=this.transfersById.get(t.id);if(n)n.updateTransfer(t);else{const r=this.storageClient.getObjectURL("_global",t.bucket,t.objectName);n=new F(t,r),this.transfersById.set(t.id,n)}}ngOnDestroy(){this.syncSubscription&&this.syncSubscription.unsubscribe(),this.queryParamSubscription&&this.queryParamSubscription.unsubscribe(),this.transferSubscription&&this.transferSubscription.cancel()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.C),e.Y36(g.gz),e.Y36(Z.j))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:3,vars:4,consts:[[1,"panel-content"],[3,"serviceName","dataSource"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-file-transfer-table",1),e.ALo(2,"async"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("serviceName",e.lcZ(2,2,n.serviceName$))("dataSource",n.dataSource))},directives:[A],pipes:[p.Ov],encapsulation:2,changeDetection:0}),i})()}]}]}];let bt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Tt)],g.Bz]}),i})(),yt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[Y.m,bt]]}),i})()}}]);