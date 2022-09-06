import styled from 'styled-components';
export default function NavIcon({
  setShowSidebar,
  showSidebar,
  useAnimation = false,
  bgColor = 'var(--dark-grey)',
}) {
  return (
    <StyledNavIcon bgColor={bgColor}>
      <div
        id="nav-icon3"
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar && useAnimation ? 'open' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledNavIcon>
  );
}

const StyledNavIcon = styled.div`
  /* Icon 1 */
  #nav-icon3 {
    width: 20px;
    height: 10px;
    position: relative;
    margin: 1px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon1 span,
  #nav-icon3 span,
  #nav-icon4 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;

    background: var(--dark-grey);
    background: ${(props) => props.bgColor};
    border-radius: 9rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 6px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 12px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 6px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 6px;
    width: 0%;
    left: 50%;
  }
`;
