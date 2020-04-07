<template>
    <div>
        <app-article v-for="article in response.publications" :article="article"></app-article>
    </div>
</template>

<script>
import articles from '../TestData/articles';
import Article from './Article.vue';

var response = {
  "publications": [
    {
      "title": "Sample Article 1",
      "doi": "XX1234.56",
      "url": "accessmyresearch.org",
      "publicationDate": "2020-03-01",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dolor risus, iaculis ac urna pharetra, placerat viverra sem. Donec euismod aliquet ligula, vel volutpat eros pellentesque vitae. In tempor est in ipsum vulputate consequat. Aliquam finibus porta nisi, ac ultricies orci ultricies eu. Ut risus ex, gravida eu rhoncus a, aliquet ut diam. Curabitur efficitur felis justo, ac cursus metus auctor non. In vel tellus mauris. Nam fermentum vehicula hendrerit. Aliquam vitae consectetur tortor, in bibendum sem. In lorem mauris, aliquam sed vestibulum suscipit, efficitur a velit. Quisque eu sem a velit sollicitudin volutpat. Suspendisse potenti. Maecenas eget nisl ac eros tristique pretium. Phasellus elementum fringilla orci ut sagittis. Nulla hendrerit lacinia neque. Aenean pharetra dui non faucibus tempus.",
      "authors": [
        {
          "id": 1,
          "userId": 3,
          "orcidId": "0000000123456789",
          "name": "Sample Name 1"
        },
		{
          "id": 2,
          "userId": 4,
          "orcidId": "0000030123456789",
          "name": "Sample Name 2"
        },
		{
          "id": 2,
          "userId": 4,
          "orcidId": "0000030123456789",
          "name": "Sample Name 3"
        },
		{
          "id": 2,
          "userId": 4,
          "orcidId": "0000030123456789",
          "name": "Sample Name 4"
        }
      ]
    },
    {
      "title": "Sample Article 2",
      "doi": "YY9876.54",
      "url": "accessmyresearch.com",
      "publicationDate": "2020-03-01",
      "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae tortor non velit consectetur ullamcorper vel maximus nulla. Praesent non magna et ex ultrices tempor. Ut vestibulum neque sed nulla interdum porta. Aliquam in scelerisque ante, ut euismod urna. Curabitur dictum semper nibh sit amet ullamcorper. Vestibulum vehicula orci in sapien vehicula hendrerit. Pellentesque erat velit, auctor sed eleifend id, vehicula eu nisi. Phasellus at laoreet magna. Nunc consectetur tincidunt metus sit amet aliquet. Nulla scelerisque neque at metus finibus vehicula. Sed in malesuada ex. Cras nec erat nec felis fermentum dictum. Mauris volutpat sem nunc, ac pretium libero feugiat eget.",
      "authors": [
        {
          "id": 1,
          "userId": 3,
          "orcidId": "0000000123456789",
          "name": "Sample Name 1"
        }
      ]
    },
    {
      "title": "System size reduction in stochastic simulations of the facilitated diffusion mechanism.",
      "doi": "10.1186/1752-0509-6-121",
      "url": "dblp.org/db/journals/bmcsb/bmcsb6.html#Zabet12",
      "publicationDate": "2012-09-08",
      "summary": "Background: Site-specific Transcription Factors (TFs) are proteins that bind to specific sites on the DNA and control the activity of a target gene by enhancing or decreasing the rate at which the gene is transcribed by RNA polymerase. The process by which TF molecules locate their target sites is a key component of transcriptional regulation. Therefore it is essential to gain insight into the mechanisms by which TFs search for the target sites.\nResearch in this area uses experimental and analytical approaches, but also stochastic simulations of the search process. Previous work based on stochastic simulations focussed only on short sequences, primarily for reasons of technical feasibility. Many of these studies had to disregard possible biases introduced by reducing a genome-wide system to a smaller subsystem. In particular, we identified crucial parameters that require adjustment, which were not adequately changed in these previous studies.\nResults: We investigated several methods that adequately adapt the parameters of stochastic simulations of the facilitated diffusion, when the full sequence space is reduced to smaller regions of interest. We found two methods that scale the system accordingly: the copy number model and the association rate model. We systematically compared the results produced by simulations of the subsystem with respect to the original system. Our results confirmed that the copy number model is adequate only for high abundance TFs, while for low abundance TFs the association rate model is the only one that reproduces with high accuracy the results of the full system.\nConclusions: We propose a strategy to reduce the size of the system that adequately adapts important parameters to capture the behaviour of the full system. This enables correct simulations of a smaller sequence space (which can be as small as 100 Kbp) and, thus, provides independence from computationally intensive genome-wide simulations of the facilitated diffusion mechanism.\nKeywords: Simulation speed, Transcription factor copy number, DNA locus, Gene regulation, Transcription factor diffusion, Binding affinity, Occupancy profile, lacI",
      "authors": [
        {
          "id": 2,
          "userId": null,
          "orcidId": "0000000199646271",
          "name": "Nicolae Radu Zabet"
        }
      ]
    },
    {
      "title": "GRiP: a computational tool to simulate transcription factor binding in prokaryotes.",
      "doi": "10.1093/bioinformatics/bts132",
      "url": "https://dblp.org/db/journals/bioinformatics/bioinformatics28.html#ZabetA12",
      "publicationDate": "2012-05-01",
      "summary": "Motivation: Transcription factors (TFs) are proteins that regulate gene activity by binding to specific sites on the DNA. Understanding the way these molecules locate their target site is of great importance in understanding gene regulation. We developed a comprehensive computational model of this process and estimated the model parameters in (N.R.Zabet and B.Adryan, submitted for publication).\nResults: GRiP (gene regulation in prokaryotes) is a highly versatile implementation of this model and simulates the search process in a computationally efficient way. This program aims to provide researchers in the field with a flexible and highly customizable simulation framework. Its features include representation of DNA sequence, TFs and the interaction between TFs and the DNA (facilitated diffusion mechanism), or between various TFs (cooperative behaviour). The software will record both information on the dynamics associated with the search process (locations of molecules) and also steady-state results (affinity landscape, occupancy-bias and collision hotspots).\nAvailability: http://logic.sysbiol.cam.ac.uk/grip\nContact: n.r.zabet@gen.cam.ac.uk\nSupplementary information: Supplementary data are available at Bioinformatics online.",
      "authors": [
        {
          "id": 2,
          "userId": null,
          "orcidId": "0000000199646271",
          "name": "Nicolae Radu Zabet"
        },
        {
          "id": 3,
          "userId": null,
          "orcidId": "0000000345887867",
          "name": "Boris Adryan"
        }
      ]
    }
  ]
}
//var responseMockData = JSON.parse(response).publications;

