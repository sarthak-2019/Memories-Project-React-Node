import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Posts from "./../Posts/Posts";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid } from "@material-ui/core";
const Home = () => {
  const [currentId, setcurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
