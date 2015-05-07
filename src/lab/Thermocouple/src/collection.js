THERMOCOUPLE.collection = (function() {
	var staticCollection = Backbone.Collection.extend({
		
				 
		model: THERMOCOUPLE.model.staticModel
	});
	
	var dynamicCollection = Backbone.Collection.extend({
		
		model: THERMOCOUPLE.model.dynamicModel
	});
	
	return{
		staticCollection : staticCollection,
		dynamicCollection : dynamicCollection
	}
})();
