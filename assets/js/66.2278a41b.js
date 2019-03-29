(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{247:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The next CC contract in complexity is the rewards CC contract. This is designed to capture what most people like about masternodes, without anything else, ie. the rewards!")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The above requirements leads us to using the global CC address for the rewards contract to lock the funds in. That allows anybody to properly sign the unlock, but of course that is not enough, we need to make sure they are following all the unlock requirements. Primarily that the funds go back to the locking address.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This allows each plan to set a different APR (up to 25%, anything above is becoming silly), the minimum time funds must be locked, the maximum time they are earning rewards and the minimum that can be deposited.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Since it is possible that the initial funding will be used up, there needs to be a way for more funding to be added to the rewards plan.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("All of these things are done in "),a("a",{attrs:{href:"https://github.com/jl777/komodo/tree/jl777/src/cc/rewards.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("rewards.cpp"),a("OutboundLink")],1),t._v(", with the validation code being about 200 lines and a total of 700 lines or so. Bigger than faucet, but most of the code is the non-consensus code to create the proper transactions. In order to simplify the validation, specific vin and vout positions are designated to have specific required values:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),a("p",[t._v("It is recommended to create such a vin/vout allocation for each CC contract to make sure that the rpc calls that create the transaction and the validation code have a specific set of constraints that can be checked for.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"chapter-07-rewards-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chapter-07-rewards-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 07 - Rewards Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The idea is to allow people to lock funds for some amount of time and get an extra reward. We also want to support having more than one rewards plan at a time and to allow customization of plan details. One twist that makes it a bit unexpected is that anybody should be able to unlock the funds that were locked, as long as it ends up in the locking address. The reason for this is that SPV servers want to be supported and while locking can be done via normal "),e("code",[this._v("sendrawtransaction")]),this._v(", it requires a native node to do the unlocking. By allowing anybody to be able to unlock, then there can be a special node that unlocks all locked funds when they are ready. This way, from the user's point of view, they lock the funds and after it is matured, it reappears in their wallet.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The four aspects of the rewards plan that are customizable are:\n"),a("code",[t._v("APR")]),t._v(", "),a("code",[t._v("minseconds")]),t._v(", "),a("code",[t._v("maxseconds")]),t._v(", "),a("code",[t._v("mindeposit")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("So the "),a("code",[t._v("tx")]),t._v(" that creates the rewards plan will have these attributes and it is put into the "),a("code",[t._v("OP_RETURN")]),t._v(" data. All the other calls will reference the plan creation "),a("code",[t._v("txid")]),t._v(" and inherit these parameters from the creation "),a("code",[t._v("tx")]),t._v(". This means it is an important validation to do, to make sure the funding "),a("code",[t._v("txid")]),t._v(" is a valid funding "),a("code",[t._v("txid")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Having multiple possible rewards plans means it is useful to have rpc calls to get information about them. Hence: "),e("code",[this._v("rewardslist")]),this._v(" returns the list of rewards creation "),e("code",[this._v("txids")]),this._v(" and "),e("code",[this._v("rewardsinfo <txid>")]),this._v(" returns the details about a specific rewards plan.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A locking transaction sends funds to the rewards CC address, along with a normal (small) "),e("code",[this._v("tx")]),this._v(" to the address that the unlock should go to. This allows the validation of the proper unlocking. Also, it is important to make sure only locking transactions are able to be unlocked. Additionally, the minimum time needs to elapse before unlocking is allowed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"createfunding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createfunding","aria-hidden":"true"}},[this._v("#")]),this._v(" createfunding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("vins.*: normal inputs\nvout.0: CC vout "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" funding\nvout.1: normal marker vout "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" easy searching\nvout.2: normal change\nvout.n-1: opreturn "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'F'")]),this._v(" sbits APR minseconds maxseconds mindeposit\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"addfunding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addfunding","aria-hidden":"true"}},[this._v("#")]),this._v(" addfunding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("vins.*: normal inputs\nvout.0: CC vout "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" funding\nvout.1: normal change\nvout.n-1: opreturn "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'A'")]),this._v(" sbits fundingtxid\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"lock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lock","aria-hidden":"true"}},[this._v("#")]),this._v(" lock")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("vins.\\*: normal inputs\nvout.0: CC vout "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" locked funds\nvout.1: normal output to unlock address\nvout.2: change\nvout.n-1: opreturn "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'L'")]),this._v(" sbits fundingtxid\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"unlock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unlock","aria-hidden":"true"}},[this._v("#")]),this._v(" unlock")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("vin.0: locked funds CC vout.0 from lock\nvin.1+: funding CC vout.0 from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F'")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'U'")]),t._v("\nvout.0: funding CC change\nvout.1: normal output to unlock address\nvout.n-1: opreturn "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'U'")]),t._v(" sbits fundingtxid\n")])])])}],!1,null,null,null);e.default=n.exports}}]);