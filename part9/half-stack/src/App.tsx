import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const courseName = "Half Stack application development blah blah";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totals:number = courseParts.reduce((a,b)=>a+b.exerciseCount,0)

  return (
    <div>
      <Header data = {courseName} />
      {
        courseParts.map((item)=>(
         <div key = {item.name}>
          <Content name = {item.name} count = {item.exerciseCount}/>
          </div> 
        ))
        
      }
      
      <Total total = {totals}/>
    </div>
  );
};

export default App;