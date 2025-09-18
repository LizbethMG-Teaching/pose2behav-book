# Lab 0 - Pre-requisites

This course requires some basic setup before you can start working with DeepLabCut.  
Please follow the steps below to prepare your computer and install the necessary software.

## 1. Preparing your workspace

## 2. DeepLabCut installation 

### 2.1 Introduction

We will use [DeepLabCut (DLC)](https://www.mackenziemathislab.org/deeplabcut), a widely used open-source Python package collaboratively developed by the [Mackenzie Mathis Lab](https://www.mackenziemathislab.org/) and the [Mathis Lab](https://mathislab.org/).

DLC is a **markerless pose estimation tool** based on transfer learning with deep neural networks. It requires only a small amount of training data and can now be applied to both **2D and 3D pose estimation**, for **single or multiple animals**.

To better understand the principles behind DLC, we recommend reading the **key publications** listed in the [Resources section](https://lizbethmg-teaching.github.io/pose2behav-book/resources.html) of this course, as well as on the [official DLC webpage](https://www.mackenziemathislab.org/deeplabcut).

```{note}
If you use this software in your future research, remember to cite it properly:  
➡️ [How to cite DLC](https://deeplabcut.github.io/DeepLabCut/docs/citation.html#)
```
DLC can be used in different ways:

* Graphical User Interface (GUI): for intuitive project creation, labeling, and frame extraction.
* Command line or Python scripts: for programmatic and advanced use.

It can be installed:

* Locally, with either a CPU version or a GPU version (if your laptop/desktop has a compatible GPU).
* On the cloud (e.g., Google Colab).

<span class="violet-text"> For this course: </span>

* You will install the **CPU version for single animal scenario** using a **conda environment**, allowing you to use the GUI on your computer.
* The GUI will be used for Labs 1 and 2 (frame extraction, labeling, dataset preparation).
* In Labs 3 and 4, you will work directly with pre-trained DLC outputs (so you won’t need to train models locally).

### 2.2 Installation information

👉 The easiest and [official](https://deeplabcut.github.io/DeepLabCut/docs/installation.html#) way to install DLC is via **Anaconda/Miniconda**.  
Other installation methods (e.g. `pip`, Docker, …) are also listed in the official repository, but in this guide we focus on the most straightforward approach for beginners.

❗ If you try to install Anaconda while connected to an **institutional network** (Wi-Fi or ethernet), you may encounter errors or find the download link blocked. Since 2024, Anaconda Inc. has changed its commercial licensing terms for organizations, and many institutions now restrict access to Anaconda and Miniconda downloads ([background info here](https://www.fabriziomusacchio.com/blog/2025-07-03-miniforge/)).

➡ **For students:** Anaconda remains free for coursework and academic use. If you cannot access the download from your institutional network, try using a different network connection.

➡ **Alternative:** You can also [install the open-source Miniforge/Mambaforge](https://www.fabriziomusacchio.com/blog/2025-07-03-miniforge/), which provides the same conda environment manager without the institutional licensing restrictions. It is slightly more technical to set up, but still very manageable.

🟣 **This guide assumes you follow the typical Anaconda installation (and that you do not already have conda/mamba installed).**

### 2.3 Windows installation
⏱ Duration: ~10–15 min

---

**Step 1 - Install Python via Anaconda**  
- [Download Anaconda for Windows](https://www.anaconda.com/download/) (64-bit, Python 3.x).  
- Run the installer and accept the **default settings** (recommended).  

---

**Step 2 - Create a new environment using the DeepLabCut `.yaml` file**  

1. [Download the `DEEPLABCUT.yaml`](https://github.com/DeepLabCut/DeepLabCut/blob/main/conda-environments/DEEPLABCUT.yaml) file and save it to a folder on your computer (e.g. `Downloads`).  

2. Open the **Anaconda Prompt** as Administrator:  
   - Click *Start*, type `Anaconda Prompt`,  
   - Right-click → *Run as administrator*.  

3. In the Anaconda Prompt, move to the folder where you saved the `.yaml` file:  
 🔎 Replace PATH_TO_THE_FOLDER with the actual folder path on your computer, e.g.: 
 
   cd C:\Users\YourName\Downloads
   ```python
   cd PATH_TO_THE_FOLDER 
   ```
4. Create the DeepLabCut environment:
    ```python
   conda env create -f DEEPLABCUT.yaml 
   ```
⚠️ This step can take several minutes: the installer is downloading and setting up all required packages.

---

**Step 3 - Activate and launch DeepLabCut**
```python
conda activate DEEPLABCUT
python -m deeplabcut
```

If everything worked, DeepLabCut should open! 😎

### 2.4 MacOS installation
⏱ Estimated time: ~15-20 minutes
```{warning}
Before installing DeepLabCut, you should check which kind of chip your Mac uses. This matters because Macs with Apple Silicon (M-series chips: M1, M2, M3, M4...) need slightly different downloads than older Intel-based Macs. Using the wrong version may lead to slower performance or errors.
1. Click the Apple menu at top-left of your screen.
2. Choose “About This Mac”.
Step	What to do	What to look for
1. Click the Apple menu () at top-left of your screen.	—	—
2. Choose “About This Mac”.	—	—
3. Look for a line that says “Chip” or “Processor”.
If it says “Chip: Apple M1 / M2 / M3 / M4 / etc.” → you have Apple Silicon. If it says “Processor: Intel Core …” → you have an Intel Mac
```

### 2.5 Uninstalling DeepLabCut - (cleanup after the course)

If you no longer need DeepLabCut and want to return your laptop to its previous state, you can safely remove the environment and Anaconda/Miniconda.

---

**Option A — Remove only the DeepLabCut environment (recommended if you might use Anaconda later):**

1. Open **Anaconda Prompt** (Windows) or a terminal (macOS/Linux).  
2. Run:  
   ```bash
   conda remove --name DEEPLABCUT --all
✅ This deletes the DEEPLABCUT environment and all packages inside it, but keeps Anaconda/Miniconda installed on your system.

---

**Option B — Completely remove Anaconda/Miniconda (if you only installed it for this course):**

**Windows**

Open Control Panel → Programs and Features.

Find Anaconda (or Miniconda) in the list, right-click → Uninstall.

Delete the leftover folder (usually C:\Users\<YourName>\Anaconda3 or C:\Users\<YourName>\Miniconda3) if it remains.

**macOS/Linux**

Delete the Anaconda/Miniconda installation folder, e.g.:

bash
Copier le code
rm -rf ~/anaconda3
rm -rf ~/miniconda3
Remove the conda initialization lines from your shell config file (.bashrc, .zshrc, etc.), if present.

💡 Tip: If you are unsure, Option A is safest. It frees up disk space but keeps Anaconda available in case you want to use Python for other projects.
