import Link from 'next/link';
import styled from 'styled-components';
import Container from './Container';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="top">
        <div className="top-left">
          <nav>
            <Link href="/">About Clyde Ventures</Link>
            <Link href="/">Careers</Link>
            <Link href="/">People</Link>
            <Link href="/">Contact Us</Link>
          </nav>
        </div>
        <div className="top-right">
          <i className="icon-linkedin" />
          <i className="icon-facebook" />
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <div className="address">
            <p>Clyde Ventures Ltd</p>
            <p>Erskine House</p>
            <p>North Avenue</p>
            <p>Clydebank</p>
            <p>G81 2DR</p>
          </div>
          <div className="email">
            <i className="icon-mail" /> help@clydeventures.com
          </div>
        </div>
        <div className="bottom-right">
          <nav>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms &amp; Conditions</Link>
            <Link href="/">Governance Policies</Link>
          </nav>
          <p className="copy">
            © Clyde Ventures 2022 | Registered in Scotland: SC723600
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--white);
  padding: 5rem 3rem 1rem 3rem;
  font-weight: 300;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--dark-grey);
    .top-left {
      a {
        margin-right: 1.6rem;
        font-size: 0.9rem;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 0.8rem;
    p {
      margin-bottom: 0;
    }
    .email {
      margin-top: 1rem;
      font-size: 0.8rem;
    }
    a {
      margin-left: 1.2rem;
    }

    .bottom-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .copy {
        text-align: right;
        color: var(--light-grey);
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    padding: 5rem 6rem 2rem 6rem;
  }
`;
