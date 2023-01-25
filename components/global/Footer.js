import Link from 'next/link';
import styled from 'styled-components';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="top">
        <div className="top-left">
          <nav>
            <Link href="/about">
              <a>
                About <span className="clyde-ventures">Clyde Ventures</span>
              </a>
            </Link>
            <Link href="/people">People</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
        <div className="top-right">
          <a
            target="blank"
            href="https://www.linkedin.com/company/clyde-ventures/"
            alt="LinkedIn"
          >
            <i className="icon-linkedin" />
          </a>
          {/* <i className="icon-facebook" /> */}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <div className="address">
            <p>Clyde Ventures Ltd</p>
            <p>Suite 505</p>
            <p>Baltic Chambers</p>
            <p>50 Wellington Street</p>
            <p>Glasgow</p>
            <p>G2 6HJ</p>
          </div>
          <a
            className="email"
            target="blank"
            href="mailto:help@clydeventures.com"
          >
            <i className="icon-mail" /> help@clydeventures.com
          </a>
        </div>
        <div className="bottom-right">
          <nav>
            <Link href="/privacy-policy" alt="Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="/modern-slavery">Modern Slavery Statement</Link>
            {/* <Link href="/">Governance Policies</Link> */}
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
  background: var(--dark-grey);
  color: var(--grey);
  padding: 2.5rem 5rem;
  font-weight: 300;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--grey);
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
      display: block;
      font-size: 0.8rem;
    }

    .bottom-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      a {
        margin-left: 1.2rem;
        margin-top: 0rem;
        text-decoration: underline;
      }
      .copy {
        text-align: right;
        color: var(--light-grey);
      }
    }
  }
  @media only screen and (min-width: 1600px) {
    padding: 2rem 5rem;
  }
  @media only screen and (max-width: 1170px) {
    padding: 2rem;
    .clyde-ventures {
      display: none;
    }
    .bottom-right {
      width: 50%;
      nav {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }
    }
  }
`;
