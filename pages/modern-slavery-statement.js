import SEO from '@bradgarropy/next-seo';
import styled from 'styled-components';
export default function PrivacyPolicy() {
  return (
    <StyledTerms>
      <SEO
        title="Clyde Ventures - Privacy Policy"
        description="Our policy on privacy."
      />

      <div className="inner-terms">
        <h1 className="">Modern Slavery Statement</h1>
        <h4 className="font-bold font-sensibility text-1xl sm:text-1xl md:text-2xl lg:text-3xl leading-snug mt-12 mb-6 text-darkblue">
          Introduction:
        </h4>
        <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
          Clyde Ventures Group has a zero tolerance approach to any form of
          modern slavery. We are committed to acting ethically and with
          integrity and transparency in all business dealings and to putting in
          place effective systems and controls to safeguard against any form of
          modern slavery taking place within the business or our supply chain.
        </p>
        <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
          For the purposes of this policy, modern slavery encompasses slavery,
          servitude, human trafficking and forced labour, and is pursuant to
          section 54 of The Modern Slavery Act 2015, and this constitutes Clyde
          Venture&apos;s Group statement on modern slavery.
        </p>
        <h4 className="font-bold font-sensibility text-1xl sm:text-1xl md:text-2xl lg:text-3xl leading-snug mt-12 mb-6 text-darkblue">
          Our Business:
        </h4>
        <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
          Clyde Ventures Group is a multi-disciplinary consultancy business
          based in the UK. We recognise the importance of taking responsibility
          for ensuring a robust approach to slavery and human trafficking. We
          also understand that modern slavery and human trafficking are
          significant global issues presenting a challenge for businesses
          worldwide, and we are absolutely committed to preventing slavery and
          human trafficking in our corporate activities, and to ensuring that
          its supply chains are free from slavery and human trafficking.
        </p>
        <h4 className="font-bold font-sensibility text-1xl sm:text-1xl md:text-2xl lg:text-3xl leading-snug mt-12 mb-6 text-darkblue">
          Supply Chain:
        </h4>
        <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
          Our supply chain covers suppliers within and outside of the UK, and we
          expect all suppliers and contractors to uphold the same values as us
          in our zero tolerance approach to any form of modern slavery. We will
          refuse to deal with any supplier engaged in slavery or human
          trafficking or knowingly permit them to be carried out in any part of
          their business.
        </p>
        <ul className="text-base my-2 ml-5 mr-5 pl-0 xl:pl-5 pr-0 xl:pr-1 list-disc">
          <li className="text-base my-1 pt-0 pb-0">
            <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
              Identify and assess potential risk areas in our supply chains;
            </p>
          </li>
          <li className="text-base my-1 pt-0 pb-0">
            <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
              Mitigate the risk of slavery and human trafficking occurring in
              our supply chains;
            </p>
          </li>
          <li className="text-base my-1 pt-0 pb-0">
            <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
              Monitor potential risk areas in our supply chains; and
            </p>
          </li>
          <li className="text-base my-1 pt-0 pb-0">
            <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
              Protect whistle blowers.
            </p>
          </li>
        </ul>
        <h4 className="font-bold font-sensibility text-1xl sm:text-1xl md:text-2xl lg:text-3xl leading-snug mt-12 mb-6 text-darkblue">
          Training:
        </h4>
        <p className="text-xl mt-5 mb-5 pt-0 pb-0 break-words">
          Regular training on this policy, and on the risk that the business
          faces from modern slavery in its supply chains, will be provided to
          staff as necessary, so that they know how to identify exploitation and
          modern slavery and how to report suspected cases. The group&apos;s
          zero tolerance approach to modern slavery must be communicated to all
          suppliers, contractors and other business partners when entering into
          new or renewed contracts with them.
        </p>
      </div>
    </StyledTerms>
  );
}

const StyledTerms = styled.section`
  .inner-terms {
    padding: 12rem 5rem 5rem 5rem;
    position: relative;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto 0 auto;
  }
  h1 {
    z-index: 1;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 500;
    color: var(--dark-grey);
  }
  h4 {
    font-size: 2.4rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    padding-bottom: 0.25rem;
    padding-right: 0.25rem;
    border-bottom: 3px solid var(--yellow2);
    width: fit-content;
    margin-top: 5rem;
  }
  p {
    font-size: 1.2rem;
  }
  ul {
    margin-bottom: 1rem;
    li {
      list-style-position: inside;
      text-indent: -1.4rem;
      margin-left: 1.4rem;
      p {
        display: inline;
      }
    }
  }
  .mail-link,
  .underline {
    border-bottom: 2px solid var(--yellow2);
    padding-bottom: 0.15rem;
  }
  .cookie-table {
    margin-bottom: 1rem;
  }
  table {
    border: 1px solid black;
    width: 100%;
    background: var(--dark-grey);
    thead {
      background: var(--white);
    }
    td {
      text-align: center;
      height: fit-content;
      background: var(--white);
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 1170px) {
    .inner-terms {
      padding: 10rem 2rem;
    }
    h1 {
      font-size: 3.3rem;
    }
  }
`;
