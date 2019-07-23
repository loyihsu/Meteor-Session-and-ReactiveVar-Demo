/*
 This project is created by Loyi for demo purpose.
 Last Updated: 2018/11/08
 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './reactiveVar.html';

var fruits = ["Apple", "Orange", "Pineapple", "Watermelon", "Melon"]
// 我們的 array，水果 array

var index = new ReactiveVar(0);
// 宣告一個新的 Reactive Variable 作為指標，初始化為 0

Template.myReactiveVarExample.helpers({
   getContent: function() {
     // 顯示主要內容的 helper

     var outputString = "";                                   // 回傳用的字串

     // 我們這次要把每個選項都印出來，按鈕控制加粗的項目，所以用迴圈印
     for (var i = 0; i < fruits.length; i++)
     {
       if (i != index.get())
       {
         // 如果 i 不等於我們的 Reactive Variable 指標
         outputString += fruits[i] + "<br>";                  // 純文字 + HTML 換行
       } else {
         // If i is the item the index is pointing to
         outputString += "<b>" + fruits[i] + "</b>" + "<br>"; // 粗體 + HTML 換行
       }
     }
     return outputString;                                     // 將整個字串回傳
   }
});

// 以下處理我們的控制項目

Template.myReactiveVarExample.events({
  "click #next": function(){
    // 按下 #next 按鈕
    let newIndex = index.get() + 1;
    if(newIndex < fruits.length)      // 如果還沒超出去的話
    {
      index.set(newIndex);            // 把 index 更新成 +1 之後的 index (newIndex)
    }
  },
  "click #prev": function(){
    // 按下 #prev 按鈕
    let newIndex = index.get()-1;
    if(newIndex >= 0)               // 如果還沒有超出去的話
    {
      index.set(newIndex);          // 把 index 更新成 -1 之後的 index (newIndex)
    }
  }
});
