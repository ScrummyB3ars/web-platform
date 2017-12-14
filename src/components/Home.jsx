import React from 'react';
import { Button, Card, CardContent, Typography } from 'material-ui';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-banner-inner">
          <Card className="home-banner-card">
            <CardContent>
              <Typography>Welcome to Toddlr!</Typography>
              <Typography>
                Toddlr is an automated tip-sending platform for kindergarten
                teachers.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="home-content">
        <Button raised color="primary">
          Contact our messenger bot
        </Button>
        <Link to="/subscribe">
          <Button raised color="accent">
            Receive tips by mail
          </Button>
        </Link>
      </div>
    </div>
  );
};
