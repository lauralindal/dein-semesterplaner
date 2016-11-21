import React from 'react';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import moduleplan from './moduleplan.json';

class Home extends React.Component {
  render() {
    var modules = moduleplan.degree_course.modules;
    var maxSemester = 6;
    var semesters = [1,2,3,4,5,6].map(function(semester) {
      return modules.filter(function(module) {
        return module.recommended_semester === semester;
        });
      });
    return (
      <div>
        <ModulePlan semesters={semesters}/>
        <PlanningSection />
      </div>
    )
  }
}

export default Home
