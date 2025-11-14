- If your recordings have different lengths (e.g. one is 2 min, another 5 min), the total number of frames, and therefore counts will differ. To compare fairly between sessions, what can you do? 
  you can normalize by total time or total frames:Normalization makes the map show where the animal prefers to be,
independent of how long the recording lasted.
- **🟠 When to use `log(1 + counts)` (for visibility):**  
- When the goal is **visual exploration** — to *see patterns clearly* rather than measure precisely.  
- It helps when there’s a **huge dynamic range** (some zones very occupied, others rarely visited).  
- Ideal for teaching, quick data checks, or presentations where we want to highlight structure.  
- Example: looking for *hotspots* or movement zones in exploratory sessions.

✅ *Think of it like adjusting the contrast of a photo — you see both shadows and highlights.*

---

**🔵 When to use `H / FPS` or normalized occupancy:**  
- When you want **quantitative or comparable values**, not just pretty colors.  
- Converting counts to **seconds** (`H / FPS`) makes the map physically meaningful — “how long” in each zone.  
- **Normalization** (e.g., `H / H.sum()`) is essential when comparing across:
  - different session lengths,  
  - different mice,  
  - or different conditions (arena vs bedding).  
- Example: comparing “time spent in center” between two animals.

✅ *This turns the heatmap into a measurable behavioral feature.*

---

**🟣 When to use both side-by-side:**  
- To link **interpretability** and **quantitative meaning**:
  - The `log(1 + counts)` version shows overall exploration patterns at a glance.  
  - The `H / FPS` (or normalized) version provides the scientific numbers behind it.  
- In reports or teaching notebooks, showing both helps students connect:
  > “Where the mouse goes most” ↔ “How much time it actually spends there.”

✅ *Together, they tell both the story (log map) and the statistics (time map).*