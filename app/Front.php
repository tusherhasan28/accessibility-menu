<?php 

namespace Habib\Accessibility\App;

class Front {

    /**
     * Class Constructor
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', [$this, 'enque_scripts'] );
    }

    /**
     * load all fornt assets
     */
    public function enque_scripts() {
        
        if( ! is_admin() ) {
            wp_enqueue_style( 'front', AS_ASSET . '/front/css/front.css', '', time(), 'all' );

            wp_enqueue_script( 'front', AS_ASSET . '/front/js/front.js', ['jquery'], time(), true );
        }
    } 

}