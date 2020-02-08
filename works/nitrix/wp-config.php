<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'test' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&/,[mMc.ffZp rIAUb4>TC`vJjY ]#Pca&e 7=,W5LbXLnra@<Fi}?3#Ly?c+uo?' );
define( 'SECURE_AUTH_KEY',  '00A5l1pUbH{9`LHh9x(,3YQEBI`cJU$g+81p=1#iMIm{JNoQ[iPExZ&`yXmX^^~I' );
define( 'LOGGED_IN_KEY',    'c!UNk^5JHNw)Oh=1;`)9%jCS&1Zs,gC,6ZZT.0MfuW!$zj9Bk~=:P!8g64ZVX8R~' );
define( 'NONCE_KEY',        'Ur)-/WDh>FShw cl-zf0G*Z0 K7yO 9KXW!<}@DI%.c34n-9YsA<ER54J]u-&{XR' );
define( 'AUTH_SALT',        's39WuIg[o_KzQfH|3#SAhULHCzQJeA=W-ZD~l$/N4%2nYSf7+Z&sLxKVn_0,^74Y' );
define( 'SECURE_AUTH_SALT', 'w`MY}^3l.$Z@C[[BnPnQ8[c.Tot~H%cTE2#El)m-)2n6z`yE+Spqnjc&|wd2PYE}' );
define( 'LOGGED_IN_SALT',   'TxV):MV(@>G~TADC73B9ljR!9Sdzt=pV stG#EV5|}J,DPG`rGCA;U&C=a#$~ *b' );
define( 'NONCE_SALT',       'YXVgV*?/0eD<%.0{:MO_bZ@B*~T6:0|<Tb;+ P S=,+O?F?b@<}/YS/PQ[p*o,D[' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
