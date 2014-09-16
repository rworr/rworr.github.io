setHeight = function(id) {
  var body = document.body;
  var header = document.getElementById('header');
  var tabs = document.getElementById('tabs');
  var tab = document.getElementById(id);
  var height = tabs.offsetHeight - 41;
  console.log(height);
  tab.setAttribute('style','height:' + height.toString() + 'px;');
}

moveSelector = function(id) {
  var tab = document.getElementById(id + 'tab');
  var arrow = document.getElementById('arrow');
  var left = tab.getBoundingClientRect().left + tab.offsetWidth/2 - arrow.offsetWidth/2;
  var top = tab.getBoundingClientRect().bottom - tab.getBoundingClientRect().top - 1;
  arrow.setAttribute('style','left:' + left.toString() + 'px;top:' + top.toString() + 'px;');
  console.log(arrow.style.left);
}
    
window.onload = function() {
  moveSelector('ml');
  //setHeight(activeId);
}
      
$(window).resize(function() {
  //setHeight(activeId);
});
            
$(function() {
  $('#tabs').tabs({
    activate: function(event, ui) {
      var id = ui.newPanel[0].id
      //setHeight(id);
      moveSelector(id);
    }
  });
});