<template>
  <div id="compenemt_drag-and-drop">      
    <div class="left_section">
      <button type="button" class="collapsible sidenav">Type</button>
      <button type="button" class="collapsible sidenav">Access</button>
      <button type="button" class="collapsible sidenav">Add To</button>
    </div>
    <div class="middle_section text-black">
        <div class="row text-black">
            <div class="card drag_and_drop mx-auto">
                <div class=" h2 text-center card-header">
                    Upload
                </div>
                <div class="card-body">
                    <div class="drag_and_drop_area">
                        <div v-if="!fileDropped">
                            <div :class="['dropzone', fileDragged ? 'dropzone-over' : '']" @dragenter="fileDragged = true" @dragleave="fileDragged = false">
                                <div class="inser_file_information" @drag="onChange">
                                    <span class="dropzone-here">Drop file here</span>
                                    <div class="file_type_warning">
                                        <div>(PDF only)</div>
                                    </div>
                                </div>
                                <input type="file" @change="onChange">
                            </div>
                        </div>
                        <div v-else class="dropzone-uploaded">
                            <div class="dropzone-uploaded-info">
                                <span class="dropzone-title">File Chosen: {{ fileDropped.name }}</span>
                                <button type="button" class="btn btn-primary remove_file_button" @click="removeFile">Remove File</button>
                            </div>
                        </div>
                        <div v-if="!fileDropped" class="row submit_button">
                          <button type="submit" class="float-right btn btn-primary" disabled>Submit</button>
                        </div>
                        <div v-else class="row submit_button">
                          <button type="submit" class="float-right btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    <div class="right_section">
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      fileDropped: '',
      fileDragged: false
    };
  },methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      
      if (!files.length) {
        this.fileDragged = false;
        return;
      }
      
      this.createFile(files[0]);
    },
    createFile(fileDropped) {
      if (!fileDropped.type.match('pdf.*')) {
        alert('please select pdf file');
        this.fileDragged = false;
        return;
      }
      
      this.fileDropped = fileDropped;
      console.log(this.fileDropped);
      this.fileDragged = false;
    },
    removeFile() {
      this.fileDropped = '';
    }
  },
  computed: {
    extension() {
      return (this.fileDropped) ? this.fileDropped.name.split('.').pop() : '';
    }
  }
};

</script>

<style scoped>
  @import "../assets/css/mainpage.css";

  #compenemt_drag-and-drop{
    display: flex;
    padding-top: 40px;
  }

  /*Need to fix this, left_section, right_section, and middle_section*/
  .left_section{
    width: 10%;
  }

  .middle_section{
    width: 80%;
  }

  .right_section{
    width: 10%
  }


  .drag_and_drop{
      width:70%;
      background: #ddd;
  }

  .dropzone{
    width: 100%;
    height: 600px;
    position: relative;
    border: 2px dashed #000;
  }

  .dropzone:hover {
    border: 2px solid #2e94c4;
  }

  .dropzone:hover .dropzone-here {
    color: #1975A0;
  }

  .inser_file_information {
    width: 100%;
    top: 50%;
    text-align: center;
    color: #A8A8A8;
    position: absolute;
    transform: translate(0, -50%);
  }


  .dropzone input {
    position: absolute;
    cursor: pointer;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .file_type_warning {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .dropzone-over {
    background: #5C5C5C;
    opacity: 0.8;
  }

  .dropzone-uploaded {
    width: 100%;
    height: 200px;
    position: relative;
    border: 2px dashed rgb(3, 3, 3);
  }

  .dropzone-uploaded-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #A8A8A8;
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translate(0, -50%);
    text-align: center;
  }

  .remove_file_button {
    width: 200px;
  }

  .submit_button{
    margin: auto;
    padding-top: 10px;
    float: right;
  }

  .sidenav{
    background-color: #dddddd;
  }

  .collapsible {
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    font-weight: 500;
  }

  .active, .collapsible:hover {
    background-color: rgb(175, 175, 175);
  }
</style>
