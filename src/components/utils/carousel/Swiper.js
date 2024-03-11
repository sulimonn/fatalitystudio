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
    const item = data.sort((a, b) => a.index_number - b.index_number).slice(i, i + 3);
    const slide = (
      <SwiperSlide key={i} style={{ backgroundColor: bg, borderRadius: 20 }}>
        <Box sx={{ py: { xs: 3, md: 5 } }} width={'100%'} height={'100%'} overflow={'hidden'}>
          <Box
            height={'100%'}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={{ xs: 1, sm: 3, md: 10 }}
          >
            {item.map((sub, index) => {
              return (
                <Box
                  key={index}
                  height={'100%'}
                  width={'min-content'}
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
                    src={sub.upload}
                    alt="carousel"
                    className="carousel-img"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                    }}
                  />
                  <Typography fontWeight={'200'} variant="caption" textAlign={'center'}>
                    {sub?.title}
                  </Typography>
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
    <div className="pointer-all" style={{ height: 'min-content' }}>
      <Swiper
        style={{ height: 'min-content' }}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
