(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"1+Yw":function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),i=function(){return function(){}}(),e=l("pMnS"),u=l("VFiu"),r=function(){function n(n,t){this.billService=n,this.router=t}return n.prototype.ngOnInit=function(){this.getBills()},n.prototype.getBills=function(){var n=this;this.billService.getBillsList().subscribe(function(t){n.bills=t})},n.prototype.billDetails=function(n){this.router.navigate(["bill-details",n])},n.prototype.updateBill=function(n){this.router.navigate(["update-bill",n])},n.prototype.deleteBill=function(n){var t=this;this.billService.deleteBill(n).subscribe(function(n){console.log(n),t.getBills()})},n}(),c=l("ZYCi"),s=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function a(n){return o["\u0275vid"](0,[],null,null)}function p(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"sa-bill-list",[],null,null,null,a,s)),o["\u0275did"](1,114688,null,0,r,[u.a,c.l],null,null)],function(n,t){n(t,1,0)},null)}var d=o["\u0275ccf"]("sa-bill-list",r,p,{},{},[]),f=l("Ip0R"),m=function(){return function(){}}();l.d(t,"BillListModuleNgFactory",function(){return v});var v=o["\u0275cmf"](i,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,d]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[o.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),o["\u0275mpd"](1073742336,c.p,c.p,[[2,c.v],[2,c.l]]),o["\u0275mpd"](1073742336,m,m,[]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](1024,c.j,function(){return[[{path:"",component:r}]]},[])])})}}]);