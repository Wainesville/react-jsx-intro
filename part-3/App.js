function App() {
    return (
      <div>
        <Person
          name="Tony"
          age={48}
          hobbies={["Playboy", "Billionare", "drinking beer"]}
        />
        <Person name="Steve" age={116} hobbies={["running", "dancing"]} />
        <Person
          name="Thor"
          age={1000+}
          hobbies={["drinking", "making prank calls"]}
        />
        <Person
          name="Bruce"
          age={48}
          hobbies={["reading", "meditating", "eating vegetables"]}
        />
      </div>
    );
  }