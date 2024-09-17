// src/plugins/webfontloader.js

import WebFont from 'webfontloader';

export function loadFonts() {
  WebFont.load({
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons']
    }
  });
}
