(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{332:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("The Komodo ecosystem presents a solution, the decentralized the initial coin offering (dICO), that solves these issues and even adds new possibilities to the cryptocurrency market. The decentralized nature of the dICO enables the entrepreneur to\nrelease a blockchain product beyond the reach of a malicious third-party influencer.\nFurthermore, through our decentralized exchange, BarterDEX, the dICO allows an\nentrepreneur to release their product in a manner that mitigates and even eliminates\nmany of the issues regarding whales, hackers, and human error. With the advantage\nof Komodo’s privacy technology, Jumblr, the participants in a dICO are empowered\nwith their right to barter in private.")]),e._v(" "),n("p",[e._v("Our decentralized exchange, BarterDEX, is explained in detail in "),n("router-link",{attrs:{to:"./chapter6.html"}},[e._v("Part III")]),e._v(". An indepth discussion of our privacy technology, Jumblr, is provided in "),n("router-link",{attrs:{to:"./chapter7.html"}},[e._v("Part IV")]),e._v(".")],1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Formerly, coding and generating the blockchain itself were a most difficult aspect\nof the development process. Now, the Komodo team has simplified the process into\neasy steps. Through Komodo’s Iguana Core technology (introduced in Part I), the\nentrepreneur can create a new independent blockchain by entering just two simple\ncommands in the command prompt of their computer.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),n("p",[e._v("This command tells Komodod to look for a coin with the inserted name.")]),e._v(" "),e._m(9),n("p",[e._v("This tells Komodod how many total coins there should be in this chain.")]),e._v(" "),e._m(10),n("p",[e._v("This tells Komodod that the user desires to mine this network.")]),e._v(" "),n("p",[e._v("The underlying code of Iguana Core can now make several decisions. First, it will check its connection to the Komodo ecosystem to see if there is a coin by the name of *ENTREPRENEUR’S COIN+, having a coin supply of [TOTAL COIN SUPPLY]. If the coin name and total supply are not found, Komodod will assume that the user is attempting to create a new coin, and the [-gen] command tells Komodod that the user wants to mine it.")]),e._v(" "),n("p",[e._v("Komodod now begins the automated process of creating a new asset chain in the Komodo ecosystem. Komodod will first make a fresh and empty clone of the KMD main chain (though it will not yet generate the actual coins), with only a few differences to the underlying nature of the chain.")]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("There are several primary differences between an asset chain and the main Komodo\nchain. For example, the asset chain will not automatically generate 5.1% rewards for\nall wallet addresses holding coins, unlike the main chain. Furthermore, the asset\nchain’s dPoW consensus mechanism is built to notarize to the KMD main chain (as\nexplained in "),n("router-link",{attrs:{to:"./chapter1.html"}},[e._v("Part I")]),e._v(").")],1),e._v(" "),n("p",[e._v("Some of the differences reveal strong advantages held by members of the Komodo\necosystem. By design, this asset chain is capable of automatically adopting any updates that the Komodo core development team add to the framework. The asset chain\nalso has a built-in capacity within the framework to allow the entrepreneur to code\nnew rules.")]),e._v(" "),n("p",[e._v("For example, the entrepreneur may decide not to use a PoW consensus mechanism,\nbut may instead prefer PoS (discussed in "),n("router-link",{attrs:{to:"./chapter1.html"}},[e._v("Part I")]),e._v(". Other changes can also be made, according to the entrepreneur’s imagination and developer knowledge. So long as\nthe new code that the entrepreneur adds to the asset chain does not interfere with\nthe overall framework, the asset chain will smoothly integrate with the rest of the Komodo ecosystem. We provide more details on this topic in "),n("router-link",{attrs:{to:"./chapter8.html"}},[e._v("Part V")]),e._v("’s section regarding\nsmart contracts.")],1),e._v(" "),n("p",[e._v("For the purposes of our discussion, this new asset chain is otherwise the same as\nthe Komodo main chain, including the features to communicate natively with other\nblockchains via BarterDEX. The reader may note that this new Komodo asset chain\nis not a colored-token running on top of a parent blockchain, as is often the case in\nother blockchain ecosystems (consider the ERC20 token of the Ethereum platform).\nInstead, this asset chain is an entirely unique and independent blockchain unto itself.")]),e._v(" "),n("p",[e._v("This empowers the entrepreneur with significant advantages over other blockchain\necosystems. The asset chain can run on its own nodes, act according to whatever\nrules the entrepreneur can imagine, and can scale according to its own audience.\nShould an asset chain in the Komodo network experience a sudden explosion of\nactivity, the sudden change will not negatively impact the overall Komodo ecosystem.\nThis independence grants a significant competitive advantage in the form of overall\nsecurity, speed, and ease of use.")]),e._v(" "),n("p",[e._v("Consider the advantage of developing an entrepreneurial product as a fully independent blockchain. Should the entrepreneur desire at a future point to leave the\nKomodo ecosystem for any reason, they are free to take their blockchain product\nwith them.")]),e._v(" "),e._m(12),e._v(" "),n("p",[e._v("Let us return now to the moment after the entrepreneur executes the first command in the command prompt, and Komodod creates a fresh and empty clone of\nthe Komodo main chain. While the instance of the Komodod program (running on\nthe entrepreneur’s local computer device) will create the necessary code for the new\nasset chain, Komodod will not yet generate the coin supply itself. Komodod instead\nwill wait for the next few steps to occur.")]),e._v(" "),n("p",[e._v("The reason for the wait is that a blockchain’s essence depends upon existing not\nin isolation, but in a network of multiple devices connected. This is the nature of\ndecentralization. Komodod will wait until it receives a signal from another device,\nthus indicating that it has a peer with which to form the asset-chain network.")]),e._v(" "),e._m(13),e._v(" "),n("p",[e._v("It is imperative to note that in the Komodod process, the entire coin supply is\ncreated and distributed immediately to the device that mines the first block, the Genesis Block. The code performs this distribution as a one-time reward for discovering the first valid block hash (as explained in "),n("router-link",{attrs:{to:"./chapter1.html"}},[e._v("Part I")]),e._v("). Due to the sensitive nature of this\nstep, we recommend that the entrepreneur use a Virtual Private Server (VPS) service.\nThis allows two secure devices to connect to each other with little, if any, risk of a\nthird-party actor mining the first block (which would thus enable a would-be thief to\nacquire the entire coin supply before distribution).")],1),e._v(" "),n("p",[e._v("Having established a secure connection with a second device, the entrepreneur will\nenter the following command on the second device.")]),e._v(" "),e._m(14),n("p",[e._v("Note that the first three elements of the command, [./komodod], [-ac_name], and\n[-ac_supply], are the same. It is important that the parameters inserted into these commands match exactly. Otherwise, the instances of Komodod running on the separate devices will ignore each other, and the coin will not be mined.")]),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("There is another key difference in the command.")]),e._v(" "),e._m(16),n("p",[e._v('An "IP address" can be compared to a human being’s home mailing address, where\nthe IP address is designed for computers to be able to geographically find each other.')]),e._v(" "),n("p",[e._v("With the execution of the IP address command, the second device knows to look\nacross the available connection (the Internet, VPS service, etc.) for the first device,\nwhich is already running an instance of Komodod and the new coin. The command\nhere simply tells the computer the proper IP address of the first device.")]),e._v(" "),n("p",[e._v("As soon as these two devices connect, having all the proper Komodod software\nrunning and set in place, the mining begins. One of the devices will mine the first\nblock and instantly receive the total coin supply of the entire blockchain into the\nuser’s chosen wallet.")]),e._v(" "),n("p",[e._v("Both devices sync this information to each other, and the *ENTREPRENEUR’S COIN+ now exists in the world. The entrepreneur can also add more and more devices to the network.")]),e._v(" "),e._m(17),e._v(" "),n("p",[e._v("To receive the security of the dPoW consensus mechanism, the entrepreneur simply needs to have the elected notary nodes add the *ENTREPENEUR’S COIN+ to their internal list of coins to notarize. This will empower the entrepreneur’s product with the same verifiable and decentralized security of the Komodo parent chain.")]),e._v(" "),n("p",[e._v("The process of adding a new notarization service can be executed by the notary\nnodes with just a simple command. While we are at this early stage of development,\nthis sign-up process for new dICO products is not yet automated. In the future, we\nintend to automate as much of this process as possible.")]),e._v(" "),n("p",[e._v("There is a fee for receiving notarization services. This helps to cover the business\ncosts associated with notarization (recall that all notarizations are financial transactions, by nature).")]),e._v(" "),n("p",[e._v("We already have over fifteen partners successfully notarizing to the Komodo main\nchain. We are actively seeking more partners, and we encourage the reader to reach\nout to our team directly with inquiries.")]),e._v(" "),n("p",[e._v("Entrepreneurs are thus able to use the asset chain’s native dPoW consensus mechanism to notarize to the Komodo main chain to create a secure backup of the coin’s history. Even in the event of an attack at this early state of existence the entrepreneur can\nrest assured that their product will survive, so long as one copy of the blockchain’s\nhistory exists.")]),e._v(" "),n("p",[e._v("Everything is set on the backend for the entrepreneur, and they are now fully prepared to begin the dICO process. Naturally, we understand that for many potential\nentrepreneurs in the Komodo ecosystem, this process is unfamiliar territory. We encourage interested entrepreneurs to reach out to our team for guidance during development.")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),n("p",[e._v("Previously, the entrepreneur at this point would have been required to go through\na centralized ICO process.")]),e._v(" "),n("p",[e._v("This could have required several cumbersome and possibly dangerous steps. For\nexample, the entrepreneur would begin gathering cryptocurrencies from their audience to personally hold in escrow while the process of matching purchases to the new\nblockchain coin were verified.")]),e._v(" "),n("p",[e._v("To distribute these coins, the entrepreneur had two primary options. They could\nhave created and distributed a digital software wallet capable of holding the entrepreneur’s coins. This would requiretheir audience to download the software. The\nentrepreneur would then have to send all the appropriate coins to each wallet address,\naccording to the process they established during their ICO.")]),e._v(" "),n("p",[e._v("Or, the entrepreneur would have to make formal arrangements with another service\nto manage this process, such as with a centralized exchange. This would require a successful negotiation with this third party, likely paying fees as a part of the agreement.")]),e._v(" "),n("p",[e._v("The entrepreneur would then be required to act within the centralized exchange’s\narbitrary framework.")]),e._v(" "),n("p",[e._v("The centralized ICO process can be arduous and, at times, disastrous.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),n("p",[e._v("The Komodo dICO model is an extension of Komodo’s BarterDEX technology.\nBarterDEX is an atomic- swap powered, decentralized exchange. It enables users to\ndirectly exchange cryptocurrencies from one person to another without third-party\ninvolvement (i.e. no centralized exchanges, escrow services, vouchers, etc.). Furthermore, as the dICO model is entirely decentralized, anyone can use it at will. There are\nno centralized authority figures capable of creating artificial control points that can\nbe manipulated at the expense of the users. Please turn to "),n("router-link",{attrs:{to:"./chapter6.html"}},[e._v("Part III")]),e._v(" for more details.")],1),e._v(" "),n("p",[e._v("To begin the distribution process, the entrepreneur first chooses how many nodes\nthey would like to use for the distribution. Nodes can be any type of machine capable\nof connecting to BarterDEX. Typically, a small-business entrepreneur may choose to\nuse server machines. Server capacity can be rented online, and the servers can be\ndistributed geographically throughout the world, if desired.")]),e._v(" "),n("p",[e._v("While renting a multiplicity of servers may be the method of choice for an estab-\nlished small-business, it is not a requirement. An owner of an even smaller business,\noperating on a low budget, can simply use their own computer(s), geographically\nstationed nearby for convenience. On the other hand, a large corporation could use\nthe server capacity they already own. The number and strength of the machines is a\nchoice made by the entrepreneur.")]),e._v(" "),n("p",[e._v("Having decided the method of distribution, the entrepreneur will then prepare the\ntotal supply of coins. (We are assuming the coins are still located on the first device\nthat mined the entrepreneur’s genesis block.) The entrepreneur will first break down\nthe total collection of coins into smaller digital pouches. These small bags of coins\nare ultimately what will be traded on BarterDEX with their audience. The size of\nthe bags is chosen by the entrepreneur, and therefore the entrepreneur can choose a\nsize that is agreeable to their outlook on any KYC legal requirements. For a detailed\nexplanation of the process of breaking down the total collection into smaller bags of\ncoins, we also recommend reading about UTXO technology in "),n("router-link",{attrs:{to:"./chapter6.html"}},[e._v("Part III")]),e._v(" of this paper.")],1),e._v(" "),n("p",[e._v("Having created these bags of coins, the entrepreneur then sends them to all chosen nodes throughout the BarterDEX network. Coins are distributed to each node’s\nwallet(s) by a normal transaction.\nWith the coins distributed as desired, the entrepreneur sets the time and date when\neach bag of coins will be available for purchase. When a bag of coins becomes available on BarterDEX for trading, members of the Komodo ecosystem simply purchase the coins. Please see our discussion on atomic- swap technology in "),n("router-link",{attrs:{to:"./chapter6.html"}},[e._v("Part III")]),e._v(" for more\ndetails.")],1),e._v(" "),e._m(22),e._v(" "),n("p",[e._v("This method of conducting a decentralized initial coin offering mitigates and cir-\ncumvents the issues found in a centralized ICO. The entire process is conducted in a\ndecentralized manner. The dICO entrepreneur has direct access to their audience, as\nthere are no centralized human authorities acting as middlemen.")]),e._v(" "),n("p",[e._v('Because the bags of coins can be distributed across a vast range of nodes, and because the entrepreneur can program the time at which each bag of coins becomes\navailable, it is possible to prevent a "whale" from seizing a majority control in one\nswooping moment of the dICO. The whale will have to compete to purchase their desired amount one transaction at a time, just like the other members of the ecosystem.')]),e._v(" "),n("p",[e._v("Furthermore, BarterDEX has advanced trading features that provide additional\nwhale resistance. For example, BarterDEX can perform ten to twenty trades at once,\nunlike a normal node in the typical ICO model. Therefore, even if the whale were able\nto place large orders on every node of a dICO, BarterDEX would still be performing\norders simultaneously for other members of the Komodo ecosystem.")]),e._v(" "),n("p",[e._v("Concerning theft, the dICO provides solutions to both methods of theft in the centralized ICO. Unlike the centralized ICO, once the distribution of the bags takes place the effect of their distribution adds a layer of security from a would-be hacker. The hacker can only steal funds at the node they manage to penetrate. Were the hacker to steal coins before the actual dICO, the entrepreneur would have the option to simply create a *NEW ENTREPRENEUR’S COIN+ again, without losing any personal wealth.")]),e._v(" "),n("p",[e._v("Furthermore, since the trades happen instantaneously with each bag available for sale, the entrepreneur is only in possession of either their own *ENTREPRENEUR’S COIN+, or the cryptocurrency funds provided by the dICO participants—but not both. The entrepreneur is never at risk of losing both their own funds and the funds of their audience, which is a strong advantage over today’s ICO model.")]),e._v(" "),n("p",[e._v("Regarding human error, should one of the node’s databases be corrupted by accident or hardware failure, only one node’s coin supply is lost.")]),e._v(" "),n("p",[e._v("Since the coins are immediately available on the BarterDEX exchange for trading,\nthe entrepreneur’s audience has an immediate trading market. This stands in contrast\nto today’s ICO model, where users often wait weeks or even months before liquidity\nfor their ICO product arises in a centralized exchange.")]),e._v(" "),n("p",[e._v("Finally, through Jumblr technology, participants have the option of privacy when\npurchasing the dICO product. This enables them to support the crowdsourcing efforts\nof the entrepreneur within their inherent right to barter in private.")]),e._v(" "),n("p",[e._v("Upon conclusion of the distribution of the dICO coin supply the entrepreneur\nhas successfully and immediately completed all the crowdsourcing-related steps that\ncould have taken months in today’s typical ICO model.")]),e._v(" "),n("p",[e._v("Komodo’s dICO model is significantly easier, freer from manipulation, more flexible, and more secure.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"the-komodo-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-komodo-solution","aria-hidden":"true"}},[this._v("#")]),this._v(" The Komodo Solution")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-decentralized-initial-coin-offering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-decentralized-initial-coin-offering","aria-hidden":"true"}},[this._v("#")]),this._v(" The Decentralized Initial Coin Offering")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-process-of-creating-a-new-blockchain-in-the-komodo-ecosystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-process-of-creating-a-new-blockchain-in-the-komodo-ecosystem","aria-hidden":"true"}},[this._v("#")]),this._v(" The Process of Creating a New Blockchain in the Komodo Ecosystem")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('The following steps rely on one of Komodo’s underlying software processes that\nrun in the background on a user’s computer. The name of this software is the "Komodo daemon," or '),t("code",[this._v("komodod")]),this._v(", for short. "),t("code",[this._v("komodod")]),this._v(" is rooted in Iguana Core technology.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-first-command-to-create-a-new-coin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-first-command-to-create-a-new-coin","aria-hidden":"true"}},[this._v("#")]),this._v(" The First Command to Create a New Coin")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("./komodod -ac_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ENTREPRENEUR'S COIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" -ac_supply"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TOTAL COIN SUPPLY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" -gen\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The first part of the command, "),t("code",[this._v("./komodod")]),this._v(", initiates a new instance of Komodod.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("By default, the initial "),t("code",[this._v("./komodod")]),this._v(" command executed alone would launch the\nKomodo main chain, KMD, on the user’s computer. However, the next part of the\ncommand tells Komodod to behave differently.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("-ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("ENTREPRENEUR'S COIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("-ac_supply"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("TOTAL COIN SUPPLY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("-gen\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-features-of-the-new-asset-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-features-of-the-new-asset-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" The Features of the New Asset Chain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"generating-and-mining-the-new-coins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-and-mining-the-new-coins","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating and Mining the New Coins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"the-entire-coin-supply-is-distributed-in-the-genesis-block"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-entire-coin-supply-is-distributed-in-the-genesis-block","aria-hidden":"true"}},[this._v("#")]),this._v(" The Entire Coin Supply is Distributed in the Genesis Block")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("./komodod -ac_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ENTREPRENUER'S COIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" -ac_supply"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("TOTAL COIN SUPPLY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" -addnode"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INSERT IP ADDRESS OF FIRST DEVICE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("In the second VPS, the [-gen] command is not present. In this circumstance, we are assuming that the entrepreneur wants to capture the entire coin supply on the first device. Technically speaking, assuming the entrepreneur has ownership over both devices, it does not matter if both devices initiate the [-gen] command. Both devices will attempt to mine the first block and the superior device will receive the coin supply.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("-addnode"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("INSERT IP ADDRESS OF FIRST DEVICE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"notarizing-to-the-komodo-main-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notarizing-to-the-komodo-main-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Notarizing to the Komodo Main Chain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-distribution-of-coins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-distribution-of-coins","aria-hidden":"true"}},[this._v("#")]),this._v(" The Distribution of Coins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-trials-and-travails-of-the-centralized-ico-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-trials-and-travails-of-the-centralized-ico-method","aria-hidden":"true"}},[this._v("#")]),this._v(" The Trials and Travails of the Centralized ICO Method")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enter-the-dico"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enter-the-dico","aria-hidden":"true"}},[this._v("#")]),this._v(" Enter the dICO")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"powered-by-komodo’s-barterdex-jumblr-technology"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powered-by-komodo’s-barterdex-jumblr-technology","aria-hidden":"true"}},[this._v("#")]),this._v(" Powered by Komodo’s BarterDEX & Jumblr Technology")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"the-many-solutions-of-the-dico-model-security-privacy-decentralization-and-freedom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-many-solutions-of-the-dico-model-security-privacy-decentralization-and-freedom","aria-hidden":"true"}},[this._v("#")]),this._v(" The Many Solutions of the dICO Model: Security, Privacy, Decentralization, and Freedom")])}],!1,null,null,null);t.default=o.exports}}]);