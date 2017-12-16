import React from 'react';
import { Button, Input, Card, FormControl } from 'material-ui';

export default () => {
  return (
    <div className="container-center-items">
      <form>
        <Card className="login-card">
          <FormControl>
            <Input
              placeholder="Email"
              inputProps={{
                name: 'email'
              }}
            />
          </FormControl>
          <Button type="submit" raised color="primary">
            Register
          </Button>
        </Card>
      </form>
    </div>
  );
};
