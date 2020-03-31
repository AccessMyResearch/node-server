<template>
    <div>
        <app-article v-for="article in articles" :article="article"></app-article>
    </div>
</template>

<script>
import articles from '../TestData/articles';
import Article from './Article.vue';

export default {
    data() {
        return {
            articles: [
                {id: 1, title: 'Article #1', author: 'Mehmet', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam elit, rutrum nec laoreet vel, condimentum at nisl. Quisque lobortis congue neque vel fringilla. Duis eget gravida metus. Vestibulum id quam eu mi lobortis porttitor at eu arcu. Nullam ornare risus eu laoreet luctus. Sed feugiat nibh et lacinia lacinia. Sed convallis tincidunt velit, non scelerisque sem luctus sed. Maecenas congue lacus eget felis tincidunt, vestibulum semper metus ullamcorper. Vestibulum eleifend fringilla purus sed aliquet. Praesent quis ipsum nisi.'},
                {id: 2, title: 'Article #2', author: 'Jashan', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie ex finibus, dignissim est ut, mollis odio. Suspendisse luctus diam nec tortor sagittis accumsan. Sed eget nisi eget felis fringilla molestie. Integer tempor maximus congue. Aenean eu ligula vel quam tincidunt varius id consectetur lorem. Ut mollis, nunc quis sollicitudin tincidunt, mauris orci semper nisl, id tempor nibh leo ultricies orci. Nam quis justo varius, semper augue nec, malesuada est. Praesent nec augue a augue malesuada porttitor. Sed mattis urna in metus vulputate, vitae convallis augue eleifend. Duis ut turpis eget dui luctus faucibus. Donec vulputate eros et lectus malesuada, non lobortis est hendrerit. Sed commodo congue mauris eget consectetur. Fusce quis interdum arcu. Praesent quis vehicula velit. Aliquam sodales aliquam mauris non consectetur.'},
                {id: 3, title: 'Article #3', author: 'Isabelle', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac faucibus tortor, in aliquet mi. Aliquam ullamcorper dignissim risus et gravida. Pellentesque viverra auctor quam, eget ultricies justo gravida eget. Suspendisse elementum nunc vitae arcu lacinia, vitae porttitor turpis egestas. Duis laoreet cursus ligula, lobortis accumsan orci auctor a. Morbi eros nunc, ultricies sed tincidunt ultricies, consectetur ac neque. Fusce nec tellus erat. Nam pharetra convallis est quis congue. In vel urna ante. Donec eu turpis dolor. Sed id lectus eu ligula mattis viverra quis id neque. Mauris convallis neque sit amet sodales mattis. Integer et aliquet ligula.'},
                {id: 4, title: 'Article #4', author: 'Tom Nook, Timmy Nook', abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium pulvinar eros, eu efficitur tortor convallis vel. Nulla eu leo elementum, porttitor sapien vel, hendrerit mauris. Aenean sed mi nibh. Phasellus suscipit luctus odio, at vestibulum enim vehicula suscipit. Praesent laoreet, nisl a feugiat imperdiet, mi nulla pellentesque libero, at porta metus eros id felis. Morbi venenatis semper purus et vehicula. Nullam dolor nibh, tempor ut accumsan sed, ornare sed eros. Pellentesque lorem ligula, iaculis quis nunc et, fermentum iaculis dolor. Suspendisse luctus, velit eu bibendum dapibus, nulla mauris posuere nisl, eu cursus massa turpis non mi. Praesent ipsum odio, ultrices sagittis ultrices at, facilisis vel purus.'}
            ]
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