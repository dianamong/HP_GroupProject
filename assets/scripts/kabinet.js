document.getElementById('img_avatar').addEventListener("click", ()=>{
    let modalkabinet = $modal5({
        content: `<div class="welcome"> <img class="userFormPic" src="./assets/images/account/Ellipse.png"> <p class="welcomeUser">Hi, Katechka</p> </div> <div class="fieldset"> <div class="fieldsetItems"> <div class="LKloginBlock"> <label for="LKuserLogin" class="LKloginLabel">Login</label> <input type="text" id="LKuserLogin" class="LKlogin form__item" required pattern="[a-zA-Z0-9]+$" minlength="5" /> </div> <div class="LKemailBlock"> <label for="LKuserEmail" class="LKemailLabel">Email</label> <input type="email" id="LKuserEmail" class="LKemail" /> </div> <div class="LKpasswordBlock"> <label for="LKuserPassword" class="LKpasswordLabel">Password</label> <input type="text" id="LKuserPassword" class="LKpassword" /> </div> <div class="LKavatarBlock"> <label for="LKuserAvatar" class="LKuserAvatarLabel">Avatar</label> <input type="text" id="LKuserAvatar" class="LKuserAvatar" /> </div> <div class="LKcommentBlock"> <label for="LKuserComment" class="LKcommentLabel">About you</label> <input type="text" rows="3" id="LKuserComment" class="LKuserComment" /> </div> <div class="LKForm_Buttons"> <button class="button__shine signUpButton">Save</button> <button class="button__shine closeButton">Close</button> </div> </div> </div>`, })
    
    modalkabinet.show();
})

$('.closeButton').on("click", function () {
    modalkabinet.hide();
    })