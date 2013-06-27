beforeEach(function() {
	this.addMatchers({
		toEqualData : function(expected) {
			return angular.equals(this.actual, expected);
		}
	});
});

describe('FileListCtroller', function($http) {
	var scope, ctrl;

	beforeEach(function() {
		scope = {}, ctrl = new fileListController(scope, $http);
	});
	/* Case for checking the number of documents recieved */
	it('should fetch list of five documents', function() {
		expect(scope.documents.length).toBe(5);
	});

});
