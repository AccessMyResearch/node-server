<template>
    <div class="left_column">
        <div class="sidebar_content" v-if="sidebarDisplay">
            <div class="collapsible sidenav">
                <div class="sidebar_option_header" v-on:click="trendingFilterDisplay = !trendingFilterDisplay">
                    <h5 class="sidebar_option_title">Trending</h5>
                </div>
            </div>

            <div class="collapsible sidenav">
                <div class="sidebar_option_header" v-on:click="yearFilterDisplay = !yearFilterDisplay">
                    <h5 class="sidebar_option_title">Year</h5>
                </div>
                <div class="sidebar_option_content" v-if="yearFilterDisplay">
                    <div class="filteredOptions">
                        <div class="input-group">
                            <input type="text" class="form-control" v-model="min" placeholder="Min"/>
                            <input type="text" class="form-control" v-model="max" placeholder="Max"/>
                        </div>
                      <button type="button" @click="makeFilterRequest" class="btn btn-primary">Apply</button>
                    </div>
                </div>
            </div>

            <div class="collapsible sidenav">
                <div class="sidebar_option_header" v-on:click="areaFilterDisplay = !areaFilterDisplay">
                    <h5 class="sidebar_option_title">Area</h5>
                </div>
                <div class="sidebar_option_content" v-if="areaFilterDisplay">
                    <ul class="filteredOptions" style="clear:both">
                        <li><a href="#">Put some stuff here</a></li>
                    </ul>
                </div>
            </div>

            <div class="collapsible sidenav">
                <div class="sidebar_option_header" v-on:click="typeFilterDisplay = !typeFilterDisplay">
                    <h5 class="sidebar_option_title">Type</h5>
                </div>
                <div class="sidebar_option_content" v-if="typeFilterDisplay">
                    <ul class="filteredOptions" style="clear:both">
                        <li><a href="#">Put some stuff here</a></li>
                    </ul>
                </div>
            </div>

            <div class="collapsible sidenav">
                <div class="sidebar_option_header" v-on:click="readingListFilterDisplay = !readingListFilterDisplay">
                    <h5 class="sidebar_option_title">Reading List</h5>
                </div>
                <div class="sidebar_option_content" v-if="readingListFilterDisplay">
                    <ul class="filteredOptions" style="clear:both">
                        <li><a href="#">Put some stuff here</a></li>
                    </ul>
                </div>
            </div>

            <div class="toggle_off float-right" v-if="sidebarDisplay">
                <i @click="sidebarDisplay = !sidebarDisplay" class="fas fa-compress-alt"></i>
            </div>

        </div>
        <div class="toggle_on" v-else>
            <i @click="sidebarDisplay = !sidebarDisplay" class="fas fa-expand-alt"></i>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                sidebarDisplay: true,
                trendingFilterDisplay: false,
                yearFilterDisplay: false,
                areaFilterDisplay: false,
                typeFilterDisplay: false,
                readingListFilterDisplay: false,
                min: 1500,
                max: 2020
            };
        },
        methods: {
            makeFilterRequest() {
                let filterObj = {
                    author: null,
                    startYear: this.min,
                    endYear: this.max
                };
                this.$store.commit('SET_FILTERS', filterObj);
                this.$store.dispatch('applyFilters');
            }
        }
    };
</script>


<style scoped>
    @import '../assets/css/mainpage.css';

    .sidebar_option_header {
        display: flex;
        border-bottom: 1px solid #333333;
    }

    /*.sidebar_option_title {*/
    /*    width: fit-content;*/
    /*    padding: 0 5px;*/
    /*    border-top: 1px solid #333333;*/
    /*    border-left: 1px solid #333333;*/
    /*    border-right: 1px solid #333333;*/
    /*    border-top-left-radius: 5px;*/
    /*    border-top-right-radius: 5px;*/
    /*    margin-left: 10px;*/
    /*}*/

    .sidebar_option_content {
        padding: 5px;
        border-left: 1px solid #333333;
        border-right: 1px solid #333333;
        border-bottom: 1px solid #333333;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .sidebar_content {
        position: relative;
        padding: 5px;
        margin-right: 5px;
        background-color: var(--card-background);
        overflow: auto;
    }

    .toggle_off {
        width: 15px;
        height: 15px;
        border-top: 1px solid var(--card-background);
        border-left: 1px solid var(--card-background);
        border-top-left-radius: 2px;
        text-align: center;
        float: right;
        font-size: 10pt;
    }

    .toggle_on {
        display: flex;
        width: 15px;
        height: 15px;
        border-right: 1px solid var(--card-background);
        border-bottom: 1px solid var(--card-background);
        border-bottom-right-radius: 2px;
        background-color: var(--bg-color);
        color: var(--card-background);
        font-size: 10pt;
    }

    .sidenav {
    }

    .collapsible {
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .active, .collapsible:hover {
        background-color: rgb(175, 175, 175);
    }

    .filteredOptions {
        font-size: 15px;
        background-color: var(--card-background);
        margin-bottom: 0;
    }

    .filteredOptions li {
        display: block;
    }

    .fa-compress-alt, .fa-expand-alt {
        transform: rotate(90deg);
    }

</style>