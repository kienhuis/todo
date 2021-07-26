import { createApp } from 'vue'
import App from './App.vue'

import Bla from "@/components/todo_text.vue";
import Foo from "@/components/todo_image.vue";

const app = createApp(App)
app.component('bla',  Bla )
app.component('foo',  Foo )

app.mount('#app')
