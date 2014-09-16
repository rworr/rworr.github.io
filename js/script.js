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
  var selector = document.getElementById('selector');
  console.log(tab.getBoundingClientRect().left);
  selector.setAttribute('style','left:' + tab.getBoundingClientRect().left.toString() + 'px;');
  console.log(selector.style.left);
}
    
window.onload = function() {
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