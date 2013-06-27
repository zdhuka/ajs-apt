'use strict';

describe(
		'demo App',
		function() {

			it('should open index.html', function() {
				
				expect(browser().location().url()).toBe('/index.html');
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
											.toBe(9);

									input('query').enter('News');
									expect(repeater('.filelist li').count())
											.toBe(1); 
								});

						it('should be possible to control Data order via the drop down select box',
								function() {
									input('query').enter('abc'); 
									expect(
											repeater('.filelist li',
													'File List').column(
													'document.documentName'))
											.toEqual([ "abc.txt" ]);

									select('orderProp')
											.option('Document Title');
									/* Confusion with File List */
									expect(
											repeater('.filelist li',
													'File List').column(
													'document.documentName'))
											.toEqual([ "Politics.txt" ]);
								});

						it('should display Search details on the Right Pannel',
								function() {
									input('query').enter('Sports');
									element('.filelist li a').click();
									expect(
											element('iframe.filePreview').attr(
													'src')).toBe(
											'data/Sports.txt');
								});

						it('should display Search details on the Right Pannel',
								function() {
									input('query').enter('News');
									element('.filelist li a').click();
									expect(
											element('iframe.filePreview').attr(
													'src')).toBe(
											'data/News.txt');
								});
						it('should display ShareMarket details on the Right Pannelwhen it is selected',
								function() {
									input('query').enter('ShareMarket');
									element('.filelist li a').click();
									expect(
											element('iframe.filePreview').attr(
													'src')).toBe(
											'data/ShareMarket.txt');
								});

					});
		});