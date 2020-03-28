// 入口文件main.js

//导入jquery
import $ from 'jquery'

$(function() {
    $('li:odd').css('backgroundColor', 'red')
    $("li:even").css('backgroundColor', 'green')
})