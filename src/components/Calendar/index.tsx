import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars'; // Alias is used to avoid name conflicts with component name

LocaleConfig.locales['en-us'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
    'October', 'November', 'December'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    today: 'Today'
}
LocaleConfig.defaultLocale = 'en-us';

export function Calendar(){

    const theme = useTheme();

    return (
        <CustomCalendar 
            renderArrow={(direction) => 
                <Feather 
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                    size={24}
                    color={theme.colors.text}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.7,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                textMonthFontFamily: theme.fonts.secondary_600,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={String(new Date())}
        />
    );
}