import { renderBlock } from './lib.js';
export function renderSearchStubBlock() {
    renderBlock('search-results-block', `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    renderBlock('search-results-block', `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `);
}
export function renderSearchResultsBlock() {
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLXJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLFdBQVcsQ0FDVCxzQkFBc0IsRUFDdEI7Ozs7O0tBS0MsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSw2QkFBNkIsQ0FBRSxhQUFxQjtJQUNsRSxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7V0FHTyxhQUFhOztLQUVuQixDQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxXQUFXLENBQ1Qsc0JBQXNCLEVBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXdEQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoU3R1YkJsb2NrICgpIHtcclxuICByZW5kZXJCbG9jayhcclxuICAgICdzZWFyY2gtcmVzdWx0cy1ibG9jaycsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmVmb3JlLXJlc3VsdHMtYmxvY2tcIj5cclxuICAgICAgPGltZyBzcmM9XCJpbWcvc3RhcnQtc2VhcmNoLnBuZ1wiIC8+XHJcbiAgICAgIDxwPtCn0YLQvtCx0Ysg0L3QsNGH0LDRgtGMINC/0L7QuNGB0LosINC30LDQv9C+0LvQvdC40YLQtSDRhNC+0YDQvNGDINC4Jm5ic3A70L3QsNC20LzQuNGC0LUgXCLQndCw0LnRgtC4XCI8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRW1wdHlPckVycm9yU2VhcmNoQmxvY2sgKHJlYXNvbk1lc3NhZ2U6IHN0cmluZykge1xyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcclxuICAgIGBcclxuICAgIDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzLWJsb2NrXCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiaW1nL25vLXJlc3VsdHMucG5nXCIgLz5cclxuICAgICAgPHA+JHtyZWFzb25NZXNzYWdlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hSZXN1bHRzQmxvY2sgKCkge1xyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3NlYXJjaC1yZXN1bHRzLWJsb2NrJyxcclxuICAgIGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cclxuICAgICAgICA8cD7QoNC10LfRg9C70YzRgtCw0YLRiyDQv9C+0LjRgdC60LA8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRzLWZpbHRlclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1maWx0ZXJcIj48L2k+INCh0L7RgNGC0LjRgNC+0LLQsNGC0Yw6PC9zcGFuPlxyXG4gICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD1cIlwiPtCh0L3QsNGH0LDQu9CwINC00LXRiNGR0LLRi9C1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPVwiXCI+0KHQvdCw0YfQsNC70LAg0LTQvtGA0L7Qs9C40LU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+0KHQvdCw0YfQsNC70LAg0LHQu9C40LbQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNsYXNzPVwicmVzdWx0cy1saXN0XCI+XHJcbiAgICAgIDxsaSBjbGFzcz1cInJlc3VsdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZhdm9yaXRlcyBhY3RpdmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWdcIiBzcmM9XCIuL2ltZy9yZXN1bHQtMS5wbmdcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgIDwvZGl2Plx0XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdWx0LWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8cD5ZQVJEIFJlc2lkZW5jZSBBcGFydC1ob3RlbDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+MTMwMDAmIzgzODE7PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAyLjXQutC8INC+0YIg0LLQsNGBPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZGVzY3JcIj7QmtC+0LzRhNC+0YDRgtC90YvQuSDQsNC/0LDRgNGCLdC+0YLQtdC70Ywg0LIg0YHQsNC80L7QvCDRgdC10YDQtNGG0LUg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRgNCz0LAuINCaINGD0YHQu9GD0LPQsNC8INCz0L7RgdGC0LXQuSDQvdC+0LzQtdGA0LAg0YEg0LLQuNC00L7QvCDQvdCwINCz0L7RgNC+0LQg0Lgg0LHQtdGB0L/Qu9Cw0YLQvdGL0LkgV2ktRmkuPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzPVwicmVzdWx0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmF2b3JpdGVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJyZXN1bHQtaW1nXCIgc3JjPVwiLi9pbWcvcmVzdWx0LTIucG5nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cdFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHA+QWt5YW4gU3QuUGV0ZXJzYnVyZzwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInByaWNlXCI+MTMwMDAmIzgzODE7PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdC1pbmZvLS1tYXBcIj48aSBjbGFzcz1cIm1hcC1pY29uXCI+PC9pPiAxLjHQutC8INC+0YIg0LLQsNGBPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZGVzY3JcIj7QntGC0LXQu9GMIEFreWFuIFN0LVBldGVyc2J1cmcg0YEg0LHQtdGB0L/Qu9Cw0YLQvdGL0LwgV2ktRmkg0L3QsCDQstGB0LXQuSDRgtC10YDRgNC40YLQvtGA0LjQuCDRgNCw0YHQv9C+0LvQvtC20LXQvSDQsiDQuNGB0YLQvtGA0LjRh9C10YHQutC+0Lwg0LfQtNCw0L3QuNC4INCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCz0LAuPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHQtaW5mby0tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+0JfQsNCx0YDQvtC90LjRgNC+0LLQsNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICBgXHJcbiAgKTtcclxufVxyXG4iXX0=