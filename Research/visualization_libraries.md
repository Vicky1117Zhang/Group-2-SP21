# Research Frontend

I found some potential tools we can use for representing our data.

# What I found

I found different visualization libraries for showing data in 2D/3D graphs or other unique ways.

# Data Visualization Libraries:
- Python
 - Matplotlib: 2D plotting library for Python (included extensions to make 3D plots)
 - Plotly: unique contour plots
 - Seaborn: higher level interface with KDE-based visualization library, detailed informative plots
 - ggplot: less customizable graphs
 - Altair: automatic plotting provided little code
- Javascript (from: https://blog.bitsrc.io/11-javascript-charts-and-data-visualization-libraries-for-2018-f01a283a5727)
 - D3js
  - Example gallery: https://github.com/d3/d3/wiki/Gallery
 - Chartjs
 - ThreeJS
 - ECharts & Highcharts
 - Metric-graphics
 - C3js
 - React-vis
 - More: https://javascript.plainenglish.io/best-javascript-data-visualization-libraries-for-2020-15291919a176


# How this can be used in the context of the project
Matplotlib is a good option with simple installation and integration into our program. If we want to use a Javascript library, there are a number of options including D3js.
D3.js is the primary visulization library used for Javascript. 


What kind of charts do I want to build? Pie charts, maps, lines, bars?
Because the project focuses on trends and relationships, line charts or composed charts may be the most common one to be used. 
How large is the dataset?
The dataset may be the medium size. Therefore, libraries based on SVG are better, because these libraries will provide more flexibility. 
Is the app used for Web, mobile, or both?
The app is used for Web. 
Which JavaScript framework do I use?
We may use React as our data visualization library. Then we can choose React-specific libraries.
1.	The base one: React
2.	React-vis ---data visualization library (will be used)
Pros: 
	React specific
	offers extensive collection of charts for React apps
	generally updated more frequently than JavaScript counterparts.
3.	Recharts (not sure)
Pros:
	Good for charts composed of multiple chart types
Cons:
	Lots of unsolved issues on GitHub. The creators don’t answer them too often.
4.	Data-Driven-Documents (D3.js) ---- data visualization library (probability won’t be used)
Pros: 
	not only for data visualization, but also for animations, data analysis, and data utilities. It uses HTML, SVG, and CSS.
Cons: 
	steep learning curve, confusing to navigate sometimes.
