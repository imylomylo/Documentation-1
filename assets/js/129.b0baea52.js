(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{313:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This is how Grewal Satinder implemented zeroconf in BarterDEX GUI:")]),e._v(" "),s("p",[e._v("The files you need:")]),e._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/blob/master/ipc/shepherd-ipc.js#L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("/ipc/shepherd-ipc.js@master#L62"),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/blob/master/gui/js/dex_SimpleActions.js#L5438",target:"_blank",rel:"noopener noreferrer"}},[e._v("/gui/js/dex_SimpleActions.js@master#L5438"),s("OutboundLink")],1)])])]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"how-zeroconf-api-was-implemented-in-barterdex-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-zeroconf-api-was-implemented-in-barterdex-gui","aria-hidden":"true"}},[this._v("#")]),this._v(" How zeroconf API was implemented in BarterDEX GUI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Look for keyword "),t("code",[this._v("zeroconf")]),this._v(" in the file. There is Shepherd-IPC-API which interacts with the GUI through Electron IPC. This API's job is to record and backup the output of zeroconf results. Doesn't matter if it's success or error, it will record that output in a log file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The reason is in case the user somehow got messed up setup with the mm or something which results in loosing the access to their txid. These log files can be used to track those txids done for zeroconf and recover those funds sent to zeroconf. These logs files feature is independent operation to the "),t("code",[this._v("marketmaker")]),this._v(" zeroconf API calls.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The gui/js side of code is managing the "),t("code",[this._v("deposit")]),this._v(" part and "),t("code",[this._v("claim")]),this._v(" part. zeroconf is very easy to implement, as its the only deposit/claim process, nothing else much.")])}],!1,null,null,null);t.default=i.exports}}]);