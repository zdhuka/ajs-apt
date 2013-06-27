describe('searchDocs controller', function() {
	beforeEach(function() {
		this.addMatchers({
			toEqualData : function(expected) {
				return angular.equals(this.actual, expected);
			}
		});
	});
	beforeEach(module('demoApp'))
	describe('fileListController', function() {
		var scope, ctrl;
		
		beforeEach(inject(function()))
		/* Case for checking the number of documents recieved */
		it('should fetch list of five documents', function() {
			var scope = {};
			ctrl = new fileListController(scope);
			expect(scope.documents.length).toBe(5);
		});

		/* Case for checking orderProp Value */
		it('The default value of orderProp should be empty String', function() {
			expect(scope.orderProp).toBe('');
		});

	});
});
