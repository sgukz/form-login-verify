const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
$.validator.setDefaults({
    submitHandler: function () {
        if ($("#user_name").val() === "admin" && $("#password").val() === "admin") {
            Toast.fire({
                icon: 'success',
                title: 'Login successfully'
            })

        } else {
            Toast.fire({
                icon: 'error',
                title: 'Login failur!!!'
            })
        }
    }
});

$("#form-login").validate({
    rules: {
        user_name: "required",
        password: "required",
    },
    errorElement: "em",

    errorPlacement: function (error, element) {
        // Add the `invalid-feedback` class to the error element
        error.addClass("invalid-feedback");
        error.insertAfter(element.next(".pmd-textfield-focused"));
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).addClass("is-valid").removeClass("is-invalid");
    }
});