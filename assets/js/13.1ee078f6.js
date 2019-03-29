(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{194:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("The first existing chain which doesn't have CC enabled, whose startup command looks like this")]),t._v(" "),t._m(3),e("p",[t._v("It was a very easy way to start a chain using Komodo technology, with very few parameters. In order to activate CC in this chain, all we have to do is the following:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("As this is a hardforking change, all nodes must update. If the chain is being notarized, Notary Nodes need to update to the new parameters as well for the notarization to continue without disruption past the activation block.")]),t._v(" "),e("p",[t._v("Once CC is activated on a chain, do not change the startup script. If you do, that will create a new fork.")]),t._v(" "),e("p",[t._v("By default, "),e("code",[t._v("-ac_ccactivate=height")]),t._v(" uses "),e("code",[t._v("-ac_cc=2")]),t._v(" (If you "),e("router-link",{attrs:{to:"./../installations/asset-chain-parameters.html"}},[t._v("recall")]),t._v(", "),e("code",[t._v("-ac_cc")]),t._v(" is the parameter that defines the cluster of chains which can have cross chain CryptoConditions). But, you cant add -ac_cc=2 to the command line, as this will create a new fork. "),e("code",[t._v("-ac_ccactivate=height")]),t._v(" will take care of those things automagically.")],1),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"how-to-activate-cryptoconditions-on-an-existing-komodo-assetchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-activate-cryptoconditions-on-an-existing-komodo-assetchain","aria-hidden":"true"}},[this._v("#")]),this._v(" How to Activate CryptoConditions on an Existing Komodo Assetchain")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If you have an existing assetchain based on Komodo platform without CryptoConditions (CC) enabled, you can activate it at any time. Komodo daemon now supports the command-line parameter "),a("code",[this._v("-ac_ccactivate=height")]),this._v(" , using which you can activate CC on a non-CC enabled chain in a future block height.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("EXAMPLE -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("72000000 -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("24.54.206.138 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("EXAMPLE -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("72000000 -ac_ccactivate"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("140 -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("24.54.206.138 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("-ac_ccactivate=140")]),this._v(" means, CryptoConditions are activated at block 140. You can set this parameter to any block height you want the CC to be activated.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Also, addressindex=1 and spentindex=1 need to be in the configuration file, but the daemon will take care of setting this up when "),a("code",[this._v("-ac_ccactivate=height")]),this._v(" is included as a command-line parameter.")])}],!1,null,null,null);a.default=n.exports}}]);