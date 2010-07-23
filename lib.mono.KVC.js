//	lib.kvc.js
//	Evadne Wu at Iridia, 2010





if (mono === undefined) mono = {};





mono.valueForKeyPath = function (theObject, inKeyPath) {

	if (theObject === undefined) return undefined;

	var keyPathComponents = String(inKeyPath).split(".");
	
	if (theObject[keyPathComponents[0]] === undefined) return undefined;
	
	if (keyPathComponents.length > 1) {

		return mono.valueForKey(
		
			theObject[keyPathComponents[0]], 
			inKeyPath.substr(
			
				keyPathComponents[0].length + 1, 
				(inKeyPath.length - keyPathComponents[0].length - 1)
				
			)
			
		);
	
	}
	
	return theObject[keyPathComponents[0]];

}





mono.setValueForKeyPath = function (theObject, inKeyPath, newValue) {

	if (theObject === undefined) theObject = {};

	var keyPathComponents = String(inKeyPath).split(".");
	
	if (theObject[keyPathComponents[0]] === undefined)
	theObject[keyPathComponents[0]] = {};
	
	if (typeof theObject[keyPathComponents[0]] !== "object")
	if (keyPathComponents.length > 1)
	return mono.error("Could not set value of key path", inKeyPath, "because  an element, ", keyPathComponents[0], ", is not an object.");
	
	if (keyPathComponents.length > 1) {
	
		return mono.setValueForKey(
		
			theObject[keyPathComponents[0]], 
			inKeyPath.substr(
			
				keyPathComponents[0].length + 1, 
				(inKeyPath.length - keyPathComponents[0].length - 1)
				
			),
			newValue
			
		);
	
	}
	
	theObject[keyPathComponents[0]] = newValue;
	return true;

}




