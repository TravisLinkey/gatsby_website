import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MenuWrapper, MenuItem } from "./style";

const Menu = () => {
  const result = useStaticQuery(getMenuItems);
  return (
    <MenuWrapper>
      {result.contentfulMenu.menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          <Link
            to={menuItem.page.slug !== "/" ? `/${menuItem.page.slug}` : "/"}
          >
            {menuItem.label}
          </Link>
        </MenuItem>
      ))}
      <MenuItem>
        <Link to="/contact">Contact</Link>
      </MenuItem>
    </MenuWrapper>
  );
};

const getMenuItems = graphql`
  fragment menuItemData on ContentfulMenuItem {
    id
    label
    page {
      ... on ContentfulPage {
        slug
      }

      ... on ContentfulBlog {
        slug
      }

      ... on ContentfulMembershipPage {
        slug
      }

      ... on ContentfulVotingPage {
        slug
      }
    }
  }

  query MenuQuery {
    contentfulMenu {
      menuItems {
        ...menuItemData
      }
    }
  }
`;

export default Menu;
