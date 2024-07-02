<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package base_theme
 */
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>
</main>
<footer class="footer mt-auto py-3 bg-body-tertiary">
    <div class="container">
        <div class="copyright">
            <p>Copyright ©<?php echo date("Y"); ?> Enfection. Designed & Developed by <a
                    href="https://www.enfection.com/">Enfection</a>.
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>