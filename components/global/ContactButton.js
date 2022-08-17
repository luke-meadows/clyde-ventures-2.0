import { useRouter } from 'next/router';
import styled from 'styled-components';
export default function ContactButton() {
  const router = useRouter();
  // const isOnHomepage = router.asPath === '/';
  const isOnHomepage = true;

  return (
    <StyledContactButton isOnHomepage={isOnHomepage}>
      <button>Contact us</button>
    </StyledContactButton>
  );
}

const StyledContactButton = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: ${(props) => (props.isOnHomepage ? 'var(--black)' : 'var(--black)')};
    background: ${(props) => (props.isOnHomepage ? 'var(--yellow2)' : 'none')};
    border: 1px solid var(--yellow2);
    font-size: 1rem;
    box-shadow: ${(props) =>
      props.isOnHomepage ? 'rgba(0, 0, 0, 0.1) 0px 4px 12px' : 'none'};
    font-size: 0.9rem;
    font-weight: ${(props) => (props.isOnHomepage ? '500' : '400')};
  }
`;
