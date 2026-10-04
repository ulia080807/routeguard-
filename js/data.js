// DEMO-данные RouteGuard. Все имена, даты и ID вымышлены.

const DEMO_USERS = [
  { login: "coord", role: "coordinator", name: "Координатор" },
  { login: "admin", role: "admin",       name: "Администратор" }
];

const DEMO_PATIENTS = [
  { id: "D-001", name: "Мария К.",   modality: "Маммография" },
  { id: "D-002", name: "Анна С.",    modality: "Маммография" },
  { id: "D-003", name: "Елена П.",   modality: "Маммография" },
  { id: "D-004", name: "Ольга М.",   modality: "Маммография" },
  { id: "D-005", name: "Ирина В.",   modality: "Маммография" },
  { id: "D-006", name: "Татьяна Р.", modality: "Маммография" },
  { id: "D-007", name: "Светлана Н.",modality: "Маммография" },
  { id: "D-008", name: "Наталья Ж.", modality: "Маммография" },
  { id: "D-009", name: "Оксана Б.",  modality: "Маммография" },
  { id: "D-010", name: "Людмила Ф.", modality: "Маммография" },
  { id: "D-011", name: "Галина Т.",  modality: "Маммография" },
  { id: "D-012", name: "Вера Ш.",    modality: "Маммография" }
];

const DEMO_SLOTS = [
  { id: "S-01", service: "Консультация маммолога", dept: "Отделение А", date: "2026-10-05", time: "15:20", taken: false },
  { id: "S-02", service: "Консультация маммолога", dept: "Отделение А", date: "2026-10-06", time: "11:40", taken: false },
  { id: "S-03", service: "Консультация маммолога", dept: "Отделение А", date: "2026-10-07", time: "09:00", taken: false },
  { id: "S-04", service: "Консультация маммолога", dept: "Отделение Б", date: "2026-10-08", time: "14:00", taken: false }
];

const DEMO_REPORTS = [
  {
    id: "R-01",
    patientId: "D-006",
    text: "Учебный пример. В заключении указано: рекомендована консультация профильного специалиста. Срок не указан.",
    extraction: {
      modality: "Маммография",
      recommendation: "Консультация",
      specialist: null,
      service: null,
      deadline: null,
      quote: "рекомендована консультация профильного специалиста",
      needsClarification: true
    }
  },
  {
    id: "R-02",
    patientId: "D-001",
    text: "Учебный пример. Рекомендована консультация маммолога в срок до 14 дней.",
    extraction: {
      modality: "Маммография",
      recommendation: "Консультация маммолога",
      specialist: "Маммолог",
      service: "Консультация маммолога",
      deadline: "14 дней",
      quote: "Рекомендована консультация маммолога в срок до 14 дней",
      needsClarification: false
    }
  },
  {
    id: "R-03",
    patientId: "D-002",
    text: "Учебный пример. Рекомендаций не дано. Наблюдение по месту жительства.",
    extraction: {
      modality: "Маммография",
      recommendation: null,
      specialist: null,
      service: null,
      deadline: null,
      quote: "Рекомендаций не дано",
      needsClarification: false
    }
  }
];

const DEMO_RULES = [
  {
    id: "RG-DEMO-01",
    version: "1.0",
    condition: "recommendation = 'Консультация маммолога'",
    service: "Консультация маммолога",
    nextStep: "Записать на консультацию маммолога",
    deadlineSource: "Из заключения (14 дней)"
  }
];

const DEMO_ROUTES = [
  { id: "RT-001", patientId: "D-001", status: "Разрыв",            reason: "Запись отменена",              step: "Консультация маммолога" },
  { id: "RT-002", patientId: "D-002", status: "Разрыв",            reason: "Нет слота",                    step: "Консультация маммолога" },
  { id: "RT-003", patientId: "D-003", status: "Запланировано",     reason: "На 06.10.2026, 11:40",         step: "Консультация маммолога" },
  { id: "RT-004", patientId: "D-004", status: "Выполнено",         reason: "Состоялось 12.04.2026",        step: "Консультация маммолога" },
  { id: "RT-005", patientId: "D-005", status: "Требует уточнения", reason: "Нужны дополнительные данные",  step: "Уточнение врача" }
];
