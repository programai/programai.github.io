!function(a){var b=!0;a.querySelector("#toggle-top-menu").onclick=function(c){var d=c.target;b?(a.querySelector("#top-menu .menu").style.display="block",d.className="menu-toggled"):(a.querySelector("#top-menu .menu").style.display="none",d.className=""),b=!b};var c=function(){var c=a.body.clientWidth;if(480>c)b&&(a.querySelector("#top-menu .menu").style.display="none");else{var d=a.querySelector("#top-menu .menu").style.display;"none"===d&&(a.querySelector("#top-menu .menu").style.display="block")}};window.addEventListener("resize",c),window.addEventListener("orientationchange",c)}(document);