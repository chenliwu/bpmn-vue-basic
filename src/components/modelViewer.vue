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
    async mounted() {
        this.initBpmnViewer();
        await this.createNewDiagram(xmlStr)
        // this.showDiagram()
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
            // 初始时清除图层
            this.bpmnViewer && this.bpmnViewer.destroy();
            this.$refs.canvas.innerHTML = "";
            this.bpmnViewer = new BpmnViewer({
                container: canvas
            })

        },
        async createNewDiagram(modelXml) {
            try {
                const result = await this.bpmnViewer.importXML(modelXml)
                console.log('result',result)
                // this.$refs.canvas.zoom('fit-viewport', 'auto');
                // 屏幕自适应
                const canvas = this.bpmnViewer.get('canvas')
                canvas.zoom('fit-viewport', 'auto')
                this.setNodeColor(['Activity_0c2cl2b'],'nodeSuccess',canvas)
            } catch (err) {
                console.log(err.message, err.warnings)
            }
        },
        // 设置高亮颜色的class
        setNodeColor (nodeCodes, colorClass, canvas) {
            for (let i = 0; i < nodeCodes.length; i++) {
                canvas.addMarker(nodeCodes[i], colorClass)
            }
        }
    },
    // 计算属性
    computed: {}
}
</script>

<style>

.containers {
    background-color: #ffffff;
    width: 100%;
    height: calc(100vh - 52px);
}

.canvas {
    width: 100%;
    height: 100%;
}

.nodeSuccess:not(.djs-connection) .djs-visual > :nth-child(1) {
    stroke: red !important;
    stroke-width: 3px;
    /* elements as success */
}


</style>
