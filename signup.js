function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML= "Enter Username* ";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML= "Atleast 6 letters* ";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML= "Enter your E-mail";
        return false;
    }
    else if(document.Formfill.Epassword.value==""){
        document.getElementById("result").innerHTML= "Enter your Password";
        return false;
    }
    else if(document.Formfill.Epassword.value.length<6){
        document.getElementById("result").innerHTML= "Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.Cpassword.value==""){
        document.getElementById("result").innerHTML= "Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.Epassword.value!==document.Formfill.Cpassword.value){
        document.getElementById("result").innerHTML= "Password doesn't match";
        return false;
    }
    else if(document.Formfill.Epassword.value==document.Formfill.Cpassword.value){
        popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById("popup");
function CloseSlide(){
    popup.classList.remove("open-slide")
}