// src/components/DepartmentList.tsx
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Checkbox } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const departments = [
  {
    name: 'Department 1',
    subDepartments: ['Sub Department 1-1', 'Sub Department 1-2']
  },
  {
    name: 'Department 2',
    subDepartments: ['Sub Department 2-1', 'Sub Department 2-2']
  }
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleClick = (name: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [name]: !prevOpen[name] }));
  };

  const handleToggle = (name: string, subName?: string) => {
    if (subName) {
      setChecked((prevChecked) => ({ ...prevChecked, [subName]: !prevChecked[subName] }));
    } else {
      const newChecked = { ...checked };
      departments.find(dep => dep.name === name)?.subDepartments.forEach(sub => {
        newChecked[sub] = !checked[name];
      });
      newChecked[name] = !checked[name];
      setChecked(newChecked);
    }
  };

  return (
    <List>
      {departments.map((department) => (
        <div key={department.name}>
          <ListItem button onClick={() => handleClick(department.name)}>
            <Checkbox
              edge="start"
              checked={checked[department.name] || false}
              tabIndex={-1}
              disableRipple
              onClick={() => handleToggle(department.name)}
            />
            <ListItemText primary={department.name} />
            {open[department.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[department.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((sub) => (
                <ListItem key={sub} button>
                  <Checkbox
                    edge="start"
                    checked={checked[sub] || false}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => handleToggle(department.name, sub)}
                  />
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
