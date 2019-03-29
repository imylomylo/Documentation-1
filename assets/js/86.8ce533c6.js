(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{269:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("ul",[n("li",[t._v("Make sure Python3 is "),n("a",{attrs:{href:"https://wiki.python.org/moin/BeginnersGuide/Download",target:"_blank",rel:"noopener noreferrer"}},[t._v("installed"),n("OutboundLink")],1),t._v(" in your system.")]),t._v(" "),n("li",[t._v("Install python-bitcoinlib:")])]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"convert-pubkey-to-komodo-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#convert-pubkey-to-komodo-address","aria-hidden":"true"}},[this._v("#")]),this._v(" Convert Pubkey to Komodo Address")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libssl-dev\npip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-bitcoinlib\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or for the latest git version")]),t._v("\npip3 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" git+https://github.com/petertodd/python-bitcoinlib\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Create a file named "),s("code",[this._v("pubkey-address.py")])]),this._v(" "),s("li",[this._v("Enter the following code in the file and save:")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" bitcoin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bitcoin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wallet "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" P2PKHBitcoinAddress\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bitcoin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" x\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bitcoin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" CoreMainParams\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CoinParams")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CoreMainParams"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    MESSAGE_START "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\x24\\xe9\\x27\\x64'")]),t._v("\n    DEFAULT_PORT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7770")]),t._v("\n    BASE58_PREFIXES "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PUBKEY_ADDR'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SCRIPT_ADDR'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("85")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                       "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SECRET_KEY'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("188")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbitcoin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CoinParams\nPUBKEY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pubkey:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("P2PKHBitcoinAddress"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_pubkey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PUBKEY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("Open a terminal and "),n("code",[t._v("cd")]),t._v(" to the directory where the file is located.")]),t._v(" "),n("li",[t._v("Run "),n("code",[t._v("python3 pubkey-address.py")]),t._v(" in the terminal.")]),t._v(" "),n("li",[t._v("Input the pubkey at the prompt and hit "),n("code",[t._v("Enter")]),t._v(".")]),t._v(" "),n("li",[t._v("The Komodo address will be displayed.")]),t._v(" "),n("li",[t._v("Example:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("python3 pubkey-address.py\npubkey:03xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nRxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")])])])}],!1,null,null,null);s.default=e.exports}}]);