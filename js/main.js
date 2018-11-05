var users = {
  ludvignorling: "23748a760a56fef0665474c93957e7590b5e5c835730bb470e6bda5ad965846d"
};



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = false;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
            } else {
                //check = true;
                checkAccount(input[0], input[1])
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           hideValidate1(this)
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    function showValidate1(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate-1');
    }

    function hideValidate1(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate-1');
    }






    function checkAccount(uname, pwd) {
        var uname1 = $(uname).val().trim()
        var pwd1 = $(pwd).val().trim()

        if(users[uname1] === undefined) {
            showValidate1(uname) 
        } else {
            hideValidate1(uname)
            var hasher256 = new jsSHA('SHA-256', 'BYTES')
            hasher256.update(pwd1)
            var result256 = hasher256.getHash('HEX')
            //console.log(result256)
            //(console.log(users[uname1])
            if(result256 !== users[uname1]) {
                showValidate1(pwd)
            } else {
                hideValidate1(pwd)
                var main = document.getElementById("limiter");
                main.innerHTML = '';

            }
        }


    }
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });


})(jQuery);
