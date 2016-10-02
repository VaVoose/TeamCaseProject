//Variables
var titlepre = 'LCPC'; //Website Title prefix

//Navbar Dropdown Settings
//Dropdown1
dropdown1Name = "Who We Are";
var dropdown1Names = [
	"Find Us",
	"Staff",
	"Core Values"
];
dropdown1Link = "whoweare.html";
var dropdown1Links = [
	"findus.html",
	"staff.html",
	"corevalues.html"
];

//Dropdown2
dropdown2Name = "Worship";
var dropdown2Names = [
	"Services",
	"Sermon Links",
	"Music",
	"Seasonal Happenings"
];
dropdown2Link = "worship.html";
var dropdown2Links = [
	"services.html",
	"sermonlinks.html",
	"music.html",
	"seasonalhappenings.html"
];

//Dropdown3
dropdown3Name = "Faith Formation";
var dropdown3Names = [
	"Learning Opportunities",
	"Children",
	"Youth",
	"Adult",
	"Living in Community"
];
dropdown3Link = "faithformation.html";
var dropdown3Links = [
	"learningopportunities.html",
	"children.html",
	"youth.html",
	"adult.html",
	"livingincommunity.html"
];

//Dropdown4
dropdown4Name = "What We Do";
var dropdown4Names = [
	"Mission",
	"Peace + Justice",
	"Tutoring",
	"Community",
	"Rummage Sale",
	"Christmas Gift Giving",
	"Mission Committee Monthly Initiatives"
];
dropdown4Link = "whatwedo.html";
var dropdown4Links = [
	"mission.html",
	"peaceandjustice.html",
	"tutoring.html",
	"community.html",
	"rummagesale.html",
	"christmas.html",
	"missioncomittee.html"
];

//Dropdown5
dropdown5Name = "Contact Us";
var dropdown5Names = [
	"CEC",
	"Map",
	"E-Blast Sign-Up",
	"Facility Use"
];
dropdown5Link = "contact.html";
var dropdown5Links = [
	"cec.html",
	"map.html",
	"eblast.html",
	"facility.html"
];

//Header tags
document.write('<html lang="en">');
document.write('	<head>');
document.write('		<!--sets characterset to utf8-->');
document.write('		<!-- makes microsoft browsers use latest rendering engine-->');
document.write('		<meta http-equiv="X-UA-Compatible" content="IE=edge">');
document.write('		<!--title of the webpage-->');
document.write('		<title> ' + titlepre + ' </title>');
document.write('		<!--Set Characterset to UTF-8 -->');
document.write('		<meta http-equiv="Content-Type" content="text/html" charset=utf-8">');
document.write('		<!--Changes viewport for mobile devices-->');
document.write('		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">');	
document.write('		<!-- Latest compiled and minified CSS -->');
document.write('		<!-- Bootstrap -->');
document.write('		<link href="css/bootstrap.min.css" rel="stylesheet">');
document.write('		<link rel="stylesheet" href="css/stylesheet.css">');	
document.write('		<!--[if lt IE 9]>');
document.write('		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>');
document.write('		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>');
document.write('		<![endif]-->');
document.write('		<!-- gets the font for the website and imports it -->');
document.write('		<link href="https://fonts.googleapis.com/css?family=Josefin+Slab:400,400italic" rel="stylesheet" type="text/css">');
document.write('	<!-- Beginning of page -->		');
document.write('	</head>');
document.write('	<body>');

//Image and Title
document.write('		<div class="jumbotron">');
document.write('			<div class="container">');
document.write('				<div class="row">');
document.write('					<div class="col-xs-12 col-sm-12 col-md-2">');
document.write('						<a href="index.html"><img src="Image/logotransparent2.gif" id="jumbopic"></a>');
document.write('					</div>');
document.write('					<div class="col-xs-12 col-sm-12 col-md-10">');
document.write('						<p id="jumbo"> Lyndhurst Community Presbyterian Church </p>');
document.write('					</div>');
document.write('				</div>');
document.write('			</div>');
document.write('		</div>');

//Navbar
document.write('		<nav class="navbar navbar-default navbar-fixed-top" data-spy="affix" data-offset-top="100">');
document.write('			<div class="container">');
document.write('				<div class="navbar-header">');
document.write('					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">');
document.write('						<span class="sr-only">Toggle navigation</span>');
document.write('						<span class="icon-bar"></span>');
document.write('						<span class="icon-bar"></span>');
document.write('						<span class="icon-bar"></span>');
document.write('					</button>');
document.write('					<div class="socialmediasmall">');
document.write('						<a class="navbar-brand" href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/facebook.svg" class="socialMedia" > </a></li>');
document.write('						<a class="navbar-brand" href="https://www.twitter.com/GoBoldlyLCPC"><img src="Image/icon/twitter.svg" class="socialMedia"></a></li>');
document.write('						<a class="navbar-brand" href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/instagram.svg" class="socialMedia"></a></li>');
document.write('					</div>');
document.write('				</div>');
document.write('				<div id="navbar" class="navbar-collapse collapse">');
document.write('					<ul class="nav navbar-nav">');
document.write('						<li class="active"><a href="index.html">Home</a></li>');