export default {
    data() {
        return {
            response
            // articles: [
            //     {id: 1, title: 'Article #1', author: 'Brewster', year: 2020, link: 'https://jamanetwork.com/journals/jama/article-abstract/2762028',abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam elit, rutrum nec laoreet vel, condimentum at nisl. Quisque lobortis congue neque vel fringilla. Duis eget gravida metus. Vestibulum id quam eu mi lobortis porttitor at eu arcu. Nullam ornare risus eu laoreet luctus. Sed feugiat nibh et lacinia lacinia. Sed convallis tincidunt velit, non scelerisque sem luctus sed. Maecenas congue lacus eget felis tincidunt, vestibulum semper metus ullamcorper. Vestibulum eleifend fringilla purus sed aliquet. Praesent quis ipsum nisi.'},
            //     {id: 2, title: 'Article #2', author: 'Digby',  year: 2020, link: 'https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(20)30076-X/fulltext?fbclid=IwAR3W1UxYNeWLi6LoadETw9hcNDB1kJa-0rD07MKPzvWD6ROddsjx5UQpbGU', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie ex finibus, dignissim est ut, mollis odio. Suspendisse luctus diam nec tortor sagittis accumsan. Sed eget nisi eget felis fringilla molestie. Integer tempor maximus congue. Aenean eu ligula vel quam tincidunt varius id consectetur lorem. Ut mollis, nunc quis sollicitudin tincidunt, mauris orci semper nisl, id tempor nibh leo ultricies orci. Nam quis justo varius, semper augue nec, malesuada est. Praesent nec augue a augue malesuada porttitor. Sed mattis urna in metus vulputate, vitae convallis augue eleifend. Duis ut turpis eget dui luctus faucibus. Donec vulputate eros et lectus malesuada, non lobortis est hendrerit. Sed commodo congue mauris eget consectetur. Fusce quis interdum arcu. Praesent quis vehicula velit. Aliquam sodales aliquam mauris non consectetur.'},
            //     {id: 3, title: 'Article #3', author: 'Isabelle',  year: 2020, link: 'https://www.ncbi.nlm.nih.gov/pubmed/32064853', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac faucibus tortor, in aliquet mi. Aliquam ullamcorper dignissim risus et gravida. Pellentesque viverra auctor quam, eget ultricies justo gravida eget. Suspendisse elementum nunc vitae arcu lacinia, vitae porttitor turpis egestas. Duis laoreet cursus ligula, lobortis accumsan orci auctor a. Morbi eros nunc, ultricies sed tincidunt ultricies, consectetur ac neque. Fusce nec tellus erat. Nam pharetra convallis est quis congue. In vel urna ante. Donec eu turpis dolor. Sed id lectus eu ligula mattis viverra quis id neque. Mauris convallis neque sit amet sodales mattis. Integer et aliquet ligula.'},
            //     {id: 4, title: 'Article #4', author: 'Tom Nook, Timmy Nook',  year: 2020, abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium pulvinar eros, eu efficitur tortor convallis vel. Nulla eu leo elementum, porttitor sapien vel, hendrerit mauris. Aenean sed mi nibh. Phasellus suscipit luctus odio, at vestibulum enim vehicula suscipit. Praesent laoreet, nisl a feugiat imperdiet, mi nulla pellentesque libero, at porta metus eros id felis. Morbi venenatis semper purus et vehicula. Nullam dolor nibh, tempor ut accumsan sed, ornare sed eros. Pellentesque lorem ligula, iaculis quis nunc et, fermentum iaculis dolor. Suspendisse luctus, velit eu bibendum dapibus, nulla mauris posuere nisl, eu cursus massa turpis non mi. Praesent ipsum odio, ultrices sagittis ultrices at, facilisis vel purus.'}
            // ]
        }
    },
    components: {
        appArticle: Article
    },
    /*computed: {
        article() {
            return articles;
        }
    }*/
}
</script>