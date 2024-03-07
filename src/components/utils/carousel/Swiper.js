import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './carousel.css';
import { Box, Typography } from '@mui/material';

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
          <Box
            width={'100%'}
            height={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={3}
          >
            {item.map((sub, index) => {
              return (
                <Box
                  item
                  key={index}
                  height={'95%'}
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
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Typography mt={1} variant="subtitle2" textAlign={'center'}>
                      {sub?.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </SwiperSlide>
    );
    slides.push(slide);
  }
  return (
    <Box height={{ xs: '300px', md: '600px' }} backgroundColor={bg} borderRadius={4}>
      <div className="pointer-all" style={{ height: '100%', width: '100%' }}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides}
        </Swiper>
      </div>
    </Box>
  );
};

export default SwiperComponent;
