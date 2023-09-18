import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import {
  Navigation,
  type NavigationFunctionComponent,
} from 'react-native-navigation';
import Container from '../../../../../../components/Container';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useMovieForm } from '../../model/use-movie-form';
import { Controller } from 'react-hook-form';
import Input from '../../../../../../components/Input';
import ChipsRadioButtons from '../../../../../../components/ChipsRadioButtons';
import { ChipsOption } from '../../../../../../components/ChipsRadioButtons/types';
import Button from '../../../../../../components/Button';
import FlashMessage from 'react-native-flash-message';
import { createMovie } from '../../../../../../api/api';

const options: ChipsOption[] = [
  { value: 'DVD', label: 'DVD' },
  { value: 'VHS', label: 'VHS' },
  { value: 'Blu-ray', label: 'Blu-ray' },
];

const Scene: NavigationFunctionComponent = ({ componentId }) => {
  const { t } = useTranslation('createMovie');
  const { form, handleAdd, handleRemove } = useMovieForm();

  const {
    control,
    watch,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = form;
  const flashMessageRef = useRef(null);
  const onSubmit = useCallback(
    async fields => {
      await createMovie({
        ...fields,
        actors: fields.actors.map(el => el.name),
      });

      flashMessageRef?.current?.showMessage({
        message: 'Movie created',
        type: 'success',
      });

      setTimeout(() => {
        Navigation.pop(componentId);
      }, 1000);
    },
    [componentId],
  );

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: t('header'),
          alignment: 'center',
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <FlashMessage position="top" ref={flashMessageRef} />
        <Container>
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                onChangeText={onChange}
                error={!!errors?.title?.message}
                placeholder={t('title')}
                label={t('title')}
                errorMessage={t(`errors:${errors?.title?.message}`)}
              />
            )}
          />
          <Controller
            name="year"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value ?? 0}
                onChangeText={onChange}
                error={!!errors?.year?.message}
                placeholder={t('year')}
                label={t('year')}
                errorMessage={t(`errors:${errors?.year?.message}`)}
                keyboardType="number-pad"
              />
            )}
          />
          <Controller
            name="format"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={styles.label}>{t('format')}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <ChipsRadioButtons
                    options={options}
                    value={value}
                    handleChange={onChange}
                    direction="row"
                  />
                </View>
              </>
            )}
          />
          <View style={styles.container}>
            <Text style={styles.label}>{t('listActors')}</Text>
            <TouchableOpacity onPress={handleAdd}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
          {watch('actors').map((item, index) => (
            <Controller
              name={`actors.${index}.name`}
              control={control}
              render={({ field: { onChange } }) => (
                <View style={styles.input}>
                  <Input
                    style={{ flex: 1 }}
                    value={item.name}
                    onChangeText={onChange}
                    error={!!errors?.actors?.[index]?.name?.message}
                    placeholder={t('actor')}
                    label={t('actor')}
                    errorMessage={t(
                      `errors:${errors?.actors?.[index]?.name?.message}`,
                    )}
                  />
                  <TouchableOpacity onPress={() => handleRemove(index)}>
                    <Text style={styles.delete}>Delete</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          ))}
        </Container>
      </ScrollView>
      <Container>
        <Button
          loader={false}
          onPress={handleSubmit(onSubmit)}
          label={t('Create')}
          disabled={!isDirty || !isValid}
        />
      </Container>
    </View>
  );
};

export { Scene };
