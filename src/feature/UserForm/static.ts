const mockUser = {
  firstName: 'Ваня',
  lastName: 'Иванов',
  birthDate: '1990-10-02',
  sex: '0',
  city: 'City Name',
  roles: ['counselor', 'designer'],
  meetings: ['game'],
};

const optionsRoles = [
  { value: 'counselor', label: 'Планирую поехать вожатым' },
  { value: 'jnCounselor', label: 'Начинающий вожатый' },
  { value: 'mdlCounselor', label: 'Опытный вожатый' },
  { value: 'sncCounselor', label: 'Руководитель педотряда/Старший вожатый' },
  { value: 'designer', label: 'Оформитель' },
  { value: 'artDirector', label: 'Художественный руководитель' },
  { value: 'dj', label: 'Диджей' },
  { value: 'groupManager', label: 'Кружковод' },
  { value: 'couch', label: 'Тренер/физрук' },
  { value: 'animator', label: 'Аниматор' },
  { value: 'photographer', label: 'Фотограф' },
  { value: 'videographer', label: 'Видеограф' },
  { value: 'smm', label: 'SMM' },
  { value: 'programDir', label: 'Методист/Разработчик программы' },
  { value: 'director', label: 'Директор' },
  { value: 'otherAdminRole', label: 'Другая административная должность' },
  { value: 'otherRole', label: 'Другая роль' },
];

const optionsSex = [
  { value: '0', label: 'Не выбрано' },
  { value: '1', label: 'жен' },
  { value: '2', label: 'муж' },
];

const optionsMeetings = [
  { value: 'conference', label: 'Конференция, г.Москва' },
  { value: 'workshop', label: 'Воркшоп, г.Екатеринбург' },
  { value: 'lecture', label: 'Лекция, г.Омск' },
  { value: 'brainshtorm', label: 'Брейншторм, г.Сочи' },
  { value: 'game', label: 'Игра, г.Калининград' },
];

const requiredData = {
  firstName: '',
  lastName: '',
  birthDate: '',
  sex: {},
  city: '',
  meeting: [],
  role: [],
};

export { mockUser, optionsRoles, optionsSex, optionsMeetings, requiredData };
