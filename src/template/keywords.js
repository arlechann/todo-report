import { formatMonthDate, minutesToHours } from "../utils/utils";

const keywords = [
  { keyword: '%%', get: () => '%' },
  { keyword: '%TODAY%', get: () => formatMonthDate(new Date()) },
  { keyword: '%ORDER%', get: ({ order }) => order + 1 },
  { keyword: '%NAME%', get: ({ state, id }) => state.items[id].name },
  { keyword: '%DUE_DATE%', get: ({ state, id }) => state.items[id].dueDate },
  { keyword: '%PROGRESS%', get: ({ state, id }) => state.items[id].progress },
  { keyword: '%SPENT_TIME%', get: ({ state, id }) => minutesToHours(state.items[id].spentTimeMinutes) },
  { keyword: '%PRODUCTIVE%', get: ({ state, id }) => state.items[id].isProductive ? '生産' : '非生産' },
  {
    keyword: '%PRODUCTIVE_TIME_PERCENT%', get: ({ state }) => {
      const productiveTimeMinutes = state.inProgress.filter(id => state.items[id].isProductive).reduce((acc, id) => acc + state.items[id].spentTimeMinutes, 0);
      const allTime = 6.5;
      const percent = Math.floor(productiveTimeMinutes * 100 / (allTime * 60));
      return percent;
    }
  },
];

export default keywords;