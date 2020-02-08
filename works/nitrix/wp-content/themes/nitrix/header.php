  <!DOCTYPE html>
	<html lang="ru">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <meta http-equiv="X-UA-Compatible" content="ie=edge">
	  <title><?php bloginfo('name'); ?></title>
	  <link rel="stylesheet" href="<?php bloginfo('template_directory') ?>/css/style.css">
	  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic" rel="stylesheet">
	</head>
	<body>
		 <header class="header">
      <div class="container">
        <div class="header__headline"><h1><?php bloginfo('name'); ?></h1></div>
        <div class="header__links">
        	<?php
          $args = [
            'menu'            => '',
            'container' => 'ul',
            'container_class' => 'header__links__list',
            'container_id'    => '',
            'menu_class'      => 'header__links__list',
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
      </div>
    </header>
