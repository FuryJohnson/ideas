<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
        <div class="container">
            <h3 class="main-title">Want to suggest a topic?</h3>

            <AddForm />

            <Tabs />
            <div class="ideas">
                <IdeaItem v-for="item in items" :key="item" :item="item" />
            </div>
            <!-- <IdeaItem :isActive="true" />
            <IdeaItem /> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddForm from '@/components/AddForm.vue'; // @ is an alias to /src
import Tabs from '@/components/Tabs.vue'; // @ is an alias to /src
import IdeaItem from '@/components/IdeaItem.vue'; // @ is an alias to /src
import { db } from '../db';

@Component({
    components: {
        AddForm,
        Tabs,
        IdeaItem,
    },
})
export default class Home extends Vue {
    items = new Array();

    async mounted() {
        const doc = db.collection('ideas');
        doc.onSnapshot(docSnapsot => {
            const docs = docSnapsot.docs.map(doc => doc.data());
            this.items = docs;
        });
    }
    addLocation(title: string, text: string) {
        // <-- новый метод
        db.collection('ideas').add({ title, text });
        console.log(title, text);
        debugger;
    }
}
</script>
