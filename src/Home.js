import React from 'react';
import {seedUserData} from './user.js';
import Header from './Header';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import CourseSchedule from './CourseSchedule';
import Popup from './PopupAlert.js';
import moduleplan from './moduleplan.json';
import users from './users.json';
import courseData from './courseData.json';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn: hoodie.account.isSignedIn(),
      userModules: users.students[3].tracked_modules,
      popupDismissed: false,
      clicked: false,
      originalStatus: users.students[0].tracked_modules.map((module) => {
        return module.status;
      })
    };
  };

  componentDidMount() {
    var isLoggedIn = this.state.isLoggedIn;
    if(isLoggedIn){
      this.getCurrentUserData();
    }
  };

 // when we ask hoodie for all it has in store, we get an array of objects,
 // so we want to pick the newest document/object which will contain the
 // most current set of module information for our user
  getCurrentUserData(){
    var self = this;
    return hoodie.store.findAll().then(function(userDataSets){
      self.setState({userModules: userDataSets[0].userModules});
      return Promise.resolve();
    });
  };

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
          userModules: userModules
        });
      });
      console.log('🐳', error);
    })
  };

  performLogout() {
    hoodie.account.signOut()
    .then(() => {
      this.setState({isLoggedIn: false});
    })
    .catch(function (error) {
      hoodie.account.destroy();
      console.log('🐞', error);
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

  calculateRemainingSemesters(){
    var totalCredits = this.calculateTotalCredits();
    var currentCredits = this.calculateCurrentCredits();
    var bachelorCredits = 180;
    return Math.ceil((bachelorCredits - (totalCredits + currentCredits))/30 + 1)
  };

  countSelectedCourses() {
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var selectedCoursesCounter = 0;
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
        if (selectedModuleIds[i] === courseInfo[j].related_module_id) {
          selectedCourseData.push(courseInfo[j]);
        }
      }
    }
    return selectedCourseData;
  };

  retrieveSelectedModuleTitle(){
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var selectedModuleIds = [];
    var selectedModuleTitles = [];
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedModuleIds.push(userModules[i].module_id);
      }
    }
    for (var i = 0; i < selectedModuleIds.length; i++) {
      for (var j=0; j < modules.length; j++){
        if (selectedModuleIds[i] === modules[j].id) {
          selectedModuleTitles.push(modules[j].title);
        }
      }
    }
    return selectedModuleTitles;
  };

  retrieveSelectedModules(){
    var userModules = this.state.userModules;
    var modules = moduleplan.degree_course.modules;
    var selectedModuleIds = [];
    var selectedModuleTitles = [];
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].selected){
        selectedModuleIds.push(userModules[i].module_id);
      }
    }
    for (var i = 0; i < selectedModuleIds.length; i++) {
      for (var j=0; j < modules.length; j++){
        if (selectedModuleIds[i] === modules[j].id) {
          modules[j].module_id = selectedModuleIds[i];
          selectedModuleTitles.push(modules[j]);
        }
      }
    }
    return selectedModuleTitles;
  };

  combineSelectedTitlesAndData(){
    var courseInformation = this.retrieveSelectedCourseInfo();
    var modules = moduleplan.degree_course.modules;
    for (var i = 0; i < modules.length; i++) {
      for (var j=0; j < courseInformation.length; j++)
      if (modules[i].id === courseInformation[j].related_module_id){
        courseInformation[j].title = modules[i].title;
      }
    }
    return courseInformation;
  };

  toggleModule(moduleId, e){
    e.preventDefault();
    var userModules=this.state.userModules;
    var data=null;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].module_id === moduleId){
        if(userModules[i].status === "completed"){
          return;
        }
        userModules[i].selected = !userModules[i].selected;
        if (userModules[i].selected) {
          userModules[i].status = "selected";
        } else {
          userModules[i].status = this.state.originalStatus[i];
        }
      }
    }
    var urgentModules = userModules.filter((userModule)=> {
      return userModule.status === "urgent";
    })

    this.setState({
      userModules: userModules,
      clicked: urgentModules.length > 0
    });

    hoodie.store.add({
      "userModules": userModules
    })
    .then(() => {
      console.log('hoodie now has your new data');
    })
  };

  dismissPopup() {
    this.setState({popupDismissed: true});
  }

  selectUrgentModules() {
    var newUserModules = this.state.userModules.map((userModule)=> {
      if (userModule.status === "urgent") {
        userModule.status = "selected";
        userModule.selected = true;
      }
      return  userModule;
    });
    this.setState({
      userModules: newUserModules,
      popupDismissed: true
    });
  }

  renderUserData(isLoggedIn) {
    var totalCreditPoints = this.calculateTotalCredits();
    var currentCreditPoints = this.calculateCurrentCredits();
    var remainingSemesters = this.calculateRemainingSemesters();
    var selectedCoursesCounter = this.countSelectedCourses();
    var semesters = this.getSemestersForUser();
    var selectedCourseInfo = this.retrieveSelectedCourseInfo();
    var selectedModuleTitles = this.retrieveSelectedModuleTitle();
    var combinedTitleAndData = this.combineSelectedTitlesAndData();
    //TODO give each react element a unique key
    if(isLoggedIn) {
      return (
        <div>
          <ModulePlan semesters={semesters} toggleModule={this.toggleModule.bind(this)} />
          {this.state.clicked && !this.state.popupDismissed ?
            <Popup
              dismissPopup={this.dismissPopup.bind(this)}
              selectUrgentModules={this.selectUrgentModules.bind(this)}
            /> : null}
          <PlanningSection
            totalCreditPoints={totalCreditPoints}
            selectedCourseInfo={selectedCourseInfo}
            selectedModuleTitles={selectedModuleTitles}
            currentCreditPoints={currentCreditPoints}
            remainingSemesters={remainingSemesters}
            selectedCoursesCounter={selectedCoursesCounter}
            toggleModule={this.toggleModule.bind(this)}
            retrieveSelectedModules={this.retrieveSelectedModules()}
          />
          <CourseSchedule
            selectedCourseInfo={selectedCourseInfo}
            combinedTitleAndData={combinedTitleAndData}
          />
        </div>
      );
    }
    return (<div><p>Hallo! Bitte logge dich ein, um dein kommendes Semester zu planen</p></div>);
  };

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
