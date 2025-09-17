# Pre-requisites

This course requires some basic setup before you can start working with DeepLabCut.  
Please follow the steps below to prepare your computer and install the necessary software.

## 1. Preparing your workspace

## 2. DeepLabCut installation 

We will use [DeepLabCut (DLC)](https://www.mackenziemathislab.org/deeplabcut),  
a widely used open-source Python package collaboratively developed by the [Mackenzie Mathis Lab](https://www.mackenziemathislab.org/) and the [Mathis Lab](https://mathislab.org/).

DLC is a **markerless pose estimation tool** based on transfer learning with deep neural networks.  
It requires only a small amount of training data and can now be applied to both **2D and 3D pose estimation**, for **single or multiple animals**.

To better understand the principles behind DLC, we recommend reading the **key publications** listed in the [Resources section](https://lizbethmg-teaching.github.io/pose2behav-book/resources.html) of this course, as well as on the [official DLC webpage](https://www.mackenziemathislab.org/deeplabcut).

```{note}
If you use this software in your research, remember to cite it properly:  
➡️ [How to cite DLC](https://deeplabcut.github.io/DeepLabCut/docs/citation.html#)
```
DLC can be used in different ways:

* Graphical User Interface (GUI): for intuitive project creation, labeling, and frame extraction.
* Command line or Python scripts: for programmatic and advanced use.

It can be installed:

* Locally, with either a CPU version or a GPU version (if your laptop/desktop has a compatible GPU).
* On the cloud (e.g., Google Colab).

For this course:

* You will install the CPU version with the GUI on your computer.
* This will be used in Labs 1 and 2 (frame extraction, labeling, dataset preparation).
* In Labs 3 and 4, you will work directly with pre-trained DLC outputs (so you won’t need to train models locally).

💡 Pro-tip: If you have access to a GPU, you can later install the GPU version by following the latest official instructions
