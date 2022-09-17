import { Box } from 'components/Box';
import { Outlet } from 'react-router-dom';
import { NavItem } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Box
        as="header"
        display="flex"
        gridGap="20px"
        p="20px"
        borderBottom="1px solid black"
        className="shadow--header"
      >
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Box>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
