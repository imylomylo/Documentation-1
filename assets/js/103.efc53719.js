(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{286:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("This script will allow users / organizations to send dividends for any specific coins/asstets")]),s._v(" "),a("p",[s._v("Sample File Contents:")]),s._v(" "),s._m(2),s._m(3),s._v(" "),a("p",[s._v("The name says it all, snapshot will take a snap of the blockchain for a specified coin/asset on a certain block height for sending dividends or airdrop.")]),s._v(" "),a("p",[s._v("Sample File Contents:")]),s._v(" "),s._m(4),s._m(5),s._v(" "),a("p",[s._v("This API will display the snapshot balance of a specific coin address after snapshot taken on a specific block height. You need to have jq installed ("),a("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://stedolan.github.io/jq/"),a("OutboundLink")],1),s._v(").")]),s._v(" "),a("p",[s._v("Sample File Contents:")]),s._v(" "),s._m(6),s._m(7),s._v(" "),a("p",[s._v("This API is used to automate snapshot process for coins/assets at given block height and certain number thereafter. You can configure the script to run on certain block height increments.")]),s._v(" "),a("p",[s._v("Sample File Contents:")]),s._v(" "),s._m(8)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"revenue-sharing-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#revenue-sharing-operations","aria-hidden":"true"}},[this._v("#")]),this._v(" Revenue Sharing/Operations")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"dividends"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dividends","aria-hidden":"true"}},[this._v("#")]),this._v(" dividends")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7783"')]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userpass")]),s._v('\\",\\"method\\":\\"dividends\\",\\"coin\\":\\"KMD\\",\\"height\\":'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(',\\"prefix\\":\\"fiat/jumblr sendtoaddress\\",\\"suffix\\":\\"\\",\\"dividend\\":50000,\\"dust\\":1}"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot","aria-hidden":"true"}},[this._v("#")]),this._v(" snapshot")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7783"')]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userpass")]),s._v('\\",\\"method\\":\\"snapshot\\",\\"coin\\":\\"KMD\\",\\"height\\":'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('}"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"snapshot-balance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-balance","aria-hidden":"true"}},[this._v("#")]),this._v(" snapshot_balance")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ht"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7783"')]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userpass")]),s._v('\\",\\"method\\":\\"snapshot_balance\\",\\"coin\\":\\"KMD\\",\\"height\\":'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ht")]),s._v(',\\"addresses\\":[\\"RSAzPFzgTZHNcxLNLdGyVPbjbMA8PRY7Ss\\", \\"RBgD5eMGwZppid4x7PTEC2Wg1AzvxbsQqB\\"]}"')]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"snapshot-loop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-loop","aria-hidden":"true"}},[this._v("#")]),this._v(" snapshot_loop")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ht"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:7783"')]),s._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$userpass")]),s._v('\\",\\"method\\":\\"snapshot\\",\\"coin\\":\\"KMD\\",\\"height\\":'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ht")]),s._v('}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ht=`komodo-cli getinfo | jq .blocks`")]),s._v("\nht"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v(" $ht "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" next height "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ht")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);