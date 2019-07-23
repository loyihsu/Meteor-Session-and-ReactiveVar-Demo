/*
 This project is created by Loyi for demo purpose.
 Last Updated: 2018/11/08
 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// 因為我們把demo案例都模組化，所以必須要 import 一些東西
// Main
import './main.html';
// Session
import './sessionDemo.html';
import './sessionDemo.js';
// Reactive Variable
import './reactiveVar.html';
import './reactiveVar.js';

// Session 變數 currentPage，初始化為 "home"
Session.setDefault("currentPage", "home");

// 以下是建立 navigationMenu 的方式

// Navigation Menu 先定義好
let menuItems = ["Home", "Session", "Reactive Variable"];         // 顯示在螢幕上的 menu items
let menuItemIdentifier = ["home", "sessionDemo", "reactiveVar"];  // 程式辨認用的 identifier

Template.navigationMenu.helpers({
  // Template (navigationMenu) 的 helpers
  menu: function() {
    // 這個功能我們拿來生成 navigationMenu
    let cur = Session.get("currentPage");                         // 儲存目前是哪個畫面的 variable （跟 Session 拿）
    let currentItem = menuItemIdentifier.indexOf(cur);            // 儲存我們現在 menuItems/menuItemIdentifier 是第幾個 item
    var menuString = "";                                          // 實際用來輸出的 menuString

    for (var i = 0; i < menuItems.length; i++)
    {
      if (i == currentItem) {
        // 如果 i 是「現在」的 item 的話，用加粗的方式加入
        menuString += "<b>" + menuItems[i] + "</b>";
      } else {
        // 如果不是的話，用連結的方式加入
        menuString += "<a href=\"#\" class=\"menuItems\" id=\"" + menuItemIdentifier[i] + "\">" + menuItems[i] + "</a>";
        // <a href="#" class="menuItems" id="<#menuItemIdentifier#>"><#menuItems#></a>
      }

      if (i < menuItems.length - 1)
      {
        // 如果不是最後一個 item 的話，加上分隔線！
        menuString += " | "
      }
    }
    return menuString;                                            // 回傳 menuString
  }
});

Template.navigationMenu.events({
  // navigationMenu 的控制事件
  "click .menuItems": function(event)
  {
    Session.set("currentPage", event.currentTarget.id);           // 依照連結的 id 更新 Session 變數

    let cur = Session.get("currentPage");                         // 取得現在（更新完後）的 Session 變數

    // 依照 cur 去決定目前應該顯示的 template (div)
    // 這裡是用 CSS 的 display 屬性來決定是否顯示
    if (cur == "home")
    {
      // 如果目前頁面是 "home"(identifier) 的話
      document.getElementById("homeBlock").style.display = "block"; // 顯示 homeBlock
    } else {
      // 不是的話
      document.getElementById("homeBlock").style.display = "none";  // 不要顯示 homeBlock
    }

    if (cur == "sessionDemo")
    {
      // 如果目前頁面是 "sessionDemo"(identifier) 的話
      document.getElementById("sessionBlock").style.display = "block";  // 顯示 sessionBlock
    } else {
      // 不是的話
      document.getElementById("sessionBlock").style.display = "none";   // 不要顯示 sessionBlock
    }

   if (cur == "reactiveVar")
   {
     // 如果目前頁面是 "reactiveVar"(identifier) 的話
     document.getElementById("reactiveVarBlock").style.display = "block"; // 顯示 reactiveVarBlock
   } else {
     // 不是的話
     document.getElementById("reactiveVarBlock").style.display = "none";  // 不要顯示 reactiveVarBlock
   }
   }
});