//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST

//Move to variables section when done testing
//Creates Variable to detect Media Width
var mq = window.matchMedia( "(min-width: 1200px)" );

//Creates Global Dropdown String
drpDwn = ' role=\"button\" aria-haspopup=\"true\" ';
console.log(drpDwn);

//Detects Media Query Change
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1200px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

//Notifies Media Query Change
function WidthChange(mq) {
	if (mq.matches) {
	  console.log('window width is at least 1200px'); //Remove when done testing
	  //Changes Global Dropdown String to Non-Mobile Version
	  drpDwn = ' role=\"button\" aria-haspopup=\"true\" '; //Remove when done testing
	  console.log(drpDwn);
	} else {
	  console.log('window width is less than 1200px'); //Remove when done testing
	  //Changes Global Dropdown String to Mobile Version
	  drpDwn = ' class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" ';
	  console.log(drpDwn); //Remove when done testing
	}
}

//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST//TEST

//Function To Open Dropdown1 Page
$(document).on('dblclick', "#dropdown1", function(e){  
      console.log('test');
});

//Navbar Dropdown Render
//Dropdown1
document.write('					<li class="dropdown">');
document.write('	                    <a ' + drpDwn + ' > ' + dropdown1Name + ' <span class="caret"></span></a>');
document.write('					<ul class="dropdown-menu">');
var dropdown1Nameslen = dropdown1Names.length;
for (var i = 0; i < dropdown1Nameslen; i++) {
    var ddname = dropdown1Names[i];
	var ddlink = dropdown1Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                   </ul>');
document.write('                   </li>');

//Dropdown2
document.write('					<li class="dropdown">');
document.write('	                    <a role="button" aria-haspopup="true" href="Worship.html"> ' + dropdown2Name + ' <span class="caret"></span></a>');
document.write('					<ul class="dropdown-menu">');
var dropdown2Nameslen = dropdown2Names.length;
for (var i = 0; i < dropdown2Nameslen; i++) {
    var ddname = dropdown2Names[i];
	var ddlink = dropdown2Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');

//Dropdown3
document.write('					<li class="dropdown">');
document.write('	                    <a role="button" aria-haspopup="true" href="faithformation.html"> ' + dropdown3Name + ' <span class="caret"></span></a>');
document.write('					<ul class="dropdown-menu">');
var dropdown3Nameslen = dropdown3Names.length;
for (var i = 0; i < dropdown3Nameslen; i++) {
    var ddname = dropdown3Names[i];
	var ddlink = dropdown3Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');

//Dropdown4
document.write('					<li class="dropdown">');
document.write('	                    <a role="button" aria-haspopup="true" href="WhatWeDo.html"> ' + dropdown4Name + ' <span class="caret"></span></a>');
document.write('					<ul class="dropdown-menu">');
var dropdown4Nameslen = dropdown4Names.length;
for (var i = 0; i < dropdown4Nameslen; i++) {
    var ddname = dropdown4Names[i];
	var ddlink = dropdown4Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');

//Dropdown5
document.write('					<li class="dropdown">');
document.write('	                    <a role="button" aria-haspopup="true" href="Contact.html"> ' + dropdown5Name + ' <span class="caret"></span></a>');
document.write('					<ul class="dropdown-menu">');
var dropdown5Nameslen = dropdown5Names.length;
for (var i = 0; i < dropdown5Nameslen; i++) {
    var ddname = dropdown5Names[i];
	var ddlink = dropdown5Links[i];
    document.write('<li><a href="' + ddlink + '">' + ddname + '</a></li>');
}
document.write('                </ul>');
document.write('              </li>');

//Navbar Dropdown Render End Tags
document.write('                </ul>');
document.write('              </li>');
document.write('            </ul>');

//Social Media
document.write('					<div class="socialmediabig">');
document.write('						<ul class="nav navbar-nav navbar-right">');
document.write('							<li><a href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/facebook.svg" class="socialMedia" > </a></li>');
document.write('							<li><a href="https://www.twitter.com/GoBoldlyLCPC"><img src="Image/icon/twitter.svg" class="socialMedia"></a></li>');
document.write('							<li><a href="https://www.facebook.com/pages/Lyndhurst-Community-Presbyterian-Church/157862024230469"><img src="Image/icon/instagram.svg" class="socialMedia"></a></li>');
document.write('						</ul>');
document.write('					</div>');

//Navbar End Tags
document.write('				</div>');
document.write('			</div>');
document.write('		</nav>'); 