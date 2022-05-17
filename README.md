# Resource efficient image zoom javascript
 A lightweight jQuery plugin that turns your thumbnails into a resource efficient image zoom system using Bootstrap Modal.
 
 ### Initiate the plugin
 Doing this, will turn all images using data-toggle image-zoom, into zoomable images
 ```javascript
 $(document).ready(function () {
    $(document).find('[data-toggle="image-zoom"]').modalZoom();
});
 ```

### Image Sample
```html
<img
                    src="https://via.placeholder.com/150/000/fff?Text=mmltools.com"
                    data-toggle="image-zoom"
                    data-src="https://via.placeholder.com/1920x1080/000/fff?Text=mmltools.com"
                    data-caption="Test Caption"
                    data-description="Test description"
                    alt=""
                    class="mr-3 image-zoom" />
```
