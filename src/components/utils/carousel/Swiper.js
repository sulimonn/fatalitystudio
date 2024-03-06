import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import { Box, Typography, Grid } from '@mui/material';

const SwiperComponent = ({ data, bg }) => {
  if (!data) {
    return null;
  }
  const slides = [];
  for (let i = 0; i < data.length; i += 3) {
    const item = data.slice(i, i + 3);
    const slide = (
      <SwiperSlide key={i} style={{ height: '100%' }}>
        <Box width={'80%'} height={{ xs: '300px', md: '600px' }} mx={'auto'}>
          <Grid container spacing={0} width={'100%'} height={'100%'} m={'0'}>
            {item.map((sub, index) => {
              return (
                <Grid
                  item
                  key={index}
                  height={'100%'}
                  xs={4}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Box
                    height={'60%'}
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    {false && (
                      <div className="img px-5">
                        <span className="spinner-border text-warning m-5" role="status"></span>
                      </div>
                    )}
                    <img
                      loading="lazy"
                      src={`http://79.174.82.88${sub.upload}`}
                      alt="carousel"
                      style={{
                        display: 'block',
                        width: 'auto',
                        height: '110%',
                        objectFit: 'contain',
                      }}
                    />
                    <Typography mt={1} variant="subtitle2" textAlign={'center'}>
                      {sub?.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </SwiperSlide>
    );
    slides.push(slide);
  }
  return (
    <Box height={{ xs: '300px', md: '600px' }} backgroundColor={bg} borderRadius={4}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
