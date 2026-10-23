Right now website not optimized for mobile version
- You should fix mobile version of the website
- Layout should be perfect at minimum viewport width `360px`

What is broken on mobile
- Layout Header
- Home Page `/`
- Products Page `/products/*`
- Shop Page `/shop`
- Blog Page `/blog`
- About Page `/about`
- Sale Page `/sale`

Main problem in layout because `main.store-main` have invalid css properties

I'm understand that you not understand problems without visual capabilities.
Let me explain what is wrong. Width of `main.store-main` is `376px` when viewport is `360px` it is why overall mobile version looks broken.
It is because you have horizontal paddings which extends horizontal widths of content

Please fix