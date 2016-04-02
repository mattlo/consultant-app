import '../../libs/bootstrap.scss';
import './DetailsPage.scss';
import React from 'react';
import HeroImage from '../HeroImage/HeroImage';
import PersistentHeader from '../PersistentHeader/PersistentHeader';
import Footer from '../Footer/Footer';
import {store} from '../../data/index';
import ContactModal from '../ContactModal/ContactModal';

function handleModal(context) {
  return () => store.dispatch({type: 'SHOW_MODAL', context});
}

export default function DetailsPage() {
  return (
    <div className="details-page">
      <PersistentHeader />
      <HeroImage src="https://cdn.mattlo.io/coding-graphic.jpg">
        Lets talk code; Matt Lo: JS Architect.
      </HeroImage>

      <div className="container">
        <section className="section">
          <h2>Architecture and Development</h2>

          <p>

          </p>

          <h4>What's the process?</h4>
          <ol>
            <li>
              <strong>Discuss architecture, development, or leadership opportunities</strong> that
              the
              company is in demand for.
            </li>
            <li>
              Agree on <strong>availability, start and end date, hourly rate, work acceptance
              criteria, and invoice net terms</strong>
            </li>
            <li>
              The company will provide their <strong>master service agreement and/or work
              statement</strong>. I will supplement any documents if needed. I will be issuing an
              invoice every month itemizing all the time I worked.
            </li>
            <li>
              When all papers are signed, I will buy the key decision maker coffee some point the
              near
              future.
            </li>
          </ol>

          <a className="btn btn-primary" onClick={handleModal('Consulting')}>Let's discuss the
            opportunities</a>
        </section>

        <section className="section">
          <h2>Remote Code Review</h2>

          <p>
            Companies want a health snapshot of their codebase. Developers are sometimes too busy
            working on features or deadlines to focus on a <strong>comprehensive codebase-wide
            analysis and solutions</strong>. Or technical leadership may want an expert opinion on
            the state to solve an immediate problem such as <strong>maintainability, feature
            time-to-market, and performance.</strong>
          </p>

          <p>
            Now is a perfect opportunity to obtain a <strong>customized code-review report</strong>
            so you can focus on your next major version, with clear and complete goals on top of
            your requirements.
          </p>

          <h4>How do we get started?</h4>

          <ol>
            <li>
              I will work with you in identifying areas of concern and ask for other interest
              segments.
            </li>
            <li>
              The company will authorized access to me (GIT and any other agreed access points).
            </li>
            <li>
              I will <strong>audit and review the code, solution, and other agreed areas</strong>.
              Then I will provide a <strong>detailed customized report</strong> outlining the
              issues,
              providing examples, and at least 2 solutions for each issue that are compatible with
              your company.
            </li>
            <li>
              The company and myself will have a <strong>90 minute video conference</strong> to
              discuss the report.
            </li>
            <li>
              I will send the company a <strong>fixed-rate invoice</strong> upon completion of work.
            </li>
          </ol>

          <a className="btn btn-primary" onClick={handleModal('Code Review')}>Get a code review</a>
        </section>

        <section className="section">


          <h2>Company Workshops and Training</h2>

          <p>

          </p>

          <h4>The approach</h4>
          <ol>
            <li>
              I will work with the company's technical leadership to <strong>determine where they
              want
              to be post-training.</strong>
            </li>
            <li>
              <strong>Collect and analyze data</strong> on the current state for development,
              employee
              knowledge, and architecture.
            </li>
            <li>
              I will create a <strong>detailed curriculum</strong> that works with the company's
              team
              availability and goals and solidify an agreement.
            </li>
            <li>
              Agree on a <strong>fixed-cost estimate, statement of work, start and end
              time</strong>, and invoice net terms.
            </li>
            <li>
              Start the process agreed on step 3. Upon completion of the training, I will buy all
              participants a gift card to a preferred coffee shop.
            </li>
          </ol>

          <a className="btn btn-primary" onClick={handleModal('Training')}>
            Let's talk about training
          </a>

        </section>

      </div>

      <Footer />
      <ContactModal />
    </div>
  );
}
