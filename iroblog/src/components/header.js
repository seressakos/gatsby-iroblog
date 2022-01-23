import React, { useState, useEffect  } from 'react';
import Indicator from "./indicator";
import PropTypes, {element} from "prop-types"
import { Link } from "gatsby"

const Header = (props) => {
  const [pagination, setPagination] = useState([])
  useEffect(()=> {
    setPagination([...pagination,
      ...props.images.map((el, index)=> {
        return  {
          'value' : index,
        }
      })
    ])

  }, [])




  console.log('pag', pagination)

  return (
      <div>
        {pagination.map((list)=> {
          return <Indicator
              
            value = {list.value}
            id = {list.id}
          />
        })}
      </div>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
