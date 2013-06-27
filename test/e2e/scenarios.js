'use strict';

describe(
		'demo App',
		function() {

			it('should open index.html', function() {
				
				expect(browser().location().url()).toBe('/index');
			});

			describe(
					'Search view',
					function() {
						beforeEach(function() {
							browser()
									.navigateTo('../../app/index.html');
						});

						it('should filter the Data Details as user types into the search box',
								function() {
									expect(repeater('.filelist li').count())
											.toBe(5);

									input('query').enter('abc');
									expect(repeater('.filelist li').count())
											.toBe(2); 
								});

						it('should be possible to control Data order via the drop down select box',
								function() {
									input('query').enter('abc'); 
									expect(
											repeater('.filelist li',
													'File List').column(
													'document.docname'))
											.toEqual([ "abc.txt","abcdef.txt" ]);

									select('orderProp')
											.option('Document Title');
									
									expect(
											repeater('.filelist li',
													'File List').column(
													'document.docname'))
											.toEqual([ "abc.txt","abcdef.txt" ]);
								});

						it('should display Search details on the Right Pannel',
								function() {
									input('query').enter('ghi');
									element('.filelist li a').click();
									expect(
											element('iframe').attr(
													'src')).toBe(
											'http://192.168.112.216:8001/data/ghi.txt');
								});

						it('should display the selected file on the preview panel',
								function() {
									input('query').enter('abcdef');
									element('.filelist li a').click();
									expect(
											element('iframe').attr(
													'src')).toBe(
											'http://192.168.112.216:8001/data/abcdef.txt');
								});
						
					});
		});