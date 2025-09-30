# Lab 3: EDA

## Introduction

🔑 The key idea

- The SuperAnimal model[1] is a foundation for pose estimation model trained on many annotated datasets across species. This includes a vast dataset of mouse videos (around 5k top-view mouse images with 27 keypoints) and side-view images of quadruped animals (around 40k images, 39 key points, 45 mammalian species).
- When you run it on your own video, SuperAnimal does three things:
  1. Inference before adaptation → run the pretrained model directly on your video.
  2. Adaptation step → optionally refine the model on your video (via lightweight domain adaptation or fine-tuning with labeled frames).
  3. Saving results → outputs the predictions (pose data, labeled video) and stores the adapted weights separately.

[1]: Ye, S., Filippova, A., Lauer, J. et al. SuperAnimal pretrained pose estimation models for behavioral analysis. Nat Commun 15, 5165 (2024).

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
