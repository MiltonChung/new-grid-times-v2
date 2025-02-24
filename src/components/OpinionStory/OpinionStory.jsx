import React from "react";
import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding: 16px 0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media ${QUERIES.tabletOnly} {
    border-bottom: none;
    margin-top: -1rem;
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 21px;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 8px;
    margin-left: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
