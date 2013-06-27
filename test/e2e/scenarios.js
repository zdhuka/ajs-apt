'use strict';
describe('Search App', function() {

  it('should redirect index.html to index.html#/Search', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/Search');
  });

    describe('Search view', function() {
    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/Search');
    });

	 it('should filter the Data Details as user types into the search box', function() {
      expect(repeater('.fileList li').count()).toBe(10);
	  
	 input('query').enter('News');
      expect(repeater('.fileList li').count()).toBe(1);
	 
	 input('query').enter('Reports');
      expect(repeater('.fileList li').count()).toBe(1);
	  
	 });
	 
	 
	  it('should be possible to control Data order via the drop down select box', function() {
      input('query').enter('Events'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.fileList li', 'File List').column('document.documentName')).
          toEqual(["Events"]);
		  
		  
	select('orderProp').option('Document Title');
/* Confusion with File List*/
      expect(repeater('.fileList li', 'File List').column('document.documentName')).
          toEqual(["Events"]);
    });

	it('should display Search details on the Right Pannel', function() {
      input('query').enter('Events');
      element('.fileList li a').click();
      expect(element('iframe.details').attr('src')).toBe('data/Events.txt');
    });
	
	it('should display Search details on the Right Pannel', function() {
      input('query').enter('News');
      element('.fileList li a').click();
      expect(element('iframe.details').attr('src')).toBe('data/News.txt');
    });
	it('should display Search details on the Right Pannel', function() {
      input('query').enter('Events');
      element('.fileList li a').click();
      expect(element('iframe.details').attr('src')).toBe('data/Events.txt');
    });
	
	
	
	
	
	
	
	
	
  });

	
	
	
	
