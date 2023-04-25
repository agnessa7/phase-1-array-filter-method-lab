// const findMatching = (array, string) => {
//     const returnedDrivers = []
//     for (const drivers of array) {
//         if (string === 'Bobby') {
//             return returnedDrivers.push(drivers.filter)}}}
const findMatching = (drivers, string) => {
    return drivers.filter(function(driver){
        return driver.toLowerCase() === string.toLowerCase(); 
    });

}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().substring(0, string.length) === string.toLowerCase();
    });

}

const matchName = (drivers, string) => {
    return drivers.filter(function(driver) {
        return driver.name === string;
    });

}

