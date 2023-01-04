"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[951],{23714:(e,t,a)=>{a.d(t,{U2:()=>d,v_:()=>o});var n=a(14206);var i=a.n(n);var r=a(78171);i().defaults.headers={"Content-Type":"application/json;charset=utf-8;charset=UTF-8"||0,"X-Frame-Options":"SAMEORIGIN"};i().defaults.baseURL="/";i().interceptors.request.use(function(e){if((0,r.r)()){e.headers.token=(0,r.r)()}return e},function(e){return Promise.reject(e)});i().interceptors.response.use(function(e){if(e.data.position==="sessionOut"){sessionStorage.removeItem("TOKEN");(0,r.Bn)();return}else if(e.status===200){return e}},function(e){return Promise.reject(e)});function o(e,t){return i().post(e,t)}function d(e,t){return i().get(e,t)}function s(e,t){return axios.post(e,t)}function l(e,t){return axios.post(e,t,{responseType:"blob"})}},3817:(e,t,a)=>{a.r(t);a.d(t,{default:()=>s});var n=a(54933);var i=a.n(n);var r=a(93476);var o=a.n(r);var d=o()(i());d.push([e.id,".certification-main[data-v-e43dd9ee] {\n  width: calc(100% - 48px);\n  height: auto;\n  margin: 0 auto;\n}\n.certification-title[data-v-e43dd9ee] {\n  color: #121314;\n  font-size: 24px;\n  padding-top: 24px;\n  margin-bottom: 24px;\n  cursor: pointer;\n}\n.certification-title i[data-v-e43dd9ee] {\n  margin-right: 16px;\n}\n.certification-header[data-v-e43dd9ee] {\n  width: 100%;\n  height: 164px;\n  display: flex;\n  background-color: #f6f7f8;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.certification-header .flex-left[data-v-e43dd9ee] {\n  width: 214px;\n  height: auto;\n}\n.certification-header .flex-right[data-v-e43dd9ee] {\n  width: calc(100% - 214px);\n  height: auto;\n}\n.certification-header .flex-right .right-title[data-v-e43dd9ee] {\n  font-size: 16px;\n  color: #121314;\n  margin-bottom: 8px;\n}\n.certification-header .flex-right .right-ul[data-v-e43dd9ee] {\n  width: 100%;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n.certification-header .flex-right .right-ul li[data-v-e43dd9ee] {\n  list-style-type: none;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #47494a;\n}\n.certification-box[data-v-e43dd9ee] {\n  width: 100%;\n  height: auto;\n  display: flex;\n}\n.certification-box .box-left[data-v-e43dd9ee] {\n  width: 380px;\n  height: 386px;\n  margin-right: 24px;\n  border-radius: 8px;\n  background-color: #ffffff;\n  border: 1px solid #eaeaea;\n}\n.certification-box .box-left .box-center[data-v-e43dd9ee] {\n  width: calc(100% - 48px);\n  height: auto;\n  margin: 0 auto;\n  padding-top: 24px;\n}\n.certification-box .box-left .box-img[data-v-e43dd9ee] {\n  width: 60px;\n  height: 60px;\n  margin-bottom: 16px;\n}\n.certification-box .box-left .box-title[data-v-e43dd9ee] {\n  font-size: 20px;\n  color: #121314;\n  margin-bottom: 12px;\n}\n.certification-box .box-left .box-remark[data-v-e43dd9ee] {\n  font-size: 14px;\n  color: #595a5c;\n  margin-bottom: 12px;\n}\n.certification-box .box-left .box-money[data-v-e43dd9ee] {\n  color: #0f5bf3;\n  margin-top: 60px;\n  margin-bottom: 24px;\n}\n.certification-box .box-left .box-money .money-smail[data-v-e43dd9ee] {\n  font-size: 24px;\n}\n.certification-box .box-left .box-money .money-mini[data-v-e43dd9ee] {\n  font-size: 14px;\n}\n.certification-box .box-left .money-top[data-v-e43dd9ee] {\n  margin-top: 82px;\n}\n.certification-box .box-left .btn-a[data-v-e43dd9ee] {\n  width: 100%;\n  height: 38px;\n  line-height: 38px;\n  display: inline-block;\n  background-color: #0f5bf3;\n  color: #fff;\n  font-size: 14px;\n  border-radius: 4px;\n  text-align: center;\n}\n.certification-box .box-left .car[data-v-e43dd9ee] {\n  background-color: #f6f7f8;\n  color: #c8cacb;\n}\n/***************/\n.certification-succes-box[data-v-e43dd9ee] {\n  width: 100%;\n  height: auto;\n  margin-top: 24px;\n  display: flex;\n  margin-bottom: 16px;\n}\n.certification-succes-box .succes-left[data-v-e43dd9ee] {\n  width: 780px;\n  height: 260px;\n  margin-right: 16px;\n  background-color: #f6f7f8;\n  border-radius: 8px;\n  position: relative;\n}\n.certification-succes-box .succes-right[data-v-e43dd9ee] {\n  width: 364px;\n  height: 260px;\n  background-color: #f6f7f8;\n  border-radius: 8px;\n}\n.left-box[data-v-e43dd9ee] {\n  width: calc(100% - 42px);\n  padding-left: 42px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.left-box .left-img[data-v-e43dd9ee] {\n  width: 237px;\n  height: auto;\n  margin-right: 55px;\n}\n.left-box .left-remark[data-v-e43dd9ee] {\n  width: auto;\n  height: auto;\n}\n.left-box .left-remark dl[data-v-e43dd9ee] {\n  margin-bottom: 16px;\n}\n.left-box .left-remark dl dt[data-v-e43dd9ee],\n.left-box .left-remark dl dd[data-v-e43dd9ee] {\n  padding: 0px;\n  margin: 0px;\n}\n.left-box .left-remark dl dt[data-v-e43dd9ee] {\n  color: #595959;\n  font-size: 12px;\n}\n.left-box .left-remark dl dd[data-v-e43dd9ee] {\n  font-size: 18px;\n  color: #121314;\n}\n.succes-img[data-v-e43dd9ee] {\n  position: absolute;\n  top: 17px;\n  right: 24px;\n  width: 100%;\n  text-align: right;\n}\n.succes-img img[data-v-e43dd9ee] {\n  width: 34px;\n  height: 34px;\n}\n.succes-bottom-img[data-v-e43dd9ee] {\n  position: absolute;\n  bottom: 24px;\n  right: 24px;\n  width: 100%;\n  text-align: right;\n}\n.succes-bottom-img img[data-v-e43dd9ee] {\n  width: 96px;\n  height: 96px;\n}\n.succes-remark-box[data-v-e43dd9ee] {\n  width: calc(100% - 48px);\n  height: auto;\n  margin: 0 auto;\n}\n.succes-remark-box .padding-top[data-v-e43dd9ee] {\n  padding-top: 32px;\n}\n.box-reamrk-w[data-v-e43dd9ee] {\n  width: 100% !important;\n  margin-left: 74px;\n}\n.remark-flex[data-v-e43dd9ee] {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  justify-content: space-between;\n}\n.remark-flex .remark-left[data-v-e43dd9ee] {\n  color: #575757;\n  font-size: 14px;\n}\n.remark-flex .remark-right[data-v-e43dd9ee] {\n  font-size: 14px;\n  color: #121314;\n  width: 60%;\n  text-align: left;\n}\n.cer-title[data-v-e43dd9ee] {\n  font-size: 14px;\n  color: #121314;\n  margin-bottom: 16px;\n}\n.cer-box[data-v-e43dd9ee] {\n  width: 100%;\n  height: auto;\n  display: flex;\n}\n.cer-flex[data-v-e43dd9ee] {\n  flex: 1;\n}\n.photos-one[data-v-e43dd9ee] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.uploader-left[data-v-e43dd9ee] {\n  margin-left: 19px;\n}\n.idCard-remark[data-v-e43dd9ee] {\n  font-size: 12px;\n  color: #454647;\n  text-align: center;\n  margin-top: 8px;\n}\n.photos-remark[data-v-e43dd9ee] {\n  width: 620px;\n  height: 154px;\n  background-color: #f6f7f8;\n  border-radius: 4px;\n  margin-left: 20px;\n}\n.photos-remark .remark-box-flex[data-v-e43dd9ee] {\n  width: calc(100% - 32px);\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n}\n.photos-remark .remark-box-flex .flex-img[data-v-e43dd9ee] {\n  width: 190px;\n  height: 122px;\n  margin-right: 14px;\n}\n.photos-remark .remark-box-flex .flex-img img[data-v-e43dd9ee] {\n  width: 100%;\n  height: 100%;\n}\n.flex-ul-li .remark[data-v-e43dd9ee] {\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: #575757;\n}\n[data-v-e43dd9ee] .el-form-item__content {\n  line-height: normal !important;\n}\n.remark-width[data-v-e43dd9ee] {\n  width: 452px;\n}\n.fee-paly[data-v-e43dd9ee] {\n  color: #0f5bf3;\n  font-size: 16px;\n}\n.btn-apply[data-v-e43dd9ee] {\n  color: #ffffff;\n  font-size: 14px;\n  width: 69px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 4px;\n  background-color: #0f5bf3;\n  display: inline-block;\n}\n.box-right[data-v-e43dd9ee] {\n  width: 100% !important;\n  display: flex;\n  align-items: center;\n}\n.box-right .left-img[data-v-e43dd9ee] {\n  width: 327px;\n  height: auto;\n}\n.remark-w[data-v-e43dd9ee] {\n  width: 44% !important;\n}\n.flex-w[data-v-e43dd9ee] {\n  width: 96% !important;\n}\n.flex-btn-a[data-v-e43dd9ee] {\n  color: #ffffff;\n  font-size: 14px;\n  width: 69px;\n  height: 32px;\n  text-align: center;\n  border-radius: 4px;\n  background-color: #0f5bf3;\n  display: inline-block;\n  width: 103px !important;\n  height: 32px !important;\n  line-height: 32px;\n}\n.el-input[data-v-e43dd9ee],\n.el-select[data-v-e43dd9ee],\n.el-date-editor[data-v-e43dd9ee] {\n  width: 430px;\n}\n.avatar-uploader[data-v-e43dd9ee] {\n  width: 224px;\n  height: 154px;\n  background-color: #fafafa;\n  position: relative;\n}\n.avatar-uploader .el-upload[data-v-e43dd9ee] {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-e43dd9ee]:hover {\n  border-color: #409eff;\n}\n.avatar-icon[data-v-e43dd9ee] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 14px;\n  color: #121314;\n}\n.avatar-icon i[data-v-e43dd9ee] {\n  margin-right: 8px;\n}\n",""]);const s=d},67657:(t,e,a)=>{var n=a(1892);var i=a.n(n);var r=a(95760);var o=a.n(r);var d=a(38311);var s=a.n(d);var l=a(58192);var c=a.n(l);var p=a(38060);var f=a.n(p);var u=a(54865);var v=a.n(u);var m=a(3817);var h={};h.styleTagTransform=v();h.setAttributes=c();h.insert=s().bind(null,"head");h.domAPI=o();h.insertStyleElement=f();var x=i()(m["default"],h);if(true){if(!m["default"].locals||t.hot.invalidate){var g=function e(t,a,n){if(!t&&a||t&&!a){return false}var i;for(i in t){if(n&&i==="default"){continue}if(t[i]!==a[i]){return false}}for(i in a){if(n&&i==="default"){continue}if(!t[i]){return false}}return true};var b=!m["default"].locals;var k=b?m:m["default"].locals;t.hot.accept(3817,e=>{m=a(3817);(function(){if(!g(k,b?m:m["default"].locals,b)){t.hot.invalidate();return}k=b?m:m["default"].locals;x(m["default"])})(e)})}t.hot.dispose(function(){x()})}var w=m["default"]&&m["default"].locals?m["default"].locals:undefined},64951:(e,t,i)=>{i.r(t);i.d(t,{default:()=>h});var a=function e(){var a=this,t=a._self._c,n=a._self._setupProxy;return t("div",{staticClass:"certification-main"},[a._m(0),a._v(" "),t("el-form",{attrs:{"label-position":"top","label-width":"80px"}},[t("el-form-item",{attrs:{label:"Nationality"}},[t("el-select",{attrs:{placeholder:"Please select your nationality"}},[t("el-option",{attrs:{value:"1",label:"123"}})],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"Name"}},[t("el-input")],1),a._v(" "),t("el-form-item",{attrs:{label:"Document Type"}},[t("el-radio-group",{model:{value:a.type,callback:function e(t){a.type=t},expression:"type"}},[t("el-radio",{attrs:{label:1}},[a._v("Passport")]),a._v(" "),t("el-radio",{attrs:{label:2}},[a._v("Identity Card")])],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"Document Photos"}},[a.type==1?t("div",{staticClass:"photos-one"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:""}},[t("div",{staticClass:"avatar-icon"},[t("i",{staticClass:"el-icon-camera-solid"}),a._v("Photograph")])]),a._v(" "),t("div",{staticClass:"photos-remark"},[t("div",{staticClass:"remark-box-flex"},[t("div",{staticClass:"flex-img"},[t("img",{attrs:{src:i(69339)}})]),a._v(" "),t("div",{staticClass:"flex-ul-li"},[t("div",{staticClass:"remark"},[a._v("1. Document has not expired.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("2. Document must be originals, not photocopies or scans, etc.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("3. Content in Photo must be clear and complete.")])])])])],1):a._e(),a._v(" "),a.type==2?t("div",{staticClass:"photos-one"},[t("div",[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":false,"http-request":a.uploadCardFrontRequest,"auto-upload":true,limit:1}},[t("div",{staticClass:"avatar-icon"},[t("i",{staticClass:"el-icon-camera-solid"}),a._v("Photograph")])]),a._v(" "),t("div",{staticClass:"idCard-remark"},[a._v("Front")])],1),a._v(" "),t("div",[t("el-upload",{staticClass:"avatar-uploader uploader-left",attrs:{action:"","show-file-list":false,"http-request":a.uploadCardBackRequest,"auto-upload":true,limit:1}},[t("div",{staticClass:"avatar-icon"},[t("i",{staticClass:"el-icon-camera-solid"}),a._v("Photograph")])]),a._v(" "),t("div",{staticClass:"idCard-remark"},[a._v("Back")])],1),a._v(" "),t("div",[t("div",{staticClass:"photos-remark",class:{"remark-width":a.type==2}},[t("div",{staticClass:"remark-box-flex"},[t("div",{staticClass:"flex-ul-li"},[t("div",{staticClass:"remark"},[a._v("1. Document has not expired.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("2. Document must be originals, not photocopies or scans, etc.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("3. Content in Photo must be clear and complete.")])])])]),a._v(" "),t("div",{staticClass:"idCard-remark"},[a._v(" ")])])]):a._e()]),a._v(" "),t("el-form-item",{attrs:{label:"Document No."}},[t("el-input")],1),a._v(" "),t("el-form-item",{attrs:{label:"Validity Period"}},[t("el-date-picker",{attrs:{type:"datetimerange","range-separator":"-","start-placeholder":"Date of Issue","end-placeholder":"Valid Until","value-format":"yyyy-MM-dd hh:mm:ss"},model:{value:a.dateTime,callback:function e(t){a.dateTime=t},expression:"dateTime"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"Document Holder Photo"}},[t("div",{staticClass:"photos-one"},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:""}},[t("div",{staticClass:"avatar-icon"},[t("i",{staticClass:"el-icon-camera-solid"}),a._v("Photograph")])]),a._v(" "),t("div",{staticClass:"photos-remark"},[t("div",{staticClass:"remark-box-flex"},[t("div",{staticClass:"flex-img"},[t("img",{attrs:{src:i(69339)}})]),a._v(" "),t("div",{staticClass:"flex-ul-li"},[t("div",{staticClass:"remark"},[a._v("1. The photo must include person's face with his/her own document.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("2. The holder must be the same as the person in the document.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("3. Content in document must be clear and complete.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("4. The document held must be consistent with the document photo uploaded above.")]),a._v(" "),t("div",{staticClass:"remark"},[a._v("5. The person in the photo must be clearly and complete.")])])])])],1)]),a._v(" "),t("el-form-item",{attrs:{label:"Application Fee"}},[t("span",{staticClass:"fee-paly"},[a._v("0.871404 DOT ≈ $5.00")])]),a._v(" "),t("div",[t("a",{staticClass:"btn-apply",attrs:{href:"javascript:;"},on:{click:a.confrimAuthentication}},[a._v("Apply")])])],1)],1)};var n=[function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",{staticClass:"certification-title"},[t("i",{staticClass:"el-icon-back"}),e._v("Individual Certificate Application")])}];var o=i(27791);var r=i(50824);var d=i.n(r);var s=i(23714);var l=function(){var a=(0,o.Z)(d().mark(function e(a){var n;return d().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return(0,s.v_)("",a);case 2:n=t.sent;return t.abrupt("return",n.data);case 4:case"end":return t.stop()}}},e)}));return function e(t){return a.apply(this,arguments)}}();var c=function(){var a=(0,o.Z)(d().mark(function e(a){var n;return d().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:t.next=2;return(0,s.v_)("",a);case 2:n=t.sent;return t.abrupt("return",n.data);case 4:case"end":return t.stop()}}},e)}));return function e(t){return a.apply(this,arguments)}}();const p={data:function e(){return{type:2,formData:{},dateTime:[]}},methods:{uploadCardFrontRequest:function e(i){var r=this;return(0,o.Z)(d().mark(function e(){var a,n;return d().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:a=new FormData;a.append("file",i.file);t.next=4;return l(a);case 4:n=t.sent;if(n.code==200){r.$message.success("上传成功")}case 6:case"end":return t.stop()}}},e)}))()},uploadCardBackRequest:function e(i){var r=this;return(0,o.Z)(d().mark(function e(){var a,n;return d().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:a=new FormData;a.append("file",i.file);t.next=4;return l(a);case 4:n=t.sent;if(n.code==200){r.$message.success("上传成功")}case 6:case"end":return t.stop()}}},e)}))()},confrimAuthentication:function e(){var n=this;return(0,o.Z)(d().mark(function e(){var a;return d().wrap(function e(t){while(1){switch(t.prev=t.next){case 0:if(n.dataTime&&n.dataTime.length>0){n.formData.startTime=n.dataTime[0];n.formData.endTime=n.dataTime[1]}t.next=3;return c(n.formData);case 3:a=t.sent;if(a.code==200){n.$message.success("上传成功")}case 5:case"end":return t.stop()}}},e)}))()}}};const f=p;var u=i(67657);var v=i(40810);var m=(0,v.Z)(f,a,n,false,null,"e43dd9ee",null);const h=m.exports},69339:(e,t,a)=>{e.exports=a.p+"images/card-one.png"}}]);