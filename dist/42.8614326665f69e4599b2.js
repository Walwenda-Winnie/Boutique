(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{qF20:function(n,t,o){"use strict";o.r(t);var i=o("CcnG"),l=function(){return function(){}}(),u=o("pMnS"),e=o("l27u"),r=o("VFiu"),c=function(){function n(n,t,o){this.billService=n,this.route=t,this.router=o,this.bill=new e.a}return n.prototype.ngOnInit=function(){var n=this;this.id=this.route.snapshot.params.id,this.billService.getBillById(this.id).subscribe(function(t){n.bill=t},function(n){return console.log(n)})},n.prototype.onSubmit=function(){var n=this;this.billService.updateBill(this.id,this.bill).subscribe(function(t){n.goToBillList()},function(n){return console.log(n)})},n.prototype.goToBillList=function(){this.router.navigate(["/bills"])},n}(),a=o("ZYCi"),s=i["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(n){return i["\u0275vid"](0,[],null,null)}function d(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"sa-update-bill",[],null,null,null,p,s)),i["\u0275did"](1,114688,null,0,c,[r.a,a.a,a.l],null,null)],function(n,t){n(t,1,0)},null)}var f=i["\u0275ccf"]("sa-update-bill",c,d,{},{},[]),m=o("Ip0R"),h=function(){return function(){}}();o.d(t,"UpdateBillModuleNgFactory",function(){return b});var b=i["\u0275cmf"](l,[],function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,f]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,m.NgLocalization,m.NgLocaleLocalization,[i.LOCALE_ID,[2,m["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](1073742336,m.CommonModule,m.CommonModule,[]),i["\u0275mpd"](1073742336,a.p,a.p,[[2,a.v],[2,a.l]]),i["\u0275mpd"](1073742336,h,h,[]),i["\u0275mpd"](1073742336,l,l,[]),i["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:c}]]},[])])})}}]);