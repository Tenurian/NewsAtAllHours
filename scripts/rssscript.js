var FEED_URL = "http://rss.cnn.com/rss/edition.rss";

$.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
    dataType: 'json',
    success: function (data) {
        if (data.responseData.feed && data.responseData.feed.entries) {
            $.each(data.responseData.feed.entries, function (i, e) {
                console.log("------------------------");
                console.log("title      : " + e.title);
                console.log("author     : " + e.author);
                console.log("content    : " + e.content);
                console.log("description: " + e.description);
            });
        }
    }
});