import { renderBlock } from './lib.js';
import { searchFormData } from './interfaces.js';

export function renderSearchFormBlock(): void {
  const dateBeautifier = (date: Date): string => {
    return date.toJSON().slice(0, 10); // Делает красиво в формате ГГГГ-ММ-ДД
  };

  const today = new Date();
  const checkInOutMin = dateBeautifier(today); // Сегодня - минимальная дата, которую можно выбрать
  
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const checkInDefault = dateBeautifier(tomorrow); // Следующий день от текущей даты - дефолт заселения

  tomorrow.setDate(today.getDate() + 3);
  const checkOutDefault = dateBeautifier(tomorrow); // Через 2 дня от даты заселения (через 3 дня от текущей даты) - дефолт выселения

  const nextMonthLastDay = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  const checkInOutMax = dateBeautifier(nextMonthLastDay); // Последний день следующего месяца - максимальная дата, которую можно выбрать

  const search = (data: searchFormData): void => {
    console.log(data);
  };

  const getFormData = (): void => {
    const formData: searchFormData = {
      checkIn: document.forms['search'].checkin.value, // тут были ошибки из-за того что в квадратных скобках не число,
      checkOut: document.forms['search'].checkout.value, // и типа результат может быть any,
      maxPrice: document.forms['search'].price.value // и я не нашёл ничего лучше как подавить неподконтрольные мне библиотеки через "suppressImplicitAnyIndexErrors": true
    };
    search(formData);
  };

  renderBlock(
    'search-form-block',
    `
    <form name="search">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDefault}" min="${checkInOutMin}" max="${checkInOutMax}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDefault}" min="${checkInOutMin}" max="${checkInOutMax}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  const button = document.querySelector('button');
  if (button != null) {
    button.onclick = getFormData;
  } else {
    console.log('Something went wrong');
  }
}
