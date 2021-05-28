import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';




const Index = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div>
      <Typography variant="h3">
          GoodFaith Finance
        </Typography>
        <Typography variant="h6">
          An NFT Marketplace, Liquidity Pool and Intrest Farm
        </Typography>
      </div>
      <div style={{ padding: 40 }} justify="center">
        <Grid container item xs={12} spacing={0} >
        
            <nft-card style={{ padding: 10 }} justify-center
              tokenAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
              tokenId="492856"
              network="mainnet"
              referrerAddress="0x8b69E1051805C190Fe9464493F32F86077446990"
              >
            </nft-card>

            <nft-card style={{ padding: 10 }} justify-center
                tokenAddress="0xd07dc4262bcdbf85190c01c996b4c06a461d2430"
                tokenId="490643"
                network="mainnet"
                referrerAddress="0x8b69E1051805C190Fe9464493F32F86077446990"
                >
            </nft-card>
        
        </Grid>

      </div>
      <Link href="/about">
        <a className={classes.text}>About</a>
      </Link>
    </main>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    margin: '100px auto',
    maxWidth: 1100,
    textAlign: 'center',
    padding: '20 10px',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18
  },
}));

export default Index;
