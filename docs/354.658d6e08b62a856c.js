"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[354],{4354:(v,u,i)=>{i.r(u),i.d(u,{CartModule:()=>x});var l=i(6895),p=i(9541),t=i(1571),m=i(3705),g=i(5236),a=i(433);function C(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(r){const s=t.CHM(e).$implicit;return t.KtG(s.quantity=r)})("change",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.checkTotalPrice())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const d=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.deleteProductCart(d.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&n){const e=c.$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(t.xi3(6,4,e.price,"BRL")),t.xp6(4),t.Q6J("ngModel",e.quantity)}}function h(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,C,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.buy())}),t._uU(7,"Comprar"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.cartItems),t.xp6(2),t.Oqu(t.xi3(5,2,e.totalPrice,"BRL"))}}function f(n,c){1&n&&t._uU(0," Nunhum produto foi adicionado ao carrinho\n")}const _=[{path:"",component:(()=>{class n{constructor(e,o,r){this.cartService=e,this.route=o,this.notifyService=r,this.cartItems=[],this.totalPrice=0}ngOnInit(){this.cartItems=this.cartService.getItems(),this.checkTotalPrice()}deleteProductCart(e){this.cartItems=this.cartItems.filter(o=>o.id!==e),this.cartService.deleteItem(e),this.checkTotalPrice()}checkTotalPrice(){this.totalPrice=this.cartItems.reduce((e,o)=>e+o.price*o.quantity,0)}buy(){this.notifyService.notify("Compra realizada com sucesso."),this.cartService.clearCart(),this.route.navigate(["produtos"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.N),t.Y36(p.F0),t.Y36(g.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["emptyCart",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number","min","1",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-trash"]],template:function(e,o){if(1&e&&(t.TgZ(0,"h2",0),t._uU(1," Carrinho"),t.qZA(),t.YNc(2,h,8,5,"div",1),t.YNc(3,f,1,0,"ng-template",null,2,t.W1O)),2&e){const r=t.MAs(4);t.xp6(2),t.Q6J("ngIf",o.cartItems.length>0)("ngIfElse",r)}},dependencies:[l.sg,l.O5,a.Fj,a.wV,a.JJ,a.qQ,a.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}ul[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between;width:80%}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all;cursor:pointer}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--dark-blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{background-color:var(--blue)}.empty-cart[_ngcontent-%COMP%]{font-size:2rem}"]}),n})()}];let x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,p.Bz.forChild(_),a.u5]}),n})()}}]);