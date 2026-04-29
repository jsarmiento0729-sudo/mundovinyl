import { reactive } from 'vue';

export const globalState = reactive({
  selectedCity: localStorage.getItem('mundovinyl_city') || '',
  customerName: localStorage.getItem('mundovinyl_name') || '',
  hasSelectedCityThisSession: false // Esto controla si ya preguntamos en ESTA carga de página
});
