<template>
    <div class="containers">
        <div class="canvas" ref="canvas"></div>
    </div>
</template>


<script>
// 引入相关的依赖
import BpmnViewer from "bpmn-js/lib/Viewer";
import {xmlStr} from "../mock/xmlStr";


export default {
    name: '',
    components: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
    mounted() {
        this.initBpmnViewer()
    },
    data() {
        return {
            // bpmn建模器
            bpmnModeler: null,
            container: null,
            canvas: null
        }
    },
    // 方法集合
    methods: {
        initBpmnViewer() {
            const canvas = this.$refs.canvas
            this.bpmnViewer = new BpmnViewer({
                container: canvas
            })
            this.createNewDiagram(xmlStr)

        },
        async createNewDiagram(modelXml) {
            try {
                const result = await this.bpmnViewer.importXML(modelXml)
                this.$refs.canvas.zoom('fit-viewport', 'auto');
                const { warnings } = result
                console.log(warnings)
            } catch (err) {
                console.log(err.message, err.warnings)
            }
        }
    },
// 计算属性
    computed: {}
}
</script>

<style scoped>
.containers {
    background-color: #ffffff;
    width: 100%;
    height: calc(100vh - 52px);
}

.canvas {
    width: 100%;
    height: 100%;
}

.panel {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
}
</style>
