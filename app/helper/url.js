const url = {
    prepare: (url, url_params, url_values) => {
        if(typeof url_params == "object") {
            if(url_params.length != url_values.length) {
                console.log(`argument length mismatch. parameters length: ${url_params.length}, values length: ${url_values.length}`);
                return -1;
            }
        
            for(let i = 0; i < url_params.length; i++) {
                url = url.replace(url_params[i], url_values[i]);
            }
        }
        else {
            url = url.replace(url_params, url_values);
        }
        
        return url;
    }
}

module.exports = url;
