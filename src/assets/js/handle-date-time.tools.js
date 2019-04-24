/**
 * description: [处理日期时间的工具方法]
 * author:      Paddy
 * time:        2019-04-21 11:58:02
 */
export default {
    weekMap: {
        0: {
            zh: '周日',
            en: 'Sun',
            key: 'sunday'
        },
        1: {
            zh: '周一',
            en: 'Mon',
            key: 'monday'
        },
        2: {
            zh: '周二',
            en: 'Tue',
            key: 'tuesday'
        },
        3: {
            zh: '周三',
            en: 'Wed',
            key: 'wednesday'
        },
        4: {
            zh: '周四',
            en: 'Thur',
            key: 'thursday'
        },
        5: {
            zh: '周五',
            en: 'Fri',
            key: 'friday'
        },
        6: {
            zh: '周六',
            en: 'Sat',
            key: 'saturday'
        }
    },
    /**
     * [getTime 获取当前或指定时间]
     * @param  {String} time    [时间] HH:MM
     * @param  {Number} minutes [增加的分钟数]
     * @return {String}         [增加后的时间] HH:MM
     */
    getTime: function(time, minutes){
        return this.getDateTime(time ? '2019/01/18 ' + time : '', 0, 0, minutes).substr(11, 5);
    },
    /**
     * [getDateTime 获取当前或指定时间的日期时间]
     * @param  {[Date|String]} date    日期
     * @param  {[Number]}      day     增加指定的天数
     * @param  {[Number]}      hours   增加指定的小时数
     * @param  {[Number]}      minutes 增加指定的分钟数
     * @return YYYY-MM-DD hh:mm
     */
    getDateTime: function(date, day, hours, minutes){
        date = this._getDateTime_(date);
        if(day){
            date.setDate(date.getDate() + Number(day));
        }
        if(hours){
            date.setHours(date.getHours() + Number(hours));
        }
        if(minutes){
            date.setMinutes(date.getMinutes() + Number(minutes));
        }
        return date.getFullYear() + '-' + this.fillZero(date.getMonth() + 1) + '-' + this.fillZero(date.getDate()) +
                ' ' + this.fillZero(date.getHours()) + ':' + this.fillZero(date.getMinutes());
    },
    _getDateTime_: function(date){
        date = date || new Date();
        return typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date;
    },
    /**
     * [getMonthEnd 根据传入年月 返回本月份的最后一天]
     * @param  {[Number]} month [月份]  (选填)  默认 当前月
     * @param  {[Number]} year  [年份]  (选填)  默认 当前年
     * @return {[Number]}       [本月最后一天]
     */
    getMonthEnd: function(month, year){
        var currentDate = new Date()
            , currentDay = 28;

        currentDate.setDate(1);
        if(month === undefined){
            month = currentDate.getMonth() + 1;
        }else {
            currentDate.setMonth(month - 1);
        }
        if(year !== undefined){
            currentDate.setFullYear(year);
        }
        while(month === currentDate.getMonth() + 1){
            currentDate.setDate(++currentDay);
        }

        return currentDay - 1;
    },

    /**
     * [getMonthZone 获取月份的开始和结束日期]
     * @param  {[String|Date]}  date  [指定一个日期]  (选填)  默认 当天
     * @param  {[Number]}       month [增加/减少的月份数]  (选填)
     * @return {Object}               [返回开始结束日期]
     */
    getMonthZone: function(date, month){
        var currentDate = this._getDateTime_(date);
        var y, m;
        if(month && typeof month === 'number'){
            currentDate.setMonth(currentDate.getMonth() + month);
        }
        y = currentDate.getFullYear();
        m = currentDate.getMonth();
        return {
            start: y + '-' + this.fillZero(m + 1) + '-01',
            end: y + '-' + this.fillZero(m + 1) + '-' + this.fillZero(this.getMonthEnd(m + 1, y))
        };
    },
    // 生成一个从 x1 到 x2 的连续数字 数组
    buildArray: function(x1, x2){
        var arr = [];
        for(var i = x1; i <= x2; i++) {
            arr.push(i);
        }
        return arr;
    },
    /**
     * [buildDatePoints 根据开始日期和结束日期生成 日期＋星期 点 数组]
     * @param  {String date} start [开始日期]
     * @param  {String date} end   [结束日期]
     * @return {Array}             [日期＋星期 点 数组]
     */
    buildDatePoints: function(start, end){

        var that = this;
        var datePoints = [];
        var currentTime = (new Date(start.replace(/-/g, '/') + ' 00:00:00')).getTime();
        var endTime = (new Date(end.replace(/-/g, '/') + ' 00:00:00')).getTime();
        var y, m, d, w, currentDate;

        while(endTime >= currentTime){
            currentDate = new Date(currentTime);
            currentTime = currentDate.getTime();
            currentTime += 86400000;
            y = currentDate.getFullYear();
            m = currentDate.getMonth() + 1;
            d = currentDate.getDate();
            w = currentDate.getDay();


            datePoints.push({
                date: y + '-' + that.fillZero(m) + '-' + that.fillZero(d),
                week: w,  // JS week
                day: d
            });
        }
        return datePoints;
    },
    // 补 0
    fillZero: function(n){
        return n > 9 ? n : '0' + n;
    }
};

