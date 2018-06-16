$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('urls are defined', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url.lenght).not.toBe(0);
            });
        });

        it('names are defined', function() {
          allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
          });
        });
    });


    describe('Menu', function() {

        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('menu changes visibility', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    describe('Initial Entries', function() {

        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
        });

        it('there is at least one entry element', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

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

        it('the content changes', function() {
            expect(entriesFirst).not.toBe(entriesLast);
        });
    });
}());
