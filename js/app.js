$(document).ready(function () {

// use enter to submit
    $('#user-input').keydown(function (e) {
        if (e.keyCode == 13) {
            $("#add-item").click();
        }
    });


// Button-click functionality
    $("#add-item").click(function () {

        var shoppingItem = $('#user-input').val();

        if (shoppingItem == '') {
            alert("Please enter an item");
        }
        else {

            // Append text input variable into list
            $('#shoppingList').append('<li>' + shoppingItem + ' ' + '<button class ="btn btn-danger btn-sm delete">x</button></li>');

            $('#user-input').val('');

        }
    });

// Delete list item
    $('#shoppingList').on("click", ".delete", function () {
        $(this).parent().remove()
    });
});




