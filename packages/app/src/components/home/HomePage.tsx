import { HomePageCompanyLogo, HomePageStarredEntities, HomePageToolkit } from '@backstage/plugin-home';
import { Content, DashboardIcon, InfoCard, Page } from '@backstage/core-components';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { HomePageSearchBar } from '@backstage/plugin-search';
import MapIcon from '@material-ui/icons/MyLocation';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
    '& fieldset': {
      border: 'none',
    }
  },
  container: {
    margin: theme.spacing(5, 0),
  }
}));

const tools = [
  {url: '/create?filters%5Bkind%5D=template&filters%5Buser%5D=all', label: 'Software Templates', icon: <DashboardIcon />},
  {url: '/tech-radar', label: 'Tech Radar', icon: <MapIcon />},
]

export const HomePage = () => {
  const classes = useStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent='center' spacing={6}>
            <Grid container item xs={12} alignItems='center' direction='row'>
              <HomePageSearchBar classes={{root: classes.searchBar}} placeholder="Search"/>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoCard title="Composable Section">
                  <div>
                    <p>An example section that can display a graph, or some other links, or tools.</p>
                  </div>
                </InfoCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit
                  tools={tools}
                />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  )
};
