import React from 'react';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import moduleplan from './moduleplan.json';
import users from './users.json';

class Home extends React.Component {
  render() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var maxSemester = 6;
    var totalCreditPoints = calculateTotalCredits();
    var semesters = [1,2,3,4,5,6].map(function(semester) {
      var filteredModules = modules.filter(function(module) {
        return module.recommended_semester === semester;
      });
      return filteredModules.map(function(module) {
        var userModule = userModules.find(function(userModule) {
          return userModule.module_id === module.id;
        })
        return {
           module: module,
           userModule: userModule
        }
      })
    });

    function calculateTotalCredits () {
      var totalCredits= 0;
      for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "completed"){
      totalCredits= totalCredits + modules[i].cp;
        }
      }
      return totalCredits;
    };
   
    return (
      <div>
        <ModulePlan semesters={semesters}/>
        <PlanningSection />
      </div>
    )
  }
}

export default Home
