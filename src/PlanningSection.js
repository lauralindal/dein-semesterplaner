import React from 'react';
import ModulePool from './ModulePool';
import CurrentCredits from './CurrentCredits';
import TotalCredits from './TotalCredits';

class PlanningSection extends React.Component {
  render() {
    return (
      <section id="planningSection">
        <div id="planningSection">
          <div id="sum" className="float-left">
            <TotalCredits totalCreditPoints={this.props.totalCreditPoints}/>
            <CurrentCredits 
              currentCreditPoints={this.props.currentCreditPoints} 
              selectedCoursesCounter={this.props.selectedCoursesCounter}
              remainingSemesters={this.props.remainingSemesters}
            />
          </div>
          <ModulePool
            selectedCourseInfo={this.props.selectedCourseInfo}
            selectedModuleTitles={this.props.selectedModuleTitles}
            toggleModule={this.props.toggleModule}
            retrieveSelectedModules={this.props.retrieveSelectedModules}/>
          <p className="u-cf"></p>
        </div>
      </section>
    )
  }
}

export default PlanningSection
