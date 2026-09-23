'use strict';
ROM_ACTIVITIES.push({
 id:'shoulder-flexion',type:'scored',label:'Shoulder Flexion',joint:'Shoulder',motion:'Flexion',side:'Right',region:'shoulder',proximal:'thorax',distal:'humerus',typicalROM:180,flexionDirection:-1,readingMode:'overlap-zero',hidePatientUntilPosition:true,
 positionLabel:'Supine · knees flexed · lumbar spine supported',scenario:'Measure right shoulder AROM flexion. Identify the standard patient position before viewing the patient.',
 axisName:'lateral aspect of the greater tubercle region',proximalReference:'midaxillary line of the thorax',distalReference:'lateral midline of the humerus toward the lateral epicondyle',
 description:'Whole-patient medical render: the person is supine with knees flexed and feet supported to limit lumbar extension. The right elbow stays extended as the arm elevates. Head, thorax, low back and pelvis remain supported in all three complete images.',
 poseCaption:'Whole-patient poses: start at the side, elevate through 90 degrees, then reach overhead while the trunk remains supported. No separated or overlaid limb segments.',
 motionInstruction:'Keep the head, thorax, low back and pelvis supported. Watch for rib flare or lumbar extension. Reposition the fulcrum and realign BOTH instrument arms.',
 placementGuide:'Place the fulcrum at the lateral shoulder. Point the stationary arm along the midaxillary trunk line toward the hips and the moving arm toward the lateral elbow. At zero, the two arms should be nearly aligned.',
 visualStyle:'3d-medical-render',bodyView:'whole-patient-lateral-shoulder-flexion',
 poses:[
  {image:'assets/shoulder-start.png',angle:0,x:222,y:369,s:0,m:0,label:'Start · both arms align toward the hips'},
  {image:'assets/shoulder-partway.png',angle:90,x:200,y:365,s:0,m:270,label:'Partway · stationary arm remains along the trunk'},
  {image:'assets/shoulder-end.png',angle:140,x:193,y:365,s:0,m:220,label:'Endpoint · screen for trunk compensation'}
 ],
 visual:{image:'assets/shoulder-start.png',x:0,y:80,width:800,height:500,clipAngle:0,neutralForearmRotation:0,forearmLengthScale:1,jointBlendRadius:35,referenceLength:225,overlayDuration:4500},
 axis:{targetX:222,targetY:369,tolerance:35,showHotspotAfterAnswer:false},stationaryArm:{targetAngle:0,tolerance:12},movingArm:{targetAngle:0,tolerance:12},
 startAngle:0,endAngle:140,readingTolerance:3,estimateTolerance:20,
 skillLabels:{zeroRecognition:'Zero & Compensation'},
 questions:[
  {skill:'patientPosition',title:'Choose the patient position',question:'What is the standard position for shoulder-flexion goniometry in this activity?',choices:['Supine with knees flexed, feet supported, elbow extended, and palm facing the body','Prone with the tested arm behind the trunk and knees extended','Standing with the low back arched to increase overhead reach','Sidelying on the tested shoulder with the elbow flexed'],correct:0,hint:'Choose a supported position that helps control the thorax and lumbar spine while the straight arm elevates.',explanation:'Use supine with the knees flexed and feet supported to help keep the lumbar spine flat. Begin with the elbow extended and the forearm neutral. The patient image is now shown.'},
  {skill:'axisKnowledge',title:'Identify the shoulder axis',question:'Where should the goniometer fulcrum be centered?',choices:['Lateral epicondyle of the humerus','Lateral aspect of the greater tubercle region','Acromioclavicular joint line','Inferior angle of the scapula'],correct:1,hint:'Use the lateral proximal-humerus landmark near the center of shoulder rotation.',explanation:'Center the fulcrum over the lateral aspect of the greater tubercle region.'},
  {skill:'stationaryArmKnowledge',title:'Identify the stationary reference',question:'Which reference should the stationary arm follow?',choices:['Lateral midline of the humerus','A line perpendicular to the table','Midaxillary line of the thorax','Superior border of the scapula'],correct:2,hint:'The stationary reference follows the side of the thorax toward the hips.',explanation:'Align the stationary arm with the midaxillary line of the thorax, pointing toward the hips. It lies near the moving arm in the 0° starting position.'},
  {skill:'movingArmKnowledge',title:'Identify the moving reference',question:'Which reference should the moving arm follow?',choices:['Lateral midline of the humerus toward the lateral epicondyle','Forearm toward the radial styloid','Clavicle toward the acromion','Midline of the sternum'],correct:0,hint:'Follow the moving upper-arm segment, using the lateral elbow as the distal reference.',explanation:'Align the moving arm with the lateral midline of the humerus toward the lateral epicondyle.'},
  {skill:'zeroRecognition',title:'Establish zero and control compensation',question:'Which statement best describes this starting position and the compensation to monitor?',choices:['The shoulder starts near 0°; monitor for rib flare and lumbar/trunk extension as the arm elevates','The shoulder starts near 90°; allow lumbar extension to complete the motion','The elbow determines shoulder zero; monitor only wrist flexion','The shoulder starts in extension; allow the pelvis to tilt anteriorly'],correct:0,hint:'Confirm that the arm begins beside the trunk, then consider what body motion can falsely increase apparent overhead reach.',explanation:'The arm-at-side position represents approximately 0°. During flexion, keep the thorax, low back and pelvis supported; rib flare or lumbar extension can falsely increase the apparent shoulder range.'}
 ],
 skills:[...ROM_ACTIVITIES[0].skills]
});
