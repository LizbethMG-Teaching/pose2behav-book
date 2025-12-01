# Transforming pose data into AI-powered behavioral insights

![Image created by the author with support from ChatGPT 5.1.](../assets/illustrations/cover-lectures.png)

## Course overview

### PART 1 - Foundations of behavior

- 1.1 What is behavior?
- 1.2 Classical ethology

### PART 2 - Evolution of behavioral quantification

- 2.1 Evolution of behavioral quantification
- 2.2 Rise of computational ethology

### PART 3 - Machine learning and pose estimation: foundations

- 3.1 From pixels to poses: A reduced and meaningful representation of the animal
- 3.2 From coarse to fine tracking
- 3.3 What is pose estimation?
- 3.4 Marker-based tracking
- 3.5 Machine learning
- 3.6 2D Pose estimation steps
- 3.7 Convolution arithmetic
- 3.8 Human pose estimation and deep-learning
- 3.9 Human pose datasets
- 3.10 Transfer learning
- 3.11 Backbone architectures
- 3.12 Chooseing a backbone architecture
- 3.12 Data augmentation
- 3.14 Active Learning
  - Frame extraction
  - Network refinement – extraction of outlier frames

### PART 4 - Model evaluation

- 4.1 Datasets
- 4.2 Train and test erros
- 4.3 Overfitting and underfitting
- 4.4 Metrics for pose estimation
- 4.5 Scale matters
- 4.6 Bias and Variance

### PART 5 - Key algorithms

- 5.1 Pose estimation / motion tracking

### PART 6 - Key algorithms

- 6.1 Workflow: Create project
- 6.2 Workflow: Extract frames
- 6.3 Workflow: Label frames
- 6.4 Workflow: Train network
- 6.5 Workflow: Evaluate network
  - Understanding the evaulation results

### PART 7 - Experimental design with pose estimation

- 7.1 Common pitfalls: Input-quality pitfalls
- 7.2 Common pitfalls: Annotation issues
- 7.3 Common pitfalls: Dataset design

### PART 8 - Frome pose to kinematics and behavior analysis

- 8.1 Kinematics and spatial analysis
  - Basic kinematic metrics
  - Spacial occupancy and exploration patterns
  - Path and trajectory analysis
  - Postural kinematics
  - Social interaction metrics
  - Rest vs activity quantification
  - Zone-based statistics with pose-derived metrics

- 8.2 Tools for behavioral analysis
- 8.3 Unsupervised approach
- 8.4 Supervised approach
- 8.5 AI tools for behavioral analysis: overview

## Quiz Time !

https://forms.gle/vBK2ASQ95HzSkcah6

## Scenario descriptions

### ⭐️ Scenario 1 

#### Motor tics in Tourette syndrome with EEG

You work in a clinical research team studying Tourette syndrome. Your main interest is in the brain activity that happens just before and during motor tics. Motor tics in Tourette Syndrome are sudden, rapid, recurrent, nonrhythmic, involuntary movements that often involve a limited group of muscles.

**🫨 Motor tics are:**

- Sudden, brief, and hard to predict
- Often repeated, but with variable form
- Can involve different body parts such as eyes, mouth, shoulders, arms, trunk
- Different between patients, and even in the same patient over time
- Sometimes subtle and fast, sometimes strong and large
- Can be simple (eye blink, shoulder shrug) or complex (sequences of movements involving several joints)

👉🏼 **You have:**

- 30 adult patients with Tourette syndrome
- One single recording session per patient, about 60 minutes each
- High density EEG during spontaneous behavior, patients are seated and allowed to tic freely
- Optionally, a short calibration period in which the patient is asked to perform some predefined movements
- Possibility to synchronize video cameras and place them anywhere in the experimental room.

Your goal is to relate EEG activity to tic onset and tic type. You would like to know when tics occur, which body parts are involved, and possibly their intensity.

❓ **Questions:**
1. How would you design the recording session to maximize the chance of capturing many tics while keeping patients comfortable and safe?

2. How would you define and annotate “tic onset” and “tic type” so that it is usable for analysis?

3. Would you try to build a single machine learning model that detects tics across all patients, or one personalized model per patient, or something else? Why?

4. Given the heterogeneity of tics and your population size, do you think a pose-estimation based machine learning solution is worth the effort here? Under which conditions would it be justified?

  ---

### ⭐️ Scenario 2

#### 💉Sedation and locomotor effects of DREADDs and new compounds

You work in a lab using *DREADDs* (Designer Receptors Exclusively Activated by Designer Drugs) to manipulate neural activity in mice. DREADDs are genetically engineered cell receptors that act as molecular switches which can only be turned on or off by their corresponding synthetic signaling molecules, the *ligands*. Some DREADD ligands, like CNO (Clozapine N-Oxide), are known to cause sedation. You now have three new compounds that target the same receptors, and you want to test whether they induce sedation or other motor side effects.

**Your main question is: do these compounds cause sedation or gross motor impairments, and how does this depend on dose and time after injection?**

👉🏼 **Design constraints**

- You have 3 compounds, and for each compound you test 3 doses (low, medium, high) + CNO standard dose.
- 120 mice distributed into the different testing groups
- You have limited time for this experiment (12 months for the whole protocol! experiments + analysis)
- You have access to standard video tracking in an open field or home cage

❓ **Questions:** 

1. What is the minimal behavioral setup that would let you detect sedation or strong motor changes reliably across many mice and conditions?

2. Which basic behavioral metrics would you extract first, before investing in complex pose estimation? Think of activity levels, distance travelled, speed, time spent moving vs resting, rearing, etc.

3. Under which conditions would you decide that kinematics and spatial analysis are sufficient, and when would you decide that behavioral clustering is required? 
