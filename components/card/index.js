Component({
  properties: {
    url: String,
    desc: String,
    tags: Array,
  },
  methods: {
    handleTap() {
      this.triggerEvent('tapcard', {
        url: this.data.url,
        desc: this.data.desc,
        tags: this.data.tags,
      });
    },
  },
});