<template>
    <el-table
            :data="data.data"
            border
            height="580"
            style="width: 100%">
        <el-table-column
                v-for="(item, index) in data.title"
                :key=index
                :prop="item.prop"
                :label="item.label">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "j-query-selector-table",
        props: ['data']
    }
</script>

<style scoped>

</style>