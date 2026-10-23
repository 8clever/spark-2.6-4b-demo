Right now blog it is template blog page on route `/blog`
- Create 2 articles and write news about hugging face model `Spark-X2.6-4b` and company who it create
- Because you not have visual projection tower you can stay images as is, i will change it manually
## Resolution (Iteration #3)
- Fixed broken /blog route: 2 article frontmatter image paths were wrong (absolute `/src/...` and `../assets/...`); corrected to `../../assets/blog-placeholder-N.jpg` (relative to src/content/blog). Restarted dev server (HMR not picking up content changes) — /blog, /blog/index, /blog/<slug> now all HTTP 200; blog index + detail pages render full article content and images via lightpanda.
