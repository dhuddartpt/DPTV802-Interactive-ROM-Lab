# DPTV802 Interactive ROM Lab — Version 1.7

Open `index.html` directly in a browser and keep all code files with the `assets` folder. This standalone local build contains the elbow tutorial plus scored knee flexion, shoulder flexion, forearm pronation, and forearm supination. No server, framework, database, or network connection is required. Nothing was pushed to GitHub.

## Documentation revision for every joint

The documentation step now shows two blank fields:

- Starting position in degrees.
- Measured endpoint in degrees.

The interface no longer supplies `0–` or places zero in the first field. Students must enter both values for elbow, knee, shoulder, pronation, and supination. Documentation is scored only when both the simulated starting position and accepted endpoint are correct. The session export stores the two submitted values separately.

## New forearm activities

Forearm Pronation and Forearm Supination are separate scored activities. Each begins with the patient image hidden until the positioning question is completed. Three intact whole-patient images show thumb-up neutral, a partway position, and the 80-degree endpoint.

The patient is seated with the shoulder adducted, elbow flexed 90 degrees, forearm neutral, and wrist straight. Students identify the distal-ulnar axis, stationary arm parallel to the anterior humerus, and the appropriate dorsal or volar distal-forearm moving reference. Compensation content addresses shoulder rotation or abduction and wrist flexion, extension, or deviation.

The fixed and moving arms align at neutral zero. At the endpoint, students must reposition the fulcrum and both arms. The instrument does not follow the patient automatically.

The technique follows the standardized position and dorsal/volar moving-arm descriptions in the 2024 distal-radius-fracture clinical practice guideline and published goniometry reliability literature. The simulated endpoint is 80 degrees, consistent with the reference values summarized by Norkin and White.

## Scoring and tolerances

Each scored activity uses ten domains worth two points each. First independent success earns 2, success after a hint or retry earns 1, and answer reveal earns 0. Placement uses the lower result from start and endpoint. Visual estimation remains formative.

All implemented activities allow ±12 degrees for both arm alignments. Fulcrum tolerance remains 35 illustration units and scale-reading tolerance remains ±3 degrees.

## Verification

Thirty DOM-stub logic checks pass. They include:

- Blank start and endpoint documentation fields for every activity.
- Correct two-value documentation for elbow, knee, shoulder, pronation, and supination.
- Complete 20/20 profiles for both forearm activities.
- Neutral, partway, and endpoint image switching.
- Correct 0-, 40-, and 80-degree forearm geometry.
- Hidden positioning imagery, scoring, tolerances, module switching, and local asset loading.

JavaScript syntax checks pass. The SVG workspace was rendered and visually inspected for neutral, partway, and endpoint forearm positions in both directions. The patient images use complete arms rather than masked or superimposed limb pieces.

The in-app browser security policy blocks automated navigation to `file://` pages. Interactive mouse, keyboard, touchscreen, and responsive-layout testing therefore remain part of the faculty test. No LMS/Panorama or OneDrive cloud-sync verification is claimed.

## Suggested faculty test

1. Select Forearm Pronation and verify the image stays hidden until the position response is completed.
2. Complete the anatomy and compensation questions.
3. Place the instrument at neutral, move to Partway and End, then manually realign it.
4. Read the 80-degree endpoint.
5. At documentation, confirm both fields begin blank. Enter `0` in the starting field and `80` in the endpoint field.
6. Repeat for Forearm Supination.
7. Return to elbow and shoulder and confirm their documentation screens also require two entries.
8. Repeat with mouse, keyboard, and touch on intended student devices.

## Files

- `index.html`, `styles.css`, `lab.js`: shared interface and interaction engine.
- `data.js`: elbow tutorial.
- `knee-data.js`: knee flexion.
- `shoulder-data.js`: shoulder flexion.
- `forearm-data.js`: pronation and supination configurations.
- `assets/forearm-neutral.png`: shared neutral pose.
- `assets/forearm-pronation-partway.png`, `assets/forearm-pronation.png`: pronation poses.
- `assets/forearm-supination-partway.png`, `assets/forearm-supination.png`: supination poses.
- `forearm-image-prompts.txt`: final ImageGen method and prompt set.
- `preview-pronation.png`, `preview-supination.png`: rendered endpoint compositions.

Clinical references:

- https://doi.org/10.2519/jospt.2024.0301
- https://pubmed.ncbi.nlm.nih.gov/11769888/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4920970/
- https://fadavispt.mhmedical.com/content.aspx?bookid=3621&sectionid=303386712

Earlier output versions are preserved. Shoulder internal/external rotation is the next planned joint group after forearm testing.
