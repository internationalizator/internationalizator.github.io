function Properties(){

	var language = ""; //idioma nativo do arquivo original
	var originalKeys = {}; //chaves originais

	this.getLanguage = function(){
		return language;
	}

	this.setLanguage = function(language){
		this.language = language;
	}
	this.getOriginalKeys = function(){
		return originalKeys;
	}

	this.setOriginalKeys = function(originalKeys){
		this.originalKeys = originalKeys;
	}

	this.translateTo = function(languages){
		/*
			traduz chaves originais para cada idioma, ainda não funciona e o alert é só pra testar. Essa função deve retornar um array de objetos Properties, um para cada
			idioma, e o atributo language deve ser o idioma para qual o objeto foi traduzido, no caso do primeiro objeto é o idioma nativo. Exemplo:
			Objeto 1, utilizado para traduzir os outros, language = "pt"
			Objeto 2, traduzido de 1, language = "en"
			...
			Para cada objeto originalKey deve contar as chaves originais porém TRADUZIDAS.
		*/
		var toReturn = {};
		google.load("language",1);
		for(var k in languages){
			for(var key in this.originalKeys){
			google.language.translate(this.originalKeys[key],this.language,languages[k],function(){
				if(result.translation){
					alert(result.translation);
				}
			});
		}
		}
		return toReturn;
	}

	Object.size = function(obj){ // um utilitário para obter o length de um array associativo
	    var size = 0, key;
	    for(key in obj){
	        if (obj.hasOwnProperty(key)) size++;
	    }
    	return size;
	};
}