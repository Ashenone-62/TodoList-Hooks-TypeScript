const  formatDate = (timeStamp: number): string => {
    const date:Date = new Date(timeStamp);

    const y: number = date.getFullYear(),
          m: number = date.getMonth() + 1,
          d: number = date.getDate(),
          h: number | string = _addZero(date.getHours()),
          i: number | string = _addZero(date.getMinutes()),
          s: number | string = _addZero(date.getSeconds())

    return `${y}年${m}月${d}日 ${h}:${i}:${s}`;
}

const _addZero = (value: number): string | number => {
    
    return value < 10 ? ("0" + value) : value;
}

export {
    formatDate
}