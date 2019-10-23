/*
 *  Xidipity WordPress Theme
 *
 *  file:   mnusp/plugin.js
 *  build:  91020.1a
 *  descrp: mnusp plugin (fake button)
 *  ref:    https://www.tiny.cloud/
 *
 *  @package WordPress
 *  @subpackage Xidipity
 *  @since 0.9.0
 *
**/
(function() {
    tinymce.PluginManager.add('mnusp', function( editor, url ) {
        editor.addButton( 'mnusp', {
            title: '',
            icon: 'mce-mnusp',
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTIgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+CiAgPGxpbmUgc3R5bGU9InN0cm9rZTogcmdiKDE4OSwgMTg5LCAxODkpOyBzdHJva2UtbGluZWNhcDogcm91bmQ7IiB4MT0iNiIgeTE9IjQuNzA3IiB4Mj0iNiIgeTI9IjE5LjI5MyIvPgo8L3N2Zz4=',
        });
    });
})();
/*
    eof: mnusp/plugin.js
*/
