/**
    * WordPress Xidipity Theme
    * Tinymce toggle-italic plugin 
    *
    * ###:  plugin.js
    * bld:  24200520
    * src:  github.com/WpThemeDev/xidipity/
    * (C)   2019-2020 John Baer
    *
*/

tinymce.PluginManager.add('toggle_italic', function( editor, url ) {
    editor.addButton( 'toggle_italic', {
        title: 'Toggle Italic',
        icon: false,
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgNHYzaDIuMjFsLTMuNDIgOEg2djNoOHYtM2gtMi4yMWwzLjQyLThIMThWNGgtOHoiLz48L3N2Zz4=',
        cmd: 'Italic'
    });
});

/*
 * EOF: toggle-italic / plugin.js / 24200520
 */
