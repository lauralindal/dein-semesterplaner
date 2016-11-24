import React from 'react';
import ModulePool from './ModulePool';
import CurrentCredits from './CurrentCredits';
import TotalCredits from'./TotalCredits';

class PlanningSection extends React.Component {
  render() {
    return (
      <section id="planningSection">
        <div id="planningSection">
          <div id="sum" className="float-left">
            <TotalCredits />
            <CurrentCredits />
          </div>
          <ModulePool />
          <p className="u-cf"></p>
        </div>
      </section>
    )
  }
}

export default PlanningSection
