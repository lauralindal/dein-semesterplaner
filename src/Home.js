import React from 'react';
import Header from './Header';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import moduleplan from './moduleplan.json';
import users from './users.json';

class Home extends React.Component {
  render() {
    var semesters = this.getSemestersForUser();
    return (
      <div>
        <Header />
        <ModulePlan semesters={semesters}/>
        <PlanningSection />
      </div>
    );
  }

   getSemestersForUser() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var semesters = [1,2,3,4,5,6].map(function(semester) {
      var filteredModules = modules.filter(function(module) {
        return module.recommended_semester === semester;
      });
      return filteredModules.map(function(module) {
        var userModule = userModules.find(function(userModule) {
          return userModule.module_id === module.id;
        });
        return {
           module: module,
           userModule: userModule
        }
      });
    });
    return semesters;
  }
}

export default Home
