'use strict';
function forearmActivity({id,label,motion,direction,partwayImage,endImage,partwayMoving,endMoving,movingSurface}){
 return {
  id,type:'scored',label,joint:'Forearm',motion,side:'Right',region:'forearm',proximal:'humerus',distal:'distal forearm',typicalROM:80,flexionDirection:direction,readingMode:'overlap-zero',hidePatientUntilPosition:true,
  positionLabel:'Seated · shoulder adducted · elbow 90° · forearm neutral',scenario:`Measure right forearm AROM ${motion.toLowerCase()}. Identify the standard patient position before viewing the patient.`,
  axisName:'lateral and proximal to the ulnar styloid',proximalReference:'a line parallel to the anterior midline of the humerus',distalReference:`the ${movingSurface} aspect of the distal forearm just proximal to the styloids`,
  description:`Whole-patient medical render: the person is seated upright with the right arm at the side, elbow flexed 90 degrees, forearm beginning in thumb-up neutral, and wrist straight. The forearm rotates into ${motion.toLowerCase()} while the shoulder and wrist remain controlled.`,
  poseCaption:`Whole-patient poses show neutral, partway, and full ${motion.toLowerCase()}. Watch the hand orientation while the elbow stays beside the trunk and the wrist stays straight.`,
  motionInstruction:`Keep the elbow beside the trunk and the wrist straight. Do not substitute shoulder rotation or wrist motion. Reposition the fulcrum and realign BOTH instrument arms.`,
  placementGuide:`Center the fulcrum lateral and proximal to the ulnar styloid. Keep S parallel to the humerus and align M across the ${movingSurface} distal forearm. At neutral, the two arms should be nearly aligned.`,
  visualStyle:'3d-medical-render',bodyView:'whole-patient-seated-forearm-rotation',viewLabel:'right-front three-quarter view',readingTolerance:3,estimateTolerance:15,startAngle:0,endAngle:80,
  poses:[
   {image:'assets/forearm-neutral.png',angle:0,x:405,y:290,s:90,m:90,label:'Start · thumb-up neutral'},
   {image:partwayImage,angle:40,x:405,y:289,s:90,m:partwayMoving,label:`Partway · moving toward ${motion.toLowerCase()}`},
   {image:endImage,angle:80,x:405,y:288,s:90,m:endMoving,label:`Endpoint · full ${motion.toLowerCase()}`}
  ],
  visual:{image:'assets/forearm-neutral.png',x:0,y:80,width:800,height:500,clipAngle:0,neutralForearmRotation:0,forearmLengthScale:1,jointBlendRadius:32,referenceLength:205,overlayDuration:4500},
  axis:{targetX:405,targetY:290,tolerance:35,showHotspotAfterAnswer:false},stationaryArm:{targetAngle:90,tolerance:12},movingArm:{targetAngle:90,tolerance:12},
  skillLabels:{zeroRecognition:'Zero & Compensation'},
  questions:[
   {skill:'patientPosition',title:'Choose the patient position',question:`What is the standard starting position for forearm ${motion.toLowerCase()} in this activity?`,choices:['Seated upright with shoulder adducted, elbow at 90°, forearm thumb-up neutral, and wrist straight','Standing with the shoulder abducted 90° and elbow extended','Prone with the tested arm overhead and wrist flexed','Supine with the elbow extended and palm fixed to the table'],correct:0,hint:'Choose a position that keeps the upper arm beside the trunk and starts rotation from thumb-up neutral.',explanation:'Use sitting with the shoulder adducted, elbow flexed 90 degrees, forearm in neutral, and wrist straight. The patient image is now shown.'},
   {skill:'axisKnowledge',title:'Identify the forearm axis',question:'Where should the goniometer fulcrum be centered?',choices:['Over the radial head at the elbow','Over the capitate on the back of the hand','Lateral and proximal to the ulnar styloid','Over the lateral epicondyle of the humerus'],correct:2,hint:'Use the distal ulnar landmark at the wrist rather than an elbow or hand landmark.',explanation:'Place the fulcrum lateral and proximal to the ulnar styloid.'},
   {skill:'stationaryArmKnowledge',title:'Identify the stationary reference',question:'Which reference should the stationary arm follow?',choices:['Parallel to the anterior midline of the humerus','Along the second metacarpal','Along the lateral border of the radius','Perpendicular to the floor'],correct:0,hint:'The fixed reference follows the upper arm while the elbow remains at 90 degrees.',explanation:'Keep the stationary arm parallel to the anterior midline of the humerus.'},
   {skill:'movingArmKnowledge',title:'Identify the moving reference',question:`Which reference should the moving arm follow for ${motion.toLowerCase()}?`,choices:[`Across the ${movingSurface} aspect of the distal forearm just proximal to the styloids`,'Along the length of the thumb','Along the anterior midline of the humerus','Along the fifth metacarpal'],correct:0,hint:`Follow the ${movingSurface} distal forearm close to the wrist, rather than a finger or long forearm axis.`,explanation:`Align the moving arm across the ${movingSurface} aspect of the distal forearm just proximal to the styloids.`},
   {skill:'zeroRecognition',title:'Establish zero and control compensation',question:'Which statement best describes neutral and the compensation to monitor?',choices:['Thumb-up neutral is 0°; prevent shoulder rotation/abduction and wrist bending or deviation','Palm-down is 0°; shoulder rotation is allowed','Palm-up is 0°; wrist deviation is required','Elbow extension defines 0°; hand position does not matter'],correct:0,hint:'Neutral places the thumb upward. Consider movements at the shoulder and wrist that could imitate forearm rotation.',explanation:'Thumb-up neutral represents approximately 0 degrees. Keep the elbow beside the trunk and wrist straight; shoulder rotation, shoulder abduction, or wrist motion can contaminate the measurement.'}
  ],
  skills:[...ROM_ACTIVITIES[0].skills]
 };
}
ROM_ACTIVITIES.push(
 forearmActivity({id:'forearm-pronation',label:'Forearm Pronation',motion:'Pronation',direction:-1,partwayImage:'assets/forearm-pronation-partway.png',endImage:'assets/forearm-pronation.png',partwayMoving:50,endMoving:10,movingSurface:'dorsal'}),
 forearmActivity({id:'forearm-supination',label:'Forearm Supination',motion:'Supination',direction:1,partwayImage:'assets/forearm-supination-partway.png',endImage:'assets/forearm-supination.png',partwayMoving:130,endMoving:170,movingSurface:'volar'})
);
