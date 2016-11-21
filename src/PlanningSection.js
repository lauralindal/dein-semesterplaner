import React from 'react';
import ModulePool from './ModulePool';
import CurrentCredits from './CurrentCredits';

class PlanningSection extends React.Component {
  render() {
    return (
      <div id="planningSection">
        <div id="sum" className="float-left">
          <div id="sum_total">
            <h5>Alle Leistungspunkte</h5>
            Du hast bisher [xxx] Leistungspunkte gesammelt.
          </div>
          <CurrentCredits />
        </div>
        <ModulePool />
        <p className="u-cf"></p>
      </div>
    )
  }
}

export default PlanningSection
