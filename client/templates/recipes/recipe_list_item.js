Template.recipeListItem.events({
  'click button[name=btn_delete]': function (evt, tmpl) {
    Recipes.remove({_id: this._id});
  }
});

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

$(document).ready(function () {
  // init Masonry after all images have loaded
  var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });

});


