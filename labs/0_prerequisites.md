# Lab 0 - Pre-requisites

This course requires some basic setup before you can start working with DeepLabCut.  
Please follow the steps below to prepare your computer and install the necessary software.

## 1. Preparing your workspace

- Make sure you have at least 5–10 GB of free disk space before starting.
- Ensure you have a stable internet connection.

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

- Graphical User Interface (GUI): for intuitive project creation, labeling, and frame extraction.
- Command line or Python scripts: for programmatic and advanced use.

It can be installed:

- Locally, with either a CPU version or a GPU version (if your laptop/desktop has a compatible GPU).
- On the cloud (e.g., Google Colab).

<span class="violet-text"> ✔️ For this short course: </span>

- You will install the **CPU version for single animal scenario** using a **conda environment**, allowing you to use the GUI on your computer.
- The GUI will be used for Labs 1 and 2 (frame extraction, labeling, dataset preparation).
- In Labs 3 and 4, you will work directly with pre-trained DLC outputs (so you won’t need to train models locally).

### 2.2 Installation information

👉 The easiest and [official](https://deeplabcut.github.io/DeepLabCut/docs/installation.html#) way to install DLC is via **Anaconda/Miniconda**.  
Other installation methods (e.g. `pip`, Docker, …) are also listed in the official repository, but in this guide we focus on the most straightforward approach for beginners.

❗ If you try to install Anaconda while connected to an **institutional network** (Wi-Fi or ethernet), you may encounter errors or find the download link blocked. Since 2024, Anaconda Inc. has changed its commercial licensing terms for organizations, and many institutions now restrict access to Anaconda and Miniconda downloads ([background info here](https://www.fabriziomusacchio.com/blog/2025-07-03-miniforge/)).

➡ **For students:** Anaconda remains free for coursework and academic use. If you cannot access the download from your institutional network, try using a different network connection.

➡ **Alternative:** You can also [install the open-source Miniforge/Mambaforge](https://www.fabriziomusacchio.com/blog/2025-07-03-miniforge/), which provides the same conda environment manager without the institutional licensing restrictions. It is slightly more technical to set up, but still very manageable.

🟣 **This guide assumes you follow the typical Anaconda installation (and that you do not already have conda/mamba installed).**

### 2.3 Windows installation

⏱ Duration: ~15–20 min

---

#### Step 1 - Install Python via Anaconda

- [Download Anaconda for Windows](https://www.anaconda.com/download/success) (Distribution Installer: 64-bit, Python 3.x).  
- Run the installer and accept the **default settings** (recommended).  

---

#### Step 2 - Create a new environment using the DeepLabCut `.yaml` file

1. [Download the `DEEPLABCUT.yaml`](https://github.com/DeepLabCut/DeepLabCut/blob/main/conda-environments/DEEPLABCUT.yaml) file and save it to a folder on your computer (e.g. `Downloads`).  

2. Open the **Anaconda Prompt** as Administrator:  
   - Click *Start*, type `Anaconda Prompt`,  
   - Right-click → *Run as administrator*.  

3. Move to the folder where you saved the `.yaml`  file. For example:

```bash
cd C:\Users\YourName\Downloads
```

(Replace YourName with your actual Windows username.)

1. Create the DeepLabCut environment:

    ```python
   conda env create -f DEEPLABCUT.yaml 
   ```

⚠️ This step can take several minutes: the installer is downloading and setting up all required packages.

---

#### Step 3 - Activate and launch DeepLabCut

```python
conda activate DEEPLABCUT
python -m deeplabcut
```

If everything worked, DeepLabCut should open! 😎

### 2.4 MacOS installation

⏱ Estimated time: ~15-20 minutes

---

#### Step 0 — Identify your Mac type and install option

- Click  → **About This Mac**  
- If you see **“Chip: Apple M…”** → follow *Apple Silicon* path  --> 🟩
- If you see **“Processor: Intel…”** → follow *Intel Mac* path  ---> 🟦

👉🏼 To set up your Python environment for data science, you have two main approaches.

- **Option 1: Install DeepLabCut with Anaconda(Miniconda) + Mamba** --> 🟠

   *Works fine if you already have Anaconda/Miniconda installed*

   You can install Anaconda, which is a large distribution of Python for data science. It comes with Conda, the package and environment manager, plus hundreds of scientific and machine-learning libraries already installed.  This is convenient because everything is included, but it is large and sometimes slow when installing or updating packages. To solve the slowness, you can add Mamba, which is a drop-in replacement for Conda: it does exactly the same tasks (creating environments, installing and updating packages, solving dependencies) but much faster, because it is written in C++ rather than Python.

- **Option 2:  Install DeepLabCut with Miniforge + Mamba** --> 🟡

   *Best for new students, clean and fast, avoids “stuck” installs*

   You can install Miniforge, which is a lightweight community-driven installer for Conda. Unlike Anaconda, it does not preload a big set of packages — you start small and install only what you need, which keeps your system cleaner and more flexible. The variant called Mambaforge includes Mamba by default, so you benefit from the faster package management without any extra steps.

---

#### Step 1. Install your package /environement manager

🟠 Follow these steps for Option 1

1. Install Miniconda (lightweight Anaconda).
   If you already have Anaconda/Miniconda, you can skip to Step 2.

   - Go to the  [Miniconda download page.](https://www.anaconda.com/download/success)
   - Download the installer for your Mac:
  
      🟩 Apple chip (arm64) →  macOS Apple M1/M2 (arm64).

      🟦 Intel (x86_64) →  macOS Intel (x86_64).

   - Run the installer (just click through).
   - After installation: Open a new Terminal window (⌘ + Space → type “Terminal” → Enter). Type:

      ```bash
            conda --version
      ```

      If you see a version number → ✅ success.

2. Install Mamba inside Anaconda

   In the Terminal window type the following command:

      ```bash
      conda activate base
      conda install -n base -c conda-forge mamba -y
      ```

🟡 Option 2 — Miniforge (includes Mamba)

1. Download Miniforge to your Download folder: [Miniforge download page.](https://conda-forge.org/download/)
   If you already have Miniforge, you can skip to Step 2.
  
   🟩 Apple chip  →  arm64 (Apple Silicon).

   🟦 Intel (x86_64) →  x86_64 (Intel)

2. In the Terminal:

   ```bash
   cd ~/Downloads
   bash Miniforge3-*.sh
   ```

   (Replace * with the real file name.) Press Enter to accept defaults.

3. Restart Terminal and check:

   ```  bash
      mamba --version
   ```

   If you see a version number → ✅ success.

#### Step 2. Download the official DLC installation file

The DeepLabCut team provides a recipe file (called DEEPLABCUT.yaml) that tells Conda/Mamba what to install.

- Go to the [download link](https://github.com/DeepLabCut/DeepLabCut/blob/main/conda-environments/DEEPLABCUT.yaml)
- Click on the “…” → Download.
- Save the file in your Downloads folder.

#### Step 3. Create the DeepLabCut environment

Now we’ll read the recipe from the Download folder and set up DLC. This operation might take several minutes. On macOS: the first time you access Downloads in Terminal, you may get a popup asking “Terminal wants to access your Downloads folder.” → Click Allow.

In Terminal:

   ```bash
   cd ~/Downloads
   ```

🟠  For option 1 (Miniconda) type: ` conda env create -f DEEPLABCUT.yaml `

🟡  For option 1 (Miniforge) type: ` mamba env create -f DEEPLABCUT.yaml `

⚠️ This step may take several minutes.

#### Step 4. Activate your new environment and launch DLC

Think of an environment like a separate workspace. You have to “enter” it each time before using DLC.

In Terminal:

```bash
conda activate DEEPLABCUT
python -m deeplabcut
```

- You should now see (DEEPLABCUT) at the beginning of your Terminal line.
- After a few instants, the GUI should appear, you are done !. 😎

#### Additional notes and Troubleshooting

---

Remember, for this course we are not using the GPU, but Apple Silicon (M1/M2/M3/M4) users get GPU acceleration via PyTorch/MPS automatically with the install.

To confirm your GPU is available (**Apple Silicon only**):

```bash
python - <<'PY'
import torch
print("MPS available:", torch.backends.mps.is_available())
PY
```

- MPS available: True → GPU is working ✅
- False → running on CPU (expected on Intel Macs).

---
If installation breaks, remove the environment and retry from STEP 3

```bash
conda deactivate
conda remove --name DEEPLABCUT --all -y
```

---

You canalso refer to the [complete and official installation guide](https://deeplabcut.github.io/DeepLabCut/docs/installation.html) for official troubleshooting.

### 3. Uninstalling DeepLabCut (cleanup after the course)

If you no longer need DeepLabCut and want to return your laptop to its previous state, you can safely remove the environment. Don’t forget to delete the .yaml file you downloaded.

💡 Tip: I If unsure, Option A is safest — it frees up disk space while keeping Python tools available

---

**Option A — Remove only the DeepLabCut environment (recommended):**

 ```bash
   conda remove --name DEEPLABCUT --all
```

✅ This deletes the DEEPLABCUT environment and all packages inside it, but keeps Anaconda (miniconda)/Miniforge installed for future use.

---

**Option B — Completely remove Anaconda/Miniconda/Miniforge:(if you only installed it for this course):**

#### Windows

Control Panel → Programs and Features → Uninstall Anaconda.

Delete leftover folder (e.g. C:\Users\<YourName>\Anaconda3).

#### macOS

1. Delete the Anaconda/Miniconda/Miniforge installation folder, e.g.:

   ```bash
   rm -rf ~/anaconda3
   rm -rf ~/miniconda3
   rm -rf ~/miniforge3
   ```

2. Remove the Conda initialization lines from your shell configuration file.
These lines were automatically added when you installed Conda and look like this:

   ```bash
   # >>> conda initialize >>>
   # !! Contents within this block are managed by 'conda init' !!
   ...
   # <<< conda initialize <<<
   ```

   How to know which file to edit: `echo $SHELL`

- If it ends with /zsh → you are using zsh (default on macOS since Catalina).
Open the file:

   ```bash
   nano ~/.zshrc
   ````

- If it ends with /bash → you are using bash. Open the file:

   ```bash
   nano ~/.bashrc
   ````

   How to edit:

- Scroll to the conda initialize block.
- Delete the entire block (use Ctrl+K in nano to cut lines).
- Save with Ctrl+O, press Enter, then exit with Ctrl+X.
- Reload your shell so the changes take effect:

   for ZSH

   ```bash
   exec zsh
   ````

   for BASH

   ```bash
   exec bash 
   ````
