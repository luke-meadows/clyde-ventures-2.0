import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
export default function ContactButton() {
  const router = useRouter();
  const isOnHomepage = router.asPath === '/';

  return (
    <StyledContactButton isOnHomepage={isOnHomepage}>
      <Link href="/contact">
        <button>Contact us</button>
      </Link>
    </StyledContactButton>
  );
}

const StyledContactButton = styled.div`
  /* flex: 2; */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: ${(props) =>
      props.isOnHomepage ? 'var(--dark-grey)' : 'var(--dark-grey)'};
    background: ${(props) =>
      props.isOnHomepage ? 'var(--yellow2)' : 'var(--yellow2)'};
    border: ${(props) =>
      props.isOnHomepage
        ? '1px solid var(--yellow2)'
        : '1px solid var(--yellow2)'};

    font-size: 1rem;
    box-shadow: ${(props) =>
      props.isOnHomepage ? 'rgba(0, 0, 0, 0.1) 0px 4px 12px' : 'none'};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
