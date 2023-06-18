$("#validation").validate({
    rules:{
        name:{
            minlength:4
        },
        email:{
            email:true
        },
        phone:{
            number : true,
            minlength:10,
            maxlength:10
        }
    },
    messages:{
        name:{
        required:"Please enter your name.",
        minlength:"Enter atleast 4 characters.",
        },
        email : "Please enter your email.",
        phone : "Please enter your phone number.",
        subject: "Please enter your subject.",
        formMessage : "Please enter your Message.",
    },
    submitHandler: function(form) {
       form.submit();
    }

})