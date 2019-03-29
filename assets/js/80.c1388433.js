(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{262:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("The Agama desktop code comprises of two parts. Backend and UI. This assetchain addition guide will cover both. All the files that need to be changed are linked.")]),e._v(" "),e._m(1),e._v(" "),a("ul",[a("li",[a("p",[e._v("Add a default asset chain port "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/ports.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/ports.js@dev"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add an electrum server for your asset (optional) "),a("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/electrum-servers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/electrum-servers.js@dev#L1"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add a fixed fee for your asset (required if you submit electrum servers list) "),a("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/fees.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/fees.js@dev#L1"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add an asset chain to the list of kmd assets "),a("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L1",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L1"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add asset chain params to this file "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/chainParams.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/chainParams.js@dev"),a("OutboundLink")],1)])]),e._v(" "),e._m(2)]),e._v(" "),e._m(3),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("genproclimit: true")]),e._v(" property to allow mining with multiple CPU threads. Default value is 0 (e.g. "),a("code",[e._v("-gen -genproclimit=0")]),e._v(") in case "),a("code",[e._v("genproclimit")]),e._v(" option is not explicitly specified. "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/Agama/blob/dev/routes/chainParams.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/Agama:routes/chainParams.js@dev"),a("OutboundLink")],1)])]),e._v(" "),e._m(4),e._v(" "),a("ul",[a("li",[a("p",[e._v("Drop a 100 x 100 px (better 200 x 200 px) logo into "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/tree/dev/react/src/assets/images/cryptologo",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/assets/images/cryptologo@dev"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add an asset chain explorer "),a("a",{attrs:{href:"https://github.com/pbca26/agama-wallet-lib/blob/dev/src/coin-helpers.js#L51",target:"_blank",rel:"noopener noreferrer"}},[e._v("pbca26/agama-wallet-lib:src/coin-helpers.js@dev#L51"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Add asset chain name to coins translation file "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/EasyDEX-GUI/blob/dev/react/src/translate/coins.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoPlatform/EasyDEX-GUI:react/src/translate/coins.js@dev"),a("OutboundLink")],1),e._v(", look for "),a("code",[e._v("ASSETCHAINS")]),e._v(".")])]),e._v(" "),e._m(5)]),e._v(" "),a("p",[e._v("Please make sure an assetchain is working in Agama before making a PR. Pull requests containing partial information or not working assets/servers will remain unmerged until all requirements are fulfilled.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"add-komodo-assetchains-to-agama-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-komodo-assetchains-to-agama-desktop","aria-hidden":"true"}},[this._v("#")]),this._v(" Add Komodo Assetchains to Agama Desktop")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"backend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Submit a PR")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"asset-chains-with-block-rewards-optional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asset-chains-with-block-rewards-optional","aria-hidden":"true"}},[this._v("#")]),this._v(" Asset chains with block rewards (optional)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ui","aria-hidden":"true"}},[this._v("#")]),this._v(" UI")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Submit a PR to "),t("code",[this._v("dev")]),this._v(" branch on each repo.")])])}],!1,null,null,null);t.default=s.exports}}]);