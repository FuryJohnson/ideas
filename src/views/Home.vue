<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
        <div class="container">
            <h3 class="main-title">Хотите предложить тему?</h3>

            <AddForm />

            <Tabs />
            <div class="ideas">
                <IdeaItem isActive="true" />
                <IdeaItem />
                <IdeaItem />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddForm from '@/components/AddForm.vue'; // @ is an alias to /src
import Tabs from '@/components/Tabs.vue'; // @ is an alias to /src
import IdeaItem from '@/components/IdeaItem.vue'; // @ is an alias to /src

@Component({
    components: {
        AddForm,
        Tabs,
        IdeaItem,
    },
})
export default class Home extends Vue {}
</script>
