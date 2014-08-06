$(document).ready(function(){

	showContent();

	var previousHash = window.location.hash;

	$( "#a" ).hover(
	  function() {
		$( this ).html("<a href=\"#a\">Aa</a>");
	  }, function() {
	    $( this ).html("<a href=\"#a\">A</a>");
	  }
	);

	$( "#b" ).hover(
	  function() {
		$( this ).html("<a href=\"#b\">Bb</a>");
	  }, function() {
	    $( this ).html("<a href=\"#b\">B</a>");
	  }
	);

	$( "#c" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">c</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#d" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">d</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#e" ).hover(
	  function() { if(window.location.hash != "#e"){$( this ).append( $( "<span class=\"white\">e</span>" ) );} }, function() { $( this ).find( "span:last" ).remove(); }
	);

	$( "#f" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">f</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#g" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">g</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#h" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">h</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#i" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">i</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#j" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">j</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#k" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">k</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#l" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">l</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#m" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">m</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#n" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">n</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#o" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">o</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#p" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">p</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#r" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">r</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#s" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">s</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#t" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">t</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#u" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">u</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#v" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">v</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#w" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">w</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#x" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">x</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

	$( "#z" ).hover(
	  function() {
	    $( this ).append( $( "<span class=\"white\">z</span>" ) );
	  }, function() {
	    $( this ).find( "span:last" ).remove();
	  }
	);

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
				fullName = "Jak żyć?"
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
			$('#a').html( "<div class=\"abcClick\"><div class=\"leftMenu\"><big class=\"aColor\">Aa</big></div> <div class=\"white rightMenu\">Akcyza</div></div>" );
		} else {
			$(hash).html( "<div class=\"abcClick\"><div class=\"leftMenu\"><big class=\""+newMenuLetter+"Color\">"+newMenuLetter.toUpperCase()+newMenuLetter+"</big></div> <div class=\"white rightMenu\">"+fullName+"</div></div>" );
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