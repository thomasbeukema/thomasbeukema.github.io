AUTHOR = "Thomas Beukema"
SITENAME = "thomasbeukema.me"
SITEURL = ""

PATH = "content"

TIMEZONE = "Europe/Rome"

DEFAULT_LANG = "en"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("You can add links in your config file", "#"),
    ("Another social link", "#"),
)

DEFAULT_PAGINATION = 10

STATIC_PATHS = ["images", "extra/blog.html"]
EXTRA_PATH_METADATA = {
    "extra/blog.html": {"path": "blog.html"},
}
