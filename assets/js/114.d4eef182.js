(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{297:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This guide will help you to compile your own marketmaker binary in MacOS (OSX) with static nanomsg. Follow this\n"),a("router-link",{attrs:{to:"./compile-marketmaker-binary-with-static-nanomsg-in-Linux.html"}},[t._v("guide")]),t._v(" for Linux.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"compile-marketmaker-binary-with-static-nanomsg-in-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-marketmaker-binary-with-static-nanomsg-in-macos","aria-hidden":"true"}},[this._v("#")]),this._v(" Compile marketmaker Binary with Static nanomsg in MacOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-dependency-packages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-dependency-packages","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Dependency packages:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cmake "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" libcurl4-openssl-dev build-essential\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-nanomsg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg","aria-hidden":"true"}},[this._v("#")]),this._v(" Install "),e("code",[this._v("nanomsg")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You'll need to install "),e("code",[this._v("homebrew")]),this._v(" (Google how to do it)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" nanomsg\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"clone-supernet-repo-and-compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clone-supernet-repo-and-compile","aria-hidden":"true"}},[this._v("#")]),this._v(" Clone SuperNET repo and compile")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/jl777/SuperNET\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" ~/SuperNET/iguana\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev\n./m_mm\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n./osx_deploy.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Once all done, you should be able to find both "),e("code",[this._v("iguana")]),this._v(" and "),e("code",[this._v("marketmaker")]),this._v(" static binaries in user's home directory, under "),e("code",[this._v("~/tmp/iguana/")]),this._v(".")])}],!1,null,null,null);e.default=n.exports}}]);