"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5438],{5438:(S,c,i)=>{i.r(c),i.d(c,{SearchPageModule:()=>P});var r=i(177),u=i(9417),a=i(2608),o=i(1470),g=i(7408),t=i(4438),f=i(6863);const m=e=>[e];function p(e,h){if(1&e&&(t.j41(0,"ion-item",4)(1,"ion-avatar"),t.nrm(2,"img",5),t.k0s(),t.j41(3,"ion-label"),t.EFF(4),t.k0s()()),2&e){const s=h.$implicit;t.Y8G("routerLink",t.eq3(3,m,"/p/profile/"+s.id)),t.R7$(2),t.Y8G("src",s.profile_picture,t.B4B),t.R7$(2),t.JRh(s.username)}}function d(e,h){if(1&e&&(t.j41(0,"ion-list"),t.DNE(1,p,5,5,"ion-item",3),t.k0s()),2&e){const s=t.XpG();t.R7$(),t.Y8G("ngForOf",s.users)}}const v=[{path:"",component:(()=>{class e{constructor(s,n){this.dataManager=s,this.changeDetectorRef=n,this.userV=""}ngOnInit(){this.dataManager.getUsers(s=>{this.users=s})}searchUser(s){this.userV=s.target.value,""==this.userV?this.dataManager.getUsers(n=>{this.users=n}):this.users=this.users.filter(n=>n.username.slice(0,this.userV.length)===this.userV)}ionViewDidEnter(){this.changeDetectorRef.detectChanges()}ionViewWillLeave(){this.changeDetectorRef.detach()}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(f.j),t.rXU(t.gRc))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-search"]],standalone:!0,features:[t.aNF],decls:6,vars:4,consts:[[1,"ion-no-border"],[1,"search-bar",3,"input","placeholder"],[4,"ngIf"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],["alt","",3,"src"]],template:function(n,l){1&n&&(t.j41(0,"ion-content")(1,"ion-header",0)(2,"ion-toolbar")(3,"ion-searchbar",1),t.nI1(4,"translate"),t.bIt("input",function(R){return l.searchUser(R)}),t.k0s()()(),t.DNE(5,d,2,1,"ion-list",2),t.k0s()),2&n&&(t.R7$(3),t.Y8G("placeholder",t.bMT(4,2,"Search")),t.R7$(2),t.Y8G("ngIf",""!=l.userV))},dependencies:[a.bv,a.mC,a.W9,a.eU,a.uz,a.he,a.nf,a.S1,a.ai,a.Gw,a.N7,r.bT,r.pM,o.Wk,g.D9],styles:["ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:2%}"]})}}return e})()}];let M=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[o.iI.forChild(v),o.iI]})}}return e})(),P=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[r.MD,u.YN,a.bv,M]})}}return e})()}}]);