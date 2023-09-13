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
    // TODO::
    // color coordinate the services for the customer within the time slot
    // will need text and emial confirmation for clients
    
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState<AgendaSchedule>({});

    const [selectedAppointment, setSelectedAppointment] = useState<AgendaItem | null>(null);

    const loadItems = (day: { timestamp: number }) => {
        
        setTimeout(() => {
            const numItems = 5; // Change this to the number of time slots you want
            const startTime = 8 * 60; // Start time in minutes (e.g., 8:00 AM)
            const newItems: AgendaSchedule = {};

            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;

                const strTime = timeToString(time);
                if (!newItems[strTime]) {
                    newItems[strTime] = [];

                    for (let j = 0; j < numItems; j++) {
                        // Calculate the time for the current slot
                        const minutes = startTime + j * 90; // 90 minutes = 1.5 hours
                        const hours = Math.floor(minutes / 60);
                        const mins = minutes % 60;
                        // Determine whether it's AM or PM
                        const period = hours >= 12 ? 'PM' : 'AM';
                        // Adjust hours for PM
                        const formattedHours = hours > 12 ? hours - 12 : hours;
                        // Format the time as HH:MM AM/PM
                        const timeAvailable = `${formattedHours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${period}`;

                        newItems[strTime].push({
                            //@ts-ignore
                            name: `${timeAvailable}`,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            id: j + ' ' + timeAvailable,
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
                    agendaDayTextColor: '#521908', 
                    agendaDayNumColor: '#521908',
                    agendaTodayColor: '#073B4C',
                    agendaKnobColor: '#521908',
                    selectedDayBackgroundColor: '#521908',
                    selectedDayTextColor: '#E7D5C7',
                    dotColor: '#521908',
                    todayTextColor: '#521908',
                    arrowColor: '#521908',
                    
                    
                }}
            />
            {selectedAppointment && (
                <View style={styles.selectedAppointmentContainer}>
                    <Text style={styles.selectedAppointmentText}>
                        Beauty Moment set for: {selectedAppointment.name}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        color: '#521908'
    },
    cardContainer: {
        marginRight: 10,
        marginTop: 17,
        backgroundColor: '#E7D5C7',
    },
    card: {
        backgroundColor: '#E7D5C7',
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
        fontSize: 18,
        color: '#521908'
    },
    cardSelectText: {
        color: '#521908',
        fontSize: 18,
    },
    selectedAppointmentContainer: {
        backgroundColor: '#F7EBD3',
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
        color: '#521908',
        fontSize: 20,
        textAlign:'center'
    },
});

export default Schedule;
