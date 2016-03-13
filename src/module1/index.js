function splitIntoThree(coin) {
	return Math.floor(coin / 2) + 
			Math.floor(coin / 3) + 
			Math.floor(coin / 4);
}

function exchange(coin) {
	var splitIntoThreeValue = splitIntoThree(coin);
	
	if (splitIntoThreeValue > coin) {
		return splitIntoThreeValue;
	}

	return coin;
}


module.exports = {
	exchange: exchange
};
