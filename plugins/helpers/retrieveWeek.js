export default ({ app }, inject) => {

    inject('getWeek', (fromDate) => {
        var sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
        var result = [new Date(sunday)];
        while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
            result.push(new Date(sunday));
        }
        return result;
    })

}

