"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8734],{8734:(v,l,a)=>{a.r(l),a.d(l,{SettingsModule:()=>M});var g=a(177),s=a(1470),c=a(5694),o=a(480),t=a(4438),u=a(1618),h=a(6863);const m=[{path:"",component:(()=>{class n{constructor(e,i,r){this.router=e,this.darkMode=i,this.dataManager=r,this.darkModeStatus=localStorage.getItem("darkMode")}ngOnInit(){this.dataManager.getLoggedInUser(e=>{this.loggedUserInfo=e})}goToPage(e){this.router.navigate([e])}darkModeChange(e){localStorage.setItem("darkMode",e.detail.checked),this.darkMode.setTheme()}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(s.Ix),t.rXU(u.F),t.rXU(h.j))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-settings"]],standalone:!0,features:[t.aNF],decls:35,vars:19,consts:[[1,"ion-no-border"],[3,"click"],["color","dark","slot","start","name","arrow-back-outline"],["color","dark"],[1,"ion-margin-bottom"],["color","dark","slot","start","name","lock-closed-outline"],["color","dark","slot","start","name","shield-checkmark-outline"],["color","dark","slot","start","name","person-outline"],[1,"ion-margin-bottom",3,"click"],["color","dark","slot","start","name","language-outline"],["color","dark","slot","start","name","moon-outline"],["aria-label","dark-mode","slot","end",3,"ionChange","checked"]],template:function(i,r){1&i&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-button",1),t.bIt("click",function(){return r.goToPage("/p/profile/"+r.loggedUserInfo.id)}),t.nrm(3,"ion-icon",2),t.j41(4,"ion-title",3),t.EFF(5),t.nI1(6,"translate"),t.k0s()()()(),t.j41(7,"ion-content")(8,"ion-list")(9,"ion-item",4),t.nrm(10,"ion-icon",5),t.j41(11,"ion-label"),t.EFF(12),t.nI1(13,"translate"),t.k0s()(),t.j41(14,"ion-item",4),t.nrm(15,"ion-icon",6),t.j41(16,"ion-label"),t.EFF(17),t.nI1(18,"translate"),t.k0s()(),t.j41(19,"ion-item",4),t.nrm(20,"ion-icon",7),t.j41(21,"ion-label"),t.EFF(22),t.nI1(23,"translate"),t.k0s()(),t.j41(24,"ion-item",8),t.bIt("click",function(){return r.goToPage("/p/language")}),t.nrm(25,"ion-icon",9),t.j41(26,"ion-label"),t.EFF(27),t.nI1(28,"translate"),t.k0s()(),t.j41(29,"ion-item",4),t.nrm(30,"ion-icon",10),t.j41(31,"ion-label"),t.EFF(32),t.nI1(33,"translate"),t.k0s(),t.j41(34,"ion-toggle",11),t.bIt("ionChange",function(f){return r.darkModeChange(f)}),t.k0s()()()()),2&i&&(t.R7$(5),t.JRh(t.bMT(6,7,"Settings")),t.R7$(7),t.JRh(t.bMT(13,9,"privacy")),t.R7$(5),t.JRh(t.bMT(18,11,"security")),t.R7$(5),t.JRh(t.bMT(23,13,"account")),t.R7$(5),t.JRh(t.bMT(28,15,"language")),t.R7$(5),t.JRh(t.bMT(33,17,"dark mode")),t.R7$(2),t.FS9("checked",r.darkModeStatus))},dependencies:[o.bv,o.Jm,o.W9,o.eU,o.iq,o.uz,o.he,o.nf,o.BC,o.BY,o.ai,o.hB,c.h,c.D9],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: none;--background-focused: none;--background-hover: none;--background-activated: none;--box-shadow: none}ion-toggle[_ngcontent-%COMP%]{--track-background: var(--ion-color-dark);--track-background-checked: var(--ion-color-dark);--handle-background: var(--ion-color-light);--handle-background-checked: var(--ion-color-light)}"]})}return n})()}];let k=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.$C({type:n});static#o=this.\u0275inj=t.G2t({imports:[s.iI.forChild(m),s.iI]})}return n})();var b=a(9417);let M=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.$C({type:n});static#o=this.\u0275inj=t.G2t({imports:[g.MD,b.YN,o.bv,k]})}return n})()}}]);