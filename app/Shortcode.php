<?php 

namespace Habib\Accessibility\App;

class Shortcode {

    /**
     * Class Constructor
     */
    public function __construct() {
        add_shortcode( 'as_main', [$this, 'as_main_shortcode'] );
    }

    /**
     * Accessibility Menu Main Shortcode
     */
    public function as_main_shortcode() {
        ?>
            <div class="as-main" id="as-main">
                <img src="<?php esc_html_e( AS_ASSET . '/img/man.png' ); ?>">
            </div>
        <?php 
    }
}