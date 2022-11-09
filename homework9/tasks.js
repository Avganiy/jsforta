// task 1
function addAttr() {
   $('a[href^="https://"]').attr('target', '_blank');
}

// task 2
function editClass() {
   $('h2.head').css('background-color', 'green');
   $('h2.head .inner').css('fontSize', '35px');
}

// task 3
function changeOrder() {
   $('h3 + div').each(function () {
      const divTagEl = $(this);
      divTagEl.prev().before(divTagEl);
   });
}

// task 4
const $cbx = $('[type=checkbox]');
$cbx.change(() => {
   if ($('[type=checkbox]:checked').length == 3) {
      $(':checkbox(:checked)').prop('disabled', true);
   }
});
