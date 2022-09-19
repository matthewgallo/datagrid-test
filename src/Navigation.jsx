import React from 'react';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderContainer,
  Header,
  HeaderName
} from 'carbon-components-react/lib/components/UIShell';
import { Outlet, NavLink, useResolvedPath, useMatch } from "react-router-dom";

const Navigation = () => {
  const renderUIShellHeader = () => (
    <HeaderContainer
      render={() => (
        <Header aria-label="IBM Cloud Pak">
          <HeaderName href="/" prefix="IBM">
            Cloud Pak
          </HeaderName>
        </Header>
      )}
    />
  );
  return (
    <>
      {renderUIShellHeader()}
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavItems>
          <CustomSideNavLink to="/">Basic example</CustomSideNavLink>
          <CustomSideNavLink to="/with-side-panel">Side panel on row click (slide over)</CustomSideNavLink>
          <CustomSideNavLink to="/with-side-panel-slide-in">Side panel on row click (slide in)</CustomSideNavLink>
          <CustomSideNavLink to="/with-customize-columns">Customize columns</CustomSideNavLink>
        </SideNavItems>
      </SideNav>
      <Outlet />
    </>
  );
};

const CustomSideNavLink = ({children, to, ...rest}) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <SideNavLink to={to} element={NavLink} isActive={match} {...rest}>
      {children}
    </SideNavLink>
  )
}

export default Navigation;