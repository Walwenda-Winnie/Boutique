
import * as moment from 'moment'


export const events =  [{
    "id": "544c4183be624ef013bb009a",
    "title": "All Day Event",
    "start": moment().subtract(15, 'day').startOf('day').add(21, 'hours'),
    "description": "long description",
    "icon": "fa-check",
    "className": ["event", "bg-color-greenLight"]
}, {
    "id": "544c4183be624ef013bb009b",
    "title": "Long Event",
    "start": moment().subtract(12, 'day').startOf('day'),
    "end": moment().subtract(11, 'day').startOf('day'),
    "icon": "fa-lock",
    "className": ["event", "bg-color-red"]
}, {
    "id": "544c4183be624ef013bb009c",
    "title": "Repeating Event",
    "start": moment().subtract(7, 'day').startOf('day').add(13, 'hours'),
    "allDay": false,
    "icon": "fa-clock-o",
    "className": ["event", "bg-color-blue"]
}, {
    "id": "544c4183be624ef013bb009d",
    "title": "Repeating Event",
    "start": moment().add(14, 'day').startOf('day').add(14, 'hours'),
    "allDay": false,
    "icon": "fa-clock-o",
    "className": ["event", "bg-color-blue"]
}, {
    "id": "544c4183be624ef013bb009e",
    "title": "Meeting",
    "start": moment().add(1, 'day').startOf('day').add(8, 'hours').add(30, 'minutes'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "id": "544c4183be624ef013bb009f",
    "title": "Lunch",
    "start": moment().add(3, 'day').startOf('day').add(10, 'hours'),
    "end": moment().add(3, 'day').startOf('day').add(12, 'hours'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "id": "544c4183be624ef013bb00a0",
    "title": "Birthday Party",
    "start": moment().add(5, 'day').startOf('day').add(17, 'hours'),
    "end": moment().add(5, 'day').startOf('day').add(20, 'hours').add(30, 'minutes'),
    "allDay": false,
    "className": ["event", "bg-color-darken"]
}, {
    "id": "544c4183be624ef013bb00a1",
    "title": "Smartadmin Open Day",
    "start": moment().add(7, 'day').startOf('day').add(22, 'hours'),
    "end": moment().add(8, 'day').startOf('day').add(22, 'hours'),
    "className": ["event", "bg-color-darken"]
}];


export const samples = [
  {
      id: 'ee1',
      title: "Estimated Pickup Date",
      description: "estimated delivery date for the item",
      className: "bg-color-darken txt-color-white",
      icon: "fa-time"
  },
  {
      id: 'ee2',
      title: "Actual shipping date",
      description: "No Description",
      className: "bg-color-blue txt-color-white",
      icon: "fa-time"
  },
  {
      id: 'ee3',
      title: "Actual delivery/pickup date",
      description: "date the item is delivered",
      className: "bg-color-pink txt-color-white",
      icon: "fa-time"
  },
  {
    id: 'ee4',
    title: "Sale date",
    description: "date the item is actually sold",
    className: "bg-color-green txt-color-white",
    icon: "fa-time"
}
];
