import React from 'react';
import { Col } from './UI/Grid';
import Card from './UI/Card';
import Item from './Item';

const ListItem = props => {
  const { data, type } = props;
  return data
    .filter(item => item !== null)
    .map((item, i) => (
      <Col column='col-1-of-2' key={i}>
        <Card>
          <Item {...item} type={type} />
        </Card>
      </Col>
    ));
};

export default ListItem;
