import { Box, CardContent, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import MediaCard from './card'
import crem from '../../crem.png'
import { withRouter } from 'react-router-dom'
// import { useParams, useLocation, withRouter } from 'react-router-dom'

const ProductsPage = ({ ...props }) => {
  const subcategory = props.location.state.subcategory
  console.log('props', props)

  // const [imageLoaded, setImageLoaded] = React.useState(false)

  // const requestImageFile = require.context('./images', true, /.png$/)

  return (
    <Box style={{ width: '100%' }}>
      <Box>
        {subcategory.products.map((item, i) => (
          <div key={i}>
            {/* <MediaCard item={item} /> */}
            <div>
              <div>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  to={{
                    pathname: `${process.env.PUBLIC_URL}/${item.name}`,
                    state: { item },
                  }}
                >
                  {/* {!imageLoaded && (
                    <Skeleton
                      variant="rect"
                      style={{ borderRadius: 10 }}
                      width={160}
                      height={220}
                    />
                  )} */}
                  <img
                    // onLoad={() => setImageLoaded(true)}
                    alt={item.name}
                    src={`./${item.img}.png`}
                    title={item.name}
                    // loading="lazy"
                  />
                </Link>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Цена {item.price} грн.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  объем {item.volume} ml
                </Typography>
              </CardContent>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default withRouter(ProductsPage)
