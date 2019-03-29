(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{293:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[t._v("First go through "),s("router-link",{attrs:{to:"./coin-integration.html"}},[t._v("this document")]),t._v(" to make sure that all the requirements are satisfied by the coin.")],1),t._v(" "),s("li",[t._v("The relevant repository is "),s("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jl777/coins"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("This repository is the coins database which is accessed by the graphical applications like the "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX",target:"_blank",rel:"noopener noreferrer"}},[t._v("BarterDEX GUI"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"https://github.com/atomiclabs/hyperdex",target:"_blank",rel:"noopener noreferrer"}},[t._v("HyperDEX"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("When submitting a pull request to add a coin to BarterDEX, make sure you have completed this checklist:")]),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("When submitting your coin addition request, please submit the URLs of the three transctions ("),s("code",[t._v("bobdeposit")]),t._v(", "),s("code",[t._v("alicepayment")]),t._v(" and "),s("code",[t._v("bobpayment")]),t._v(") which are produced by the "),s("router-link",{attrs:{to:"./../usage/trade.html"}},[t._v("atomic swap")]),t._v(" performed through the marketmaker API. This means that before going through the further steps in this doc and submit the data to this coins database "),s("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),s("OutboundLink")],1),t._v(" , you would have performed an atomic swap. The further steps explain the expected files/values to be submitted.")],1),t._v(" "),s("li",[t._v("You can learn about performing an atomic swap "),s("router-link",{attrs:{to:"./../installation/install-marketmakerV1.html"}},[t._v("here (Installing)")]),t._v(" and "),s("router-link",{attrs:{to:"./../usage/trade.html"}},[t._v("here (trading)")])],1),t._v(" "),s("li",[t._v("Or you can contact the team at "),s("a",{attrs:{href:"mailto:coinintegration@komodoplatform.com"}},[t._v("coinintegration@komodoplatform.com")]),t._v(" or in the "),s("code",[t._v("#dev-tradebots")]),t._v(" channel in our "),s("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),s("OutboundLink")],1),t._v(" to get help if required.")])]),t._v(" "),t._m(3),t._v(" "),s("ul",[s("li",[s("p",[t._v("bobdeposit: "),s("a",{attrs:{href:"https://btc.example.org/tx/746179890c7cb6b10fe4fef1c835c51a648bba087d52903d9d889d84779b1b9b",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://btc.example.org/tx/746179890c7cb6b10fe4fef1c835c51a648bba087d52903d9d889d84779b1b9b"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("alicepayment: "),s("a",{attrs:{href:"https://kmd.example.net/tx/2aa3cdc0000936f8fb2a5285e852a57f128913edea4d562433975fe84f6e6a8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kmd.example.net/tx/2aa3cdc0000936f8fb2a5285e852a57f128913edea4d562433975fe84f6e6a8c"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("bobpayment: "),s("a",{attrs:{href:"https://btc.example.org/tx/f64ae4b56b43ab9017ccc767c16b9d9cdf438ed83de94ba0629f1213b5ecba72",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://btc.example.org/tx/f64ae4b56b43ab9017ccc767c16b9d9cdf438ed83de94ba0629f1213b5ecba72"),s("OutboundLink")],1)])])]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("You need to add the following info in JSON format to "),s("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),s("OutboundLink")],1),t._v(" file:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),s("ul",[s("li",[t._v("An icon that represents the coin is required.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("li",[t._v("The icon file should be submitted to the directory: "),s("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("icons"),s("OutboundLink")],1),t._v(" through a Pull Request.")])]),t._v(" "),t._m(14),t._v(" "),s("ul",[s("li",[t._v("Explorer file name must be coin's ticker name matching the "),s("code",[t._v('"coin"')]),t._v(" value as specified in "),s("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),s("OutboundLink")],1),t._v(" file.")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("li",[t._v("The URL of Explorer must be pointing to the transactions URL. Check BTC file for an example: "),s("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/explorers/BTC",target:"_blank",rel:"noopener noreferrer"}},[t._v("explorers/BTC"),s("OutboundLink")],1),t._v(" , which has "),s("code",[t._v('["https://www.blocktrail.com/BTC/tx/"]')]),t._v(". This explorer's URL is used to show in graphical applications to link to the transactions like this "),s("a",{attrs:{href:"https://www.blocktrail.com/BTC/tx/5268d045196e940ca8ba53b442c38a0f8c159002c912f8427239153dce984cc3",target:"_blank",rel:"noopener noreferrer"}},[t._v("example link"),s("OutboundLink")],1),t._v(" . Make sure this URL ends with "),s("code",[t._v("/")]),t._v(".")])]),t._v(" "),t._m(18),t._v(" "),s("ul",[s("li",[t._v("Electrum file name must be coin's ticker name matching the "),s("code",[t._v('"coin"')]),t._v(" value as specified in the "),s("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),s("OutboundLink")],1),t._v(" file.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),s("li",[t._v("It must be a valid JSON format as shown in the following example:")])]),t._v(" "),t._m(21),t._m(22)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"how-to-submit-a-pull-request-to-add-a-coin-to-mmv1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-submit-a-pull-request-to-add-a-coin-to-mmv1","aria-hidden":"true"}},[this._v("#")]),this._v(" How to submit a Pull Request to add a coin to mmV1")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release","aria-hidden":"true"}},[this._v("#")]),this._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_0-the-coin-must-be-tested-with-mmv1-atomic-swaps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-the-coin-must-be-tested-with-mmv1-atomic-swaps","aria-hidden":"true"}},[this._v("#")]),this._v(" 0. The coin must be tested with mmV1 atomic swaps")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-coin-info-added-to-coins-file-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-coin-info-added-to-coins-file-required","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Coin info added to "),e("code",[this._v("coins")]),this._v(" file (Required)")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("# Example "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LTC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"litecoin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Litecoin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9332")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubtype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2shtype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wiftype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Example "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PEW"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brofist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brofist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confpath"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERHOME/.brofistcore/brofist.conf"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12454")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubtype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2shtype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wiftype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txfee"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Example "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"augur"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Augur"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"etomic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bitcoin-protocol-specific-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-protocol-specific-json","aria-hidden":"true"}},[this._v("#")]),this._v(" Bitcoin Protocol specific JSON")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("The value of the key "),s("code",[t._v('"coin"')]),t._v(" must be the coin ticker.")]),t._v(" "),s("li",[t._v("The value of the key "),s("code",[t._v('"name"')]),t._v(" must be coin's name, in all small letters. This is the value which is expected to be the default data directory name for that coin in Linux. For example if the coin's name is Litecoin then it's expected data directory on Linux is "),s("code",[t._v("~/.litecoin/")]),t._v(", on Mac - "),s("code",[t._v("~/Library/Applications Support/Litecoin/")]),t._v(", on Windows - "),s("code",[t._v("%AppData%\\\\Litecoin")]),t._v(". Please keep this key's value in small letters only.")]),t._v(" "),s("li",[s("code",[t._v('"confpath"')]),t._v(" must be used "),s("strong",[t._v("ONLY")]),t._v(" in case the expected data directory name of the coin/project is different to the key - "),s("code",[t._v('"name"')]),t._v("'s value, as explained in last point. Please refer to Example 2 above for better understanding. Make sure to use the exact format for "),s("code",[t._v("confpath")]),t._v(". You don't need to change the word "),s("code",[t._v("USERHOME")]),t._v(", it remains as is. Make sure you have a "),s("code",[t._v("/")]),t._v(". after "),s("code",[t._v("USERHOME")]),t._v(". And then the expected coin/project's data directory path and its expected "),s("code",[t._v(".conf")]),t._v(" file name.")]),t._v(" "),s("li",[s("code",[t._v('"fname"')]),t._v(" must be the coin's full name.")]),t._v(" "),s("li",[s("code",[t._v('"rpcport"')]),t._v(" must be coin's default RPC port. It is expected that it doesn't conflict with any other existing coin in the coins db.")]),t._v(" "),s("li",[s("code",[t._v('"pubtype"')]),t._v(", "),s("code",[t._v('"p2shtype"')]),t._v(", and "),s("code",[t._v('"wiftype"')]),t._v(" is also the very specific information about the coin's parameters. This is specific to Bitcoin Protocol compatible coins only, and such information can be found in the source code of the project. These parameters' information can be expected in files like "),s("code",[t._v("src/init.cpp")]),t._v(", "),s("code",[t._v("src/base58.h")]),t._v(", and "),s("code",[t._v("src/chainparamsbase.h")]),t._v(" if the project is following the "),s("strong",[t._v("bitcoin")]),t._v(" source code directory/files structure. If the parameters info is unclear then please have these confirmed by that coin/project's developers and make sure it's correct.")]),t._v(" "),s("li",[s("code",[t._v('"txfee"')]),t._v(" is a value of default transactions fee, which must be specified in satoshis. BarterDEX uses this as the default transaction fee value for the coin, when making the atomic swap transactions.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ethereum-protocol-specific-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-protocol-specific-json","aria-hidden":"true"}},[this._v("#")]),this._v(" Ethereum Protocol specific JSON")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Ethereum protocol specific coin/project addition requests are very simple. "),s("code",[t._v('"coin"')]),t._v(", "),s("code",[t._v('"name"')]),t._v(", and "),s("code",[t._v('"fname"')]),t._v(" information is same as explained in the above bitcoin protocol specific json section.")]),t._v(" "),s("li",[s("code",[t._v('"rpcport"')]),t._v(" must remain default for all ERC20 token/coins. Make sure its only specified as "),s("code",[t._v("80")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v('"etomic"')]),t._v(" must be the ERC20 token/coin's smart contract address.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-icon-file-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-icon-file-required","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. Icon file (Required)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The icon file must be in the "),e("strong",[this._v(".png")]),this._v(" format.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Dimentions of icon file: "),e("code",[this._v("82x82")]),this._v(" pixels.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The icon file's name "),e("strong",[this._v("MUST")]),this._v(" be in "),e("strong",[this._v("small letters")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-explorer-url-required"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-explorer-url-required","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Explorer URL (Required)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Explorer file name must not have any file extension. It is a file without any "),e("code",[this._v(".")]),this._v(" extension.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Explorer file name must be all in "),e("strong",[this._v("capital")]),this._v(" letters.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("It must have a valid JSON array with at least one Explorer URL in it. It's better if there are more than one explorer URLs in this JSON array. Example: "),e("code",[this._v('["http://example1.com/tx/","http://example2.com/tx/"]')]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-electrum-servers-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-electrum-servers-optional","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Electrum Servers (Optional)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Electrum file name must not have any file extension. It is a file without any "),e("code",[this._v(".")]),this._v(" extension.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Electrum file name must be in all "),e("strong",[this._v("capital")]),this._v(" letters.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electrum1.example.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum1_admin_email@example.com"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"matrix"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@electrum1_admin:matrix.org"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skype"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"twitter"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reddit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"github"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keybaseio"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electrum2.example.com"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum2_admin_email@example.com"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A minimum of 2 or more Electrum servers information must be provided.")]),this._v(" "),e("li",[this._v("Contact information must be provided in case the server admin needs to be contacted in urgent cases when required. It can be any contact information out of the examples provided. Or may be add your own service/contact information as it suites you.")]),this._v(" "),e("li",[this._v("The address and port of electrum server are required. The address of electrum server can either be a DNS or an IP address.")])])}],!1,null,null,null);e.default=r.exports}}]);