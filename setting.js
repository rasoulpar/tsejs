const setting = {
    "urls": {
        "ticker": {
            "inst_info_fast_url": "http://www.tsetmc.com/tsev2/data/instinfofast.aspx?i=@@ticker_isin&c=27",
            // در یک نگاه
            "instant_info_url": "http://www.tsetmc.com/tsev2/data/instinfodata.aspx?i=@@ticker_isin&c=13+",
            "intra_day_price": "http://www.tsetmc.com/tsev2/chart/data/IntraDayPrice.aspx?i=@@ticker_isin",
            "regulator_messages": "http://www.tsetmc.com/Loader.aspx?Partree=15131W&i=@@ticker_isin",
            "instant_trade_history": "http://members.tsetmc.com/tsev2/data/InstTradeHistory.aspx?i=@@ticker_isin&Top=@@top&A=0",
            "status_change": "http://www.tsetmc.com/Loader.aspx?Partree=15131L&i=@@ticker_isin",
            "identity": "http://www.tsetmc.com/Loader.aspx?Partree=15131M&i=@@ticker_isin",
            // ticker e.g. فولاد
            "board_of_directors": "http://www.tsetmc.com/tsev2/data/CodalContent.aspx?s=@@ticker&r=12",
            // client type is legal or individual
            "client_type": "http://www.tsetmc.com/tsev2/data/clienttype.aspx?i=@@",
            //@@company_code_12 is کد 12 رقمی شرکت
            "stock_holders": "http://www.tsetmc.com/Loader.aspx?Partree=15131T&c=@@company_code_12",
            "eps": "http://www.tsetmc.com/Loader.aspx?Partree=15131U&c=@@company_code_12",
            "dps": "http://www.tsetmc.com/tsev2/data/DPSData.aspx?s=@@ticker",
            // آمارها
            "statistics": "http://www.tsetmc.com/tsev2/data/instValue.aspx?i=@@ticker_isin&t=i",
            "introduction": "http://www.tsetmc.com/Loader.aspx?Partree=15131V&s=@@ticker",
            "balanced_sheet": "http://www.tsetmc.com/tsev2/data/CodalContent.aspx?s=@@ticker&r=6&st=6&pi=0",
            "income_statement": "http://www.tsetmc.com/tsev2/data/CodalContent.aspx?s=@@ticker&r=6&st=6&pi=1",
            "production_and_sells": "http://www.tsetmc.com/tsev2/data/CodalContent.aspx?s=@@ticker&r=6&st=6&pi=2",
            "portfolio": "http://www.tsetmc.com/tsev2/data/CodalContent.aspx?s=@@ticker&r=6&st=8&pi=-1",
            // میتوان به عنوان قیمت تعدیل شده استفاده شود
            "trades_calendar": "http://www.tsetmc.com/tsev2/data/InstCalendar.aspx?i=@@ticker_isin",
            "price_adjustments": "http://www.tsetmc.com/Loader.aspx?Partree=15131G&i=@@ticker_isin",
            "capital_raising": "http://www.tsetmc.com/Loader.aspx?Partree=15131H&i=@@ticker_isin",
            "trade_price_and_volume": "http://www.tsetmc.com/tsev2/data/TradeOverview.aspx?i=@@ticker_isin",
            "trade_details": "http://www.tsetmc.com/tsev2/data/TradeDetail.aspx?i=@@ticker_isin"
        }
    }
}

exports = module.exports = setting;