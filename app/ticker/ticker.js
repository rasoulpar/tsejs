const setting = require('../../setting');
const url_helper = require('../helper/url');
const market = require('../helper/market');
const axios = require('axios');
const cheerio = require('cheerio');
const symbols = require('../../symbols_name.json');
String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
const ticker = {
    isin: 0,
    download_fast_info: async ticker => {
        // this.isin = symbols[ticker];
        this.isin = ticker;
        if (typeof this.isin == "undefined") {
            console.log(`${ticker} isin is not defined.`);
            return -1;
        }

        let url = url_helper.prepare(setting.urls.ticker.inst_info_fast_url, '@@ticker_isin', this.isin.ticker);
        const response = await axios.get(url);
        const data = response.data;
        
        let all_data = data.split(';');
        // let related_companies = all_data[5].split(',');
        let price_data = all_data[0].split(',');

        // parsing last trade date
        let last_price_date_string = price_data[12].splice(6, 0, "-").splice(4, 0, "-");
        last_price_date_string += ' ';
        last_price_date_string += price_data[13].splice(4, 0, ":").splice(2, 0, ":");
        let last_price_date = (new Date(last_price_date_string)).getTime();
        last_price_date -= (new Date()).getTimezoneOffset() * 60000;

        // parsing qoutes
        let qoutes = {
            "buy": new Array(),
            "sell": new Array()
        }
        let qoutes_data = all_data[2].split(',');
        for(let i = 0; i < qoutes_data.length - 1; i++) {
            let row = qoutes_data[i].split('@');
            if(row[2] == 'c') row[2] = 'مذاکره';
            if(row[3] == 'c') row[3] = 'مذاکره';
            let buy = {
                'count': parseInt(row[0]),
                'volume': parseInt(row[1]),
                'price': parseInt(row[2]),
            }
            let sell = {
                'count': parseInt(row[5]),
                'volume': parseInt(row[4]),
                'price': parseInt(row[3]),
            }
            qoutes.buy.push(buy);
            qoutes.sell.push(sell);
        }

        // parsing individual or legal
        let individual_or_legal = all_data[4];
        let individual_or_legal_obj = {
            individual: {
                buy: {
                    volume: null,
                    count: null
                },
                sell: {
                    volume: null,
                    count: null
                }
            },
            legal: {
                buy: {
                    volume: null,
                    count: null
                },
                sell: {
                    volume: null,
                    count: null
                }
            }
        }
        if(individual_or_legal.length != 0) {
            individual_or_legal_obj.individual.buy.volume = parseInt(individual_or_legal[0]);
            individual_or_legal_obj.individual.sell.volume = parseInt(individual_or_legal[3]);
            individual_or_legal_obj.legal.buy.volume = parseInt(individual_or_legal[1]);
            individual_or_legal_obj.legal.sell.volume = parseInt(individual_or_legal[4]);

            individual_or_legal_obj.individual.buy.count = parseInt(individual_or_legal[5]);
            individual_or_legal_obj.individual.sell.count = parseInt(individual_or_legal[8]);
            individual_or_legal_obj.legal.buy.count = parseInt(individual_or_legal[6]);
            individual_or_legal_obj.legal.sell.count = parseInt(individual_or_legal[9]);
        }

        //parsing prices
        let price = {
            yesterday: parseInt(price_data[5]),
            status: market.get_ticker_status(price_data[1]),
            last_trade: parseInt(price_data[2]),
            close: parseInt(price_data[3]),
            first: parseInt(price_data[4]),
            high: parseInt(price_data[6]),
            low: parseInt(price_data[7]),
            trades_count: parseInt(price_data[8]),
            trades_volume: parseInt(price_data[9]),
            trades_value: parseInt(price_data[10]),
        }

        let info_fast = {
            "price": price,
            "individual_or_legal": individual_or_legal_obj,
            "qoutes": qoutes,
            "last_trade_date": last_price_date
        }
        return info_fast;

    }
}

exports = module.exports = ticker;