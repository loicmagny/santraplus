// set to 0 by default because here, you're not logged in
var connect = 0;
// hiding divs
$('#references').hide();
$('#employee').hide();
$('#complementary-infos').hide();
$('#apt-request').hide();
$('#push-back-apt').hide();
$('#error-message').hide();
$('#bottom-form').hide();
$('#results').hide();
$('#dates').hide();
$('#absence-reason').hide();
$('#employer-apt-request').hide();
$('#push-back-apt-availability').hide();
$('#cancel-apt-reason').hide();
$('#divider').hide();
$('#divider2').hide();
$('#push-back-cancel').hide();
$('#warning-form').hide();
// function to reveal said div when the element is clicked
$('#motherhood').click(function () {
    $('#employer-apt-request').hide();
    $('#absence-reason').hide();
    $('#dates').show();
    $('#divider').show();
});
// function to display the inputs linked to the clicked element and hide unrelated elements within the parent
$('#pro-sickness').click(function () {
    $('#employer-apt-request').hide();
    $('#absence-reason').hide();
    $('#dates').show();
    $('#divider').show();
});

// function to display the inputs linked to the clicked element and hide unrelated elements within the parent
$('#30d-absence').click(function () {
    $('#employer-apt-request').hide();
    $('#dates').show();
    $('#absence-reason').show();
    $('#divider').show();
});

// function to display the inputs linked to the clicked element and hide unrelated elements within the parent
$('#employer-request').click(function () {
    $('#employer-apt-request').show();
    $('#absence-reason').hide();
    $('#dates').hide();
    $('#divider').show();
});

// function to display the inputs linked to the clicked element and hide unrelated elements within the parent
$('#push-back').click(function () {
    $('#cancel-apt-reason').hide();
    $('#push-back-apt-availability').show();
    $('#divider2').show();
    $('#bottom-form').show();
});

// function to display the inputs linked to the clicked element and hide unrelated elements within the parent

$('#cancel-apt').click(function () {
    $('#push-back-apt-availability').hide();
    $('#cancel-apt-reason').show();
    $('#divider2').show();
});

// function to display the part of the form to take an appointment, set the connect var to 0 if she is equal to 1

$('#get-apt').click(function () {
    connect = 0;
    $('#references').show();
    $('#employee').show();
    $('#complementary-infos').show();
    $('#apt-request').show();
    $('#bottom-form').show();
    $('#error-message').hide();
    $('#push-back-apt').hide();
    $('#warning-form').hide();
});
//function to set the connect var to 1 in order to simulate somewhat of a connection
$('#profile-icon').click(function () {
    connect = 1;
});
// function to show the push-back/cancel part of the form according to the connect var
$('#push-apt').click(function () {
    if (connect == 1) {
        $('#references').hide();
        $('#employee').hide();
        $('#complementary-infos').hide();
        $('#error-message').hide();
        $('#apt-request').hide();
        $('#bottom-form').show();
        $('#push-back-apt').show();
        $('#results').show();
    } else if (connect == 0) {
        $('#references').hide();
        $('#employee').hide();
        $('#connect-btn').show();
        $('#complementary-infos').hide();
        $('#apt-request').hide();
        $('#push-back-apt').hide();
        $('#bottom-form').show();
        $('#error-message').show();
        $('#results').show();
    }
});
// function to show the push-back/cancel part of the form through the click of a button to simulate a connection
$('#connect-btn').click(function () {
    $('#push-back-apt').show();
    $('#error-message').hide();
    $('#bottom-form').show();

});