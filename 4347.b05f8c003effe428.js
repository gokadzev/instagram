"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4347],{4347:(V,u,r)=>{r.r(u),r.d(u,{ConversationsModule:()=>w});var g=r(177),d=r(1470),f=r(467),s=r(375),p=r(7408),m=r(9417),n=r(4438),_=r(6863),h=r(8879);const C=t=>({"chat-item-sender":t}),b=t=>({"bubble-image":t});function P(t,a){if(1&t){const e=n.RV6();n.j41(0,"ion-header",9)(1,"ion-toolbar")(2,"ion-buttons",10)(3,"ion-button",11),n.bIt("click",function(){n.eBV(e);const i=n.XpG();return n.Njj(i.dismiss())}),n.nrm(4,"ion-icon",12),n.k0s(),n.j41(5,"ion-avatar",13),n.nrm(6,"img",14),n.k0s()(),n.j41(7,"p",15),n.EFF(8),n.k0s(),n.j41(9,"ion-buttons",16)(10,"ion-button"),n.nrm(11,"ion-icon",17),n.k0s(),n.j41(12,"ion-button"),n.nrm(13,"ion-icon",18),n.k0s()()()()}if(2&t){const e=n.XpG();n.R7$(6),n.Y8G("src",e.conversationInfo.avatar,n.B4B),n.R7$(2),n.JRh(e.conversationInfo.receiver)}}function M(t,a){if(1&t&&(n.j41(0,"div",32)(1,"ion-avatar"),n.nrm(2,"img",33),n.k0s()()),2&t){const e=n.XpG(3);n.R7$(2),n.Y8G("src",e.conversationInfo.avatar,n.B4B)}}function I(t,a){if(1&t&&(n.j41(0,"div",34),n.EFF(1),n.k0s()),2&t){const e=n.XpG().$implicit;n.R7$(),n.SpI(" ",e.message," ")}}function O(t,a){if(1&t&&n.nrm(0,"ion-icon",35),2&t){const e=n.XpG().$implicit;n.Y8G("name",e.message)}}function x(t,a){if(1&t&&n.nrm(0,"img",33),2&t){const e=n.XpG().$implicit;n.Y8G("src",e.message,n.B4B)}}function k(t,a){1&t&&(n.j41(0,"div",36),n.nrm(1,"ion-icon",37),n.k0s())}function y(t,a){1&t&&(n.j41(0,"div",38),n.EFF(1," Seen "),n.k0s())}function F(t,a){if(1&t&&(n.j41(0,"div",22)(1,"div",23),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"div",24),n.DNE(5,M,3,1,"div",25),n.j41(6,"div",26),n.DNE(7,I,2,1,"div",27)(8,O,1,1,"ion-icon",28)(9,x,1,1,"img",29),n.k0s(),n.DNE(10,k,2,0,"div",30),n.k0s(),n.DNE(11,y,2,0,"div",31),n.k0s()),2&t){const e=a.$implicit,o=n.XpG(2);n.Y8G("ngClass",n.eq3(12,C,e.sender==o.loggedUserInfo.username)),n.R7$(2),n.Lme(" ",o.commonFunctions.timeSince(e.time)," ",n.bMT(3,10,"Ago")," "),n.R7$(3),n.Y8G("ngIf",e.sender!=o.loggedUserInfo.username),n.R7$(),n.Y8G("ngClass",n.eq3(14,b,"image"===e.type)),n.R7$(),n.Y8G("ngIf","message"===e.type),n.R7$(),n.Y8G("ngIf","emoji"===e.type),n.R7$(),n.Y8G("ngIf","image"===e.type),n.R7$(),n.Y8G("ngIf",e.sender!=o.loggedUserInfo.username&&"image"===e.type),n.R7$(),n.Y8G("ngIf",e.sender==o.loggedUserInfo.username)}}function j(t,a){if(1&t&&(n.j41(0,"ion-content",19)(1,"div",20),n.DNE(2,F,12,16,"div",21),n.k0s()()),2&t){const e=n.XpG();n.Y8G("scrollEvents",!0),n.R7$(2),n.Y8G("ngForOf",e.conversation)}}function G(t,a){1&t&&n.nrm(0,"ion-icon",39)}function T(t,a){1&t&&n.nrm(0,"ion-icon",40)}function $(t,a){1&t&&(n.j41(0,"ion-button",41),n.nrm(1,"ion-icon",42),n.k0s())}function R(t,a){1&t&&(n.j41(0,"ion-button",41),n.nrm(1,"ion-icon",43),n.k0s())}function Y(t,a){1&t&&(n.j41(0,"ion-button",41),n.nrm(1,"ion-icon",44),n.k0s())}let U=(()=>{class t{constructor(e,o,i){this.modalController=e,this.dataManager=o,this.commonFunctions=i,this.messageInput="",this.isSender=!1}ngOnInit(){}ionViewWillEnter(){this.dataManager.getLoggedInUser(e=>{this.loggedUserInfo=e}),this.conversationInfo=this.conversation[0]}toggleFocus(e){this.isFocus=e}sendMessage(){this.dataManager.addMessage(1,"assets/imgs/logo.png",this.loggedUserInfo.username,"Jose",this.messageInput,new Date,"message",e=>{this.conversation=e,this.messageInput=""})}dismiss(){this.modalController.dismiss({dismissed:!0})}static{this.\u0275fac=function(o){return new(o||t)(n.rXU(s.W3),n.rXU(_.j),n.rXU(h.k))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-conversation"]],inputs:{conversation:"conversation",message:"message"},standalone:!0,features:[n.aNF],decls:12,vars:8,consts:[["class","ion-no-border",4,"ngIf"],["class","ion-padding",3,"scrollEvents",4,"ngIf"],[1,"bottom-messager"],["lines","none"],["fill","solid","slot","start","size","default","shape","round",1,"start-action"],["slot","icon-only","name","camera","color","light",4,"ngIf"],["slot","icon-only","name","search","color","light",4,"ngIf"],["placeholder","Message",1,"message-input",3,"ngModelChange","ionFocus","ionBlur","keyup.enter","ngModel"],["fill","clear","slot","end",4,"ngIf"],[1,"ion-no-border"],["slot","start"],[3,"click"],["name","arrow-back-outline"],[1,"ion-margin-start"],["alt","",3,"src"],[1,"ion-text-left","receiver-name"],["slot","end",1,"actions"],["slot","icon-only","name","information-circle-outline"],["slot","icon-only","name","call-outline"],[1,"ion-padding",3,"scrollEvents"],[1,"chat-list"],["class","chat-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"chat-item",3,"ngClass"],[1,"chat-timestamp"],[1,"chat-item-content"],["class","chat-avatar",4,"ngIf"],[1,"chat-item-bubble",3,"ngClass"],["class","chat-body",4,"ngIf"],["class","md-emoji","slot","icon-only",3,"name",4,"ngIf"],[3,"src",4,"ngIf"],["class","chat-message-reaction",4,"ngIf"],["class","chat-message-status",4,"ngIf"],[1,"chat-avatar"],[3,"src"],[1,"chat-body"],["slot","icon-only",1,"md-emoji",3,"name"],[1,"chat-message-reaction"],["name","share-outline"],[1,"chat-message-status"],["slot","icon-only","name","camera","color","light"],["slot","icon-only","name","search","color","light"],["fill","clear","slot","end"],["slot","icon-only","name","mic-outline"],["slot","icon-only","name","image-outline"],["slot","icon-only","name","happy-outline"]],template:function(o,i){1&o&&(n.DNE(0,P,14,2,"ion-header",0)(1,j,3,2,"ion-content",1),n.j41(2,"ion-footer",2)(3,"ion-toolbar")(4,"ion-item",3)(5,"ion-button",4),n.DNE(6,G,1,0,"ion-icon",5)(7,T,1,0,"ion-icon",6),n.k0s(),n.j41(8,"ion-input",7),n.mxI("ngModelChange",function(l){return n.DH7(i.messageInput,l)||(i.messageInput=l),l}),n.bIt("ionFocus",function(){return i.toggleFocus(!0)})("ionBlur",function(){return i.toggleFocus(!1)})("keyup.enter",function(){return i.sendMessage()}),n.k0s(),n.DNE(9,$,2,0,"ion-button",8)(10,R,2,0,"ion-button",8)(11,Y,2,0,"ion-button",8),n.k0s()()()),2&o&&(n.Y8G("ngIf",i.conversationInfo),n.R7$(),n.Y8G("ngIf",i.conversationInfo&&i.loggedUserInfo),n.R7$(5),n.Y8G("ngIf",!i.isFocus),n.R7$(),n.Y8G("ngIf",i.isFocus),n.R7$(),n.R50("ngModel",i.messageInput),n.R7$(),n.Y8G("ngIf",""==i.messageInput),n.R7$(),n.Y8G("ngIf",""==i.messageInput),n.R7$(),n.Y8G("ngIf",""==i.messageInput))},dependencies:[g.bT,s.bv,s.mC,s.Jm,s.QW,s.W9,s.M0,s.eU,s.iq,s.$w,s.uz,s.ai,s.Gw,g.pM,g.YU,m.YN,m.BC,m.vS,p.D9],styles:["ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding-top:2px!important}ion-avatar[_ngcontent-%COMP%]{width:25px;height:25px}.receiver-name[_ngcontent-%COMP%]{padding:0;margin-left:10px;font-size:13px}.chat-list[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]{margin-bottom:8px}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]{text-align:right}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]{justify-content:flex-end}.chat-list[_ngcontent-%COMP%]   .chat-item.chat-item-sender[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{background:var(--ion-color-dark);color:var(--ion-color-light);border-color:transparent}.chat-list[_ngcontent-%COMP%]   .chat-timestamp[_ngcontent-%COMP%]{text-align:center;font-size:13px;padding:8px;color:var(--ion-color-medium);text-transform:uppercase}.chat-list[_ngcontent-%COMP%]   .chat-message-status[_ngcontent-%COMP%]{font-size:13px;color:var(--ion-color-medium);margin-right:8px}.chat-list[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:4px}.chat-list[_ngcontent-%COMP%]   .chat-item-content[_ngcontent-%COMP%]   .chat-avatar[_ngcontent-%COMP%]{margin-right:8px;align-self:flex-end}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble[_ngcontent-%COMP%]{position:relative;max-width:75%}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble[_ngcontent-%COMP%]   .chat-body[_ngcontent-%COMP%]{display:inline-block;background:var(--ion-color-light);color:var(--ion-color-dark);border:1px solid var(--ion-color-dark);border-radius:20px;padding:6px 10px;white-space:normal;max-width:100%;text-align:left}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble.bubble-image[_ngcontent-%COMP%]{font-size:0}.chat-list[_ngcontent-%COMP%]   .chat-item-bubble.bubble-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:480px;border-radius:16px}.avatar-sm[_ngcontent-%COMP%]{width:35px;height:35px}.bottom-messager[_ngcontent-%COMP%]{padding:0 3px}.bottom-messager[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border:1px solid #d5d5d5;border-radius:30px;padding:0;--padding-start: 0px;--padding-bottom: 0px;--padding-end: 0px;--padding-top: 0px}.bottom-messager[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:22px;margin-right:10px}.bottom-messager[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-end: 0px;--inner-padding-end: 0px}.bottom-messager[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px}.bottom-messager[_ngcontent-%COMP%]   .start-action[_ngcontent-%COMP%]{margin-inline-end:10px}.bottom-messager[_ngcontent-%COMP%]   .start-action[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:auto;fill:var(--ion-color-dark)}.message-input[_ngcontent-%COMP%]{--placeholder-font-weight: 100;font-weight:200}"]})}}return t})(),E=(()=>{class t{constructor(e){this.commonFunctions=e}ngOnInit(){}static{this.\u0275fac=function(o){return new(o||t)(n.rXU(h.k))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["conversation-item"]],inputs:{message:"message"},standalone:!0,features:[n.aNF],decls:12,vars:13,consts:[["lines","none"],[3,"src"],[1,"info"],[1,"recipient"],[1,"time"]],template:function(o,i){1&o&&(n.j41(0,"ion-item",0)(1,"ion-avatar"),n.nrm(2,"img",1),n.k0s(),n.j41(3,"div",2)(4,"ion-label",3),n.EFF(5),n.k0s(),n.j41(6,"p",4),n.EFF(7),n.nI1(8,"translate"),n.nI1(9,"lowercase"),n.nI1(10,"lowercase"),n.nI1(11,"translate"),n.k0s()()()),2&o&&(n.R7$(2),n.Y8G("src",i.message.avatar,n.B4B),n.R7$(3),n.SpI(" ",i.message.sender," "),n.R7$(2),n.E5c(" ",n.bMT(8,5,"Sent")," ",n.bMT(9,7,i.commonFunctions.timeSince(i.message.time))," ",n.bMT(11,11,n.bMT(10,9,"Ago"))," "))},dependencies:[s.bv,s.mC,s.uz,s.he,p.D9,g.GH],styles:["ion-avatar[_ngcontent-%COMP%]{margin-right:10px}.info[_ngcontent-%COMP%]{display:grid}.info[_ngcontent-%COMP%]   .recipient[_ngcontent-%COMP%]{font-size:14px}.info[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{margin:0;font-size:10px;color:gray}"]})}}return t})();function B(t,a){if(1&t){const e=n.RV6();n.j41(0,"conversation-item",11),n.bIt("click",function(){const i=n.eBV(e).$implicit,c=n.XpG();return n.Njj(c.openConversation(i.id))}),n.k0s()}2&t&&n.Y8G("message",a.$implicit)}const D=[{path:"",component:(()=>{class t{constructor(e,o){this.modalController=e,this.dataManager=o,this.conversationValue="",this.loggedUserUsername="user123",this.conversations=[],this.conversationsSave=this.conversations,this.removeDuplicates=(i,c)=>i.reduce((l,v)=>[...l.filter(X=>X[c]!==v[c]),v],[])}ngOnInit(){this.dataManager.getConversations(e=>{this.conversations=e,this.conversationPeople=this.removeDuplicates(this.conversations,"sender"),this.conversationPeople.splice(this.conversationPeople.findIndex(({sender:o})=>o==this.loggedUserUsername),1)})}searchConversation(e){this.conversationValue=e.target.value,this.conversations=""==this.conversationValue?this.conversationsSave:this.conversations.filter(o=>o.sender.slice(0,this.conversationValue.length)===this.conversationValue)}openConversation(e){var o=this;return(0,f.A)(function*(){return yield(yield o.modalController.create({component:U,cssClass:"conversationPage",componentProps:{conversation:o.conversations.filter(c=>c.id==e)}})).present()})()}static{this.\u0275fac=function(o){return new(o||t)(n.rXU(s.W3),n.rXU(_.j))}}static{this.\u0275cmp=n.VBU({type:t,selectors:[["app-conversations"]],standalone:!0,features:[n.aNF],decls:19,vars:5,consts:[[1,"ion-no-border"],["slot","start"],["routerLink","/p/home"],["name","arrow-back-outline"],["mode","md","color","dark"],["slot","end",1,"actions"],["fill","clear"],["slot","icon-only","name","videocam-outline","color","dark"],["slot","icon-only","name","create-outline","color","dark"],[1,"search-bar",3,"input","placeholder"],[3,"message","click",4,"ngFor","ngForOf"],[3,"click","message"]],template:function(o,i){1&o&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.nrm(4,"ion-icon",3),n.k0s(),n.j41(5,"ion-label",4),n.EFF(6),n.k0s()(),n.j41(7,"ion-buttons",5)(8,"ion-button",6),n.nrm(9,"ion-icon",7),n.k0s(),n.j41(10,"ion-button",6),n.nrm(11,"ion-icon",8),n.k0s()()()(),n.j41(12,"ion-content")(13,"ion-header",0)(14,"ion-toolbar")(15,"ion-searchbar",9),n.nI1(16,"translate"),n.bIt("input",function(l){return i.searchConversation(l)}),n.k0s()()(),n.j41(17,"ion-list"),n.DNE(18,B,1,1,"conversation-item",10),n.k0s()()),2&o&&(n.R7$(6),n.JRh(i.loggedUserUsername),n.R7$(9),n.Y8G("placeholder",n.bMT(16,3,"Search")),n.R7$(3),n.Y8G("ngForOf",i.conversationPeople))},dependencies:[s.bv,s.Jm,s.QW,s.W9,s.eU,s.iq,s.he,s.nf,s.S1,s.ai,s.Gw,s.N7,d.Wk,g.pM,E,p.D9]})}}return t})()}];let N=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=n.$C({type:t})}static{this.\u0275inj=n.G2t({imports:[d.iI.forChild(D),d.iI]})}}return t})(),w=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=n.$C({type:t})}static{this.\u0275inj=n.G2t({imports:[g.MD,m.YN,s.bv,N]})}}return t})()}}]);