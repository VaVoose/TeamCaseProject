var titlepre = 'LCPC'; //Website Title prefix
var color = "#df5a49"; // This is the color of the header and footer
var bgcolor = "#a1e8d9"; //This is the background color

var headerv = "partial"; //Header shape, partial or full

//var smfacebook = "http://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"; // Social Media - Facebook link
//var smtwitter = "http://www.twitter.com/GoBoldlyLCPC"; // Social Media - Twitter link

// DROPDOWNS
dropdown1Name = "Who We Are";
var dropdown1Names = [
	"Find Us",
	"Staff",
	"Core Values"
];
var dropdown1Links = [
	"findus.html",
	"staff.html",
	"corevalues.html"
];

dropdown2Name = "Worship";
var dropdown2Names = [
	"Services",
	"Sermon",
	"Music"
];
var dropdown2Links = [
	"services.html",
	"sermon.html",
	"music.html"
];

dropdown3Name = "Faith Information";
var dropdown3Names = [
	"Learning Opportunities",
	"Children",
	"Youth",
	"Adult",
	"Living in Community"
];
var dropdown3Links = [
	"learningopportunities.html",
	"children.html",
	"youth.html",
	"adult.html",
	"livingincom.html"
];

dropdown4Name = "What We Do";
var dropdown4Names = [
	"Mission",
	"Peace",
	"Tutoring",
	"Mission Committee Monthly Iniatives",
	"Community",
	"Rummage Sale",
	"Christmas Gift Saving",
];
var dropdown4Links = [
	"mission.html",
	"peace.html",
	"tutoring.html",
	"mcmi.html",
	"community.html",
	"rummagesale.html",
	"cgs.html"
];

dropdown5Name = "Contact";
var dropdown5Names = [
	"CEC",
	"Eblast",
	"Facility use inquiries"
];
var dropdown5Links = [
	"cec.html",
	"eblast.html",
	"fui.html"
];


//////////////////////////////
// Don't edit past this line //
///////////////////////////////////////////////////////////////////////////////
// Above this line are the variables you can change to customize your website./
// Below this line are the core functions and the website header.			  /
// It is reccomended that inexperienced users not edit it.					  /
///////////////////////////////////////////////////////////////////////////////

//////////////////////
// Function Section //
//////////////////////
function colorlum(hex, lum) {
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}	lum = lum || 0;
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	} return rgb; }
function copyright(input) {
  var cyear = new Date().getFullYear();
  document.write('<span style="font-size: 11.5pt;font-style: italic;">Copyright ' + cyear + ' ' + input + '</span>');
}
function notify(msg, svr) {
	var id = 'nt' + Math.floor(Math.random() * 100001);
    if (svr == '1') { document.getElementById("main").innerHTML='<span id="' + id + '"><span title="Click to Dismiss" class="notice" onclick="hidediv(\'' + id + '\');"> ' + msg + ' </span> <br><br></span>' + document.getElementById("main").innerHTML; }
    if (svr == '2') { document.getElementById("main").innerHTML='<span id="' + id + '"><span title="Click to Dismiss" class="notice caution" onclick="hidediv(\'' + id + '\');"> ' + msg + ' </span> <br><br></span>' + document.getElementById("main").innerHTML; }
    if (svr == '3') { document.getElementById("main").innerHTML='<span id="' + id + '"><span title="Click to Dismiss" class="notice warn" onclick="hidediv(\'' + id + '\');"> ' + msg + ' </span> <br><br></span>' + document.getElementById("main").innerHTML; }
}
function notifynh(msg) {
	var id = 'nt' + Math.floor(Math.random() * 100001);
    document.getElementById("main").innerHTML='<span id="' + id + '"><span title="Click to Dismiss"> ' + msg + ' </span> <br><br></span>' + document.getElementById("main").innerHTML; 
}
function event(name, date, content) {
	var rand = 'evid' + Math.floor(Math.random() * 100001);
	var lines = ((30*(Math.round(content.length / 70)))+25);
	document.write('<div class="eventbox collapse-group">');
	document.write('<h1 class="inline church-blue">' + name + '</h1> <span class="h1-font inline church-blue italic small-font">&nbsp; - &nbsp;(' + date + ')</span><br>');
	document.write('<p>' + content + '</p></div><br><br>');
	
}
function hidediv(boxid){
   document.getElementById(boxid).remove();
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
} } }
function addhtml(input) {
  document.getElementById("main").innerHTML = input + document.getElementById("main").innerHTML;
}
function addcss(input) {
  document.getElementById("main").innerHTML = '<style>' + input + '</style>' + document.getElementById("main").innerHTML;
}
function xaddcss(input) {
  document.write('<style>' + input + '</style>');
}
function formvar(id) {
  return document.getElementById(id).value;
}
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
function indent(num) {
	document.write('&nbsp;');
	for (i = 0; i < num; i++) {
    document.write('&nbsp;');
}
	return '&nbsp;';
}
function getStyle(el, styleProp)    {
    var x = document.getElementById(el);
    if (x.currentStyle)
        var y = x.currentStyle[styleProp];
    else if (window.getComputedStyle)
        var y = document.defaultView.getComputedStyle(x,null).getPropertyValue(styleProp);
    return y;
}
function getdir() {
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));
	if(dir.slice(-3)=="TCP" || dir.slice(-3)=="") {
		return "root";
	} else {
		if(dir.slice(-3)=="tal") {
			return 'portal';
		}
		if(dir.slice(-3)=="age") {
			return 'page';
		}
	}
}

