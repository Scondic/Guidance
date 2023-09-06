const mockUser = {
  firstName: 'User Name',
  lastName: 'User Last Name',
  birthDate: '1.8.1990',
  sex: 0,
  city: 'City Name',
};

const formElements = {
  firstName: {
    element: 'input',
    name: 'firstName',
    type: 'text'
  },
  lastName: {
    element: 'input',
    name: 'lastName',
    type: 'text'
  },
  birthDate: {
    element: 'input',
    name: 'birthDate',
    type: 'date'
  },
  city: {
    element: 'select',
    name: 'city',
    children: []
  }
}

const optionsRoles = [
  { value: 'Планирую поехать вожатым', label: 'Планирую поехать вожатым' },
  { value: 'Начинающий вожатый', label: 'Начинающий вожатый' },
  { value: 'Опытный вожатый', label: 'Опытный вожатый' },
  { value: 'Руководитель педотряда/Старший вожатый', label: 'Руководитель педотряда/Старший вожатый' },
  { value: 'Оформитель', label: 'Оформитель' },
  { value: 'Художественный руководитель', label: 'Художественный руководитель' },
  { value: 'Диджей', label: 'Диджей' },
  { value: 'Кружковод', label: 'Кружковод' },
  { value: 'Тренер/физрук', label: 'Тренер/физрук' },
  { value: 'Аниматор', label: 'Аниматор' },
  { value: 'Фотограф', label: 'Фотограф' },
  { value: 'Видеограф', label: 'Видеограф' },
  { value: 'SMM', label: 'SMM' },
  { value: 'Методист/Разработчик программы', label: 'Методист/Разработчик программы' },
  { value: 'Директор', label: 'Директор' },
  { value: 'Другая административная должность', label: 'Другая административная должность' },
  { value: 'Другая роль', label: 'Другая роль' },
];

const optionsSex = [
  { value: 0, label: 'Не выбрано' },
  { value: 1, label: 'жен' },
  { value: 2, label: 'муж' },
];

export { mockUser, optionsRoles, formElements, optionsSex };
