let postTemplateString = document.getElementById('post-template').innerHTML; 
let renderPost = Handlebars.compile(postTemplateString); 


$('#test').on('submit', function(event){
    event.preventDefault(); 
    $('#results').html('Loading...');
    
    
    
     let url='https://www.reddit.com/r/' + $('#subreddit').val() + '.json';

let promise = $.ajax ({
    type: 'GET',
    url:  url
});


$.getJSON('https://www.reddit.com/r/' + $('#subreddit').val() + '.json').then(function(redditPosts){
    console.log(redditPosts); 
    let renderedPosts = renderPost({
        posts: redditPosts.data.children
    });
    $('#results').html(renderedPosts);
}, function() {
$('#results').html('Oops! Something went wrong');
 
});   
    
    
}); 
          