var scriptSource = (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src
}());

var params = parseQueryString(scriptSource.split('?')[1]);
var minified = params.min;

function parseQueryString(queryString) {
    var params = {};
    if (queryString) {
        var keyValues = queryString.split('&');
        for (var i=0; i < keyValues.length; i++) {
            var pair = keyValues[i].split('=');
            params[pair[0]] = pair[1];
        }
    }
    return params;
}
function lsisset(name) {
  if (localStorage.getItem(name) === null) {
 return false; } else { return true; }
}
function lsval(name) {
	return localStorage.getItem(name);
}
function decrypt(intext) {
	if(lsisset('key')) {
	var decrypted = CryptoJS.AES.decrypt(intext, lsval('key'));
	return decrypted.toString(CryptoJS.enc.Utf8);
	} else { return 'You must be logged in to access this resource'; }
}
function encrypt(intext) {
	if(lsisset('key')) {
	var enc = CryptoJS.AES.encrypt(intext, lsval('key'));
	return enc.toString();
	} else { return 'You must be logged in to access this resource'; }
}
function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}
function account(inputkey) {
	if(cxaccount(inputkey)) { skip = skip + 65534;} else { skip = skip - 2; }
	return true;
}
function cxaccount(enchash) { var skip = 32;
	console.log('HashGen: ' + inuser + '::' + inpass)
	console.log('UserHash: ' + hash);
	console.log('EncStr: ' + enchash);
	
	var dectry = CryptoJS.AES.decrypt(enchash, hash.toString());
      if(dectry.toString(CryptoJS.enc.Utf8)=='') { console.log('DecTry is FALSE: (' + dectry.toString(CryptoJS.enc.Utf8) + ')'); 
		skip = skip - 2;
      } else { console.log('DecTry is TRUE'); 
	  console.log('DecTry: ' + dectry.toString(CryptoJS.enc.Utf8));
	  localStorage.setItem("user", inuser);
	  localStorage.setItem("key", dectry.toString(CryptoJS.enc.Utf8));
		skip = 64;
	  }
	  console.log('Skip: ' + skip);
	  console.log(' ');
	  if(skip>36) { return true; } else { return false; }
}
function welcomemsg() {
	if(lsisset('user')) {
		document.write('<h1>Welcome, ' + lsval('user') + '</h1>');
	} else {
		document.write('<h1>You are not logged in</h1>');
	}
}
function hide(intext) {
	document.write(decrypt(intext));
}
function authgen() {
	var newus = formvar('form4user'); var newpas = formvar('form4pass');
	var nwhash = CryptoJS.SHA256(CryptoJS.SHA256(newus) + '::' + CryptoJS.SHA256(newpas));
	
	var newenc = CryptoJS.AES.encrypt(lsval('key'), nwhash.toString());
	notifynh('Your login code: <input value="account(\'' + newenc + '\');">');
}

