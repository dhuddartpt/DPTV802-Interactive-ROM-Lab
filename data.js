'use strict';
const ROM_ACTIVITIES = [{
 id:'elbow-flexion',type:'tutorial',joint:'Elbow',motion:'Flexion',side:'Right',typicalROM:150,
 visualStyle:'3d-medical-render',bodyView:'partial-torso-upper-extremity',
 visual:{image:'assets/right-arm-medical-render.png',x:0,y:19.6,width:778.96,height:633.36,neutralForearmRotation:10,forearmLengthScale:0.65,jointBlendRadius:35,referenceLength:220,overlayDuration:4500},
 axis:{targetX:320,targetY:350,tolerance:35,showHotspotAfterAnswer:true},stationaryArm:{targetAngle:189,tolerance:12},movingArm:{targetAngle:9,tolerance:12},
 startAngle:0,endAngle:140,readingTolerance:3,estimateTolerance:20,
 questions:[
 {skill:'patientPosition',title:'Choose the patient position',question:'Which patient position is appropriate for measuring elbow flexion?',choices:['Seated or supine with the arm supported','Prone with shoulder abducted to 90°','Standing with shoulder flexed overhead','Sidelying with the arm behind the trunk'],correct:0,hint:'Choose a position that allows the elbow to move freely while you can visualize the lateral humerus and forearm.',explanation:'Seated or supine with the arm supported provides access to the lateral elbow and helps keep the upper arm stable.'},
 {skill:'axisKnowledge',title:'Identify the axis / fulcrum',question:'Where should the axis of the goniometer be placed?',choices:['Olecranon','Lateral epicondyle of the humerus','Ulnar styloid','Acromion'],correct:1,hint:'Think about the bony prominence at the lateral elbow, rather than the back of the elbow or the wrist.',explanation:'Place the fulcrum over the lateral epicondyle of the humerus. The highlighted area shows the general region.'},
 {skill:'stationaryArmKnowledge',title:'Identify the stationary arm reference',question:'The stationary arm should align with which reference?',choices:['Lateral midline of the radius','Lateral midline of the humerus','Lateral midline of the ulna','Vertical / perpendicular to the floor'],correct:1,hint:'The stationary arm follows the segment that remains stable while the elbow bends.',explanation:'Align the stationary arm with the lateral midline of the humerus, toward the shoulder.'},
 {skill:'movingArmKnowledge',title:'Identify the moving arm reference',question:'The moving arm should align with which reference?',choices:['Humerus','Ulna','Radius','Vertical / perpendicular to the floor'],correct:2,hint:'Use the lateral forearm reference on the thumb side.',explanation:'Align the moving arm along the radius toward the wrist.'},
 {skill:'zeroRecognition',title:'Establish the starting position',question:'Is this elbow beginning at the neutral / zero position?',choices:['Yes','No'],correct:0,hint:'Compare the upper arm and forearm: has flexion begun, or is the elbow fully extended?',explanation:'For this measurement, full elbow extension represents the neutral starting position of approximately 0°. Later activities will include patients who cannot reach zero.'}
 ],
 skills:['patientPosition','axisKnowledge','stationaryArmKnowledge','movingArmKnowledge','fulcrumPlacement','stationaryArmAlignment','movingArmAlignment','zeroRecognition','visualEstimate','scaleReading','documentation']
}];
const ROM_ROADMAP=['Knee Flexion','Shoulder Flexion','Forearm Pronation / Supination','Shoulder Internal / External Rotation','Hip Internal / External Rotation','Cervical Dual Inclinometer'];

