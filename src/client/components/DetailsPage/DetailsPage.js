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
          <blockquote className="blockquote">
            <p className="m-b-0">
              I'm a passionate technologist who wants to help other engineers and engineering teams
              reach an equilibrium in research, value, and execution. My tools evolve constantly but
              I generally work with <strong>Node, LoopBack, Hapi, React, Redux, Angular, RxJS,
              Postgres, Mongo, and AWS</strong>. I have a long list of other technologies that I
              work with <a target="_blank" href="http://stackoverflow.com/users/1146987/matt-lo">on
              StackOverflow</a>, or <a onClick={handleModal()}>you can ask me directly</a>. Some of
              the top <strong>integrations
              I work with are Adobe Experience Manager, SAP, Salesforce, Mail services (Railgun,
              Mandrill), Stripe, Authorize.net, and Sitecore.</strong> I can learn any custom
              integration point or learn any product you want to integrate with.
            </p>
            <br />
            <p className="m-b-0">
              <strong>
                I've built client insurance exchange systems, scalable SOAs, custom secure
                workflows, performant mobile web apps, and helped teams hit tough delivery
                dates.
              </strong>&nbsp;
              On top meeting requirements for each contract, I've
              improved automation, developer and process efficiency, culture improvements, and
              provided roadmap strategy so companies are well position in the long run.
            </p>
          </blockquote>
        </section>

        <section className="section">
          <h2><i className="fa fa-code" /> Architecture, Development, Advisor</h2>

          <p>
            If you have an efficiency problem, a deadline problem, a knowledge problem, or a problem
            you don't know exists yet, you need an expert!
            &nbsp;<a onClick={handleModal()}>Contact me directly</a> and we can figure out if
            there's an opportunity to be discovered. I'm well verse in
            several domains so you can talk freely. Several individuals who contact me walk away
            from our first meeting with more insight than they had previously.
          </p>

          <p>
            My proficiency revolves around several architectures including services oriented (SOA),
            monolithic, and micro services oriented over REST. <strong>I'm well verse in agile and
            waterfall. I usually work closely with product owners, developers, UX, and the
            leadership team.</strong>
          </p>

          <p>
            When we talk, <strong>ask about my prior engagements, case studies, or anything
            else.</strong> I have a Reddit-like AMA policy! You can even ask me how to solve your
            architectural problems right on the call. <strong>I've worked directly with CTOs, VPs,
            Directors of Technology, software managers, and other consultants.</strong>
          </p>

          <h4>What's the process?</h4>
          <ol>
            <li>
              <strong>Discuss architecture, development, or leadership opportunities</strong> that
              the
              company is in demand for.
            </li>
            <li>
              Agree on <strong>availability, start and end date, travel, hourly rate, work
              acceptance criteria, and invoice net terms</strong>
            </li>
            <li>
              The company will provide their <strong>master service agreement and/or work
              statement</strong>. I will supplement any documents if needed. I will be issuing an
              invoice every month itemizing all the time I worked.
            </li>
            <li>
              I integrate within your environment on Day 1 and we get to work!
            </li>
          </ol>

          <a className="btn btn-primary" onClick={handleModal('Architecture and Development')}>
            <i className="fa fa-code" /> Let's discuss the opportunities
          </a>
        </section>

        <section className="section">
          <h2><i className="fa fa-file-archive-o" /> Remote Code Review</h2>

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

          <a className="btn btn-primary" onClick={handleModal('Code Reviews')}>
            <i className="fa fa-file-archive-o" /> Get a code review
          </a>
        </section>

        <section className="section">
          <h2><i className="fa fa-graduation-cap" /> Company Workshops and Training</h2>

          <p>
            Lets work together if you need one-on-one mentorship, team training (centralized or
            distributed), or want me to host a meetup for you as the lead speaker. I've helped train
            individuals in all kinds of specific libraries like React and Hapi, architecture and
            design patterns, or company specific tangible skillsets that complement their technical
            goals.
          </p>

          <p>
            Suggested topics: <strong>Modernizing front-end, multi-language SOAs, code efficiencies,
            using devtools, devops, architecture, or a specific technology (Hapi, React, Angular,
            AWS, etc...).</strong>
            I'm flexible with any duration type of engagement (a couple hours, per day, for a week;
            whole days, half days). All material is authorized before actual training commences, I
            can
            also integrate domain specific content to increase company relevancy.
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
              Start the process agreed on step 3 and get to work!
            </li>
          </ol>

          <a className="btn btn-primary" onClick={handleModal('Training')}>
            <i className="fa fa-graduation-cap" /> Let's talk about training
          </a>

        </section>

      </div>

      <Footer />
      <ContactModal />
    </div>
  );
}
