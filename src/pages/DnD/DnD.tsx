import React, { useEffect, useState } from 'react';
import { Box, Card, List, ListItem, Typography } from '@mui/joy';
import { useTranslation } from 'react-i18next';
import { getAllPhotos } from '../../services/api';
import { Photos } from '../../utils/types';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../../components/StrictModeDroppable';

const DnD = () => {
  const { t } = useTranslation();
  const [photos, setPhotos] = useState<Photos[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const photosList = await getAllPhotos();
      setPhotos(photosList.photos);
    };
    fetchData();
  }, []);

  const onDragComplete = (result: any) => {
    if (!result.destination) return;

    const arr = [...photos];

    const removedItem = arr.splice(result.source.index, 1)[0];
    arr.splice(result.destination.index, 0, removedItem);

    setPhotos(arr);
  };

  return (
    <Box sx={{ mb: 3, pl: 3, width: '100%' }}>
      <Typography level="h2" sx={{ p: '20px 0 ' }}>
        {t('dnd_header')}
      </Typography>

      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: {
              xs: '120px',
              md: '160px',
            },
          },
        }}
      >
        <DragDropContext onDragEnd={onDragComplete}>
          <Card sx={{ borderColor: 'var(--accent-focus)', width: '100%' }}>
            <StrictModeDroppable droppableId="items" type="PERSON">
              {(provided: any) => (
                <List
                  sx={{ display: 'flex', gap: '10px' }}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {photos.length > 0 &&
                    photos.map((p: Photos, index: number) => (
                      <Draggable draggableId={p.id.toString()} index={index} key={p.id}>
                        {provided => (
                          <ListItem
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Box
                              sx={{
                                width: '100%',
                                display: 'flex',
                                height: '100%',
                                bgcolor: 'var( --accent-light)',
                              }}
                            >
                              <img
                                src={p.src.original}
                                alt="photo"
                                width={'220px'}
                                style={{
                                  objectFit: 'cover',
                                  objectPosition: 'top',
                                  maxHeight: '125px',
                                  padding: '4px',
                                }}
                              />
                              <Box
                                sx={{
                                  width: '100%',
                                  height: '100%',
                                  p: 2,
                                }}
                              >
                                <Typography level="title-lg">{p.alt}</Typography>
                                <Typography level="body-md">
                                  {t('dnd_photographer', { photographer: p.photographer })}
                                </Typography>
                              </Box>
                            </Box>
                          </ListItem>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </List>
              )}
            </StrictModeDroppable>
          </Card>
        </DragDropContext>
      </Box>
    </Box>
  );
};

export default DnD;
