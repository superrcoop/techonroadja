$(document).ready(function () {
    $('form#contact').on('submit', function (e) {
        e.preventDefault();
        const contactFormData = $('form#contact').serializeArray();
        const jobRequest = {};
        for (const formItem of contactFormData) {
            jobRequest[formItem.name] = formItem.value;
        }
        console.log(jobRequest);
        jobRequest['location'] = JSON.parse(jobRequest['location']);
        $.ajax({
            type: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: 'https://api.techonroadjm.com/job',
            data: jobRequest
        })
            .then(function (response) {
                // TODO: Show modal instead of alert.
                console.log(response);
                alert("Thank you. We will call you soon to confirm your order.");
            })
            .fail(function (message) {
                console.log(message);
                alert("An error has occured. Please try again later.")
            });

        return false;
    });
});
