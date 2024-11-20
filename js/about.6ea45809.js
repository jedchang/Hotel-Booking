(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"170b":function(t,s,i){t.exports=i.p+"img/sub-double-room.f2133bb9.jpg"},"3ab1":function(t,s,i){"use strict";i.r(s);i("7f7f");var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"room"},[s("FixedRoomStyle"),s("section",{staticClass:"header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"room-info"},[s("div",{staticClass:"room-title"},[s("h1",[t._v(" "+t._s(t.roomDetail.name)+" ")])]),t._m(0),s("div",{staticClass:"nav-block"},[t._m(1),s("div",{staticClass:"type-price"},[t._v("holiday price - $2,000 NTD / night")]),s("div",{staticClass:"check-in-out nav-item"},[s("img",{staticClass:"icon-type",attrs:{src:i("1e0f"),alt:""}}),s("VueHotelDatepicker",{attrs:{startDate:t.testStartDate,endDate:t.testEndDate,mobile:"mobile",placeholder:t.placeholderCheckIn}}),s("img",{staticClass:"icon-dropdown",attrs:{src:i("38c6"),alt:""}})],1),s("router-link",{staticClass:"btn-reserve active",attrs:{to:"/reservation"}},[t._v("\n                reserve now\n              ")])],1)])])])])]),t._m(2),t._m(3),s("FooterBlock")],1)},A=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"img-wrap"},[s("img",{staticClass:"main-img",attrs:{src:i("c198"),alt:""}}),s("div",{staticClass:"type-price"},[t._v("weekday price")]),s("div",{staticClass:"photo-list"},[s("a",{attrs:{href:"javascript:;"}},[s("img",{staticClass:"sub-img",attrs:{src:i("49dc"),alt:""}})]),s("a",{attrs:{href:"javascript:;"}},[s("img",{staticClass:"sub-img",attrs:{src:i("6905"),alt:""}})]),s("a",{attrs:{href:"javascript:;"}},[s("img",{staticClass:"sub-img",attrs:{src:i("170b"),alt:""}})])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"room-price"},[t._v("$3,899"),s("span",{staticClass:"currency"},[t._v("NTD")]),s("span",[t._v("/ night")])])},function(){var t=this,s=t._self._c;return s("section",{staticClass:"room-description"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"content"},[s("h3",[t._v("Description")]),s("p",[t._v("1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²")]),s("p",[t._v("Deluxe Single Room is only reserved for one guest. There is a bedroom with a small double size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.")]),s("p",[t._v("Check-in is from 3pm to 7pm")]),s("p",[t._v("Check-out is before 11am")])])])])])])},function(){var t=this,s=t._self._c;return s("section",{staticClass:"room-amenities"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"content"},[s("h3",[t._v("Amenities")]),s("ul",{staticClass:"amenities-list"},[s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("wifi")]),t._v("Wi-Fi")]),s("li",{staticClass:"item show"},[s("i",{staticClass:"material-icons"},[t._v("tv")]),t._v("Television")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("landscape")]),t._v("Great View")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("restaurant")]),t._v("Breakfast")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("ac_unit")]),t._v("Air Conditioner")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("smoke_free")]),t._v("Smoke Free")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("local_bar")]),t._v("Mini Bar")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("kitchen")]),t._v("Refrigerator")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("child_care")]),t._v("Child-Friendly")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("room_service")]),t._v("Room Service")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("weekend")]),t._v("Sofa")]),s("li",{staticClass:"item"},[s("i",{staticClass:"material-icons"},[t._v("pets")]),t._v("Pet-Friendly")])])])])])])])}],e=i("bc3a"),o=i.n(e),c=i("f4b8"),l=i("a51a"),r=i("b5cf"),n={name:"room",components:{FixedRoomStyle:c["a"],VueHotelDatepicker:r["a"],FooterBlock:l["a"]},props:{placeholderCheckIn:{type:String,default:"CHECK-IN & CHECK-OUT"}},data:function(){return{roomDetail:null,testStartDate:void 0,testEndDate:void 0}},created:function(){this.getRoomDetail()},methods:{getRoomDetail:function(){var t=this;o.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",{headers:{Accept:"application/json",Authorization:"Bearer MBSq6sUBHhy1xw20NIg33KIapkVPPcCa1ZfDNtfDlIb1M89p4crXq1SSruNv"}}).then((function(s){s.data.success&&(console.log("獲取單一房型",s.data),t.roomDetail=s.data.room)})).catch((function(t){console.log("錯誤!",t)}))}}},C=n,m=(i("5835"),i("2877")),v=Object(m["a"])(C,a,A,!1,null,"20f04c55",null);s["default"]=v.exports},"3d67":function(t,s,i){},"49dc":function(t,s,i){t.exports=i.p+"img/sub-deluxe-double-room.33e72ac4.jpg"},"4d02":function(t,s,i){"use strict";i("8ae2")},5835:function(t,s,i){"use strict";i("3d67")},6905:function(t,s){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABQAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxNTE0M0U3QzQ4MTExRTlCNTRFQzBFQjhDQzAwRDZGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxNTE0M0U2QzQ4MTExRTlCNTRFQzBFQjhDQzAwRDZGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNjhGMzFFOEE3QTFEMDI5MzdENjI2QjYxRjBBNEI3MTciIHN0UmVmOmRvY3VtZW50SUQ9IjY4RjMxRThBN0ExRDAyOTM3RDYyNkI2MUYwQTRCNzE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAAGSwAABsEAAAgzAAAKUP/bAIQAAgICAgICAgIC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"},"8ae2":function(t,s,i){},c198:function(t,s,i){t.exports=i.p+"img/main-deluxe-single-room.27371677.jpg"},f4b8:function(t,s,i){"use strict";var a=function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"fixed-room-style"},[s("div",{staticClass:"container-full"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"content"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("\n              H\n            ")]),s("div",{staticClass:"room-style nav-item"},[s("img",{staticClass:"icon-type",attrs:{src:i("05c4"),alt:""}}),s("cool-select",{attrs:{items:t.items,placeholder:"ROOM STYLE"},model:{value:t.selected,callback:function(s){t.selected=s},expression:"selected"}}),s("img",{staticClass:"icon-dropdown",attrs:{src:i("38c6"),alt:""}})],1)],1)])])])])])},A=[],e=i("bf76"),o={name:"FixedRoomStyle",components:{CoolSelect:e["CoolSelect"]},data:function(){return{selected:null,items:["Single Room","Deluxe Single Room","Double Room","Deluxe Double Room","Twin Room","Deluxe Twin Room"]}}},c=o,l=(i("4d02"),i("2877")),r=Object(l["a"])(c,a,A,!1,null,"63f3ee0c",null);s["a"]=r.exports}}]);
//# sourceMappingURL=about.6ea45809.js.map