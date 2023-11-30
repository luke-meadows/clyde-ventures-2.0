import Image from 'next/image';
import InsightThumbnailImage from '../../public/insight-thumbnail-background.jpg';
import Link from 'next/link';
import styled from 'styled-components';
export default function InsightGridItem({
  date,
  thumbnail,
  heading,
  author,
  url,
  tags = [],
}) {
  return (
    <Link href={url}>
      <StyledInsightGridItem>
        <Image
          src={thumbnail}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="tags">
          {tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>
        <div className="title-box">
          <div>
            <h5>{heading}</h5>
            <p>
              {author} - {date}
            </p>
          </div>
          <button>
            Read
            <div>
              <i className="icon-angle-right" />
            </div>
          </button>
        </div>
      </StyledInsightGridItem>
    </Link>
  );
}
const StyledInsightGridItem = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  aspect-ratio: 1;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  .tags {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem;
    p {
      background: #000;
      color: var(--yellow2);
      padding: 0 0.5rem;
      border-radius: 30px;
      font-size: 0.9rem;
      margin-bottom: 0;
    }
  }
  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    p,
    h5 {
      margin: 0;
    }
    p {
      font-weight: 400;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }
    h5 {
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  button {
    background: var(--yellow2);
    border: 2px solid var(--yellow2);
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 8px 16px;
    height: fit-content;
    display: flex;
  }
  i {
    margin-right: -8px;
  }
`;
