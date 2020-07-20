import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Denver", "Colorado Springs", "Fort Collins", "Boulder"],
        dataSets: [
          {
            label: "Population",
            data: [637000, 144000, 78000, 23000],
            backgroundColor: [
              "rgb(23, 185, 120)",
              "rgb(156, 29, 231)",
              "rgb(224, 196, 92)",
              "rgb(39, 142, 165)",
            ],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          // width={100}
          // height={50}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default App;
