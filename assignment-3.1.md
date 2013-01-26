```javascript
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'load-image',
            'bootstrap'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.jQuery,
            window.loadImage
        );
    }
```

* Could use a line break here

```javascript
}(function ($, loadImage) {
    'use strict';
    // Bootstrap Image Gallery is an extension to the Modal dialog of Twitter's
    // Bootstrap toolkit, to ease navigation between a set of gallery images.
    // It features transition effects, fullscreen mode and slideshow functionality.
    $.extend($.fn.modal.defaults, {
        // Delegate to search gallery links from, can be anything that
        // is accepted as parameter for $():
        delegate: document,
        // Selector for gallery links:
        selector: null,
        // The filter for the selected gallery links (e.g. set to ":odd" to
        // filter out label and thumbnail linking twice to the same image):
        filter: '*',
        // The index of the first gallery image to show:
        index: 0,
        // The href of the first gallery image to show (overrides index):
        href: null,
        // The range of images around the current one to preload:
        preloadRange: 2,
        // Offset of image width to viewport width:
        offsetWidth: 100,
        // Offset of image height to viewport height:
        offsetHeight: 200,
        // Set to true to display images as canvas elements:
        canvas: false,
        // Shows the next image after the given time in ms (0 = disabled):
        slideshow: 0,
        // Defines the image division for previous/next clicks:
        imageClickDivision: 0.5
    });
```
    
* Good commenting

```javascript
    var originalShow = $.fn.modal.Constructor.prototype.show,
        originalHide = $.fn.modal.Constructor.prototype.hide;
    $.extend($.fn.modal.Constructor.prototype, {
        initLinks: function () {
            var $this = this,
                options = this.options,
                selector = options.selector ||
                    'a[data-target=' + options.target + ']';
            this.$links = $(options.delegate).find(selector)
```
          
* Missing semicolon after (selector)

```javascript  
                .filter(options.filter).each(function (index) {
                    if ($this.getUrl(this) === options.href) {
                        options.index = index;
```

* The beginning curly brace should be on the next line

```javascript
                    }
                });
            if (!this.$links[options.index]) {
                options.index = 0;
            }
        },
        getUrl: function (element) {
            return element.href || $(element).data('href');
        },
        getDownloadUrl: function (element) {
            return $(element).data('download');
        },
        startSlideShow: function () {
            var $this = this;
            if (this.options.slideshow) {
                this._slideShow = window.setTimeout(
                    function () {
                        $this.next();
                    },
                    this.options.slideshow
                );
            }
        },
        stopSlideShow: function () {
            window.clearTimeout(this._slideShow);
        },
        toggleSlideShow: function () {
            var node = this.$element.find('.modal-slideshow');
            if (this.options.slideshow) {
                this.options.slideshow = 0;
                this.stopSlideShow();
            } else {
                this.options.slideshow = node.data('slideshow') || 5000;
                this.startSlideShow();
            }
            node.find('i').toggleClass('icon-play icon-pause');
        },
```

* wtf? What is with the comma after the curly brace? 

```javascript
        preloadImages: function () {
            var options = this.options,
                range = options.index + options.preloadRange + 1,
                link,
                i;
            for (i = options.index - options.preloadRange; i < range; i += 1) {
                link = this.$links[i];
                if (link && i !== options.index) {
                    $('<img>').prop('src', this.getUrl(link));
```                    
* What is with the $()?

```javascript
                }
            }
        },
```