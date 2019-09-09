import React from 'react';
import { List, ListItem, Badge } from 'react-native-elements';
import { TASK } from '../model';
import { APP_COLORS } from '../../styles/color';

const TaskList = ({ taskList }) => (
    <List>
        {taskList.map(task => (
        <ListItem
            key={task.id}
            title={task.content}
            badge={{
                element: (
                <Badge
                 value={task.status}
                 containerStyle={
                    task.status === TASK.todoStatus 
                    ? { backgroundColor: APP_COLORS.accent }
                    : { backgroundColor: APP_COLORS.LightPrimaryColor }
                 }
                />
                )
            }}
        />
        ))}
    </List>
);

export default TaskList;
