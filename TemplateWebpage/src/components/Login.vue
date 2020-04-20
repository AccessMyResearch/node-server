<template>
    <div class="outer_div">
        <div class=" login_card min-vh-100 center">
            <div class="row text-black">
                <div class="col-lg-6 col-md-8 mx-auto text-center form p-4">
                    <h1 class="display-2 p-1">AMR</h1>
                    <h4 class="p-2">Removing the barrier between academics and the public</h4>
                    <div class="p-2">
                        <form class="justify-content-center">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Password">
                              <div class="bottom">
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" id="forgotpassword">
                                    <label class="form-check-label" for="forgotpassword">
                                      Keep me signed in
                                    </label>
                                </div>
                                <div class="float-right forgot_password">
                                  <p><a href="#">Forgot your password?</a></p>
                                </div>
                              </div>
                            </div>
                            <button type="submit" class="login d-inline-block float-center btn button-size btn-secondary btn-lg btn-block">Log in</button>
                        </form>
                        <div class="sign_up">
                        <button type="submit" class="d-inline-block float-center btn button-size btn-secondary btn-lg btn-block">Sign up</button>
                        </div>
                    </div>
                    <div class="icons">
                    <h6 class="horizontal-line">or</h6>
                    <div class="log-in-buttons">
                        <div class="set-one">
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-success btn-lg btn-block"><i class="logos float-left fab fa-google"></i>Google</button>
                        </div>
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block"><i class="logos float-left fab fa-facebook-square"></i>Facebook</button>
                        </div>
                        </div>
                        <div class="set-two">
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block"><i class="logos float-left fab fa-linkedin"></i>Linkedin</button>
                        </div>
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block"><i class="logos float-left fab fa-researchgate"></i>Research Gate</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>

</script>

<style scoped>

.button-size{
  width: 200px;
}

.set-two{
  padding-top: 10px;
}

.placeholder{
  display: inline-block;
}

.bottom{
  display: flex;
}

.bottom div:last-child{
  margin-left: auto;
}

.forgot_password{
  float: right;
}

.sign_up{
  padding-top: 5px;
}

.sign_up button{
  background-color: #FF8000;
}

.sign_up button:hover{
  background-color: rgb(250, 102, 16);
}

.login{
  background-color: #487bbf;
}

.login:hover{
  background-color: #4482d3;
}

.logos {
  -ms-transform: translateY(-100%);
  transform: translateY(25%);
}

form:before {
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #e9e7e7;
  z-index: -1;
  border-radius: 10px;
}

.horizontal-line{
  overflow: hidden;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.horizontal-line::before,
.horizontal-line::after{
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

.horizontal-line::before{
  right: 0.5em;
  margin-left: -50%;
}

.horizontal-line::after{
  left: 0.5em;
  margin-right: -50%;
}
</style>






