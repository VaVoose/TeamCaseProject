var titlepre = 'LCPC';
// Website title prefix

var smfacebook = 'http://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469';
// Social Media - Facebook link
var smtwitter = 'http://www.twitter.com/GoBoldlyLCPC';
// Social Media - Twitter link



document.write('    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->');
document.write('    <meta name="description" content="">');
document.write('    <meta name="author" content="">');
document.write('    <link rel="icon" href="../../favicon.ico">');
if (typeof pgtitle != 'undefined') {
	document.write('<title>' + titlepre + ' - ' + pgtitle +  '</title>');
} else {
	alert('You forgot the pgtitle variable in the head');
	document.write('<title>' + titlepre + '</title>');
}
document.write('    <!-- Bootstrap core CSS -->');
document.write('    <link href="css/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">');
document.write('    <!-- Icons & Fonts -->');
document.write('    <link href="http://fonts.googleapis.com/css?family=Dosis:400,500,700" rel="stylesheet" type="text/css">');
document.write('    <link rel="stylesheet" href="css/styles.css">');
document.write('    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->');
document.write('    <link href="css/bootstrap/docs/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">');
document.write('    <!-- Custom styles for this template -->');
document.write('	<link href="css/main.css" rel="stylesheet">');
document.write('    <link href="css/sidebar.css" rel="stylesheet">');
document.write('    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->');
document.write('    <!--[if lt IE 9]>');
document.write('      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>');
document.write('      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>');
document.write('    <![endif]-->');
document.write('	<script src="js/func.js"></script>');
document.write('  </head>');

document.write('  <body>');

document.write('    </div> <!-- /container -->');
 