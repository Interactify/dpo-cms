'use strict';
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const imageminGm = require('imagemin-gm');

optimizeImages(1900)
optimizeImages(950)
optimizeImages(475)

function optimizeImages(width) {
  return new Promise((resolve, reject) => {
    imagemin(['build/cms/images/*.{jpg,png}'], `build/images/cms/${width}`, { use: [
        imageminGm.resize({ width: width, gravity: 'Center' }),
        imageminGm.convert('jpg')
    ]}).then(() => {
      imagemin([`build/images/cms/${width}/*.{jpg,png}`], `build/images/cms/${width}`, {
        plugins: [
          imageminJpegtran(),
          imageminPngquant({quality: '65-80'})
        ]
      }).then(files => {
        //console.log(files);
        //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
        console.log(`Image width ${width} created...`);
      });
      imagemin([`build/images/cms/${width}/*.{jpg,png}`], `build/images/cms/${width}`, {
          use: [
              imageminWebp({quality: 50})
          ]
      }).then(() => {
          console.log('webp files created...');
          return resolve('done')
      });
    })
  })
}