////////////////////
// Header Section //
////////////////////
if(minified=='1') {

document.write('    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->');
document.write('    <meta name="description" content="">');
document.write('    <meta name="author" content="">');
document.write('    <link rel="icon" href="../../favicon.ico">');
document.write('<title>' + titlepre + ' - Admin Panel</title>');
document.write('    <!-- Bootstrap core CSS -->');
document.write('    <link href="../css/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">');
document.write('    <!-- Icons & Fonts -->');
document.write('    <link href="http://fonts.googleapis.com/css?family=Dosis:400,500,700" rel="stylesheet" type="text/css"> ');
//document.write('	<link rel="stylesheet" href="../css/fonts.css">');
document.write('    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->');
document.write('    <link href="../css/bootstrap/docs/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">');
document.write('    <!-- Custom styles for this template -->');
document.write('    <link href="../css/stylesheet.css" rel="stylesheet">');
document.write('    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->');
document.write('    <!--[if lt IE 9]>');
document.write('      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>');
document.write('      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>');
document.write('    <![endif]-->');
document.write('	<script src="../css/fonts.js"></script>');
document.write('  </head>');

document.write('  <body> ');

document.write('          <div class="navbar-header">');
document.write(' 			<a class="navbar-brand" href="../index.html" class="h1-font">Back to Homepage</a> ');
document.write('          </div>');
document.write('             <ul class="nav navbar-nav">');
document.write('               <li><a href="documentation.html">Documentation</a></li>		');	  
document.write('              <li><a href="users.html">Users</a></li>');
document.write('              <li><a href="file.html">Files</a></li>');
document.write('          </ul>');
document.write('<ul class="nav navbar-nav navbar-right u2smicon"> ');


if(lsisset('user')) {
	document.write('             <li><a class="navbar-brand" href="signincheck.html?fc=out">Sign Out</a></li>');
} else {
	document.write('             <li><a class="navbar-brand" href="signin.html">Sign In</a></li>');
}


document.write('       </div>');
document.write('          </div><!--/.nav-collapse -->');
document.write('        </div><!--/.container-fluid -->');
document.write('      </nav>');
document.write('      <!-- Main component for a primary marketing message or call to action -->');

} else {

document.write('    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->');
document.write('     <meta name="description" content="">');
document.write('    <meta name="author" content="">');
document.write('    <link rel="icon" href="../../favicon.ico">');
document.write('    <!-- Bootstrap core CSS -->');
document.write('    <link href="css/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">');
document.write('    <!-- Icons & Fonts -->');
document.write('    <link href="http://fonts.googleapis.com/css?family=Dosis:400,500,700" rel="stylesheet" type="text/css">');
document.write('	<script src="css/fonts.js"></script>');
document.write('    <link rel="stylesheet" href="css/styles.css">');
document.write('    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->');
document.write('    <link href="css/bootstrap/docs/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">');
document.write('    <!-- Custom styles for this template -->');
document.write('    <link href="css/main.css" rel="stylesheet">');
document.write('    <link href="css/header.css" rel="stylesheet">');
document.write('    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->');
document.write('    <!--[if lt IE 9]>');
document.write('      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>');
document.write('      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>');
document.write('    <![endif]-->');
document.write('  </head>');

document.write('  <body>');
if (typeof headerv != 'undefined') {
	if(headerv != "full" && headerv != "partial") {
		alert('Error E03 - Check the Documentation');
		document.write('      <nav class="navbar navbar-default navbar-fixed-top" >');
		document.write('        <div class="container">');
	} else {
		if(headerv=="partial") {
			document.write('    <div class="container" >'); //style="position: fixed;" //It doesnt stick to the top of the page
			document.write('      <!-- Static navbar -->');


			xaddcss('.affix-top{width:width: 99.9999%;} .affix{width:57em; margin-top: -21px;}'); //Normal

			xaddcss('@media (max-width: 1200px){.affix{width:calc(970px - 2em); margin-top: none;}}'); //Middle One

			xaddcss('@media (max-width: 992px){.affix{width:calc(750px - 2em); margin-top: none;} #main{margin-top:-8em;} .u2smicon{display:none;}}'); //Middle Two

			xaddcss('@media (max-width: 767px){.affix{width:94%; margin-top: none;}}'); //Mobile
			xaddcss('@media (max-width: 767px){ #main{display:block;} #ic1{width:100% !important; padding-bottom:6em;} #ic2{width:100% !important;float:left;} }'); //Mobile

			document.write('      <nav id="unb"  class="navbar navbar-default" data-spy="affix" data-offset-top="1">'); //data-spy="affix" data-offset-top="1"
			document.write('        <div class="container-fluid" >');
		}
		if(headerv=="full") {
			document.write('      <nav class="navbar navbar-default navbar-fixed-top" >');
			document.write('        <div class="container">');
			xaddcss('body{margin-top:2em;');
		}
	}
} else {
	alert('Error E04 - Check the Documentation');
	document.write('      <nav class="navbar navbar-default navbar-fixed-top" >');
	document.write('        <div class="container">');
}
document.write('          <div class="navbar-header">');
document.write('            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">');
document.write('              <span class="sr-only">Toggle navigation</span>');
document.write('              <span style="background-color: #000;" class="icon-bar"></span>');
document.write('              <span style="background-color: #000;" class="icon-bar"></span>');
document.write('              <span style="background-color: #000;" class="icon-bar"></span>');
document.write('            </button>');
document.write('			<div class="socialmediasmall">');
document.write('		   	  <a class="navbar-brand" href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/facebook.svg" class="socialMedia" > </a></li>');
document.write('			  <a class="navbar-brand" href="https://www.twitter.com/GoBoldlyLCPC"><img src="Image/icon/twitter.svg" class="socialMedia"></a></li>');
document.write('			  <a class="navbar-brand" href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/instagram.svg" class="socialMedia"></a></li>');
document.write('			</div>');

document.write(' 			 <a class="navbar-brand" href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a> ');
document.write('          </div>');
document.write('          <div id="navbar" class="navbar-collapse collapse">');
document.write('            <ul class="nav navbar-nav">');

document.write('              <li class="dropdown">');
document.write('                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + dropdown1Name + '<span class="caret"></span></a>');
document.write('               <ul class="dropdown-menu">');
var dropdown1Nameslen = dropdown1Names.length;
for (var i = 0; i < dropdown1Nameslen; i++) {
    var ddname = dropdown1Names[i];
	var ddlink = dropdown1Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');
document.write('              <li class="dropdown">');
document.write('                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + dropdown2Name + '<span class="caret"></span></a>');
document.write('                <ul class="dropdown-menu">');
var dropdown2Nameslen = dropdown2Names.length;
for (var i = 0; i < dropdown1Nameslen; i++) {
    var ddname = dropdown2Names[i];
	var ddlink = dropdown2Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');
document.write('              <li class="dropdown">');
document.write('                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + dropdown3Name + '<span class="caret"></span></a>');
document.write('                <ul class="dropdown-menu">');
var dropdown3Nameslen = dropdown3Names.length;
for (var i = 0; i < dropdown3Nameslen; i++) {
    var ddname = dropdown3Names[i];
	var ddlink = dropdown3Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');
document.write('              <li class="dropdown">');
document.write('                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + dropdown4Name + '<span class="caret"></span></a>');
document.write('                <ul class="dropdown-menu">');
var dropdown4Nameslen = dropdown4Names.length;
for (var i = 0; i < dropdown4Nameslen; i++) {
    var ddname = dropdown4Names[i];
	var ddlink = dropdown4Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');
document.write('              <li class="dropdown">');
document.write('                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + dropdown5Name + '<span class="caret"></span></a>');
document.write('                <ul class="dropdown-menu">');
var dropdown5Nameslen = dropdown5Names.length;
for (var i = 0; i < dropdown5Nameslen; i++) {
    var ddname = dropdown5Names[i];
	var ddlink = dropdown5Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');
document.write('            </ul>');


/* document.write('            <ul class="nav navbar-nav navbar-right u2smicon">');
document.write('              <li><a class="navbar-brand" target="_blank" href="' + smfacebook + '"> <svg width="20" height="20" viewBox="0 0 512 512"><path d="m393 37c23 0 42 8 58 24 16 16 24 35 24 58l0 274c0 23-8 42-24 58-16 16-35 24-58 24l-54 0 0-170 57 0 9-66-66 0 0-42c0-11 3-19 7-24 5-5 13-8 26-8l35 0 0-60c-12-1-29-2-51-2-26 0-46 7-62 23-15 15-23 36-23 64l0 49-57 0 0 66 57 0 0 170-152 0c-23 0-42-8-58-24-16-16-24-35-24-58l0-274c0-23 8-42 24-58 16-16 35-24 58-24z"></path></svg> </a></li>');
document.write('              <li>&nbsp; &nbsp; &nbsp;</li>');
document.write('              <li><a class="navbar-brand" target="_blank" href="' + smtwitter + '" > <svg width="20" height="20" viewBox="0 0 512 512"><path d="m402 174c-10 5-22 8-34 10 13-8 22-19 26-33-12 7-25 12-38 14-12-12-26-19-44-19-16 0-30 6-42 18-12 12-18 26-18 42 0 6 1 10 2 14-25-1-48-8-69-19-22-11-40-25-55-44-6 10-9 20-9 30 0 22 9 39 26 50-9 0-18-2-28-7l0 1c0 14 5 27 14 38 10 11 21 18 35 20-5 2-10 3-14 3-3 0-6-1-11-1 4 12 11 21 21 29 10 8 22 12 35 12-23 17-47 26-75 26-5 0-10 0-14-1 28 18 59 27 92 27 21 0 41-3 60-10 18-7 34-16 48-27 13-12 25-25 34-39 10-15 17-31 22-47 4-16 7-32 7-48 0-3-1-6-1-8 12-8 22-19 30-31z m73-55l0 274c0 23-8 42-24 58-16 16-35 24-58 24l-274 0c-23 0-42-8-58-24-16-16-24-35-24-58l0-274c0-23 8-42 24-58 16-16 35-24 58-24l274 0c23 0 42 8 58 24 16 16 24 35 24 58z"></path></svg> </a></li>');
document.write('            </ul>'); */
document.write('          </div><!--/.nav-collapse -->');
document.write('        </div><!--/.container-fluid -->');
document.write('      </nav>');
document.write('      <!-- Main component for a primary marketing message or call to action -->');
}
////////////////////////
// CSS Color Swapping //
////////////////////////
var lightcolor = colorlum(color, '0.3');
var lightercolor = colorlum(color,'0.45');
xaddcss('.navbar {background-color: ' + color + ';}.dropdown-menu>li>a:hover {background-color: ' + color + ';}');
xaddcss('.navbar-default .navbar-nav>li>a:hover {background-color: ' + lightcolor + ';}');
xaddcss('.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {background-color: ' + lightcolor + ';}');
xaddcss('.dropdown-menu {background-color: ' + lightcolor + ';}.dropdown-menu>li>a {background-color: ' + lightcolor + ';}');
xaddcss('@media (max-width: 767px) {.navbar-nav .open .dropdown-menu>li>a {background-color: ' + lightcolor + ';} .nav .open>a, .nav .open>a:focus, .nav .open>a:hover {background-color: ' + lightcolor + ';} .navbar-default .navbar-nav>li>a {background-color: ' + lightcolor + ';} .navbar-default .navbar-toggle:hover {background-color: ' + lightcolor + ';} }');
xaddcss('@media (max-width: 767px) {.navbar-default .navbar-nav .open .dropdown-menu>li>a { background-color: ' + lightercolor + ' } }');
xaddcss('@media (max-width: 767px) {.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover { background-color: ' + color + ' } }');
xaddcss('.navbar-default .navbar-brand:hover {background-color: ' + lightcolor + ';border-top-left-radius:4px;}');
xaddcss('body{background-color: ' + bgcolor + ';}');
if(headerv=="full") { xaddcss('#main{margin-top:-70px;'); }
document.write('    </div> <!-- /container -->');
