<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ phoneNumber }}</li>
    <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
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
  emits: ['toggle-favourite'],
  // NOTE: example validation function - give developers warning if they do not pass an expected parameter (id)
  // emits: {
  //   'toggle-favourite': function(id) {
  //     if (id) {
  //       return true
  //     } else {
  //       console.log('Id is missing!')
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
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite() {
      this.$emit('toggle-favourite', this.id) // convention: always use kebab-case for events
    }
  }
}
</script>