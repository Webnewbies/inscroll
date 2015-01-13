#ScrollIt.js

## Pure JavaScript Library for OnePages

>Create easy and fast way their Single Page applications.
>Easy, no hassle, no need JQuery or any other framework.

## Demo \m/
    
**[link](http://andreymdias.github.io/scrollIt/)**
    
## Get Started

### INSTALL

    $ git clone https://github.com/andreymdias/scrollIt
    
or **[download .ZIP](https://github.com/andreymdias/scrollIt/archive/master.zip)**

### HTML

    <html>    
        <head>
            <!--  Stylesheet  -->
            <link rel="stylesheet" href="scrollIt/scrollIt.min.css">
            <!--  Opcional Polyfill for ie7++ -->
            <script src="scrollIt/polyfill.min.js"></script>
            <!--  Engine ScrollIt.js  -->
            <script src="scrollIt/scrollIt.min.js"></script>
            <!--  Javascript of page  -->
            <script src="app.js"></script>
        </head>
        <body>
            <section data-page="section1"></section>
            <section data-page="section2"></section>
            <section data-page="section3"></section>
            <section data-page="section4"></section>
        </body>
    </html>
    
### JavaScript

    var ScrollIt = new ScrollIt();

### Examples

#### Basic Usage

    var scrollit = new ScrollIt();
    
    // create default nav
    scrollit.nav = true; // default false
    
    // define transition time
    scrollit.time = 500; // default 400
    
    // define delay
    scrollit.delay = 100; // default 0
    
    // define element base
    scrollit.elem = document.querySelector('main'); // default document.body

or
    
    var scrollIt = new ScrollIt({
        nav: true,
        time: 200,
        delay: 150,
        elem: '.baseElement'
    }); 
    
#### Creating links in HTML

    <header>
        <a data-link='name-of-section-1'></a>
        <a data-link='name-of-section-2'></a>
        <a data-link='name-of-section-3'></a>
    </header>
    <div data-page="name-of-section-1"></div>
    <div data-page="name-of-section-2"></div>
    <div data-page="name-of-section-3"></div>
    
#### Functions
    
    scrollIt = new ScrollIt();
    
    document.querySelector('buttom#next').addEventListener(function(){
        scrollIt.next();
    });
    document.querySelector('buttom#previous').addEventListener(function(){
        scrollIt.previous();
    });
    document.querySelector('buttom#to2').addEventListener(function(){
        scrollIt.scroll(1);
    });

#### Add Key Code

    scrollIt = new ScrollIt();
    
    scrollIt.keyCodes.previous.push(20,10,23);
    scrollIt.keyCodes.next.push(22,12,25);
    
    //defaults
    
    // previous: [33, 38, 37] - up, left, page up 
    // next: [34, 39, 40] - down, right, page down

[More Keys](http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes)

**[Full Documentation](https://github.com/andreymdias/scrollIt/wiki)**

## Contributing

1. Fork it!
2. Create your feature branch: `

        $ git checkout -b feature
        
3. Commit your changes: `

        $ git commit -m 'Add feature'`
    
4. Push to the branch:

        $ git push origin feature
        
5. Submit a pull request

## License

**[LICENSE](https://github.com/andreymdias/scrollIt/blob/master/LICENSE)**
