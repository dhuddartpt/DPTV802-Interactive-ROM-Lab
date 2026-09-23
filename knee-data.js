'use strict';
Object.assign(ROM_ACTIVITIES[0],{
 label:'Elbow tutorial',region:'elbow',proximal:'humerus',distal:'radius',
 positionLabel:'Supported arm',scenario:'Measure right elbow AROM flexion.',
 axisName:'lateral epicondyle of the humerus',proximalReference:'lateral midline of the humerus toward the shoulder',distalReference:'radius toward the wrist',
 description:'Medical-render right upper extremity with partial torso. The upper arm stays fixed and the forearm rotates at the elbow.',
 placementGuide:'Move the central ring onto the lateral elbow. Rotate S toward the shoulder and M along the radius toward the wrist.'
});
ROM_ACTIVITIES.push({
 id:'knee-flexion',type:'scored',label:'Knee Flexion',joint:'Knee',motion:'Flexion',side:'Right',region:'knee',proximal:'femur',distal:'fibula',typicalROM:135,flexionDirection:1,hidePatientUntilPosition:true,
 positionLabel:'Supine · flat supported starting position',scenario:'Measure right knee AROM flexion. Identify the standard patient position before viewing the patient.',
 axisName:'lateral femoral epicondyle',proximalReference:'lateral midline of the femur toward the greater trochanter',distalReference:'lateral fibula toward the lateral malleolus',
 description:'Whole-patient medical render: the person starts supine with the tested leg extended and resting flat on the table. During the heel slide the knee rises and the heel approaches the buttock. Head, back and pelvis remain supported. Each position is a complete intact image.',
 poseCaption:'Whole-patient poses: start flat, then slide the heel toward the buttock. No separated or overlaid limb segments.',
 motionInstruction:'Keep the head, back and pelvis supported. As the heel slides, the thigh and lower leg both change position. Reposition the fulcrum and realign BOTH instrument arms.',
 placementGuide:'Place and align the goniometer using the anatomical references you identified. Check your placement when ready.',
 visualStyle:'3d-medical-render',bodyView:'partial-hip-lower-extremity',
 poses:[{image:'assets/knee-start.png',angle:0,x:560,y:365,s:180,m:0,label:'Start · leg flat on the table'},{image:'assets/knee-partway.png',angle:103,x:484,y:244,s:129,m:52,label:'Partway · heel moving toward buttock'},{image:'assets/knee-end.png',angle:120,x:475,y:240,s:123,m:63,label:'Endpoint · realign all three parts'}],
 visual:{image:'assets/knee-start.png',x:22.1,y:84.5,width:639.9,height:497.7,clipAngle:-45,neutralForearmRotation:-8,forearmLengthScale:1,jointBlendRadius:35,referenceLength:225,overlayDuration:4500},
 axis:{targetX:560,targetY:365,tolerance:35,showHotspotAfterAnswer:false},stationaryArm:{targetAngle:180,tolerance:12},movingArm:{targetAngle:0,tolerance:12},
 startAngle:0,endAngle:120,readingTolerance:3,estimateTolerance:20,
 questions:[
 {skill:'patientPosition',title:'Choose the patient position',question:'What is the standard patient position for knee-flexion goniometry in this activity?',choices:['Supine, with the person and tested leg resting flat on the table at the start','Standing on the tested leg while lowering into a squat','Prone, allowing the pelvis to lift as the heel approaches the buttock','Sitting with the thigh unsupported and the foot fixed on the floor'],correct:0,hint:'Choose a supported position that allows knee flexion without uncontrolled movement of the pelvis or thigh.',explanation:'Begin supine with the person and tested leg resting flat on the table. During the heel slide the heel moves toward the buttock and the knee rises naturally; the head, back and pelvis stay supported. The patient image is now shown. Other standardized measurement protocols may use different positions.'},
 {skill:'axisKnowledge',title:'Identify the knee axis',question:'Where should the goniometer fulcrum be centered?',choices:['Center of the patella','Head of the fibula','Lateral femoral epicondyle','Tibial tuberosity'],correct:2,hint:'Use the lateral prominence on the distal femur at the knee joint, rather than the patella or proximal lower leg.',explanation:'Center the fulcrum over the lateral femoral epicondyle.'},
 {skill:'stationaryArmKnowledge',title:'Identify the stationary reference',question:'Which reference should the stationary arm follow?',choices:['Lateral fibula toward the lateral malleolus','Lateral midline of the femur toward the greater trochanter','Anterior tibial crest toward the ankle','A line perpendicular to the floor'],correct:1,hint:'The stationary arm follows the supported proximal segment toward the lateral hip.',explanation:'Align with the lateral midline of the femur toward the greater trochanter.'},
 {skill:'movingArmKnowledge',title:'Identify the moving reference',question:'Which reference should the moving arm follow?',choices:['Medial tibia toward the medial malleolus','Femur toward the greater trochanter','Long axis of the foot toward the fifth toe','Lateral fibula toward the lateral malleolus'],correct:3,hint:'Follow the lateral lower leg toward the outer ankle, rather than the foot itself.',explanation:'Align with the lateral fibula toward the lateral malleolus.'},
 {skill:'zeroRecognition',title:'Establish the starting position',question:'Is this simulated knee beginning at neutral / zero?',choices:['Yes — the knee is fully extended','No — the knee begins in flexion'],correct:0,hint:'Compare the thigh and lower-leg axes before moving the knee.',explanation:'This simulated knee begins at full extension, approximately 0°. The endpoint will be documented from this starting position.'}
 ],
 skills:[...ROM_ACTIVITIES[0].skills]
});
// Equal weight across 10 assessed skill domains. Visual estimation is formative.
const SCORE_KEYS=ROM_ACTIVITIES[0].skills.filter(k=>k!=='visualEstimate');
const SCORE_LABELS={patientPosition:'Patient Position',axisKnowledge:'Axis Identification',stationaryArmKnowledge:'Stationary Arm Knowledge',movingArmKnowledge:'Moving Arm Knowledge',fulcrumPlacement:'Fulcrum Placement',stationaryArmAlignment:'Stationary Arm Alignment',movingArmAlignment:'Moving Arm Alignment',zeroRecognition:'Zero Position',scaleReading:'Scale Reading',documentation:'Documentation'};

