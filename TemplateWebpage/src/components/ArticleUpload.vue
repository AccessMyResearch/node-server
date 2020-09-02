<template>
    <div>
        <div class="row main_heading text-black">
            <ul class="page_title">
                <li><i class="fas fa-file-upload fa-2x"></i></li>
                <li><h2>Upload</h2></li>
            </ul>
        </div>
        <div class="min-vh-100 main_body center">
            <div class="row card text-black">
                <div class="col-lg mx-auto form p-4">
                   <form>
                       <div class="form-group">
                           <label class="h2" for="title_of_publication">Title</label>
                           <input type="text" class="form-control" placeholder="Title">
                       </div>
                       <div class="form-group">
                           <label class="h2" for="Authors">Author(s)</label>
                           <input type="text" class="form-control" placeholder="Author(s)">
                       </div>
                        <div class="form-group">
                           <label class="h2" for="Abstract">Abstract</label>
                           <textarea type="text" class="form-control" placeholder="Abstract" rows="5"></textarea>
                       </div>
                       <div class="form-group">
                           <label for="chooseFileInput">Choose a file</label>
                           <input type="file" class="form-control-file" aria-describedby="fileWarning">
                           <small id="fileWarning" class="form-text text-muted">PDF only</small>
                           <button type="submit" class="float-right btn btn-primary">Submit</button>
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

.main_heading{
  padding-top: 20px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  align-items: center;
}

.main_body{
    padding-top: 20px;
}

.page_title li{
    display: inline-block;
}


</style>