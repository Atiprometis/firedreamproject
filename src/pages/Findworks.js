import React from 'react';
import '../css/findworks.css';

import Jobdescription from '../component/Jobdescription';
import ProjeceFild from '../component/ProjeceFild';
import Searchworks from '../component/Searchworks';
import CategoryWorks from '../component/CategoryWorks';


class Findworks extends React.Component {
  render() {
    return (
      <div>
        <Searchworks />
        <CategoryWorks />
        <Jobdescription />
        <ProjeceFild />

      </div>


    );
  }
}

export default Findworks;
