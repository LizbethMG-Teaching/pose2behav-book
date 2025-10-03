# Lab 3: EDA

## Introduction

🔑 The key idea

- The SuperAnimal model[1] is a foundation for pose estimation model trained on many annotated datasets across species. This includes a vast dataset of mouse videos (around 5k top-view mouse images with 27 keypoints) and side-view images of quadruped animals (around 40k images, 39 key points, 45 mammalian species).
- When you run it on your own video, SuperAnimal does three things:
  1. Inference before adaptation → run the pretrained model directly on your video.
  2. Adaptation step → optionally refine the model on your video (via lightweight domain adaptation or fine-tuning with labeled frames).
  3. Saving results → outputs the predictions (pose data, labeled video) and stores the adapted weights separately.

[1]: Ye, S., Filippova, A., Lauer, J. et al. SuperAnimal pretrained pose estimation models for behavioral analysis. Nat Commun 15, 5165 (2024).

### Dataset description  

In this exercise, you will work with a **5-minute video segment** extracted from the dataset published by von Ziegler *et al.* [2].  
The dataset consists of **top-view recordings of mice** freely exploring an open-field arena with bedding, following **diazepam injections** at different doses.  

The file used here:  

- **Original video file:** `01022023_001_16236-62756.mp4`  
- **Condition:** Mouse recorded after a diazepam injection (3 mg/kg), part of the dose–response dataset  
- **Duration:** Trimmed to the **first 5 minutes** of the original recording  

The dataset is released under a **CC BY 4.0 license**, which permits reuse with proper attribution:  

[2] Von Ziegler, L., Roessler, F. K., Sturman, O., O'Connor, E. C., & Bohacek, J. (2024).  
*Additional raw video and pose estimation data of top view open field mouse behavior recordings after diazepam injections* [Data set]. Zenodo. https://doi.org/10.5281/zenodo.11235915  

In this notebook, you won’t work directly with the videos. Instead, you will use the **pose estimation output** generated with the **SuperAnimal Top-View Mouse model zoo** (DeepLabCut).  


Here is a short looped preview of the behavior video:

<video width="480" controls autoplay loop>
  <source src="../assets/videos/single-mouse.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 📂 The files you get

### 📊 For analysis 

####  H5 files

- **Raw pose predictions** of key points ((time series of x,y positions + likelihoods) before video adaptation  ➡  ``...hrnet...h5``
  
- **Pose predictions after video adaptation** (fine-tuned model).``...snapshot...h5``

  👉🏽 These are the files you will analyze.

### 👀 For visualization 

####  Videos

- **Your original video:** ➡ ``...labeled_before_adapt.mp4``
  
- **Your video with visual overlays**: the mouse video with predicted bodyparts keypoints drawn on top ➡ ``...labeled_after_adapt.mp4``

  🔎 Use them for quick quality checks (does the nose follow correctly? does adaptation improve tracking?)


### 📌For reproducibility 

#### Metadata files

- ``..._before_adapt.json`` and ``..._after_adapt.json``
 These are the **metadata files**: they describe which bodyparts, how the model was run, frame indices, etc. SuperAnimal needs them if you reload or continue training. 

  🔎 You don’t usually touch them directly, but they keep the run reproducible.

### 💫For further training 

#### Annotations folder

- ``train.json`` and ``test.json``
 These are auto-labels that SuperAnimal created when it did video adaptation. They store which frames were used for fine-tuning. If you wanted, you could edit/clean these to make a better supervised training set.

#### Checkpoints folder

This is where SuperAnimal saves the internal models it was using:

- ``snapshot-fasterrcnn_mobilenet...-00x.pt`` → Detector weights (object detection part: finds the mouse in the frame).

- ``snapshot-hrnet_w32-00x.pt`` → Pose estimator weights (locates keypoints inside the cropped mouse).
where x = 1:X; by 00X you have the latest adapted version.

- ``learning_stats.csv`` and ``learning_stats_detector.csv`` → How the loss went during learning.

- ``pytorch_config.yaml`` → The config used to train/adapt.

  🔎 Unless you want to resume training or share the adapted model, you mostly don’t need to open these. But they’re valuable if you want to improve further later.



## Tasks

In this exercise, you will first conduct an Exploratory Data Analysis (EDA) to examine the files produced by a pose estimation analysis. This preliminary step is critical, as it enables a systematic assessment of the data structure, its defining characteristics, and potential anomalies, thereby providing the necessary foundation for subsequent work with the prediction files.

### Deliverables




### Deliverables

- Notebook or figures with brief notes
