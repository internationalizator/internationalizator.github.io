function Properties(){

	var language;
	var originalKeys;

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

	function translateTo(language){

	}

	function printKeys(){
		for (var key in originalKeys) {
    		console.log(originalKeys[key]);
		}
	}
}