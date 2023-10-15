import { Box, ListItem, Modal } from '@mui/joy';
import React, { useState } from 'react';
import css from './GalleryItem.module.css';
const GalleryItem = ({ url, bigImg }: { url: string; bigImg: string }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <ListItem sx={{ width: '260px', p: 0 }} onClick={toggleOpenModal}>
        <img loading="lazy" src={url} alt="photo" className={css.img} />
      </ListItem>
      <Modal
        open={openModal}
        onClose={toggleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '80%', heigth: '60%' }}>
          <img loading="lazy" src={bigImg} alt="photo" className={css.bigImg} />
        </Box>
      </Modal>
    </>
  );
};

export default GalleryItem;
