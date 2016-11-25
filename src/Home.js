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

    var completedModules = userModules.filter(function(userModule) {
        return userModule.status === "completed";
    });
    var completedModuleIds = completedModules.map(function(module){
      return module.module_id;
    });

    var completedModules2 = userModules.filter(function(userModule) {
        if(userModule.status === "completed"){
          return userModule.module_id;
        }   
    });
    console.log(completedModules2);
    var completedModuleIds = completedModules.map(function(module){
      return module.module_id;
    });
    
    for (var i = 0; i > userModules.length; i++) {
     if (userModule[i].status === "completed"){
      return modules[i].cp;
     }
    };
    
    var a = modules.filter(function(module) {
          return module.id === completedModuleIds[0];
        });
   
    var b = completedModules.map(function(completedModule) {
      var id = modules.map(function(module) {
        return module.id;
      });
      if(completedModule.module_id == id){ //hier vergleichen wir eine Id mit einem Array!
        var cp = modules.map(function(module) {
          return module.cp;
        });
        return cp;
      }
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
