import '../styles/main.sass';

require('./sliders');
require('./submenu');
require('./mobile-menu');

import LazyLoad from 'vanilla-lazyload';
new LazyLoad({
    elements_selector: '.lazy'
});