import { renderBlock } from './lib.js';
export function renderSearchFormBlock() {
    const dateBeautifier = (date) => {
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
    const search = (data) => {
        console.log(data);
    };
    const getFormData = () => {
        const formData = {
            checkIn: document.forms['search'].checkin.value,
            checkOut: document.forms['search'].checkout.value,
            maxPrice: document.forms['search'].price.value // и я не нашёл ничего лучше как подавить неподконтрольные мне библиотеки через "suppressImplicitAnyIndexErrors": true
        };
        search(formData);
    };
    renderBlock('search-form-block', `
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
    `);
    const button = document.querySelector('button');
    if (button != null) {
        button.onclick = getFormData;
    }
    else {
        console.log('Something went wrong');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBVSxFQUFVLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztJQUMzRSxDQUFDLENBQUM7SUFFRixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLE1BQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtJQUVqRyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0QyxNQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxvREFBb0Q7SUFFckcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsTUFBTSxlQUFlLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUZBQWlGO0lBRW5JLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyw4RUFBOEU7SUFFdEksTUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFvQixFQUFRLEVBQUU7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRyxHQUFTLEVBQUU7UUFDN0IsTUFBTSxRQUFRLEdBQW1CO1lBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQy9DLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2pELFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsc0hBQXNIO1NBQ3RLLENBQUM7UUFDRixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBRUYsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxjQUFjLFVBQVUsYUFBYSxVQUFVLGFBQWE7Ozs7NERBSTNELGVBQWUsVUFBVSxhQUFhLFVBQVUsYUFBYTs7Ozs7Ozs7Ozs7O0tBWXBILENBQ0YsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0tBQzlCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7S0FDckM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XHJcbmltcG9ydCB7IHNlYXJjaEZvcm1EYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soKTogdm9pZCB7XHJcbiAgY29uc3QgZGF0ZUJlYXV0aWZpZXIgPSAoZGF0ZTogRGF0ZSk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0pTT04oKS5zbGljZSgwLCAxMCk7IC8vINCU0LXQu9Cw0LXRgiDQutGA0LDRgdC40LLQviDQsiDRhNC+0YDQvNCw0YLQtSDQk9CT0JPQky3QnNCcLdCU0JRcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgY2hlY2tJbk91dE1pbiA9IGRhdGVCZWF1dGlmaWVyKHRvZGF5KTsgLy8g0KHQtdCz0L7QtNC90Y8gLSDQvNC40L3QuNC80LDQu9GM0L3QsNGPINC00LDRgtCwLCDQutC+0YLQvtGA0YPRjiDQvNC+0LbQvdC+INCy0YvQsdGA0LDRgtGMXHJcbiAgXHJcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XHJcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcclxuICBjb25zdCBjaGVja0luRGVmYXVsdCA9IGRhdGVCZWF1dGlmaWVyKHRvbW9ycm93KTsgLy8g0KHQu9C10LTRg9GO0YnQuNC5INC00LXQvdGMINC+0YIg0YLQtdC60YPRidC10Lkg0LTQsNGC0YsgLSDQtNC10YTQvtC70YIg0LfQsNGB0LXQu9C10L3QuNGPXHJcblxyXG4gIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMyk7XHJcbiAgY29uc3QgY2hlY2tPdXREZWZhdWx0ID0gZGF0ZUJlYXV0aWZpZXIodG9tb3Jyb3cpOyAvLyDQp9C10YDQtdC3IDIg0LTQvdGPINC+0YIg0LTQsNGC0Ysg0LfQsNGB0LXQu9C10L3QuNGPICjRh9C10YDQtdC3IDMg0LTQvdGPINC+0YIg0YLQtdC60YPRidC10Lkg0LTQsNGC0YspIC0g0LTQtdGE0L7Qu9GCINCy0YvRgdC10LvQtdC90LjRj1xyXG5cclxuICBjb25zdCBuZXh0TW9udGhMYXN0RGF5ID0gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSArIDIsIDApO1xyXG4gIGNvbnN0IGNoZWNrSW5PdXRNYXggPSBkYXRlQmVhdXRpZmllcihuZXh0TW9udGhMYXN0RGF5KTsgLy8g0J/QvtGB0LvQtdC00L3QuNC5INC00LXQvdGMINGB0LvQtdC00YPRjtGJ0LXQs9C+INC80LXRgdGP0YbQsCAtINC80LDQutGB0LjQvNCw0LvRjNC90LDRjyDQtNCw0YLQsCwg0LrQvtGC0L7RgNGD0Y4g0LzQvtC20L3QviDQstGL0LHRgNCw0YLRjFxyXG5cclxuICBjb25zdCBzZWFyY2ggPSAoZGF0YTogc2VhcmNoRm9ybURhdGEpOiB2b2lkID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEZvcm1EYXRhID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGE6IHNlYXJjaEZvcm1EYXRhID0ge1xyXG4gICAgICBjaGVja0luOiBkb2N1bWVudC5mb3Jtc1snc2VhcmNoJ10uY2hlY2tpbi52YWx1ZSwgLy8g0YLRg9GCINCx0YvQu9C4INC+0YjQuNCx0LrQuCDQuNC3LdC30LAg0YLQvtCz0L4g0YfRgtC+INCyINC60LLQsNC00YDQsNGC0L3Ri9GFINGB0LrQvtCx0LrQsNGFINC90LUg0YfQuNGB0LvQvixcclxuICAgICAgY2hlY2tPdXQ6IGRvY3VtZW50LmZvcm1zWydzZWFyY2gnXS5jaGVja291dC52YWx1ZSwgLy8g0Lgg0YLQuNC/0LAg0YDQtdC30YPQu9GM0YLQsNGCINC80L7QttC10YIg0LHRi9GC0YwgYW55LFxyXG4gICAgICBtYXhQcmljZTogZG9jdW1lbnQuZm9ybXNbJ3NlYXJjaCddLnByaWNlLnZhbHVlIC8vINC4INGPINC90LUg0L3QsNGI0ZHQuyDQvdC40YfQtdCz0L4g0LvRg9GH0YjQtSDQutCw0Log0L/QvtC00LDQstC40YLRjCDQvdC10L/QvtC00LrQvtC90YLRgNC+0LvRjNC90YvQtSDQvNC90LUg0LHQuNCx0LvQuNC+0YLQtdC60Lgg0YfQtdGA0LXQtyBcInN1cHByZXNzSW1wbGljaXRBbnlJbmRleEVycm9yc1wiOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgc2VhcmNoKGZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICByZW5kZXJCbG9jayhcclxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXHJcbiAgICBgXHJcbiAgICA8Zm9ybSBuYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cclxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj4tLSE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tJbkRlZmF1bHR9XCIgbWluPVwiJHtjaGVja0luT3V0TWlufVwiIG1heD1cIiR7Y2hlY2tJbk91dE1heH1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1vdXQtZGF0ZVwiPtCU0LDRgtCwINCy0YvQtdC30LTQsDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tPdXREZWZhdWx0fVwiIG1pbj1cIiR7Y2hlY2tJbk91dE1pbn1cIiBtYXg9XCIke2NoZWNrSW5PdXRNYXh9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj48YnV0dG9uPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9mb3JtPlxyXG4gICAgYFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gIGlmIChidXR0b24gIT0gbnVsbCkge1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBnZXRGb3JtRGF0YTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==