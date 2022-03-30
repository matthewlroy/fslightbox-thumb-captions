(function () {
  const _FS_LIGHTBOX_NAME = `gallery`;

  fsLightboxInstances[_FS_LIGHTBOX_NAME].props.onOpen = (fsLightbox) => {
    initCustomCaptions(fsLightbox);

    const thumbBtn = document.querySelector(
      `div.fslightbox-toolbar-button[title="Thumbnails"]`
    );
    if (thumbBtn && !thumbBtn.classList.contains(`thumb-btn-event-added`)) {
      const thumbBtn_event = `click`;
      const thumbBtn_fn = () => {
        if (fsLightbox.data.isThumbing) {
          createCustCaption(fsLightbox);
        } else {
          removeCustomCaptions();
        }
      };

      thumbBtn.attachEvent
        ? thumbBtn.attachEvent(`on` + thumbBtn_event, thumbBtn_fn)
        : thumbBtn.addEventListener(thumbBtn_event, thumbBtn_fn, {
            capture: false,
          });

      thumbBtn.classList.add(`thumb-btn-event-added`);
    }
  };

  fsLightboxInstances[_FS_LIGHTBOX_NAME].props.onSlideChange = (fsLightbox) => {
    initCustomCaptions(fsLightbox);
  };

  function removeCustomCaptions() {
    document
      .querySelectorAll(`div.cust-caption-removable`)
      .forEach((element) => element.remove());
  }

  function createCustCaption(fsLightbox) {
    const currentSlideDOM =
      fsLightbox.elements.sourceMainWrappers[fsLightbox.stageIndexes.current];

    let lastDiv_currentSlide_DOM = currentSlideDOM.lastElementChild;
    while (lastDiv_currentSlide_DOM.hasChildNodes()) {
      lastDiv_currentSlide_DOM = lastDiv_currentSlide_DOM.lastElementChild;
    }

    const newCaption = document.createElement(`div`);
    newCaption.classList.add(
      `cust-caption-removable`,
      `fslightbox-flex-centered`,
      `fslightbox-caption-inner`
    );
    newCaption.textContent =
      fsLightbox.elements.captions[fsLightbox.stageIndexes.current].textContent;
    lastDiv_currentSlide_DOM.parentNode.appendChild(newCaption); //fslightbox-fade-in
  }

  function initCustomCaptions(fsLightbox) {
    removeCustomCaptions();

    if (fsLightbox.data.isThumbing) {
      createCustCaption(fsLightbox);
    }
  }
})();
