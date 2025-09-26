# Lab 3: EDA

## Introduction

🔑 The key idea

- The SuperAnimal model[1] is a foundation for pose estimation model trained on tons of mouse videos.
- When you run it on your own video, SuperAnimal does three things:
  1. Inference before adaptation → run the pretrained model directly on your video.
  2. Adaptation step → optionally refine the model on your video (via lightweight domain adaptation or fine-tuning with labeled frames).
  3. Saving results → DLC outputs the predictions (pose data, labeled video) and stores the adapted weights separately.

[1]: Ye, S., Filippova, A., Lauer, J. et al. SuperAnimal pretrained pose estimation models for behavioral analysis. Nat Commun 15, 5165 (2024).

## Tasks

In this exercise, you will first conduct an Exploratory Data Analysis (EDA) to examine the files produced by a pose estimation analysis. This preliminary step is critical, as it enables a systematic assessment of the data structure, its defining characteristics, and potential anomalies, thereby providing the necessary foundation for subsequent work with the prediction files.

### Deliverables



## 📂 The files you see

### 1. H5 files

### 2. JSON files

### 3. Videos

### Deliverables

- Notebook or figures with brief notes
