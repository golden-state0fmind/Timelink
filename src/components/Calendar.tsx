import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';

interface AgendaItem {
    name: string;
    height: number;
}

interface AgendaEntry {
    day: string;
    data: AgendaItem[];
}

interface AgendaSchedule {
    [date: string]: AgendaEntry[];
}

const timeToString = (time: string | number | Date) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState<AgendaSchedule>({});

    const [selectedAppointment, setSelectedAppointment] = useState<AgendaItem | null>(null);

    const loadItems = (day: { timestamp: number }) => {
        setTimeout(() => {
            const newItems: AgendaSchedule = {};
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!newItems[strTime]) {
                    newItems[strTime] = [];
                    const numItems = 5;
                    for (let j = 0; j < numItems; j++) {
                        newItems[strTime].push({
                            //@ts-ignore
                            name: `Available \nTime Slot ${j + 1} \n${strTime}`,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            id: j + ' ' + strTime,
                        });
                    }
                }
            }
            setItems({ ...items, ...newItems });
        }, 1000);
    };

    const handleAppointmentSelect = (appointment: AgendaItem) => {
        setSelectedAppointment(appointment);
    };

    const renderItem = (item: AgendaItem) => {
        return (
            <TouchableOpacity onPress={() => handleAppointmentSelect(item)} style={styles.cardContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <Text style={styles.cardSelectText}>{'Select'}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Agenda
                items={items as any}
                loadItemsForMonth={loadItems}
                selected={new Date().toISOString().substr(0, 10)}
                renderItem={renderItem}
                minDate={new Date().toISOString().substr(0, 10)}
                maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)}
                theme={{
                    agendaDayTextColor: '#073B4C',
                    agendaDayNumColor: '#073B4C',
                    agendaTodayColor: '#073B4C',
                    agendaKnobColor: '#06D6A0',
                    selectedDayBackgroundColor: '#06D6A0',
                    selectedDayTextColor: '#ffffff',
                    dotColor: '#06D6A0',
                    todayTextColor: '#073B4C',
                    arrowColor: '#06D6A0',
                }}
            />
            {selectedAppointment && (
                <View style={styles.selectedAppointmentContainer}>
                    <Text style={styles.selectedAppointmentText}>
                        Selected Appointment: {selectedAppointment.name}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 40,
    },
    cardContainer: {
        marginRight: 10,
        marginTop: 17,
        backgroundColor: '#ffffff',
    },
    card: {
        backgroundColor: '#06D6A0',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#a8a8a8',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 4,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 16,
    },
    cardSelectText: {
        color: '#073B4C',
        fontSize: 16,
    },
    selectedAppointmentContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        
        borderRadius: 10,
        shadowColor: '#a8a8a8',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 4,
    },
    selectedAppointmentText: {
        color: '#06D6A0',
        fontSize: 16,
    },
});

export default Schedule;
