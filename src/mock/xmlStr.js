// export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
// <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
// <process id="Process_1" isExecutable="false">
//     <startEvent id="StartEvent_1y45yut" name="开始">
//     <outgoing>SequenceFlow_0h21x7r</outgoing>
//     </startEvent>
//     <task id="Task_1hcentk">
//     <incoming>SequenceFlow_0h21x7r</incoming>
//     </task>
//     <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
// </process>
// <bpmndi:BPMNDiagram id="BpmnDiagram_1">
//     <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
//     <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
//         <omgdc:Bounds x="152" y="102" width="36" height="36" />
//         <bpmndi:BPMNLabel>
//         <omgdc:Bounds x="160" y="145" width="22" height="14" />
//         </bpmndi:BPMNLabel>
//     </bpmndi:BPMNShape>
//     <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
//         <omgdc:Bounds x="240" y="80" width="100" height="80" />
//     </bpmndi:BPMNShape>
//     <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
//         <omgdi:waypoint x="188" y="120" />
//         <omgdi:waypoint x="240" y="120" />
//     </bpmndi:BPMNEdge>
//     </bpmndi:BPMNPlane>
// </bpmndi:BPMNDiagram>
// </definitions>`

export var xmlStr = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_1bv5s4w" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.6.0">
  <bpmn:process id="netbankPay" name="付款办理" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_0yt8xs5</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0yt8xs5" sourceRef="StartEvent_1" targetRef="Activity_0c2cl2b" />
    <bpmn:userTask id="Activity_0c2cl2b" name="审批节点1" camunda:candidateUsers="006f101770ee4999a90ee535c64aa503">
      <bpmn:incoming>Flow_0yt8xs5</bpmn:incoming>
      <bpmn:outgoing>Flow_1nmflya</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:sequenceFlow id="Flow_1nmflya" sourceRef="Activity_0c2cl2b" targetRef="Activity_12etkfd" />
    <bpmn:userTask id="Activity_12etkfd" name="审批节点2" camunda:candidateUsers="006f101770ee4999a90ee535c64aa503">
      <bpmn:incoming>Flow_1nmflya</bpmn:incoming>
      <bpmn:outgoing>Flow_0nmxly8</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:endEvent id="Event_0rl3g9q">
      <bpmn:incoming>Flow_0nmxly8</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0nmxly8" sourceRef="Activity_12etkfd" targetRef="Event_0rl3g9q" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="netbankPay">
      <bpmndi:BPMNEdge id="Flow_0yt8xs5_di" bpmnElement="Flow_0yt8xs5">
        <di:waypoint x="215" y="117" />
        <di:waypoint x="270" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1nmflya_di" bpmnElement="Flow_1nmflya">
        <di:waypoint x="370" y="117" />
        <di:waypoint x="430" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0nmxly8_di" bpmnElement="Flow_0nmxly8">
        <di:waypoint x="530" y="117" />
        <di:waypoint x="592" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1m096h4_di" bpmnElement="Activity_0c2cl2b">
        <dc:Bounds x="270" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0cdveyo_di" bpmnElement="Activity_12etkfd">
        <dc:Bounds x="430" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0rl3g9q_di" bpmnElement="Event_0rl3g9q">
        <dc:Bounds x="592" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`
