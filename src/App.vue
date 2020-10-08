<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      friends: [
        {
          id: 'jim',
          name: 'Jim Studious',
          phone: '555 444 3333',
          email: 'jim@localhost.com'
        },
        {
          id: 'mary',
          name: 'Mary Moxie',
          phone: '555 223 3344',
          email: 'mary@localhost.com'
        },
        {
          id: 'eduina',
          name: 'Eduina Mitchell',
          phone: '535 723 9999',
          email: 'eduina@localhost.com'
        }
      ]
    }
  }
}
</script>