$(document).ready(function(){

	showContent();

	var previousHash = window.location.hash;

	if(previousHash == "") {
		previousHash = "#a";
	}

	function showContent() {
		var hash = window.location.hash;
	    if(hash == "") {
	        $('#aContent').fadeIn();

	        menuFullNameShow();
	    } else {
	    	var hashConcatContent = hash + "Content";
			$(hashConcatContent).fadeIn();
			
			menuFullNameShow();
	    }
	};

	function menuFullNameShow() {
		var hash = window.location.hash;
		var newMenuLetter = hash.substring(1);
		var fullName;

		switch(hash) {
			case "#a":
				fullName = "Akcyza"
				break;
			case "#b":
				fullName = "Bezrobocie"
				break;
			case "#c":
				fullName = "Cynizm"
				break;
			case "#d":
				fullName = "Dyplomacja"
				break;
			case "#e":
				fullName = "Emigracja"
				break;
			case "#f":
				fullName = "Fiskus"
				break;
			case "#g":
				fullName = "Głód"
				break;
			case "#h":
				fullName = "Hazard"
				break;
			case "#i":
				fullName = "Inwigilacja"
				break;
			case "#j":
				fullName = "Jaka emerytura?"
				break;
			case "#k":
				fullName = "Karetki"
				break
			case "#l":
				fullName = "Leki"
				break;
			case "#m":
				fullName = "Marnotrawstwo"
				break;
			case "#n":
				fullName = "Niezależność NBP"
				break;
			case "#o":
				fullName = "OFE"
				break;
			case "#p":
				fullName = "Podatek dochodowy"
				break;
			case "#r":
				fullName = "Rodzina"
				break;
			case "#s":
				fullName = "Szofer"
				break;
			case "#t":
				fullName = "Taśmy"
				break;
			case "#u":
				fullName = "Urzędnicy"
				break;
			case "#v":
				fullName = "Podatek VAT"
				break;
			case "#w":
				fullName = "Wypłata"
				break;
			case "#x":
				fullName = "Wybory"
				break;
			case "#z":
				fullName = "Zdrowie"
				break;																																																
		}

		if(hash == "") {
			$('#a').html( "<div class=\"abcClick\"><div class=\"left\"><big class=\"aColor\">Aa</big></div> <div class=\"white right\">Akcyza</div></div>" );
		} else {
			$(hash).html( "<div class=\"abcClick\"><div class=\"left\"><big class=\""+newMenuLetter+"Color\">"+newMenuLetter.toUpperCase()+newMenuLetter+"</big></div> <div class=\"white right\">"+fullName+"</div></div>" );
		}
	}

	$(window).on('hashchange', function() {
		var hash = window.location.hash;
		var previousHashConcatContent = previousHash + "Content";
		var hashConcatContent = hash + "Content";
		var oldMenuLetter = previousHash.substring(1);

		$(previousHash).html("<a href=\"#"+oldMenuLetter+"\">"+oldMenuLetter.toUpperCase()+"</a>");
		menuFullNameShow();

		$(previousHashConcatContent).fadeOut(
			function() {
				$(hashConcatContent).fadeIn();
			});

		previousHash = window.location.hash;
	});
});