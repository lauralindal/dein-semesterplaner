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
    return (
      <div>
        <ModulePlan semesters={semesters}/>
        <PlanningSection />
      </div>
    )
  }
}

export default Home

// semesters = [
//   [
//     {
//       "module": {
//         "id": 1,
//         "title": "Programmierung 1",
//         "description": "Kara",
//         "cp": 6,
//         "prerequisite": false,
//         "recommended_semester": 1
//       },
//       "userModule": {
//         "status": "urgent"
//       }
//     },
//     {
//       "id": 2,
//       "title": "Grundlegende Konzepte der Informatik",
//       "description": "Hackhack",
//       "cp": 5,
//       "prerequisite": false,
//       "recommended_semester": 1
//     }
//   ],
//   [
//     {
//       "id": 1,
//       "title": "Programmierung 1",
//       "description": "Kara",
//       "cp": 6,
//       "prerequisite": false,
//       "recommended_semester": 2
//     },
//     {
//       "id": 2,
//       "title": "Grundlegende Konzepte der Informatik",
//       "description": "Hackhack",
//       "cp": 5,
//       "prerequisite": false,
//       "recommended_semester": 2
//     }
//   ]
// ]
