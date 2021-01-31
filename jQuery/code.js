console.log($)
$(document).ready(() => $("#header").text("Document is Ready").css("font-size", "20px").css("color", "plum").fadeIn("slow", "10000ms"))

// css({"propertyname":"value","propertyname":"value",...});

/*
// creating your own function 
(function ($) {
    $.fn.myCustomFunction = function () {
        // your code go here
        return 4*2;
    }
})(jQuery)
*/

$('#item-list > li:nth(1)').css("color", "blue")

// jQuery Effects:- 
$(".effects").prepend("<h2>jQuery Effects</h2>")

// hide(), show() and fade()
$(".hide_show").prepend("<h3>hide(), show() and fade()</h3>")

$("#hide").click(() => {
    // $(selector).hide(speed,callback);
    // A callback function is executed after the current effect is finished.
    // $(".lorem").hide(300);
    // fadeOut() - method is used to fade out a visible element.
    $(".lorem").fadeOut(200);
});

$("#show").click(() => {
    // $(selector).show(speed,callback);
    // $(".lorem").show(300);
    // fadeIn() - method is used to fade in a hidden element.
    $(".lorem").fadeIn(400);
});

// toggle() - toggle between hiding and showing an element
$("#toggle").click(() => {
    // $(selector).toggle(speed,callback);
    // $(".lorem").toggle(300);
    // fadeToggle() - method toggles between the fadeIn() and fadeOut() methods.
    $(".lorem").fadeToggle(300);
});

// fadeTo() - method allows fading to a given opacity (value between 0 and 1).
$("#fadeTo").click(() => {
    // $(selector).fadeTo(speed,opacity,callback);
    $(".lorem").fadeTo("slow", 0.4);
})

// slide()
$(".slide").prepend("<h3>slide()</h3>")

// slideDown()
$("#flip").click(() => $("#panel").slideDown("slow"));

// slideUp()
$("#flip2").click(() => $("#panel2").slideUp("slow"));

// slideToggle()
$("#flip3").click(() => $("#panel3").slideToggle(2000));

// animate() - is used to create custom animations
$(".animate").prepend("<h3>animate()</h3>")
// $(selector).animate({params},speed,callback);

/*
$("#animate-btn").click(() => $("#animate-div").animate({
    left: '250px',
    opacity: '0.5',
    height: 'toggle',
    width: '150px'
}))
*/

$("#animate-btn").click(() => {
    let div = $("#animate-div");
    $("#animate-btn").prop("disabled", true)
    div.animate({
        height: '300px',
        opacity: '0.4'
    }, "slow").animate({
        width: '300px',
        opacity: '0.8'
    }, "slow").animate({
        height: '100px',
        opacity: '0.4'
    }, "slow").animate({
        width: '100px',
        opacity: '0.8'
    }, "slow", () => {
        $("#animate-btn").prop("disabled", false)
    });
});

// stop()
$("#stopAnimation").click(() => $("#panel3").stop())


// jQuery HTML:- 
$(".jQueryHTML").prepend("<h2>jQuery HTML</h2>")

$(".submit").click(() => {
    let result = $('.result');
    if ($('.answer-box').val() == 'Jayadev') result.text("Your answer is correct")
    else if ($('.answer-box').val() == '') result.html('<span>At least try</span>')
    else {
        result.html('<span style="color:red">Your Answer is Wrong</span>')
        $('<p>Answer is Jayadev </p>').appendTo(".result")
    }
})

// A Callback Function for text(), html(), and val()

$(".callBack #btn1").click(() => $(".callBack #test1").text((i, origText) => "Old text: " + origText + " New text: Hello world! (index: " + i + ")"));
$("#btn2").click(() => {
    $("#test2").html((i, origText) => {
        return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")";
    });
});

// .attr() - is use to get the attrabute of the element or set the attrabute of the element
let link = $('#test-a-tag').attr("href");
setTimeout(() => {
    $('#test-a-tag').attr({
        "href": "https://www.w3schools.com/jquery/",
        "title": "W3Schools jQuery Tutorial"
    })
}, 4000);
console.log(link)
// let imgSrc = $('img').attr("src","image.com")


// Add Elements:- 

// .append() - puts data inside an element at last index
// .prepend() - puts the prepending elem at first index
// .after() - puts the element after the element
// .before() - puts the element before the element

// The append (content) method appends content to the inside of every matched element, whereas the appendTo (selector) method appends all of the matched elements to another, specified, set of elements

// .append() inserts the content specified by the parameter, to the end of each element in the set of matched elements, as in
// $(Append_To_This).append(The_Content_Given_Here);

// while .appendTo() works the other way around: it insert every element in the set of matched elements to the end of the target given in the parameter, as in
// $(The_Content_Given_Here).appendTo(Append_To_This);


// Remove Elements:- 

// remove() - Removes the selected element (and its child elements)
// empty() - Removes the child elements from the selected element

// removeAtrr(name) - Removes an attribute from the selected element


// Manipulating CSS:- 

// hasClass(class) - This method checks weather the selected element containd the specified class

// addClass(class) - Adds a class definedin CSS to the matched element

