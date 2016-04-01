import './QuickOfferings.scss';
import React from 'react';
import LearnMoreLinks from '../LearnMoreLinks/LearnMoreLinks';

export default function QuickOfferings() {
  return (
    <div className="quick-offerings">
      <div className="row">
        <div className="col-xs-12">
          <div className="contents">
            <h3>Consultancy</h3>
            <p>
              Modern companies hire me to figure out their JavaScript architecture, development
              effort, provide technical strategy on domain-specific scenarios, and to act on new
              ideas to evolve their team to the next frontier. I work side by side with the
              development team and work with leadership to ensure key performance indicators are met
              and risk is managed to meet deadlines.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="contents">
            <h3>Remote Code Reviews</h3>
            <p>
              I provide customized reports that identifies levels of technical debt,
              maintainability, ability to scale, and suggestions to improve time-to-market. Your
              company provides me access to the codebase and you receive your review and a video
              conference call outlining the items. All for a fixed cost.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contents">
            <h3>Training and Workshops</h3>
            <p>
              I work with agencies and product companies to help modernize their workflow.
              Often times teams are too busy to maintain their career training. I provide everything
              you need to know within a week (a few hours a day).
              Material will be in the form of customized content, code samples, verbal lectures, and
              Q&amp;As.
            </p>
          </div>
        </div>
      </div>

      <LearnMoreLinks />
    </div>
  );
}
