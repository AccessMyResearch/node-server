
<template>
    <div>
        <div class="min-vh-100 center">
            <div class="row text-black">
                <div class="col-lg-6 col-md-8 mx-auto text-center form p-4">
                    <h1 class="display-2 p-1">AMR</h1>
                    <h4 class="p-2">"Removing the barrier between academics and the public"</h4>
                    <div class="p-2">
                        <form class="justify-content-center">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-secondary btn-lg btn-block">Log in</button>
                        </form>
                    </div>
                    <div class="icons">
                    <h6 class="horizontal-line">or</h6>
                    <div class="log-in-buttons">
                        <div class="set-one">
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-success btn-lg btn-block">Google</button>
                        </div>
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block">Facebook</button>
                        </div>
                        </div>
                        <div class="set-two">
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block">Linkedin</button>
                        </div>
                        <div class="placeholder">
                            <button type="button" class="btn button-size btn-primary btn-lg btn-block">Research Gate</button>
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
