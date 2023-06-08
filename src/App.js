import logo from "./logo.svg";
import "./App.css";

function App() {
  const dates = [
    "2023-04-10",
    "2023-04-11",
    "2023-04-12",
    "2023-04-13",
    "2023-04-14",
    "2023-04-15",
    "2023-04-16",
    "2023-04-17",
    "2023-04-18",
    "2023-04-19",
    "2023-04-20",
    "2023-04-21",
    "2023-04-22",
    "2023-04-23",
    "2023-04-24",
    "2023-04-25",
    "2023-04-26",
    "2023-04-27",
    "2023-04-28",
    "2023-04-29",
    "2023-04-30",
    "2023-05-01",
    "2023-05-02",
    "2023-05-03",
    "2023-05-04",
    "2023-05-05",
    "2023-05-06",
    "2023-05-07",
    "2023-05-08",
    "2023-05-09",
  ];
  const groupConsecutiveDates = (dates: string[]) => {
    const sortedDates = dates
      .slice()
      .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    const groups = [];
    let currentGroup = [sortedDates[0]];
    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i]).getTime();
      const prevDate = new Date(sortedDates[i - 1]).getTime();
      const dayDiff = (currentDate - prevDate) / (1000 * 60 * 60 * 24);
      if (dayDiff <= 1) {
        // It's tomorrow
        currentGroup.push(sortedDates[i]);
      } else {
        // Not tomorrow
        groups.push(currentGroup);
        currentGroup = [sortedDates[i]];
      }
    }
    if (currentGroup.length === 1) {
      groups.push(currentGroup);
    }
    return groups;
  };

  const res = groupConsecutiveDates(dates);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
