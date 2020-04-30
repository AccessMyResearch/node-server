<template>
    <div id="user_info">
        <div class="overview_cards">
            <div class="card general_overview_cards">
                <div class="card-header" @click="showOverview = !showOverview">
                    Overview
                    <i class="icon fas fa-edit float-right"></i>
                </div>
                <transition name="expand">
                <div class="card-body" v-if="showOverview">
                    <p>First Name Last Name</p>
                    <p>Some Cool information about yourself</p>
                    <p>You major or degree</p>
                    <p>Maybe your location</p>
                </div>
                </transition>
            </div>
        </div>
        <div class="overview_cards">
            <div class="card general_overview_cards">
                <div class="card-header">
                    Experience
                    <i class="icon fas fa-edit float-right"></i>
                </div>
                <div class="card-body">
                    <p>Had my Experience at School A for 10 Years</p>
                    <hr>
                    <p>Something about Experience B Here</p>
                    <hr>
                    <p>Maybe You went to Experience C</p>
                </div>
            </div>
        </div>
        <div class="overview_cards">
            <div class="card general_overview_cards">
                <div class="card-header">
                    Education
                    <i class="icon fas fa-edit float-right"></i>
                </div>
                <div class="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est 
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                    </p>
                    <hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est 
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                    </p>
                    <hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est 
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                    </p>
                </div>
            </div>
        </div>
        <div class="overview_cards">
            <div class="card general_overview_cards">
                <div class="card-header">
                    License and Certification
                    <i class="icon fas fa-edit float-right"></i>
                </div>
                <div class="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est 
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                    </p>
                    <hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est 
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ["article"],
        data() {
            return {
                showOverview: true
            }
        }
    };

</script>

<style scoped>

#user_info{
    width: 100%;
    max-width: 1000px;
    padding: 5px;
    margin: 5px auto 0;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
}

.overview_cards{
    padding: 10px;
}

.general_overview_cards{
  background-color: var(--card-background);
  border-radius: 15px;
  width: 100%;
}

.expand-enter-active, .expand-leave-active {
    transition: max-height .02s;
    overflow: hidden;
}

.expand-enter, .expand-leave-to {
    max-height: 100px;
}

.icon:hover{
    color: azure;
}

</style>