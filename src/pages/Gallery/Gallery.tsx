import { Box, Button, IconButton, Input, List, Typography } from '@mui/joy';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiSearch } from 'react-icons/bi';
import GalleryItem from '../../components/Gallery/GalleryItem';
import Slider from '../../components/Gallery/Slide';
import Loader from '../../components/Loader/Loader';
import { getAllImages } from '../../services/api';
import { StatusForAll } from '../../utils/status';
import { Photos } from '../../utils/types';

const Gallery = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('ukraine');
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(StatusForAll.init);
  const [images, setImages] = useState<Photos[] | []>([]);
  const [view, setView] = useState<string>(t('gallery_viewGallery'));

  useEffect(() => {
    setStatus(StatusForAll.loading);

    const getData = async () => {
      try {
        const data = await getAllImages(20, value);
        setImages(data.hits);
        setStatus(StatusForAll.success);
      } catch {
        setStatus(StatusForAll.error);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [value]);

  const handleChange = (value: string) => {
    setQuery(value);
  };

  const handleSearch = () => {
    setValue(query);
  };

  const handleViewGalleryClick = () => {
    setView(t('gallery_viewGallery'));
  };

  const handleViewSliderClick = () => {
    setView(t('gallery_viewSlider'));
  };

  return (
    <Box sx={{ mb: 3, pl: 3, width: '100%' }}>
      <Typography level="h2" sx={{ p: '20px 0 ' }}>
        {t('gallery_header')}
      </Typography>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button
          onClick={handleViewGalleryClick}
          variant={view === t('gallery_viewGallery') ? 'solid' : 'outlined'}
        >
          {t('gallery_viewGallery')}
        </Button>
        <Button
          onClick={handleViewSliderClick}
          variant={view === t('gallery_viewSlider') ? 'solid' : 'outlined'}
        >
          {t('gallery_viewSlider')}
        </Button>
      </Box>
      <Box sx={{ width: '60%', position: 'relative', mt: 4, m: '0 auto' }}>
        <Input
          id="search"
          name="search"
          placeholder={t('weather_btn')}
          autoComplete="search"
          value={query}
          autoFocus
          sx={{ p: 1, width: '100%' }}
          onChange={(e: { target: { value: string } }) => {
            handleChange(e.target.value);
          }}
        />
        <IconButton
          variant="plain"
          sx={{ position: 'absolute', top: '3px', right: '3px' }}
          onClick={handleSearch}
        >
          <BiSearch />
        </IconButton>
      </Box>
      {(status === StatusForAll.loading || status === StatusForAll.init) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            mt: 4,
          }}
        >
          <Loader />
        </Box>
      )}
      {view === t('gallery_viewGallery') && <></>}
      {status === StatusForAll.success && (
        <>
          {view === t('gallery_viewGallery') && (
            <List
              sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', flexDirection: 'row', mt: 4 }}
            >
              {images.length > 0 &&
                images.map((item: Photos) => {
                  return (
                    <GalleryItem
                      key={item.tags}
                      url={item.webformatURL}
                      bigImg={item.largeImageURL}
                    />
                  );
                })}
            </List>
          )}

          {view === t('gallery_viewSlider') && images.length > 0 && (
            <Box sx={{ width: '80%', m: '20px auto' }}>
              <Slider images={images} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Gallery;
