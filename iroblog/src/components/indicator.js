import React from 'react';

const Indicator = ({value}) => (
    <>
      <div data-value={value}>
        {value}
      </div>

    </>
)

export default Indicator