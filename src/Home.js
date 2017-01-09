import React from 'react';
import Header from './Header';
import ModulePlan from './ModulePlan';
import PlanningSection from './PlanningSection';
import moduleplan from './moduleplan.json';
import users from './users.json';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      isLoggedIn: hoodie.account.isSignedIn()
    };
  }

  performLogin(email, password) {
    var firstName = users.students[0].name;
    hoodie.account.signIn({ username: email, password: password})
    .then(() => {
      hoodie.account.profile.update({firstName: firstName})
      .then(() => {
        this.setState({isLoggedIn: true});
        this.generateUserModuleData();
      });
    })
    .catch(function (error) {
      hoodie.account.destroy();
      hoodie.account.signUp({username: email, password: password})
      this.generateUserModuleData();
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

  generateUserModuleData(){
    var userModules = users.students[0].tracked_modules;
    hoodie.store.add({
      "userModules": userModules
    })
    .then(() => {
      console.log('your data has been saved')
    })
    .catch(function (error) {
      console.log('ohno', error)
    })
  };

  getUserModuleData(){
    return hoodie.store.findAll().then(function(data){
        var userModules = data[0].userModules;
        return Promise.resolve(userModules);
      }
    );
  };

  getSemestersForUser() {
    this.getUserModuleData()
    .then(function(userModules) {
      console.log(userModules);
    });
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
  };

  calculateTotalCredits() {
    var userModules = users.students[0].tracked_modules;
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
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var currentCredits= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "selected"){
        currentCredits= currentCredits + modules[i].cp;
      }
    }
    return currentCredits;
  };

   countSelectedCourses() {
    var userModules = users.students[0].tracked_modules;
    var modules = moduleplan.degree_course.modules;
    var selectedCoursesCounter= 0;
    for (var i = 0; i < userModules.length; i++) {
      if (userModules[i].status === "selected"){
        selectedCoursesCounter ++;
      }
    }
    return selectedCoursesCounter;
  };

  displayUserSignInStatus(isLoggedIn) {
    var totalCreditPoints = this.calculateTotalCredits();
    var currentCreditPoints = this.calculateCurrentCredits();
    var selectedCoursesCounter = this.countSelectedCourses();
    var semesters = this.getSemestersForUser();
    if(isLoggedIn) {
      return (<div><ModulePlan semesters={semesters}/><PlanningSection totalCreditPoints={totalCreditPoints} currentCreditPoints={currentCreditPoints} selectedCoursesCounter={selectedCoursesCounter} /></div>);
    }
    return (<div><p>Hallo! Bitte logge dich ein, um dein kommendes Semester zu planen</p></div>);
  }

  render() {
    var isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
      <Header performLogin={this.performLogin.bind(this)} performLogout={this.performLogout.bind(this)}/>
      {this.displayUserSignInStatus(isLoggedIn)}
      </div>
    );
  }
}

export default Home
