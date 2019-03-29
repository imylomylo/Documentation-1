(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{316:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"funding-the-smart-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funding-the-smart-address","aria-hidden":"true"}},[s._v("#")]),s._v(" Funding the Smart Address")]),s._v(" "),a("p",[s._v("In order to start trading, you need to fund your smart address.")]),s._v(" "),a("p",[s._v("To find out the smartaddress of a coin, do the "),a("code",[s._v("./getcoin")]),s._v(" api call, after editing it first:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" getcoin\n")])])]),a("p",[s._v("That will show you the following.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7783"')]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userpass")]),s._v('\\",\\"method\\":\\"getcoin\\",\\"coin\\":\\"NAME_OF_COIN\\"}"')]),s._v("\n")])])]),a("p",[s._v("Edit the coin name, save and close the file. ("),a("code",[s._v("CTRL-O")]),s._v(" to save, "),a("code",[s._v("CTRL-X")]),s._v(" to close)")]),s._v(" "),a("p",[a("strong",[s._v("IMPORTANT: The smartaddress relies in the passphrase you assign. The smartaddress will not be imported to the wallet, it will stay as")]),s._v(" "),a("code",[s._v("watchonly")]),s._v(" "),a("strong",[s._v(". If you lose the passphrase you lose all addresses of all coins assigned by it.")])]),s._v(" "),a("p",[s._v("Then "),a("strong",[s._v("send transactions in duos")]),s._v(" to your smartaddress provided by "),a("code",[s._v("./getcoin")]),s._v(" (using Hush as an example):")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hush-cli sendtoaddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your smartaddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1\nhush-cli sendtoaddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your smartaddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 1.2\n")])])]),a("h2",{attrs:{id:"utxo-pairs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxo-pairs","aria-hidden":"true"}},[s._v("#")]),s._v(" UTXO PAIRS")]),s._v(" "),a("p",[s._v("To make sure you have utxo pairs for both the bob and alice usage, it is best to send utxo in triplets of X, 1.2 X and 0.01 X. So if X is 10, send 10, 12, and 0.1 coins using sendtoaddress to your smartaddress. This means you will have to send 3 different transactions to the same address with 3 different quantities")]),s._v(" "),a("p",[s._v('If you send coins from a main address using the command line, make sure you either send from an account (sendfrom "account" "address" ) (depends on coin) to the smart address, or send the amounts from small to big: 0.01, then 1.0 and finally 1.2. Otherwise the CLI will send from the smartaddress instead of your other fund address.')]),s._v(" "),a("h2",{attrs:{id:"utxos-explained-by-jl777"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utxos-explained-by-jl777","aria-hidden":"true"}},[s._v("#")]),s._v(" UTXOs explained by Jl777:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("bob utxo are "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("X, X*1.125"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nalice utxo are "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("X, X/777"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nwith the volume constraints, the bigger the utxo you have the larger offers you can handle\none pair uses 2 actual utxo\n3 - 2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nso maybe it is better to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" 1, 1.2, .01, .01\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" alice side pairs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1, .01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.2, .01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nbut all the pairing is automatic and you can see what specific utxos got paired with inventory "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("command")]),s._v("\n")])])]),a("p",[a("strong",[s._v("Example:")]),s._v("\nIf you want to fund a komodo smartaddress with 230 komodo, you would need to first send a tx with 100kmd, then another tx with 120 kmd and a third tx with 10kmd.")])])}],!1,null,null,null);t.default=n.exports}}]);