[# Portrait](https://anvaka.github.io/portrait/)

I took this picture of Mark Twain:

![mark twain](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twain_small.png)

Pixelated it into this:

![mark twain pixelated](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twain_cloud.png)

When you zoom closer you will see quotes from Mark Twain:

![mark twain twist](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twist.gif)

Explore it live here: https://anvaka.github.io/portrait/

# Have an advice?

If you'd like to explore other portraits in a similar way or have a suggestion
how to make this better, please reach out to me:

* open issue here: https://github.com/anvaka/portrait/issues 
* email to me (anvaka@gmail.com)
* Tweet to me: https://twitter.com/anvaka

## How does this work?

I wrote down more than 200 Mark Twain's quotes. Mostly quotes came from
[reddit](https://www.reddit.com/r/QuotesPorn/search?q=mark+twain&restrict_sr=on&sort=relevance&t=all)
and [good reads](https://www.goodreads.com/author/quotes/1244.Mark_Twain).

Then I sorted them according to their popularity (e.g. by number of votes on reddit,
or likes on good reads), and dropped them onto canvas.

Once I got the canvas, I saved it into high-resolution png file (8,000 x 8,000 pixels).

* I used [OpenSeadragon](https://openseadragon.github.io) to have pan and zoom support.
* When URL changes, I update query string, so that you can share favorite quotes.
The query string state is managed by [query-state](https://github.com/anvaka/query-state)

# Enjoy!

That's it! Hope you enjoy exploring Mark Twain's wisdom in a new, artistic way!
