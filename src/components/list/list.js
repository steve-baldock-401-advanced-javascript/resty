import React from 'react';
import './list.scss';


const List = props => (
  <React.Fragment>
    <ul aria-label="list" className="list">{props.children}</ul>
    <When condition={props.children.length > 5}>
    <div>Take it easy there</div>
    </When>
  </React.Fragment>
);

export default List;