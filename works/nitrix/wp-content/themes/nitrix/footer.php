<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package nitrix
 */

?>

	</div><!-- #content -->

<footer class="footer">
	<div class="container">
		<div class="footer__headline">
			<h1><?php bloginfo('name'); ?></h1>
			<p>© Copyright 2019 Nitrix - All Rights Reserved</p>
		</div>
		<div class="footer__links">
				<?php
				$args = [
					'menu'            => '',
					'container' => 'ul',
					'container_class' => '',
					'container_id'    => '',
					'menu_class'      => '',
					'menu_id'         => '',
					'echo'            => true,
					'fallback_cb'     => 'wp_page_menu',
					'before'          => '',
					'after'           => '',
					'link_before'     => '',
					'link_after'      => '',
					'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
					'item_spacing'    => 'preserve',
					'depth'           => 0,
					'walker'          => ''
				];
				wp_nav_menu();

				?>
		</div>
	</div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
