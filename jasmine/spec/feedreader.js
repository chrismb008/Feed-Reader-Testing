$(function() {

    /* This suite is all about the RSS feeds definitions, the allFeeds variable in our application.*/
    describe('RSS Feeds', function() {

        /* This test make sure that the allFeeds variable has been defined and that it is not empty.*/

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.*/

        it('urls are defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.*/

        it('names are defined', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });

    /* This suite is all about the Menu*/

    describe('Menu', function() {

        /* This test ensures the menu element is hidden by default.*/

        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures the menu changes visibility when the menu icon is clicked.*/

        it('menu changes visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* This suite is all about the first entries in our feed container*/

    describe('Initial Entries', function() {

        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        /* This test ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.*/

        it('there is at least one entry element', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* This suite is all about the new entries in our feed container*/

    describe('New Feed Selection', function() {
      var entriesFirst,
          entriesLast;

        beforeEach(function(done) {
          $('.feed').empty();
          loadFeed(0, function() {
            entriesFirst = $('.feed').html();
            loadFeed(1, function() {
              entriesLast = $('.feed').html();
              done();
            });
          });
        });

        /* This test ensures when a new feed is loaded by the loadFeed function the content actually changes.*/

        it('the content changes', function() {
            expect(entriesFirst).not.toBe(entriesLast);
        });
    });
}());
