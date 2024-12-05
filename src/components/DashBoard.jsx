import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import Logo from "./images/logo.PNG";

const NAVIGATION = [
  {
    segment: 'Topic1',
    title: 'Topic1',
    icon: <DashboardIcon />,
    children: [
        {
          segment: 'SubTopic1',
          title: 'SubTopic1',
          icon: <ShoppingCartIcon />,
        },
        {
          segment: 'SubTopic2',
          title: 'SubTopic2',
          icon: <ShoppingCartIcon />,
        },
      ],
  },
  {
    segment: 'Topic2',
    title: 'Topic2',
    icon: <ShoppingCartIcon />,
    children: [
        {
          segment: 'SubTopic1',
          title: 'SubTopic1',
          icon: <ShoppingCartIcon />,
        },
        {
          segment: 'SubTopic2',
          title: 'SubTopic2',
          icon: <ShoppingCartIcon />,
        },
      ],
  },
  {
    segment: 'Topic3',
    title: 'Topic3',
    icon: <ShoppingCartIcon />,
    children: [
        {
          segment: 'SubTopic1',
          title: 'SubTopic1',
          icon: <ShoppingCartIcon />,
        },
        {
          segment: 'SubTopic2',
          title: 'SubTopic2',
          icon: <ShoppingCartIcon />,
        },
      ],
  },
  {
    segment: 'Topic4',
    title: 'Topic4',
    icon: <ShoppingCartIcon />,
    children: [
        {
          segment: 'SubTopic1',
          title: 'SubTopic1',
          icon: <ShoppingCartIcon />,
        },
        {
          segment: 'SubTopic2',
          title: 'SubTopic2',
          icon: <ShoppingCartIcon />,
        },
      ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter('/Topic1');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={Logo} />,
        title: 'ITSRUNTYM',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBranding.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBranding;
