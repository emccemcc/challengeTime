$(function() {
var blogPosts = [
    {
        "title":"Balanced dedicated ability",
        "author":"Todd Smith",
        "content":"<p>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.</p><p>Sed ante. Vivamus tortor. Duis mattis egestas metus.</p><p>Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.</p>",
        "date":"2/11/2016",
        "tags": [ "Work", "Food" ]
    }, {
        "title":"Distributed dedicated product",
        "author":"Johnny Lee",
        "content":"<p>Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.</p><p>In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.</p><p>Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.</p>",
        "date":"5/7/2016",
        "tags": [ "Work", "Education", "Sports" ]
    }, {
        "title":"Seamless content-based complexity",
        "author":"Michelle Gilbert",
        "content":"<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.</p>",
        "date":"9/15/2016",
        "tags": [ "Food" ]
    }, {
        "title":"Mandatory homogeneous collaboration",
        "author":"Tina Reed",
        "content":"<p>Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p><p>Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.</p>",
        "date":"11/11/2016",
        "tags": [ "TV", "Food", "Work", "Education" ]
    }
];

//for each variable, it pulls then append bloPosts[i].title


//for (var i = 0; i < blogPosts.length; i++){
  //var temp = blogPosts[i];
  //$('<p>').text(""+blogPosts[i].title+"");
    //blogPosts[i].author,
  //  blogPosts[i].content,
  //  blogPosts[i].date,
  //  blogPosts[i].tags)
//};

blogPosts.forEach(function(temp) {

  var $header = $('<h3>').text(temp.title);
  var $paragraph = $('<p>').addClass("details")
  var $author = $('<span>').addClass("author").text(temp.author);
  var $date = $('<span>').addClass("date").text(" "+temp.date);
  var $div = $('<div>').addClass("content");
  var $content =$('<p>').html(temp.content);
  var $unorderList = $('<ul>').addClass("tags");
  var $listItems = $('<li>').text(temp.tags);
  //$('<p>').append($("<p>"));

$('body').append($header)
      .append($paragraph.append($author).append($date))
      .append($div.append($content))
      //come back to see why html
      .append($unorderList.append($listItems))
    ;
    //need to do a foreach for these forEach at end?
});


/* TODO start here. Use a loop and jQuery to add all the blog posts to the body.
   The resulting HTML should look something like this for each blog post...
  <section class="post">
    <h3>Balanced dedicated ability</h3>
    <p class="details">
        <span class="author">Todd Smith</span>
        <span class="date">2/11/2016</span>
    </p>
    <div class="content">
        <p>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.
        Suspendisse accumsan tortor quis turpis.</p><p>Sed ante. Vivamus tortor.
        Duis mattis egestas metus.</p><p>Aenean fermentum. Donec ut mauris eget
        massa tempor convallis. Nulla neque libero, convallis eget, eleifend
        luctus, ultricies eu, nibh.</p>
    </div>
    <ul class="tags">
        <li>Work</li>
        <li>Food</li>
    </ul>
  </section>
 */




});
