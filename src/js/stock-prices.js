/* eslint-disable no-console */
function initStockBlock() {
  let stock = {
    close: '',
    currency: '',
    differenceAmount: 0,
    differencePercentage: '',
    changeClass: '',
  };

  function loadStock(timeSeriesObj) {
    let timeSeries = Object.keys(timeSeriesObj).map((key) => {
      return {
        key,
        metadata: timeSeriesObj[key],
      };
    });

    let currentDay = timeSeries.length > 0 ? timeSeries[0] : null;
    let previousDay = timeSeries.length > 0 ? timeSeries[1] : null;

    if (currentDay && previousDay) {
      if (currentDay && currentDay.metadata) {
        let currentDayClose = parseFloat(currentDay.metadata['4. close']).toFixed(2);

        let previousDayClose = parseFloat(previousDay.metadata['4. close']).toFixed(2);

        let differenceAmount = (currentDayClose - previousDayClose).toFixed(2);

        let differencePercentage = (differenceAmount / previousDayClose * 100).toFixed(2);

        stock = {
          close: currentDayClose,
          differenceAmount,
          differencePercentage,
          changeClass: differenceAmount < 0 ? 'down' : 'up',
          currency: 'USD',
        };
      }
    }
  }

  function getMarkup() {
    return `
      <div class="header__topside container-max">
        <span>
          <b>NYSE: BTI$${stock.close}</b> (${stock.differencePercentage}%)
        </span>
      </div>
    `;
  }

  function dataReady() {
    const stockBlockElement = '.header__topside.container-max';
    let renderedHtml = getMarkup();

    $(stockBlockElement).replaceWith(renderedHtml);
  }

  function getData() {
    // eslint-disable-next-line new-cap
    let dfd = $.Deferred();
    let requestUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact&datatype=json&symbol=BTI&apikey=XIQSEXDRNA3NMJIT';

    $.getJSON(requestUrl, () => {})
      .done((response) => {
        if (response.Note) {
          let err = response.Note;

          console.log(`Stock Request Failed: ${err}`);

          dfd.reject('');
        } else {
          let timeSeriesObj = response['Time Series (Daily)'];

          loadStock(timeSeriesObj);

          dfd.resolve('');
        }
      })

      .fail((jqxhr, textStatus, error) => {
        let err = `${textStatus}, ${error}`;

        console.log(`Stock Request Failed: ${err}`);

        dfd.reject('');
      });

    return dfd.promise();
  }

  function init() {
    $.when(getData())
      .fail(() => {
        console.log('error in stock-block');
      })

      .done(() => {
        dataReady();
      });
  }

  init();
}

initStockBlock();
