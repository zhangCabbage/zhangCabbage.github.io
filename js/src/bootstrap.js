// build time:Sat Oct 20 2018 18:02:12 GMT+0800 (CST)
$(document).ready(function(){$(document).trigger("bootstrap:before");NexT.utils.isMobile()&&window.FastClick.attach(document.body);NexT.utils.lazyLoadPostsImages();NexT.utils.registerESCKeyEvent();NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav");var t="site-nav-on";var o=e.hasClass(t);var a=o?"slideUp":"slideDown";var i=o?"removeClass":"addClass";e.stop()[a]("fast",function(){e[i](t)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();CONFIG.tabs&&NexT.utils.registerTabsTag();NexT.utils.embeddedVideoTransformer();NexT.utils.addActiveClassToMenuItem();NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar);$(document).trigger("motion:before");CONFIG.motion.enable&&NexT.motion.integrator.bootstrap();$(document).trigger("bootstrap:after")});
//rebuild by neat 