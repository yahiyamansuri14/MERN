$(document).ready(function() {
    //validation for first name
    $('#firstName').focusout(function(e) {
            var firstname = $('#firstName').val()
            console.log(firstname)
            if (firstname.length < 3) {
                $('#forFirstName').text('first name should be alteast 3 character long')
                e.preventDefault()
            } else {
                $('#forFirstName').text('right first name')
                e.preventDefault()
            }
        })
        //validation for last name
    $('#lastName').focusout(function(e) {
        var firstname = $('#lastName').val()
        console.log(firstname)
        if (firstname.length < 3) {
            $('#forLastName').text('first name should be alteast 3 character long')
            e.preventDefault()
        } else {
            $('#forLastName').text('right first name')
            e.preventDefault()
        }
    })

    $('#usermail').focusout(function(e) {
            var email = $('#usermail').val();
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            if (!pattern.test(email)) {
                $('#forEmail').text("pls enter a valid mail in form abc@gmail.com")
                e.preventDefault()
            } else {
                $('#forEmail').text("right mail")

            }
        })
        //form submission validation
    $('#form-validation').submit(function(e) {
        e.preventDefault()
        var firstname = $('#firstName').val()
        console.log(firstname)
    })
})$(document).ready(function() {
    //validation for first name
    $('#firstName').focusout(function(e) {
            var firstname = $('#firstName').val()
            console.log(firstname)
            if (firstname.length < 3) {
                $('#forFirstName').text('first name should be alteast 3 character long')
                e.preventDefault()
            } else {
                $('#forFirstName').text('right first name')
                e.preventDefault()
            }
        })
        //validation for last name
    $('#lastName').focusout(function(e) {
        var firstname = $('#lastName').val()
        console.log(firstname)
        if (firstname.length < 3) {
            $('#forLastName').text('first name should be alteast 3 character long')
            e.preventDefault()
        } else {
            $('#forLastName').text('right first name')
            e.preventDefault()
        }
    })

    $('#usermail').focusout(function(e) {
            var email = $('#usermail').val();
            var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            if (!pattern.test(email)) {
                $('#forEmail').text("pls enter a valid mail in form abc@gmail.com")
                e.preventDefault()
            } else {
                $('#forEmail').text("right mail")

            }
        })
        //form submission validation
    $('#form-validation').submit(function(e) {
        e.preventDefault()
        var firstname = $('#firstName').val()
        console.log(firstname)
    })
})
