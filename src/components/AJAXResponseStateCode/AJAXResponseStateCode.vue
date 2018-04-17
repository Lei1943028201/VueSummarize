<template>
    <div id="ajax-response-state-code-warp" v-if="AJAXResponseStateCodeData.success">
        <el-tree
                :data="data"
                :props="defaultProps"
                accordion
                @node-click="handleNodeClick">
        </el-tree>
        <p>100——客户必须继续发出请求</p>
        <p>101——客户要求服务器根据请求转换HTTP协议版本</p>
        <p>200——交易成功</p>
        <p>201——提示知道新文件的URL</p>
        <p>202——接受和处理、但处理未完成</p>
        <p>203——返回信息不确定或不完整</p>
        <p>204——请求收到，但返回信息为空</p>
        <p>205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件</p>
        <p>206——服务器已经完成了部分用户的GET请求</p>
        <p>300——请求的资源可在多处得到</p>
        <p>301——删除请求数据</p>
        <p>302——在其他地址发现了请求数据</p>
        <p>303——建议客户访问其他URL或访问方式</p>
        <p>304——客户端已经执行了GET，但文件未变化</p>
        <p>305——请求的资源必须从服务器指定的地址得到</p>
        <p>306——前一版本HTTP中使用的代码，现行版本中不再使用</p>
        <p>307——申明请求的资源临时性删除</p>
        <p>400——错误请求，如语法错误</p>
        <p>401——请求授权失败</p>
        <p>402——保留有效ChargeTo头响应</p>
        <p>403——请求不允许</p>
        <p>404——没有发现文件、查询或URl</p>
        <p>405——用户在Request-Line字段定义的方法不允许</p>
        <p>406——根据用户发送的Accept拖，请求资源不可访问</p>
        <p>407——类似401，用户必须首先在代理服务器上得到授权</p>
        <p>408——客户端没有在用户指定的饿时间内完成请求</p>
        <p>409——对当前资源状态，请求不能完成</p>
        <p>410——服务器上不再有此资源且无进一步的参考地址</p>
        <p>411——服务器拒绝用户定义的Content-Length属性请求</p>
        <p>412——一个或多个请求头字段在当前请求中错误</p>
        <p>413——请求的资源大于服务器允许的大小</p>
        <p>414——请求的资源URL长于服务器允许的长度</p>
        <p>415——请求资源不支持请求项目格式</p>
        <p>416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段</p>
        <p>417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求</p>
        <p>500——服务器产生内部错误</p>
        <p>501——服务器不支持请求的函数</p>
        <p>502——服务器暂时不可用，有时是为了防止发生系统过载</p>
        <p>503——服务器过载或暂停维修</p>
        <p>504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长</p>
        <p>505——服务器不支持或拒绝支请求头中指定的HTTP版本</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                data: [
                    {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
        },
        created(){
            this.$store.dispatch('getAJAXResponseStateCodeData')
        },
        computed: {
            ...mapState(['AJAXResponseStateCodeData'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    /*#ajax-response-state-code-warp*/
        /*p*/

</style>