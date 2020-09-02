<template>
  <div id="article_description"> 
    <div class="article_cards">
      <div class="title_card information_cards">
        <div class="card">
          <div class="card-body">
            <div class="publicaion_information">
              <h2 class="title">This is where the title of the publication title will go here </h2>
              <h6 class="publication_date text-muted">Publication date: Goes Here</h6>
              <h6 class="publication_DOI text-muted">Publication DOI: Goes Here</h6>
              <h5 class="publication_author">Author(s): Name will go here | Name will go here | Name will go Here | Name will go Here</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="information_cards main_body center">
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
      <div class="information_cards secondary_body center">
        <div class="card pdf_view text-black">
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
</template>

<script>

</script>

<style scoped>

.article_cards{
  width: 100%;
  max-width: 1000px;
  padding: 5px;
  padding-top: 30px;
  margin: 5px auto 0;
  display: flex;
  flex-direction: column;
}


.information_cards{
  padding: 10px;
}

.card{
  border-radius: 15px;
  background: var(--card-background);
}


</style>