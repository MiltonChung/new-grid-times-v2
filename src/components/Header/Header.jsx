import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES, COLORS } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopHeader>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopHeader>
        <Logo />
        <DesktopHeader>
          <CallToActionGroup>
            <Button>Subscribe</Button>
            <Link href="#">Already a subscriber?</Link>
          </CallToActionGroup>
        </DesktopHeader>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const CallToActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  gap: 8px;
`;

const Link = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: underline;
  font-style: italic;
  font-size: 14px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
