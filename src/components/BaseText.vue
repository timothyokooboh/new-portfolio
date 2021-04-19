<script>
export default {
    name: "BaseTitle",
    render(createElement) {
        return createElement("div", { class: "text" }, this.$slots.default)
    }
}
</script>

<style lang="scss" scoped>
    .text {
        padding-bottom: 2rem;
        line-height: 1.8rem;
    }
</style>