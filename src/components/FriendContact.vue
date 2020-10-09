<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ phoneNumber }}</li>
    <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="deleteContact">Delete</button>
  </li>
</template>
<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite'
  // ],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === '1' || value === '0'
      // }
    },
  },
  // DOCUMENTATION: define which custom events your component will emit
  emits: ['toggle-favourite', 'delete-contact'],
  // NOTE: example validation function - give developers warning if they do not pass an expected parameter (id)
  // emits: {
  //   'toggle-favourite': function(id) {
  //     if (id) {
  //       return true
  //     } else {
  //       console.error('Id is missing!')
  //       return false
  //     }
  //   }
  // },
  data () {
    return {
      detailsAreVisible: false
    }
  },
  methods: {
    deleteContact() {
      this.$emit('delete-contact', this.id)
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id) // convention: always use kebab-case for events
    }
  }
}
</script>