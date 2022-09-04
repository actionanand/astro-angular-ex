import{\u0275 as r,a as c,b as n,c as l,d as a,e as g,f as i,g as u,h as m,N as p,s as f,C as d}from"./chunks/common.40b80182.js";function h(o,e){o&1&&(n(0,"p"),l(1,"Toggled"),a())}class t{constructor(){this.show=!0}toggle(){this.show=!this.show}}t.\u0275fac=function(e){return new(e||t)};t.\u0275cmp=r({type:t,selectors:[["app-hello"]],standalone:!0,features:[c],decls:5,vars:1,consts:[[3,"click"],[4,"ngIf"]],template:function(e,s){e&1&&(n(0,"p"),l(1,"Hello from Angular!!"),a(),n(2,"button",0),g("click",function(){return s.toggle()}),l(3,"Toggle"),a(),i(4,h,2,0,"p",1)),e&2&&(u(4),m("ngIf",s.show))},dependencies:[p],encapsulation:2});(function(){(typeof ngDevMode>"u"||ngDevMode)&&f(t,[{type:d,args:[{selector:"app-hello",standalone:!0,imports:[p],template:`
    <p>Hello from Angular!!</p>
    <button (click)="toggle()">Toggle</button>
    
    <p *ngIf="show">Toggled</p>
  `}]}],null,null)})();export{t as HelloComponent};
