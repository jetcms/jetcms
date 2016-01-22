var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
/*
elixir(function(mix) {
    mix.sass('app.scss');
});
*/

elixir(function(mix) {
    mix.copy('node_modules/bootstrap/fonts', 'public/fonts');
});

elixir(function(mix) {
    mix.copy('node_modules/font-awesome/fonts', 'public/fonts');
});

elixir(function(mix) {
    mix.copy('resources/assets/ckeditor', 'public/packages/sleeping-owl/admin/default/js/formitems/ckeditor');
});

elixir(function(mix) {
    mix.less('app.less');
});


elixir(function(mix) {
    mix.less('ckeditor.less');
});

elixir(function(mix) {
    mix.scripts([
        '../../../bower_components/jquery/dist/jquery.js',
        "app.js"
    ]);
});

elixir(function(mix) {
    mix.version(["js/all.js","public/css/app.css"]);
});