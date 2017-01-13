import React from 'react';
import Header from './Header';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import CourseSchedule from './CourseSchedule';
import moduleplan from './moduleplan.json';
import users from './users.json';
import courseData from './courseData.json';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn: hoodie.account.isSignedIn(),
      userModules: users.students[0].tracked_modules
    };
  }



  performLogin(email, password) {
    hoodie.account.signIn({ username: email, password: password})
    .then(() => {
      this.setState({isLoggedIn: true});
    })
    .catch(function (error) {
      hoodie.account.destroy();
      hoodie.account.signUp({username: email, password: password});
      console.log('🐳', error)
    })
  };

  performLogout() {
    hoodie.account.signOut()
    .then(() => {
      this.setState({isLoggedIn: false});
    })
    .catch(function (error) {
      hoodie.account.destroy();
      console.log('🐞', error)
    })
  };

  getSemestersForUser() {
    var userModules = this.state.userModules;
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
  };

  calculateTotalCredits() {
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var totalCredits= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "completed"){
        totalCredits= totalCredits + modules[i].cp;
      }
    }
    return totalCredits;
  };


  calculateCurrentCredits() {
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var currentCredits= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        currentCredits= currentCredits + modules[i].cp;
      }
    }
    return currentCredits;
  };

   countSelectedCourses() {
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var selectedCoursesCounter= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedCoursesCounter ++;
      }
    }
    return selectedCoursesCounter;
  };

  retrieveSelectedCourseInfo() {
    var userModules = this.state.userModules;
    var courseInfo = courseData.timetable.lectures;
    var selectedModuleIds= [];
    var selectedCourseData= [];
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedModuleIds.push(userModules[i].module_id);
      }  
    }
    for (var i = 0; i < selectedModuleIds.length; i++) {
        for (var j=0; j < courseInfo.length; j++){
          if (selectedModuleIds[i]===courseInfo[j].related_module_id)
          selectedCourseData.push(courseInfo[j]);
        }
      }
    return selectedCourseData;
  };

  retrieveSelectedCourseTitel(){
     var userModules = this.state.userModules;
     var modules = moduleplan.degree_course.modules;
     var selectedModuleIds= [];
     var selectedCourseTitels= [];
     for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedModuleIds.push(userModules[i].module_id);
      }  
    }
    for (var i = 0; i < selectedModuleIds.length; i++) {
        for (var j=0; j < modules.length; j++){
          if (selectedModuleIds[i]===modules[j].id)
          selectedCourseTitels.push(modules[j].title);
        }
      }
      return selectedCourseTitels;
  };
 
  toggleModule(moduleId, e){
    e.preventDefault();
    var userModules=this.state.userModules;
    var data=null;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].module_id===moduleId){
       if(userModules[i].status==="completed"){
        return;
       }
       userModules[i].selected= !userModules[i].selected;
      }  
    }
    this.setState({userModules:userModules});
  };

  renderUserData(isLoggedIn) {
    var totalCreditPoints = this.calculateTotalCredits();
    var currentCreditPoints = this.calculateCurrentCredits();
    var selectedCoursesCounter = this.countSelectedCourses();
    var semesters = this.getSemestersForUser();
    var selectedCourseInfo = this.retrieveSelectedCourseInfo();
    var selectedCourseTitels= this.retrieveSelectedCourseTitel();
    if(isLoggedIn) {
      return (
        <div><ModulePlan semesters={semesters} toggleModule={this.toggleModule.bind(this)} />
        <PlanningSection totalCreditPoints={totalCreditPoints} 
        selectedCourseInfo={selectedCourseInfo}
        selectedCourseTitels={selectedCourseTitels}
        currentCreditPoints={currentCreditPoints} 
        selectedCoursesCounter={selectedCoursesCounter} />
        <CourseSchedule selectedCourseInfo={selectedCourseInfo} />
        </div>
        );
    }
    return (<div><p>Hallo! Bitte logge dich ein, um dein kommendes Semester zu planen</p></div>);
  }

  render() {
    var isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
      <Header performLogin={this.performLogin.bind(this)} performLogout={this.performLogout.bind(this)}/>
      {this.renderUserData(isLoggedIn)}
      </div>
    );
  }
}

export default Home
