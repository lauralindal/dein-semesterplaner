import React from 'react';
import {seedUserData} from './user.js';
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
      originalUserModules: [],
      userModules: users.students[3].tracked_modules
    };
  }

  getCurrentUserData(){
    var self = this;
    // when we ask hoodie for all it has in store, we get an array of objects,
    // so we want to pick the newest document/object which will contain the
    // most current set of module information for our user
    return hoodie.store.findAll().then(function(userDataSets){
      self.setState({userModules: userDataSets[0].userModules});
      return Promise.resolve();
    });
  }

  performLogin(email, password) {
    var self = this;
    hoodie.account.signIn({ username: email, password: password})
    .then(() => {
      this.setState({isLoggedIn: true});
      this.getCurrentUserData();
    })
    //TODO use arrow functionm & avoid self/this
    .catch(function (error) {
      hoodie.account.destroy();
      hoodie.account.signUp({username: email, password: password});
      seedUserData()
      .then(function (userModules) {
        console.log('your initial data has been saved in state');
        self.setState({
          originalUserModules: userModules,
          userModules: userModules
        });
      });
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

  retrieveSelectedModuleTitel(){
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var selectedModuleIds= [];
    var selectedModuleTitels= [];
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedModuleIds.push(userModules[i].module_id);
      }
    }
    for (var i = 0; i < selectedModuleIds.length; i++) {
      for (var j=0; j < modules.length; j++){
        if (selectedModuleIds[i]===modules[j].id)
        selectedModuleTitels.push(modules[j].title);
      }
    }
    return selectedModuleTitels;
  };

  combineSelectedTitelsAndData(){
    var courseInformation= this.retrieveSelectedCourseInfo();
    var modules = moduleplan.degree_course.modules;
    for (var i = 0; i < modules.length; i++) {
      for (var j=0; j < courseInformation.length; j++)
      if (modules[i].id == courseInformation[j].related_module_id){
        courseInformation[j].title=modules[i].title;
      }
    }
    return courseInformation;
  }

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
    this.setState({userModules: userModules});
  };

  renderUserData(isLoggedIn) {
    var totalCreditPoints = this.calculateTotalCredits();
    var currentCreditPoints = this.calculateCurrentCredits();
    var selectedCoursesCounter = this.countSelectedCourses();
    var semesters = this.getSemestersForUser();
    var selectedCourseInfo = this.retrieveSelectedCourseInfo();
    var selectedModuleTitels= this.retrieveSelectedModuleTitel();
    var combinedTitelAndData= this.combineSelectedTitelsAndData();
    //TODO give each react element a unique key
    if(isLoggedIn) {
      return (
        <div><ModulePlan semesters={semesters} toggleModule={this.toggleModule.bind(this)} />
        <PlanningSection totalCreditPoints={totalCreditPoints}
        selectedCourseInfo={selectedCourseInfo}
        selectedModuleTitels={selectedModuleTitels}
        currentCreditPoints={currentCreditPoints}
        selectedCoursesCounter={selectedCoursesCounter} />
        <CourseSchedule selectedCourseInfo={selectedCourseInfo} combinedTitelAndData={combinedTitelAndData}/>
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
