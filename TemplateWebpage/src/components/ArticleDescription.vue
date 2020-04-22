<template>
    <div id="placeholder">
      <div class="left_section">
        <p>Hello</p>
      </div>

      <div class="middle_section">
          <div class="article_information">
          <div class="row main_heading text-black">
              <div class="publicaion_information">
                  <h2 class="title">This is where the title of the publication title will go here </h2>
                  <h6 class="publication_date text-muted">Publication date: Goes Here</h6>
                  <h6 class="publication_DOI text-muted">Publication DOI: Goes Here</h6>
                  <h5 class="publication_author">Author(s): Name will go here | Name will go here | Name will go Here | Name will go Here</h5>
              </div>
          </div>
          <div class="main_body center">
              <div class="abstract_main card text-black">
                <div class="card-header">
                  Abstract
                </div>
                <div class="abstract card-body">
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, vis et latine feugiat necessitatibus, ne per singulis 
                    scripserit, ne iuvaret fastidii usu. Illud persequeris nec ad, vim ut consul placerat
                    mnesarchum. Clita alienum consectetuer id sit. Pro unum tibique officiis at, eu nam 
                    labore docendi. Alia impedit oporteat eum in, ferri aliquando vis ut.

                    Usu nullam principes ne, ad imperdiet voluptatum vim. Te has utinam invenire. Ex 
                    electram interpretaris his, exerci graeco dignissim ne qui. Expetendis quaerendum usu 
                    id, nibh appareat eum ei. Ius an noster evertitur, etiam patrioque mea id.
                  </p>
                </div>
              </div>
          </div>
          <div class="min-vh-100 secondary_body center">
              <div class="row card pdf_view text-black">
                <div class="card-header">
                  Add as of right now
                </div>
                <div class="card-body">
                  <p class="card-text">
                    Include in the middle the publication
                  </p>
                  <p>
                    Publication View PDF
                  </p>
                  <p>
                    New tab using Adobe to view publication
                  </p>
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

#placeholder{
  display: flex;
}

  .left_section{
    width: 10%;
  }

  .middle_section{
    width: 80%;
  }

  .right_section{
    width: 10%
  }

.main_heading{
  padding-top: 50px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  background: #ddd;
  align-items: center;
  margin: auto;
  width: 82%;
}

.main_body{
    padding-top: 20px;
}

.publication_author{
    padding-bottom: 20px;
}

.abstract{
  width: 80%;
}

.abstract_main{
width: 50%;
margin-left: 140px;
background: #ddd;
}

.secondary_body{
  padding-top: 50px;
  width: 80%;
  margin: auto;
}

.pdf_view{
  background: #ddd;
  height: 800px;
}


</style>