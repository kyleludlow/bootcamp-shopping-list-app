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
            $('#shopping-list').append('<li class="shopping-list-item"><button class ="btn btn-danger btn-sm delete">x</button>' + ' ' + shoppingItem + '</li>');

            $('#user-input').val('');

        }
    });

// Delete list item
    $('#shopping-list').on("click", ".delete", function () {
        $(this).parent().remove()
    });
});




