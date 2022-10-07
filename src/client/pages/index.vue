<template>
  <div>
    <div>測試區</div>
    <div>
      <img :src="dogImage" alt="" />
    </div>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      dogImage: "",
    };
  },
  async fetch() {
    await this.getDogInfo();
  },
  methods: {
    async getDogInfo() {
      try {
        const { message } = await this.$api.dog.getDogInfo();
        this.dogImage = message;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
