<template>
    <div class="containers">
        <div class="canvas" ref="canvas"></div>
        <div v-html="modelSvg"></div>
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
        this.initBpmnViewer()
        await this.createNewDiagram(xmlStr)
        // this.showDiagram()
    },
    data() {
        return {
            // bpmn建模器
            bpmnModeler: null,
            container: null,
            canvas: null,

            modelSvg:'',
        }
    },
    // 方法集合
    methods: {
        initBpmnViewer() {
            const canvas = this.$refs.canvas
            this.bpmnViewer = new BpmnViewer({
                container: canvas
            })
        },
        async createNewDiagram(modelXml) {
            try {
                const result = await this.bpmnViewer.importXML(modelXml)
                // this.$refs.canvas.zoom('fit-viewport', 'auto');
                const { warnings } = result
                console.log(warnings)
            } catch (err) {
                console.log(err.message, err.warnings)
            }
        },
        showDiagram () {
            const that = this
            this.bpmnViewer.saveXML({ format: true }, (err, xml) => {
                console.log('===err',err)
                console.log('===xml',xml)
                if (!err) {
                    // 从建模器画布中提取svg图形标签
                    let context = ''
                    const djsGroupAll = this.$refs.canvas.querySelectorAll('.djs-group')
                    for (const item of djsGroupAll) {
                        context += item.innerHTML
                    }
                    console.log('context', context)
                    // 获取svg的基本数据，长宽高
                    const viewport = this.$refs.canvas
                        .querySelector('.viewport')
                        .getBBox()

                    // 将标签和数据拼接成一个完整正常的svg图形
                    const svg = `
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="${viewport.width}"
                          height="${viewport.height}"
                          viewBox="${viewport.x} ${viewport.y} ${viewport.width} ${viewport.height}"
                          version="1.1"
                          >
                          ${context}
                        </svg>
                      `
                    that.modelSvg = svg
                }
            })
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
