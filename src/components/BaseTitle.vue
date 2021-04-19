<script>
export default {
    name: "BaseTitle",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    render(createElement) {
        return createElement("h3", { class: "title" }, this.title)
    }
}
</script>

<style lang="scss" scoped>
    .title {
        padding: 2rem 0;
        margin: 0
    }
</style>