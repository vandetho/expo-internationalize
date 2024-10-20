import React from 'react';
import { Button } from 'react-native';
import i18next from '@/i18next';
import { ThemedView } from '@/components/ThemedView';

export const LanguageSwitcher = () =>
    (
        <ThemedView>
            <Button title="English" onPress={() => i18next.changeLanguage('en')}/>
            <Button title="Français" onPress={() => i18next.changeLanguage('fr')}/>
        </ThemedView>
    );

