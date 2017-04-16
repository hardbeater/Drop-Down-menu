# Drop-Down-menu
## Description
In this Web app showed a Drop-Down-Menu with some animation on how the menu lists showed up when hover on menu and animation on lists when mouse hover over them !!
## Technologies Used
**HTML,CSS,Jquery**
## Web-app-preview
To see the Web app [click here](http://htmlpreview.github.com/?https://github.com/hardbeater/Drop-Down-menu/blob/master/cascadedmenu.html) **(sometimes it take time to load properly so please wait for some time ) **
## Some Important things for Drop-Down-Mneu
1.For creating sub-menu put sub-menu's item in unordered list iside the menu **li** tag like shown below
```html
<div>
<ul>
<li>menu list item
   <ul>
      <li> sub-menu lists item</li>
     <li> sub-menu lists item </li>
   </ul>
</li>
<li> menu list item</li>
<li>menu list item </li>
</ul>
</div>
```
2.To put submenu lists to under menu to do so we have to define some css properties to **li**
```css
li{
display:block /*important*/
width:; /*any value as you wish*/
position:relative;  /*important this is set to be relative */
float:left;   /*important to put all menu items side by side*/

}

```
3.To animate submenu lists when hover over menu item i used jquery to change css property of each submenu list item under hovered menu with some time delay like shown below
```javascript
$('the class of menu list item').mouseenter(function(){
  var id=  $(this).find('ul').attr('id');
    $('#'+id+' '+'li').each(function(i){
      setTimeout(function(){
      $('#'+id+' '+'li').eq(i).css({
       //the css properties you want to change to animate
      });
    },Delaytime*(i+1));
  });
});
```
