# fslightbox-thumb-captions

## Brief Description
This enhancement aims to improve fslightbox.js (pro) by enabling the captions to be active WHILE in thumb mode, allowing the end-user to read the caption regardless of the current view state. Please read over the usage and installation notes below for more, detailed info.
    
## Examples

#### Gallery caption in normal view:
![Gallery caption in normal view](https://github.com/matthewroysl/fslightbox-thumb-captions/blob/main/doc/normal-view-with-caption.png?raw=true)

#### Custom caption in thumb view:
![Custom caption in thumb view](https://github.com/matthewroysl/fslightbox-thumb-captions/blob/main/doc/thumb-view-with-caption.png?raw=true)

Live example: https://healthysoilbiomes.cc/gallery
    
## Installation

Include the file ***fslightbox-thumb-captions.min.js*** at the end of the <body> in the implementing page. Modify the constant __FS_LIGHTBOX_NAME_ at the top of the script to match the name contained within your _data-fslightbox_ tags. The caption will be generated for the current slide based on the _data-caption_ tags, as specified by the documentation. **NOTE:** This has only been used & tested with fslightbox-pro-3.4.1.
    
 #### In the implementing HTML file:
    
```html
<body>
        ...
    <a data-fslightbox="gallery"
       href="myImg.png"
       data-caption="Caption that will display in both view modes">
    </a>
        ...
    <script src="fslightbox-pro-3.4.1/fslightbox.js"></script>
    <script src="fslightbox-thumb-captions.min.js"></script>
</body>
```
    
#### In the fslightbox-thumb-captions.min.js file from this repo, update _gallery_ to match your _data-fslightbox_ tag:
    
 ```javascript
    const _FS_LIGHTBOX_NAME=`gallery`;
 ```
  
  
## Usage/Features
- While in thumbnail mode, captions will now appear directly below the image, correctly placed in the flexbox and not overlapping any of the other elements.

- When the user is in normal, gallery view-mode, and then clicks the thumbnail button to activate thumb mode, the original gallery caption will be hidden, and the custom caption will be displayed.

- When the user is in thumb mode, and then clicks the thumbnail button to de-activate thumb mode, the original gallery caption will be shown, and the custom caption will be hidden.

- While in thumbnail mode, as the user slides from image to image, the previous custom caption will be removed, and the current custom caption will be shown. This will also work if selecting a slide from the thumbnail view that is at any position.

- When closing the fslightbox, and then re-opening it, the gallery will detect if it is in thumb mode or not; if the thumb mode is not active, the normal caption will be displayed; if the thumb mode is active, the normal caption will be hidden and the custom caption will be displayed.

- Captions tested to be working with flexbox utilities on mobile, tablet, laptop, and desktop resolution, scaling to the proper spacing and sizing.
  
  
## Author 
- Name:  Matthew Roy
- Email:  matthew@saplink.io
- Web: https://saplink.io/

  
## Version
- 1.1.0_Mar-30-2022    -   Bugfix: expand custom captions to entire width of container
- 1.0.0_Mar-29-2022    -   Initial commit
  
  
## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
