const mockUser = {
  firstName: 'User Name',
  lastName: 'User Last Name',
  birthDate: '1.8.1990',
  sex: 2,
  city: 'City Name',
};

const formElements = {
  firstName: {
    name: 'firstName',
    type: 'text'
  },
  lastName: {
    name: 'lastName',
    type: 'text'
  },
  birthDate: {
    name: 'birthDate',
    type: 'date'
  },
  city: {
    name: 'city',
    type: 'text'
  },
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

const optionsMeetings = [
  { value: 'Конференция', label: 'Конференция, г.Москва' },
  { value: 'Воркшоп', label: 'Воркшоп, г.Екатеринбург' },
  { value: 'Лекция', label: 'Лекция, г.Омск' },
  { value: 'Брейншторм', label: 'Брейншторм, г.Сочи' },
  { value: 'Игра', label: 'Игра, г.Калининград' },
];

const requiredData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  sex: {},
  city: '',
  // meeting: [],
  // role: [],
};

export { mockUser, optionsRoles, formElements, optionsSex, optionsMeetings, requiredData };
