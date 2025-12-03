# Resources  

This page gathers the key references, tools, and datasets mentioned during the lecture *From Pose to Behavior: Quantitative Approaches to Behavioral Analysis* and exercises.  


## 📖 Background Reading

### 🐾🔍Foundational concepts in ethology and behavior

1. Tinbergen, N. (1963). On aims and methods of ethology. Zeitschrift für Tierpsychologie, 20(4), 410–433. [link to source](https://doi.org/10.1111/j.1439-0310.1963.tb01161.x)

2. Gomez-Marin, A., Paton, J. J., Kampff, A. R., Costa, R. M., & Mainen, Z. F. (2014). Big behavioral data: Psychology, ethology and the foundations of neuroscience. Nature Neuroscience, 17(11), 1455–1462. [link to source](https://doi.org/10.1038/nn.3812)

3. Krakauer, J. W., Ghazanfar, A. A., Gomez-Marin, A., MacIver, M. A., & Poeppel, D. (2017). Neuroscience needs behavior: Correcting a reductionist bias. Neuron, 93(3), 480–490.  [link to source](https://doi.org/10.1016/j.neuron.2016.12.041)

4. Anderson, D. J., & Perona, P. (2014). Toward a science of computational ethology. Neuron, 84(1), 18–31.  [link to source](https://doi.org/10.1016/j.neuron.2014.09.005)

5. von Frisch, K. (1965). The dance language and orientation of bees. Harvard University Press.
Rodriguez, A., Bahl, A., & de Polavieja, G. G. (2022). Insect motion analysis for computational ethology. Frontiers in Computer Science, 3, 769338.  [link to source](https://doi.org/10.3389/fcomp.2021.769338)

### 📚 State of the art in quantitative behavioral analysis

1. Mathis, M. W., & Mathis, A. (2020). Deep learning tools for the measurement of animal behavior in neuroscience. Current Opinion in Neurobiology, 60, 1–11. [link to source](https://doi.org/10.1016/j.conb.2019.11.004)

2. Luxem, K., Fuhrmann, F., Koch, M., & Stemmler, M. (2023). Open-source tools for behavioral video analysis: Setup, methods, and best practices. eLife, 12, e79305. [link to source](https://doi.org/10.7554/eLife.79305)

3. Fazzari, E., et al. (2025). Animal behavior analysis methods using deep learning: A survey. Expert Systems with Applications, 257, 125219. [link to source](https://doi.org/10.1016/j.eswa.2025.125219)

### 🧩Backbone architectures

1. He, K., et al. (2016). ResNet. [link to source](https://doi.org/10.1109/CVPR.2016.90)

2. Qiao, S., et al. (2019). Weight Standardization. [link to source](https://arxiv.org/abs/1903.10520)

3. Sandler, M., et al. (2018). MobileNetV2. [link to source](https://doi.org/10.1109/CVPR.2018.00474)

4. Tan, M., & Le, Q. V. (2019). EfficientNet. [link to source](http://proceedings.mlr.press/v97/tan19a.html)

### 📖 Examples mentioned

1. Mondragón-González, S. L., et al. (2024). Closed-loop recruitment of striatal interneurons prevents compulsive-like grooming behaviors. Nature Neuroscience. [link to source](https://doi.org/10.1038/s41593-024-01521-2)

2. Kalueff, A. V., Stewart, A. M., Song, C., Berridge, K. C., Graybiel, A. M., & Fentress, J. C. (2016). Neurobiology of rodent self-grooming and its value for translational neuroscience. *Nature Reviews Neuroscience, 17*(1), 45–59. [link to source](https://doi.org/10.1038/nrn.2015.8)

#### 🤸 Marker-Based Tracking and Kinematics examples

1. Rylander, J. H., et al. (2015). Joint loading during gait.  [link to source](https://doi.org/10.1007/s11999-014-3682-2)

2. Full, R. J., & Tu, M. S. (1991). Insects use two step classes.  [link to source](https://journals.biologists.com/jeb/article/148/1/391/7001)

3. Suchak, R., et al. (2020). Marker placement in rats.  [link to source](https://doi.org/10.1038/s41598-020-71458-7)

4. Ignatowska-Jankowska, B. M., et al. (2025). 3D kinematics in mice.  [link to source](https://doi.org/10.1523/ENEURO.0045-25.2025)

5. Inayat, S., et al. (2020). String-pulling toolbox.  [link to source](https://doi.org/10.7554/eLife.54540)

6. Ahmadi, A., et al. (2015). Human gait IMUs.  [link to source](https://doi.org/10.1109/ICSENS.2015.7370175)

---

## 📍 Motion Capture, Pose Estimation and Computer Vision

### Reviews and general methods

1. Mathis, A., Schneider, S., Lauer, J., & Mathis, M. W. (2020). A primer on motion capture with deep learning: Principles, pitfalls, and perspectives. Neuron, 108(1), 44–65. [link to source](https://doi.org/10.1016/j.neuron.2020.09.017)

2. Rempe, D., Lehrmann, A., Zollhöfer, M., Shan, Q., & Khamis, S. (2020). A primer on motion capture with deep learning: Principles, pitfalls, and perspectives. [link to source](https://arxiv.org/abs/2008.05909)

3. Dumoulin, V., & Visin, F. (2018). A guide to convolution arithmetic for deep learning. [link to source](https://arxiv.org/abs/1603.07285)

### Markerless pose estimation

#### Human pose estimation

1. Toshev, A., & Szegedy, C. (2014). DeepPose. [link to source](https://doi.org/10.1109/CVPR.2014.212)

2. Insafutdinov, E., et al. (2016). DeeperCut. [link to source](https://link.springer.com/chapter/10.1007/978-3-319-46466-4_3)

#### 💻🐾 **DeepLabCut**

1. Mathis, A., Mamidanna, P., Cury, K. M., Abe, T., Murthy, V. N., Mathis, M. W., & Bethge, M. (2018). DeepLabCut: Markerless pose estimation of user-defined body parts with deep learning. Nature Neuroscience, 21(9), 1281–1289.  [link to source](https://doi.org/10.1038/s41593-018-0209-y)

2. Nath, T., Mathis, A., Chen, A. C., Patel, A., Bethge, M., & Mathis, M. W. (2019). Using DeepLabCut for 3D markerless pose estimation across species and behaviors. Nature Protocols, 14(7), 2152–2176.  [link to source](https://doi.org/10.1038/s41596-019-0176-0)

3. Ye, S., Filippova, A., Lauer, J., et al. (2024). SuperAnimal pretrained pose estimation models for behavioral analysis. Nature Communications, 15, 5165.  [link to source](https://doi.org/10.1038/s41467-024-48792-2)

#### 🛠️ **DeepLabCut Resources**

- [DeepLabCut Documentation](https://deeplabcut.github.io/DeepLabCut/)
- [DeepLabCut Model Zoo](https://deeplabcut.github.io/DeepLabCut/docs/ModelZoo.html)
- [DeepLabCut YouTube Channel](https://www.youtube.com/@DeepLabCut)

#### SLEAP

1. Pereira, T. D., Tabris, N., Matsliah, A., et al. (2022). SLEAP: A deep learning system for multi-animal pose tracking. Nature Methods, 19, 486–495. [link to source](https://doi.org/10.1038/s41592-022-01426-1)

- Main website: https://sleap.ai

#### Additional 3D tracking systems

1. Karashchuk, P., et al. (2021). Anipose: A toolkit for robust markerless 3D pose estimation. eLife, 10, e61973. [link to source](https://doi.org/10.7554/eLife.61973)

2. Bala, P. C., et al. (2020). DANNCE: 3D video-based tracking of freely behaving animals. Nature Methods, 17, 1100–1106. [link to source](https://doi.org/10.1038/s41592-020-00951-y)

3. Gunel, S., et al. (2019). DeepFly3D. Nature Methods, 16, 351–354. [link to source](https://doi.org/10.1038/s41592-019-0337-8)

4. Schweihoff, J. F., et al. (2021). DeepLabStream. Communications Biology, 4, 980. [link to source](https://doi.org/10.1038/s42003-021-02483-w)
---
## Behavioral segmentation and unsupervised behavior discovery

Not and exhaustive list

1. Hsu, A. I., & Yttri, E. A. (2021). B-SOiD: An unsupervised algorithm for behavior identification. Nature Communications, 12, 518.  [link to source](https://doi.org/10.1038/s41467-020-20593-5)

2. Tillmann, J. F., et al. (2024). A-SOiD: An active-learning platform for expert-guided, data-driven behavioral segmentation. Nature Methods.  [link to source](https://doi.org/10.1038/s41592-024-02036-0)

---

## 🗃️ Datasets & Examples  

### 🧍‍♂️🧍‍♀️ Human pose datasets

1. Andriluka, M., et al. (2014). MPII Human Pose. [link to source](https://doi.org/10.1109/CVPR.2014.471)

2. Lin, T. Y., et al. (2014). COCO. [link to source](https://doi.org/10.1007/978-3-319-10602-1_48)

3. Ionescu, C., et al. (2014). Human3.6M. [link to source](https://doi.org/10.1109/TPAMI.2013.248)

### 🎥 Course datasets: Pose data for mouse open-field videos (provided in the course repository)  

#### 🐭 Single-mouse video used in Labs 2 and 3

- *Original file name (before trimming):* `TFS1OFT2_17.mp4`  

- *Source:* [Zenodo: Raw video and pose estimation data of top-view open field mouse behavior recordings after yohimbine injections](https://zenodo.org/records/8188683)

- [7] **von Ziegler, L. M., Roessler, F. K., Sturman, O., O'Connor, E. C., & Bohacek, J.** (2023). *Raw video and pose estimation data of top-view open field mouse behavior recordings after yohimbine injections* [Data set]. *Zenodo.* DOI: 10.5281/zenodo.8188683


#### 🐭🐭🐭 Multi-mice video used in Lab 4

- *Original file name (before trimming):* `mice_3_652x636_67Hz_6min57s.mp4.mp4`  

- *Source:* [Zenodo: UDMT dataset: Behavioral recordings used for unsupervised multi-animal tracking.](https://zenodo.org/records/14580256)

- [8] **Li, Y.** (2024). *UDMT dataset: Behavioral recordings used for unsupervised multi-animal tracking* [Data set]. *Zenodo.* DOI: 10.5281/zenodo.14580256

