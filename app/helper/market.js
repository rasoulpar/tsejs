const market = {
    get_ticker_status: status_key => {
        let status = '';
        switch (status_key) {
            case "I ":
                status = "ممنوع";
                break;
            case "A ":
                status = "مجاز";
                break;
            case "AG":
                status = "مجاز-مسدود";
                break;
            case "AS":
                status = "مجاز-متوقف";
                break;
            case "AR":
                status = "مجاز-محفوظ";
                break;
            case "IG":
                status = "ممنوع-مسدود";
                break;
            case "IS":
                status = "ممنوع-متوقف";
                break;
            case "IR":
                status = "ممنوع-محفوظ";
                break;
            default:
                status = "";
                break;
        }
        return status;
    }
}


exports = module.exports = market;