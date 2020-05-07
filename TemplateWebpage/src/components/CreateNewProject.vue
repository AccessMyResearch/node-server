<template>
    <div id="newProject">
        <div class="min-vh-100 center">
            <div class="row text-black">
                <div class="project_card col-lg-6 col-md-8 mx-auto form p-4">
                  <h3 class="text-center display-4 p-3">Create New Project</h3>
                   <form>
                       <div class="form-group">
                           <label class="h2" for="title_of_project">Title</label>
                           <input type="text" class="form-control" placeholder="Title">
                       </div>
                       <div class="form-group">
                           <label class="h2" for="add_members">Members</label>
                           <input type="text" class="form-control" placeholder="Memebers">
                       </div>
                        <div class="form-group">
                           <label class="h2" for="description">Description</label>
                           <textarea type="text" class="form-control" placeholder="Description of project..." rows="5"></textarea>
                       </div>
                       <div class="form-group">
                           <label for="chooseFileInput">Choose a file</label>
                           <input type="file" class="form-control-file" aria-describedby="fileWarning">
                           <small id="fileWarning" class="form-text text-muted">Put a file Warning here if you want one </small>
                           <button type="submit" class="float-right btn btn-primary">Create new project</button>
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

#newProject{
    padding-top: 50px;
}

.project_card{
  background-color: var(--card-background);
  border-radius: 15px;
  margin: 0 auto;
}
</style>