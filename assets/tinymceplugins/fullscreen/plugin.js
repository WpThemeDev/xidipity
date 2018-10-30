/**
 * Plugin Name: TinyMCE Full Screen Plugin
 * Plugin URI: http:www.xidipity.com
 * Build: 81030
 * Author: John Baer
 * Description: A TinyMCE Plugin to toggle editor to and from full screen mode
 * License: GPL2
 */

(function() {
    tinymce.PluginManager.add('xscreen', function( editor, url ) {
        editor.addButton( 'xscreen', {
            title: 'Full Screen',
            icon: 'mce-fullscreen',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRw%0D%0AOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9%0D%0AIjAgMCAyNCAyNCI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2RlZnM+%0D%0APGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIv%0D%0APjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBkPSJNMTUgM2wyLjMgMi4zLTIu%0D%0AODkgMi44NyAxLjQyIDEuNDJMMTguNyA2LjcgMjEgOVYzek0zIDlsMi4zLTIuMyAyLjg3IDIuODkg%0D%0AMS40Mi0xLjQyTDYuNyA1LjMgOSAzSDN6bTYgMTJsLTIuMy0yLjMgMi44OS0yLjg3LTEuNDItMS40%0D%0AMkw1LjMgMTcuMyAzIDE1djZ6bTEyLTZsLTIuMyAyLjMtMi44Ny0yLjg5LTEuNDIgMS40MiAyLjg5%0D%0AIDIuODdMMTUgMjFoNnoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9Im5vbmUiIGQ9%0D%0AIk0wIDBoMjR2MjRIMHoiLz48L3N2Zz4=',
            onclick: function() {
              tinymce.execCommand('mceFullscreen');
            }
        });
    });
})();