// removeClass(class) - Removed a class/classed from the set of selected elements

// toggleClass(class) - Adds the class if it is not present,remves the class if it is present 

// prop()


// Dimensions:- 

// width() - method sets or returns the width of an element (excludes padding, border and margin).
// height() -  method sets or returns the height of an element (excludes padding, border and margin).
// innerWidth() - method returns the width of an element (includes padding).
// innerHeight() - method returns the height of an element (includes padding).
// outerWidth() - method returns the width of an element (includes padding and border).
// outerHeight() - method returns the height of an element (includes padding and border).
// outerWidth(true) - method returns the width of an element (includes padding, border, and margin).
// outerHeight(true) method returns the height of an element (includes padding, border, and margin).

// inner - includes padding
// outer - includes padding and border
// outer(true) - includes everything 


// jQuery Traversing:- 

$(".click-me").click(() => {
    // Ancestors
    // parent() - as the name suggest it returns the direct parent element of the selected element
    // $("#inside-a-div").parent().css('border', '1px solid red')

    // parents() - method returns all ancestor elements of the selected element, all the way up to the document's root element (<html>)
    console.log($("#inside-a-div").parents())

    // parentsUntil() - method returns all ancestor elements between two given arguments
    console.log($("#inside-a-div").parentsUntil(".traversing"))

    // Descendants
    // find() method returns descendant elements of the selected element, all the way down to the last descendant
    // $("#item-list").find("a").css('color', 'red')

    // children() - method returns all direct children of the selected element
    // $("#first-li").children("a").css('color', 'red')

    // Siblings
    // siblings() - method returns all sibling elements of the selected element
    // $("#first-li li:last").siblings().css('border', '1px solid black')

    // next() - method returns the next sibling element of the selected element
    // $("#first-li").next().css('border', '1px solid red')

    // nextAll() - method returns all next sibling elements of the selected element
    console.log($("#first-li").nextAll())

    // nextUntil() - method returns all next sibling elements between two given arguments
    console.log($("#first-li").nextUntil("button"))

    // prev() -  return previous sibling elements
    // $("#item-list li:last").prev().css('color', 'red')

    // prevAll() - method returns all previous sibling elements of the selected element
    console.log($("#item-list li").last().prevAll())

    // prevUntil() - method returns all previous sibling elements between two given arguments

    // .closest() - find the closest parent of a particular type
    // $("#inside-a-div").closest("li").css('color', 'red')

    // Filtering
    // .first() - returns the first element of the specified elements
    // $("#item-list li").first().css('border', '1px solid black')

    // .last() - returns the last element of the specified elements
    $("#item-list li").last().css('border', '1px solid black')
})

// eq() - method returns an element with a specific index number of the selected elements
$("#item-list li").eq(2).removeClass("myClass")

// filter() method lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned.
$("#item-list li").filter(".middle").toggleClass("myClass")

// not() - method returns all elements that do not match the criteria

// .clone() - makes a copy of selected elements, including child nodes, text and attributes
// $("#demoClone").clone().insertAfter("#demoClone")

// .clone(true) - Specifies that event handlers also should be copied by default it is false
// $("#demoClone").clone(true).insertAfter("#demoClone")

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sum = 0;

$.each(arr, (index, value) => {
    // sum += arr[index];
    sum += value;
})
console.log(sum)

$("li").each(function () {
    $(this).addClass("myClass")
    console.log($(this).text())
})

// jQuery AJAX
$(".ajax").prepend("<h2>jQuery AJAX</h2>")
// AJAX load() - method loads data from a server and puts the returned data into the selected element
// $(selector).load(URL,data,callback);

$(".ajax #ajax_button").click(() =>
    $(".ajax h4").load("demo.txt", (responseTxt, statusTxt, xhr) => {
        if (statusTxt == "success")
            console.info("External content loaded successfully!", responseTxt);
        if (statusTxt == "error")
            console.info("Error: " + xhr.status + ": " + xhr.statusText);
    })
)

// The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:

// 1. responseTxt - contains the resulting content if the call succeeds
// 2. statusTxt - contains the status of the call
// 3. xhr - contains the XMLHttpRequest object

// AJAX get() and post()
// GET - Requests data from a specified resource
// $.get(URL,callback);

$(".ajax #get").click(() => $.get("demo.txt", (data, status) => console.info("Data: " + data + "\n Status: " + status)))

$(".ajax #gitHub").click(() => $.get("https://api.github.com/users/amankumar6", (data) => console.log(JSON.stringify(data))))

// POST - Submits data to be processed to a specified resource
// $.post(URL,data,callback);
$(".ajax #post").click(() =>
    $.post("demo_post.asp", {
            name: "Donald Duck",
            city: "Duckburg"
        },
        (data, status) => console.log("Data: " + data + "\nStatus: " + status))
)

// noConflict() - method releases the hold on the $ shortcut identifier, so that other scripts can use it

// jQuery Filters

$("#myInput").on("keyup", function () {
    let value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$(".test-button").on({
    mouseenter: () => console.log("Mouse Enter"),
    mouseleave: () => console.log("Mouse Leave"),
    click: () => console.log("Mouse Clicked")
})