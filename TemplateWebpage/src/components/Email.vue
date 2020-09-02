<template>
    <div>
        <div class="min-vh-100 center">
            <div class="row text-black">
                <div class="email_card col-lg-6 col-md-8 mx-auto form p-4">
                    <h3 class="text-center display-4 p-3">Request Access</h3>
                    <form>
                        <div class="form-group">
                            <label class="h2" for="email_content">Subject</label>
                            <input type="text" class="form-control" placeholder="Subject">
                        </div>
                        <div class="form-group">
                            <label class="h2" for="email_content">Description</label>
                            <textarea type="text" class="form-control" placeholder="To Whom it may concern...." rows="5"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="float-right btn btn-primary">Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>

</script>

<style scoped>


.email_card{
  background-color: var(--card-background);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
</style>