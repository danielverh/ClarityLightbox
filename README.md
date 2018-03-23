# Clarity Lightbox

[![Badge](https://data.jsdelivr.com/v1/package/npm/clarity-lightbox/badge)](https://www.jsdelivr.com/package/npm/clarity-lightbox)

![GIF](http://i.imgur.com/OL4DFJl.gif)

## How to use:
Include the following in your header:

```
<link rel="stylesheet" href="dist/css/clarify-lightbox.min.css>
<!--jQuery-->
<script
  src="http://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
  crossorigin="anonymous"></script>
  
<script src="dist/js/clarify-lightbox.min.js>
```

Then to use the plugin in your html:
Place all the content of your page in
```
<div class="wrapper">
    <!-- Your website's content -->
</div>
```

And place your image you want to make a lightbox as following:

```
<a class="lightbox" href="img/img1.jpg">
    <img class="img-lightbox" src="img/img1.jpg">
</a>
```