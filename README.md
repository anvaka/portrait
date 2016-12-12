# [Portrait](https://anvaka.github.io/portrait/)

I took this picture of Mark Twain:

![mark twain](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twain_small.png)

Pixelated it into this:

![mark twain pixelated](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twain_cloud.png)

When you zoom closer you will see quotes from Mark Twain:

![mark twain twist](https://raw.githubusercontent.com/anvaka/portrait/master/docs/mark_twist.gif)

Explore it live here: https://anvaka.github.io/portrait/

# Map Navigation

You can explore the portrait the same way you would explore Google Maps. Most
of the keyboard/mouse/touch shortcuts should be familiar:

* `+`/`-`, `Mouse wheel`/`Pinch`, `Single click`, `Double tap` - Zoom in/out
* `Left arrow` - Move left
* `Right arrow` - Move right
* `Up arrow` - Move up
* `Down arrow` - Move down
* `Mini map click` - Reset zoom

## Tidbits

* The page address updates as you explore the map. So if you send link to
someone - they will see what you see.
* To fully zoom out - click on the mini-map portrait
* When fully zoomed out - help text appears


# How does this work?

I wrote down more than 200 Mark Twain's quotes. Mostly quotes came from
[reddit](https://www.reddit.com/r/QuotesPorn/search?q=mark+twain&restrict_sr=on&sort=relevance&t=all)
and [good reads](https://www.goodreads.com/author/quotes/1244.Mark_Twain).

Then I sorted them according to their popularity (e.g. by number of votes on reddit,
or likes on good reads), and dropped them onto canvas.

Once I got the canvas, I saved it into high-resolution png file (8,000 x 8,000 pixels).

* I used [OpenSeadragon](https://openseadragon.github.io) to have pan and zoom support.
* When URL changes, I update query string, so that you can share favorite quotes.
The query string state is managed by [query-state](https://github.com/anvaka/query-state)

### The canvas algorithm

The canvas algorithm works by randomly traversing empty space of the mask,
trying to find a rectangle that will fit required box. This bit of the code is
not yet available since it requires good amount of hand-tuning. However if
you'd like to play with ready-to-use code, I can highly recommend [amueller/word_cloud](https://github.com/amueller/word_cloud)
Python package.

# Have an advice?

If you'd like to explore other portraits in a similar way or have a suggestion
how to make this better, please reach out to me:

* Open issue here: https://github.com/anvaka/portrait/issues
* Email to me: anvaka@gmail.com
* Tweet to me: https://twitter.com/anvaka


# Enjoy!

That's it! Hope you enjoy exploring Mark Twain's wisdom in a new, artistic way!
