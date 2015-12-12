var FEED_URL = "https://news.google.com/news?cf=all&hl=en&pz=1&ned=us&topic=tc&output=rss";

var RSSItem = function RSSItem(title, author, content, description) {
    this.title = title;
    this.author = author;
    this.content = content;
    this.description = description;
};

var CNN_Tech_feed = [];

$.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
    dataType: 'json',
    success: function (data) {
        if (data.responseData.feed && data.responseData.feed.entries) {

            var continent = "";

            $.each(data.responseData.feed.entries, function (i, e) {
                console.log("------------------------");
                console.log("title      : " + e.title);
                console.log("link       : " + e.link);
                console.log("image      : " + e.image);
                console.log("author     : " + e.author);
                console.log("content    : " + e.content);
                console.log("description: " + e.description);


                continent += "<div>";
                continent += "<a href='" + e.link + "'><h1>" + e.title + "</h1></a>";
                continent += "<br><p>" + e.content + "</p>";
                continent += "</div>";
                CNN_Tech_feed.push(new RSSItem(e.title, e.author, e.content, e.description));
            });

            document.getElementById('carousel').innerHTML = continent;


            $('#carousel').slick({
                autoplay: true,
                arrows: false
            });
        }
    }


});