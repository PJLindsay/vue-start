import { createApp } from 'vue';

import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import AddEditContact from './components/AddEditContact.vue'

const app = createApp(App)

app.component('friend-contact', FriendContact)
app.component('addedit-contact', AddEditContact)

app.mount('#app');
