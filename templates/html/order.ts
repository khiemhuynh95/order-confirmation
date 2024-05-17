export const orderTemplate = `<!DOCTYPE html>
<!-- Created by pdf2htmlEX (https://github.com/coolwanglu/pdf2htmlex) -->
<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

      <style>
         
#sidebar {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 250px;
	padding: 0;
	margin: 0;
	overflow: auto
}

#page-container {
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	border: 0
}

@media screen {
	#sidebar.opened+#page-container {
		left: 250px
	}

	#page-container {
		bottom: 0;
		right: 0;
		overflow: auto
	}

	.loading-indicator {
		display: none
	}

	.loading-indicator.active {
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		top: 50%;
		left: 50%;
		margin-top: -32px;
		margin-left: -32px
	}

	.loading-indicator img {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0
	}
}

@media print {
	@page {
		margin: 0
	}

	html {
		margin: 0
	}

	body {
		margin: 0;
		-webkit-print-color-adjust: exact
	}

	#sidebar {
		display: none
	}

	#page-container {
		width: auto;
		height: auto;
		overflow: visible;
		background-color: transparent
	}

	.d {
		display: none
	}
}

.pf {
	position: relative;
	background-color: white;
	overflow: hidden;
	margin: 0;
	border: 0
}

.pc {
	position: absolute;
	border: 0;
	padding: 0;
	margin: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	display: block;
	transform-origin: 0 0;
	-ms-transform-origin: 0 0;
	-webkit-transform-origin: 0 0
}

.pc.opened {
	display: block
}

.bf {
	position: absolute;
	border: 0;
	margin: 0;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none
}

.bi {
	position: absolute;
	border: 0;
	margin: 0;
	-ms-user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	user-select: none
}

@media print {
	.pf {
		margin: 0;
		box-shadow: none;
		page-break-after: always;
		page-break-inside: avoid
	}

	@-moz-document url-prefix() {
		.pf {
			overflow: visible;
			border: 1px solid #fff
		}

		.pc {
			overflow: visible
		}
	}
}

.c {
	position: absolute;
	border: 0;
	padding: 0;
	margin: 0;
	overflow: hidden;
	display: block
}

.t {
	position: absolute;
	white-space: pre;
	font-size: 1px;
	transform-origin: 0 100%;
	-ms-transform-origin: 0 100%;
	-webkit-transform-origin: 0 100%;
	unicode-bidi: bidi-override;
	-moz-font-feature-settings: "liga" 0
}

.t:after {
	content: ''
}

.t:before {
	content: '';
	display: inline-block
}

.t span {
	position: relative;
	unicode-bidi: bidi-override
}

._ {
	display: inline-block;
	color: transparent;
	z-index: -1
}

::selection {
	background: rgba(127, 255, 255, 0.4)
}

::-moz-selection {
	background: rgba(127, 255, 255, 0.4)
}

.pi {
	display: none
}

.d {
	position: absolute;
	transform-origin: 0 100%;
	-ms-transform-origin: 0 100%;
	-webkit-transform-origin: 0 100%
}

.it {
	border: 0;
	background-color: rgba(255, 255, 255, 0.0)
}

.ir:hover {
	cursor: pointer
}

@keyframes fadein {
	from {
		opacity: 0
	}

	to {
		opacity: 1
	}
}

@-webkit-keyframes fadein {
	from {
		opacity: 0
	}

	to {
		opacity: 1
	}
}

@keyframes swing {
	0 {
		transform: rotate(0)
	}

	10% {
		transform: rotate(0)
	}

	90% {
		transform: rotate(720deg)
	}

	100% {
		transform: rotate(720deg)
	}
}

@-webkit-keyframes swing {
	0 {
		-webkit-transform: rotate(0)
	}

	10% {
		-webkit-transform: rotate(0)
	}

	90% {
		-webkit-transform: rotate(720deg)
	}

	100% {
		-webkit-transform: rotate(720deg)
	}
}

@media screen {
	#sidebar {
		background-color: #2f3236;
		background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")
	}

	#outline {
		font-family: Georgia, Times, "Times New Roman", serif;
		font-size: 13px;
		margin: 2em 1em
	}

	#outline ul {
		padding: 0
	}

	#outline li {
		list-style-type: none;
		margin: 1em 0
	}

	#outline li>ul {
		margin-left: 1em
	}

	#outline a,
	#outline a:visited,
	#outline a:hover,
	#outline a:active {
		line-height: 1.2;
		color: #e8e8e8;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-decoration: none;
		display: block;
		overflow: hidden;
		outline: 0
	}

	#outline a:hover {
		color: #0cf
	}

	#page-container {
		background-color: #9e9e9e;
		background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
		-webkit-transition: left 500ms;
		transition: left 500ms
	}

	.pf {
		margin: 13px auto;
		box-shadow: 1px 1px 3px 1px #333;
		border-collapse: separate
	}

	.pc.opened {
		-webkit-animation: fadein 100ms;
		animation: fadein 100ms
	}

	.loading-indicator.active {
		-webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
		animation: swing 1.5s ease-in-out .01s infinite alternate none
	}

	.checked {
		background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)
	}
}
.ff0{font-family:sans-serif;visibility:hidden;}
@font-face{font-family:ff1;src:url(f1.woff)format("woff");}.ff1{font-family:ff1;line-height:0.938965;font-style:normal;font-weight:normal;visibility:visible;}
@font-face{font-family:ff2;src:url(f2.woff)format("woff");}.ff2{font-family:ff2;line-height:1.453125;font-style:normal;font-weight:normal;visibility:visible;}
@font-face{font-family:ff3;src:url(f3.woff)format("woff");}.ff3{font-family:ff3;line-height:0.992188;font-style:normal;font-weight:normal;visibility:visible;}
@font-face{font-family:ff4;src:url(f4.woff)format("woff");}.ff4{font-family:ff4;line-height:0.983887;font-style:normal;font-weight:normal;visibility:visible;}
.m0{transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-ms-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);-webkit-transform:matrix(0.250000,0.000000,0.000000,0.250000,0,0);}
.m1{transform:none;-ms-transform:none;-webkit-transform:none;}
.v0{vertical-align:0.000000px;}
.ls2a{letter-spacing:-1.733908px;}
.ls13{letter-spacing:-1.161800px;}
.ls45{letter-spacing:-1.093662px;}
.ls1b{letter-spacing:-0.981250px;}
.ls40{letter-spacing:-0.879200px;}
.ls11{letter-spacing:-0.875118px;}
.ls3b{letter-spacing:-0.873862px;}
.ls44{letter-spacing:-0.871036px;}
.lsf{letter-spacing:-0.727538px;}
.ls36{letter-spacing:-0.706186px;}
.ls1e{letter-spacing:-0.699592px;}
.ls15{letter-spacing:-0.699278px;}
.lsc{letter-spacing:-0.644727px;}
.lsb{letter-spacing:-0.632996px;}
.ls3d{letter-spacing:-0.584354px;}
.ls1c{letter-spacing:-0.563002px;}
.ls26{letter-spacing:-0.545732px;}
.ls3a{letter-spacing:-0.512134px;}
.ls22{letter-spacing:-0.439600px;}
.ls3e{letter-spacing:-0.417620px;}
.ls2b{letter-spacing:-0.388104px;}
.lsd{letter-spacing:-0.292962px;}
.ls3c{letter-spacing:-0.265958px;}
.ls35{letter-spacing:-0.259364px;}
.ls50{letter-spacing:-0.160140px;}
.ls56{letter-spacing:-0.129996px;}
.ls12{letter-spacing:-0.122460px;}
.ls23{letter-spacing:-0.107702px;}
.ls21{letter-spacing:-0.094828px;}
.ls20{letter-spacing:-0.081954px;}
.ls47{letter-spacing:-0.048356px;}
.ls2f{letter-spacing:-0.035796px;}
.ls43{letter-spacing:-0.030458px;}
.ls10{letter-spacing:-0.025748px;}
.ls46{letter-spacing:-0.022294px;}
.ls30{letter-spacing:-0.010362px;}
.ls1a{letter-spacing:-0.007222px;}
.ls27{letter-spacing:-0.006908px;}
.ls8{letter-spacing:0.000000px;}
.ls32{letter-spacing:0.010362px;}
.ls42{letter-spacing:0.023550px;}
.ls4c{letter-spacing:0.037994px;}
.ls58{letter-spacing:0.039564px;}
.ls59{letter-spacing:0.043646px;}
.ls55{letter-spacing:0.044274px;}
.lsa{letter-spacing:0.057813px;}
.ls3{letter-spacing:0.104700px;}
.ls49{letter-spacing:0.121204px;}
.ls4b{letter-spacing:0.124344px;}
.ls4e{letter-spacing:0.136276px;}
.ls4f{letter-spacing:0.143812px;}
.ls17{letter-spacing:0.146010px;}
.ls4a{letter-spacing:0.157314px;}
.ls48{letter-spacing:0.163908px;}
.ls4d{letter-spacing:0.166420px;}
.ls25{letter-spacing:0.169560px;}
.ls51{letter-spacing:0.202530px;}
.ls54{letter-spacing:0.221684px;}
.ls52{letter-spacing:0.230162px;}
.ls16{letter-spacing:0.232046px;}
.ls39{letter-spacing:0.237384px;}
.ls31{letter-spacing:0.239896px;}
.ls2d{letter-spacing:0.242094px;}
.ls19{letter-spacing:0.250258px;}
.ls9{letter-spacing:0.251001px;}
.ls2e{letter-spacing:0.277262px;}
.ls28{letter-spacing:0.279146px;}
.ls53{letter-spacing:0.283542px;}
.ls41{letter-spacing:0.310860px;}
.ls18{letter-spacing:0.311174px;}
.ls38{letter-spacing:0.323106px;}
.ls1d{letter-spacing:0.391244px;}
.lse{letter-spacing:0.422016px;}
.ls3f{letter-spacing:0.431750px;}
.ls1{letter-spacing:0.435971px;}
.ls57{letter-spacing:0.445880px;}
.ls1f{letter-spacing:0.462836px;}
.ls24{letter-spacing:0.484502px;}
.ls2c{letter-spacing:0.509308px;}
.ls14{letter-spacing:0.510878px;}
.ls7{letter-spacing:0.522662px;}
.ls37{letter-spacing:0.574620px;}
.ls5{letter-spacing:0.596790px;}
.ls29{letter-spacing:0.622662px;}
.ls33{letter-spacing:0.646840px;}
.ls34{letter-spacing:0.858162px;}
.ls5a{letter-spacing:0.865384px;}
.ls0{letter-spacing:3.258264px;}
.ls6{letter-spacing:3.334904px;}
.ls4{letter-spacing:3.538860px;}
.ls2{letter-spacing:4.257940px;}
.sc_{text-shadow:none;}
.sc0{text-shadow:-0.015em 0 transparent,0 0.015em transparent,0.015em 0 transparent,0 -0.015em  transparent;}
@media screen and (-webkit-min-device-pixel-ratio:0){
.sc_{-webkit-text-stroke:0px transparent;}
.sc0{-webkit-text-stroke:0.015em transparent;text-shadow:none;}
}
.ws0{word-spacing:0.000000px;}
._13{width:29.446216px;}
._2{width:31.525008px;}
._14{width:36.830314px;}
._0{width:41.932500px;}
._e{width:76.246546px;}
._4{width:91.724380px;}
._10{width:107.423124px;}
._6{width:112.639686px;}
._3{width:117.872496px;}
._8{width:154.522810px;}
._12{width:157.140000px;}
._c{width:162.600000px;}
._d{width:165.214050px;}
._11{width:175.456248px;}
._7{width:219.923438px;}
._a{width:230.390000px;}
._5{width:301.284380px;}
._9{width:429.500000px;}
._b{width:466.030000px;}
._1{width:570.800000px;}
._f{width:625.750000px;}
.fc4{color:rgb(82,82,82);}
.fc0{color:rgb(0,0,0);}
.fc1{color:rgb(0,0,255);}
.fc5{color:rgb(84,166,28);}
.fc2{color:rgb(102,102,102);}
.fc3{color:rgb(51,51,51);}
.fs2{font-size:27.920000px;}
.fs5{font-size:31.400000px;}
.fs1{font-size:40.000000px;}
.fs0{font-size:41.880000px;}
.fs4{font-size:48.880000px;}
.fs3{font-size:62.840000px;}
.y0{bottom:0.000000px;}
.y4{bottom:3.270000px;}
.ya{bottom:19.200000px;}
.y1{bottom:25.250000px;}
.y45{bottom:50.280000px;}
.y44{bottom:58.790000px;}
.y43{bottom:74.500000px;}
.y42{bottom:83.000000px;}
.y41{bottom:91.510000px;}
.y40{bottom:100.020000px;}
.y3f{bottom:108.530000px;}
.y3e{bottom:120.310000px;}
.y3d{bottom:128.820000px;}
.y3c{bottom:137.330000px;}
.y3b{bottom:145.840000px;}
.y3a{bottom:154.350000px;}
.y39{bottom:162.860000px;}
.y38{bottom:171.370000px;}
.y37{bottom:179.880000px;}
.y36{bottom:188.390000px;}
.y35{bottom:196.900000px;}
.y34{bottom:208.020000px;}
.y33{bottom:245.990000px;}
.y32{bottom:259.080000px;}
.y31{bottom:271.510000px;}
.y30{bottom:283.950000px;}
.y2f{bottom:296.390000px;}
.y2e{bottom:308.820000px;}
.y2d{bottom:321.260000px;}
.y2c{bottom:333.700000px;}
.y2b{bottom:346.130000px;}
.y2a{bottom:361.190000px;}
.y29{bottom:372.310000px;}
.y28{bottom:383.440000px;}
.y27{bottom:406.350000px;}
.y26{bottom:417.480000px;}
.y25{bottom:428.600000px;}
.y24{bottom:439.730000px;}
.y23{bottom:450.860000px;}
.y22{bottom:461.990000px;}
.y21{bottom:473.110000px;}
.y20{bottom:484.240000px;}
.y1f{bottom:495.370000px;}
.y1e{bottom:506.500000px;}
.y1d{bottom:517.620000px;}
.y1c{bottom:527.440000px;}
.y1b{bottom:538.570000px;}
.y1a{bottom:555.590000px;}
.y19{bottom:566.710000px;}
.y18{bottom:587.000000px;}
.y17{bottom:598.130000px;}
.y16{bottom:609.260000px;}
.y15{bottom:620.390000px;}
.y14{bottom:631.510000px;}
.y13{bottom:642.640000px;}
.y12{bottom:665.550000px;}
.y11{bottom:676.680000px;}
.y10{bottom:687.800000px;}
.yf{bottom:698.930000px;}
.ye{bottom:721.840000px;}
.yd{bottom:733.620000px;}
.yc{bottom:756.530000px;}
.y8{bottom:758.870000px;}
.y7{bottom:773.270000px;}
.y2{bottom:776.820000px;}
.yb{bottom:781.400000px;}
.y6{bottom:784.400000px;}
.y5{bottom:787.670000px;}
.y3{bottom:798.800000px;}
.y9{bottom:822.800000px;}
.h3{height:14.400000px;}
.h5{height:21.826133px;}
.h8{height:24.285937px;}
.h9{height:24.546582px;}
.h2{height:30.530684px;}
.h7{height:37.805625px;}
.h4{height:41.367188px;}
.h6{height:48.602812px;}
.h1{height:791.250000px;}
.h0{height:842.000000px;}
.w3{width:471.930000px;}
.w4{width:532.500000px;}
.w2{width:546.000000px;}
.w1{width:595.000000px;}
.w0{width:596.000000px;}
.x0{left:0.000000px;}
.x1{left:25.500000px;}
.x2{left:28.830000px;}
.x9{left:30.750000px;}
.x6{left:41.240000px;}
.x5{left:56.290000px;}
.x4{left:67.420000px;}
.xa{left:68.740000px;}
.xb{left:71.360000px;}
.xd{left:75.290000px;}
.x3{left:96.220000px;}
.xc{left:267.720000px;}
.x8{left:275.000000px;}
.x7{left:283.000000px;}
@media print{
.v0{vertical-align:0.000000pt;}
.ls2a{letter-spacing:-2.311877pt;}
.ls13{letter-spacing:-1.549067pt;}
.ls45{letter-spacing:-1.458216pt;}
.ls1b{letter-spacing:-1.308333pt;}
.ls40{letter-spacing:-1.172267pt;}
.ls11{letter-spacing:-1.166824pt;}
.ls3b{letter-spacing:-1.165149pt;}
.ls44{letter-spacing:-1.161381pt;}
.lsf{letter-spacing:-0.970051pt;}
.ls36{letter-spacing:-0.941581pt;}
.ls1e{letter-spacing:-0.932789pt;}
.ls15{letter-spacing:-0.932371pt;}
.lsc{letter-spacing:-0.859636pt;}
.lsb{letter-spacing:-0.843995pt;}
.ls3d{letter-spacing:-0.779139pt;}
.ls1c{letter-spacing:-0.750669pt;}
.ls26{letter-spacing:-0.727643pt;}
.ls3a{letter-spacing:-0.682845pt;}
.ls22{letter-spacing:-0.586133pt;}
.ls3e{letter-spacing:-0.556827pt;}
.ls2b{letter-spacing:-0.517472pt;}
.lsd{letter-spacing:-0.390616pt;}
.ls3c{letter-spacing:-0.354611pt;}
.ls35{letter-spacing:-0.345819pt;}
.ls50{letter-spacing:-0.213520pt;}
.ls56{letter-spacing:-0.173328pt;}
.ls12{letter-spacing:-0.163280pt;}
.ls23{letter-spacing:-0.143603pt;}
.ls21{letter-spacing:-0.126437pt;}
.ls20{letter-spacing:-0.109272pt;}
.ls47{letter-spacing:-0.064475pt;}
.ls2f{letter-spacing:-0.047728pt;}
.ls43{letter-spacing:-0.040611pt;}
.ls10{letter-spacing:-0.034331pt;}
.ls46{letter-spacing:-0.029725pt;}
.ls30{letter-spacing:-0.013816pt;}
.ls1a{letter-spacing:-0.009629pt;}
.ls27{letter-spacing:-0.009211pt;}
.ls8{letter-spacing:0.000000pt;}
.ls32{letter-spacing:0.013816pt;}
.ls42{letter-spacing:0.031400pt;}
.ls4c{letter-spacing:0.050659pt;}
.ls58{letter-spacing:0.052752pt;}
.ls59{letter-spacing:0.058195pt;}
.ls55{letter-spacing:0.059032pt;}
.lsa{letter-spacing:0.077084pt;}
.ls3{letter-spacing:0.139600pt;}
.ls49{letter-spacing:0.161605pt;}
.ls4b{letter-spacing:0.165792pt;}
.ls4e{letter-spacing:0.181701pt;}
.ls4f{letter-spacing:0.191749pt;}
.ls17{letter-spacing:0.194680pt;}
.ls4a{letter-spacing:0.209752pt;}
.ls48{letter-spacing:0.218544pt;}
.ls4d{letter-spacing:0.221893pt;}
.ls25{letter-spacing:0.226080pt;}
.ls51{letter-spacing:0.270040pt;}
.ls54{letter-spacing:0.295579pt;}
.ls52{letter-spacing:0.306883pt;}
.ls16{letter-spacing:0.309395pt;}
.ls39{letter-spacing:0.316512pt;}
.ls31{letter-spacing:0.319861pt;}
.ls2d{letter-spacing:0.322792pt;}
.ls19{letter-spacing:0.333677pt;}
.ls9{letter-spacing:0.334668pt;}
.ls2e{letter-spacing:0.369683pt;}
.ls28{letter-spacing:0.372195pt;}
.ls53{letter-spacing:0.378056pt;}
.ls41{letter-spacing:0.414480pt;}
.ls18{letter-spacing:0.414899pt;}
.ls38{letter-spacing:0.430808pt;}
.ls1d{letter-spacing:0.521659pt;}
.lse{letter-spacing:0.562688pt;}
.ls3f{letter-spacing:0.575667pt;}
.ls1{letter-spacing:0.581294pt;}
.ls57{letter-spacing:0.594507pt;}
.ls1f{letter-spacing:0.617115pt;}
.ls24{letter-spacing:0.646003pt;}
.ls2c{letter-spacing:0.679077pt;}
.ls14{letter-spacing:0.681171pt;}
.ls7{letter-spacing:0.696883pt;}
.ls37{letter-spacing:0.766160pt;}
.ls5{letter-spacing:0.795720pt;}
.ls29{letter-spacing:0.830216pt;}
.ls33{letter-spacing:0.862453pt;}
.ls34{letter-spacing:1.144216pt;}
.ls5a{letter-spacing:1.153845pt;}
.ls0{letter-spacing:4.344352pt;}
.ls6{letter-spacing:4.446539pt;}
.ls4{letter-spacing:4.718480pt;}
.ls2{letter-spacing:5.677253pt;}
.ws0{word-spacing:0.000000pt;}
._13{width:39.261621pt;}
._2{width:42.033344pt;}
._14{width:49.107085pt;}
._0{width:55.910000pt;}
._e{width:101.662061pt;}
._4{width:122.299173pt;}
._10{width:143.230832pt;}
._6{width:150.186248pt;}
._3{width:157.163328pt;}
._8{width:206.030413pt;}
._12{width:209.520000pt;}
._c{width:216.800000pt;}
._d{width:220.285400pt;}
._11{width:233.941664pt;}
._7{width:293.231251pt;}
._a{width:307.186667pt;}
._5{width:401.712507pt;}
._9{width:572.666667pt;}
._b{width:621.373333pt;}
._1{width:761.066667pt;}
._f{width:834.333333pt;}
.fs2{font-size:37.226667pt;}
.fs5{font-size:41.866667pt;}
.fs1{font-size:53.333333pt;}
.fs0{font-size:55.840000pt;}
.fs4{font-size:65.173333pt;}
.fs3{font-size:83.786667pt;}
.y0{bottom:0.000000pt;}
.y4{bottom:4.360000pt;}
.ya{bottom:25.600000pt;}
.y1{bottom:33.666667pt;}
.y45{bottom:67.040000pt;}
.y44{bottom:78.386667pt;}
.y43{bottom:99.333333pt;}
.y42{bottom:110.666667pt;}
.y41{bottom:122.013333pt;}
.y40{bottom:133.360000pt;}
.y3f{bottom:144.706667pt;}
.y3e{bottom:160.413333pt;}
.y3d{bottom:171.760000pt;}
.y3c{bottom:183.106667pt;}
.y3b{bottom:194.453333pt;}
.y3a{bottom:205.800000pt;}
.y39{bottom:217.146667pt;}
.y38{bottom:228.493333pt;}
.y37{bottom:239.840000pt;}
.y36{bottom:251.186667pt;}
.y35{bottom:262.533333pt;}
.y34{bottom:277.360000pt;}
.y33{bottom:327.986667pt;}
.y32{bottom:345.440000pt;}
.y31{bottom:362.013333pt;}
.y30{bottom:378.600000pt;}
.y2f{bottom:395.186667pt;}
.y2e{bottom:411.760000pt;}
.y2d{bottom:428.346667pt;}
.y2c{bottom:444.933333pt;}
.y2b{bottom:461.506667pt;}
.y2a{bottom:481.586667pt;}
.y29{bottom:496.413333pt;}
.y28{bottom:511.253333pt;}
.y27{bottom:541.800000pt;}
.y26{bottom:556.640000pt;}
.y25{bottom:571.466667pt;}
.y24{bottom:586.306667pt;}
.y23{bottom:601.146667pt;}
.y22{bottom:615.986667pt;}
.y21{bottom:630.813333pt;}
.y20{bottom:645.653333pt;}
.y1f{bottom:660.493333pt;}
.y1e{bottom:675.333333pt;}
.y1d{bottom:690.160000pt;}
.y1c{bottom:703.253333pt;}
.y1b{bottom:718.093333pt;}
.y1a{bottom:740.786667pt;}
.y19{bottom:755.613333pt;}
.y18{bottom:782.666667pt;}
.y17{bottom:797.506667pt;}
.y16{bottom:812.346667pt;}
.y15{bottom:827.186667pt;}
.y14{bottom:842.013333pt;}
.y13{bottom:856.853333pt;}
.y12{bottom:887.400000pt;}
.y11{bottom:902.240000pt;}
.y10{bottom:917.066667pt;}
.yf{bottom:931.906667pt;}
.ye{bottom:962.453333pt;}
.yd{bottom:978.160000pt;}
.yc{bottom:1008.706667pt;}
.y8{bottom:1011.826667pt;}
.y7{bottom:1031.026667pt;}
.y2{bottom:1035.760000pt;}
.yb{bottom:1041.866667pt;}
.y6{bottom:1045.866667pt;}
.y5{bottom:1050.226667pt;}
.y3{bottom:1065.066667pt;}
.y9{bottom:1097.066667pt;}
.h3{height:19.200000pt;}
.h5{height:29.101510pt;}
.h8{height:32.381250pt;}
.h9{height:32.728776pt;}
.h2{height:40.707578pt;}
.h7{height:50.407500pt;}
.h4{height:55.156250pt;}
.h6{height:64.803750pt;}
.h1{height:1055.000000pt;}
.h0{height:1122.666667pt;}
.w3{width:629.240000pt;}
.w4{width:710.000000pt;}
.w2{width:728.000000pt;}
.w1{width:793.333333pt;}
.w0{width:794.666667pt;}
.x0{left:0.000000pt;}
.x1{left:34.000000pt;}
.x2{left:38.440000pt;}
.x9{left:41.000000pt;}
.x6{left:54.986667pt;}
.x5{left:75.053333pt;}
.x4{left:89.893333pt;}
.xa{left:91.653333pt;}
.xb{left:95.146667pt;}
.xd{left:100.386667pt;}
.x3{left:128.293333pt;}
.xc{left:356.960000pt;}
.x8{left:366.666667pt;}
.x7{left:377.333333pt;}
}

      </style>
      <title></title>
   </head>
   <body>
      <div id="sidebar">
         <div id="outline"></div>
      </div>
      <div id="page-container">
         <div id="pf2" class="pf w0 h0" data-page-no="2">
            <div class="pc pc2 w0 h0">
               <img class="bi x0 y0 w1 h0" alt="" src="bg2.png"/>
               <div class="c x9 y1 w4 h1">
                  <div class="t m0 x4 h5 yb ff3 fs2 fc2 sc0 ls9 ws0">You have received this email from bxj210016@utdallas.edu in response to your Order.</div>
                  <div class="t m0 xa h6 yc ff4 fs3 fc3 sc0 lsa ws0">Order Receipt</div>
                  <div class="t m0 xa h7 yd ff4 fs4 fc4 sc0 lsb ws0">Please present this receipt to the front desk, until your purchase has</div>
                  <div class="t m0 xa h7 ye ff4 fs4 fc4 sc0 lsc ws0">been fully activated on your comet card.</div>
                  <div class="t m0 xb h8 yf ff4 fs5 fc3 sc0 lsd ws0">Order:<span class="lse">972183</span></div>
                  <div class="t m0 xb h8 y10 ff4 fs5 fc3 sc0 lsf ws0">Store:<span class="ls10">University Recreation - Membership Services</span></div>
                  <div class="t m0 xb h8 y11 ff4 fs5 fc3 sc0 ls11 ws0">Date/Time:<span class="ls12">May 16, 2024 at 6:26:07 PM CDT</span></div>
                  <div class="t m0 xb h8 y12 ff4 fs5 fc3 sc0 ls13 ws0">Total:<span class="ls14">$8.00</span></div>
                  <div class="t m0 xb h8 y13 ff4 fs5 fc3 sc0 ls15 ws0">Billed To:</div>
                  <div class="t m0 xb h9 y14 ff3 fs5 fc3 sc0 ls16 ws0">{name}</div>
                  <div class="t m0 xb h9 y15 ff3 fs5 fc3 sc0 ls17 ws0">{address}</div>
                  <div class="t m0 xb h9 y16 ff3 fs5 fc3 sc0 ls18 ws0">Garland, TX</div>
                  <div class="t m0 xb h9 y17 ff3 fs5 fc3 sc0 ls19 ws0">75040-4655</div>
                  <div class="t m0 xb h9 y18 ff3 fs5 fc3 sc0 ls1a ws0">United States</div>
                  <div class="t m0 xc h8 y13 ff4 fs5 fc3 sc0 ls1b ws0">Ship To:</div>
                  <div class="t m0 xc h9 y14 ff3 fs5 fc3 sc0 ls16 ws0">{name}</div>
                  <div class="t m0 xc h9 y15 ff3 fs5 fc3 sc0 ls17 ws0">{address}</div>
                  <div class="t m0 xc h9 y16 ff3 fs5 fc3 sc0 ls18 ws0">Garland, TX</div>
                  <div class="t m0 xc h9 y17 ff3 fs5 fc3 sc0 ls19 ws0">75040-4655</div>
                  <div class="t m0 xc h9 y18 ff3 fs5 fc3 sc0 ls1a ws0">United States</div>
                  <div class="t m0 xa h8 y19 ff4 fs5 fc3 sc0 ls1c ws0">Contact Email:</div>
                  <div class="t m0 xa h9 y1a ff3 fs5 fc3 sc0 ls1d ws0">{email}</div>
                  <div class="t m0 x4 h8 y1b ff4 fs5 fc3 sc0 ls1e ws0">Payment Information:</div>
                  <div class="t m0 x4 h9 y1c ff3 fs5 fc3 sc0 ls1f ws0">Payment Type:<span class="ls20">Credit Card</span></div>
                  <div class="t m0 x4 h9 y1d ff3 fs5 fc3 sc0 ls21 ws0">Credit Card Number:<span class="ls22">xxxxxxxxxxxx2660</span></div>
                  <div class="t m0 x4 h9 y1e ff3 fs5 fc3 sc0 ls23 ws0">Reference Number:<span class="ls24">20240516000194</span></div>
                  <div class="t m0 x4 h9 y1f ff3 fs5 fc3 sc0 ls25 ws0">Card Type:<span class="ls26">Discover</span></div>
                  <div class="t m0 x4 h9 y20 ff3 fs5 fc3 sc0 ls27 ws0">Dev Info:<span class="ls28">XXXXXX316</span></div>
                  <div class="t m0 x4 h9 y21 ff3 fs5 fc3 sc0 ls29 ws0">Additional Amount:<span class="ls2a">---</span></div>
                  <div class="t m0 x4 h9 y22 ff3 fs5 fc3 sc0 ls2b ws0">Processor Transaction ID:<span class="ls2c">744118203689791</span></div>
                  <div class="t m0 x4 h9 y23 ff3 fs5 fc3 sc0 ls2d ws0">Approval Code:<span class="ls2e">01661P</span></div>
                  <div class="t m0 x4 h9 y24 ff3 fs5 fc3 sc0 ls2f ws0">Address Verification Result:<span class="ls30">Y</span></div>
                  <div class="t m0 x4 h9 y25 ff3 fs5 fc3 sc0 ls31 ws0">Security Code Validation Result:<span class="ls32">M</span></div>
                  <div class="t m0 x4 h9 y26 ff3 fs5 fc3 sc0 ls33 ws0">Validation Code:<span class="ls34">0000</span></div>
                  <div class="t m0 x4 h9 y27 ff3 fs5 fc3 sc0 ls35 ws0">*** Card Not Present ***</div>
                  <div class="t m0 x4 h8 y28 ff4 fs5 fc3 sc0 ls36 ws0">Shipping Information:</div>
                  <div class="t m0 x4 h9 y29 ff3 fs5 fc3 sc0 ls37 ws0">Shipping Information:<span class="lse">952385</span></div>
                  <div class="t m0 x4 h9 y2a ff3 fs5 fc3 sc0 ls38 ws0">Delivery Method:<span class="ls39">Electronic Payment</span></div>
                  <div class="t m0 xa h8 y2b ff4 fs5 fc3 sc0 ls22 ws0">Item<span class="_ _1"> </span><span class="ls3a">Stock Number<span class="_ _2"> </span><span class="ls3b">Quantity<span class="_ _3"> </span><span class="ls3c">Unit Price<span class="_ _4"> </span><span class="ls3d">Detail Total</span></span></span></span></div>
                  <div class="t m0 xa h9 y2c ff4 fs5 fc3 sc0 ls3e ws0">Non-Member Day Pass<span class="_ _5"> </span><span class="ff3 ls24">6044442<span class="_ _6"> </span><span class="ls34">1<span class="_ _7"> </span><span class="ls14">$8.00<span class="_ _8"> </span>$8.00</span></span></span></div>
                  <div class="t m0 xa h9 y2d ff3 fs5 fc3 sc0 ls3f ws0">Name:: {name}<span class="_ _9"> </span><span class="ls40"> <span class="_ _a"> </span> <span class="_ _b"> </span> </span></div>
                  <div class="t m0 xa h9 y2e ff3 fs5 fc3 sc0 ls41 ws0">Primary Phone: +1 469 267 4395<span class="_ _c"> </span><span class="ls40"> <span class="_ _a"> </span> <span class="_ _b"> </span> </span></div>
                  <div class="t m0 xa h9 y2f ff3 fs5 fc3 sc0 ls42 ws0">Emergency Contact: Nhu Nguyen<span class="_ _d"> </span><span class="ls40"> <span class="_ _a"> </span> <span class="_ _b"> </span> </span></div>
                  <div class="t m0 xa h9 y30 ff3 fs5 fc3 sc0 ls43 ws0">Address: {address} Garland TX<span class="_ _e"> </span><span class="ls40"> <span class="_ _a"> </span> <span class="_ _b"> </span> </span></div>
                  <div class="t m0 xa h8 y31 ff4 fs5 fc3 sc0 ls40 ws0"> <span class="_ _f"> </span> <span class="_ _a"> </span> <span class="_ _a"> </span><span class="ls44">Subtotal:<span class="_ _10"> </span><span class="ls14">$8.00</span></span></div>
                  <div class="t m0 xa h8 y32 ff4 fs5 fc3 sc0 ls40 ws0"> <span class="_ _f"> </span> <span class="_ _a"> </span> <span class="_ _a"> </span><span class="ls45">Tax:<span class="_ _11"> </span><span class="ls14">$0.00</span></span></div>
                  <div class="t m0 xa h8 y33 ff4 fs5 fc3 sc0 ls40 ws0"> <span class="_ _f"> </span> <span class="_ _a"> </span> <span class="_ _a"> </span><span class="ls13">Total:<span class="_ _12"> </span><span class="ls14">$8.00</span></span></div>
                  <div class="t m0 xd h8 y34 ff4 fs5 fc3 sc0 ls3d ws0">Return Policy Agreement:</div>
                  <div class="t m0 xd h9 y35 ff3 fs5 fc3 sc0 ls46 ws0">The University urges all users of the Student Activity Center, RCW and SPN to act in such a manner as to</div>
                  <div class="t m0 xd h9 y36 ff3 fs5 fc3 sc0 ls47 ws0">protect their own safety and the safety of others. The University further requires that all persons who</div>
                  <div class="t m0 xd h9 y37 ff3 fs5 fc3 sc0 ls48 ws0">participate in activities do so at their own risk and that each user sign the following agreement prior to use of</div>
                  <div class="t m0 xd h9 y38 ff3 fs5 fc3 sc0 ls49 ws0">the Student Activity Center, RCW and SPN &quot;I fully understand that my use of the Student Activity Center,</div>
                  <div class="t m0 xd h9 y39 ff3 fs5 fc3 sc0 ls4a ws0">RCW and SPN is purely voluntary. I desire to participate and agree to act in a reasonable and prudent</div>
                  <div class="t m0 xd h9 y3a ff3 fs5 fc3 sc0 ls4b ws0">manner. As a condition to my use of the Student Activity Center, RCW and SPN I waive and release the</div>
                  <div class="t m0 xd h9 y3b ff3 fs5 fc3 sc0 ls4c ws0">State of Texas, The University of Texas System, The University of Texas at Dallas and their officers,</div>
                  <div class="t m0 xd h9 y3c ff3 fs5 fc3 sc0 ls4d ws0">employees and agents from any claim that I may have for any damage to property or injury to my person</div>
                  <div class="t m0 xd h9 y3d ff3 fs5 fc3 sc0 ls4e ws0">that may result in whole or in part from my use of the Student Activity Center, RCW and SPN facilities. I</div>
                  <div class="t m0 xd h9 y3e ff3 fs5 fc3 sc0 ls4f ws0">understand the University does not expressly or impliedly require participation in these activities.&quot;</div>
                  <div class="t m0 xd h9 y3f ff4 fs5 fc3 sc0 ls50 ws0">Privacy Statement<span class="ff3 ls51"> With few exceptions, you are entitled on your request to be informed about the</span></div>
                  <div class="t m0 xd h9 y40 ff3 fs5 fc3 sc0 ls52 ws0">information U. T. Dallas collects about you. Under Sections 552.021 and 552.023 of the Texas Government</div>
                  <div class="t m0 xd h9 y41 ff3 fs5 fc3 sc0 ls53 ws0">Code, you are entitled to receive and review the information. Under Section 559.004 of the Texas</div>
                  <div class="t m0 xd h9 y42 ff3 fs5 fc3 sc0 ls54 ws0">Government Code, you are entitled to have U. T. Dallas correct information about you that is held by us and</div>
                  <div class="t m0 xd h9 y43 ff3 fs5 fc3 sc0 ls55 ws0">that is incorrect.</div>
                  <div class="t m0 xd h9 y44 ff3 fs5 fc3 sc0 ls56 ws0">For questions, comments, or Order status, send email to <span class="fc5 ls57">bxj210016@utdallas.edu<span class="_ _13"> </span></span><span class="ls58"> and refer to Order</span></div>
                  <div class="t m0 xd h9 y45 ff3 fs5 fc3 sc0 ls59 ws0">972183. Visit us <span class="fc5 ls5a">online<span class="_ _14"> </span></span><span class="ls40">.</span></div>
               </div>
               <a class="l" href="mailto:bxj210016@utdallas.edu">
                  <div class="d m1" style="border-style:none;position:absolute;left:302.000000px;bottom:84.000000px;width:89.000000px;height:8.000000px;background-color:rgba(255,255,255,0.000001);"></div>
               </a>
               <a class="l" href="https://ezpay.utdallas.edu:443/C20239_ustores/web/index.jsp">
                  <div class="d m1" style="border-style:none;position:absolute;left:164.000000px;bottom:75.000000px;width:22.000000px;height:9.000000px;background-color:rgba(255,255,255,0.000001);"></div>
               </a>
            </div>
            <div class="pi" data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
         </div>
      </div>
      <div class="loading-indicator">
      </div>
   </body>
</html>`;