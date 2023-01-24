
// EXERCISE 1.2
const Header = (header) => {
  return <h1>{header.course}</h1>;
};

const Part = (content) => {
  return (
    <p>
      {content.part} {content.exercise}
    </p>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part
        part={content.parts[0].name}
        exercise={content.parts[0].exercises}
      />
      <Part
        part={content.parts[1].name}
        exercise={content.parts[1].exercises}
      />
      <Part
        part={content.parts[2].name}
        exercise={content.parts[2].exercises}
      />
    </div>
  );
};

const Total = (total) => {
  return (
    <p>
      Number of exercises{" "}
      {total.parts[0].exercises +
        total.parts[1].exercises +
        total.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App