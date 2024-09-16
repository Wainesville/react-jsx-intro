function App() {
    return (
      <div>
        <Tweet
          name="Tony Stark"
          username="ironman"
          date={new Date().toDateString()}
          message="Im just a man in a can"
        />
        <Tweet
          name="Steve Rodgers"
          username="steverodgers"
          date={new Date().toDateString()}
          message="steverodgers"
        />
        <Tweet
          name="Thor"
          username="PointBreak"
          date={new Date().toDateString()}
          message="For whom ever should be so worthy...."
        />
      </div>
    );
  }