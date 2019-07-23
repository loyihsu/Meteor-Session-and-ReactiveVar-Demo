/*
 This project is created by Loyi for demo purpose.
 Last Updated: 2018/11/08
 */

// Session 變數 message，初始化為 "Hello, visitor! What's your name?"
Session.setDefault("message", "Hello, visitor! What's your name?");

Template.mySessionExample.helpers({
  helloMessage: function() {
    // HTML 會跟這個 helper 要訊息
    return Session.get("message");    // 參數回傳 Session 變數 message 的內容
  }
});

Template.mySessionExample.events({
 "click #enterName":function(){
     // 當 Enter 按鈕按下之後，要更新 Session 變數
     var newName = document.getElementById("name").value;           // 跟 'name' 格子拿名字
     Session.set("message", "Hello, "+ newName + "! How are you?"); // 更新 Session 變數 message
 }
});
