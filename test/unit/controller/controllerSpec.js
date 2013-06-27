beforeEach(function() {
	this.addMatchers({
		toEqualData : function(expected) {
			return angular.equals(this.actual, expected);
		}
	});
});

beforeEach(module('demoApp'));

describe('FileListCtroller', function() {
	 var scope, ctrl;

	    beforeEach(inject(function($http, $rootScope, $controller) {
	    	  scope = $rootScope.$new();
	    	$scope.getdata()
	   

	    
	      ctrl = $controller(fileListController, {$scope: scope});
	    }));
	/* Case for checking the number of documents recieved */
	it('should fetch list of five documents', function() {
		var scope = {}, ctrl = new fileListController(scope);
		expect(scope.documents.length).toBe(5);
	});

	/* Case for checking orderProp Value */
	it('The default value of orderProp should be empty String',
			function(scope) {
				expect(scope.orderProp).toBe('');
			});

});
