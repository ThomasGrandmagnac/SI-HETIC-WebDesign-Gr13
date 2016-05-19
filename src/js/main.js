$(document).ready(function() {
  'use strict';

  var tabitems = ['modele','immat','cartegrise'];

  var $btnUp = $('#piecesdetachees').find('.buttonUp');

  $('.tileset').hide();
  $btnUp.hide();

  tabitems.forEach(function(category) {
    $('#' + category).on('click', function() {
      $('.search-module').trigger('clear');
      $(this).addClass('selected');
      $('.form-' + category).addClass('active');
    });
  });

  $('.search-module').on('clear', function() {
    $(this).find('ul')
    .children('li').each(function() {
      $(this).removeClass('selected');
    });
    $(this).find('.display')
    .children('form').each(function(elt) {
      $(this).removeClass('active');
    });
  });

  $('.buttonPieces').on('click', function(e) {
    $('.tileset').slideToggle();
    $(this).toggleClass('deployed');
    $btnUp.trigger('toggled');
  });

  $btnUp.on('toggled', function() {
    if ($('.buttonPieces').hasClass('deployed')) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });

  $btnUp.on('click', function(e) {
    e.preventDefault();
    $('.tileset').slideUp();
    $(this).hide();
  });

});
