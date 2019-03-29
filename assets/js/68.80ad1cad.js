(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{249:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The dice CC contract is actually more complex in the sequences required than the assets/tokens CC. The reason is the need for realtime response by the dealer node, but also having a way to resolve bets if the dealer node is not online. The dice CC contract shows how to build in such a challenge/response mechanism, which likely will be very useful for many other realtime interactive CC contracts.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("This allows each plan to control the risk exposure and also advertises to everyone when dicebets expire and a timeout win can be claimed. In event the dealer node does not process a dicebet in time, in order to prevent dealer nodes from simply not responding to dicebets that they lose, a timeout must go to the dicebet player. A short timeframe means that the dealer would need to be running multiple redundant nodes to make sure they can respond in time. If the timeout is set to long, then many players would prefer to use a different dice plan with a shorter timeout.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("This allows the dealer node to recreate the unhashed entropy value used and so when the dicebet transaction is seen (in the mempool!), the dealer node can immediately determine if it is a winner or a loser. This is done by creating a dealer hash vs. a bettor hash via:")]),e._v(" "),e._m(4),s("p",[e._v("The same values are used, but in different order. The resulting hashes are compared arithmetically for 1:1 bets and the standard industry use is used for the higher odds: "),s("a",{attrs:{href:"https://dicesites.com/provably-fair",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://dicesites.com/provably-fair"),s("OutboundLink")],1)]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),s("p",[e._v("In order to mitigate this, the disclosure of the house entropy needs to be delayed beyond a reasonable reorg depth (notarization). It is recommended for production dice games with significant amounts of money to use such a delayed disclosure method.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"chapter-09-dice-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chapter-09-dice-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Chapter 09 - Dice Example")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("First, let us describe the issues that the dice CC contract needs to solve. Foremost is that it needs to be random and fair. It should also have realtime response and a fallback timeout in case the realtime response doesnt happen. As with the rewards CC contract, multiple dice plans are supported. Each plan can be customized as to the following: "),s("code",[e._v("minbet")]),e._v(", "),s("code",[e._v("maxbet")]),e._v(", "),s("code",[e._v("maxodds")]),e._v(", "),s("code",[e._v("timeoutblocks")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Now to describe how to ensure a proper random number that is fair. The method chosen was for the dealer node to create transactions with hash of their entropy in the "),t("code",[this._v("OP_RETURN")]),this._v(". Then the dicebet player would select a specific entropy tx and include their (unhashed) entropy to their "),t("code",[this._v("OP_RETURN")]),this._v(". This allows the dealer node to immediately determine if the dicebet won or lost. If the dicebet included the hash of the bettor entropy, then another step would be needed. However, doing so would allow some timeouts to end with a refund, rather than an automatic win for the dicebet player.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("One additional technique used to keep all required data on the blockchain is the dealer entropy value calculation. The vin0 txid is used as one of the "),t("code",[this._v("privkeys")]),this._v(" to calculate a shared secret and then hashed to remove links to the original "),t("code",[this._v("privkey")]),this._v(". This method allows recreating the dealer's entropy value (by the dealer node) given the blockchain itself, which means there is no need for any local storage.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("dealer hash: SHA256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("dealer entropy + bettor entropy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nbettor hash: SHA256"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bettor entropy + dealer entropy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The dealer creates a dice plan and then also needs to create entropy transactions. Each win or loss that creates change also creates entropy transactions by the dealer, but timeout transactions wont as it needs to be created by the dealer node to prevent cheating. The dealer "),t("code",[this._v("tx")]),this._v(" are locked into the global dice CC address, as is the dicebet transaction, which selects a specific entropy "),t("code",[this._v("tx")]),this._v(" to \"roll\" against. Then the dicefinish process by the dealer will spend the dicebet outputs either all to itself for a loss, or the winning amount to th dice bettor's address. For dicebets that are not dicefinish'ed by the dealer, anybody is able to do a timeout completion.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"createfunding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#createfunding","aria-hidden":"true"}},[this._v("#")]),this._v(" createfunding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vins.*: normal inputs\nvout.0: CC vout "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" funding\nvout.1: owner vout\nvout.2: dice marker address vout "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" easy searching\nvout.3: normal change\nvout.n-1: opreturn "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'F'")]),this._v(" sbits minbet maxbet maxodds timeoutblocks\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"addfunding-entropy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addfunding-entropy","aria-hidden":"true"}},[this._v("#")]),this._v(" addfunding (entropy)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vins.*: normal inputs\nvout.0: CC vout "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" locked entropy funds\nvout.1: tag to owner address "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("for")]),this._v(" entropy funds\nvout.2: normal change\nvout.n-1: opreturn "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'E'")]),this._v(" sbits fundingtxid hentropy\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"bet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bet","aria-hidden":"true"}},[this._v("#")]),this._v(" bet")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vin.0: entropy txid from house "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("must validate vin0 of "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'E'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nvins.1+: normal inputs\nvout.0: CC vout "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" locked entropy\nvout.1: CC vout "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" locked bet\nvout.2: tag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" bettor"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s address (txfee + odds)\nvout.3: change\nvout.n-1: opreturn '")]),e._v("B' sbits fundingtxid entropy\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"loser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loser","aria-hidden":"true"}},[this._v("#")]),this._v(" loser")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("vin.0: normal input\nvin.1: betTx CC vout.0 entropy from bet\nvin.2: betTx CC vout.1 bet amount from bet\nvin.3+: funding CC vout.0 from "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'F'")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'E'")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'W'")]),e._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'L'")]),e._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'T'")]),e._v("\nvout.0: funding CC to entropy owner\nvout.1: tag to owner address "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" entropy funds\nvout.2: change to fundingpk\nvout.n-1: opreturn "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'L'")]),e._v(" sbits fundingtxid hentropy proof\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"winner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#winner","aria-hidden":"true"}},[this._v("#")]),this._v(" winner")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("same as loser, but vout.2 is winnings\nvout.3: change to fundingpk\nvout.n-1: opreturn "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v("'W'")]),this._v(" sbits fundingtxid hentropy proof\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout","aria-hidden":"true"}},[this._v("#")]),this._v(" timeout")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("same as winner, just without hentropy or proof\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("There is an attack vector that precludes betting any large amounts, it goes as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Do dicebet to get the house entropy revealed")]),e._v(" "),s("li",[e._v("Calculate bettor entropy that would win against the house entropy")]),e._v(" "),s("li",[e._v("Reorg the chain and make a big bet using the winning entropy calculated in 2.")])])])}],!1,null,null,null);t.default=n.exports}}]);