//data storage
THERMOCOUPLE.model = (function() {
	var staticModel = Backbone.Model.extend({
			 
		defaults: {
				'thermoCoupleType':'',
				'refTemp':'',
				'staticGraphPts':[]
		},
		
		idAttribute: "key"
		
	});
	
	var dynamicModel = Backbone.Model.extend({
		
		defaults: {
				'bare':[] ,
				'withSheath':[]	,
				'thermowell':[]
		},
		
		idAttribute: "key"
	})
	
	return{
		staticModel : staticModel,
		dynamicModel : dynamicModel
	}
})();
