import React from 'react';
import '../assets/styles/home.scss';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102909171-QA7UZFTG3UN5K3RH2SY1/13_20161004S1_CERAMICS_047.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102909068-EOPUVUSOXN1ZPYZNSJE8/1509-10f-01_Watches_Details_0068-RGB.jpg',
    title: 'Watch',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102908845-BSVRWTRY16JNVIOX7JFY/06_STILL_LIFE_265_V3_Master_OP2.jpg',
    title: 'Office',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102908993-KED2CEOAJG61JD6BI4U4/Stocksy_txp46315712VFE200_Large_2317055.jpg',
    title: 'Candle',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102908959-1GTONKFIVT9U2DOW6AKA/Stocksy_txp46315712VFE200_Large_2032121.jpg',
    title: 'Glasses',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102909126-DL56PSSIT2XKARQ700WW/13_20161004S1_CERAMICS_021.jpg',
    title: 'Bowles',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102909376-U4VKYLYPY1LX3R5363N7/Header_04_008-copy.jpg',
    title: 'Flowers',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/624b503b9bca881e3023cde2/1649102908942-ZKBZYJ0UCHLJY5PFIOX1/Stocksy_txp46315712VFE200_Large_1585842.jpg',
    title: 'Plant',
  }
];

const Home = () => (
 <div className="content">
    <ImageList sx={{ width: "100%" }} cols={3} gap={30} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <p style={{ fontSize: "25px" }}>{item.title}</p>
        </ImageListItem>
      ))}
    </ImageList>
  </div>
);


export default Home;