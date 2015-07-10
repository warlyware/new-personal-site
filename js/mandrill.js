jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'A8BE-A2MpFna4832dN3MHA',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Website Contact Form Submission',
                    'text': msg,
                    'to': [
                    {
                        'email': 'danward@gmail.com',
                        'name': 'Dan Ward',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            swal("Mail sent!", "Thank you for contacting me.", "success")
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            swal("Problem Sending", "There was an error sending mail.  Please email me at danward@gmail.com instead.", "error");
        });
        return false; // prevent page refresh
    });
});